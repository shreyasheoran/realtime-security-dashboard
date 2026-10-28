# Observability and SLO Design

## Scope

The browser proof has local runtime measurements. Public portfolio analytics are not enabled unless a separate privacy and threat review is completed.

## User-facing signals

| Signal | Meaning | Planned source |
|---|---|---|
| Live/paused | generator is or is not active | stream hook |
| Synthetic event rate | configured default workload | stream hook |
| Retained count | current bounded collection size | retention state |
| Snapshot age | time since last UI update | snapshot timestamp |
| Visible row count | mounted virtual rows | list instrumentation |
| Last action result | selection or status outcome | workspace state |

## Golden signals

- Latency: snapshot-to-render duration.
- Traffic: generated synthetic event rate.
- Errors: invalid synthetic events, timer failures, and React/application errors.
- Saturation: pending queue depth and bounded retention utilization.

## Proposed SLOs

SLOs are targets requiring measurement before production or public claims:

| Goal | Initial target | Status |
|---|---|---|
| Synthetic UI snapshot commit p95 | <= 250 ms | unverified |
| Local application build | passes on clean checkout | verify |
| Virtual DOM rows | bounded by viewport + overscan | verify |
| Keyboard critical flow | completes without pointer | verify |
| Deployment URL/assets | returns successful response | verify |

## Logging policy

- Do not log personal, employer, customer, secret, or production values.
- Synthetic IDs are safe only as synthetic fixtures, not representations of real assets.
- Performance logs should include commit hash, browser, workload, date, and run identifier.

## Alerting policy

The static proof does not currently define an operations team. CI failures act as deployment alerting. Future uptime or service alerting requires on-call ownership and a reporting destination.

## Runbook linkage

- [Deployment runbook](deployment-runbook.md)
- [Operations runbook](operations-runbook.md)
- [Benchmark methodology](benchmark.md)
