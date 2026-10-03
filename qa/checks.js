
// Página temporária de QA: roda o site num iframe e exercita as interações principais.
const W = innerWidth;
const PAGE = location.pathname;
const wait = ms => new Promise(r => setTimeout(r, ms));
const log = (ok, msg) => console.log(`QA ${W} ${PAGE} ${ok ? 'OK  ' : 'FAIL'} ${msg}`);

const w = window, d = document;
addEventListener('error', e => log(false, 'erro JS: ' + e.message));
addEventListener('unhandledrejection', e => log(false, 'promessa rejeitada: ' + e.reason));
addEventListener('load', async () => {
  await wait(2500);

  // Rola até o fim em passos, como uma pessoa
  const max = d.documentElement.scrollHeight - w.innerHeight;
  for (let y = 0; y <= max + 400; y += 300) { w.scrollTo({ top: y, behavior: 'instant' }); w.dispatchEvent(new Event('scroll')); await wait(120); }
  await wait(1500);

  const pending = [...d.querySelectorAll('.reveal, .reveal-type, .work, .contact-title, .footer-giant')].filter(e => !e.classList.contains('in') && e.offsetParent !== null);
  log(pending.length === 0, `entradas reveladas (pendentes: ${pending.map(e => e.className).join(' | ') || 'nenhuma'})`);

  const words = d.querySelectorAll('.manifesto .w');
  if (words.length) log(d.querySelectorAll('.manifesto .w.lit').length === words.length, `manifesto aceso ${d.querySelectorAll('.manifesto .w.lit').length}/${words.length}`);

  log(d.querySelector('.to-top')?.classList.contains('on'), 'botão voltar ao topo visível no fim');
  const tt = d.querySelector('.to-top').getBoundingClientRect(), ft = d.querySelector('.footer small').getBoundingClientRect();
  log(tt.bottom <= ft.top || tt.top >= ft.bottom || tt.right < ft.left, 'botão voltar ao topo não cobre o rodapé');
  log(d.querySelector('.topbar').classList.contains('is-scrolled'), 'topo flutuante ao rolar');

  // Overflow horizontal (ignora o que está dentro de área recortada de propósito)
  const clipped = el => { for (let p = el.parentElement; p && p !== d.body; p = p.parentElement) { const o = getComputedStyle(p).overflowX; if (o === 'hidden' || o === 'clip') { const r = p.getBoundingClientRect(); if (r.right <= cw + 1 && r.left >= -1) return true; } } return false; };
  const sw = d.documentElement.scrollWidth, cw = d.documentElement.clientWidth;
  const wide = [...d.querySelectorAll('main *, header *, footer *')].filter(el => {
    const r = el.getBoundingClientRect();
    return r.width && (r.right > cw + 1 || r.left < -1) && !el.closest('.index-list button') && getComputedStyle(el).position !== 'fixed' && !clipped(el);
  }).slice(0, 6).map(el => `${el.tagName.toLowerCase()}.${el.className}`);
  log(sw <= cw && wide.length === 0, `sem overflow horizontal (scrollWidth ${sw}/${cw}; fora: ${wide.join(', ') || 'nenhum'})`);

  // Case
  const card = d.querySelector('[data-case]');
  if (card) {
    card.click(); await wait(1500);
    const dlg = d.querySelector('.case');
    log(dlg.open && dlg.querySelector('.case-title').textContent.length > 0 && dlg.querySelectorAll('.case-images img').length > 0, `case abre (${dlg.querySelector('.case-title').textContent}, ${dlg.querySelectorAll('.case-images img').length} imagens)`);
    const broken = [...dlg.querySelectorAll('.case-images img')].filter(i => i.complete && i.naturalWidth === 0);
    log(broken.length === 0, `imagens do case carregam (quebradas: ${broken.length})`);
    dlg.querySelector('.case-close').click(); await wait(1200);
    log(!dlg.open && d.body.style.overflow === '', 'case fecha e devolve a rolagem');
  }

  // Lightbox
  const piece = d.querySelector('[data-gallery] [data-src]');
  if (piece) {
    piece.click(); await wait(600);
    const lb = d.querySelector('.lightbox');
    const c1 = lb.querySelector('.lightbox-count').textContent;
    lb.querySelector('[data-step="1"]').click(); await wait(300);
    const c2 = lb.querySelector('.lightbox-count').textContent;
    log(lb.open && c1.startsWith('1 /') && c2.startsWith('2 /'), `lightbox abre e avança (${c1} → ${c2})`);
    lb.querySelector('.lightbox-close').click(); await wait(300);
    log(!lb.open && d.body.style.overflow === '', 'lightbox fecha e devolve a rolagem');
  }

  // Prévia dos logotipos
  const idx = d.querySelector('.index-list button');
  if (idx && W > 900) {
    idx.dispatchEvent(new PointerEvent('pointerenter'));
    await wait(100);
    log(d.querySelector('.preview').classList.contains('on') && d.querySelector('.preview img').src.includes(idx.dataset.src), 'prévia do logotipo aparece');
    idx.dispatchEvent(new PointerEvent('pointerleave'));
  }

  // Menu do celular
  const menu = d.querySelector('.menu-toggle');
  if (W <= 900) {
    const visible = getComputedStyle(menu).display !== 'none';
    menu.click(); await wait(200);
    const nav = d.querySelector('.topbar nav');
    log(visible && getComputedStyle(nav).display !== 'none' && menu.getAttribute('aria-expanded') === 'true', 'menu do celular abre');
    const same = nav.querySelector('a[href^="#"]'); if (same) same.click(); else d.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); await wait(200);
    log(getComputedStyle(nav).display === 'none', 'menu fecha ao escolher um link');
  } else {
    log(getComputedStyle(menu).display === 'none', 'botão Menu oculto no desktop');
  }

  // Tradução: em EN/ES não pode sobrar português (heurística por letras e palavras típicas)
  const lang = d.documentElement.lang;
  if (lang !== 'pt-BR') {
    const pt = /[ãõç]|\b(com|não|você|seu|sua|uma|das|pelo|pela|ao|aos|para o|para a)\b/i;
    const texts = [d.title, d.querySelector('meta[name="description"]')?.content || ''];
    const walk = d.createTreeWalker(d.body, NodeFilter.SHOW_TEXT);
    for (let n; (n = walk.nextNode());) if (!n.parentElement.closest('script')) texts.push(n.data);
    for (const el of d.querySelectorAll('[aria-label], [title], [alt]')) for (const a of ['aria-label', 'title', 'alt']) texts.push(el.getAttribute(a) || '');
    const left = [...new Set(texts.map(s => s.replace(/\s+/g, ' ').trim()).filter(s => pt.test(s)))];
    log(left.length === 0, `tradução ${lang} completa (sobrou: ${left.join(' | ') || 'nada'})`);
  }

  // Imagens quebradas na página
  const brokenImgs = [...d.images].filter(i => i.complete && i.naturalWidth === 0 && i.getAttribute('src'));
  log(brokenImgs.length === 0, `imagens da página carregam (quebradas: ${brokenImgs.map(i => i.getAttribute('src')).join(', ') || 'nenhuma'})`);
  console.log('QA FIM');
});