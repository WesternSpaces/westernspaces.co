# Western Spaces Website

Promo website for Western Spaces, a housing research consultancy. Built with Astro 5, styled with Tailwind CSS, hosted on Cloudflare Pages.

**Live**: https://westernspaces.co

## Quick Start

```sh
npm install
npm run dev          # localhost:4321
npm run build        # production build to dist/
```

## Adding a Project

Drop a new `.mdx` file in `src/content/projects/`:

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

Full project description here.
```

Categories: `housing-needs-assessment`, `housing-strategy`, `market-feasibility-analysis`, `comprehensive-planning`, `policy-guidance`

Set `featured: true` (max three) to feature on the homepage.

## Deployment

Pushes to `main` on GitHub auto-deploy via Cloudflare Pages. No manual steps needed.
