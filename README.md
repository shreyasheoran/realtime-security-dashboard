# Real-time Security Operations Dashboard

A synthetic, production-inspired security operations console for validating frontend behavior under high-volume alert streams.

![Status](https://img.shields.io/badge/status-in%20progress-orange) ![React](https://img.shields.io/badge/react-19-61dafb) ![TypeScript](https://img.shields.io/badge/typescript-5.x-3178c6) ![License](https://img.shields.io/badge/license-MIT-green)

## Problem

Security analysts need to triage fresh alerts while the interface stays responsive, accessible and correct during bursts, reconnects and partial outages.

This project explores those properties with synthetic telemetry rather than employer or customer data.

## Intended proof

| Area | Target |
|---|---|
| Synthetic stream | 20,000 events/second |
| UI settlement | P95 under 250 ms |
| Render behavior | Frame-stable during bursts |
| Alert access | Keyboard-only triage |
| Accessibility | WCAG 2.2 AA checks |
| Recovery | Resumed stream after simulated disconnect |

## Architecture

```text
Synthetic event generator
          |
          v
Event gateway / SSE boundary
          |
          v
Ring-buffer ingestion
          |
          v
React snapshot store
          |
          v
Virtualized alert workspace
```

## Engineering priorities

1. Bounded memory under sustained input.
2. Batched React snapshots instead of one commit per event.
3. Stable virtualized rows and predictable keyboard navigation.
4. Explicit stale, reconnecting and disconnected states.
5. Live-region announcements that avoid becoming noisy during bursts.
6. Synthetic load tests and browser evidence attached to releases.

## Repository standards

- Architecture Decision Records
- Threat model and synthetic-data policy
- Runbook for reconnect and backpressure behavior
- Unit, integration, browser and accessibility tests
- CI build and benchmark workflows
- No production secrets, customer telemetry or employer code

## Local development

```bash
npm install
npm run dev
```

## Engineering handbook

Implementation principles and proof templates are maintained in [software-engineering-handbook](https://github.com/shreyasheoran/software-engineering-handbook).

## Status

This repository is the active proof project for frontend systems engineering, reliability and security-domain product delivery. It is designed to be measured—not presented as production evidence without running workload data.

MIT licensed.