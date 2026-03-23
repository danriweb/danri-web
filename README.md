# DanriWeb | Next-Gen Personal Portfolio

![DanriWeb Portfolio Demo](.github/assets/readme-demo.png)

**Live:** [https://danri-web.ru/en](https://danri-web.ru/en)

This is my personal portfolio website, built to showcase not just my projects, but my approach to modern frontend development. The primary goal was to create a highly optimized, fully accessible, and production-ready application rather than just a simple static page.

## Highlights

- **Deep Accessibility (a11y):** Fully semantic HTML, full keyboard navigation support, focus-traps where necessary, and screen-reader optimizations (e.g., hiding decorative language badges via `aria-hidden`).
- **Robust i18n (5 Languages):** Full support for English, Russian, German, Japanese, and Korean. Includes locale-specific typography optimizations (dynamically loading `Noto Sans JP` and `Noto Sans KR`) and tailored line-breaking strategies (`keep-all` for Korean, hyphenation for German).
- **Performance First:** Render-optimized sections with lazy-loading for heavy content and micro-animations. Retains a predominantly static footprint (SSG) for lightning-fast loads, while utilizing Next.js Middleware for dynamic locale routing.
- **Scalable Architecture:** Codebase structured following the **Feature-Sliced Design (FSD)** methodology, ensuring strict boundaries, high maintainability, and ease of future scaling.
- **CI/CD Pipeline:** Fully dockerized deployment, automated via GitHub Actions to build and push images via GHCR, keeping the production VPS lightweight.

## Tech Stack

- **Core:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui
- **Animations:** Framer Motion
- **i18n:** next-intl
- **State Management:** Zustand (lightweight client-state)
- **Validation:** react-hook-form + Zod
- **Deployment:** Docker, GitHub Actions, GHCR
