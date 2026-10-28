# Architecture

## Components

- **Generator:** emits synthetic severity, asset, source and indicator events.
- **Gateway:** transports frames over SSE or WebSocket for realistic reconnect behavior.
- **Buffer:** applies bounded retention and batched snapshots.
- **Store:** exposes stable read snapshots and avoids React tearing.
- **Workspace:** renders virtualized rows, severity facets and keyboard-first triage actions.
- **Observer:** records latency, drops, commits, frame quality and service health.

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