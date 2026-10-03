// QA: controla o Edge pelo DevTools Protocol (tempo real, mouse real, largura exata).
// Uso: node _cdp.mjs <url> <largura> [reduce] [shots.json]
import { spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [url, width = '1440', motion = 'normal', shotsFile] = process.argv.slice(2);
const W = Number(width);
const profile = mkdtempSync(join(tmpdir(), 'qa-'));
const port = 9300 + Math.floor(Math.random() * 500);
const edge = spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', [
  '--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
  '--no-first-run', '--hide-scrollbars', '--window-size=1500,1000', 'about:blank'
]);
const sleep = ms => new Promise(r => setTimeout(r, ms));

let targets;
for (let i = 0; i < 50 && !targets; i++) {
  try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); } catch { await sleep(200); }
}
const ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r));
let id = 0;
const pending = new Map();
let done;
const finished = new Promise(r => (done = r));
ws.addEventListener('message', ({ data }) => {
  const m = JSON.parse(data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result ?? m.error); pending.delete(m.id); }
  if (m.method === 'Runtime.consoleAPICalled') {
    const text = m.params.args.map(a => a.value ?? a.description).join(' ');
    if (text.startsWith('QA')) console.log(text);
    if (text === 'QA FIM') done();
  }
  if (m.method === 'Runtime.exceptionThrown') console.log('QA FAIL exceção:', m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
});
const send = (method, params = {}) => new Promise(r => { pending.set(++id, r); ws.send(JSON.stringify({ id, method, params })); });

await send('Runtime.enable');
await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: W, height: 900, deviceScaleFactor: 1, mobile: W < 600 });
if (W < 600) await send('Emulation.setTouchEmulationEnabled', { enabled: true });
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: motion === 'reduce' ? 'reduce' : 'no-preference' }] });
await send('Page.navigate', { url });

if (shotsFile) {
  // Roteiro de capturas: [{ wait, scroll, move:[x,y], eval, file }]
  await sleep(500);
  for (const s of JSON.parse(readFileSync(shotsFile, 'utf8'))) {
    if (s.scroll !== undefined) await send('Runtime.evaluate', { expression: `scrollTo({top:${s.scroll},behavior:'instant'})` });
    if (s.eval) await send('Runtime.evaluate', { expression: s.eval, awaitPromise: true });
    if (s.move) await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: s.move[0], y: s.move[1] });
    await sleep(s.wait ?? 1200);
    const { data } = await send('Page.captureScreenshot', { format: 'png' });
    writeFileSync(s.file, Buffer.from(data, 'base64'));
    console.log('QA shot', s.file);
  }
} else {
  await Promise.race([finished, sleep(90000).then(() => console.log('QA FAIL tempo esgotado'))]);
}
ws.close();
edge.kill();
await sleep(300);
try { rmSync(profile, { recursive: true, force: true }); } catch {}
process.exit(0);
