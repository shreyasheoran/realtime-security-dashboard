# Product requirements

## Purpose

Provide a credible, runnable demonstration of frontend engineering for security operations: sustained event streams, bounded memory, alert triage, keyboard access, and observable performance.

## Users

### Analyst
- Must scan current and historical synthetic alerts.
- Must search and filter by severity, indicator, rule, source, and destination.
- Must select an alert and resolve or reopen its investigation state.
- Must understand stream health and memory/backpressure behavior.

### Reviewer
- Must be able to run or deploy the project without customer credentials.
- Must be able to reproduce its benchmark and quality claims.
- Must be able to distinguish synthetic proof data from production measurements.

## Functional requirements

1. Generate synthetic security events at a configurable rate.
2. Preserve the newest bounded set of events.
3. Publish UI snapshots on a configurable batch interval.
4. Render only rows necessary to fill the viewport.
5. Provide search and severity filtering.
6. Support selection and status changes by pointer and keyboard.
7. Expose stream state: live, paused, stale, disconnected.
8. Never display employer code, customer telemetry, secrets, or real indicators.
9. Provide documented limitations for every performance claim.

## Acceptance criteria

- A fresh checkout can start locally with documented commands.
- Production build succeeds without environment variables or secrets.
- Synthetic data is visibly labeled as synthetic.
- More than the viewport capacity can be ingested without rendering every alert row.
- Arrow-key navigation, Enter actions, and screen-reader labels function.
- Benchmark results include environment, workload, date, and methodology.
- Deployment has a deterministic CI workflow.

## Explicit non-goals

- Not a production SIEM.
- Not a threat-intelligence platform.
- No real detections, authentication, organization tenancy, or customer data.
- No claim that synthetic throughput equals production throughput.
