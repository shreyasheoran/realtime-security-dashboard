# Definition of Done

A change is complete only when all applicable items below are satisfied.

## Scope

- Acceptance criteria are traceable to requirements or a documented bug.
- Out-of-scope behavior is not implemented accidentally.
- Documentation and implementation agree.

## Documentation

- Source-of-truth requirement updated.
- Architecture and ADR updated for consequential decisions.
- API/data contract updated for shape or behavior changes.
- Keyboard and accessibility contracts updated for interaction changes.
- Implementation status distinguishes verified and unverified claims.

## Engineering

- No undocumented production code added.
- Public text, URLs, data, errors, and logs contain no secrets or real indicators.
- Dependency changes receive review for license, maintenance, bundle, and vulnerability impact.
- Repeated timers and subscriptions clean up correctly.

## Quality

- Relevant unit/component tests pass.
- Relevant integration and end-to-end tests pass.
- Accessibility automation and manual keyboard checks pass where applicable.
- Performance changes receive benchmark evidence.
- Responsive layout is checked at committed viewports.

## Deployment

- Clean build passes.
- CI gates pass.
- Asset paths load under GitHub Pages base.
- Deployment smoke check passes.
- Rollback instructions remain valid.

## Evidence

- Commit hash and environment are recorded for benchmark claims.
- Screenshots match the deployed commit.
- Raw evidence is reproducible or retained with date/limitations.
- Unsupported claims are removed or qualified.

## Review

- PR describes outcome, rationale, and trade-offs.
- Related docs and evidence are linked.
- Synthetic-data review passes.
- Review owner records approval or waiver.
