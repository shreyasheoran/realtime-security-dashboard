# Accessibility contract

## Standard

The analyst workflow targets WCAG 2.2 AA conformance. Automated checks supplement, but do not replace, manual keyboard and screen-reader validation.

## Color and information

- Severity is identified by text, not color alone.
- Stream and activity states include text labels and icons.
- Interactive controls maintain visible focus.
- No information is conveyed only by animation or pulse.

## Structure

- The workspace has a meaningful heading hierarchy and landmarks.
- Alert list is operable as a keyboard listbox or equivalent semantic control.
- Selected alert details are exposed in logical document order.
- Dialogs and popovers must trap and restore focus when introduced.

## Motion

- Scrolling initiated by keyboard navigation must respect reduced-motion preferences.
- Stream activity must not flash at seizure-risk frequency.
- Animation carries no required meaning.

## Validation matrix

| Check | Method |
|---|---|
| Keyboard-only navigation | Manual |
| Screen-reader selection | NVDA or VoiceOver manual |
| Automated semantic violations | axe |
| Contrast | Automated plus manual spot check |
| Zoom and reflow | 200% browser zoom |
| Focus visibility | Manual keyboard pass |
