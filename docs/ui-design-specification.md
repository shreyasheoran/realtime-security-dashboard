# UI Design Specification

## Product tone

The interface is precise, quiet, and operational. It avoids decorative gradients, large marketing graphics, excessive cards, and playful security imagery. Synthetic provenance remains visible without obstructing work.

## Information architecture

Primary navigation:

1. Overview
2. Alerts
3. Investigations
4. Assets
5. Rules
6. Sources
7. Activity
8. Settings

The alert workspace is the primary proof surface.

## Desktop layout

```text
┌──────────────┬──────────────────────────────┬───────────────┐
│ Brand / nav  │ Alert toolbar / metrics      │ Synthetic     │
│              ├──────────────┬───────────────┤ context       │
│ Overview     │ alert rows   │ detail panel  │               │
│ Alerts       │              │               │               │
│...           │              │               │               │
└──────────────┴──────────────────────────────┴───────────────┘
```

## Desktop breakpoints

| Viewport | Layout |
|---|---|
| >= 1280 px | Three-column navigation, alert list, detail context |
| 900-1279 px | Compact navigation, list, collapsible detail |
| 600-899 px | Single primary navigation panel and stacked alert/detail |
| < 600 px | Bottom or collapsible navigation, simplified metrics, stacked detail |

## Color roles

Use color only with an additional text/icon cue.

| Role | Guidance |
|---|---|
| Critical | Red accent plus "Critical" label |
| High | Amber/orange accent plus "High" label |
| Medium | Cyan/blue accent plus "Medium" label |
| Low | Gray/neutral accent plus "Low" label |
| Resolved | Green accent plus "Resolved" label |
| Synthetic | Explicit "SYNTHETIC" badge, never hidden provenance |

## Typography

- Interface font: system sans-serif unless bundled and performance-tested.
- Alert IDs and indicators: tabular monospaced presentation where supported.
- Dense secondary labels use compact line height but never below accessible contrast.

## Alert row anatomy

1. Severity indicator and label.
2. Rule or alert title.
3. Synthetic alert identifier.
4. Asset and source summary.
5. Timestamp.
6. Status.
7. Optional selection indicator.

## Selected state

- Visible selected outline.
- Persistent status label and text.
- No color-only distinction.
- Detail panel updates with matching alert ID.

## Focus states

- Every interactive control has a visible focus ring.
- Focus remains programmatically located inside the workspace when navigating rows.
- Escape restores or closes detail context according to the keyboard contract.

## Motion

- Stream updates should not animate every row.
- No layout motion should occur while synthetic alert rows are arriving.
- Respect reduced-motion preferences for any transitions.

## Responsive evidence required

Capture deployed screenshots at:

- 1440 × 900
- 1280 × 800
- 1024 × 768
- 768 × 1024
- 390 × 844

