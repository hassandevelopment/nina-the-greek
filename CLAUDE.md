# CLAUDE.md — Nina The Greek

## What This Is
Website for **Nina The Greek**, an authentic Greek restaurant in Saar, Bahrain. Owned by Chef Hussain. Opened late May 2026. Primary goal is **SEO optimization** (Google + AI search) since the restaurant just opened.

**Live site:** https://nina-the-greek.vercel.app/
**Repo:** https://github.com/hassandevelopment/nina-the-greek
**Supabase project:** `hhykbkdxsiclfjbrklyr` (region: ap-southeast-2)

---

## Tech Stack
- **Framework:** Next.js 16, App Router, SSR for SEO
- **Styling:** Tailwind CSS v4 — uses `@import "tailwindcss"` and `@theme inline {}` in `globals.css`. Does NOT use `tailwind.config.ts` for theme (that file exists but the real theme is in CSS)
- **PostCSS:** `@tailwindcss/postcss`
- **Fonts:** `next/font/google` — Cormorant Garamond (`--font-cormorant`) + Hanken Grotesk (`--font-hanken`), loaded in `src/app/layout.tsx`
- **Backend:** Supabase (PostgreSQL) for form submissions, client-side only (no server actions)
- **Deployment:** Vercel, auto-deploys on `git push origin main`

---

## Design Rules — STRICT, DO NOT BREAK

### Colors
**NO GOLD ANYWHERE.** Palette is strictly blue + cream. Tokens defined in `globals.css` `@theme inline {}`:

| Token | Hex | Usage |
|-------|-----|-------|
| `nina-blue` | `#1a4b8c` | Primary, headings, buttons |
| `nina-navy` | `#0e2d5a` | Dark backgrounds (hero, footer, CTAs) |
| `nina-sky` | `#4a7bc5` | Accents, eyebrows, links, hovers |
| `nina-muted` | `#9bb6dd` | Secondary text on dark backgrounds |
| `nina-cream` | `#faf8f5` | Page background, text on dark |
| `nina-sand` | `#f1ece2` | Alternate section backgrounds |
| `nina-body` | `#3a5680` | Body text |

### Typography
- **Headings & large body:** Cormorant Garamond (serif). Weight 400 for headings, italic 300 for pull-quotes.
- **Nav / labels / buttons / fine print:** Hanken Grotesk (sans). Weights 500-600.
- Eyebrow pattern: Hanken, 12px, `letter-spacing: .4em`, uppercase, Sky Blue.
- Body: Cormorant 400, 20-21px, line-height ~1.65.
- Nav/buttons: Hanken 500-600, 11-12px, `letter-spacing: .18-.2em`, uppercase.

### Components
- **Buttons:** Square (no border-radius). Solid blue on light bg, ghost (1px cream border) on dark bg.
- **Transitions:** Never use `transition-all`. Always list specific properties.
- **Meander borders:** PNG tiles (`meander-blue.png` / `meander-cream.png`), repeat-x, `background-size: auto 18px`. Opacity 0.6 on cream, 0.3 on navy. **Do NOT replace with SVGs** — user rejected that approach. The footer carries its own top meander, so sections directly above the footer should NOT add a `meander-bottom` (avoids doubled borders).
- **Hairline borders:** `rgba(26,75,140,.16)`
- **Olive branch accents:** Hand-painted blue watercolor branches (`olive-branch-1/2/3.png`, extracted from `menu-page-1.png` via white→transparent alpha mask) used as subtle corner watermarks on **light sections only** (cream/sand/white) — never on navy/dark. CSS classes in `globals.css`: corner classes `olive-tl/tr/bl/br` (use `::before`) and `olive-tl-2/tr-2/bl-2/br-2` (use `::after`, for opposing-corner pairs / coexisting with a `meander-bottom`). Variant classes `olive-v2`/`olive-v3` swap the source image; transforms mirror/flip for variety. Opacity ~0.14 desktop / ~0.11 mobile (shrunk, NOT hidden, on small screens). Parent section gets `position: relative`; the inner content container gets `relative` so text stays above the watermark.

### Content
- Price format: `BD x.xxx` (3 decimals, BD prefix)
- VAT note: "Prices inclusive of 10% VAT & 5% government levy"
- Restaurant hours: Open Daily, 3:00 PM – 11:00 PM
- Phone: 1732 2777 (tel link: +97317322777)
- Address: Avenue 57, Maqabah, Saar, Bahrain — rendered as a link to the Google Maps location (`https://www.google.com/maps/search/?api=1&query=Nina%20The%20Greek...`) on homepage (with "Get Directions" CTA), about, reserve, and footer
- Instagram: @nina_the_greek

---

## Project Structure

