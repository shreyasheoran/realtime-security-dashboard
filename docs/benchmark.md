# Benchmark workflow

## Browser load test

1. Run `npm install && npm run dev`.
2. Open the application in Chrome and wait for the 1,200 synthetic seed alerts.
3. Open DevTools → Performance and start a recording.
4. Keep recording while the generator runs at 240 events/sec and React batches commits every 250 ms.
5. Navigate alerts with arrow keys and stop the recording after 30 seconds.
6. Export the recording and record the result in `docs/benchmarks/<date>.json`.

## Acceptance targets

- generated load: 240 synthetic events/sec in the default demo
- UI commit target: p95 <= 250 ms
- retained alerts: <= 120,000
- keyboard: arrow navigation moves selection and scrolls it into view
- keyboard: Enter marks the selected alert as investigating
- accessibility: row controls and live-region announcement remain operable with keyboard and screen readers

## Reproducible ingestion benchmark

```bash
npm run benchmark
```

This Node workload inserts 120,000 events into a bounded buffer, records frame-equivalent batch durations, and prints the synthetic p95.

A benchmark number is only a claim when the browser, hardware, sample date and generated workload are recorded beside it. Synthetic throughput does not represent production throughput.
