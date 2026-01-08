# Valentin Zelenyuk - Academic Website

A modern, clean academic website built with Astro and Tailwind CSS.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Tailwind CSS (if not already installed):
```bash
npm install -D tailwindcss @astrojs/tailwind
```

3. Start the development server:
```bash
npm run dev
```

## Content Management

### Publications

Add publications in `src/content/publications/` as markdown files. Example:

```markdown
---
title: "Paper Title"
authors: "Author 1, Author 2, and V. Zelenyuk"
journal: "Journal Name"
year: 2024
volume: "Volume Number"
pages: "1-20"
doi: "https://doi.org/..."
pdf: "https://link-to-pdf"
journalRank: "A*"
type: "journal"
featured: true
---

Optional abstract or description here.
```

### News

Add news items in `src/content/news/` as markdown files. Example:

```markdown
---
title: "News Title"
date: 2024-01-15
type: "publication" # or "talk", "award", "conference", "other"
description: "Brief description"
link: "https://optional-link.com"
---

Full content here (optional).
```

## Project Structure

```
src/
├── components/     # Reusable components (Header, Footer, etc.)
├── content/       # Markdown content (publications, news)
├── layouts/       # Page layouts
├── pages/         # Route pages
└── styles/        # Global styles and Tailwind config
```

## Pages

- `/` - Home page with hero section and highlights
- `/about` - Biography and background
- `/research` - Research interests and themes
- `/publications` - Publications list (from markdown)
- `/teaching` - Courses and teaching
- `/service` - Service and leadership
- `/students` - Information for prospective students
- `/news` - News and updates (from markdown)
- `/contact` - Contact information
- `/cv` - CV download page

## Customization

- Update personal information in `src/consts.ts`
- Modify navigation in `src/consts.ts` (NAV_ITEMS)
- Customize colors in `tailwind.config.mjs`
- Update styles in `src/styles/global.css`

## Build

```bash
npm run build
```

## Deploy

The site is configured for Cloudflare Pages. Deploy with:

```bash
npm run deploy
```
