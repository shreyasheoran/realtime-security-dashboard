# ADR-001: Bounded ring buffer for event ingestion

## Status

Accepted as the initial design.

## Context

The dashboard must absorb alert bursts without unbounded state growth or a React render per event.

## Decision

Use a capacity-limited ring buffer and publish immutable batched snapshots to React.

## Alternatives considered

- Plain React state: simple but creates excessive commits.
- An unbounded queue: unacceptable for memory stability.
- Direct virtualizer updates: can tear without snapshot consistency.

## Consequences

The latest retained events remain available and React reads a consistent snapshot. Events can wait until the configured flush window and are lost once capacity is exceeded; these trade-offs must be visible in the UI.