# QA Report — Phase 1.3

- **Purpose:** The Phase 1.3 deliverable (roadmap 1.3): measured metrics, audit results, and residual risks → owner go/no-go for the Phase 1.4 launch.
- **Authority:** Phase 1.3 build, 2026-08-05. Metrics measured locally against the acceptance criteria in `docs/engineering/architecture-and-quality.md`.
- **Last updated:** 2026-08-05
- **Related:** [architecture-and-quality.md](./architecture-and-quality.md) · [branching-and-deploys.md](./branching-and-deploys.md) · [implementation-roadmap.md](./implementation-roadmap.md)

## 1. Acceptance criteria vs measured

| Criterion (architecture doc §3) | Target | Measured | Pass |
|---|---|---|---|
| Lighthouse mobile (throttled) — all categories | ≥ 95 | **Performance 100 · Accessibility 100 · Best Practices 100 · SEO 100** | ✅ |
| Initial JS (gzipped) | ≤ 100 KB | **0 KB** (zero `<script>` tags) | ✅ |
| LCP (throttled) | < 2.0 s | **1.4 s** | ✅ |
| CLS | low | **0** | ✅ |
| TBT | low | **0 ms** | ✅ |
| Hero/preloaded image | ≤ 150 KB | Portrait AVIF **16 KB**; OG card 47 KB (not preloaded) | ✅ |
| All images modern format + explicit w/h + alt | yes | AVIF/WebP; width/height by Astro `<Image>`; alt text present | ✅ |
| WCAG 2.2 AA / zero serious axe issues | yes | Lighthouse a11y = 100; **0 binary failures**; manual semantic audit clean | ✅ |
| Full keyboard operability; `:focus-visible`; labeled icon links; one `h1`; heading order; landmarks | yes | All present (manual audit below) | ✅ |
| Contrast ≥ 4.5:1 body text | yes | Enforced by `npm run check:contrast` (all pairs pass) | ✅ |
| `prefers-reduced-motion` disables all motion | yes | Global media query in `global.css` | ✅ |
| Unique claim-safe `<title>` + meta description per page | yes | Home, resume, 3 case studies, 404 — each unique | ✅ |
| Open Graph + Twitter cards; canonical; sitemap; robots | yes | OG/Twitter with dedicated card; canonical per page; sitemap-index.xml; robots.txt | ✅ |
| All content in raw HTML (no JS required) | yes | Verified: 0 scripts; all content in HTML | ✅ |
| Responsive at 360/768/1024/1440 | yes | Tailwind fluid breakpoints (md:); no duplicated breakpoint markup | ✅* |

\* Responsive rendering verified by code audit (single fluid layout, no duplicated desktop/mobile blocks — fixes the audit's "Evolve" row). Visual pixel verification at each width is an owner spot-check at the gate.

## 2. Lighthouse (local, headless Chrome, mobile throttle)

Run against the production-base build served locally (`astro preview`):

| Page | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` (home) | 100 | 100 | 100 | 100 | 1.4 s | 0 | 0 ms |
| `/work/code-review-agent/` | 100 | 100 | 100 | 100 | 1.3 s | 0 | 0 ms |

## 3. Manual accessibility audit

- **Landmarks:** `<header>` (banner), `<nav aria-label="Primary">`, `<main id="main">`, `<footer>` — all pages. ✅
- **Skip link:** `class="skip-link"` → `#main`, hidden until focused. ✅
- **Headings:** one `<h1>` per page (home, each case study, resume, 404); `<h2>` in order. ✅
- **Focus:** `:focus-visible` outline (2px accent-ink) in `global.css`. ✅
- **Icon/links:** all links text-labeled (no icon-only links); tech-tag lists carry `aria-label`. ✅
- **Alt text:** portrait "Portrait of Kashif Rezwi"; case-study cover "… — screenshot from the project README". ✅
- **`lang="en"`** on `<html>`. ✅
- **External `target="_blank"`** links carry `rel="noopener"` (resume PDF). ✅
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` kills all transitions. ✅
- **Contrast:** enforced at build time by `npm run check:contrast` (CI-gated). ✅

## 4. Link check (2026-08-05)

**External — all verified live:**
- Repositories: code-review-agent, perplexity, lingo-agent, better-dev-ui, better-dev-api, looplens, ai-playground, language-playground, profile archive → all **200**
- Demos: perplexity-lilac.vercel.app, lingo-agent.vercel.app, betterdev.in, looplens-rho.vercel.app → all **200** (code-review-agent demo returns 307→OAuth login — expected for a gated flow)
- dev.to profile + LingoAgent article → **200**
- **LinkedIn `in/kashif-rezwi-149372216/` → HTTP 999 (authwall)** — unverifiable without login; **owner manual click-through required at/after launch** (OQ-06 checkpoint). Expected, not a defect.

**Internal — all verified:** `/`, `/resume/` (+ PDF), `/work/{code-review-agent,perplexity,lingo-agent}/`, `/404.html`.

## 5. SEO & metadata

- Per-page unique `<title>` + `<meta name="description">` (claim-safe). ✅
- Canonical URL per page. ✅
- Open Graph: `og:title/description/type/url/image` (dedicated 1200×630 card, DL-012). ✅
- Twitter: `summary_large_image` + title/description/image. ✅
- `sitemap-index.xml` + `sitemap-0.xml` (5 URLs). ✅
- `robots.txt` (permissive for production; preview carries `noindex` meta via `PUBLIC_PREVIEW`). ✅
- `manifest.webmanifest` (name, theme_color, background_color, favicon icon). ✅

## 6. Content integrity (claim safety)

- Home-page copy: every sentence mapped in `docs/strategy/home-copy-claim-map.md` (Phase 1.1 gate-approved). ✅
- Case-study narratives: sourced strictly from `docs/research/featured-project-research.md` + the evidence ledger (CL-13/14/15); capability-only, never "SaaS/commercial"; personal/hackathon labels visible. ✅
- No invented metrics, scale, or seniority. No ML-research framing. Swipe work uses collaborative verbs. ✅

## 7. Residual risks / owner items

1. **LinkedIn click-through** — manual verification at/after launch (OQ-06). Not automatable (authwall).
2. **Responsive visual verification** — code audit confirms a single fluid layout; pixel-perfect rendering at 360/768/1024/1440 is an owner spot-check.
3. **Demo link volatility** — Vercel/Render free tiers can sleep; re-verify all demo links at launch (1.4).
4. **perplexity/lingo-agent visuals** — honestly text-only (no real README screenshot exists; lingo-agent's is a TODO placeholder). Owner may capture later; the `cover:` schema field supports it.
5. **Better DEV `[Your Frontend URL]` placeholder** (audit F-07) — owner action on the external `better-dev-ui` repo; does not block the portfolio launch.
6. **Preview repo** (`Kashif-Rezwi/portfolio-preview`) — public; carries `noindex` meta; archived after launch.

## 8. Go/no-go recommendation

All measured acceptance criteria are met or exceeded (Lighthouse 100/100/100/100; zero JS; LCP 1.4s). **Recommend: GO for Phase 1.4 launch**, pending the owner's manual LinkedIn click-through and visual spot-checks at the gate.