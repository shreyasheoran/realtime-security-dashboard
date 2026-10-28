# Frontend API and Module Contract

## Scope

There is no network API in the current static proof. This document defines module boundaries for browser-domain code.

## Synthetic generator

### Input

- Rate: number
- Optional seeded state
- Optional explicit identifier counter

### Output

- `AlertEvent`

### Constraints

- Synthetic identifiers use the `SYN-` prefix.
- Values must not contain real indicators or customer identifiers.
- Invalid numeric bounds are rejected or normalized to safe defaults.

## Stream hook

```ts
useEventStream(rate, batchMs, capacity, active): AlertEvent[]
```

| Parameter | Type | Default intent | Contract |
|---|---|---|---|
| rate | number | 240 | synthetic events per second |
| batchMs | number | 250 | snapshot interval |
| capacity | number | 120000 | maximum retained events |
| active | boolean | true | producer and consumer enabled |

## Retention output

The newest incoming event precedes retained older events. If incoming volume exceeds capacity, the oldest events are removed. Identity must remain stable between snapshots.

## Filter module

Accepted filters:

- Free text search.
- Exact severity selection.
- Status selection if implemented in UI.

Filter output is immutable; it must not mutate the source event list.

## Status actions

Supported statuses:

- Open
- Investigating
- Resolved

A status mutation targets one synthetic event ID and retains all other alert fields.

## Error behavior

- Do not expose raw exceptions in alert detail.
- Invalid event input is excluded or normalized according to the synthetic-data policy.
- UI should not make external requests.
- Unsupported browser APIs require a readable fallback before use.
