# Non-Functional Requirements Scorecard

| Dimension | Requirement | Target | Measurement | Status |
|---|---|---|---|---|
| Performance | Synthetic ingest | default 240/sec | configurable workload and logs | target not independently verified |
| Performance | UI snapshot commit | p95 <= 250 ms | controlled browser run | target not verified |
| Scalability | Retention | <= 120,000 events | automated capacity test | target in implementation |
| Rendering | Mounted rows | viewport + bounded overscan | DOM instrumentation | target not verified |
| Reliability | Timer cleanup | no duplicate intervals after unmount | hook/component test | verify |
| Reliability | Empty queue | no snapshot commit | unit timer test | verify |
| Accessibility | Keyboard critical flow | no pointer required | keyboard automation/manual | verify |
| Accessibility | Focus | visible and restored | manual + automated review | verify |
| Privacy | Data | synthetic only | repository/deployment scan | verify |
| Security | Secrets | none in repository | secret scan | verify |
| Security | HTML rendering | no raw HTML sink | source review and test | verify |
| Portability | Browsers | current Chromium baseline initially | browser matrix | define |
| Deployment | GitHub Pages | URL/assets successful | CI smoke | verify |
| Maintainability | Clean build | passes from clean checkout | CI | verify |
| Traceability | Public claim | maps to evidence | claim review | verify |

## Prioritization

P0 dimensions are retention, synthetic provenance, keyboard access, deployment, clean build, and truthful claims. Performance and scalability targets must not be promoted above their evidence.
