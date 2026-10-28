# API Specification

## Current API status

Sentinel currently has no public HTTP, REST, or GraphQL API. It is a static browser application backed by synthetic in-memory data.

## Internal module interface

The internal contract is modeled as TypeScript-compatible module interfaces below. If any external API is added, this document must be replaced or supplemented by an OpenAPI or AsyncAPI file committed beside implementation.

```typescript
interface AlertEvent {
  id: string;
  severity: "critical" | "high" | "medium" | "low";
  title: string;
  status: "open" | "investigating" | "resolved";
  timestampMs: number;
  assetId: string;
  sourceId: string;
  ruleId: string;
  indicator: string;
}
```

## Stream contract

```typescript
function useEventStream(
  rate?: number,
  batchMs?: number,
  capacity?: number,
  active?: boolean
): AlertEvent[];
```

## Error contract

| Condition | TypeScript/UI behavior |
|---|---|
| Invalid rate | normalize or reject at hook boundary |
| Invalid capacity | reject zero/negative capacity |
| Malformed synthetic event | normalize or discard; do not render as HTML |
| Unknown status | reject unsupported transition |
| Unknown event ID | no-op with deterministic warning or selection recovery |
| Browser timer unavailable | show a documented fallback state |

## Backward compatibility

Internal shape changes require:

1. Contract update.
2. Fixture updates.
3. Migration of existing in-memory tests.
4. Review of public documentation and benchmark methodology.

## Future API policy

Any production-style API must include:

- Versioned route or schema.
- Authentication/authorization ownership.
- Validation at trust boundary.
- Stable error shape.
- Idempotency for writes.
- Pagination and bounded filters for collections.
- Rate limits and timeout behavior.
- Synthetic or redacted example payloads only in public repositories.
