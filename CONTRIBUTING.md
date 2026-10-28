# Contributing

## Documentation first

Before changing implementation, update the applicable source-of-truth documentation:

- Requirements and scope: `docs/product-requirements.md`
- Behavior or interaction: the relevant contract or runbook
- Architecture: `docs/architecture.md` and an ADR when a decision is consequential
- Performance: `docs/benchmark.md`
- Accessibility: `docs/accessibility.md` and `docs/keyboard-interactions.md`

Implementation may not contradict accepted documentation.

## Local workflow

```bash
npm install
npm run dev
npm run build
npm run test
npm run benchmark
```

## Pull request expectations

- Explain user behavior and engineering trade-off.
- Link relevant documentation and evidence.
- Include tests for behavior changed.
- Include benchmark or explain why none is required.
- Include screenshots for visual changes.
- Confirm synthetic data remains synthetic.
