# RACI Matrix

## Roles

- **Owner:** repository owner and final reviewer.
- **Implementation:** same owner in the one-person project.
- **Evidence review:** repository owner; optional peer reviewer or automated CI.
- **Deployment approval:** repository owner.

| Activity | Owner | Implementer | Reviewer | Approval |
|---|---|---|---|---|
| Product brief and scope | A | R | I | A |
| Requirements | A | R | C | A |
| Architecture and ADR | A | R | C | A |
| UI wireframes/design | A | R | C | A |
| Synthetic generator/data policy | A | R | C | A |
| Implementation | A | R | C | A |
| Tests | A | R | C | A |
| Accessibility review | A | R | C | A |
| Benchmark | A | R | C | A |
| Deployment | A | R | C | A |
| Documentation claims | A | R | C | A |
| Public brand claims | A | R | C | A |

R = Responsible, A = Accountable, C = Consulted, I = Informed.

## Decision escalation

- Ambiguous product scope: owner decides after documenting assumptions.
- Significant architecture trade-off: ADR is required before implementation.
- Accessibility conflict: accessibility contract takes precedence unless scope exception is recorded.
- Unsupported performance claim: remove or qualify claim; do not publish until evidence exists.
- External-tool limitation: document owner, blocker, target date, and affected artifact.
