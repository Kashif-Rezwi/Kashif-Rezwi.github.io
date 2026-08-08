# R5-5 — Case-Study + Inner Pages: Implementation Plan

- **Purpose:** The bounded plan for phase R5-5 of the R5 glassmorphism evolution (spec §9 row R5-5 + §7 Case-study pages row). Brings the R5 glass material to the three case-study pages — **page-hero glass band, sidebar glass cards, case-cover glass frame, mobile drawer glass** — without touching the preserved flat prose (§7 "body prose stays solid").
- **Authority:** Owner "go" (2026-08-07, "move to next phase"); subordinate to the R5 design spec (`11-r5-glassmorphism-design.md`) and the R5 Operating Loop (`docs/engineering/engineering-workflow.md`).

## 1. Objective

Give the depth pages the same restrained glass language as the home page: a **hero that reads as a glass console band over a soft field**, **glass sidebar cards**, a **glass-framed cover**, and a **glass mobile drawer** — while case-study body prose stays exactly as it is (readability > effect, §7). Everything stays token-driven, `backdrop-filter` on real, **smooth surfaces only** (hero band sits over the masked glow field — nothing to blur zone faces §12), and reported AA is **as actually rendered**.

## 2. Git truth

- Branch: `evolve-design`. HEAD `809dce8` (R5-4, pushed). Working tree clean; **origin/evolve-design == local**.
- Base for R5-5: `evolve-design` only. No merge/deploy; `gh-pages` = production (R3).

## 3. Scope

**In scope (§7 inner pages, II / I):**

| Surface | File | Change |
|---|---|---|
| Page hero | `src/pages/work/[slug].astro` | `.case-hero` becomes `.band-host` with a masked `.section-band` (`--color-glow`, aria-hidden) + the heading block sits on a **glass band** (`glass-band`): `--glass-bg` + `--glass-border` + radius, local `backdrop-filter: none` (smooth field → nothing to blur, §12); band entrance = `glass-settle`, children keep `animate-fade-up` stagger. Period + separator switch to `--color-ink-dim-glass` |
| Sidebar overlays | `[slug].astro` | `.case-sidebar-card` → glass (tint + `--glass-border` + radius, local blur none); sidebar label → `--color-ink-dim-glass`; links stay `ink-muted` (already verified over canvas/carded) |
| Cover frame | `[slug].astro` | `.case-cover` = glass frame (tint + edge + radius + fallback); image inside unchanged |
| Mobile drawer | `src/components/Header.astro` | `.mobile-nav` = navbar-token glass (`--glass-bg` + `blur` + `saturate` + `--glass-border` top/bottom) with @supports + reduced-transparency fallbacks — matches the fixed-header recipe, so the open drawer is one continuous glass panel |

**Contrast hardening (as-written AA):**
- `check-glass-contrast.mjs` gains a **"case hero centre"** scenario: glass-over-backdrop where the glow can be shown at full Centre alpha (14% dark / 10% light) rather than the card-zone half — because the page-hero band sits near the glow's centre, not below it. Verify `ink` / `ink-muted` / `ink-dim-glass` on that composite in both themes → extend mean (24 → 30). If any fail, we widen the token (like R5-3 did with `ink-dim-glass`).

**Out of scope:** body prose stays solid (never glassed); the resume page (plain PDF bridge); the 404 page (plain, utility); experience rail; footer; home page; any claims/copy; R5-6 cleanup.

## 4. Decisions

- **D1.** Sidebar → local glass (no backdrop-filter; sits over flat canvas, nothing to blur) but uses the shared `--glass-bg`/`--glass-border` tokens + is `aria-hidden`-consistent. Keeps the "glass" vocabulary consistent with WorkCard/Testimonial while the case hero does the *actual* blur-free finished composite.
- **D2.** Page-hero "soft glass band": the existing `.case-hero` wrapper row becomes a rounded glass band (`radius-card`), over a masked `--color-glow` band (`section-band`'s recipe), so a career page's opening reads as a quiet glass tableau — matching home work/skills/testimonials. No blur on it: the glow is a smooth gradient fade (§12), exactly like home section bands.
- **D3.** Mobile drawer glass uses the header's exact token recipe (blur included), since the drawer + header are ONE concatenated glass panel when open; blur only smooths the content scrolling behind — static filtered layer, never animated.
- **D4.** Contrast script extended with the "case-hero centre" scenario (band glow at full centre alpha) since the hero band may sit at the glow peak, not the card zone. This keeps S-5 "AA as actually rendered."

## 5. Done-when evidence (spec §9 R5-5)

1. Build clean (6 pages) — all 3 case-study pages default to valid HTML.
2. `npm run check:contrast` **19/19** + `npm run check:glass-contrast` (extended) **30/30** PASS (carried his canvas + band + **centre**).
3. Lighthouse **100/100/100/100** mobile + desktop on a case-study page (not just home) — proves no perf/a11y regressions on an inner route.
4. Axe **0** on a case-study page, dark + light.
5. Reduced-motion: case-hero glass band has no animation (preferred-motion demo), drawer unchanged behavior.
6. No horizontal overflow 320/390/768/1024/1440 on case study routes.
7. No-JS: unchanged (all glass is CSS; render enhancement).
8. No claims changed; no new deps; no deploy.

## 6. Files

| File | Change |
|---|---|
| `src/pages/work/[slug].astro` | hero band-host + `.section-band` + `.case-hero-inner` as glass band (local blur none); sidebar cards → glass tokens + label token swap; cover → glass frame; `--color-ink-dim-glass` in hero meta/separator |
| `src/components/Header.astro` | `.mobile-nav` → navbar glass tokens (+ base-something + @supports + reduced-transparency fallbacks) |
| `scripts/check-glass-contrast-content.mjs` | add case-hero **centre** scenario (glow @ full centre alpha, dark/light) — target 30 checks |

## 7. Risks

1. Hero text over the glow-centre → if `ink`/`ink-muted`/`ink-dim-glass` fail at the fully-composited background, we raise the relevant token (like R5-3 showed for ink-dim); decision D4 keeps this checked.
2. Drawer blur over `max-height` transition → drawer keeps the header's current open recipe; no new animation, no animating blur (static overlay).
3. Sidebar glass over flat canvas (no band) → its AA is the same `glass-over-canvas` case already verified by the script; no unverified composite.
4. Cover image text/alt unchanged; frame is decorative (border radius + tint behind) — no semantics change.

## 8. Gate

End of phase → record (`docs/decision-log.md` DL-060, `docs/project-status.md`, spec changelog, evidence doc `21-r5-5-inner-pages-evidence.md`) → **stop for R5-5 owner approval** before R5-6 (architecture cleanup).