# Engineering Curriculum and Standards

## Applied foundations

This repository uses the following principles as review criteria rather than labels for architecture theater.

- SOLID: dependencies, state ownership, and single-purpose modules.
- DRY/KISS/YAGNI: shared contracts only where complexity benefits.
- Clean/hexagonal frontend boundaries: synthetic generator, stream state, UI controllers, and rendering are separated where the browser application can benefit.
- DDD concepts: synthetic alert, asset, source, rule, and status have explicit meaning in the domain.
- CAP/PACELC: static browser proof requires no distributed consistency claim.

## API and data norms

- Inputs are validated at trust boundaries.
- Stable synthetic identity is not mutated by status changes.
- Public or external API shape is versioned before compatibility promises.
- Collections are bounded or paginated.
- Writes are idempotent when replay is possible.
- Errors have stable UI behavior and do not expose internals.

## Reliability and scalability

- Use timeouts and cancellation for future asynchronous services.
- Retries use jitter and bounded attempts.
- Bulkheads and backpressure protect UI rendering.
- Capacity is measured, not assumed.
- Failure behavior is visible, reversible, and testable.

## Testing norms

- Unit: generator, retention, filters, status transitions.
- Component: workspace actions and selection.
- Integration: stream hook and virtualized workspace.
- End-to-end: critical keyboard-only flow and deployment smoke.
- Accessibility: automated rules plus manual keyboard/screen-reader review.
- Performance: bounded workload with metadata and repeat runs.

## Security norms

- OWASP Top 10 review for browser input and dependencies.
- Synthetic-data policy and threat model.
- No secrets or real event telemetry.
- Dependency and secret scanning.
- Least privilege for GitHub Actions and Pages deployment.

## Delivery norms

- Documentation changes with implementation.
- ADR for consequential decisions.
- Tests for behavior changes.
- Conventional commits.
- Protected main branch.
- CI before merge.
- Release checklist before public deployment.

## Accessibility norms

- WCAG contract governs keyboard, semantics, focus, labels, live regions, and contrast.
- Automated checks supplement, not replace, manual behavior.
- Reduced motion and responsive layouts are considered functional quality.
