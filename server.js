/**
 * SÉLIN Dental Aesthetics — web server
 * Express + EJS, server-rendered in English (/) and Arabic (/ar).
 * Hostinger: start command `npm start` (entry file: server.js).
 */
const path = require('path');
const fs = require('fs');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const config = require('./src/config');
const content = require('./src/content');
const { posts } = require('./src/blog');
const { ui } = require('./src/i18n');
const { buildGraph } = require('./src/seo');
const { saveBooking } = require('./src/booking');

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';
const BASE = () => config.brand.siteUrl.replace(/\/$/, '');
const BUILD_DATE = new Date().toISOString().slice(0, 10);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', 1);
app.disable('x-powered-by');

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'default-src': ["'self'"],
        'script-src': ["'self'"],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'font-src': ["'self'", 'https://fonts.gstatic.com', 'data:'],
        'img-src': ["'self'", 'data:', 'blob:'],
        'media-src': ["'self'", 'blob:'],
        'frame-src': ["'self'", 'https://www.google.com', 'https://maps.google.com'],
        'connect-src': ["'self'"],
        'upgrade-insecure-requests': isProd ? [] : null,
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);
app.use(compression());
app.use(express.json({ limit: '20kb' }));

// Redirect trailing slashes (except root) → one canonical URL per page.
app.use((req, res, next) => {
  if (req.path.length > 1 && req.path.endsWith('/') && req.method === 'GET') {
    const q = req.url.slice(req.path.length);
    return res.redirect(301, req.path.replace(/\/+$/, '') + q);
  }
  next();
});

const staticOpts = (maxAge) => ({ maxAge, etag: true, index: false });
app.use('/media', express.static(path.join(__dirname, 'public/media'), staticOpts('30d')));
app.use('/vendor/gsap', express.static(path.join(__dirname, 'node_modules/gsap/dist'), staticOpts('30d')));
app.use('/vendor/lenis', express.static(path.join(__dirname, 'node_modules/lenis/dist'), staticOpts('30d')));
app.use(express.static(path.join(__dirname, 'public'), staticOpts(isProd ? '1d' : 0)));

// ── View helpers ────────────────────────────────────────────
const assetVersion = Date.now().toString(36);
const MONTHS_AR = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function makeLocals(lang, req) {
  const t = (obj) => (obj == null ? '' : typeof obj === 'string' ? obj : obj[lang] ?? obj.en ?? '');
  const s = (key) => (ui[key] ? ui[key][lang] ?? ui[key].en : key);
  const link = (p = '/') => (lang === 'ar' ? (p === '/' ? '/ar' : '/ar' + p) : p);
  const pathNoLang = req.path.replace(/^\/ar(?=\/|$)/, '') || '/';
  const altLink = lang === 'ar' ? pathNoLang : '/ar' + (pathNoLang === '/' ? '' : pathNoLang);
  const waLink = (msg = '') =>
    config.contact.whatsapp ? `https://wa.me/${config.contact.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ''}` : '';
  const fmtDate = (iso) => {
    const [y, m, d] = iso.split('-').map(Number);
    return lang === 'ar' ? `${d} ${MONTHS_AR[m - 1]} ${y}` : `${MONTHS_EN[m - 1]} ${d}, ${y}`;
  };
  const suffix = pathNoLang === '/' ? '' : pathNoLang;
  return {
    lang,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    t, s, link, altLink, pathNoLang, waLink, fmtDate,
    config, content, posts,
    v: assetVersion,
    canonical: BASE() + (lang === 'ar' ? '/ar' + suffix : suffix || '/'),
    hrefEn: BASE() + (suffix || '/'),
    hrefAr: BASE() + '/ar' + suffix,
    jsonld: null,
    crumbs: [],
  };
}

function render(res, view, locals) {
  // Build JSON-LD for every page.
  const L = locals;
  if (!L.jsonld) {
    L.jsonld = buildGraph({
      lang: L.lang,
      url: L.canonical,
      title: L.title || L.s('meta.title'),
      description: L.description || L.s('meta.desc'),
      crumbs: L.crumbs,
      kind: L.kind || L.page,
      data: L.seoData || {},
    });
  }
  res.render(view, L, (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Something went wrong.');
    }
    res.send(html);
  });
}

