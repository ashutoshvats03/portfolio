# Portfolio (bold & kinetic) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page, bold/kinetic portfolio (Next.js 15 + Tailwind 4 + framer-motion) showcasing Ashutosh's projects, experience, and skills, with a separate printable resume route.

**Architecture:** Next.js App Router. One scrollable home page composed of section components (Hero, Marquee, Projects, About, Timeline, Contact), plus `/resume`. All data is static (hardcoded from Obsidian notes). Motion via framer-motion gated by `prefers-reduced-motion`. No backend.

**Tech Stack:** Next.js 15.5, React 19, Tailwind 4, framer-motion 12, lucide-react. Fonts Lexend Mega + Public Sans via next/font.

**Spec:** `docs/superpowers/specs/2026-10-26-portfolio-design.md`

## Global Constraints

- Project root: `C:\Users\ashutosh vats\portfolio-kinetic` (all app code lives here).
- No backend, no DB, no env vars, no secrets.
- Sharp corners (0px radius), thick 2–3px borders, monochrome + `#2563EB` accent.
- Lexend Mega for display (uppercase headlines), Public Sans for body.
- All motion respects `prefers-reduced-motion` (render final state).
- Contrast ≥4.5:1, visible focus rings, semantic HTML.
- Lint + build must pass; no tests required (static site).

## Review Focus

- Reduced-motion users must see final state, not blank/hidden content.
- Copy-email button must work without clipboard API fallback (older browsers).
- Project cards must be keyboard-focusable and announce links.
- Mobile (375px): hero name must not overflow; marquee must not cause horizontal scroll.
- Resume route must be printable (no fixed nav overlapping).

---

### Task 1: Scaffold + design tokens + fonts

**Files:**
- Create: `portfolio-kinetic/package.json`, `next.config.mjs`, `postcss.config.mjs`, `jsconfig.json`, `src/app/globals.css`, `src/app/layout.js`
- Create: `portfolio-kinetic/README.md`

**Interfaces:**
- Produces: `RootLayout` with fonts loaded, `globals.css` with CSS variables (`--color-*`, `--font-display`, `--font-body`)

- [ ] **Step 1: Scaffold Next.js 15 (App Router, Tailwind 4, JS) + install framer-motion + lucide-react**
- [ ] **Step 2: Configure Tailwind 4 theme tokens (colors, fonts, radius 0) in globals.css via @theme**
- [ ] **Step 3: Load Lexend Mega + Public Sans via next/font/google in layout.js; apply to html**
- [ ] **Step 4: Write README (setup, deploy to Vercel/GitHub Pages note)**
- [ ] **Step 5: Run `npm run build` to verify scaffold compiles**
- [ ] **Step 6: Commit**

### Task 2: Hero + Marquee + Navbar

**Files:**
- Create: `src/components/Navbar.jsx`, `src/components/Hero.jsx`, `src/components/Marquee.jsx`
- Modify: `src/app/page.js`

**Interfaces:**
- Consumes: design tokens from Task 1
- Produces: `<Hero />`, `<Marquee items={[]} />`, `<Navbar />`

- [ ] **Step 1: Build Navbar (sticky top, anchor links, mobile hamburger)**
- [ ] **Step 2: Build Hero (giant name, role, location, CTAs, parallax grid bg) with reduced-motion fallback**
- [ ] **Step 3: Build Marquee (infinite scroll ticker, CSS transform animation)**
- [ ] **Step 4: Compose in page.js with section anchors**
- [ ] **Step 5: Verify in browser at 375px + 1440px**
- [ ] **Step 6: Commit**

### Task 3: Projects grid

**Files:**
- Create: `src/components/ProjectCard.jsx`, `src/data/projects.js`
- Modify: `src/app/page.js`

**Interfaces:**
- Consumes: `projects` array `{title, summary, tech[], repo, demo?, status}`
- Produces: `<ProjectCard project={...} />`

- [ ] **Step 1: Create projects data (7 projects with titles, summaries, tech, links, status)**
- [ ] **Step 2: Build ProjectCard (hover reveal, tech tags, links, keyboard-focusable)**
- [ ] **Step 3: Build masonry grid section with filter chips (All / AI / Web / In-progress)**
- [ ] **Step 4: Verify hover + keyboard + mobile**
- [ ] **Step 5: Commit**

### Task 4: About + TechGrid

**Files:**
- Create: `src/components/TechGrid.jsx`
- Modify: `src/app/page.js`

**Interfaces:**
- Consumes: tech stack groups from spec
- Produces: `<TechGrid groups={...} />`

- [ ] **Step 1: Add bio section + TechGrid (grouped chips: Languages, Frontend, Backend, DB, DevOps)**
- [ ] **Step 2: Verify layout at 375/768/1440**
- [ ] **Step 3: Commit**

### Task 5: Experience & Education timeline

**Files:**
- Create: `src/components/Timeline.jsx`
- Modify: `src/app/page.js`

- [ ] **Step 1: Build Timeline (vertical, animated on scroll, reduced-motion fallback)**
- [ ] **Step 2: Add experience + education data**
- [ ] **Step 3: Verify**
- [ ] **Step 4: Commit**

### Task 6: Contact + CopyEmail

**Files:**
- Create: `src/components/CopyEmail.jsx`, `src/components/Contact.jsx`
- Modify: `src/app/page.js`

- [ ] **Step 1: Build CopyEmail (clipboard API + fallback + toast)**
- [ ] **Step 2: Build Contact section (mailto, GitHub, LinkedIn, copy email)**
- [ ] **Step 3: Verify copy works + toast**
- [ ] **Step 4: Commit**

### Task 7: Resume route

**Files:**
- Create: `src/app/resume/page.js`

- [ ] **Step 1: Build printable resume (education, experience, skills, print CSS)**
- [ ] **Step 2: Verify print preview (no nav overlap)**
- [ ] **Step 3: Commit**

### Task 8: Polish + a11y + build

**Files:**
- Modify: various

- [ ] **Step 1: Add skip-to-content link, focus rings, aria-labels, alt text**
- [ ] **Step 2: Test reduced-motion (devtools) + keyboard nav**
- [ ] **Step 3: Run `npm run lint` and `npm run build` — fix all errors**
- [ ] **Step 4: Lighthouse-style check (manual: no layout shift, fast load)**
- [ ] **Step 5: Final commit**
