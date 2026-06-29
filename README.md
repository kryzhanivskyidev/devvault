# DevVault.io

Affiliate content site for developers — AI tools, security, crypto, finance reviews.

DevVault is an early-stage technical content platform focused on developer tools, AI assistants, security software, crypto products and automation workflows. The project is built with Astro and uses Markdown-based content collections to manage long-form articles, reviews and guides.

The architecture is optimized for static generation, fast page loads, simple editorial workflows and SEO-friendly publishing. Posts are stored as Markdown files with frontmatter metadata, while Astro generates individual article pages, category pages and an RSS feed.

The project also includes a lightweight React affiliate component for monetized links, affiliate disclosure blocks, external-link safety attributes and a clean dark UI designed for technical readers.

**Key features:**

- Astro 4 static site architecture
- Markdown-based article publishing
- Dynamic blog post pages
- Dynamic category pages
- RSS feed generation
- SEO meta description support
- Affiliate-ready link component
- Transparent affiliate disclosure
- External links with safe attributes
- Clean dark developer-focused UI
- Cloudflare Pages-ready deployment setup

**Project status:**

This is an early-stage content platform and publishing experiment. The current focus is on building a scalable content structure, improving SEO coverage and developing a consistent editorial system for developer-focused reviews and guides.

## Stack
- **Astro 4** — static site generator
- **React** — interactive components
- **Cloudflare Pages** — free hosting + CDN

## Commands
```bash
npm install      # встанови залежності
npm run dev      # localhost:4321
npm run build    # збери в ./dist
npm run preview  # перегляд build
```

## Додати нову статтю
Створи файл `src/content/posts/назва-статті.md` з frontmatter:
```markdown
---
title: "Заголовок"
excerpt: "Короткий опис"
date: "2026-06-18"
category: ai-tools  # або Security, Crypto, Finance
readTime: 8
tags: ["tag1", "tag2"]
---
Контент статті...
```


## Деплой на Cloudflare Pages
1. Push на GitHub
2. Cloudflare Pages → Connect to Git → вибери репо
3. Build command: `npm run build`
4. Output directory: `dist`
5. Готово — автодеплой при кожному push
