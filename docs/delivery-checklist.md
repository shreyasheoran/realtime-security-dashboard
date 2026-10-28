# Delivery checklist

## Documentation

- [ ] Product requirements approved and complete.
- [ ] Architecture matches implementation.
- [ ] Data contract matches runtime types.
- [ ] All decisions have ADR status and consequences.
- [ ] Accessibility and keyboard contracts have acceptance evidence.
- [ ] Benchmark workflow has reproducible commands.
- [ ] Synthetic-data policy prohibits real telemetry.
- [ ] Threat model reviewed.
- [ ] Deployment and operations runbooks verified.

## Implementation

- [ ] Build passes.
- [ ] Tests pass.
- [ ] Synthetic generator runs.
- [ ] Stream pause and resume work.
- [ ] Virtualization only mounts bounded rows.
- [ ] Search, severity filters, selection, resolve, and reopen work.
- [ ] Keyboard navigation works without pointer use.
- [ ] Focus and live-region behavior manually verified.
- [ ] Mobile and desktop layouts reviewed.
- [ ] Console contains no application errors.

## Measurement

- [ ] Benchmark command recorded in CI or locally.
- [ ] Environment, commit, workload, and date recorded.
- [ ] No performance claim exceeds measured evidence.
- [ ] Synthetic nature is stated beside every public metric.

## Deployment

- [ ] CI workflow passes on clean checkout.
- [ ] GitHub Pages URL returns 200.
- [ ] Browser assets load without 404s.
- [ ] README demo URL is live.
- [ ] Screenshots reflect the deployed version, not only localhost.
