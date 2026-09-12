---
title: 'Server Active Indicator'
roleLabel: 'Personal project'
period: '2026'
status: 'Published'
summary: 'A published npm package that tells users when a free-tier backend is waking up — silent on warm starts, a calm banner on cold ones. Built on a 5-state FSM with zero runtime dependencies and a first-class React adapter.'
repo: 'https://github.com/Kashif-Rezwi/server-active-indicator'
demo: 'https://server-active-indicator.vercel.app'
tech: ['TypeScript', 'Vitest', 'tsup', 'React', 'AbortSignal', 'GitHub Actions']
order: 4
draft: false
cover: 'server-active-indicator.png'
---

## Overview

Free-tier backends sleep after inactivity. When the next user visits, the frontend loads instantly from a CDN — but the first API request silently stalls for up to a minute while the service wakes. Nothing on screen explains why, and the user assumes the app is broken.

`server-active-indicator` is an npm package I built to address this honestly. It watches a lightweight `/health` endpoint, shows a calm "starting up" banner only when a request is taking suspiciously long, and dismisses the moment the server responds. When the backend is warm, it renders nothing — silence on success is intentional.

The package is published on npm at v0.3.2 (~3.1 KB gzipped core, ~6.2 KB with the React adapter), ships a framework-agnostic TypeScript core with a first-class React adapter, and has a live interactive demo covering all four status scenarios.

## What I built

- **5-state finite state machine.** The engine tracks five states: `unknown`, `checking`, `waking`, `active`, and `offline`. A 3-second reveal timer arms on every check — if the backend responds before it fires, the state flips to `active` and nothing is ever shown. If the timer fires first, the UI transitions to `waking`, shows the banner with a live elapsed counter, and continues checking with adaptive backoff. A fast warm backend is completely invisible.

- **Shared monitor registry.** Multiple components or hooks sharing the same configuration share one underlying engine instance, ref-counted so the polling loop starts on first acquisition and stops cleanly on last release. This prevents duplicate HTTP polling when several components on the same page watch the same endpoint.

- **Adaptive backoff with jitter.** Retry intervals grow at 1.5× per attempt, capped at 15 seconds, with ±20% randomization per interval. The jitter prevents bursts of health-check requests from multiple browser tabs hitting a waking instance at the same moment.

- **Browser event integration.** The engine pauses polling when the tab is hidden (`visibilitychange`) and resumes immediately on focus. It distinguishes browser offline events (`navigator.onLine === false`) from server unreachability, auto-recovering when `window online` fires. HTTP 4xx responses fast-path to `offline` with `reason: "http-error"` instead of retrying indefinitely.

- **React adapter built on `useSyncExternalStore`.** `ServerStatusProvider`, `useServerStatus`, and `<ServerStatus>` connect to the core engine through `useSyncExternalStore`, ensuring consistent reads across concurrent renders. The `<ServerStatus>` component injects its CSS at mount, so it needs no import-side stylesheet. The core engine has zero knowledge of React.

- **Zero runtime dependencies.** The library uses only native browser APIs: `fetch`, `AbortController`, `AbortSignal.timeout`, and `AbortSignal.any`. No external dependencies means no version conflicts in consumer projects and no bundle size surprises.

- **Release engineering.** Versioned with Changesets, built with `tsup` (dual ESM + CJS, `.d.ts` declarations, sourcemaps), published via GitHub Actions with npm OIDC trusted publishing and provenance attestation. A `publint` check validates exports on every release. A `check-size.mjs` gate fails the build if the bundle exceeds its size budget.

## Challenges

- **Silence without flicker.** Ensuring the indicator is invisible on warm backends — not just visually hidden, but producing zero DOM mutations — required careful timer sequencing. The reveal timer arms on every check; a successful fast response must cancel the timer and produce no DOM changes at all. A state transition to `waking` must not flicker if the backend responds one frame after the reveal fires. The 5-state machine keeps `active` the silent steady state: a fast success cancels the reveal timer before the UI ever mounts, and `offline` is reserved for genuine timeouts and 4xx errors — never for a slow-but-responding server.

- **Honest state semantics.** A browser cannot observe whether a server is sleeping — it can only observe that a request is taking a long time. The constraint "never claim a state the browser cannot actually detect" shaped both the state names and the UI copy. "Starting up" is always technically accurate; "sleeping" or "offline" are claims that require observable evidence to make.

- **Accessible state communication.** Status changes must be announced to screen readers without interrupting reading flow. The component uses `role="status"` with `aria-live="polite"`, so announcements are queued. The `prefers-reduced-motion` media query suppresses animations. Accessibility tests with axe-core run in the Vitest suite, catching regressions automatically rather than depending on manual review.

- **Dual ESM + CJS emission.** Consumer projects span a wide range of bundlers and module configurations. `tsup` emits both ESM (`.js`) and CJS (`.cjs`) with matched `.d.ts` declarations and sourcemaps. The `publint` check runs on every release to verify the exports map is correct before the package reaches npm.

## Outcomes

The package is live on npm at v0.3.2, MIT licensed. The interactive demo at `server-active-indicator.vercel.app` demonstrates all four states — silent warm start, waking banner with elapsed timer, active confirmation, and offline retry — with controls to simulate each scenario.

I use it in the Code Review Agent project (also in this portfolio): when the Render backend is cold-starting, a non-blocking banner appears across every route and dismisses automatically once the server responds.

> Sources: `Kashif-Rezwi/server-active-indicator` README, `package.json`, `src/core/` and `src/react/` directory inspection (2026-09-13). Features and decisions only; never framed as commercial or production-scale.