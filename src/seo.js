/**
 * Structured data (schema.org JSON-LD) — one connected @graph per page.
 * Built for Google rich results AND for AI answer engines (GEO):
 * every entity has a stable @id so search engines and LLMs can link
 * the clinic ↔ doctors ↔ treatments ↔ articles ↔ FAQs.
 */
const config = require('./config');
const content = require('./content');

const BASE = () => config.brand.siteUrl.replace(/\/$/, '');
const abs = (p) => (p && p.startsWith('http') ? p : BASE() + (p || '/'));
const pick = (obj, lang) => (obj == null ? undefined : typeof obj === 'string' ? obj : obj[lang] || obj.en);
const clean = (o) => JSON.parse(JSON.stringify(o)); // drop undefined

const ID = {
  clinic: () => BASE() + '/#clinic',
  website: () => BASE() + '/#website',
  logo: () => BASE() + '/#logo',
  doctor: (slug) => `${BASE()}/doctors#${slug}`,
  treatment: (slug) => `${BASE()}/treatments/${slug}#procedure`,
};

function clinicNode(lang) {
  const loc = config.location;
  const g = config.google;
  const hasAddress = loc.street || loc.city || pick(config.contact.address, 'en');
  const node = {
    '@type': ['Dentist', 'MedicalClinic', 'LocalBusiness'],
    '@id': ID.clinic(),
    name: 'SÉLIN Dental Aesthetics',
    alternateName: ['SELIN Dental Aesthetics', 'Selin Dental', 'سيلين لتجميل الأسنان'],
    description: lang === 'ar'
      ? 'عيادة سيلين لتجميل الأسنان في القاهرة الجديدة (إيترنا هيلثكير سيتي، كمبوند ميفيدا) مع د. وليد زكي ود. محمد خالد: فينير، تصميم ابتسامة رقمي، زراعة، تبييض، تقويم شفاف وتيجان زركونيا.'
      : 'SÉLIN Dental Aesthetics in New Cairo (Eterna Healthcare City, Mivida) with Dr. Walid Zaki and Dr. Mohammed Khaled: porcelain veneers, digital smile design, dental implants, whitening, clear aligners and zirconia crowns.',
    url: BASE() + '/',
    logo: { '@type': 'ImageObject', '@id': ID.logo(), url: abs('/icon-512.png'), width: 512, height: 512 },
    image: [abs('/media/poster.jpg'), abs('/media/tour/t07.jpg'), abs('/media/tour/t02.jpg')],
    telephone: config.contact.phone || undefined,
    email: config.contact.email || undefined,
    priceRange: loc.priceRange || undefined,
    currenciesAccepted: loc.country === 'EG' ? 'EGP' : undefined,
    knowsLanguage: ['en', 'ar'],
    areaServed: [
      { '@type': 'City', name: 'New Cairo' },
      { '@type': 'City', name: 'Cairo' },
      { '@type': 'Place', name: 'Mivida' },
      { '@type': 'Place', name: 'Fifth Settlement' },
    ],
    containedInPlace: { '@type': 'Place', name: 'Eterna Healthcare City, Mivida, New Cairo' },
    medicalSpecialty: 'Dentistry',
    isAcceptingNewPatients: true,
    address: hasAddress
      ? {
          '@type': 'PostalAddress',
          streetAddress: loc.street || pick(config.contact.address, 'en') || undefined,
          addressLocality: loc.city || undefined,
          addressRegion: loc.region || undefined,
          postalCode: loc.postalCode || undefined,
          addressCountry: loc.country || undefined,
        }
      : undefined,
    geo: loc.lat && loc.lng ? { '@type': 'GeoCoordinates', latitude: +loc.lat, longitude: +loc.lng } : undefined,
    hasMap: config.contact.mapLink || g.businessUrl || undefined,
    openingHours: loc.openingHours || undefined,
    sameAs: [config.social.instagram, config.social.facebook, config.social.tiktok, g.businessUrl].filter(Boolean),
    founder: content.doctors.map((d) => ({ '@id': ID.doctor(d.slug) })),
    employee: content.doctors.map((d) => ({ '@id': ID.doctor(d.slug) })),
    availableService: content.treatments.map((t) => ({ '@id': ID.treatment(t.slug) })),
    potentialAction: {
      '@type': 'ReserveAction',
      target: { '@type': 'EntryPoint', urlTemplate: BASE() + '/book', inLanguage: ['en', 'ar'] },
      name: 'Book a consultation',
    },
  };
  if (g.ratingValue && g.ratingCount) {
    node.aggregateRating = { '@type': 'AggregateRating', ratingValue: g.ratingValue, reviewCount: g.ratingCount, bestRating: '5', worstRating: '1' };
  }
  if (content.reviews.length) {
    node.review = content.reviews.slice(0, 10).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      datePublished: r.date,
      reviewBody: pick(r.text, lang),
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      publisher: r.source ? { '@type': 'Organization', name: r.source } : undefined,
    }));
  }
  return node;
}

