# Keyboard interaction contract

## Global list navigation

| Key | Action |
|---|---|
| Tab | Move into and out of the alert workspace |
| Arrow Down | Select the next matching alert |
| Arrow Up | Select the previous matching alert |
| Home | Move to the first matching alert |
| End | Move to the last matching alert |
| Enter | Resolve the selected open/investigating alert, or reopen a resolved alert according to the visible action |
| Escape | Close an introduced detail control if one has been opened |

## Selection behavior

- Selection begins at the first item unless a valid prior selection is preserved.
- A keyboard selection immediately scrolls the row into view.
- Selection must not move merely because a stream update prepends data unless the product intentionally preserves the selected row through identity.
- Filter changes reset selection only if the prior selection is no longer present.

## Focus behavior

- The focused control is never recreated as a different element for pointer-only affordances.
- Updating the stream does not move DOM focus.
- Alert details update in place; focus does not jump to an announcement.
- Live region text is brief and throttled during bursts.

## Testing

Keyboard behavior requires integration coverage for navigation, viewport scrolling, selection preservation, resolve/reopen, filter reset, and focus restoration.
