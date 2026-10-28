# Figma Handoff

## Status

A repository-native wireframe set is provided in `../wireframes`. A Figma link is not currently committed because it requires an authenticated owner, workspace access, and a stable public edit/inspect URL.

## Figma setup

Create a Figma file named `Sentinel Synthetic Security Console` with four top-level pages:

1. Foundations
2. Desktop Wireframes
3. Responsive Wireframes
4. Prototype

## Frame inventory

- `Desktop 1440` — overview and alert workspace
- `Desktop 1280` — compact navigation and triage
- `Tablet 768` — stacked workspace
- `Mobile 390` — navigation, filters, alert list, detail
- `Components` — buttons, chips, badges, table rows, metrics and inputs

## Component states

- Navigation selected/hover/focus
- Severity badge critical/high/medium/low
- Alert row default/hover/selected/focus
- Status open/investigating/resolved
- Stream live/paused/stale/disconnected
- Search empty/populated
- Detail panel default/selected/empty

## Auto layout rules

- Navigation width remains fixed at desktop.
- Detail panel has a maximum content width.
- Alert grid uses fixed-height rows for deterministic virtualization.
- Truncated text retains title attributes and screen-reader-accessible full values.
- Controls retain minimum 44 × 44 px touch targets on coarse-pointer layouts.

## Prototype flows

1. Open desktop workspace.
2. Search for a synthetic rule.
3. Filter by severity.
4. Use arrow keys to select alert.
5. Press Enter to investigate.
6. Resolve the alert.
7. Pause and resume stream.
8. Open detail and return focus.

## Figma export contract

Export approved frames as SVG or PNG beside the repository wireframes. Record the Figma file URL and export commit in a change note. Do not claim a UI screenshot is approved until it matches deployed behavior.
