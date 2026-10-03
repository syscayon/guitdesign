const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const root = document.documentElement;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

$$('[data-year]').forEach(el => (el.textContent = new Date().getFullYear()));

/* ---------- Divide títulos em palavras e letras ---------- */
function split(el) {
  let i = 0;
  const words = el.textContent.trim().split(/\s+/);
  if (!el.hasAttribute('aria-hidden')) el.setAttribute('aria-label', words.join(' '));
  el.textContent = '';
  words.forEach((word, w) => {
    const wrap = document.createElement('span');
    wrap.className = 'word';
    wrap.setAttribute('aria-hidden', 'true');
    for (const ch of word) {
      const c = document.createElement('span');
      c.className = 'char';
      c.style.setProperty('--i', i++);
      c.textContent = ch;
      wrap.append(c);
    }
    el.append(wrap);
    if (w < words.length - 1) el.append(' ');
  });
}
$$('[data-split]').forEach(split);

/* Letras que rolam no hover dos projetos */
$$('[data-roll]').forEach(el => {
  const text = el.textContent;
  el.setAttribute('aria-label', text);
  el.textContent = '';
  [...text].forEach((ch, i) => {
    const outer = document.createElement('span');
    outer.className = 'roll-char';
    outer.setAttribute('aria-hidden', 'true');
    const inner = document.createElement('span');
    inner.style.setProperty('--i', i);
    inner.textContent = ch === ' ' ? ' ' : ch;
    outer.append(inner);
    el.append(outer);
  });
});

/* ---------- Abertura ---------- */
const introKey = 'guit-intro:' + location.pathname;
const intro = !reduced && !sessionStorage.getItem(introKey);
if (!intro) document.body.classList.add('no-intro');
const start = performance.now();
Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1500))]).then(() => {
  const wait = intro ? Math.max(0, (Number(document.body.dataset.introMs) || 900) - (performance.now() - start)) : 0;
  setTimeout(() => {
    document.body.classList.add('is-ready');
    try { sessionStorage.setItem(introKey, '1'); } catch {}
  }, wait);
});

/* ---------- Ponteiro: luz, brilho do hero e letras iluminadas ---------- */
const pointer = { x: innerWidth * 0.3, y: innerHeight * 0.6 };
const glow = { x: pointer.x, y: pointer.y };
const starPos = { x: 0, y: 0 };
const cursorPos = { x: -200, y: -200 };
const light = $('.light');
let active = 90; // quadros restantes de animação; renovado por movimento ou rolagem
const wake = () => (active = 90);
addEventListener('scroll', wake, { passive: true });
const previewPos = { x: -400, y: -400, vx: 0 };
let pointerMoved = false;

addEventListener('pointermove', e => {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  pointerMoved = true;
  wake();
}, { passive: true });

const heroChars = $$('.poster .char');
const heroStar = $('.hero-star');
const heroGlow = $('.hero-glow');
const hero = $('.hero');
const cursor = $('.cursor');
const preview = $('.preview');

