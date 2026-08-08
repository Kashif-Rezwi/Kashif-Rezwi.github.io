# R5-6 — Architecture cleanup: evidence

- **Purpose:** Post-implementation verification evidence for R5-6 per `docs/rebuild-02/22-r5-6-architecture-plan.md` (DL-061).
- **Authority:** `AGENTS.md` + owner-approved R5-5 gate; R5-6 gate = owner approval of this evidence.
- **Last updated:** 2026-08-08
- **Related:** [decision-log.md](../decision-log.md) (DL-061) · [project-status.md](../project-status.md) · spec §8/§9 · [22-r5-6-architecture-plan.md](./22-r5-6-architecture-plan.md)

## 1. What was done (scope traceability)

| # | Scope item (plan §2) | Result |
|---|---|---|
| 1 | `SectionHeader.astro` | Created — `label`/`title`/`subtitle?` props; renders `div.section-header.reveal` + `.section-label`; scoped `.section-header/.section-title/.section-subtitle` styles copied **verbatim** from `index.astro` (lines 719–736) |
| 2 | `GlassPanel.astro` | Created — pure wrapper: `variant` (`panel`/`card`/`glass`) selects the `.glass-*` recipe class, `class` merged on; no JS; consumed by the home hero plate (`Hero.astro`), replacing the hand-rolled `div.glass-panel` |
| 3 | `index.astro` → `src/sections/*` | 7 sections created (Hero, Work, Skills, Experience, Testimonials, Now, Contact); each owns its scoped styles; data flows via props from `index.astro` frontmatter; `index.astro` is now a 108-line composition with **no `<style>` block** |
| 4 | Shared scaffolding → `global.css` | `.section-block`, `.section-alt`, `.band-host`, `.section-band`, `.band-host > .container-site` added to the components layer; duplicated scoped copies deleted from `index.astro` and `[slug].astro`; slug keeps its `case-hero`-scoped `45%` mask override (verified present, differs only in mask position as designed) |
| 5 | Dead-code deletion | Removed from `global.css`: `--color-border-focus`, `--gradient-accent`, `--gradient-accent-text`, `--color-paper`, `--color-hairline`, `--color-accent-ink` (both theme blocks), `--elevation-sm/-md`, `.glow-pulse`, `.delay-600`, `.animate-fade-in` (+ its `@keyframes fade-in`). All verified **zero-usage** via grep before deletion (`elevation-sm|elevation-md|color-paper|color-hairline|color-accent-ink|color-border-focus|gradient-accent` → 0 hits in `src/` + `scripts/`) |
| 6 | Duration unification | `0.15s → var(--duration-fast)` (global.css, Header, Footer, WorkCard, TestimonialCard, [slug], resume), `0.25s → var(--duration-base)` (Header), `0.4s → var(--duration-slow)` (WorkCard cover zoom). Other literals (0.1/0.18/0.2/0.3/0.35/0.5/0.55/0.6/8s) intentionally left literal per plan §2/§4 |
| 7 | Contrast-script drift fix | `scripts/check-contrast.mjs` updated: dark `ink-muted` `#888888→#8d8d8d`, dark `ink-dim-glass` `#848484→#8b8b8b`, light `ink-dim-glass` `#6c6c6c→#6a6a6a` (matching `global.css` R5-5 tokens at lines 35/37/83/113) |

**GlassPanel wiring note:** the hero plate is the first consumer. Because `.hero-content`/`.hero-panel`/`.glass-settle` classes sit on the GlassPanel-rendered `<div>` (which carries no hero scoped hash), the two hero-only layout rules were relocated to `global.css` (components layer, values verbatim incl. the mobile `padding: 1.25rem` override) so they keep applying. They are global-only classes used solely by the home hero → no cross-page effect. Other `.glass-*` surfaces keep their current markup; nothing else was rewired (refactor-only).

## 2. Refactor-only proof: rendered-output diff

Baseline: worktree at `HEAD` (`ed86a33`, R5-5), built with identical toolchain → `/tmp/r5-6-before/`. After: working tree build → `/tmp/r5-6-after/`. Both normalized (`data-astro-cid-*` → `ASTROCID`, hashed asset names → `HASH`) and diffed:

| Page | Diff lines | Content |
|---|---|---|
| `/` (index) | 7 | Only HTML comments removed in Hero, whitespace, class-attribute order on the hero plate (`glass-panel` moved first — CSS-order irrelevant), and `'` vs `&#39;` entity encoding of the same apostrophe in two section titles (rendered text identical) |
| `/404/` | 0 | byte-identical |
| `/resume/` | 4 | single expected change: `transition: color .15s` → `var(--duration-fast)` |
| `/work/code-review-agent/` | 0 | byte-identical |
| `/work/perplexity/` | 0 | byte-identical |
| `/work/lingo-agent/` | 0 | byte-identical |

No rendered text, attribute, or class used by CSS differs anywhere except the deliberate duration swap on resume. **Zero visual change.**

## 3. Gate results (plan §6)

| Gate | Result |
|---|---|
| `npm run build` | 6 pages, clean (543 ms) |
| `npm run check:contrast` | **19/19 PASS** (now enforcing the live R5-5 hexes; 0 FAIL) |
| `node scripts/check-glass-contrast.mjs` | **30/30 PASS** (glass layer unchanged — not touched by R5-6) |
| Lighthouse (preview `:4323`) | home mobile 100 / desktop 100 (first run 99 → re-run 100: cosmetic metric noise only, TBT 0 both); `/work/perplexity/` mobile + desktop **100/100/100/100**, TBT 0, CLS 0 |
| axe (puppeteer, dark + light, settled) | **0 violations** on home + case page |
| Horizontal overflow | **0/20** (320/390/768/1024/1440 × home/slug × dark/light) |
| `git diff --stat` sanity | only intended files; `dist/` untouched by commits; `github-contributions.json` fetch drift reverted (see §4) |

**Advisory (pre-existing, NOT an R5-6 regression):** the standalone `@axe-core/cli` scan on the *immediately-loaded* page reports 23–36 transient contrast violations on `.exp` glass grays (`rgb(112,112,112)` = `--color-ink-dim` light, 4.63:1 vs the 4.5 AA line) — non-deterministic, driven by the backdrop-filter pre-settle render. The settled render (Lighthouse a11y 100, deterministic puppeteer axe 0) is compliant. R5-6 is refactor-only, so this palette margin is intentionally left for a future hardening phase (logged as OQ).

## 4. Notes / incidents

- **`github-contributions.json` fetch drift:** `npm run build` runs `scripts/fetch-github-contributions.mjs` first, which rewrites the file's `fetchedAt` timestamp (data identical). Reverted after each build; the file is unchanged in this worktree (`git status` clean for it).
- `--radius-pill` (999px) confirmed **still used** by `ThemeControl.astro` — not dead, not deleted.
- `.animate-fade-up`, `.delay-100…500`, `.glass-settle`, `.field-breathe` confirmed live (Hero/404/slug) — kept.

## 5. Conclusion

R5-6 implemented on `evolve-design`: primitives created, home page partitioned, scaffolding consolidated, dead code deleted, durations unified, contrast script back in sync with tokens — with a byte-level rendered-output diff proving zero visual change and all quality gates green.

**Next (owner gate):** approve R5-6 → commit → R5-7 (full QA matrix + decision to keep or retire preview infra).
