# Project Brief

- **Status:** Draft for foundation gate review
- **Owner:** Shreya Sheoran
- **Version:** 1.0
- **Repository:** realtime-security-dashboard

## Vision

Create a credible, runnable synthetic security operations workspace that demonstrates frontend real-time systems engineering, accessibility, bounded ingestion, performance discipline, and engineering documentation for SDE II positioning.

## Problem

Traditional portfolio projects often show static UI only and cannot demonstrate real-time alert handling, virtualization, bounded memory, keyboard-first investigation, benchmark discipline, or operational trade-offs. Recruiters and reviewers need direct, runnable evidence that a candidate understands production concerns without exposing employer or customer systems.

## Solution hypothesis

A browser-native synthetic alert console can make these qualities observable through a realistic interface, documented synthetic workloads, reproducible benchmarks, and deployment evidence.

## Users

### Primary user: security analyst reviewer

- Scan high-volume synthetic alerts.
- Search and filter by severity and text.
- Select evidence and change investigation status.
- Use the interface without a pointer.
- Understand stream health and synthetic-data provenance.

### Secondary user: recruiter or engineering reviewer

- Run and inspect the project locally or through GitHub Pages.
- Reconcile public claims with committed documentation and evidence.
- Reproduce build and benchmark workflows.

## Success metrics

| Metric | Target | Evidence |
|---|---:|---|
| Clean checkout start | Documented commands complete | Build log |
| Synthetic workload | Default 240 events/sec | benchmark or browser instrumentation |
| Retention | Never exceed configured capacity | automated test |
| Snapshot interval | Configured 250 ms | unit/instrumentation test |
| Mounted alert rows | Bounded by viewport + overscan | DOM instrumentation |
| Keyboard critical flow | Pointer-free end-to-end path | automated and manual evidence |
| Public deployment | Main URL and assets return successfully | deployment smoke log |

## Leading indicators

- Documentation and implementation reconciliation stays current.
- Every public performance claim names environment, workload, commit, sample size, and date.
- Accessibility defects are tracked before visual completion.
- Synthetic-data review finds no employer or customer telemetry.

## Non-goals

- Production SIEM, detection engine, EDR integration, or threat intelligence platform.
- Authentication, tenancy, durable storage, or real network ingestion.
- Claims that synthetic browser load equals production throughput.
- Automatic UI completion of real incident-response actions.

## Constraints and assumptions

- Public repository only; no secrets or private credentials.
- Static browser deployment on GitHub Pages.
- Local synthetic data is sufficient for portfolio proof.
- Individual maintainer; review ownership is the repository owner.
- Browser-only implementation is intentionally limited in scale and durability.

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Claims outpace implementation | Medium | High | implementation-status gate |
| Visual polish hides engineering gaps | Medium | High | required contract/evidence review |
| Synthetic data resembles real data too closely | Low | Medium | explicit synthetic prefix and policy |
| Virtualization is claimed but not measured | Medium | High | DOM mount instrumentation and test |
| Accessibility passes automation but not manual use | Medium | High | keyboard and screen-reader review |

## Milestones

1. Foundation documentation complete.
2. Documentation-to-code reconciliation complete.
3. Automated behavior and accessibility coverage complete.
4. Controlled benchmark evidence recorded.
5. Deployed release and recruiter-facing proof completed.

## Approval gate

Coding remains blocked until requirements, architecture, contracts, quality gates, diagrams, initial ADRs, repository governance, and the implementation reconciliation plan are approved.

Items requiring external access are explicitly identified rather than silently represented as complete.