function frame(t) {
  // Em telas de toque, a luz passeia sozinha pelo pôster
  const drifting = !fine && !reduced && !pointerMoved;
  if (drifting) {
    pointer.x = innerWidth * (0.5 + 0.35 * Math.sin(t / 2400));
    pointer.y = innerHeight * (0.55 + 0.2 * Math.cos(t / 1900));
  } else if (active-- <= 0 && !(hero && scrollY < hero.offsetHeight)) {
    requestAnimationFrame(frame);
    return;
  }
  light?.style.setProperty('--mx', pointer.x + 'px');
  light?.style.setProperty('--my', pointer.y + 'px');
  const tb = topbar.getBoundingClientRect();
  topbar.style.setProperty('--tx', pointer.x - tb.left + 'px');
  topbar.style.setProperty('--ty', pointer.y - tb.top + 'px');

  const heroRect = hero && heroGlow ? hero.getBoundingClientRect() : null;
  if (heroRect && heroRect.bottom > 0) {
    glow.x = lerp(glow.x, pointer.x, reduced ? 1 : 0.06);
    glow.y = lerp(glow.y, pointer.y, reduced ? 1 : 0.06);
    heroGlow.style.setProperty('--gx', glow.x - heroRect.left + 'px');
    heroGlow.style.setProperty('--gy', glow.y - heroRect.top + 'px');
    for (const c of heroChars) {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--lx', pointer.x - r.left + 'px');
      c.style.setProperty('--ly', pointer.y - r.top + 'px');
    }
    if (!reduced && heroStar) {
      // Centro de repouso da estrela (desconta o deslocamento atual para não realimentar)
      const s = heroStar.getBoundingClientRect();
      const cx = s.left + s.width / 2 - starPos.x;
      const cy = s.top + s.height / 2 - starPos.y;
      starPos.x = lerp(starPos.x, (pointer.x - cx) * 0.035, 0.1);
      starPos.y = lerp(starPos.y, (pointer.y - cy) * 0.035, 0.1);
      heroStar.style.setProperty('--sx', starPos.x + 'px');
      heroStar.style.setProperty('--sy', starPos.y + 'px');
    }
  }

  if (fine && cursor) {
    cursorPos.x = lerp(cursorPos.x, pointer.x, 0.22);
    cursorPos.y = lerp(cursorPos.y, pointer.y, 0.22);
    cursor.style.setProperty('--cx', cursorPos.x + 'px');
    cursor.style.setProperty('--cy', cursorPos.y + 'px');

  }
  if (fine && preview) {
    const nx = lerp(previewPos.x, pointer.x, 0.14);
    previewPos.vx = lerp(previewPos.vx, nx - previewPos.x, 0.2);
    previewPos.x = nx;
    previewPos.y = lerp(previewPos.y, pointer.y, 0.14);
    preview.style.setProperty('--vx', previewPos.x + 'px');
    preview.style.setProperty('--vy', previewPos.y + 'px');
    preview.style.setProperty('--vr', reduced ? '0deg' : clamp(previewPos.vx * 0.6, -12, 12) + 'deg');
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ---------- Rolagem: topo, estrelas, parallax e manifesto ---------- */
const topbar = $('.topbar');
const footer = $('.footer');
const menuBtn = $('.menu-toggle');
const setMenu = open => {
  topbar.classList.toggle('is-open', open);
  menuBtn?.setAttribute('aria-expanded', open);
};
menuBtn?.addEventListener('click', () => setMenu(!topbar.classList.contains('is-open')));
$$('.topbar nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
addEventListener('keydown', e => {
  if (e.key === 'Escape' && topbar.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
});
const toTop = document.createElement('button');
toTop.className = 'to-top';
toTop.textContent = '↑';
toTop.setAttribute('aria-label', 'Voltar ao topo');
toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));
document.body.append(toTop);
const stars = $$('.hero-star, .works-star');
const cols = $$('.social-col');
const manifesto = $('[data-words]');
if (manifesto) manifesto.innerHTML = manifesto.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
const words = manifesto ? $$('.w', manifesto) : [];

function onScroll() {
  const y = scrollY;
  topbar.classList.toggle('is-scrolled', y > 40);
  toTop.classList.toggle('on', y > innerHeight * 0.8);
  // Sobe acima do rodapé para não cobrir os links
  const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;
  toTop.style.bottom = Math.max(24, innerHeight - footerTop + 24) + 'px';

  if (!reduced) {
    stars.forEach(s => s.style.setProperty('--rot', y * 0.12 + 'deg'));
    if (innerWidth > 900) {
      for (const col of cols) {
        const r = col.parentElement.getBoundingClientRect();
        const offset = (r.top + r.height / 2 - innerHeight / 2) * parseFloat(col.dataset.speed);
        col.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    } else cols.forEach(c => (c.style.transform = ''));
  }

  if (manifesto) {
    const m = manifesto.getBoundingClientRect();
    const p = reduced ? 1 : clamp((innerHeight * 0.85 - m.top) / (m.height + innerHeight * 0.3));
    const lit = Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle('lit', i < lit));
  }
}
let ticking = false;
addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { onScroll(); ticking = false; });
}, { passive: true });
addEventListener('resize', onScroll);
onScroll();

