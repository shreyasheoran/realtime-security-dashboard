# ADR-003: Batched React snapshots

## Status

Proposed

## Context

Committing once per synthetic ingress emission overloads React and obscures whether expensive rendering comes from ingestion or UI work.

## Decision

The ingestion layer collects events in a pending queue and publishes a new immutable snapshot at a configurable interval. The default interval is 250 ms.

## Consequences

- UI update latency is bounded but not zero.
- Producers can outpace rendering while queue/backlog is observable.
- Snapshot publication can be measured independently from React render and commit duration.
- Event loss policy remains separate from snapshot cadence.

## Alternatives considered

- Commit every event: easy to explain but unsuitable under sustained bursts.
- Single global requestAnimationFrame loop: smoother but less explicit and harder to benchmark.
- Web Worker producer: useful for production, but unnecessary until browser profiling demonstrates it is required.
