# Delivery Roadmap

## Foundation gate

### Epic: Documented foundation

- Project brief and PRD.
- TDD and architecture views.
- Data/API contracts.
- SLO and observability plan.
- Visual artifacts and wireframes.
- Threat model and runbooks.
- RACI, risk register, and NFR scorecard.
- Initial ADR set.

Exit: foundation review approved and external-tool access gaps are recorded.

## Reconciliation

### Epic: Implementation proof

- Build and package reconciliation.
- Synthetic stream code review against contracts.
- Virtual-list mounted-row instrumentation.
- Keyboard automation and manual review.
- Status/selection/filter tests.
- Failure-state implementation or claim removal.

Exit: implementation-status verified/unverified sections are accurate.

## Quality evidence

### Epic: Repeatable quality

- Test runner and coverage setup.
- CI lint/build/test/a11y gates.
- Benchmarks with environment metadata.
- Responsive screenshots.
- Deployment smoke evidence.

Exit: clean CI and committed evidence.

## Recruiter proof

### Epic: Public presentation

- README reconciled to proof.
- Architecture documentation discoverable from repository root.
- Public benchmark output qualified.
- GitHub Pages deployment matches screenshots.
- Resume/GitHub/LinkedIn claims reference evidence only.

Exit: release checklist complete.

## Backlog priorities

| Item | Priority | Depends on |
|---|---|---|
| Baseline reconciliation | P0 | foundation |
| Behavior tests | P0 | reconciliation |
| Virtual-row evidence | P0 | reconciliation |
| Keyboard evidence | P0 | reconciliation |
| Controlled benchmark | P0 | stable workload |
| CI quality gates | P1 | test runner |
| Responsive screenshots | P1 | UI stable |
| Public claims update | P1 | evidence |
