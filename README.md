# LK Transport & Tours

> Premium Ghanaian travel and vehicle rental marketing site

A single-page, fully responsive marketing website for **LK Transport & Tours** — a Ghana-based company offering guided tour packages and premium vehicle rentals (sedans, 4x4 SUVs, minibuses, luxury coaches).

Built with Next.js 16 (App Router), React 19, TypeScript (strict), and Tailwind CSS 3.

---

## Quick start

```bash
npm install
npm run dev        # → http://localhost:3000
```

For production:

```bash
npm run build && npm start
```

---

## Scripts

| Command                  | Action                                |
|--------------------------|---------------------------------------|
| `npm run dev`            | Start dev server (Turbopack)          |
| `npm run build`          | Production build                      |
| `npm start`              | Start production server               |
| `npm run typecheck`      | TypeScript check (`tsc --noEmit`)     |

---

## Environment

Copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your production domain:

```
NEXT_PUBLIC_SITE_URL=https://www.lktransporttours.com
```

---

## Project structure

```
src/
├── app/
│   ├── globals.css              # Global Tailwind styles
│   ├── layout.tsx               # Root layout, fonts, metadata, viewport
│   ├── page.tsx                 # Home page (all sections)
│   ├── not-found.tsx            # Custom 404 page
│   ├── icon.tsx                 # Favicon route
│   ├── opengraph-image.tsx      # OG image route
│   ├── robots.ts                # robots.txt route
│   └── sitemap.ts               # sitemap.xml route
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Fixed header + mobile drawer
│   │   ├── BottomTabs.tsx       # Phone-only sticky tab bar
│   │   └── Footer.tsx           # Site footer
│   ├── sections/
│   │   ├── Hero.tsx             # Full-bleed hero with stats
│   │   ├── About.tsx            # Company intro + pillars
│   │   ├── Tours.tsx            # 5 tour package cards
│   │   ├── Moments.tsx          # Travel experience highlights
│   │   ├── Cuisine.tsx          # Ghanaian dishes + food-tour CTA
│   │   ├── Nightlife.tsx        # Nightlife experiences + safe night rides
│   │   ├── Fleet.tsx            # 4 vehicle rental cards
│   │   ├── WhyChoose.tsx        # 6-point value proposition
│   │   ├── CallToAction.tsx     # Final conversion prompt
│   │   └── Contact.tsx          # Contact cards + info banner
│   ├── ui/
│   │   ├── Button.tsx           # Link-as-button (tel:, wa.me, #anchor)
│   │   ├── Logo.tsx             # Brand logo component
│   │   ├── SafeImage.tsx        # next/image with gradient fallback
│   │   ├── SectionHeading.tsx   # Reusable section header
│   │   ├── icons.tsx            # Inline SVG icons (WhatsApp, FB, IG, TikTok)
│   │   ├── motion.tsx           # Animation primitives (Reveal, Stagger, StaggerItem)
│   │   └── effects.tsx          # Marquee, GlowOrbs, Equalizer, SpiceMeter
│   ├── MotionProvider.tsx       # Global motion config (reduced-motion support)
│   └── JsonLd.tsx               # JSON-LD structured data (TravelAgency + LocalBusiness)
│
├── data/
│   ├── content.ts               # All typed content: tours, fleet, features, nav
│   └── images.ts                # Image URL map
│
├── hooks/
│   └── useActiveSection.ts      # IntersectionObserver hook for nav active state
│
├── lib/
│   ��── site.ts                  # Single source of truth: phones, email, hours, socials, address
│
└── types/
    └── css.d.ts                 # CSS module type declarations
```

---

## Architecture decisions

### Single source of truth

Business details live in `src/lib/site.ts` — phones, email, address, hours, social links. Edit this one file and every part of the UI, SEO metadata, and JSON-LD structured data follows.

### Content as typed data

All tours, fleet specs, features, and navigation are defined as typed arrays in `src/data/content.ts`. No CMS or database. The types (`TourPackage`, `Vehicle`, `Feature`) are exported and reused across components.

### Animations with `motion`

Scroll-triggered and mount animations use the [`motion`](https://motion.dev) library (successor to Framer Motion). Two primitives in `src/components/ui/motion.tsx`:

- **`Reveal`** — fade + slide + scale on scroll into view (or on mount)
- **`Stagger` / `StaggerItem`** — staggered entrance for lists and grids

All animations respect `prefers-reduced-motion` via `MotionProvider`.

### Images

`SafeImage` wraps `next/image` with a graceful gradient fallback when a remote image fails to load. Image sources are configured in `src/data/images.ts`.

### SEO & structured data

- Full Open Graph / Twitter card metadata in `layout.tsx`
- JSON-LD script (`TravelAgency` + `LocalBusiness` + `OfferCatalog`) in `JsonLd.tsx`
- Auto-generated `sitemap.xml`, `robots.txt`, and `opengraph-image`

---

## Before deployment

1. **Replace placeholder contacts** — update phone numbers, email, and address in `src/lib/site.ts`
2. **Replace images** — the images in `src/data/images.ts` point to `/public/images/`; populate that directory with your own assets
3. **Fill social links** — set `href` values in `SITE.socials` (empty ones are hidden)
4. **Add legal pages** — create `/privacy` and `/terms` routes if required

---

## Tech stack

| Layer            | Library                                    |
|------------------|--------------------------------------------|
| Framework        | Next.js 16 (App Router, Turbopack)         |
| UI Library       | React 19                                   |
| Language         | TypeScript 6 (strict mode)                 |
| Styling          | Tailwind CSS 3                             |
| Animations       | motion                                     |
| Icons            | lucide-react                               |
| Fonts            | Plus Jakarta Sans Variable + Inter Variable|
| Linting          | ESLint 9 + `eslint-config-next`            |