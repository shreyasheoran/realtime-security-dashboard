# Dependency Graph

## Runtime dependency graph

```mermaid
flowchart TD
    Browser[User browser] --> React
    React --> ReactDOM
    React --> PremiumApp
    React --> StreamHook[useEventStream]
    StreamHook --> Synthetic[Synthetic generator]
    StreamHook --> State[Retention state]
    PremiumApp --> Workspace[Alert workspace]
    Workspace --> Filters
    Workspace --> VirtualList
    Workspace --> StatusState
    Workspace --> CSS[Premium styles]
```

## Tool dependency graph

```mermaid
flowchart LR
    Source[TypeScript and React source] --> TSC[TypeScript compiler]
    Source --> Vite[Vite bundler]
    TSC --> Bundle
    Vite --> Bundle
    Bundle --> Pages[GitHub Pages artifact]
    Test[Tests] --> CI
    TSC --> CI
    Vite --> CI
    Benchmark[Benchmark] --> CI
    Pages --> Reviewer
```

## External services

The current runtime has no required API service or database. GitHub and GitHub Actions are delivery dependencies, not application runtime dependencies.

## Dependency control

- Lockfile must be committed.
- Package additions require purpose, maintenance, license, bundle, security, and alternatives review.
- Latest or floating package versions should be replaced by reproducible pins before release evidence.
- GitHub Actions should use reviewed or pinned references.
