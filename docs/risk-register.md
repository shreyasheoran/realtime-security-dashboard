# Risk Register

## Scale

Likelihood: 1 Rare to 5 Almost certain. Impact: 1 Minimal to 5 Severe. Risk score: likelihood × impact.

| ID | Risk | Likelihood | Impact | Score | Mitigation | Owner | Status | Trigger |
|---|---|---:|---:|---:|---|---|---|---|
| R1 | Claims exceed verified implementation | 4 | 5 | 20 | implementation-status gate | Owner | Active | README/LinkedIn claim lacks evidence |
| R2 | Virtualization performance is not measured | 3 | 4 | 12 | DOM instrumentation and browser test | Owner | Active | row mount count unavailable |
| R3 | Accessibility automation substitutes manual review | 3 | 4 | 12 | keyboard and screen-reader evidence | Owner | Active | only automated result exists |
| R4 | Synthetic data resembles real telemetry too closely | 2 | 4 | 8 | SYN prefixes, policy review, text scan | Owner | Active | real-looking asset or indicator appears |
| R5 | GitHub Pages base path breaks assets | 2 | 4 | 8 | build and URL smoke test | Owner | Active | 404 asset or blank page |
| R6 | Dependency supply-chain compromise | 2 | 5 | 10 | lockfile, scan, update review | Owner | Active | vulnerability or suspicious package change |
| R7 | Documentation drifts from code | 3 | 5 | 15 | docs-updating review and reconciliation | Owner | Active | PR changes behavior without contract |
| R8 | Browser workload test is uncontrolled | 3 | 4 | 12 | metadata, repeated run, controlled device | Owner | Active | missing browser/workload/commit |
| R9 | External Figma/Notion workspace unavailable | 4 | 2 | 8 | repository-native source plus approved handoff | Owner | Accepted blocker | authenticated workspace unavailable |
| R10 | Current implementation is not documentation-complete despite older implementation | 4 | 5 | 20 | no-code reconciliation and evidence work | Owner | Active | code differs from contract |

## Risk thresholds

- 15-25: release blocker.
- 8-14: explicit owner and planned mitigation before release.
- 1-7: monitor.

R1, R7, and R10 remain release blockers until documented and measured.
