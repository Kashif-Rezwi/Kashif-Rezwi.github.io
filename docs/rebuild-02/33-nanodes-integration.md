# Nanodes integration

- **Purpose:** Plan and verification record for replacing duplicated portfolio glyph rendering with the locally packed Nanodes library.
- **Authority:** Owner-authorized Nanodes Phase 4 integration, 2026-11-21; subordinate to `AGENTS.md`.
- **Last updated:** 2026-11-21.
- **Related:** [Project status](../project-status.md), [decision log](../decision-log.md), [original hero treatment](30-hero-role-ascii-plan.md), [Nanodes roadmap](https://github.com/Kashif-Rezwi/nanodes/blob/main/docs/roadmap.md).

## Scope and Git truth

**VERIFIED:** Both repositories began clean. The portfolio was on `main` at `cb8d321`, matching the local `origin/main` ref, rather than the historical branches described in older status notes. Integration uses `feat/nanodes-integration` from that commit; no remote refs were refreshed or changed. The Nanodes checkout began at `d1e62ba`.

Replace only the Contact glyph renderer and hero alphabet. Keep all 25 host-owned technology paths, colors, order, scale modifiers, static hero copy, section layout, dot fields, themes, and entrance effects. No staging, commits, merges, npm publication, or deployment are part of this task.

## Alternatives and decision

- **Local source/workspace link:** quickest iteration, but bypasses the packed artifact and can hide missing exports or files.
- **Packed dependency (selected):** install `vendor/nanodes-0.0.0.tgz` through a relative `file:` dependency. The artifact remains portable with the portfolio checkout and exercises the actual ESM/type/CSS exports. Registry publication and version selection stay separate.

The package needs a `dist` allowlist and public ESM/type/CSS exports for this integration; it remains private. Website and test tools stay outside the artifact.

**VERIFIED — technical references:** [Astro processed scripts](https://docs.astro.build/guides/client-side-scripts/) bundle npm imports, so the former inline renderer becomes a processed component script. [npm package contents](https://docs.npmjs.com/cli/v10/configuring-npm/package-json/) supports an explicit `files` allowlist. These references inform integration mechanics, not portfolio claims.

## Implementation plan

1. Inspect the tarball and install its relative dependency.
2. Keep original technology data in `src/lib/contact-tech.ts`. Mount the library from `ContactTech.astro`, imported by the existing Contact section. Map theme variables and preserve the source glyph size with a small host sizing rule.
3. Call `prepareTextFrame` from `HeroRoleCycler.astro` during SSR; remove `ascii-roles.ts` and duplicate art CSS after checking output parity.
4. Review settled output, dimensions, mobile/desktop themes, click/keyboard/pause controls, reduced motion, no-JS hero, production and preview-base builds, and contrast scripts. Use temporary comparisons outside the repositories; do not recreate permanent reference/test tooling.
5. Record the evidence here and update the existing status and decision log. Further integration scope, publication, and deployment require a separate owner instruction.

**Done when:** both portfolio displays consume the packed library; the hero remains static/server-rendered; the technology sequence matches the original glyph output; builds and focused visual/interaction review pass.

**Rollback:** restore the affected source/manifests from the feature branch base and remove the local vendor artifact. The existing published site is untouched.

## Verification — 2026-11-21

- **VERIFIED — Artifact:** `vendor/nanodes-0.0.0.tgz` contains 24 files, 15,720 compressed bytes: compiled JavaScript, declarations, CSS, and README/LICENSE/package metadata. No website, test fixtures, source brand presets, or runtime dependencies ship. The portfolio lockfile integrity matches the reviewed tarball. A separate clean consumer successfully imports ESM and CSS and resolves the public TypeScript contracts.
- **VERIFIED — Output:** All 25 original SVG/label glyph strings, colors, and sequence entries match the pre-integration capture exactly. The hero also matches exactly, including its 76 × 3 grid, and is present in production HTML before JavaScript runs. The Contact no-JS fallback lists the technology names.
- **VERIFIED — Presentation:** At 1440 px, hero text remains 695.484 × 47.875 px at 15.2 px font size; Contact art remains 336.75 × 262.75 px at 14.72 px, within a 368.75 × 310.75 px display. Existing font families and theme colors match. Production dark/light review at 320/390/768/1024/1440 px found no horizontal overflow or artwork clipping. Desktop and 390 px screenshots were inspected. The host sizing rule preserves the original 38-column art size.
- **VERIFIED — Interaction:** Click and Enter advance, Space advances on release, pause survives manual selection and focus changes, and resume restarts autoplay. The glyphs remain hidden from assistive technology behind the meaningful interactive label. The owner subsequently removed the portfolio pause/resume control and rectangular display focus outline. Hover/focus holds and reduced motion still suspend autoplay; reduced-motion manual changes remain immediate. The portfolio's existing 0.01 ms global reduced-motion transition override remains in effect.
- **VERIFIED — Build and checks:** Nanodes' four generation tests, its website type check, the portfolio's nine-page production build, and a `/portfolio-preview` base-path build pass. The base-path build resolves its eight compiled JS/CSS asset references. Standard contrast checks pass 19/19; glass contrast checks pass 30/30. The final production preview reports no browser errors.
- **VERIFIED — Scope:** Contact data stays in this repository; duplicated sampling, alphabets, transition/playback logic and art CSS were removed. The build's unrelated GitHub contribution snapshot refresh was discarded. Integration changes remain unstaged and uncommitted; no deployment or publication occurred.

Browser review used local Chromium. This task does not establish Safari/iOS support or a new full-site Lighthouse/axe audit. Source comparisons and screenshots were temporary files outside both repositories; no reference directory or additional permanent tests were added.

### Owner visual adjustment — 2026-11-21

**VERIFIED:** Removed the portfolio pause/resume button, its handlers and styles. The updated Nanodes stylesheet suppresses the display outline on both websites; keyboard/click interaction remains available. The library website retains its own pause control. Repacked and reinstalled the local dependency; the portfolio production build and focused browser checks pass. Existing staged changes were left intact; this adjustment remains unstaged.

### Final integration audit — 2026-11-21

**VERIFIED:** Freshly built Nanodes passes all four generation tests. Every one of the 24 tarball files matches both the current library checkout and the installed portfolio dependency byte for byte; the lockfile SHA-512 matches the tarball. The installed package is not a symlink, and all runtime module imports resolve within that package.

**VERIFIED:** The portfolio's previous sampler, mini-font tables, transition code, cycling handlers, hero alphabet file and art selectors are absent from current executable source and production output. The built home page has one Contact entry script with one library display implementation. Browser inspection finds exactly one mounted Nanodes display, click advance works, the static hero uses the library classes, and the outline and portfolio pause button stay removed. Production build and browser error checks pass. Technology paths, colors, order and scale modifiers still match the original host data. The background dot field and static case-study ASCII diagrams are unrelated host features.

**VERIFIED:** Corrected stale README descriptions of the hero as an animated internal cycler and documented the packed dependency update workflow. No runtime code changes were required by this audit; existing staging was preserved.

### Registry release — 2026-11-21 (DL-124)

**VERIFIED:** The owner committed Phase 4 as `fe13b47`. After owner-completed npm authentication and publishing verification, `nanodes@0.1.0` was published under `kashif-rezwi` and became the registry's `latest` release. A clean registry install matched all published files and the reviewed tarball integrity.

**VERIFIED:** The portfolio now pins `nanodes: "0.1.0"` and the public registry tarball/integrity in its lockfile. Removed `vendor/nanodes-0.0.0.tgz`; the published runtime, declarations and CSS match that verified vendor runtime byte for byte. The nine-page production build, unchanged static hero output, single mounted Contact display, click advance and requested no-outline/no-pause appearance pass. Standard contrast checks pass 19/19 and glass checks 30/30. No browser errors were reported. Registry-transition changes remain unstaged, uncommitted and undeployed; no staging, commits, tags or pushes were performed by the agent.
