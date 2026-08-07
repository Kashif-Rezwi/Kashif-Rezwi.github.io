# R5-7 — Full QA report (glass): evidence

- **Purpose:** Post-implementation verification evidence for R5-7 per `docs/rebuild-02/23-r5-7-qa-plan.md` (DL-062). Re-runs the **R3-F production-QA matrix with the R5 glass layer (R5-1…R5-6) live** and extends it with the glass-specific scenarios the R3-F matrix predates. **QA-only:** no source- or style-file edits; any discovered defect would have stopped this phase and become a separate owner-gated fix (none found).
- **Authority:** `AGENTS.md` + owner "go" (2026-08-08) + R5 spec §9 row R5-7 / §12 QA policy.
- **Last updated:** 2026-08-08
- **Related:** [decision-log.md](../decision-log.md) (DL-062) · [project-status.md](../project-status.md) · [23-r5-7-qa-plan.md](./23-r5-7-qa-plan.md) · R3-F matrix in `docs/engineering/qa-report.md` §R3-F · [11-r5-glassmorphism-design.md](./11-r5-glassmorphism-design.md)

## 1. Git truth

- Branch **`evolve-design`**; HEAD `77618fb` (R5-6 + approval docs). Working tree: only the uncommitted DL-062 decision-log entry + untracked QA plan (pre-existing at phase start).
- QA ran against the **local release artifact**: `npm run build` → `dist/`, served by `astro preview :4600` (exact production build; `?theme=light|dark` hook for theme forcing). Automation via Chrome headless (system Chrome, puppeteer-core / lighthouse / axe-core installed **temporarily in `/tmp/qatools`** — no repo `package.json` or `node_modules` changes; S-12 zero new runtime deps honoured).
- Rollback preserved: production `gh-pages` tip `6991386` (pre-R5) + pre-R5 source on `main`/Pages branch — unchanged through R5. R5 is **not** deployed.

## 2. Scope traceability (matrix M1–M12)

### M1 — Build ✅
`npm run build` (fetch-github + astro): **6 pages clean** — `/`, `/resume/`, `/work/code-review-agent/`, `/work/lingo-agent/`, `/work/perplexity/`, `/404/`; `sitemap-index.xml` created; builds in ~454 ms. Post-build `src/data/github-contributions.json` fetch drift reverted (data identical, only `fetchedAt`); file clean in tree.

### M2 — Contrast ✅
| Gate | Result |
|---|---|
| `npm run check:contrast` | **19/19 PASS** (0 FAIL) |
| `npm run check:glass-contrast` | **30/30 AA PASS** (canvas + band + centre scenarios × dark/light) |

### M3 — Lighthouse ✅ (24/24 all 100)
Full matrix — 6 routes × {mobile, desktop} × {light, dark}, headless Chrome local preview:

| Route | Form factor | Theme | Perf | A11y | BP | SEO | TBT | CLS |
|---|---|---|---|---|---|---|---|---|
| `/` | mobile | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/` | mobile | light | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/` | desktop | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/` | desktop | light | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/resume/` | mobile | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/resume/` | mobile | light | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/resume/` | desktop | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/resume/` | desktop | light | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/code-review-agent/` | mobile | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/code-review-agent/` | mobile | light | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/code-review-agent/` | desktop | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/code-review-agent/` | desktop | light | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/lingo-agent/` | mobile | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/lingo-agent/` | mobile | light | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/lingo-agent/` | desktop | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/lingo-agent/` | desktop | light | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/perplexity/` | mobile | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/perplexity/` | mobile | light | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/perplexity/` | desktop | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/work/perplexity/` | desktop | light | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/404/` | mobile | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/404/` | mobile | light | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/404/` | desktop | dark | 100 | 100 | 100 | 100 | 0 ms | 0 |
| `/404/` | desktop | light | 100 | 100 | 100 | 100 | 0 ms | 0 |

### M4 — axe ✅ (0 violations, settled render)
`axe.run(document)` after a 1.2 s settle (backdrop-filter/reveal) on all 6 routes × {dark, light} = **0 violations, 0 critical/serious, 0 console errors on every cell**:

| Route | dark (viol/serious/errors) | light (viol/serious/errors) |
|---|---|---|
| `/` | 0/0/0 | 0/0/0 |
| `/resume/` | 0/0/0 | 0/0/0 |
| `/work/code-review-agent/` | 0/0/0 | 0/0/0 |
| `/work/lingo-agent/` | 0/0/0 | 0/0/0 |
| `/work/perplexity/` | 0/0/0 | 0/0/0 |
| `/404/` | 0/0/0 | 0/0/0 |

### M5 — Horizontal overflow ✅
Home `/` + case `/work/perplexity/` × widths **320/390/768/1024/1440** × {dark, light} = **0 overflow (20/20)** (no `scrollWidth > clientWidth`).

