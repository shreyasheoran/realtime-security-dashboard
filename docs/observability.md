# Observability contract

## Synthetic metrics

- Ingress rate, configured and observed.
- Pending producer queue depth.
- Batch interval and observed publish duration.
- UI commit duration.
- Rendered row count and viewport count.
- Retained event count and memory ceiling.
- Dropped or evicted event count.
- Duplicate synthetic ID count.
- Keyboard action count may be collected only locally and must not be transmitted.

## Browser evidence

Every reported performance result must state:
- Browser and version.
- Operating system and device.
- Date and commit SHA.
- Synthetic ingress rate.
- Batch interval.
- Retention capacity.
- Warm-up and measurement duration.
- Method used to calculate p95.

## Privacy

No telemetry leaves the demo. The proof may log metrics locally or in browser DevTools only. Deployment analytics must not collect analyst or environment details.
