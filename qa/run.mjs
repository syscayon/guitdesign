// Roda as verificações em todas as páginas, larguras e modos de movimento.
// Requer o servidor ativo (node server.mjs). Uso: node qa/run.mjs
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const pages = ['index', 'fivem', 'termos'];
for (const p of pages) writeFileSync(`_qa-${p}.html`, readFileSync(`${p}.html`, 'utf8').replace('</body>', '<script src="qa/checks.js"></script>\n</body>'));
let fails = 0;
try {
  for (const motion of ['normal', 'reduce']) for (const w of [1440, 1024, 390]) for (const p of pages) {
    const out = execFileSync('node', ['qa/cdp.mjs', `http://localhost:4321/_qa-${p}.html`, String(w), motion], { encoding: 'utf8' });
    for (const line of out.split('\n').filter(l => l.includes('FAIL'))) { fails++; console.log(`[${motion}] ${line}`); }
  }
} finally {
  for (const p of pages) rmSync(`_qa-${p}.html`, { force: true });
}
console.log(fails ? `${fails} falha(s)` : 'Tudo certo: nenhuma falha.');
process.exit(fails ? 1 : 0);
