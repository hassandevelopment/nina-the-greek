# CLAUDE.md — Nina The Greek

## Project Overview
Website for Nina The Greek, an authentic Greek restaurant in Saar, Bahrain. Owned by Chef Hussain. Opened June 2026. Primary goal: SEO optimization for Google and AI search.

## Architecture
- Next.js 16 with App Router (SSR for SEO)
- Tailwind CSS v4 — uses `@import "tailwindcss"` and `@theme inline {}` in globals.css, NOT tailwind.config.ts
- PostCSS via `@tailwindcss/postcss`
- Supabase for form data (event_requests, job_applications, reservations)
- Schema.org JSON-LD structured data on homepage

## Design Rules — STRICT
- **NO GOLD ANYWHERE** — blue + cream palette only
- Typography: Cormorant Garamond (serif, headings/body), Hanken Grotesk (sans, nav/labels/buttons)
- Square buttons (no border-radius), ghost buttons on dark backgrounds
- Meander (Greek key) PNG tiles as section accents — do NOT replace with SVGs
- Price format: "BD x.xxx" (3 decimals, BD prefix)
- VAT note: "Prices inclusive of 10% VAT & 5% government levy"
- Never use `transition-all` — list specific properties

## Brand Colors (defined in globals.css @theme)
- nina-blue: #1a4b8c (primary)
- nina-navy: #0e2d5a (dark bg)
- nina-sky: #4a7bc5 (accents)
- nina-muted: #9bb6dd (secondary on dark)
- nina-cream: #faf8f5 (page bg)
- nina-sand: #f1ece2 (alt sections)
- nina-body: #3a5680 (body text)

## Key Files
- `src/app/globals.css` — theme tokens, meander classes, utility classes
- `src/components/Header.tsx` — scroll-aware sticky nav
- `src/components/Footer.tsx` — site footer with meander border
- `src/lib/supabase.ts` — Supabase client init
- `public/assets/` — logos, meander PNGs, hero watercolor

## Font Loading
Fonts loaded via `next/font/google` in `src/app/layout.tsx`:
```
Cormorant_Garamond → variable: --font-cormorant
Hanken_Grotesk → variable: --font-hanken
```

## Forms → Supabase
All three forms (private-events, careers, reserve) insert to Supabase with RLS anon insert policies. Client-side only — no server actions yet.

## What's Missing
- Real food/interior photos (using placeholders)
- CV file upload (currently just stores filename)
- Email notifications on form submission
- Git repo + Vercel deployment
