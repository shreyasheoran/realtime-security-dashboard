# Engineering principles

## Correctness

1. Synthetic event IDs are stable and unique within a run.
2. Status changes operate on immutable snapshots and do not mutate stream input.
3. Filtering never silently changes underlying stream data.
4. Backpressure policy is explicit rather than implicit.
5. UI state is recoverable after filtering, sorting, pause, or resume.

## Performance

1. Producer and renderer concerns are separated.
2. Ingestion is bounded before React commits.
3. React receives immutable batched snapshots, not individual stream emissions.
4. Rendering work is proportional to the viewport plus a bounded overscan.
5. Measurements are recorded under a named workload and environment.
6. Visual polish does not excuse avoidable layout or render work.

## Accessibility

1. A keyboard-only analyst can complete all primary triage actions.
2. Focus remains predictable after list updates.
3. Live regions summarize events without announcing every row.
4. Status and severity never rely on color alone.
5. Text, controls, and focus states meet WCAG 2.2 AA.

## Reliability

1. Stream degradation is visible and persistent.
2. Recovery is resumable and does not duplicate synthetic events.
3. Last-known state remains labeled when stale.
4. Failures should degrade to a usable page rather than crash the workspace.
5. No observability dependency blocks ingestion.

## Security and privacy

1. Synthetic data only.
2. No tokens, keys, customer data, employer data, or production endpoints.
3. Browser persistence must contain no sensitive information.
4. Dependencies and deployments are subject to CI checks.
