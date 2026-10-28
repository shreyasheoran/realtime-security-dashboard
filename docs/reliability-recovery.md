# Reliability and Recovery

## Failure classes

| Class | Example | Required response |
|---|---|---|
| Local timer failure | one interval stops | reported degraded/disconnected state |
| UI render failure | React exception | error boundary and recoverable refresh |
| Burst saturation | producer exceeds consumer | bounded queue and explicit backlog indication |
| Browser suspension | tab throttled | stale state on resume |
| Asset failure | missing JavaScript or CSS | deployment verification catches release |
| Invalid synthetic data | malformed or missing field | normalize or discard; no raw output |
| Loss of focus | list/filter changes | restore stable workspace focus |

## Recovery hierarchy

1. Preserve visible synthetic state.
2. Stop generating additional risk when capacity is saturated.
3. Surface truthful health state.
4. Recover timers or snapshots without duplicate identity.
5. Reset UI selection only if the prior identity cannot remain visible.
6. Offer resume or refresh action where applicable.

## Retry policy

No network retries exist in the browser-only proof. If a transport is added, its retry policy must include jitter, maximum attempts, timeout, cancel-on-unmount, and duplicate replay identity.

## Stale data policy

A stale indicator may appear only if a snapshot-age threshold is measured. The UI must show the last successful snapshot age and a clear recovery action.

## Crash recovery

Static browser state is ephemeral. Refresh reloads seed synthetic data. It is acceptable for investigation state to be lost unless persistence is separately implemented and documented.