const crumb = (L, ...items) => [{ name: L.s('nav.home'), url: L.link('/') }, ...items];

// ── Pages (registered for both languages) ───────────────────
const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  const L = res.locals.L;
  render(res, 'home', { ...L, page: 'home', title: null, seoData: { image: '/media/poster.jpg' } });
});

router.get('/treatments', (req, res) => {
  const L = res.locals.L;
  render(res, 'treatments', {
    ...L, page: 'treatments', title: L.s('nav.treatments'), description: L.s('treatments.page.sub'),
    crumbs: crumb(L, { name: L.s('nav.treatments'), url: L.link('/treatments') }),
  });
});

router.get('/treatments/:slug', (req, res, next) => {
  const L = res.locals.L;
  const tr = content.treatments.find((x) => x.slug === req.params.slug);
  if (!tr) return next();
  const idx = content.treatments.indexOf(tr);
  render(res, 'treatment', {
    ...L,
    page: 'treatments', kind: 'treatment',
    tr,
    nextTr: content.treatments[(idx + 1) % content.treatments.length],
    related: content.cases.filter((c) => c.treatment === tr.slug).slice(0, 4),
    relatedPosts: posts.filter((p) => p.treatment === tr.slug).slice(0, 2),
    title: L.t(tr.name), description: L.t(tr.short), ogImage: tr.image,
    crumbs: crumb(L, { name: L.s('nav.treatments'), url: L.link('/treatments') }, { name: L.t(tr.name), url: L.link('/treatments/' + tr.slug) }),
    seoData: { tr, image: tr.image },
  });
});

router.get('/cases', (req, res) => {
  const L = res.locals.L;
  render(res, 'cases', {
    ...L, page: 'cases', title: L.s('nav.cases'), description: L.s('cases.sub'), ogImage: content.cases[0] && content.cases[0].after,
    crumbs: crumb(L, { name: L.s('nav.cases'), url: L.link('/cases') }),
  });
});

router.get('/doctors', (req, res) => {
  const L = res.locals.L;
  render(res, 'doctors', {
    ...L, page: 'doctors', title: L.s('doctors.seo'), description: L.s('doctors.page.sub'),
    crumbs: crumb(L, { name: L.s('nav.doctors'), url: L.link('/doctors') }),
  });
});

router.get('/clinic', (req, res) => {
  const L = res.locals.L;
  render(res, 'clinic', {
    ...L, page: 'clinic', title: L.s('nav.clinic'), description: L.s('clinic.page.sub'), ogImage: '/media/tour/t07.jpg',
    crumbs: crumb(L, { name: L.s('nav.clinic'), url: L.link('/clinic') }),
  });
});

router.get('/book', (req, res) => {
  const L = res.locals.L;
  render(res, 'book', {
    ...L, page: 'book', title: L.s('nav.book'), description: L.s('book.sub'),
    crumbs: crumb(L, { name: L.s('nav.book'), url: L.link('/book') }),
  });
});

router.get('/blog', (req, res) => {
  const L = res.locals.L;
  render(res, 'blog', {
    ...L, page: 'blog', title: L.s('blog.title'), description: L.s('blog.sub'),
    crumbs: crumb(L, { name: L.s('nav.blog'), url: L.link('/blog') }),
    seoData: { posts },
  });
});

router.get('/blog/:slug', (req, res, next) => {
  const L = res.locals.L;
  const post = posts.find((p) => p.slug === req.params.slug);
  if (!post) return next();
  const tr = content.treatments.find((x) => x.slug === post.treatment);
  const author = content.doctors.find((d) => d.slug === post.author);
  const text = [post.answer, ...post.sections.flatMap((s) => [...(s.p || []), ...(s.list || [])])].map((x) => L.t(x)).join(' ');
  render(res, 'post', {
    ...L, page: 'blog', kind: 'post',
    post, tr, author,
    more: posts.filter((p) => p.slug !== post.slug).slice(0, 3),
    title: L.t(post.title), description: L.t(post.excerpt), ogImage: post.image, ogType: 'article',
    crumbs: crumb(L, { name: L.s('nav.blog'), url: L.link('/blog') }, { name: L.t(post.title), url: L.link('/blog/' + post.slug) }),
    seoData: { post, tr, image: post.image, wordCount: text.split(/\s+/).length },
  });
});

