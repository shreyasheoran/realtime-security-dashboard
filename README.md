# Real-time Security Operations Dashboard

A runnable React and TypeScript proof of a high-volume security operations alert console. All data is synthetic; no customer or production telemetry is used.

## Run

```bash
npm install
npm run dev
npm run build
npm run benchmark
```

## What is implemented

- Synthetic event generator and bounded ring-buffer ingestion
- React snapshots batched every 250 ms to avoid committing for every event
- Custom windowed alert table that only mounts rows near the viewport
- 120,000-event memory ceiling
- Keyboard navigation with Arrow Up, Arrow Down and Enter
- Screen-reader labels, live status announcement and visible focus treatment
- Responsive security operations layout and severity states
- Documented browser and Node benchmark workflow

## Controls

Use **Tab** to enter the alert workspace, **Arrow Up/Arrow Down** to select rows, and **Enter** to begin investigation. Pressing **Top alert** resets selection.

See [benchmark workflow](docs/benchmark.md) for reproducible validation.
