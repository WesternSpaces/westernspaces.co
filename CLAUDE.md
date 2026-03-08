# Western Spaces — Promo Website

## Hosting & Deployment

- **Live URL**: https://westernspaces.co
- **Host**: Cloudflare Pages (project: `westernspaces-co`)
- **Repo**: github.com/WesternSpaces/westernspaces.co
- **Auto-deploy**: Every push to `main` triggers a build
- **Build**: `cd site && npm install && npm run build` → `site/dist`
- **Framework**: Astro 5 (static output)
- **Cloudflare dashboard**: dash.cloudflare.com (Sarah@westernspaces.co)

## Local Development

```sh
cd site
npm install
npm run dev        # localhost:4321
npm run build      # production build to dist/
```

## Site Structure

```
site/src/
├── pages/              # Routes
│   ├── index.astro         # Homepage
│   ├── about.astro
│   ├── contact.astro
│   ├── resources.astro
│   ├── 404.astro
│   └── projects/
│       ├── index.astro         # Project listing with category filters
│       └── [...slug].astro     # Individual project pages
├── content/
│   └── projects/           # Project data (MDX files)
├── components/
│   ├── global/             # Header, Footer, Nav, SEO, Logo
│   ├── sections/           # Page sections (HomeHero, StatsBar, ServicesGrid, etc.)
│   └── ui/                 # Reusable UI (Button, Card, Tag, CategoryBand, etc.)
├── layouts/                # BaseLayout, PageLayout
├── assets/images/          # Images (processed by Astro at build)
└── styles/global.css       # Tailwind + custom color tokens
```

## Adding a New Project

Create `site/src/content/projects/project-slug.mdx`:

```mdx
---
title: Project Name
client: Client Name
year: 2026
location: Town, Colorado
category: housing-needs-assessment
summary: One-sentence description.
featured: false
deliverables:
  - Report Name
stats:
  - value: "123"
    label: "Units"
---

Project description in markdown. This appears on the individual project page.
```

**Categories** (must be one of):
- `housing-needs-assessment`
- `housing-strategy`
- `market-feasibility-analysis`
- `comprehensive-planning`
- `policy-guidance`

**Optional fields**: `coverImage`, `externalUrl`, `year2` (for multi-year), `ongoing: true`

Set `featured: true` on up to three projects to show them on the homepage.

## Design Tokens (Tailwind)

Colors defined in `site/src/styles/global.css`:
- `bark` (dark brown) — headers, dark backgrounds
- `gold` — accents, active states, stat numbers
- `ridge` — muted text, secondary elements
- `parchment` — light warm background
- `cream` — text on dark backgrounds
- `sandstone` — subtle accents
- `sage` — housing strategy category color
- `snow` — white backgrounds
- `charcoal` — body text

Fonts: Playfair Display (serif headings), Source Sans 3 (body)

## Work Standards

Never settle for "close enough." Always find the actual answer, the real link, the correct data. If something can't be verified, say so — don't approximate and move on.

## Writing Style

All project descriptions and client-facing copy must follow the style guide at `01-Promo/style-guide.md` (Economist style, US English).

- Short words, active voice, concrete nouns, cut filler
- **Never use "key"** as an adjective — use "main", "central", or drop it
- Traps to avoid: "meaningful", "essentially", "approximately", "extremely", "very", "currently", "significant", "stakeholders", "transformative", "facilitate"
- Professional/analytical tone — not advocacy
- Spell out one through nine, numerals for 10+
- Serial comma: red, white, and blue