const withLang = (lang) => (req, res, next) => { res.locals.L = makeLocals(lang, req); next(); };
app.use('/ar', withLang('ar'), router);
app.use('/', withLang('en'), router);

// ── Booking API ─────────────────────────────────────────────
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((ts) => now - ts < 10 * 60 * 1000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

app.post('/api/book', async (req, res) => {
  const b = req.body || {};
  if (b.website) return res.json({ ok: true }); // honeypot
  if (rateLimited(req.ip)) return res.status(429).json({ ok: false, error: 'rate' });
  const clean = (v, max = 200) => String(v ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);
  const booking = {
    name: clean(b.name, 80),
    phone: clean(b.phone, 30),
    email: clean(b.email, 120),
    treatment: clean(b.treatment, 60),
    concerns: Array.isArray(b.concerns) ? b.concerns.slice(0, 10).map((c) => clean(c, 40)) : [],
    preferred: clean(b.preferred, 40),
    message: clean(b.message, 1500),
    lang: b.lang === 'ar' ? 'ar' : 'en',
  };
  if (booking.name.length < 2 || !/^[+\d\s()-]{6,30}$/.test(booking.phone)) {
    return res.status(400).json({ ok: false, error: 'invalid' });
  }
  try {
    await saveBooking(booking, config);
    res.json({ ok: true });
  } catch (e) {
    console.error('Booking error:', e);
    res.status(500).json({ ok: false, error: 'server' });
  }
});

// ── SEO / GEO endpoints ─────────────────────────────────────
const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'CCBot', 'meta-externalagent'];

app.get('/robots.txt', (req, res) => {
  const lines = ['# SÉLIN Dental Aesthetics — search engines and AI assistants are welcome.', 'User-agent: *', 'Allow: /', 'Disallow: /api/', ''];
  AI_BOTS.forEach((b) => lines.push(`User-agent: ${b}`, 'Allow: /', 'Disallow: /api/', ''));
  lines.push(`Sitemap: ${BASE()}/sitemap.xml`, `# LLM-friendly summary: ${BASE()}/llms.txt`);
  res.type('text/plain').send(lines.join('\n'));
});

