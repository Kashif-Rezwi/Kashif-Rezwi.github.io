# R3-C — Flagship Project-Card System (Evidence)

- **Purpose:** Implementation evidence for R3-C per `docs/rebuild-02/02-improvement-implementation-plan.md` §R3-C (card anatomy, priority, consistent actions, media frames).
- **Authority:** Recorded per `AGENTS.md` loop. Owner gate pending.
- **Last updated:** 2026-08-05
- **Related:** [02-improvement-implementation-plan.md](./02-improvement-implementation-plan.md) · [05-r3-b-matrix-evidence.md](./05-r3-b-matrix-evidence.md) · [decision-log.md](../decision-log.md) (DL-024)

## 1. Baseline audit (before)

| Gap | Evidence |
|---|---|
| Full tech lists on cards | 11 / 8 / 7 tags per card → tech overwhelmed decisions |
| Status styled as a success claim | green pill (`color: var(--color-success)` + tinted bg) on cards **and** case-study heroes |
| No obvious primary action | three co-equal text links; "Case study →" visually equal to "Repo" |
| Uncapped summaries | 3/2/2-line ragged card bottoms |
| Media frame divider | `border-bottom` hairline under the cover (component-in-box residue, DL-021 direction) |
| Secondary rows hand-written | inline markup in `index.astro`, no reusable grammar, text-only links |

## 2. Changes

| File | Change |
|---|---|
| `src/components/WorkCard.astro` | **v2 rewrite.** Contractual anatomy: 16/9 media → role + neutral status → title → 2-line summary slot → first-4 tech + `+N more` → actions (`Read case study →` outline button + icon+text Repo / Live demo). Cover divider hairline removed. |
| `src/components/ProjectRow.astro` | **New.** One secondary grammar: name · claim label · description slot (inline links allowed) · icon+text links. |
| `src/pages/index.astro` | More-projects migrated to `ProjectRow`; dead `.more-project-*` styles removed. Zero copy changes. |
| `src/pages/work/[slug].astro` | Case-hero status neutralized (mono dim `· Status`, no green pill) — status semantics now consistent across pages. |

### Bounded choices (owner to confirm at gate)

1. Status = neutral dim mono text (no pill anywhere).
2. Tech shown = first 4 of existing ordered arrays + `+N more` linking to the case study (full lists unchanged there).
3. Primary CTA reuses the existing `.btn-outline` grammar.
4. Card hairline border kept — removing it makes dark cards invisible until hover (flagged for review).

## 3. Acceptance evidence

| Criterion | Result | Evidence |
|---|---|---|
| Anatomy order normalized | ✅ media → role/status → title → summary → tech → actions, all three cards | captures below |
| One primary action | ✅ `.btn-outline` "Read case study →" per card; Repo/Live demo icon+text links | `r3c-cards-*-1440.png` |
| Tech no longer overwhelms | ✅ exactly 5 tech slots per card (4 tags + `+N`) | DOM eval `techSlots:[5,5,5]` |
| Status ≠ success claim | ✅ `rgb(68,68,68)` dim mono on cards and case hero; zero success color | DOM eval + `r3c-case-status-dark.png` |
| Media frames (ratio/focal) | ✅ 16/9, `object-fit: cover; object-position: top`, zoom-on-hover kept | `r3c-cards-*` |
| Consistent heights (desktop) | ✅ all cards 535×355 at 1440 (summary slot + `margin-top:auto` actions) | DOM eval `sizes` |
| Both themes, responsive | ✅ 1440/390 captures dark+light; `scrollWidth = innerWidth` at 390 (no overflow) | captures + DOM eval |
| A11y — no nested interactives; named actions | ✅ zero issues; `+N more` carries `aria-label` with project context | `r3c_a11y` eval (issues: []) |
| Performance | ✅ Lighthouse Performance **100** mobile post-change | `/tmp/r3c-lh-mobile.json` |
| Contrast | ✅ `check-contrast.mjs` passes (status uses `--color-ink-dim`, a passing text token) | script output |

## 4. Captures (local `/tmp`, not committed)

`r3c-cards-dark-1440.png` · `r3c-cards-light-1440.png` · `r3c-cards-dark-390.png` · `r3c-rows-dark-1440.png` · `r3c-rows-light-1440.png` · `r3c-case-status-dark.png`

## 5. Deferred / owner decisions

- Card hairline border — keep or remove (borderless + stronger surface separation).
- Whether `+N more` should instead be plain (non-linked) text.

## 6. Post-review polish corrections (owner feedback, 2026-08-05)

Owner review flagged: action row wrapping/clipping, ragged card bases, unpolished bottoms. Root causes and fixes:

| Root cause | Fix |
|---|---|
| Action row wrapped to 2 lines (73px) at card widths ≤478px; Live demo overflowed the card edge by 1–2px at desktop width | `flex-wrap: nowrap` + shared center-aligned single line at desktop (gap 0.75rem); at ≤480px an **intentional two-tier layout**: full-width primary button, secondary icon links centered on their own row — no clipping, no accidental wrap |
| Baseline/center mismatch put Repo/Live demo at y+7 vs the button | all items `align-items: center` on one shared line |
| Tech row could double in height: a long tag label (e.g. "E2B Sandboxes") was flex-shrunk onto two text lines → 39px row → unequal card heights at some widths | tech slot is now exactly one 28px row (`height`, `flex-wrap: nowrap`, `flex-shrink: 0` on items, clipped overflow); visible tags reduced 4 → 3 |

**Verified after fixes (DOM measurements):** equal card heights and zero overflowing action rows at 320 / 390 / 480 / 768 / 1024 / 1280 / 1440; zero horizontal page overflow; captures `fix2-dark-1440.png`, `fix2-light-1440.png`, `fix2-dark-390.png`.
