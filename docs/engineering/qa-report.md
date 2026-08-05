# QA Report

- **Purpose:** QA evidence across phases. Phase 1.3/1.4 measured Phase 1 acceptance criteria and post-launch smoke tests. The **R3-F (production QA)** section below proves the content/accessibility rebuild is ready for the owner's R3-G launch go/no-go.
- **Authority:** Phase 1.3 build (2026-08-05); R3-F QA pass (2026-08-06) against `docs/rebuild-02/02-improvement-implementation-plan.md` §R3-F and `docs/engineering/architecture-and-quality.md`.
- **Last updated:** 2026-08-06
- **Related:** [architecture-and-quality.md](./architecture-and-quality.md) · [branching-and-deploys.md](./branching-and-deploys.md) · [implementation-roadmap.md](./implementation-roadmap.md) · `docs/rebuild-02/02-improvement-implementation-plan.md`

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

## 9. Post-launch production verification (2026-08-05, after Phase 1.4)

Smoke test against `https://kashif-rezwi.github.io/` (production Base URL, no preview prefix):

| Check | Expected | Result |
|---|---|---|
| Home `/` | HTTP 200, Astro build | 200, 14,673 bytes ✅ |
| `create-react-app` reference | absent | 0 occurrences ✅ |
| `<script>` tags (all pages) | 0 | 0 on `/`, `/work/*/`, `/resume/`, `/404.html` ✅ |
| `<meta name="robots" content="noindex">` | absent (production) | absent ✅ |
| `<title>` | claim-safe | "Kashif Rezwi — Frontend-focused Full Stack Engineer" ✅ |
| `og:image` | dedicated card | `https://kashif-rezwi.github.io/og.png` ✅ |
| Sitemap | live | `/sitemap-index.xml` → 200 ✅ |
| Robots | live | `/robots.txt` → 200 ✅ |
| Manifest | live | `/manifest.webmanifest` → 200 ✅ |
| Case study pages | all 200 | `/work/code-review-agent/` → 200; `/work/perplexity/` → 200; `/work/lingo-agent/` → 200 ✅ |
| Resume page | 200 | `/resume/` → 200 ✅ |
| 404 | 200 | `/404.html` → 200 ✅ |
| Preview repo | archived | `Kashif-Rezwi/portfolio-preview` archived ✅ |

**Production is live with the Astro build. All Phase 1 acceptance criteria verified post-launch. Phase 1 complete.**

---

# R3-F — Production QA (rebuild)

**Objective:** Prove the revised (R3-0 → R3-E) portfolio is ready to launch. Measured 2026-08-06 against `docs/rebuild-02/02-improvement-implementation-plan.md` §R3-F. Built with `npx astro build`, previewed on **`http://127.0.0.1:4325`** (project-local `./node_modules/.bin/astro preview`).

## F1. Quality targets vs measured

| Target | Target value | Measured | Pass |
|---|---|---|---|
| Lighthouse (home + one case study) | ≥ 95 all categories | **100 / 100 / 100 / 100** on home (mobile+desktop, light+dark) and lingo-agent (mobile dark) | ✅ |
| axe | zero critical/serious | **0 violations** on all routes, both themes (was 1 moderate pre-fix) | ✅ |
| WCAG 2.2 AA contrast + focus | pass | `scripts/check-contrast.mjs`, **16/16 pairs pass**; `:focus-visible` outline = accent (`global.css`) | ✅ |
| Initial client JS (compressed) | ≤ 35 KB | **~4.2 KB inline** (no external bundles) | ✅ |
| Render-blocking third-party font | none | system font stack; **no web-font/external request** | ✅ |
| CLS | ≤ 0.05 | **0** (Lighthouse) | ✅ |
| Links | internal + external | internal **11/11 resolve**; external all **200** (LinkedIn 999 authwall expected; OQ-06) | ✅ |
| Content in raw HTML, visible without JS | yes | all content present with JS disabled; reveal/hero only gated on runtime-added classes | ✅ |
| Console errors | none | **none** on home, all case studies, resume, 404 | ✅ |

## F2. Lighthouse matrix (local, headless Chrome)

