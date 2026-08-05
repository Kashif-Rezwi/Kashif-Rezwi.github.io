# R3-0 Correctness, Claim Map, and Baseline

- **Purpose:** Evidence for the R3-0 gate: claim-safe copy restoration, progressive-enhancement correction, and measured pre-R3-A baseline for `rebuild-02`.
- **Authority:** R3-0 owner authorization in conversation (2026-08-05). Claim mappings use the approved [home copy map](../strategy/home-copy-claim-map.md), [positioning](../strategy/positioning.md), and [evidence ledger](../research/evidence-ledger.md). No new career claim is approved by this document.
- **Last updated:** 2026-08-05
- **Related:** [02-improvement-implementation-plan.md](./02-improvement-implementation-plan.md) · [01-three-version-comparative-review.md](./01-three-version-comparative-review.md) · [home-copy-claim-map.md](../strategy/home-copy-claim-map.md) · [qa-report.md](../engineering/qa-report.md)

## 1. Scope completed

| R3-0 item | Result |
|---|---|
| Restore approved headline/title/metadata | Complete — `Frontend-focused Full Stack Engineer` restored in home title and description. |
| Remove claim drift | Complete — removed availability, freelance, and location statements; replaced unsupported “AI-powered applications” wording with approved wording. |
| Map rebuild-02 homepage copy | Complete — §2 records every changed/added R2 home sentence and its evidence basis. |
| Fix no-JS reveal regression | Complete — reveal opacity/transform applies only after JavaScript verifies IntersectionObserver support and adds `html.js-reveal`. |
| Inventory visual/client complexity | Complete — §4. |
| Record baseline | Complete — §5. |

## 2. Rebuild-02 home copy map

This table supplements—not replaces—the canonical Phase 1.1 map. It records R2 wording that remained or was changed during R3-0.

| Surface / current public text | Basis | R3-0 disposition |
|---|---|---|
| HTML title: “Kashif Rezwi — Frontend-focused Full Stack Engineer” | CL-01 | Restored. Matches positioning §2 and the approved Phase 1 title. |
| Meta description: “Frontend-focused Full Stack Engineer with 2+ years building customer-facing SaaS products in startup teams — landing-page builders, CRM, and campaign & workflow automation. Currently building AI products and developer tools.” | CL-01 · CL-02 · CL-03/04/05 · CL-18 + CL-13/14 | Restored to the approved hero variant. |
| Hero overline: “Portfolio” | No claim | Retained. Neutral orientation label. |
| Hero headline: “Kashif Rezwi” | No claim | Retained. Identity. |
| Hero direction: “Building toward AI product engineering and developer tools” | CL-18 | Restored to approved directional wording. |
| Hero summary | CL-02 · CL-03/04/05 · CL-18 + CL-13/14 | Restored to approved hero wording. |
| “View Resume”, “Email me”, GitHub, LinkedIn, dev.to | No claim | Retained as navigation/factual links; canonical LinkedIn remains owner-confirmed OQ-06. |
| “Selected work” / “Things I’ve built” | No claim | Retained as section headings. |
| “AI products and developer tools — personal projects with live demos.” | CL-18; individual card claims CL-13–CL-15 | Retained. Personal project labels remain visible. “Live demos” is a factual availability statement per project links. |
| Three flagship card summaries | CL-14 / CL-13 / CL-15 | Retained. Content collection wording maps to the existing featured-project research and ledger. LingoAgent remains personal work only. |
| Better DEV / LoopLens descriptions | CL-16 / CL-17 | Retained. Personal and hackathon labels remain visible. |
| Learning-in-public links | No claim | Retained as factual repo pointers. |
| Experience / employer / education content | CL-03–CL-12 and factual timeline | Retained. Existing collaborative wording is preserved. |
| “I’m building toward AI product engineering and developer tools. Recent personal projects include an AI code-review agent, a cited AI answer engine, and an autonomous i18n agent.” | CL-18 · CL-14 · CL-13 · CL-15 | Replaced R2’s “Focused…” / “pipeline” wording with approved home-map wording. LingoAgent is explicit personal work, not professional experience. |
| “I write about what I build. The LingoAgent article on dev.to walks through that build.” | SRC-11 | Replaced R2 implementation-detail claim with the approved article wording. |
| Learning-in-public paragraph | No claim | Retained as factual repo pointers. |
| Contact heading: “Let’s build something worth shipping.” | No claim | Retained as a non-career editorial invitation. |
| Contact sentence: “Reach me by email or phone, or find me on GitHub, LinkedIn, and dev.to.” | No claim | Restored to approved neutral contact copy. |
| Footer: “Have a project or question?” / “Say hello” | No claim | Replaced unapproved availability statement with neutral contact invitation. |
| Footer source/social links and copyright | No claim | Retained as provenance/factual links. |

### Removed rather than assumed

