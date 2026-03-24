'use strict';
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

// ---- CUSTOM CURSOR ----------------------------------------
(function() {
  const cur = $('#cursor'); if (!cur) return;
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function loop() { cx += (mx - cx) * 0.12; cy += (my - cy) * 0.12; cur.style.left = cx + 'px'; cur.style.top = cy + 'px'; requestAnimationFrame(loop); }
  loop();
  $$('a, button, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('expanded'));
    el.addEventListener('mouseleave', () => cur.classList.remove('expanded'));
  });
})();

// ---- BURGER -----------------------------------------------
(function() {
  const btn = $('#burgerBtn'), menu = $('#navMenu'); if (!btn || !menu) return;
  function openMenu() { btn.classList.add('open'); menu.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); btn.setAttribute('aria-label', 'Fermer le menu'); document.body.style.overflow = 'hidden'; const f = menu.querySelector('a'); if (f) f.focus(); }
  function closeMenu() { btn.classList.remove('open'); menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Ouvrir le menu'); document.body.style.overflow = ''; }
  btn.addEventListener('click', () => btn.classList.contains('open') ? closeMenu() : openMenu());
  $$('.nav__link, .nav__trial', menu).forEach(l => l.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); btn.focus(); } });
  document.addEventListener('click', e => { if (!menu.contains(e.target) && !btn.contains(e.target) && menu.classList.contains('open')) closeMenu(); });
})();

// ---- SCROLL HEADER ----------------------------------------
(function() {
  const h = $('#header'); if (!h) return;
  const upd = () => h.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', upd, { passive: true }); upd();
})();

// ---- SCROLL REVEAL ----------------------------------------
(function() {
  const els = $$('.reveal'); if (!els.length) return;
  if (!window.IntersectionObserver) { els.forEach(e => e.classList.add('visible')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const sibs = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = sibs.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), Math.min(idx * 80, 400));
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

// ---- FAQ --------------------------------------------------
(function() {
  const items = $$('.faq-item'); if (!items.length) return;
  items.forEach(item => {
    const btn = item.querySelector('.faq-q'), ans = item.querySelector('.faq-a'); if (!btn || !ans) return;
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      items.forEach(o => { const ob = o.querySelector('.faq-q'), oa = o.querySelector('.faq-a'); if (ob && oa && o !== item) { ob.setAttribute('aria-expanded', 'false'); oa.hidden = true; } });
      btn.setAttribute('aria-expanded', String(!open)); ans.hidden = open;
    });
  });
})();

// ---- SCHEDULE FILTERS ------------------------------------
(function() {
  const btns = $$('.filter-btn'), slots = $$('.slot'); if (!btns.length || !slots.length) return;
  function apply(f) { slots.forEach(s => { const tags = (s.dataset.tags || '').split(' '); s.classList.toggle('hidden', f !== 'all' && !tags.includes(f)); }); }
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false'); });
    b.classList.add('active'); b.setAttribute('aria-pressed', 'true');
    apply(b.dataset.filter || 'all');
  }));
})();

// ---- FORM VALIDATION -------------------------------------
(function() {
  function validate(f) {
    const err = f.parentElement.querySelector('.ferr'); let e = null;
    if (f.type === 'checkbox') { e = f.required && !f.checked ? 'Obligatoire.' : null; }
    else if (f.type === 'email') { e = !f.value.trim() && f.required ? 'Obligatoire.' : (f.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value) ? 'Email invalide.' : null); }
    else if (f.type === 'tel') { e = f.required && !f.value.trim() ? 'Obligatoire.' : null; }
    else { e = f.required && !f.value.trim() ? 'Obligatoire.' : null; }
    if (err) err.textContent = e || '';
    f.classList.toggle('error', !!e); f.setAttribute('aria-invalid', e ? 'true' : 'false'); return !e;
  }
  function setup(formId, okId) {
    const form = document.getElementById(formId), ok = document.getElementById(okId); if (!form) return;
    const fields = $$('input[required],select[required],textarea[required]', form);
    fields.forEach(f => { f.addEventListener('blur', () => validate(f)); f.addEventListener('input', () => { if (f.classList.contains('error')) validate(f); }); });
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true; fields.forEach(f => { if (!validate(f)) valid = false; });
      if (valid && ok) { form.style.display = 'none'; ok.hidden = false; ok.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); ok.focus(); }
      else { const first = form.querySelector('.error'); if (first) first.focus(); }
    });
  }
  setup('essaiForm', 'essaiOk');
  setup('contactForm', 'contactOk');
})();

// ---- SMOOTH SCROLL ----------------------------------------
(function() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href')); if (!t) return;
      e.preventDefault();
      const nh = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
      window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - nh - 20, behavior: 'smooth' });
    });
  });
})();

// ---- REDUCED MOTION ----------------------------------------
(function() {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches) $$('.reveal').forEach(e => e.classList.add('visible'));
  mq.addEventListener('change', q => { if (q.matches) $$('.reveal').forEach(e => e.classList.add('visible')); });
})();