| Page | Preset | Theme | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|---|
| **/** home | mobile | dark | 100 | 100 | 100 | 100 | 1.1 s | 0 | 0 ms |
| **/** home | mobile | light | 100 | 100 | 100 | 100 | — | 0 | 0 ms |
| **/** home | desktop | dark | 100 | 100 | 100 | 100 | 0.3 s | 0 | 0 ms |
| **/** home | desktop | light | 100 | 100 | 100 | 100 | — | 0 | 0 ms |
| **/work/lingo-agent/** | mobile | dark | 100 | 100 | 100 | 100 | — | 0 | 0 ms |

Initial JS ≈ 4.2 KB inline far below the 35 KB target; no external script/font requests.

## F3. axe (axe-core 4.10.2, jsdelivr)

`axe.run(document)` on the hash-rendered DOM (with the showcase's requestAnimationFrame-animated canvas). **Zero violations found (`[]`) on every route in both themes:**

- `/` (dark + light)
- `/work/code-review-agent/` (dark+light)
- `/work/lingo-agent/` (dark+light)
- `/work/perplexity/` (dark+light)
- `/resume/`
- `/404/`

**Fix applied mid-pass:** case-study `<aside class="case-sidebar">` nested inside `<main>` tripped `landmark-complementary-is-top-level` (moderate) on case-study pages. Changed to `role="region"` + `aria-label="Project details"` in `src/pages/work/[slug].astro`. Re-ran: **`[]` everywhere.**

## F4. Responsive / theme / input matrix

| Dimension | Method | Result |
|---|---|---|
| Widths 320 / 390 / 768 / 1024 / 1440 | `set viewport` on home **and** a case study | **0 horizontal overflow** on all (dsw = innerWidth) |
| Themes light / dark / system | `set media` + `?theme=` hook | system default = no `data-theme` (CSS auto-matches OS; `?theme=light|dark` forces override) — all render |
| `?theme=` QA hook | `Base.astro` initializer | forces light/dark; both re-ran pass |
| Motion normal / reduced | `set media … reduced-motion` | `prefers-reduced-motion:reduced` matches; reveal forced to `opacity:1, transform:none`; hero matrix static/disabled |
| Input keyboard / mouse / coarse | code audit; coarse `pointer:coarse` branch in hero | no conflict; no soft-keyboard breakage detected in console |
| Execution normal JS | default | all pass |
| Blocked JS | Chrome `--disable-javascript` dump | all content + reveal visible (serve/gate classes only applied at runtime) |
| Slow network | local server (no remote assets) | zero network dependence for fonts/JS |
| Canvas unavailable | hero `if (context)` guard (HeroDotMatrix.astro:64-67) | no-op → `.hero-dot-fallback` static dots remain (matrix-ready never added) |
| Routes | sitemap/robots/manifest/OG/404 | `/sitemap-index.xml` `robots.txt` `manifest.webmanifest` `og.png` all **200**; unknown + nested miss → **404** custom |

## F5. Manual accessibility audit (re-verify after R3-E)

- Landmarks, skip-link→`#main`, one `h1`, ordered headings, `lang="en"`, labeled icon links, `rel="noopener"` on new-tab links — all retained (Phase 1.3 §3). ✅
- Focus: `:focus-visible` outline now uses **accent** (`--color-accent-text`) for visible-on-both-themes focus. ✅
- Contrast: `--color-ink-dim` re-paletted (`#808080` dark-space, `#707070` light-space); `.section-label` / `.btn-outline` border use accent; light-theme `.btn` override added (white on accent). Applied via `npm run check-contrast`. ✅

## F6. Residual risks for the gate

1. **LinkedIn click-through** — LinkedIn returns HTTP 401/999 (authwall); must be owner-verified manually (OQ-06). Not a defect.
2. **Resume PDF** — exists (200); content not diff-checked here (implements the owner-approved R3-E resume edits).
3. **Visual spot-check** — 320/1440 rendering verified structurally (no overflow); pixel captures at those widths remain an owner view.
4. **GitHub activity** — the no-JS/blocked-JS path relies on build-time static HTML (R3-D decision DL-026) which was not part of the R3-F runtime test; the module degraded without erroring console.

## F7. R3-F conclusion

Every quality target is met or exceeded across the full matrix. **Recommend GO for launch under the owner's explicit R3-G go/no-go.**