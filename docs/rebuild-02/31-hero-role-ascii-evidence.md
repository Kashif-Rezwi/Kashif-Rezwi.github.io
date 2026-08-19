# Hero Role ASCII Cycler — Implementation Evidence

- **Purpose:** Verification evidence for the Hero role ASCII cycler (plan: `docs/rebuild-02/30-hero-role-ascii-plan.md`).
- **Date:** 2026-08-19
- **Status:** Complete and locally verified. Uncommitted; no push or deployment performed.

## Delivered

| Item | Detail |
|---|---|
| `src/lib/ascii-roles.ts` (new) | Shared frame builder: miniFont (mirrors Contact alphabet), `buildFrame` with build-time width guard, `ASCII_COLS=76`, `ASCII_ROWS=3`, `ROLE_TITLES` (4 owner-approved roles), precomputed `ROLE_FRAMES` |
| `src/components/HeroRoleCycler.astro` (new) | SSR initial frame + bundled module script (morph engine, scheduler, interaction handlers) + scoped styles |
| `src/sections/Hero.astro` | Role badge block replaced with `<HeroRoleCycler />`; dead `.hero-role`/`.hero-role-badge`/`.hero-role-text-inner` styles removed |
| `src/styles/global.css` | New `.visually-hidden` utility (screen-reader-only canonical headline) |

`--color-accent-badge` token and its `check-contrast.mjs` row intentionally **retained** (AA pair documented for potential badge restoration; still referenced by CI).

## Behavior

- Auto-cycle every 3.2s (first switch delayed past entrance); recursive-timeout scheduler resets the clock on manual click.
- 320ms diagonal wavefront morph with particle shimmer band; reduced-motion → static frame swap / static first frame.
- Click-to-cycle (`title="Click to cycle role"`), hover-pause, IntersectionObserver off-screen pause, tab-hidden pause, live reduced-motion preference sync.
- Container-driven font: `min(0.95rem, 2.1cqw)` over `clamp()` fallback; fixed `76ch × 3 rows` box → zero CLS, zero overflow.

## Verification results (2026-08-19)

| Check | Result |
|---|---|
| `npx astro build` | ✅ 7 pages clean |
| `npm run check:contrast` | ✅ 19/19 PASS, 0 FAIL |
| `npm run check:glass-contrast` | ✅ 30/30 PASS, 0 FAIL |
| Frame integrity (node) | ✅ 4 frames, all 3 rows × ≤76ch; FULL STACK / MERN STACK / PRODUCT / FRONTEND ENGINEER render as legible single-line block type |
| SSR / no-JS | ✅ Initial frame present in `dist/index.html` (`█▀▀ █ █ █…` row); canonical headline ×4 (title/meta/OG/sr-only); `.hero-role-badge` zero remnants |
| Auto-cycle (browser) | ✅ FULL → MERN → PRODUCT observed incl. mid-morph shimmer runes (`#▒▐▐`) |
| Click-to-cycle | ✅ Frame advances, morph settles |
| Reduced motion | ✅ First frame static after 4.2s wait (`prefers-reduced-motion: reduce`) |
| Horizontal overflow | ✅ 0px at 1440 / 768 / 375 |
| Cq-sizing | ✅ 375px viewport → pre 329px in 343px container @ 7.2px font; 768px → 561px |
| Color | ✅ dark `rgb(169,200,255)` (`--color-accent-text`); light theme AA-safe `#2f57ad`; both verified visually |
| A11y attrs | ✅ pre `aria-hidden="true"`; sr-only text "Frontend-focused Full Stack Engineer" |
| Console / page errors | ✅ Both clean across all QA sessions |
| Visual captures | Dark 1440, light 1440, dark 768, dark 375 — strip legible, proportionate, crisp |

## Known limitations / decisions

- The interactive zone is pointer-only (decorative duplicate of sr-only text) — matches the Contact renderer's accessibility posture.
- The inherited `hero-textshadow` halo is kept on the glyphs (legibility over the live dot matrix, same rationale as T1/R5-8a); verified crisp in captures.
- `--color-accent-badge` token retained (see Delivered).
