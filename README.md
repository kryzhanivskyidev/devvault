# DevVault.io

Affiliate content site for developers — AI tools, security, crypto, finance reviews.

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
category: "AI Tools"  # або Security, Crypto, Finance
readTime: 8
tags: ["tag1", "tag2"]
---
Контент статті...
```

## Афілейт посилання
Заміни `YOUR_REF` в `src/components/AffiliateLink.jsx` на реальні ref-коди після реєстрації.

## Деплой на Cloudflare Pages
1. Push на GitHub
2. Cloudflare Pages → Connect to Git → вибери репо
3. Build command: `npm run build`
4. Output directory: `dist`
5. Готово — автодеплой при кожному push
