# Product Requirements Document

## Document status

Draft foundation specification. Implementation claims require reconciliation against committed evidence.

## Objective

Deliver a compelling but truthful proof of real-time frontend system engineering as an SDE II portfolio artifact.

## MoSCoW scope

### Must have

- Synthetic event stream with configurable rate and snapshot interval.
- Bounded retained alert collection.
- Search and severity filters.
- Virtualized alert workspace.
- Keyboard selection and investigation flow.
- Resolve/reopen state transitions.
- Explicit synthetic-data identification.
- Reproducible build, benchmark, test, and deployment commands.
- Documentation index and implementation-status reconciliation.

### Should have

- Stream pause/resume.
- Accessible status announcement.
- Empty, loading, stale, and degraded states if implemented and tested.
- Responsive desktop and mobile layout.
- Visual regression screenshots.

### Could have

- Local persisted triage state.
- Rule/source facets.
- Export of synthetic evidence.
- Additional frontend performance panels.

### Won't have in current version

- Production ingestion or backend tenancy.
- Authentication and authorization.
- Real alert detection.
- Persistent cloud data.
- AI-generated root-cause conclusions.

## User stories

1. As an analyst reviewer, I can identify alerts from synthetic stream provenance so I do not mistake the demo for operational telemetry.
2. As an analyst reviewer, I can find a relevant alert by text or severity so I can complete a triage flow.
3. As an analyst reviewer, I can navigate alerts with Arrow Up/Arrow Down and act with Enter so the critical flow does not require a pointer.
4. As an analyst reviewer, I can see bounded stream health so I understand whether data is current.
5. As an engineering reviewer, I can reproduce the build and benchmark so I can validate claims.
6. As an engineering reviewer, I can review architecture, trade-offs, failures, and tests before relying on repository claims.

## Acceptance criteria

- A fresh repository environment can run local development and produce a production bundle.
- Synthetic alerts carry synthetic identifiers and labels.
- Retained state does not exceed configured capacity.
- UI snapshot cadence follows configured interval while the stream is active.
- Virtualized rows have a bounded mounted-row budget or accepted explicit alternative.
- Keyboard navigation does not place focus on hidden rows or lose selection.
- Status changes address one alert ID and are reflected consistently.
- Deployment assets resolve under the GitHub Pages base path.
- No public documentation exceeds verified implementation behavior.

## Functional prioritization

| Feature | Value | Effort | Priority | Evidence |
|---|---|---|---|---|
| Synthetic bounded stream | High | Medium | P0 | contract + tests |
| Filter and select | High | Low | P0 | component tests |
| Virtual list | High | High | P0 | instrumentation + test |
| Keyboard triage | High | Medium | P0 | automation + manual review |
| Benchmark evidence | High | Medium | P0 | committed environment output |
| Responsive detail | Medium | Medium | P1 | viewport evidence |
| Persistence | Low | Medium | P2 | requirements + ADR |

## RICE reference

- Reach: every reviewer and visitor.
- Impact: high confidence of engineering capabilities.
- Confidence: medium until implementation reconciliation completes.
- Effort: measured in docs, tests, benchmark, UI, and deployment work.
