# R5-2 — Header + Hero Glass: Evidence

- **Purpose:** Acceptance self-review + repo checks for phase R5-2 (navbar token glass + hero identity plate over the matrix). First phase that **renders** glass.
- **Authority:** Owner "go" (2026-08-07); R5 Operating Loop (`docs/engineering/engineering-workflow.md`); spec `11-r5-glassmorphism-design.md` §5/§7/§9.
- **Last updated:** 2026-08-07
- **Related:** [`14-r5-2-header-hero-glass-plan.md`](./14-r5-2-header-hero-glass-plan.md) · [`13-r5-1-glass-foundation-evidence.md`](./13-r5-1-glass-foundation-evidence.md) · [`decision-log.md`](../decision-log.md) (DL-057)

---

## 1. Git truth

- Branch `evolve-design`; R5-2 changes uncommitted working tree (see §7). Base = R5-1 (`bf60056`). **No merge/deploy** this phase (owner-gated R5-8).

## 2. What was built

**`src/components/Header.astro`** — navbar systemized to the R5 glass recipe (§7 row "Header", II):
- `background: var(--glass-bg)`; `backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate))`; `1px solid var(--glass-border)` bottom edge; `transition: background var(--duration-base) ease …`.
- Fallbacks: `@supports not (backdrop-filter…)` **and** `prefers-reduced-transparency: reduce` → solid `--glass-bg-solid`, blur off (S-9). Inline JS untouched (mobile drawer inherits glass).

**`src/pages/index.astro`** — hero identity plate (§4 row "Hero", III):
- `.hero-content` now `glass-panel hero-panel` — one glass plate (radius, tint, blur, edge, top catch-light) across the whole identity block (label … CTA row).
- New `.hero-ambience` (`position:absolute; inset:0; z-index:0;` accent radial `--color-glow` masked to an ellipse, `pointer-events:none`) behind the plate — the "lit console field" (§4.3/S-8).
- `.hero-panel` mobile padding `1.25rem` (was implicit); portrait ring **unchanged** (owner-locked), role badge **unchanged** (owner-locked).

Grep-verified: `glass` classes now **only** on real surfaces (header + hero), no markup drift elsewhere.

## 3. Acceptance-criteria self-review (plan §6)

| # | Criterion | Result |
|---|---|---|
| 1 | `npm run build` | ✅ 6 pages, 0 warnings, 226 ms |
| 2 | `npm run check:contrast` | ✅ **16/16 PASS** (no token regression) |
| 3 | On-glass AA (new `scripts/check-glass-contrast.mjs`) | ✅ dark **and** light, every hero/nav text pair ≥ 4.5:1 — `ink` 16.30 / 18.55; `ink-muted` 5.24 / 7.32; `accent-text` 10.96 / 6.68 |
| 4 | Lighthouse (preview build) | ✅ perf **100**, bp **100**, seo **100** on **both** mobile+desktop; LCP 1.3 s; CLS 0; TBT 0 ms |
| 5 | axe (axe-core 4.10.2) | ✅ **0 violations**, dark + light |
| 6 | Responsive overflow | ✅ **0** horizontal overflow at 320/390/768/1024/1440; plate + ambience render at all widths |
| 7 | Reduced transparency | ✅ compiled fallback present for header + `.glass` surfaces → `--glass-bg-solid`; blurred backdrop removed (rule verified in built CSS; this headless Chromium build does not recognize the `prefers-reduced-transparency` media feature at runtime, so verification is via compiled-CSS inspection + the identical `@supports` fallback path is actively rendered) |
| 8 | Screenshots | ✅ dark/light × desktop/mobile saved (evidence media) |
| 9 | No copy/claim/dep/route change | ✅ grep: zero matches on claims; no new imports (`Header.astro` still 2 imports, no new package) |

**A11y close-out (OQ-R5-9, owner fix):** At review, Lighthouse registered a11y = 96 from the R4-origin role badge (`white` on cornflower `#6495ed` = 2.97:1). Per owner direction, the badge fill moved to a new token `--color-accent-badge: #3f63c9` (white **5.47:1**, both themes); parallelogram lock (DL-043/045), skew, shadow, and white text untouched. Row added to `check:contrast` (now 17/17). Re-audited: Lighthouse a11y = **100** (mobile), axe **0** dark + light.

**B) Motion:** no new motion introduced here (plate + ambience are static; reveal/ambience animation deferred to R5-4 per spec). `prefers-reduced-motion` unaffected.

## 4. Docs-vs-code-vs-git consistency

- `global.css` tokens used verbatim (no hard-coded hex on hero/header); `--glass-blur/--glass-saturate/--glass-bg/--glass-border/--glass-bg-solid/--color-glow` all sourced from the token layer.
- Spec §7 rows "Header"/"Hero" match the code changes exactly.
- Plan doc's decisions A1/B1 implemented as chosen; no scope creep (contact/CTA bookend + cards deferred to R5-3).

## 5. Residual risks / rollback

- Badge contrast (above) is R4-origin; if owner wants AA-before-R5-3, badge fill change is a 2-line token tweak (acceptance-conditioned). Rollback for this phase = `git restore` the 2 source files; no deploy happened.
- `prefers-reduced-transparency` runtime emulation wasn't possible in the headless Chromium build (unsupported media feature); verified by compiled CSS rule presence + `@supports` path instead.

## 6. Conclusion

All R5-2 done-when targets met. The only Lighthouse a11y item is the R4-origin role badge that nothing in R5-2 introduced; no claims, no scope creep, no new requests. **Recommend: owner review of screenshots + badge-contrast decision, then R5-2 → R5-3 gate.**