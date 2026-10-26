# Portfolio (bold & kinetic) — Design Spec

**Date:** 2026-10-26
**Project:** `C:\Users\ashutosh vats\portfolio-kinetic`
**Owner:** Ashutosh Vats (ashutoshvats03)

## Purpose

A single-page, high-impact portfolio for recruiters/hiring managers that showcases Ashutosh's projects (AI agents, real-time chat, e-commerce, automation), experience, and skills in a bold, kinetic, neubrutalist style. Audience is non-technical recruiters, so copy is plain and outcomes-focused; depth lives behind project links.

## Success criteria

- Loads fast, looks striking on desktop and mobile (375–1440px).
- All 7 projects visible with one-click access to repos/demos.
- Contact is one click away (mailto + copy email + GitHub/LinkedIn).
- Respects `prefers-reduced-motion` and WCAG AA contrast.
- No backend required; deployable as static/Next.js.

## Stack

- Next.js 15 (App Router), React 19, Tailwind CSS 4
- framer-motion (motion), lucide-react (icons)
- Fonts: Lexend Mega (display) + Public Sans (body) via `next/font/google`
- No backend, no DB, no env vars.

## Information architecture (single page + /resume)

Route `/` (single scrollable page, anchor nav):
1. **Hero** — name, role, location, CTAs
2. **Marquee** — tech stack ticker
3. **Projects** — masonry grid (7 cards)
4. **About** — bio + tech stack grid
5. **Experience & Education** — timeline
6. **Contact** — mailto + copy email + socials

Route `/resume` — printable resume (education, experience, skills).

## Design tokens

- Colors: bg `#FAFAFA`, fg `#09090B`, primary `#18181B`, accent `#2563EB`, muted `#E8ECF0`, border `#E4E4E7`, destructive `#DC2626`.
- Radius: 0px (sharp). Borders: 2–3px solid.
- Typography: Lexend Mega 700+ for display (uppercase headlines), Public Sans 400/500 for body.
- Spacing: 4/8px rhythm, sections 80–120px vertical.
- Motion: framer-motion `whileInView` reveals, parallax, marquee. All gated by `prefers-reduced-motion`.

## Content (from Obsidian notes)

**Bio:** "I'm Ashutosh Vats, a developer with a strong focus on backend technologies. I leverage problem-solving and logical thinking to build scalable, efficient, cost-effective solutions. Passionate about robust automation and deployment. Knowledge of system design guides tool/tech selection."

**Education:**
- Heritage Institute of Technology, Kolkata — B.Tech, CGPA 7.3, 2022–2026
- Collegiate High School — 12th, 81.6%, 2021–2022
- Holycross International School — 10th, 82.6%, 2019–2020

**Experience:**
- Spatialty.ai — Software Developer (2024–Present): web apps, Django migration, dashboards

**Projects (7):**
1. chat-app — real-time messaging (Next.js, Socket.IO, RabbitMQ, MongoDB, Redis, Docker, AWS EC2) — repo ashutoshvats03/chat-app
2. AI data agent — LangGraph/LangChain natural-language SQL + ETL agent (Python) — repo ashutoshvats03/aiAgent
3. scraped news — news scraping + LLM summary/fact-check (Next.js, Django, Selenium, Ollama) — repo ashutoshvats03/scraped_news
4. Instagram automation — in-progress multimodal reel pipeline (FFmpeg, Whisper, OCR, VLM) — (no repo yet)
5. SideEye — e-commerce (Next.js, Postgres, Razorpay/COD) — repo ashutoshvats03/sideeye (if exists)
6. Ticket dashboard — support tickets (Next.js, Postgres) — repo ashutoshvats03/Quantek
7. Spatialty dashboard — internal web app (Node.js → Django)

**Contact:** contact.ashutosh03@gmail.com, phone 8936820933, GitHub ashutoshvats03, LinkedIn (TBD — placeholder).

## Components

- `Hero` — large name, role, CTAs
- `Marquee` — infinite scroll ticker
- `ProjectCard` — hover reveal, tech tags, links
- `TechGrid` — grouped skill chips
- `Timeline` — experience/education
- `CopyEmail` — clipboard button with toast
- `Navbar` — sticky top anchor links + mobile menu

## Motion & a11y

- All motion via framer-motion; `useReducedMotion()` disables non-essential animation and renders final state.
- Focus rings visible (2px blue).
- Semantic HTML, alt text, aria-labels on icon buttons.
- Color contrast verified ≥4.5:1.

## Out of scope

- Blog (link to existing Wix site), CMS, analytics, contact backend, dark/light toggle (light only, high contrast).
- No tests required (static portfolio); lint + build must pass.

## File layout

```
portfolio-kinetic/
  src/app/
    layout.js, page.js, globals.css
    resume/page.js
  src/components/
    Hero.jsx, Marquee.jsx, ProjectCard.jsx, TechGrid.jsx,
    Timeline.jsx, CopyEmail.jsx, Navbar.jsx, Footer.jsx
  public/ (images, favicon)
  design-system/ashutoshportfolio/MASTER.md
  package.json, tailwind config, next config, README.md
```

## Risks

- Lexend Mega is a variable font; load only needed weights to keep bundle small.
- Marquee must not cause layout shift; use CSS transform animation.
- Image assets (profile photo) may be missing — use a placeholder avatar with initials.