app.get('/sitemap.xml', (req, res) => {
  const entries = [
    { p: '/', pr: '1.0', img: ['/media/poster.jpg'] },
    { p: '/treatments', pr: '0.9' },
    ...content.treatments.map((t) => ({ p: `/treatments/${t.slug}`, pr: '0.9', img: [t.image] })),
    { p: '/cases', pr: '0.8', img: content.cases.flatMap((c) => [c.before, c.after]).filter(Boolean) },
    { p: '/doctors', pr: '0.8' },
    { p: '/clinic', pr: '0.7', img: content.tour.map((x) => x.src) },
    { p: '/book', pr: '0.8' },
    { p: '/blog', pr: '0.8' },
    ...posts.map((p) => ({ p: `/blog/${p.slug}`, pr: '0.7', lm: p.updated || p.date, img: [p.image] })),
  ];
  const url = (p, lang) => BASE() + (lang === 'ar' ? '/ar' + (p === '/' ? '' : p) : p);
  const xml = entries
    .flatMap((e) => ['en', 'ar'].map((lang) => `<url><loc>${url(e.p, lang)}</loc><lastmod>${e.lm || BUILD_DATE}</lastmod><priority>${e.pr}</priority>`
      + `<xhtml:link rel="alternate" hreflang="en" href="${url(e.p, 'en')}"/><xhtml:link rel="alternate" hreflang="ar" href="${url(e.p, 'ar')}"/><xhtml:link rel="alternate" hreflang="x-default" href="${url(e.p, 'en')}"/>`
      + (e.img || []).map((i) => `<image:image><image:loc>${BASE()}${i}</image:loc></image:image>`).join('')
      + '</url>'))
    .join('');
  res.type('application/xml').send(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${xml}</urlset>`
  );
});

// llms.txt — a clean, factual brief for AI answer engines (GEO).
function llmsText(full) {
  const en = (o) => (typeof o === 'string' ? o : o.en);
  const ar = (o) => (typeof o === 'string' ? o : o.ar);
  const c = config.contact;
  const out = [];
  out.push('# SÉLIN Dental Aesthetics (سيلين لتجميل الأسنان)', '');
  out.push('> Aesthetic and restorative dental clinic founded by Dr. Walid Zaki and Dr. Mohammed Khaled. Known for digitally designed, hand-finished smiles: porcelain veneers, digital smile design, dental implants, teeth whitening, clear aligners, orthodontics and zirconia crowns. Located in Eterna Healthcare City, Mivida Compound, New Cairo, Egypt. Rated 5.0 on Google. Two private treatment suites (Clinic 1 and Clinic 2). Website in English and Arabic.', '');
  out.push('## Key facts');
  out.push(`- Name: SÉLIN Dental Aesthetics (also written SELIN Dental Aesthetics; Arabic: سيلين لتجميل الأسنان)`);
  out.push(`- Doctors: ${content.doctors.map((d) => `${d.name.en} (${en(d.role)}, ${en(d.focus)})`).join('; ')}`);
  if (en(c.address)) out.push(`- Address: ${en(c.address)}`);
  if (config.location.city) out.push(`- City: ${config.location.city}`);
  if (c.phone) out.push(`- Phone: ${c.phone}`);
  if (c.whatsapp) out.push(`- WhatsApp: https://wa.me/${c.whatsapp}`);
  if (c.email) out.push(`- Email: ${c.email}`);
  out.push(`- Hours: ${en(c.hours)}`);
  if (config.social.instagram) out.push(`- Instagram: ${config.social.instagram}`);
  if (config.google.ratingValue) out.push(`- Google rating: ${config.google.ratingValue}/5 from ${config.google.ratingCount} reviews`);
  out.push(`- Languages: English, Arabic`, `- Booking: ${BASE()}/book`, '');
  out.push('## Treatments');
  content.treatments.forEach((t) => {
    out.push(`- [${t.name.en}](${BASE()}/treatments/${t.slug}): ${en(t.short)} Timeline: ${en(t.duration)}.`);
    if (full) {
      out.push(`  - ${en(t.intro)}`);
      out.push(`  - Benefits: ${t.benefits.map(en).join('; ')}`);
      out.push(`  - Process: ${t.steps.map(en).join(' → ')}`);
      t.faq.forEach((f) => out.push(`  - Q: ${en(f.q)} A: ${en(f.a)}`));
      out.push(`  - العربية: ${t.name.ar} — ${ar(t.short)}`);
    }
  });
  out.push('', '## Frequently asked questions');
  content.faq.forEach((f) => out.push(`- Q: ${en(f.q)}`, `  A: ${en(f.a)}`));
  out.push('', '## Journal (articles)');
  posts.forEach((p) => {
    out.push(`- [${p.title.en}](${BASE()}/blog/${p.slug}) — ${p.date}. ${en(p.answer)}`);
    if (full) {
      p.sections.forEach((sct) => {
        out.push(`  ### ${en(sct.h)}`);
        (sct.p || []).forEach((x) => out.push(`  ${en(x)}`));
        (sct.list || []).forEach((x) => out.push(`  - ${en(x)}`));
      });
    }
  });
  out.push('', '## Pages');
  ['/', '/treatments', '/cases', '/doctors', '/clinic', '/blog', '/book'].forEach((p) => out.push(`- ${BASE()}${p} (Arabic: ${BASE()}/ar${p === '/' ? '' : p})`));
  if (!full) out.push('', `Full version: ${BASE()}/llms-full.txt`);
  return out.join('\n');
}
app.get('/llms.txt', (req, res) => res.type('text/plain; charset=utf-8').send(llmsText(false)));
app.get('/llms-full.txt', (req, res) => res.type('text/plain; charset=utf-8').send(llmsText(true)));

app.get('/healthz', (req, res) => res.json({ ok: true }));

// ── 404 ─────────────────────────────────────────────────────
app.use((req, res) => {
  const lang = /^\/ar(\/|$)/.test(req.path) ? 'ar' : 'en';
  const L = makeLocals(lang, req);
  res.status(404);
  render(res, '404', { ...L, page: '404', title: '404', noindex: true });
});

fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });

app.listen(PORT, () => {
  console.log(`SÉLIN Dental Aesthetics running on http://localhost:${PORT}`);
});
