# R3-A Visual-System Evidence

- **Purpose:** Record the R3-A visual-system implementation, its claim-safe contact decisions, and the validation evidence required for the R3-A owner gate.
- **Authority:** Owner authorization in DL-020 (2026-08-05), bounded by [AGENTS.md](../../AGENTS.md) and the [R3 implementation plan](./02-improvement-implementation-plan.md).
- **Last updated:** 2026-08-05 (complete locally; owner gate pending)
- **Related:** [R3-0 baseline](./03-r3-0-correctness-baseline.md) · [implementation plan](./02-improvement-implementation-plan.md) · [claim map](../strategy/home-copy-claim-map.md) · [decision log](../decision-log.md) · [project status](../project-status.md)

## Scope disposition

| Item | Status | Evidence / boundary |
|---|---|---|
| Simplify visual system | Implemented locally | Hero matrix remains the sole expressive field; section rules and redundant card borders are reduced. |
| Cornflower-blue primary | Implemented locally | `--color-accent: #6495ed` in both explicit theme token sets. Companion `--color-accent-text` tokens preserve link-text contrast. |
| Colored shadows | Removed | Repository scan finds zero `box-shadow`, `drop-shadow`, or `text-shadow` declarations under `src/`. Accent remains as flat color, restrained tint, and hero-only background/matrix treatment—not elevation. |
| Local icon registry | Implemented locally | `src/components/Icon.astro`; local inline SVG, `currentColor`, 1.8 px stroke, and 14/15/16/20 px usages. |
| Emoji UI replacement | Implemented locally | Home “Now” cards use SVG icons; no platform emoji UI instances remain outside content files. |
| Theme preference | Implemented locally | `ThemeControl.astro`, `portfolio-theme` localStorage key, and inline initializer in `Base.astro`. System clears the explicit theme attribute; Light/Dark set it before CSS paints. |
| Font delivery | Implemented locally | Google Fonts links removed. `--font-sans` and `--font-mono` use high-character local system stacks. |
| Contact facts | Implemented locally | Owner-approved freelance-project invitation and `Kolkata, India` only; general availability remains absent (DL-020). |
| Project-card redesign / GitHub module | Deferred | Reserved for R3-C / R3-D. No GitHub activity data or card anatomy work is included here. |

## Token decisions

| Family | Rule |
|---|---|
| Accent | Cornflower blue `#6495ed` is the shared primary. It is not used as light-theme body/link text where contrast would fail; companion text tokens are used there. |
| Surface | Canvas, raised surface, and quiet alternate surface only. Spacing, rather than repeated rules, separates editorial sections. |
| Radius | `--radius-control: 0.375rem`; `--radius-card: 0.75rem`; `--radius-pill: 999px`. |
| Elevation | No CSS shadows. Hover feedback is a restrained background/border change and small translate only. |
| Typography | Local UI sans for prose; local UI mono restricted to labels/actions/metadata. No third-party font request. |
| Motion | Existing enhancement-only reveal behavior is retained. The matrix remains reduced-motion and coarse-pointer safe. |

## Icon inventory

`Icon.astro` provides: GitHub, LinkedIn, dev.to, mail, phone, resume, location, external link, repository, sun, moon, system, sparkles, writing, and learning.

Meaningful standalone controls must pass `label`; adjacent visible link text supplies the accessible name for decorative link icons. The theme selector has an explicit “Color theme” accessible name and visible System/Light/Dark option text.

## Verification performed

- `npm run build` — passed (six static routes generated).
- `git diff --check` — passed.
- Static scan — zero shadow declarations and zero former platform-emoji UI instances under `src/` (content excluded).
- Browser accessibility snapshot — theme is a named `combobox` with all three options; icon links retain visible names.
- Browser functional test — selecting Light set `data-theme="light"`, computed `color-scheme: light`, and persisted `portfolio-theme=light`; Dark preference persisted across an in-session navigation and restored the Dark selection/attribute. The native named `<select>` is focusable at the 390 px mobile breakpoint and exposes all three options in the accessibility tree.
- No-JavaScript test — built HTML was copied with all script tags removed and served locally; all 20 `.reveal` elements remained visible (`hidden: 0`, `js-reveal: false`).
- Contrast spot checks — companion dark-theme text `#a9c8ff` on `#111111`: 11.14:1; light-theme text `#2f57ad` on white: 6.80:1; dark button text `#0b1220` on cornflower `#6495ed`: 6.30:1. White is deliberately not used on cornflower (2.97:1).
- Visual captures generated locally: `/tmp/r3a-dark.png`, `/tmp/r3a-light.png`, `/tmp/r3a-dark-mobile.png`, `/tmp/r3a-light-mobile.png`. Home and Code Review Agent pages produced no observed browser-console errors.

## Remaining R3-A gate action

- Obtain explicit owner review/approval of the light/dark desktop/mobile captures and simplified system before beginning R3-B or any broader section/card restyling.