function doctorNode(d, lang) {
  return {
    '@type': ['Physician', 'Person'],
    '@id': ID.doctor(d.slug),
    name: d.name.en,
    alternateName: d.name.ar,
    jobTitle: pick(d.role, lang),
    description: pick(d.bio, lang),
    medicalSpecialty: 'Dentistry',
    knowsAbout: [pick(d.focus, 'en'), pick(d.focus, 'ar')],
    worksFor: { '@id': ID.clinic() },
    image: d.photo ? abs(d.photo) : undefined,
    url: `${BASE()}${lang === 'ar' ? '/ar' : ''}/doctors`,
  };
}

function procedureNode(t, lang) {
  return {
    '@type': 'MedicalProcedure',
    '@id': ID.treatment(t.slug),
    name: pick(t.name, lang),
    alternateName: lang === 'ar' ? t.name.en : t.name.ar,
    description: pick(t.intro, lang),
    url: `${BASE()}${lang === 'ar' ? '/ar' : ''}/treatments/${t.slug}`,
    image: abs(t.image),
    bodyLocation: lang === 'ar' ? 'الأسنان' : 'Teeth',
    howPerformed: t.steps.map((s) => pick(s, lang)).join(' → '),
    procedureType: t.slug === 'dental-implants' ? 'https://schema.org/SurgicalProcedure' : 'https://schema.org/NoninvasiveProcedure',
    provider: { '@id': ID.clinic() },
  };
}

function faqNode(list, lang, url) {
  if (!list || !list.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': url + '#faq',
    inLanguage: lang,
    mainEntity: list.map((f) => ({
      '@type': 'Question',
      name: pick(f.q, lang),
      acceptedAnswer: { '@type': 'Answer', text: pick(f.a, lang) },
    })),
  };
}

function breadcrumbNode(crumbs, url) {
  return {
    '@type': 'BreadcrumbList',
    '@id': url + '#breadcrumb',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.url) })),
  };
}

/**
 * @param {object} o  { lang, url (absolute canonical), title, description, crumbs[], type, data }
 */
