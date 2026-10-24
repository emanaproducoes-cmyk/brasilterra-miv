// Efeitos e interações do MIV (JavaScript puro, sem dependências).
// Chamado uma única vez pelo componente <Effects /> no cliente.
// Tudo é progressivo: sem JS, o conteúdo continua visível e legível.

export default function initEffects() {
  if (typeof window === 'undefined' || window.__btFx) return () => {};
  window.__btFx = true;
  const doc = document.documentElement;
  doc.classList.add('js');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cleanups = [];

  // 1. Revelação ao rolar ------------------------------------------------------
  const rv = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(
      (ents) => ents.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    rv.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());
  } else rv.forEach((el) => el.classList.add('in'));

  // 2. Barra de progresso + 3. navegação ativa + 4. parallax ------------------
  const bar = document.querySelector('.progress span');
  const navLinks = Array.from(document.querySelectorAll('[data-nav]'));
  const targets = navLinks
    .map((a) => document.getElementById(a.getAttribute('data-nav')))
    .filter(Boolean);
  const para = Array.from(document.querySelectorAll('[data-parallax]'));
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const st = window.scrollY;
      const max = doc.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? st / max : 0})`;
      let current = targets[0] && targets[0].id;
      for (const t of targets) if (t.getBoundingClientRect().top < window.innerHeight * 0.35) current = t.id;
      navLinks.forEach((a) => a.classList.toggle('on', a.getAttribute('data-nav') === current));
      if (!reduce) {
        for (const el of para) {
          const r = el.parentElement.getBoundingClientRect();
          const k = parseFloat(el.getAttribute('data-parallax')) || 0.2;
          el.style.transform = `translate3d(0, ${(r.top * -k).toFixed(1)}px, 0)`;
        }
      }
      doc.classList.toggle('scrolled', st > 40);
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  cleanups.push(() => window.removeEventListener('scroll', onScroll));

  // 5. Copiar códigos de cor ---------------------------------------------------
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  document.body.appendChild(toast);
  cleanups.push(() => { toast.remove(); window.__btFx = false; });
  let tt;
  const say = (msg) => {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(tt);
    tt = setTimeout(() => toast.classList.remove('show'), 1600);
  };
  const onClick = (ev) => {
    // Menu móvel
    if (ev.target.closest('.menu-btn')) doc.classList.toggle('menu-open');
    else if (ev.target.closest('.rail a')) doc.classList.remove('menu-open');
    const c = ev.target.closest('[data-copy]');
    if (c) {
      const v = c.getAttribute('data-copy');
      try {
        navigator.clipboard.writeText(v).then(() => say(`${v} copiado`), () => say(v));
      } catch (e) { say(v); }
    }
    // 6. Alternadores genéricos: <button data-toggle="classe" data-target="#id">
    const tg = ev.target.closest('[data-toggle]');
    if (tg) {
      const t = document.querySelector(tg.getAttribute('data-target'));
      if (t) {
        const on = t.classList.toggle(tg.getAttribute('data-toggle'));
        tg.setAttribute('aria-pressed', on ? 'true' : 'false');
      }
    }
    // 7. Seletores de estado: <button data-set="attr:valor" data-target="#id">
    const ds = ev.target.closest('[data-set]');
    if (ds) {
      const t = document.querySelector(ds.getAttribute('data-target'));
      const [k, v] = ds.getAttribute('data-set').split(':');
      if (t) {
        t.setAttribute('data-' + k, v);
        const group = ds.parentElement.querySelectorAll('[data-set^="' + k + ':"]');
        group.forEach((b) => b.setAttribute('aria-pressed', b === ds ? 'true' : 'false'));
        if (t.id === 'lab') labVerdict(t);
        const info = ds.getAttribute('data-info');
        const out = t.querySelector('[data-info-out="' + k + '"]');
        if (out && info) out.textContent = info;
      }
    }
  };
  document.addEventListener('click', onClick);
  cleanups.push(() => document.removeEventListener('click', onClick));

  // Laboratório de fundos: recomendação conforme as regras do capítulo 07
  const LAB_OK = {
    full: ['branco', 'papel'],
    negativa: ['profundo', 'meridiano', 'foto', 'padrao'],
    preto: ['branco', 'papel', 'safra'],
    branco: ['profundo', 'meridiano', 'foto', 'padrao'],
  };
  function labVerdict(t) {
    const s = t.getAttribute('data-scheme'), b = t.getAttribute('data-bg');
    const ok = (LAB_OK[s] || []).indexOf(b) > -1;
    const out = t.querySelector('.lab-verdict');
    t.classList.toggle('is-bad', !ok);
    if (out) {
      const alt = Object.keys(LAB_OK).filter((k) => LAB_OK[k].indexOf(b) > -1);
      const names = { full: 'full color', negativa: 'negativa', preto: 'preta', branco: 'branca' };
      out.textContent = ok
        ? '✓ Combinação permitida.'
        : '✕ Combinação proibida. Sobre este fundo, use a versão ' + alt.map((a) => names[a]).join(' ou ') + '.';
    }
  }
  const lab = document.getElementById('lab');
  if (lab) labVerdict(lab);

  // 8. Contadores animados -----------------------------------------------------
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    const fmt = new Intl.NumberFormat('pt-BR');
    const io2 = new IntersectionObserver((ents) => ents.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      io2.unobserve(el);
      const end = parseFloat(el.getAttribute('data-count'));
      const dec = parseInt(el.getAttribute('data-dec') || '0', 10);
      if (reduce) return;
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - t0) / 1400);
        const v = end * (1 - Math.pow(1 - p, 3));
        el.textContent = dec ? v.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec }) : fmt.format(Math.round(v));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }), { threshold: 0.6 });
    counters.forEach((c) => io2.observe(c));
    cleanups.push(() => io2.disconnect());
  }

  // 9. Carrossel automático (mockup de carrossel de redes sociais) -------------
  document.querySelectorAll('[data-carousel]').forEach((car) => {
    const track = car.querySelector('.car-track');
    const n = track ? track.children.length : 0;
    if (!n || reduce) return;
    let i = 0;
    const dots = car.querySelectorAll('.car-dots i');
    const go = () => {
      i = (i + 1) % n;
      track.style.transform = `translateX(${-100 * i}%)`;
      dots.forEach((d, j) => d.classList.toggle('on', j === i));
    };
    const id = setInterval(go, 2600);
    cleanups.push(() => clearInterval(id));
  });

  // 10. Inclinação 3D suave nos mockups ----------------------------------------
  if (!reduce && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('[data-tilt]').forEach((el) => {
      const mv = (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('--rx', (y * -6).toFixed(2) + 'deg');
        el.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg');
      };
      const lv = () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); };
      el.addEventListener('mousemove', mv);
      el.addEventListener('mouseleave', lv);
    });
  }

  return () => cleanups.forEach((f) => f());
}
