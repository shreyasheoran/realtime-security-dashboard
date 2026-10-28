# Testing strategy

## Layers

### Unit tests
- Synthetic ID generation and uniqueness.
- Ring-buffer eviction and wraparound.
- Snapshot batching, dedupe, and backlog policy.
- Filter composition.
- State transitions.

### Component tests
- Severity and status rendering.
- Selected-row identity.
- Search and severity controls.
- Keyboard handlers.
- Stream pause and resume behavior.

### Integration tests
- High-rate producer plus batched consumer.
- Filter changes while stream continues.
- Selected row preservation during prepended events.
- Resolve/reopen state consistency.

### Browser tests
- Core desktop and mobile layouts.
- Keyboard-only triage.
- Virtualization at multiple viewport heights.
- Axe accessibility scan.
- Live-region behavior under burst updates.

### Performance tests
- JavaScript insertion, snapshot, commit, and render durations.
- Maximum rendered DOM row count.
- Maximum retained memory policy.
- Browser long-run memory sample.

## Quality gates

A pull request changing behavior must provide relevant unit/component coverage. Production deployment must pass build and benchmark workflows. A visual change requires screenshots and viewport evidence.
