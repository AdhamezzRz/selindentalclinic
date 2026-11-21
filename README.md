# SÉLIN Dental Aesthetics — Website

Bilingual (English / العربية) Node.js website for **SÉLIN Dental Aesthetics** — Dr. Walid Zaki & Dr. Mohammed Khaled.

Express + EJS (server-rendered for SEO), GSAP + Lenis motion, zero build step.

## Highlights

- **Lunar brand system** from the 2026 brand guidelines: Deep Lunar, Twilight Stone, Pearl Ash, Champagne Moon (used sparingly), Smoke, Evening Clay, Lunar Dust.
- **Cinematic home page**: moon-phase preloader, star field, the promo film in an arch that expands to full screen on scroll, cursor-following treatment previews, horizontal clinic tour, word-by-word manifesto.
- **Before / after "moon" sliders** for cases, plus an interactive **Shade Studio** (VITA shade guide simulator).
- **Real clinic imagery only**: every clinic, reception and suite photo is a frame cut from the promo film.
- **Booking form** → saved to `data/bookings.ndjson` and optionally e-mailed (SMTP). WhatsApp button when a number is configured.
- **Journal (blog)** in English and Arabic, with a direct-answer box, table of contents, key takeaways, FAQs, author box and share links.

## SEO and GEO (AI search)

- Server-rendered HTML in `/` (English) and `/ar` (Arabic, RTL), with `hreflang` en / ar / x-default.
- One connected **schema.org graph** per page: `Dentist` + `MedicalClinic` + `LocalBusiness`, `Physician` for each doctor, `MedicalProcedure` for each treatment, `FAQPage`, `BlogPosting` + `MedicalWebPage`, `BreadcrumbList`, `WebSite`, `ReserveAction`, and optionally `AggregateRating` / `Review`.
- `/sitemap.xml`: both languages, hreflang alternates, image sitemap, `lastmod`.
- `/robots.txt` explicitly welcomes AI crawlers: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and others.
- `/llms.txt` and `/llms-full.txt`: clean factual briefs for ChatGPT, Claude, Perplexity and Gemini.
- Every article opens with a 2–4 sentence direct answer, written for featured snippets and AI citations.
- Canonical URLs, trailing-slash 301s, Open Graph and Twitter cards, and a `speakable` spec.

### ★ Google star ratings — please read

Stars next to your clinic in Google Search and Maps come from your **Google Business Profile** reviews. Google does not show stars that a business publishes about itself on its own website. To get stars:

1. Claim or verify your Google Business Profile and collect reviews. Use `GOOGLE_REVIEW_URL` for the "Review us" button.
2. Put your **real** current rating and review count in `GOOGLE_RATING` / `GOOGLE_RATING_COUNT`. The site then shows a rating badge and adds it to the structured data.
3. Add real patient reviews (with permission) in `src/content.js → reviews`. Never invent reviews.

## Run locally

```bash
npm install
npm start            # http://localhost:3000
```

## Deploy on Hostinger (Node.js Web App from GitHub)

1. hPanel → **Websites → Add website → Node.js Apps → Import Git repository**, then connect GitHub and pick this repo and branch.
2. Build settings: **Framework**: Express (or "Other"). **Node version**: 20 or 22. **Install**: `npm install`. **Start command**: `npm start`. **Entry file**: `server.js`.
3. **Environment variables**: copy what you need from `.env.example`. Set at least `NODE_ENV=production` and `SITE_URL`.
4. Connect your domain, then submit `https://YOURDOMAIN/sitemap.xml` in Google Search Console.

> Booking requests are written to `data/bookings.ndjson`. Redeploys can reset the app folder, so set the SMTP variables to receive every booking by e-mail as well.

## Editing content

| What | Where |
|---|---|
| Phone, WhatsApp, address, hours, Instagram, Google rating | `src/config.js` (or environment variables) |
| Treatments, doctors, cases, FAQ, clinic tour, reviews | `src/content.js` |
| Blog articles (EN + AR) | `src/blog.js` |
| Interface text (EN + AR) | `src/i18n.js` |
| Styles / animation | `public/css/main.css`, `public/js/main.js` |

### Adding real before / after cases

1. Put matching photos in `public/media/cases/`, e.g. `case-01-before.jpg` and `case-01-after.jpg`. Use the same size and framing, ideally 4:3.
2. In `src/content.js → cases`, set `before: '/media/cases/case-01-before.jpg'`, `after: '/media/cases/case-01-after.jpg'` and remove `sim`.

Until then, cases are shown as clearly labelled **illustrative simulations**.

### Doctor portraits

Add `public/media/doctors/walid-zaki.jpg` (portrait, 4:5) and set `photo: '/media/doctors/walid-zaki.jpg'` in `src/content.js`. Do the same for Dr. Mohammed Khaled.

## Media

- `public/media/selin-promo.mp4`: the promo film, re-encoded for web (1080p, faststart).
- `public/media/selin-promo-720.mp4`: muted loop used in the hero and the scroll film.
- `public/media/tour/*.jpg`: clinic frames cut from the promo.
- `public/media/gen/*.webp`: editorial still-life images for treatments (products only, no patients and no clinic spaces).