| Removed R2 wording | Reason |
|---|---|
| “Open to opportunities” and “Open to new opportunities” | Availability is not in the approved home copy map. Owner may approve a future availability statement explicitly. |
| “Open to full-time roles, freelance projects…” | Freelance availability was not previously approved. |
| “Full Stack Engineer · Kolkata, India” | The approved headline is frontend-focused; public location display is unnecessary to the current information architecture and not included in the approved map. |
| “Currently focused on AI-powered applications…” | Replaced because professional evidence is constrained to “AI-assisted features,” while the approved overall direction wording is “building AI products and developer tools.” |

## 3. Progressive-enhancement correction

### Previous behavior

Within `prefers-reduced-motion: no-preference`, every `.reveal` element was styled `opacity: 0` and translated before the IntersectionObserver script ran. If script execution or the API failed, lower-page content remained visually hidden.

### Current behavior

1. The raw HTML contains no `js-reveal` class.
2. CSS only hides/repositions `.reveal` descendants of `html.js-reveal`.
3. The inline script adds `js-reveal` only when `IntersectionObserver` exists and reduced motion is not requested.
4. In reduced-motion mode, it adds no class and the content remains visible without reveal transitions.

This establishes visible content as the baseline. Animation is enhancement-only.

## 4. Current implementation inventory

Measured from `src/` after R3-0. Counts are an inventory for later simplification, not a quality score.

| Item | Count / status | R3 action |
|---|---|---|
| Border declarations | 35 | R3-A will reduce and formalize structural borders. |
| Gradient references | 18 | R3-A will limit gradients to the purposeful accent/matrix hierarchy. |
| Box-shadow declarations | 13 | R3-A will reduce layered elevation/glow. |
| Pill/circular radius declarations | 5 | R3-A will define control/card/pill radius tokens. |
| Platform emoji UI instances | 3 | R3-A will replace with a local SVG icon system. |
| Google Fonts references | 3 | R3-A will decide local/system/self-hosted font delivery. |
| Client scripts | 3 | Header menu, progressive reveal, and hero matrix. None fetches career data or requires a third party at runtime. |
| Reveal element sites | 17 | R3-0 makes all visible without JavaScript; R3-A may rationalize entrance motion. |
| Body-wide dot grid | Removed | Matrix is now hero-only. |

## 5. Build and runtime baseline

### Build and asset baseline

| Measure | Result | Method |
|---|---:|---|
| Static routes | 6 | `npm run build` |
| Generated `dist/` size | 2,017,505 bytes | Sum of generated files after R3-0 build |
| Generated optimized AVIF images | 230,022 bytes | Sum of `dist/_astro/*.avif` |
| Hero portrait AVIF | 8,922 bytes | Generated output inspection |
| Client scripts | 3 inline scripts | Source inspection |
| External font references | 3 | Source inspection (Google Fonts preconnect + stylesheet) |

### Local production-preview vitals

The following are local preview measurements only; they are not production-network Lighthouse scores.

| Route | Theme | FCP | LCP | CLS | TTFB |
|---|---|---:|---:|---:|---:|
| `/` | Dark | 76 ms | 492 ms | 0 | 0.5 ms |
| `/work/code-review-agent/` | Light | 64 ms | 400 ms | 0 | 0.6 ms |

Method: `agent-browser vitals` against an Astro production preview on 2026-08-05. Production Lighthouse and accessibility validation remain R3-F work.

### Verification completed

- `npm run build` — pass.
- `npm run check:contrast` — pass for the existing token test suite.
- `git diff --check` — pass.
- Desktop dark home and desktop light case-study renders — reviewed.
- No console errors reported by browser sessions on those routes.
- Raw generated home HTML has no `js-reveal` class; generated CSS only hides `.reveal` below `.js-reveal`.
- Disabled-JavaScript simulation: served a copy of generated `dist/` with all `<script>` elements stripped. Browser verification found 0 scripts, no `js-reveal` class, 20/20 reveal elements at `opacity: 1`, 0 hidden reveal elements, and all home headings/actions present in the accessibility tree.

## 6. R3-0 acceptance assessment

| Acceptance criterion | Status | Evidence |
|---|---|---|
| No public claim drift | **Pass for changed R2 home/footer copy** | §2; unsupported availability/location/freelance/AI wording removed. |
| Headings and metadata agree | **Pass** | Home HTML title and description use CL-01 and approved positioning wording. |
| No content depends on IntersectionObserver to exist visually | **Pass** | §3 plus disabled-JavaScript simulation in §5: 20/20 reveal elements visible, zero hidden. |
| Baseline available | **Pass** | §4–5. |

## 7. Owner decisions still needed before later phases

- **OPEN QUESTION:** Whether an availability statement should return, and exact wording if so.
- **OPEN QUESTION:** Whether freelance work should be invited publicly.
- **OPEN QUESTION:** Which GitHub facts should be surfaced in R3-D; recommendation is a dated public contribution display plus project links, not grades/streaks/third-party widgets.
- **OPEN QUESTION:** Whether location should ever be shown; it is intentionally absent after R3-0.

These questions do not block the completed R3-0 corrections. They do block reintroducing those claims in later content/design phases.