### M6 — Reduced motion ✅
`prefers-reduced-motion: reduce` vs normal (home, both themes), computed-style audit: under `reduce` **max animation duration = 0.01 ms, max transition duration = 0.01 ms, 0 elements with real (≥0.011 ms) motion** in both themes — hero matrix / glass settle / reveal / shimmer all static. Consistent with R5-4's byte-identical reduced-motion render and the `global.css` `@media (prefers-reduced-motion: reduce)` block (`animation-duration/transition-duration: 0.01ms !important`, `iteration-count: 1`, `.js-reveal .reveal { opacity:1; transform:none }`).

### M7 — Reduced transparency ✅
`prefers-reduced-transparency: reduce` (CDP-emulated) on home, both themes: every glass surface `.glass-panel/.glass-card` resolves with **`backdrop-filter: none`** and a **solid background** (`--glass-bg-solid`: dark `rgb(22,22,22)`; light `rgb(255,255,255)`) — the `@media (prefers-reduced-transparency: reduce)` block in `global.css` (and the `@supports not (backdrop-filter)` fallback) hold, so glass degrades to solid (S-9).

### M8 — Back-of-glass ✅
Structural + computed audit: the hero matrix renders as two `.hero-dot-matrix` canvases (800×655 hero, 800×427 contact) plus static `.hero-dot-fallback` dots behind the `.glass-panel.hero-panel`, with `.hero-ambience` glow layer. The panel computed as **semi-transparent** (`color(srgb … / 0.65)` dark, `/ 0.68` light) with **real `backdrop-filter: blur(12px) saturate(1.15/1.05)`**, so the dot-matrix / glow visibly reads through the tint with **no content collision** (plate is a relative container; the canvas is an absolute `aria-hidden` background layered beneath). On-glass AA for the plate text already proven in M2 (centre scenario 30/30).

### M9 — No-JS ✅
Script execution disabled (CDP `setScriptExecutionDisabled`) on `/`, `/work/perplexity/`, `/resume/`: all content visible in raw HTML — h1 present (`Kashif Rezwi`), substantial body text (home 7 297 chars, case 1 545), hero dot **fallback** present, canvases still render. JS is purely progressive enhancement (zero-script build; S-7 unchanged).

### M10 — Links ✅
- **Internal** (all routes + assets): `/`, `/resume/`, `/work/*` ×3, `/404/`, `/sitemap-index.xml`, `/robots.txt`, `/manifest.webmanifest`, `/og.png` — all **200**.
- **External** (`curl -L` on in-page links): GitHub profile + repos (`code-review-agent`, `perplexity`, `lingo-agent`, `better-dev-ui`, `looplens`, portfolio repo), Vercel demos (`code-review-agent-client`, `perplexity-lilac`, `lingo-agent`, `looplens-rho`), `betterdev.in`, dev.to profile + article — all **200**.
- **LinkedIn** (×3: profile + 2 references) — **999 (authwall)**: expected, benign (OQ-06 owner click-through remains).

### M11 — Console ✅
No console errors / page errors on any of the 6 routes (default theme; also 0 errors captured during the M4 axe settles).

### M12 — Metadata / SEO ✅
Every page has a **unique** `<title>`, meta description, `og:title`, `og:description`, canonical, and shared `og:image` (`https://kashif-rezwi.github.io/og.png`); **no `noindex`** anywhere; `sitemap-index.xml` lists all 5 canonical routes; `robots.txt` allow-all; `manifest.webmanifest` present.

## 3. Residual risks for the gate

1. **LinkedIn click-through** — HTTP 999 (authwall); must be owner-verified manually (OQ-06). Not a defect.
2. **OQ-R5-11** — standalone `@axe-core/cli` flags `.exp` gray `#707070` at 4.63:1 on the *pre-settle* load (transient backdrop-filter render). **Excluded by design** — M4 measures the settled render (0 violations), and Lighthouse a11y = 100 on every route/theme. Known palette margin reserved for a future hardening phase.
3. **Visual spot-check** — pixel captures remain an owner view (320/1440 + glass aesthetic feel); structural overflow/contrast/motion all verified here.

## 4. Conclusion

Every target in the M1–M12 matrix is **green** with the R5 glass layer live, on the exact local release artifact. R5 (R5-1…R5-6) is verified as **one release**: contrast 19/19 + on-glass 30/30 AA, Lighthouse **100/100/100/100 on 24/24 cells** (TBT 0, CLS 0), axe **0** (settled), overflow **0** (20/20), reduced-motion static, reduced-transparency solid fallback, no-JS content intact, links/internal healthy (LinkedIn authwall benign), console clean, metadata/SEO retained. **Recommend GO for the owner's R5-8 deploy go/no-go.**