function buildGraph(o) {
  const { lang, url, title, description, crumbs = [], kind, data = {} } = o;
  const graph = [
    {
      '@type': 'WebSite',
      '@id': ID.website(),
      url: BASE() + '/',
      name: 'SÉLIN Dental Aesthetics',
      alternateName: 'سيلين لتجميل الأسنان',
      inLanguage: ['en', 'ar'],
      publisher: { '@id': ID.clinic() },
    },
    clinicNode(lang),
    ...content.doctors.map((d) => doctorNode(d, lang)),
  ];

  const page = {
    '@type': kind === 'post' ? 'WebPage' : kind === 'faq' ? 'WebPage' : 'WebPage',
    '@id': url + '#webpage',
    url,
    name: title,
    description,
    inLanguage: lang,
    isPartOf: { '@id': ID.website() },
    about: { '@id': ID.clinic() },
    primaryImageOfPage: data.image ? { '@type': 'ImageObject', url: abs(data.image) } : undefined,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.answer', '.lede'] },
  };
  if (crumbs.length) {
    graph.push(breadcrumbNode(crumbs, url));
    page.breadcrumb = { '@id': url + '#breadcrumb' };
  }
  graph.push(page);

  if (kind === 'home') {
    content.treatments.forEach((t) => graph.push(procedureNode(t, lang)));
  }
  if (kind === 'book') {
    const f = faqNode(content.faq, lang, url);
    if (f) graph.push(f);
  }
  if ((kind === 'home' || kind === 'cases') && content.stories) {
    content.stories.forEach((st) => {
      graph.push({
        '@type': 'VideoObject',
        '@id': BASE() + '/#' + st.id,
        name: lang === 'ar' ? 'قصة ضيفة: فينير البورسلين في سيلين' : 'Guest story: porcelain veneers at SÉLIN Dental Aesthetics',
        description: pick(st.chapters[st.chapters.length - 1].quote, lang),
        thumbnailUrl: abs(st.poster),
        contentUrl: abs(st.video),
        uploadDate: st.uploadDate,
        duration: `PT${Math.floor(st.duration / 60)}M${st.duration % 60}S`,
        inLanguage: 'ar',
        transcript: st.transcript.ar,
        publisher: { '@id': ID.clinic() },
        about: { '@id': ID.treatment(st.treatment) },
        hasPart: st.chapters.map((c, i) => ({
          '@type': 'Clip',
          name: pick(c.label, lang),
          startOffset: Math.floor(c.t),
          endOffset: Math.floor(st.chapters[i + 1] ? st.chapters[i + 1].t : st.duration),
          url: abs((lang === 'ar' ? '/ar' : '') + '/#stories'),
        })),
      });
    });
  }
  if (kind === 'treatments') {
    content.treatments.forEach((t) => graph.push(procedureNode(t, lang)));
    graph.push({
      '@type': 'ItemList',
      '@id': url + '#list',
      itemListElement: content.treatments.map((t, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@id': ID.treatment(t.slug) } })),
    });
  }
  if (kind === 'treatment') {
    graph.push(procedureNode(data.tr, lang));
    page.mainEntity = { '@id': ID.treatment(data.tr.slug) };
    const f = faqNode(data.tr.faq, lang, url);
    if (f) graph.push(f);
  }
  if (kind === 'blog') {
    graph.push({
      '@type': 'Blog',
      '@id': url + '#blog',
      name: lang === 'ar' ? 'مجلة سيلين' : 'The SÉLIN Journal',
      inLanguage: lang,
      publisher: { '@id': ID.clinic() },
      blogPost: data.posts.map((p) => ({
        '@type': 'BlogPosting',
        headline: pick(p.title, lang),
        url: `${BASE()}${lang === 'ar' ? '/ar' : ''}/blog/${p.slug}`,
        datePublished: p.date,
        image: abs(p.image),
      })),
    });
  }
  if (kind === 'post') {
    const p = data.post;
    const author = content.doctors.find((d) => d.slug === p.author);
    graph.push({
      '@type': ['BlogPosting', 'MedicalWebPage'],
      '@id': url + '#article',
      headline: pick(p.title, lang),
      description: pick(p.excerpt, lang),
      abstract: pick(p.answer, lang),
      image: abs(p.image),
      datePublished: p.date,
      dateModified: p.updated || p.date,
      inLanguage: lang,
      wordCount: data.wordCount,
      timeRequired: `PT${p.readMins}M`,
      articleSection: pick(p.category, lang),
      author: author ? { '@id': ID.doctor(author.slug) } : { '@id': ID.clinic() },
      reviewedBy: author ? { '@id': ID.doctor(author.slug) } : undefined,
      lastReviewed: p.updated || p.date,
      publisher: { '@id': ID.clinic() },
      mainEntityOfPage: { '@id': url + '#webpage' },
      about: data.tr ? { '@id': ID.treatment(data.tr.slug) } : undefined,
      isAccessibleForFree: true,
    });
    if (data.tr) graph.push(procedureNode(data.tr, lang));
    const f = faqNode(p.faq, lang, url);
    if (f) graph.push(f);
  }

  return JSON.stringify(clean({ '@context': 'https://schema.org', '@graph': graph })).replace(/</g, '\\u003c');
}

module.exports = { buildGraph };
