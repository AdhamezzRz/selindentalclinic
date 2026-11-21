/**
 * ─────────────────────────────────────────────────────────────
 *  SELIN Dental Aesthetics — SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────
 *  Everything a non-developer needs to change lives here.
 *  Any value can also be overridden with an environment variable
 *  (set them in Hostinger → Node.js app → Environment variables).
 *
 *  Leave a value as an empty string ('') to hide it on the site.
 */

const env = (key, fallback = '') =>
  process.env[key] !== undefined && process.env[key] !== '' ? process.env[key] : fallback;

module.exports = {
  brand: {
    name: 'SELIN',
    tagline: 'Dental Aesthetics',
    // Public URL of the site, used for SEO / sitemap / social cards.
    siteUrl: env('SITE_URL', 'https://selindental.com'),
  },

  contact: {
    // International format, digits only, no "+" (e.g. 201001234567).
    // When set, every "Book" button also offers WhatsApp.
    whatsapp: env('CONTACT_WHATSAPP', '201044049901'),
    // Display phone number, e.g. "+20 100 123 4567".
    phone: env('CONTACT_PHONE', '+20 10 44049901'),
    email: env('CONTACT_EMAIL', ''),
    address: {
      en: env('ADDRESS_EN', 'Clinic 4, First Floor, Centra B Building, Eterna Healthcare City, Mivida Compound, Extension of South 90th Street, New Cairo 1, Cairo Governorate 11483'),
      ar: env('ADDRESS_AR', 'عيادة 4، الدور الأول، مبنى سنترا B، إيترنا هيلثكير سيتي، كمبوند ميفيدا، امتداد شارع التسعين الجنوبي، القاهرة الجديدة 1، محافظة القاهرة 11483'),
    },
    // Paste the "src" of a Google Maps embed iframe here to show a live map.
    mapEmbed: env('MAP_EMBED_URL', 'https://www.google.com/maps?q=Selin+Dental+Aesthetics,+Eterna+Healthcare+City,+Mivida,+New+Cairo&output=embed'),
    // Link that opens directions in Google Maps.
    mapLink: env('MAP_LINK', 'https://www.google.com/maps/search/?api=1&query=Selin+Dental+Aesthetics+Eterna+Healthcare+City+New+Cairo'),
    hours: {
      en: env('HOURS_EN', 'Open 24 hours · by appointment'),
      ar: env('HOURS_AR', 'مفتوح 24 ساعة · بموعد مسبق'),
    },
  },

  // Used in Google structured data (schema.org) — fill in for best local SEO.
  location: {
    street: env('ADDRESS_STREET', 'Clinic 4, First Floor, Centra B Building, Eterna Healthcare City, Mivida Compound, Extension of South 90th Street'),        // e.g. "Building 12, 90th Street"
    city: env('ADDRESS_CITY', 'New Cairo'),            // e.g. "New Cairo"
    region: env('ADDRESS_REGION', 'Cairo Governorate'),        // e.g. "Cairo Governorate"
    postalCode: env('ADDRESS_POSTAL', '11483'),
    country: env('ADDRESS_COUNTRY', 'EG'),    // ISO country code
    lat: env('GEO_LAT', ''),                  // e.g. "30.0254"
    lng: env('GEO_LNG', ''),                  // e.g. "31.4913"
    // schema.org opening hours, e.g. "Sa-Th 12:00-22:00"
    openingHours: env('OPENING_HOURS', 'Mo-Su 00:00-23:59'),
    priceRange: env('PRICE_RANGE', '$$$'),
  },

  /**
   * GOOGLE RATING ★
   * Star ratings in Google Search / Maps come from your Google Business
   * Profile reviews. Paste the profile + "write a review" links here, and
   * enter your CURRENT Google rating & review count (real numbers only).
   * The site then shows a rating badge, and adds it to the structured data.
   */
  google: {
    businessUrl: env('GOOGLE_BUSINESS_URL', 'https://www.google.com/maps/search/?api=1&query=Selin+Dental+Aesthetics+Eterna+Healthcare+City+New+Cairo'),
    reviewUrl: env('GOOGLE_REVIEW_URL', ''),
    ratingValue: env('GOOGLE_RATING', '5.0'),   // e.g. "4.9"
    ratingCount: env('GOOGLE_RATING_COUNT', '82'), // e.g. "127"
    // Google Search Console verification token (meta tag content), optional
    siteVerification: env('GOOGLE_SITE_VERIFICATION', ''),
  },

  social: {
    instagram: env('SOCIAL_INSTAGRAM', 'https://www.instagram.com/selindental'),
    instagramHandle: env('SOCIAL_INSTAGRAM_HANDLE', '@selindental'),
    facebook: env('SOCIAL_FACEBOOK', ''),
    tiktok: env('SOCIAL_TIKTOK', ''),
  },

  // Booking requests are always saved to data/bookings.ndjson on the server.
  // Fill these in to ALSO receive each booking by e-mail.
  mail: {
    host: env('SMTP_HOST', ''),
    port: Number(env('SMTP_PORT', '465')),
    secure: env('SMTP_SECURE', 'true') === 'true',
    user: env('SMTP_USER', ''),
    pass: env('SMTP_PASS', ''),
    to: env('BOOKING_EMAIL_TO', ''),
    from: env('BOOKING_EMAIL_FROM', ''),
  },
};
