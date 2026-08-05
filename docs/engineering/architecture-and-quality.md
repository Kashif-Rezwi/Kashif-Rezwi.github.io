# Architecture & Quality

- **Purpose:** The leanest technical direction that supports the approved experience, with explicit trade-offs and acceptance criteria. One stack, one hosting path — alternatives were evaluated and are recorded as rejected, not left as competing options.
- **Authority:** Phase 0C synthesis (2026-08-05) from the 0B audit (performance/accessibility/SEO findings) and the approved design/IA brief. Owner directives outrank this document.
- **Last updated:** 2026-08-05
- **Related:** [product-and-design-brief.md](../strategy/product-and-design-brief.md) · [implementation-roadmap.md](./implementation-roadmap.md) · [current-portfolio-audit.md](../research/current-portfolio-audit.md)

## 1. Stack recommendation

**Astro (static-first) + Markdown content collections + Tailwind CSS. Zero client-side JS by default; a React island only if a section demonstrably needs interactivity (none identified in the brief).**

| Criterion | How this stack serves it |
|---|---|
| Performance | Static HTML + near-zero JS; the audit's 816 KB bundle and 2.7 MB preload become structurally unlikely |
| Accessibility | Server-rendered semantic HTML; no hydration dependency for content |
| SEO | Content crawlable without JS — fixes the app-shell crawl problem observed on SRC-01 |
| Content maintenance | Case studies and section copy are Markdown files; copy edits never touch components |
| Hosting simplicity | Pure static output → GitHub Pages (current host; zero new platforms) |
| Responsiveness | One fluid layout system (Tailwind); no duplicated breakpoint markup (audit) |
| Future extensibility | Islands + content collections allow a blog or interactive demo later without rewrite |

**Why Tailwind (evidence-based, not default):** the owner's recent projects demonstrably use it (perplexity, code-review-agent, lingo-agent, better-dev-ui — SRC-09 READMEs), and the skills inventory lists it as an active skill.

### Alternatives evaluated and rejected

| Option | Reason rejected |
|---|---|
| Next.js | More build/runtime complexity than a content site needs; SSR/ISR capabilities would go unused |
| Create React App (current) | Audit: shell-only crawlability, single 816 KB JS bundle, no static content |
| Plain HTML/CSS | Fails content maintenance — case studies and copy would live inside markup |
| Component library (Chakra, etc.) | Audit: bundle weight + styling constraints; the brief needs ~6 simple components |

### Optional items — each requires explicit justification before adoption (all default NO)

Animation libraries (CSS transitions suffice) · MDX embedded components (Markdown suffices in v1) · UI component libraries · 3D/WebGL · dark mode (deferred) · external CMS (in-repo Markdown is the CMS) · analytics (owner decision, deferred).

## 2. Hosting & deployment

- **GitHub Pages remains the host** (currently serves kashif-rezwi.github.io).
- Static output deployed by **GitHub Actions** on push (replaces the `gh-pages` npm script); preview deployments for gate reviews before launch.
- No servers, no API routes, no secrets needed to build the site.
- The old site stays live until the Phase 1.4 launch approval (roadmap).

## 3. Acceptance criteria (measured in Phase 1.3)

### Performance
- Lighthouse mobile (throttled): Performance, Accessibility, Best Practices, SEO each **≥ 95**.
- Initial JS ≤ **100 KB gzipped** (target: effectively zero).
- LCP < **2.0 s** throttled mobile; no preloaded image above **150 KB** (AVIF/WebP, sized to layout; the existing 378 KB `ME.jpg` must be resized/re-encoded before use).
- All images: modern formats, explicit width/height, meaningful alt text.

### Accessibility
- WCAG 2.2 AA; zero serious axe-core violations.
- Full keyboard operability; visible `:focus-visible`; labeled icon links; one `h1` per page; correct heading order; landmark regions.
- Contrast ≥ 4.5:1 for body text (evolves `#505050` on `#f5f5f5` — audit).
- `prefers-reduced-motion` disables all motion.

### SEO & metadata
- Unique claim-safe `<title>` + meta description per page (replaces the CRA default — audit Remove row).
- Open Graph + Twitter cards; canonical URLs; sitemap.xml; robots.txt.
- All content present in raw HTML (no JS required to read the page).

### Responsiveness
- One fluid layout verified at 360 / 768 / 1024 / 1440 px; zero duplicated breakpoint markup (audit code-hygiene row).

### Content integrity
- Every public sentence maps to a ledger claim ID (spot-checked in 1.3 QA).
- All external links (demos, repos, socials) verified live; prevents the stale-link class of conflict C-06.

## 4. Repository shape during Phase 1 (indicative; finalized in 1.0)

- `src/content/` — Markdown case studies + section copy
- `src/layouts/`, `src/components/` — minimal set (nav, card, tag, section, footer)
- `public/` — resume PDF, optimized images, noise texture
- Project docs unchanged; the old CRA app is removed only at the approved launch phase (owner decision in 1.4).