# Nina The Greek

Website for Nina The Greek — an authentic Greek restaurant in Saar, Bahrain by Chef Hussain.

## Tech Stack

- **Framework:** Next.js 16 (App Router, SSR)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Fonts:** Cormorant Garamond (headings) + Hanken Grotesk (UI/body)
- **Backend:** Supabase (PostgreSQL) for form submissions
- **Deployment:** Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, about preview, CTAs |
| `/menu` | Full menu (Gusto-style categories) |
| `/about` | Our Story / Who We Are |
| `/private-events` | Multi-step inquiry form → Supabase |
| `/careers` | Job application form → Supabase |
| `/gallery` | Photo gallery (placeholders until photos arrive) |
| `/reserve` | Reservation form → Supabase |

## Getting Started

```bash
# Install dependencies
npm install

# Copy env file and add your Supabase keys
cp .env.local.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |

## Brand Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Aegean Blue | `#1a4b8c` | Primary, headings |
| Deep Navy | `#0e2d5a` | Dark backgrounds |
| Sky Blue | `#4a7bc5` | Accents, links |
| Muted Blue | `#9bb6dd` | Secondary text on dark |
| Cream | `#faf8f5` | Page background |
| Sand | `#f1ece2` | Alternate sections |
| Body | `#3a5680` | Body text |

## Supabase Tables

- `event_requests` — private event inquiries
- `job_applications` — career applications
- `reservations` — table reservations

All tables have RLS enabled with anon insert policies.