```
src/
  app/
    layout.tsx            # Root layout, font loading, Schema.org JSON-LD
    page.tsx              # Homepage — hero (logo only, no eyebrow), Private Events, Visit ("Find Us in Saar" w/ maps CTA)
    globals.css           # Theme tokens, meander classes, olive branch classes, utilities
    about/page.tsx        # Our Story (server component) — ends at Values section (no Contact section; footer covers it)
    menu/
      layout.tsx          # SEO metadata
      page.tsx            # Header section + full-width menu image (menu-page-1.png), server component
    private-events/
      layout.tsx          # SEO metadata
      page.tsx            # Multi-step event inquiry form → Supabase
    careers/
      layout.tsx          # SEO metadata
      page.tsx            # Job application form → Supabase
    gallery/page.tsx      # Photo gallery (server component, placeholders)
    reserve/
      layout.tsx          # SEO metadata
      page.tsx            # Reservation form → Supabase
  components/
    Header.tsx            # Sticky nav. Transparent (cream text) ONLY over the homepage hero; every other page renders solid blurred-cream (blue text) from load. Derived `solid = scrolled || !isHome`. Logo uses intrinsic 805x790 + CSS h-9 w-auto + priority.
    Footer.tsx            # Site footer with top meander border, nav, info grid (Location/Hours/Connect — canonical contact block)
  data/
    menu.ts               # Menu data (categories, items, prices) — still the source of truth; menu page now shows the image, not this data
  lib/
    supabase.ts           # Supabase client init
public/assets/
  hero-watercolor.png     # Blue monochrome painting for hero bg
  logo-blue.png           # Full wordmark (light bg)
  logo-cream.png          # Full wordmark (dark bg)
  mark-blue.png           # Medallion mark (light bg), 805x790 RGBA
  mark-cream.png          # Medallion mark (dark bg), 805x790 RGBA
  meander-blue.png        # Greek key tile (light bg)
  meander-cream.png       # Greek key tile (dark bg)
  menu-page-1.png         # Physical menu artwork (3491x2522) — shown on /menu; also source for olive branches
  olive-branch-1.png      # Watercolor olive branch accent (horizontal full branch)
  olive-branch-2.png      # Watercolor olive branch accent (lush angled branch)
  olive-branch-3.png      # Watercolor olive branch accent (leafy branch w/ olives)
```

---

## Supabase Tables

All tables have **RLS enabled** with anon insert policies.

### `event_requests`
event_type, guest_count, duration, private_chef (bool), preferred_date, time_preference, special_requests, first_name, last_name, email, phone, company, created_at

### `job_applications`
first_name, last_name, email, phone, position, age (int), gender, in_bahrain (bool), expected_salary (float), about, cover_letter, cv_filename, created_at

### `reservations`
name, phone, email, preferred_date, preferred_time, party_size, special_requests, created_at

---

## SEO Implementation
- SSR via App Router (all pages server-rendered by default)
- Client-component pages use `layout.tsx` wrappers to export `metadata` (menu, private-events, careers, reserve)
- Schema.org `Restaurant` JSON-LD in root layout
- OpenGraph metadata on all pages
- Semantic HTML throughout

---

## What's Done

1. All 7 pages built and styled to the design system
2. All 3 forms wired to Supabase (private-events, careers, reserve)
3. Header: transparent over homepage hero, solid blurred-cream (nav visible) on all other pages from load
4. Footer with meander accent, nav, info grid (canonical contact block)
5. Schema.org structured data on homepage
6. SEO metadata on all pages + sitemap, robots.txt, branded favicon, OpenGraph image, custom 404
7. Git repo initialized, pushed to GitHub
8. Deployed to Vercel (auto-deploys on push)
9. Brand assets integrated (logos, meander tiles, hero watercolor)
10. Menu page = full-width physical menu image (`menu-page-1.png`); homepage menu image section removed
11. Olive branch watercolor accents on all light sections (desktop + mobile)
12. Address links to Google Maps; private-events stepper redesigned (minimal dot/hairline)

---

## What's Remaining / TODO

### High Priority
- **Real photography** — all images are placeholders. Need food shots, interior photos, team photos. Gallery page has named placeholder cards ready to swap.
- **CV file upload** — careers form currently only stores `cv_filename`. Need Supabase Storage bucket + actual file upload.
- **Email notifications** — no notification when forms are submitted. Consider Supabase Edge Function or webhook to send email to restaurant on new submission.
- **Custom domain** — site is at `nina-the-greek.vercel.app`. Need to connect `ninathegreek.com` (or whatever domain) in Vercel.

### Medium Priority
- **Google Business Profile** — set up and link to website
- **Google Analytics / Search Console** — not yet connected
- **Exact Maps location** — address links use a Maps search query (name + address); swap in the real place/share URL or Place ID when available
- **Mobile testing** — built mobile-first but needs real device QA

### Low Priority / Nice to Have
- **Lightbox on gallery** — image modal for full-size viewing when real photos arrive
- **Animations** — subtle scroll-triggered reveals (only animate transform + opacity)
- **Loading states** — form submit buttons don't show loading spinner
- **WhatsApp integration** — common in Bahrain for restaurant bookings

---

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=https://hhykbkdxsiclfjbrklyr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoeWtia2R4c2ljbGZqYnJrbHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NTUzMDUsImV4cCI6MjA5NTAzMTMwNX0.2DmUSbQGLL1DtR_mcZ2He8yVYlhAxQAmEMYVKaksAlc

```


---

## Dev Commands

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build
npm run lint         # ESLint
git push origin main # Auto-deploys to Vercel
```
