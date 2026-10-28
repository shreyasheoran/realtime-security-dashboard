# Implementation status and documentation reconciliation

This file prevents documentation claims from outrunning implementation. It is reviewed against the code and deployment before a repository or LinkedIn claim is made.

## Verified

- Production build command succeeds locally.
- GitHub Pages workflow deploys the static application.
- Synthetic generator module exists.
- Synthetic alert ingestion runs on a timer and publishes batched React state.
- Search, severity filtering, row selection, pause, and resolve/reopen controls exist in the current UI.
- Keyboard Arrow Up, Arrow Down and Enter handlers exist.
- Deployment is publicly reachable.

## Must be independently demonstrated before claiming

- Virtualization only mounts viewport rows; the custom implementation must be instrumented and browser-tested.
- 120,000 retained-event policy must be demonstrated as memory behavior, not inferred from a constant.
- Keyboard behavior must be tested by automation and manual screen-reader review.
- Responsive layouts must be reviewed at representative viewports.
- Benchmark numbers require the documented environment record beside them.
- Accessibility conformance requires automated and manual evidence.
- Stream health states, including stale/disconnected modes, require implementation and tests.

## Future claims require evidence

Do not state that the project meets WCAG conformance, p95 targets, sustained-rate stability, 120,000-row browser performance, or keyboard-screen-reader usability until the relevant tests and reports are committed.
