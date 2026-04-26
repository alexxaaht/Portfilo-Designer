# Elvin Garaev — Portfolio

Product designer portfolio built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- **Framework** — Next.js 15 (App Router)
- **Styling** — Tailwind CSS v3 (design tokens in `tailwind.config.ts`)
- **Animations** — Framer Motion
- **Language** — TypeScript
- **Deployment** — Vercel (zero-config)

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (html + body + custom cursor)
│   ├── (main)/
│   │   ├── layout.tsx          # Navbar + Footer for home
│   │   └── page.tsx            # Home page
│   └── work/
│       ├── layout.tsx          # Footer for case pages
│       └── [slug]/
│           └── page.tsx        # Dynamic case study pages
│
├── components/
│   ├── Navbar.tsx
│   ├── CaseNavbar.tsx
│   ├── Footer.tsx
│   ├── CustomCursor.tsx        # Magnetic ring cursor with lerp
│   ├── ui/
│   │   └── Tag.tsx
│   ├── sections/
│   │   ├── ProjectCard.tsx
│   │   ├── CaseHero.tsx
│   │   └── CaseSection.tsx
│   └── animations/
│       ├── FadeIn.tsx
│       └── ScrollReveal.tsx
│
├── lib/
│   ├── types.ts                # TypeScript types
│   └── projects.ts             # All project data + case content
│
└── hooks/
    └── useCustomCursor.ts

public/
└── images/
    ├── misc/                   # Home page images (photo, project thumbnails)
    ├── cryptoswift/
    ├── ifreq/
    ├── p3-wealth/
    ├── p3marine/
    ├── safe/
    └── xgo/
```

## Adding a new case study

1. Add images to `public/images/<slug>/`
2. Add a `Project` entry to `projects` array in `src/lib/projects.ts`
3. Add a `CaseStudy` entry to `cases` array with sections and image paths
4. The page at `/work/<slug>` is generated automatically

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
# First time
npx vercel

# Every subsequent deploy (or just push to main)
git add . && git commit -m "update" && git push
```

Vercel auto-detects Next.js — no configuration needed.

## Design tokens

All design values are in `tailwind.config.ts`:

```ts
colors: {
  bg:      '#111110',   // page background
  surface: '#1A1A18',   // card/elevated surface
  text:    '#F2F0EC',   // primary text
  sub:     '#B8B4AC',   // secondary text
  dim:     '#6E6B65',   // tertiary / labels
  line:    'rgba(255,255,255,0.08)',
  line2:   'rgba(255,255,255,0.16)',
}
```

Each case study has its own `accent` hex color defined in `projects.ts`.
