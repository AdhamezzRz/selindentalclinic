/* ════════════════════════════════════════════════════════════
   SÉLIN Dental Aesthetics — interactions
   GSAP + ScrollTrigger + Lenis (served locally from /vendor)
   ════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  const root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(pointer: fine)').matches;
  const isRTL = root.dir === 'rtl';
  const hasGSAP = typeof window.gsap !== 'undefined';
  if (reduced || !hasGSAP) root.classList.add('reduced');

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const store = {
    get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { /* ignore */ } },
  };

  const gsap = window.gsap;
  const ST = window.ScrollTrigger;
  if (hasGSAP && ST) gsap.registerPlugin(ST);

  /* ── Smooth scroll ─────────────────────────────────────── */
  let lenis = null;
  if (!reduced && hasGSAP && window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true });
    lenis.on('scroll', ST.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  const scrollTo = (target) => {
    if (lenis) lenis.scrollTo(target, { duration: 1.6 });
    else (typeof target === 'number' ? window.scrollTo({ top: target, behavior: 'smooth' }) : target.scrollIntoView({ behavior: 'smooth' }));
  };
  $$('[data-top]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); scrollTo(0); }));

  /* ── Split text helpers ────────────────────────────────── */
  function splitWords(el) {
    if (el.dataset.split) return $$('.w', el);
    el.dataset.split = '1';
    const walk = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 3) {
          const parts = child.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          parts.forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span');
            w.className = 'w';
            const inner = document.createElement('span');
            inner.className = 'w-in';
            inner.textContent = p;
            w.appendChild(inner);
            frag.appendChild(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) walk(child);
      });
    };
    walk(el);
    return $$('.w', el);
  }

  /* ── Navigation ────────────────────────────────────────── */
  const nav = $('[data-nav]');
  let lastY = 0;
  const onScrollNav = (y) => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', y > 40);
    const hide = y > lastY && y > 300 && !document.body.classList.contains('menu-open');
    nav.classList.toggle('is-hidden', hide);
    lastY = y;
  };
  if (lenis) lenis.on('scroll', ({ scroll }) => onScrollNav(scroll));
  else window.addEventListener('scroll', () => onScrollNav(window.scrollY), { passive: true });

  const menuBtn = $('[data-menu-toggle]');
  const menu = $('#menu');
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    root.classList.toggle('menu-open', open);
    menuBtn && menuBtn.setAttribute('aria-expanded', String(open));
    menu && menu.setAttribute('aria-hidden', String(!open));
    if (lenis) open ? lenis.stop() : lenis.start();
  };
  menuBtn && menuBtn.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  menu && $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));

  /* ── Cursor + magnetic ─────────────────────────────────── */
  if (fine && !reduced) {
    const cursor = $('.cursor');
    if (cursor) {
    const dot = $('.cursor-dot');
    const ring = $('.cursor-ring');
    const label = $('.cursor-label');
    document.body.classList.add('has-cursor');
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; }, { passive: true });
    const loop = () => {
      rx = lerp(rx, mx, 0.18); ry = lerp(ry, my, 0.18);
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener('pointerover', (e) => {
      const lab = e.target.closest('[data-cursor]');
      const hov = e.target.closest('a, button, [role="button"], input, select, textarea, label');
      cursor.classList.toggle('is-label', !!lab);
      cursor.classList.toggle('is-hover', !lab && !!hov);
      label.textContent = lab ? lab.dataset.cursor : '';
    });
    document.addEventListener('pointerleave', () => cursor.classList.remove('is-hover', 'is-label'));
    }

    $$('.magnetic').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.28;
        const y = (e.clientY - r.top - r.height / 2) * 0.38;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  /* ── Star field (gold used sparingly) ──────────────────── */
  function starField(canvas) {
    const ctx = canvas.getContext('2d');
    const density = parseFloat(canvas.dataset.density || '1');
    let w, h, dpr, stars = [], visible = false, raf = 0, px = 0, py = 0;
    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round((w * h) / 16000 * density);
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.1 + 0.2,
        a: Math.random() * 0.6 + 0.15,
        s: Math.random() * 0.02 + 0.004,
        p: Math.random() * Math.PI * 2,
        z: Math.random() * 0.6 + 0.2,
        gold: false,
      }));
    };
    const sparkle = (x, y, r, a) => {
      ctx.save(); ctx.translate(x, y); ctx.globalAlpha = a; ctx.fillStyle = '#C4B08A';
      ctx.beginPath();
      ctx.moveTo(0, -r); ctx.quadraticCurveTo(0, 0, r, 0); ctx.quadraticCurveTo(0, 0, 0, r);
      ctx.quadraticCurveTo(0, 0, -r, 0); ctx.quadraticCurveTo(0, 0, 0, -r); ctx.fill();
      ctx.restore();
    };
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const st of stars) {
        const tw = reduced ? st.a : st.a * (0.55 + 0.45 * Math.sin(st.p + t * st.s * 0.06));
        const x = st.x + px * st.z * 18, y = st.y + py * st.z * 18;
        if (st.gold) sparkle(x, y, st.r * 4.2, tw);
        else { ctx.globalAlpha = tw; ctx.fillStyle = '#F5F1EB'; ctx.beginPath(); ctx.arc(x, y, st.r, 0, 6.283); ctx.fill(); }
      }
      ctx.globalAlpha = 1;
      if (visible && !reduced) raf = requestAnimationFrame(draw);
    };
    resize();
    new ResizeObserver(resize).observe(canvas);
    new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(draw);
    }).observe(canvas);
    if (fine && !reduced) {
      const host = canvas.parentElement;
      host.addEventListener('pointermove', (e) => {
        const r = host.getBoundingClientRect();
        px = (e.clientX - r.left) / r.width - 0.5; py = (e.clientY - r.top) / r.height - 0.5;
      });
    }
    draw(0);
  }
  $$('[data-stars]').forEach(starField);

  /* ── Videos: play only when visible ────────────────────── */
  const vidIO = new IntersectionObserver((entries) => entries.forEach((en) => {
    const v = en.target;
    if (en.isIntersecting) { if (v.preload === 'none') v.preload = 'auto'; v.play().catch(() => {}); }
    else v.pause();
  }), { threshold: 0.15 });
  $$('[data-autoplay-visible], .hero-video').forEach((v) => { v.muted = true; vidIO.observe(v); });

  /* ── Lightbox film ─────────────────────────────────────── */
  const lb = $('[data-lightbox]');
  const lbv = $('[data-lightbox-video]');
  const openLB = () => {
    if (!lb) return;
    lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false');
    lbv.preload = 'auto'; lbv.currentTime = 0; lbv.muted = false;
    lbv.play().catch(() => { lbv.muted = true; lbv.play().catch(() => {}); });
    if (lenis) lenis.stop();
    $('[data-lightbox-close]', lb).focus();
  };
  const closeLB = () => {
    if (!lb || !lb.classList.contains('is-open')) return;
    lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true');
    lbv.pause();
    if (lenis) lenis.start();
  };
  $$('[data-lightbox-open]').forEach((el) => {
    el.addEventListener('click', openLB);
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLB(); } });
  });
  lb && lb.addEventListener('click', (e) => { if (e.target === lb || e.target.closest('[data-lightbox-close]')) closeLB(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeLB(); setMenu(false); } });

  /* ── Hero reel (phones): sound, progress, double-tap stars ── */
  const mqPhone = window.matchMedia('(max-width: 860px)');
  const reel = $('[data-reel]');
  if (reel) {
    const video = $('.hero-video', reel);
    const bar = $('[data-reel-progress]');
    const soundBtn = $('[data-reel-sound]');
    const hint = $('[data-reel-hint]');
    let soundOn = false;
    video.addEventListener('timeupdate', () => {
      if (bar && video.duration) bar.style.transform = `scaleX(${(video.currentTime / video.duration).toFixed(4)})`;
    });
    const setSound = (on) => {
      soundOn = on;
      if (on && !video.dataset.hq) {
        // switch to the full-quality film (with audio) at the same moment
        const t = video.currentTime;
        video.dataset.hq = '1';
        video.src = '/media/selin-promo.mp4';
        video.addEventListener('loadedmetadata', () => { video.currentTime = t; video.play().catch(() => {}); }, { once: true });
      }
      video.muted = !on;
      video.play().catch(() => {});
      if (soundBtn) { soundBtn.classList.toggle('is-on', on); soundBtn.setAttribute('aria-pressed', String(on)); }
      if (hint) hint.classList.add('is-gone');
    };
    soundBtn && soundBtn.addEventListener('click', (e) => { e.stopPropagation(); setSound(!soundOn); });

    const burst = (x, y) => {
      const host = $('[data-reel-burst]', reel);
      if (!host) return;
      const star = 'M0 -1 C.12 -.12 .12 -.12 1 0 C.12 .12 .12 .12 0 1 C-.12 .12 -.12 .12 -1 0 C-.12 -.12 -.12 -.12 0 -1Z';
      const big = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      big.setAttribute('viewBox', '-1 -1 2 2');
      big.setAttribute('class', 'burst-big');
      big.innerHTML = `<path d="${star}"/>`;
      big.style.left = x + 'px'; big.style.top = y + 'px';
      host.appendChild(big);
      const parts = [big];
      for (let i = 0; i < 10; i++) {
        const s = big.cloneNode(true);
        s.setAttribute('class', 'burst-spark');
        host.appendChild(s);
        parts.push(s);
        const a = (Math.PI * 2 * i) / 10 + Math.random() * 0.4;
        const d = 70 + Math.random() * 70;
        if (hasGSAP && !reduced) {
          gsap.fromTo(s, { x: 0, y: 0, scale: 0.2, opacity: 1 }, { x: Math.cos(a) * d, y: Math.sin(a) * d, scale: 0.5 + Math.random() * 0.6, opacity: 0, rotate: 90, duration: 0.9 + Math.random() * 0.4, ease: 'expo.out' });
        }
      }
      if (hasGSAP && !reduced) {
        gsap.fromTo(big, { scale: 0, opacity: 1, rotate: -30 }, { scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(2.2)' });
        gsap.to(big, { scale: 1.4, opacity: 0, duration: 0.5, delay: 0.55, ease: 'power2.in' });
      }
      if (navigator.vibrate) navigator.vibrate(12);
      setTimeout(() => parts.forEach((p) => p.remove()), 1500);
    };

    let tapTimer = null;
    reel.addEventListener('click', (e) => {
      const r = reel.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (tapTimer) { clearTimeout(tapTimer); tapTimer = null; burst(x, y); return; }
      tapTimer = setTimeout(() => { tapTimer = null; setSound(!soundOn); }, 260);
    });
    reel.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSound(!soundOn); } });

    // ambient glow behind the reel (desktop): same film, blurred, kept in sync
    const amb = $('[data-ambient]');
    if (amb) {
      amb.muted = true;
      video.addEventListener('timeupdate', () => {
        if (Math.abs(amb.currentTime - video.currentTime) > 0.35) amb.currentTime = video.currentTime;
      });
      video.addEventListener('play', () => amb.play().catch(() => {}));
      video.addEventListener('pause', () => amb.pause());
    }
  }

  /* ── Guest stories: tabs + video + chapters ── */
  $$('[data-stories]').forEach((root) => {
    const panels = $$('[data-story]', root);
    panels.forEach((sec) => {
      const v = $('[data-story-video]', sec);
      const frame = $('[data-story-frame]', sec);
      const playBtn = $('[data-story-play]', sec);
      const prog = $('[data-story-progress]', sec);
      const chapters = $$('[data-chapter]', sec);
      const times = chapters.map((c) => parseFloat(c.dataset.chapter));
      const start = (t) => {
        panels.forEach((o) => { const ov = $('[data-story-video]', o); if (ov !== v) ov.pause(); });
        if (typeof t === 'number') { v.preload = 'auto'; v.currentTime = t; }
        const hero = $('.hero-video'); if (hero && !hero.muted) hero.muted = true;
        v.muted = false;
        v.play().catch(() => {});
      };
      v.addEventListener('play', () => frame.classList.add('is-playing'));
      v.addEventListener('pause', () => frame.classList.remove('is-playing'));
      v.addEventListener('ended', () => frame.classList.remove('is-playing'));
      playBtn.addEventListener('click', (e) => { e.stopPropagation(); start(); });
      frame.addEventListener('click', () => { if (v.paused) start(); else v.pause(); });
      chapters.forEach((c, i) => c.addEventListener('click', () => start(times[i] + 0.01)));
      v.addEventListener('timeupdate', () => {
        const ct = v.currentTime;
        if (prog && v.duration) prog.style.transform = `scaleX(${(ct / v.duration).toFixed(4)})`;
        let idx = 0;
        times.forEach((tt, i) => { if (ct >= tt - 0.05) idx = i; });
        chapters.forEach((c, i) => {
          c.classList.toggle('is-active', i === idx);
          const end = times[i + 1] ?? (v.duration || ct + 1);
          const p = i < idx ? 1 : i > idx ? 0 : Math.min(1, Math.max(0, (ct - times[i]) / (end - times[i])));
          const bar = $('.ch-bar i', c); if (bar) bar.style.transform = `scaleX(${p.toFixed(3)})`;
        });
      });
    });

    const tabs = $$('[data-story-tab]', root);
    const show = (id) => {
      tabs.forEach((t) => { const on = t.dataset.storyTab === id; t.classList.toggle('is-on', on); t.setAttribute('aria-selected', String(on)); });
      panels.forEach((p) => {
        const on = p.id === id;
        if (!on) $('[data-story-video]', p).pause();
        p.hidden = !on;
        if (on && hasGSAP && !reduced) gsap.fromTo(p, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, ease: 'expo.out' });
      });
      ST && ST.refresh();
    };
    tabs.forEach((t) => t.addEventListener('click', () => show(t.dataset.storyTab)));
  });

  /* share */
  $$('[data-share]').forEach((b) => b.addEventListener('click', async (e) => {
    e.stopPropagation();
    const data = { title: b.dataset.shareTitle || document.title, url: location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else { await navigator.clipboard.writeText(location.href); toast(b.dataset.copied || 'Link copied'); }
    } catch (err) { /* cancelled */ }
  }));
  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('is-on'));
    setTimeout(() => { t.classList.remove('is-on'); setTimeout(() => t.remove(), 500); }, 1800);
  }

  /* mobile dock: appears once you scroll past the first screen */
  const dock = $('[data-dock]');
  if (dock) {
    const onDock = (y) => dock.classList.toggle('is-on', y > window.innerHeight * 0.6);
    if (lenis) lenis.on('scroll', ({ scroll }) => onDock(scroll));
    else window.addEventListener('scroll', () => onDock(window.scrollY), { passive: true });
    onDock(window.scrollY);
  }

  /* ════════════════════════════════════════════════════════
     SMILE RENDERER — illustrative SVG smiles (cases + studio)
     ════════════════════════════════════════════════════════ */
  const SHADES = {
    BL1: '#f9f7f2', BL2: '#f5f1e7', BL3: '#f0eadb', B1: '#ece4d1', A1: '#e8dcc1',
    A2: '#e0cfab', A3: '#d6c095', 'A3.5': '#cbb183', A4: '#bd9f70', C4: '#9e917b',
  };
  const STUDIO = ['A4', 'A3.5', 'A3', 'A2', 'A1', 'B1', 'BL3', 'BL2', 'BL1'];

  const hex2rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const rgb2hex = (r) => '#' + r.map((v) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const A = hex2rgb(a), B = hex2rgb(b); return rgb2hex(A.map((v, i) => v + (B[i] - v) * t)); };
  const rnd = (i) => { const x = Math.sin(i * 12.9898 + 4.1) * 43758.5453; return x - Math.floor(x); };

  const toothColors = (base, dk) => ({
    neck: mix(mix(base, '#b8925c', 0.3), '#1a1014', dk),
    mid: mix(base, '#1a1014', dk),
    edge: mix(mix(base, '#97a2ad', 0.32), '#1a1014', dk),
  });

  let smileId = 0;
  function renderSmile(o = {}) {
    const id = 's' + (++smileId);
    const base = SHADES[o.shade] || SHADES.A2;
    const W = [34, 40, 46, 48, 62, 62, 48, 46, 40, 34];
    const H = [64, 74, 92, 84, 100, 100, 84, 92, 74, 64];
    const TOP = [111, 106, 100, 102, 98, 98, 102, 100, 106, 111];
    const DK = [0.34, 0.24, 0.13, 0.05, 0, 0, 0.05, 0.13, 0.24, 0.34];
    const gaps = o.gaps || [];
    const uneven = o.uneven || 0;
    const crowd = o.crowd || 0;
    const missing = o.missing || [];
    const chips = o.chips || [];
    const dark = o.dark || [];
    const C = {
      3: { rot: -10, dx: 7, sx: 0.84, dk: 0.16, dy: 5 }, 6: { rot: 9, dx: -7, sx: 0.84, dk: 0.16, dy: 4 },
      4: { rot: 4, dx: 0 }, 5: { rot: -5, dx: -3, dy: 2 }, 2: { dy: -5, rot: -4 }, 7: { dy: -3, rot: 3 },
    };

    // layout
    const total = W.reduce((a, b) => a + b, 0) + 9 * 2.5 + gaps.reduce((a, b) => a + (b || 0), 0);
    let x = 320 - total / 2;
    const upper = W.map((w, i) => {
      const t = { i, x, w, top: TOP[i], h: H[i], dk: DK[i], rot: 0, dx: 0, dy: 0, sx: 1 };
      x += w + 2.5 + (gaps[i] || 0);
      if (uneven) {
        t.h += (rnd(i) - 0.5) * 14 * uneven;
        t.dy = (rnd(i + 7) - 0.5) * 8 * uneven;
        t.rot = (rnd(i + 3) - 0.5) * 6 * uneven;
      }
      const c = C[i];
      if (crowd && c) {
        t.rot += (c.rot || 0) * crowd; t.dx += (c.dx || 0) * crowd; t.dy += (c.dy || 0) * crowd;
        t.sx = 1 - (1 - (c.sx || 1)) * crowd; t.dk += (c.dk || 0) * crowd;
      }
      return t;
    });

    const toothPath = (tx, ty, w, h) => {
      const r = w * 0.34;
      return `M${tx},${ty + r} C${tx},${ty + r * 0.15} ${tx + w * 0.2},${ty} ${tx + w / 2},${ty} C${tx + w * 0.8},${ty} ${tx + w},${ty + r * 0.15} ${tx + w},${ty + r} L${tx + w * 0.965},${ty + h - w * 0.16} C${tx + w * 0.94},${ty + h + 1} ${tx + w * 0.62},${ty + h + 2.5} ${tx + w / 2},${ty + h + 2.5} C${tx + w * 0.38},${ty + h + 2.5} ${tx + w * 0.06},${ty + h + 1} ${tx + w * 0.035},${ty + h - w * 0.16} Z`;
    };

    let defs = '';
    let teeth = '';
    upper.forEach((t) => {
      if (missing.includes(t.i)) return;
      const b = dark.includes(t.i) ? mix(SHADES.C4, '#6f6658', 0.25) : base;
      const col = toothColors(b, t.dk);
      const gid = `${id}g${t.i}`;
      defs += `<linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:${col.neck}" data-r="neck" data-dk="${t.dk}"${dark.includes(t.i) ? ' data-fixed' : ''}/><stop offset=".45" style="stop-color:${col.mid}" data-r="mid" data-dk="${t.dk}"${dark.includes(t.i) ? ' data-fixed' : ''}/><stop offset="1" style="stop-color:${col.edge}" data-r="edge" data-dk="${t.dk}"${dark.includes(t.i) ? ' data-fixed' : ''}/></linearGradient>`;
      const cx = t.x + t.w / 2, cy = t.top + t.h / 2;
      const tf = `translate(${t.dx} ${t.dy}) rotate(${t.rot} ${cx} ${cy}) translate(${cx} 0) scale(${t.sx} 1) translate(${-cx} 0)`;
      let chip = '';
      if (chips.includes(t.i)) {
        const bx = t.x + t.w, by = t.top + t.h;
        chip = `<path d="M${bx - t.w * 0.42},${by + 4} L${bx + 2},${by - t.h * 0.2} L${bx + 4},${by + 6} Z" fill="#170d11"/>`;
      }
      teeth += `<g transform="${tf}"><path d="${toothPath(t.x, t.top, t.w, t.h)}" fill="url(#${gid})"/><path d="${toothPath(t.x + t.w * 0.22, t.top + t.h * 0.18, t.w * 0.22, t.h * 0.48)}" fill="#fff" opacity="${0.16 - t.dk * 0.3}"/>${chip}</g>`;
    });

    // lower teeth (behind)
    const LW = [28, 31, 34, 30, 30, 34, 31, 28];
    const ltotal = LW.reduce((a, b) => a + b, 0) + 7 * 2;
    let lx = 320 - ltotal / 2;
    let lower = '';
    const lowCol = toothColors(base, 0.3);
    defs += `<linearGradient id="${id}low" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:${lowCol.edge}" data-r="edge" data-dk=".3"/><stop offset=".5" style="stop-color:${lowCol.mid}" data-r="mid" data-dk=".3"/><stop offset="1" style="stop-color:${lowCol.neck}" data-r="neck" data-dk=".3"/></linearGradient>`;
    LW.forEach((w, i) => {
      const off = Math.abs(i - 3.5) * Math.abs(i - 3.5) * 1.6;
      const ty = 188 - off;
      lower += `<path d="M${lx},${ty + 4} Q${lx + w / 2},${ty - 3} ${lx + w},${ty + 4} L${lx + w * 0.92},${ty + 60} L${lx + w * 0.08},${ty + 60} Z" fill="url(#${id}low)"/>`;
      lx += w + 2;
    });

    const mouth = 'M58,140 C178,92 462,92 582,140 C500,262 140,262 58,140 Z';
    return `<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="${o.slice ? 'xMidYMid slice' : 'xMidYMid meet'}">
      <defs>${defs}
        <radialGradient id="${id}bg" cx=".5" cy=".45" r=".75"><stop offset="0" stop-color="#232b36"/><stop offset="1" stop-color="#0f1520"/></radialGradient>
        <radialGradient id="${id}in" cx=".5" cy=".55" r=".6"><stop offset="0" stop-color="#3a1a20"/><stop offset="1" stop-color="#14090c"/></radialGradient>
        <linearGradient id="${id}gum" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a4615f"/><stop offset="1" stop-color="#d09390"/></linearGradient>
        <clipPath id="${id}clip"><path d="${mouth}"/></clipPath>
        <filter id="${id}blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9"/></filter>
      </defs>
      ${o.bare ? '' : `<rect x="-200" y="-200" width="1040" height="760" fill="url(#${id}bg)"/>`}
      <g clip-path="url(#${id}clip)">
        <rect width="640" height="360" fill="url(#${id}in)"/>
        <path d="M40,80 L600,80 L600,128 Q320,104 40,128 Z" fill="url(#${id}gum)"/>
        ${lower}
        ${teeth}
        <path d="${mouth}" fill="none" stroke="#12080b" stroke-width="26" filter="url(#${id}blur)" opacity=".85"/>
      </g>
      <path d="${mouth}" fill="none" stroke="#C4B08A" stroke-opacity=".55" stroke-width="1.4"/>
      <path d="M30,138 C140,60 252,50 320,76 C388,50 500,60 610,138" fill="none" stroke="#C4B08A" stroke-opacity=".32" stroke-width="1.2"/>
      <path d="M30,142 C130,318 510,318 610,142" fill="none" stroke="#C4B08A" stroke-opacity=".32" stroke-width="1.2"/>
    </svg>`;
  }

  function recolor(svg, shadeKey) {
    const base = SHADES[shadeKey];
    $$('stop[data-r]', svg).forEach((st) => {
      if (st.hasAttribute('data-fixed')) return;
      const c = toothColors(base, parseFloat(st.dataset.dk));
      st.style.stopColor = c[st.dataset.r];
    });
  }

  /* ── Before / after comparators ────────────────────────── */
  $$('[data-ba]').forEach((fig) => {
    if (fig.dataset.sim) {
      try {
        const sim = JSON.parse(fig.dataset.sim);
        $('.ba-before', fig).innerHTML = renderSmile({ ...sim.before, slice: true });
        $('.ba-after', fig).innerHTML = renderSmile({ ...sim.after, slice: true });
      } catch (e) { /* ignore malformed */ }
    }
    const range = $('.ba-range', fig);
    const set = (v) => { fig.style.setProperty('--pos', v + '%'); range.value = v; };
    range.addEventListener('input', () => set(range.value));
    let dragging = false;
    const fromEvent = (e) => {
      const r = fig.getBoundingClientRect();
      set(clamp(((e.clientX - r.left) / r.width) * 100, 0, 100).toFixed(1));
    };
    fig.addEventListener('pointerdown', (e) => {
      dragging = true; fig.classList.add('is-drag'); fromEvent(e);
      if (e.pointerType === 'mouse') fig.setPointerCapture(e.pointerId);
    });
    fig.addEventListener('pointermove', (e) => { if (dragging) fromEvent(e); });
    const stop = () => { dragging = false; fig.classList.remove('is-drag'); };
    fig.addEventListener('pointerup', stop);
    fig.addEventListener('pointercancel', stop);
    fig.addEventListener('lostpointercapture', stop);

    // one-time "breathing" hint when it first comes into view
    if (!reduced && hasGSAP) {
      const io = new IntersectionObserver(([en]) => {
        if (!en.isIntersecting) return;
        io.disconnect();
        const o = { v: 50 };
        gsap.timeline({ delay: 0.3 })
          .to(o, { v: 22, duration: 0.9, ease: 'power2.inOut', onUpdate: () => set(o.v.toFixed(1)) })
          .to(o, { v: 78, duration: 1.2, ease: 'power2.inOut', onUpdate: () => set(o.v.toFixed(1)) })
          .to(o, { v: 50, duration: 0.9, ease: 'power2.inOut', onUpdate: () => set(o.v.toFixed(1)) });
      }, { threshold: 0.6 });
      io.observe(fig);
    }
  });

  /* rail arrows */
  $$('[data-rail]').forEach((rail) => {
    const sec = rail.closest('section');
    const step = () => (rail.firstElementChild ? rail.firstElementChild.getBoundingClientRect().width + 24 : 400);
    const dir = isRTL ? -1 : 1;
    $$('[data-rail-prev]', sec).forEach((b) => b.addEventListener('click', () => rail.scrollBy({ left: -step() * dir, behavior: 'smooth' })));
    $$('[data-rail-next]', sec).forEach((b) => b.addEventListener('click', () => rail.scrollBy({ left: step() * dir, behavior: 'smooth' })));
  });

  /* cases filter */
  const filters = $('[data-filters]');
  if (filters) {
    filters.addEventListener('click', (e) => {
      const b = e.target.closest('[data-filter]');
      if (!b) return;
      $$('[data-filter]', filters).forEach((x) => x.classList.toggle('is-on', x === b));
      const f = b.dataset.filter;
      $$('[data-cases-grid] .case').forEach((c) => c.classList.toggle('is-hidden', f !== 'all' && c.dataset.cat !== f));
      ST && ST.refresh();
    });
  }

  /* ── Shade studio ──────────────────────────────────────── */
  $$('[data-shade]').forEach((stage) => {
    const holder = $('[data-shade-smile]', stage);
    const range = $('[data-shade-range]', stage);
    const chips = $('[data-shade-chips]', stage);
    const sec = stage.closest('section');
    const code = $('[data-shade-code]', sec);
    const desc = $('[data-shade-desc]', sec);
    let descs = [];
    try { descs = JSON.parse(stage.dataset.desc); } catch (e) { /* ignore */ }
    holder.innerHTML = renderSmile({ shade: STUDIO[2], uneven: 0, bare: true });
    const svg = $('svg', holder);
    chips.innerHTML = STUDIO.map((k) => `<span style="background:${SHADES[k]}"><b>${k}</b></span>`).join('');
    const update = (i) => {
      const key = STUDIO[i];
      recolor(svg, key);
      code.textContent = key;
      desc.textContent = descs[Math.min(4, Math.floor(i / 2))] || '';
      $$('span', chips).forEach((c, j) => c.classList.toggle('is-on', j === +i));
      range.style.setProperty('--fill', (i / (STUDIO.length - 1)) * 100 + '%');
      stage.style.setProperty('--glow', (0.04 + i * 0.022).toFixed(3));
    };
    range.value = 2;
    update(2);
    range.addEventListener('input', () => update(+range.value));
    $$('span', chips).forEach((c, j) => c.addEventListener('click', () => { range.value = j; update(j); }));
  });

  /* ── Treatment hover image (desktop) ───────────────────── */
  const float = $('.treat-float');
  if (float && fine) {
    const img = $('img', float);
    let fx = 0, fy = 0, tx = 0, ty = 0, on = false;
    const tick = () => { fx = lerp(fx, tx, 0.14); fy = lerp(fy, ty, 0.14); float.style.left = fx + 'px'; float.style.top = fy + 'px'; requestAnimationFrame(tick); };
    tick();
    $$('.treat-row a').forEach((a) => {
      a.addEventListener('pointerenter', (e) => { img.src = a.dataset.img; on = true; float.classList.add('is-on'); tx = e.clientX; ty = e.clientY; if (fx === 0) { fx = tx; fy = ty; } });
      a.addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; });
      a.addEventListener('pointerleave', () => { on = false; float.classList.remove('is-on'); });
    });
  }

  /* ── Booking form ──────────────────────────────────────── */
  const form = $('[data-book]');
  if (form) {
    const pre = new URLSearchParams(location.search).get('treatment');
    const sel = $('[data-preselect]', form);
    if (pre && sel && $$('option', sel).some((o) => o.value === pre)) sel.value = pre;
    const status = $('.bform-status', form);
    const btn = $('button[type="submit"]', form);
    const lbl = $('[data-label]', btn);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = '';
      const fd = new FormData(form);
      const data = Object.fromEntries(fd.entries());
      data.concerns = fd.getAll('concerns');
      const nameOk = (data.name || '').trim().length >= 2;
      const phoneOk = /^[+\d\s()-]{6,30}$/.test((data.phone || '').trim());
      $('[name="name"]', form).closest('.field').classList.toggle('is-invalid', !nameOk);
      $('[name="phone"]', form).closest('.field').classList.toggle('is-invalid', !phoneOk);
      if (!nameOk || !phoneOk) { status.textContent = form.dataset.msgErr; return; }
      const old = lbl.textContent;
      lbl.textContent = form.dataset.msgSending; btn.disabled = true;
      try {
        const res = await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.ok) throw new Error(json.error || 'server');
        const ok = $('.bform-ok', form);
        ok.hidden = false;
        if (hasGSAP && !reduced) gsap.from(ok.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.9, ease: 'expo.out' });
        form.reset();
      } catch (err) {
        status.textContent = err.message === 'invalid' ? form.dataset.msgErr : form.dataset.msgServer;
      } finally {
        lbl.textContent = old; btn.disabled = false;
      }
    });
  }

  /* ════════════════════════════════════════════════════════
     MOTION (GSAP)
     ════════════════════════════════════════════════════════ */
  if (!hasGSAP || reduced) {
    const l = $('.loader'); if (l) l.remove();
    $$('.split, .split-lines, [data-words]').forEach(splitWords);
    return;
  }

  const ease = 'expo.out';

  // Split headlines
  $$('.split, .split-lines').forEach(splitWords);
  $$('[data-words]').forEach(splitWords);

  function intro() {
    const tl = gsap.timeline({ defaults: { ease } });
    tl.to('.line-in', { y: 0, duration: 1.5, stagger: 0.12 }, 0)
      .to('.split-lines .w-in', { y: 0, duration: 1.4, stagger: 0.05 }, 0)
      .to('.hero-in', { y: 0, opacity: 1, duration: 1.3, stagger: 0.1 }, 0.35)
      .from('.hero-arch', { clipPath: 'inset(100% 0 0 0 round 22px)', duration: 1.8, ease: 'expo.inOut' }, 0)
      .from('.hero-video', { scale: 1.4, duration: 2.2 }, 0.2)
      .from('.nav', { opacity: 0, duration: 1.2, clearProps: 'opacity' }, 0.4);
    return tl;
  }

  // Loader (home only)
  const loader = $('.loader');
  if (loader) {
    // "Gentle light": a soft moonbeam sweeps across and reveals the wordmark,
    // then the night parts like a curtain to reveal the site.
    const seen = store.get('selin-seen');
    const dur = seen ? 0.9 : 2;
    const logo = $('.loader-logo', loader);
    const dir = isRTL ? -1 : 1;
    lenis && lenis.stop();
    gsap.set(logo, { '--r': '-25%' });
    const tl = gsap.timeline();
    tl.to(logo, { '--r': '125%', duration: dur, ease: 'power2.inOut' }, 0)
      .fromTo('.loader-word', { scale: 1.04, filter: 'blur(6px)' }, { scale: 1, filter: 'blur(0px)', duration: dur, ease: 'power3.out' }, 0)
      .from('.loader-line', { opacity: 0, y: 12, letterSpacing: '0.5em', duration: dur * 0.8, ease: 'power3.out' }, dur * 0.35)
      .fromTo('.loader-bar i', { scaleX: 0 }, { scaleX: 1, duration: dur, ease: 'power2.inOut' }, 0)
      .to('.loader-stage', { opacity: 0, y: -14, duration: 0.5, ease: 'power2.in' }, dur + 0.2)
      .fromTo('.loader-seam', { scaleX: 0, opacity: 1 }, { scaleX: 1, duration: 0.55, ease: 'expo.inOut' }, dur + 0.2)
      .to('.loader-seam', { opacity: 0, scaleY: 30, duration: 0.9, ease: 'expo.in' }, dur + 0.7)
      .to('.loader-panel--top', { yPercent: -101, duration: 1.15, ease: 'expo.inOut' }, dur + 0.7)
      .to('.loader-panel--bot', { yPercent: 101, duration: 1.15, ease: 'expo.inOut' }, dur + 0.7)
      .add(() => { loader.remove(); lenis && lenis.start(); store.set('selin-seen', '1'); }, dur + 1.9)
      .add(intro(), dur + 0.95);
  } else {
    intro();
  }

  // Generic reveals
  ST.batch('.reveal', {
    start: 'top 88%',
    once: true,
    onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 1.3, ease, stagger: 0.1 }),
  });

  // Headline splits on scroll
  $$('.split').forEach((el) => {
    gsap.to($$('.w-in', el), { y: 0, duration: 1.4, ease, stagger: 0.045, scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
  });

  // Scrubbed word-by-word light-up
  $$('[data-words]').forEach((el) => {
    const words = $$('.w', el);
    gsap.to(words, { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true } });
  });

  // Hero parallax out
  if ($('[data-hero]')) {
    gsap.to('.hero-grid', { yPercent: -12, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom top', scrub: true } });
  }

  // FILM — arch expands to full-bleed
  const film = $('[data-film]');
  if (film) {
    const mask = $('[data-film-mask]', film);
    const copy = $('.film-copy', film);
    const mm = gsap.matchMedia();
    mm.add({ small: '(max-width: 860px)', large: '(min-width: 861px)' }, (ctx) => {
      const small = ctx.conditions.small;
      gsap.set(mask, { width: small ? '68vw' : 'min(30vw, 420px)', height: small ? '64vh' : '74vh', borderRadius: '22px' });
      const tl = gsap.timeline({ scrollTrigger: { trigger: film, start: 'top top', end: 'bottom bottom', scrub: 1 } });
      tl.to(mask, { width: '100vw', height: '100vh', borderRadius: '0px 0px 0px 0px', ease: 'power2.inOut', duration: 1 })
        .to(mask, { '--veil': 1, duration: 0.4 }, 0.6)
        .to(copy, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 0.7)
        .to({}, { duration: 0.3 });
    });
  }

  // TOUR — horizontal pinned scroll on desktop
  const tour = $('[data-tour]');
  if (tour) {
    const track = $('[data-tour-track]', tour);
    const pin = $('.tour-pin', tour);
    const mm = gsap.matchMedia();
    mm.add('(min-width: 861px)', () => {
      const dist = () => Math.max(0, track.scrollWidth - innerWidth);
      gsap.to(track, {
        x: () => (isRTL ? dist() : -dist()),
        ease: 'none',
        scrollTrigger: { trigger: tour, pin, start: 'top top', end: () => '+=' + dist(), scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 },
      });
      $$('.tour-img img', track).forEach((img) => {
        gsap.fromTo(img, { xPercent: isRTL ? 6 : -6 }, { xPercent: isRTL ? -6 : 6, ease: 'none', scrollTrigger: { trigger: tour, start: 'top top', end: () => '+=' + dist(), scrub: true } });
      });
    });
  }

  // CTA moon rises
  $$('[data-cta]').forEach((cta) => {
  });

  // Image parallax
  $$('[data-parallax] img').forEach((img) => {
    gsap.fromTo(img, { yPercent: -8 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // Journey line draw
  $$('.journey-step .moon-ico').forEach((m, i) => {
    gsap.from(m, { scale: 0, rotate: -90, duration: 1.2, ease: 'back.out(1.6)', delay: i * 0.12, scrollTrigger: { trigger: m, start: 'top 88%', once: true } });
  });

  // Footer giant wordmark
  const giant = $('.footer-giant');
  if (giant) gsap.from(giant, { yPercent: 40, opacity: 0, ease: 'none', scrollTrigger: { trigger: giant, start: 'top bottom', end: 'bottom bottom', scrub: true } });

  addEventListener('load', () => ST.refresh());
})();
