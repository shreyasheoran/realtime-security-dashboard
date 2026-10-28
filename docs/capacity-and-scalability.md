# Capacity and Scalability

## Default workload

| Parameter | Default intent |
|---|---:|
| Event production | 240 events/sec |
| Producer boundary | 250 ms |
| Snapshot boundary | 250 ms |
| Seed alerts | 1,200 |
| Maximum retained events | 120,000 |
| Virtual row height | fixed and documented in implementation |
| Visible overscan | bounded and documented |

## Capacity budgets

- Retained objects: no more than configured capacity.
- Snapshot commits: at most roughly four visible React snapshot commits per second when no input triggers other commits.
- Mounted alert rows: proportional to viewport height plus bounded overscan, not total alert count.
- Search input: filter computation should remain responsive; workload evidence should be recorded separately from synthetic ingest evidence.

## Backpressure strategy

The current browser proof should discard only the oldest synthetic records when capacity is exceeded. It may coalesce pending synthetic events at snapshot boundaries. Newest data remains preferred unless a future benchmark identifies a different policy.

## Browser limits

Memory ceilings are logical object limits, not guarantees of a fixed heap size. Object, string, React fiber, and browser-engine overhead affect real memory use. Always report browser and device context.

## Non-production nature

Sustained 240 events/sec in synthetic browser data is not evidence of production throughput. Scaling to distributed services requires a separately implemented gateway, partition strategy, consumer backpressure, durable transport, schema compatibility, observability, and load tests.

## Required evidence

- Heap or profiler snapshot.
- DOM row count while scrolling through more than one viewport.
- Commit frequency.
- Long-run 30-minute synthetic run.
- Browser/device environment and commit hash.
- Raw benchmark output.
- Recorded interpretation and limitations.
