# Feature Prioritization

## Impact/Effort matrix

| Feature | User impact | Confidence | Effort | Priority |
|---|---|---|---|---|
| Correct bounded stream | High | Medium | Medium | P0 |
| Correct virtualization | High | Medium | High | P0 |
| Keyboard triage | High | High | Medium | P0 |
| Synthetic provenance | High | High | Low | P0 |
| Automated behavior tests | High | High | Medium | P0 |
| Benchmark evidence | High | Medium | Medium | P0 |
| Deployment evidence | High | High | Medium | P0 |
| Responsive layout | Medium | High | Medium | P1 |
| Persistent triage state | Medium | Medium | Medium | P2 |
| Backend ingestion | High | Low | Very high | Deferred |
| Authentication/tenancy | Medium | Low | High | Deferred |
| AI investigation | Medium | Low | High | Deferred |

## MoSCoW summary

- Must: truthful synthetic core, retention, virtualization, keyboard, status, accessibility, evidence, deployment.
- Should: pause/resume, responsive review, visual evidence, CI quality gates.
- Could: persistence, export, richer facets.
- Won't current: production services and real incident workflow.
