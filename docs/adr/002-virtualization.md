# ADR-002: Virtualized alert workspace

## Status

Proposed

## Context

The alert list must remain usable at a large retained capacity without mounting every row or degrading scrolling and keyboard navigation.

## Decision

Render only rows intersecting the viewport, plus bounded overscan. Row geometry is fixed-height, allowing deterministic index calculation and scroll restoration.

## Consequences

- Scroll offset maps directly to a visible-row range.
- Keyboard selection must explicitly scroll the selected index into view.
- Dynamic-height rows are not permitted without a separate measured-row architecture.
- Automated tests must cover first/last row, overscan, and keyboard scrolling.

## Alternatives considered

- Mount every row: simplest but not bounded for 120,000 retained events.
- Third-party virtualizer: acceptable after review, but introduces dependency and bundle complexity for a proof.
- Paginated rendering only: avoids rendering cost but weakens the continuous stream interaction contract.
