# State Machines

## Alert investigation state

```mermaid
stateDiagram-v2
    [*] --> Open
    Open --> Investigating: Enter or action
    Investigating --> Open: reopen
    Investigating --> Resolved: resolve
    Resolved --> Investigating: reopen
    Resolved --> Open: reopen as open
```

## Invariants

- Every alert has exactly one status.
- Status changes are local and identity-addressed.
- Filtering must not duplicate or remove an alert object.
- React keys use the synthetic event ID.

## Stream state

```mermaid
stateDiagram-v2
    [*] --> Live
    Live --> Paused: user pauses
    Paused --> Live: user resumes
    Live --> Stale: no snapshot within threshold
    Stale --> Live: snapshot advances
    Stale --> Paused: user pauses
    Live --> Disconnected: runtime exception
    Disconnected --> Live: recovered timer
```

## State activation rule

Until stale/disconnected transitions are implemented and tested, do not present them as production-ready features. This document distinguishes required design from existing UI behavior.

## Selection state

```mermaid
stateDiagram-v2
    [*] --> NoSelection
    NoSelection --> Selected: pointer or arrow key
    Selected --> Selected: focus changes
    Selected --> NoSelection: filtered result is empty
    Selected --> Selected: filtering retains event
    Selected --> NoSelection: explicitly clear
```

When a selection is removed, choose a deterministic fallback or keep no selection and announce why.
