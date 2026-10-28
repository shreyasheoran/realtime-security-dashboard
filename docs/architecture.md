# Architecture

## Current implemented components

- **Generator:** creates synthetic severity, asset, source and indicator events in the browser.
- **Stream hook:** appends generated events to a pending queue and exposes snapshots on the documented interval.
- **Ring buffer:** retains the newest bounded event set in React state.
- **Workspace:** renders the alert view with filtering, selection, status actions, keyboard handlers and windowing.
- **Live status:** communicates stream health in the browser.

## Contractual future components

- The gateway, reconnecting transport, replay deduplication and observer may be documented as proof targets but are not claimed as implemented browser modules without reconciliation.
- A backend or service transport must remain outside the public synthetic boundary unless separately documented, tested and deployed.

## Failure modes

| Failure | Required behavior |
|---|---|
| Producer burst | Bound memory, preserve newest relevant data and show backlog |
| Connection loss | Surface degraded state and retry with jitter |
| Replay duplication | Deduplicate by synthetic event ID |
| Stale snapshot | Keep last known state explicit and recoverable |
| Slow observer | Keep observability from blocking ingestion |
| Accessibility focus loss | Preserve focused row and expose announced updates |

## Security boundary

All values are synthetic and treated as untrusted. Public deployments must not contain secrets or authenticated production traffic.