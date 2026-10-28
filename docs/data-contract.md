# Data contract

## AlertEvent

| Field | Type | Required | Contract |
|---|---|---|---|
| `id` | string | yes | Stable unique synthetic identifier in the form `SYN-000001` |
| `time` | ISO 8601 string | yes | Event creation timestamp |
| `severity` | `critical \| high \| medium \| low` | yes | Classification |
| `rule` | string | yes | Synthetic detection name |
| `source` | string | yes | Synthetic host or network address |
| `destination` | string | yes | Synthetic host or network address |
| `status` | `open \| investigating \| resolved` | yes | Analyst state |

## Invariants

- A synthetic ID is unique within the current session.
- IDs are not reused after stream reset unless the session is explicitly reset.
- `time` uses UTC ISO-8601 at ingress; rendering formats it locally.
- Severity is a closed enum.
- Status transitions are defined as open -> investigating -> resolved and resolved -> open/reopen through a documented UI action.
- UI-only status overlays are keyed by ID and are cleared on a session reset.

## Buffer snapshot contract

A React snapshot is immutable, newest-first or positionally ordered consistently, and contains no mutable object references shared with the ingestion buffer. Producers may not mutate snapshot objects.

## Filter contract

Filters compose with AND semantics across severity and text query. Text matching is case-insensitive and applies to ID, rule, source, and destination.