/* ---------- Entradas com ritmo ---------- */
const io = new IntersectionObserver(entries => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}, { threshold: 0, rootMargin: '0px 0px -12% 0px' });
$$('.reveal, .reveal-type, .work, .contact-title, .footer-giant').forEach(el => io.observe(el));

/* ---------- Palavra que troca no hero ---------- */
const swap = $('.word-swap');
const swapWords = ['presença', 'autoridade', 'criatividade', 'impacto', 'personalidade'];
if (swap && !reduced) {
  let n = 0;
  setInterval(() => {
    swap.classList.add('is-out');
    setTimeout(() => {
      n = (n + 1) % swapWords.length;
      swap.firstElementChild.textContent = swapWords[n];
      swap.classList.replace('is-out', 'is-in');
      void swap.offsetWidth;
      swap.classList.remove('is-in');
    }, 450);
  }, 3200);
}

/* ---------- Botões magnéticos ---------- */
if (fine && !reduced) {
  $$('.magnetic').forEach(btn => {
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--tx', (e.clientX - r.left - r.width / 2) * 0.22 + 'px');
      btn.style.setProperty('--ty', (e.clientY - r.top - r.height / 2) * 0.3 + 'px');
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.setProperty('--tx', '0px');
      btn.style.setProperty('--ty', '0px');
    });
  });
}

/* ---------- Cards de projeto: inclinação, brilho e cursor ---------- */
$$('.work-media').forEach(media => (media.dataset.case = media.closest('.work').dataset.project));
$$('[data-case]').forEach(el => el.addEventListener('click', () => {
  const key = el.dataset.case;
  openCase(key, $('img', el) || $(`[data-case="${key}"] img`));
}));
$$('.work-media, .panel').forEach(media => {
  media.addEventListener('pointermove', e => {
    const r = media.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    media.style.setProperty('--px', x * 100 + '%');
    media.style.setProperty('--py', y * 100 + '%');
    if (!reduced) {
      media.style.setProperty('--rx', (x - 0.5) * 6 + 'deg');
      media.style.setProperty('--ry', (0.5 - y) * 6 + 'deg');
    }
  });
  media.addEventListener('pointerenter', () => cursor?.classList.add('on'));
  media.addEventListener('pointerleave', () => {
    cursor?.classList.remove('on');
    media.style.setProperty('--rx', '0deg');
    media.style.setProperty('--ry', '0deg');
  });
});

/* ---------- Índice com prévia flutuante ---------- */
const previewImg = preview && $('img', preview);
$$('.index-list button').forEach(btn => {
  btn.addEventListener('pointerenter', () => {
    previewImg.src = btn.dataset.src;
    preview.classList.add('on');
  });
  btn.addEventListener('pointerleave', () => preview.classList.remove('on'));
});

/* ---------- Brilho do bloco de contato ---------- */
const contact = $('.contact');
contact?.addEventListener('pointermove', e => {
  const r = contact.getBoundingClientRect();
  contact.style.setProperty('--cx', e.clientX - r.left + 'px');
  contact.style.setProperty('--cy', e.clientY - r.top + 'px');
});

/* ---------- Case do projeto ---------- */
const projects = {
  lrz: { name: 'LRZ Bikeshop', type: 'Identidade visual', images: [0, 1, 2, 3, 4], desc: 'Performance, tecnologia e uma identidade com movimento.', credit: 'Identidade visual: Guilherme Travaglini / Guit Design. Logotipo: Claus Veronesi / Design Ideal.', source: 'https://www.behance.net/gallery/228162769/LRZ-Bikeshop-Branding' },
  umidifica: { name: 'Umidifica', type: 'Identidade visual', images: [0, 1, 2, 3], desc: 'Uma identidade leve, natural e reconhecível.', credit: 'Guit Design', source: 'https://www.behance.net/gallery/139211061/Umidifica-Apresentacao' },
  codders: { name: 'Codders', type: 'Identidade visual', images: [0], desc: 'Uma marca e suas aplicações, do símbolo aos detalhes.', credit: 'Guit Design', source: 'https://www.behance.net/gallery/133800077/Codders-Apresentacao' },
  district99: { name: 'District99', type: 'Identidade visual para GTA RP', images: [0, 1, 3, 4], desc: 'Uma identidade vibrante para um universo de histórias.', credit: 'Projeto em colaboração: Guit Design, Mateus Rodri e Mateus Rodriguez. Créditos completos no Behance.', source: 'https://www.behance.net/gallery/239355943/VISUAL-IDENTITY-GTAV-ROLEPLAY-Cidade-Distric99' }
};
const caseDlg = $('.case');
const caseImages = $('.case-images');
let caseOrigin = null;

