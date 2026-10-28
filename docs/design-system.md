# Design System

## Foundations

### Space scale

4, 8, 12, 16, 24, 32, 48 pixels.

### Radius scale

- 4 px: inputs and compact controls
- 6 px: badges and buttons
- 8 px: cards and panels
- 14 px: status pills

### Shadow policy

Use restrained borders instead of large ambient shadows. Elevated popovers may use one compact shadow.

## Tokens

| Token | Intended role |
|---|---|
| `color.surface.app` | Application background |
| `color.surface.panel` | Alert and detail surfaces |
| `color.surface.selected` | Selected alert row |
| `color.text.primary` | Primary labels |
| `color.text.secondary` | Supporting labels |
| `color.border.default` | Panel and control boundaries |
| `color.status.live` | Live synthetic stream |
| `color.status.critical` | Critical alert |
| `color.status.high` | High alert |
| `color.status.medium` | Medium alert |
| `color.status.low` | Low alert |
| `color.action.primary` | Main actions |
| `color.focus` | Keyboard focus indicator |

## Components

### Navigation item

- Default icon and label.
- Selected item uses filled surface and vertical accent.
- Keyboard focus uses two-layer focus ring.

### Metric card

- Label, supporting count, optional trend/context.
- No decorative sparklines unless data provenance and update behavior are documented.

### Search input

- Visible label or accessible equivalent.
- Clear affordance.
- No submission implied unless Enter behavior exists.

### Severity badge

- Always contains the text severity.
- Icon or color is supplementary.

### Alert row

- Fixed height used by virtualization.
- Uses a semantic list or grid equivalent with row-level accessible label.
- Pointer selection and keyboard selection share the same state mutation.

### Detail panel

- Displays selected event identity and synthetic label.
- Includes evidence, timeline, action area, and empty state.
- Empty state explains that a visible alert has not been selected.

### Stream status

- Contains live/paused/stale/disconnected text and an icon or symbol.
- State transitions are announced to assistive technology only when implemented without noisy chatter.

## Content rules

- Never imply real detection certainty.
- Prefix all generated indicators with `SYN-` where practical.
- Date and benchmark claims require source and measurement context.
- Avoid “AI-powered,” “enterprise-grade,” or “production-scale” language without a matched implementation.

## Accessibility rules

- WCAG target is documented in the accessibility contract, not inferred from styling.
- All controls have accessible names.
- Focus states are visible in every theme.
- Color is never the only state signal.
- Motion respects reduced-motion preferences.
