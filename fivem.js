// Interações exclusivas da página /fivem. O main.js cuida do que é comum (topo, luz, case, lightbox).
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

/* ---------- Hero: sol que segue o cursor e paralaxe da arte ---------- */
const hero = $('.fm-hero');
const art = $('.fm-hero-art img');
const sun = $('.fm-sun');
const target = { x: innerWidth * 0.72, y: innerHeight * 0.45 };
const sunPos = { ...target };
addEventListener('pointermove', e => { target.x = e.clientX; target.y = e.clientY; }, { passive: true });

(function tick() {
  const r = hero.getBoundingClientRect();
  if (r.bottom > 0) {
    sunPos.x = lerp(sunPos.x, target.x, reduced ? 1 : 0.07);
    sunPos.y = lerp(sunPos.y, target.y, reduced ? 1 : 0.07);
    sun.style.setProperty('--sx', sunPos.x - r.left + 'px');
    sun.style.setProperty('--sy', sunPos.y - r.top + 'px');
    if (fine && !reduced) {
      art.style.setProperty('--hx', (0.5 - target.x / innerWidth) * 24 + 'px');
      art.style.setProperty('--hy', (0.5 - target.y / innerHeight) * 16 + 'px');
    }
  }
  requestAnimationFrame(tick);
})();

/* ---------- HUD: nível de procurado e radar acompanham a rolagem ---------- */
const stars = $$('.wanted svg');
const radar = $('.radar');
const mission = $('.fm-mission');
let level = 0;
function hud() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? clamp(scrollY / max) : 0;
  radar.style.setProperty('--p', p);
  radar.classList.toggle('on', scrollY > innerHeight * 0.6 && mission.getBoundingClientRect().top > innerHeight * 0.75);
  const next = clamp(Math.ceil(p * 5), 1, 5);
  stars.forEach((s, i) => {
    s.classList.toggle('lit', i < next);
    if (i >= level && i < next && !reduced) {
      s.classList.remove('flash');
      void s.getBoundingClientRect();
      s.classList.add('flash');
    }
  });
  level = next;
}
addEventListener('scroll', () => requestAnimationFrame(hud), { passive: true });
addEventListener('resize', hud);
addEventListener('load', hud);
hud();

/* ---------- Galeria: abas do menu de pausa ---------- */
const tabs = $$('[role="tab"]');
function select(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    $('#' + t.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => select(tab));
  tab.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const next = tabs[(i + d + tabs.length) % tabs.length];
    select(next);
    next.focus();
  });
});

/* ---------- Planos: brilho que segue o cursor ---------- */
$$('.plan').forEach(plan => plan.addEventListener('pointermove', e => {
  const r = plan.getBoundingClientRect();
  plan.style.setProperty('--px', e.clientX - r.left + 'px');
  plan.style.setProperty('--py', e.clientY - r.top + 'px');
}));

/* ---------- Raspadinha: revela "Preço no Discord" ---------- */
$$('.scratch').forEach(card => {
  const canvas = $('canvas', card);
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const link = $('a', card);
  let drawing = false;
  let last = null;
  let strokes = 0;

  function paint() {
    const r = canvas.getBoundingClientRect();
    const dpr = devicePixelRatio || 1;
    canvas.width = r.width * dpr;
    canvas.height = r.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const g = ctx.createLinearGradient(0, 0, r.width, r.height);
    g.addColorStop(0, '#d9dce6');
    g.addColorStop(0.5, '#9298aa');
    g.addColorStop(1, '#eceef4');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, r.width, r.height);
    // ruído prateado
    for (let i = 0; i < r.width * r.height * 0.18; i++) {
      ctx.fillStyle = `rgba(${Math.random() < 0.5 ? '255,255,255' : '40,44,60'},${Math.random() * 0.22})`;
      ctx.fillRect(Math.random() * r.width, Math.random() * r.height, 1.4, 1.4);
    }
    ctx.fillStyle = '#2a2d3a';
    ctx.font = '600 15px "Bricolage Grotesque", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Raspe para revelar', r.width / 2, r.height / 2);
  }

  function reveal() { card.classList.add('done'); }

  function cleared() {
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let clear = 0;
    let total = 0;
    for (let i = 3; i < data.length; i += 64) { total++; if (data[i] === 0) clear++; }
    return clear / total;
  }

  function scratch(e) {
    const r = canvas.getBoundingClientRect();
    const p = { x: e.clientX - r.left, y: e.clientY - r.top };
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 36;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo((last || p).x, (last || p).y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    ctx.globalCompositeOperation = 'source-over';
    last = p;
    if (++strokes % 12 === 0 && cleared() > 0.45) reveal();
  }

  canvas.addEventListener('pointerdown', e => {
    drawing = true;
    last = null;
    card.classList.add('touched');
    canvas.setPointerCapture(e.pointerId);
    scratch(e);
  });
  canvas.addEventListener('pointermove', e => drawing && scratch(e));
  canvas.addEventListener('pointerup', () => {
    drawing = false;
    if (cleared() > 0.45) reveal();
  });
  // Teclado e leitores de tela: focar o link já revela
  link.addEventListener('focus', reveal);

  document.fonts.ready.then(paint);
  addEventListener('resize', () => card.classList.contains('done') || paint());
});