function withTransition(update, from, to) {
  if (!document.startViewTransition || reduced) return update();
  from.style.viewTransitionName = 'case-hero';
  const t = document.startViewTransition(() => {
    from.style.viewTransitionName = '';
    update();
    to().style.viewTransitionName = 'case-hero';
  });
  t.finished.finally(() => { to().style.viewTransitionName = ''; });
}

function openCase(key, fromImg) {
  const p = projects[key];
  cursor?.classList.remove('on');
  caseOrigin = fromImg;
  withTransition(async () => {
    $('.case-type', caseDlg).textContent = p.type;
    $('.case-title', caseDlg).textContent = p.name;
    $('.case-desc', caseDlg).textContent = p.desc;
    $('.case-credit', caseDlg).textContent = p.credit;
    $('.case-link', caseDlg).href = p.source;
    caseImages.replaceChildren(...p.images.map((n, i) => {
      const img = new Image();
      img.src = `assets/${key}-${n}.webp`;
      img.alt = `${p.name}, imagem ${i + 1} de ${p.images.length}`;
      if (i) img.loading = 'lazy';
      return img;
    }));
    // Espera a imagem decodificar, mas nunca mais que 400ms
    await Promise.race([caseImages.firstElementChild.decode().catch(() => {}), new Promise(r => setTimeout(r, 400))]);
    caseDlg.showModal();
    caseDlg.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }, fromImg, () => caseImages.firstElementChild);
}

function closeCase() {
  const first = caseImages.firstElementChild;
  const visible = first && first.getBoundingClientRect().bottom > 0;
  const update = () => { caseDlg.close(); document.body.style.overflow = ''; };
  if (visible && caseOrigin) withTransition(update, first, () => caseOrigin);
  else update();
}
$('.case-close')?.addEventListener('click', closeCase);
caseDlg?.addEventListener('cancel', e => { e.preventDefault(); closeCase(); });

/* ---------- Lightbox ---------- */
const lb = $('.lightbox');
if (lb) {
const lbImg = $('img', lb);
const lbCount = $('.lightbox-count', lb);
let lbItems = [];
let lbIndex = 0;

function showLb(i) {
  lbIndex = (i + lbItems.length) % lbItems.length;
  const item = lbItems[lbIndex];
  lbImg.src = item.src;
  lbImg.alt = item.label;
  lbImg.style.animation = 'none';
  void lbImg.offsetWidth;
  lbImg.style.animation = '';
  lbCount.textContent = `${lbIndex + 1} / ${lbItems.length}`;
}
$$('[data-gallery]').forEach(gallery => {
  const buttons = $$('[data-src]', gallery);
  const items = buttons.map(b => ({ src: b.dataset.src, label: (b.getAttribute('aria-label') || b.querySelector('.index-name').textContent).replace(/^Ampliar /, '') }));
  buttons.forEach((b, i) => b.addEventListener('click', () => {
    lbItems = items;
    showLb(i);
    lb.showModal();
    document.body.style.overflow = 'hidden';
  }));
});
$$('[data-step]', lb).forEach(b => b.addEventListener('click', () => showLb(lbIndex + Number(b.dataset.step))));
$('.lightbox-close', lb).addEventListener('click', () => lb.close());
lb.addEventListener('close', () => { document.body.style.overflow = ''; });
lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
lb.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') showLb(lbIndex + 1);
  if (e.key === 'ArrowLeft') showLb(lbIndex - 1);
});
}
