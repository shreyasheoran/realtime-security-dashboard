# Delivery Dependency Map

```mermaid
flowchart TD
    Foundation[Approved foundation] --> Contracts[Requirements and contracts]
    Contracts --> Reconciliation[Implementation reconciliation]
    Reconciliation --> UnitTests[Behavior tests]
    Reconciliation --> Accessibility[Keyboard and accessibility evidence]
    Reconciliation --> Performance[Virtual-list instrumentation]
    UnitTests --> CI[Quality CI]
    Accessibility --> CI
    Performance --> Benchmark[Controlled benchmark]
    Benchmark --> CI
    CI --> Build[Production build]
    Build --> Deploy[GitHub Pages deployment]
    Deploy --> Smoke[Public smoke check]
    Smoke --> Release[Recruiter proof release]

    ExternalFigma[Figma workspace access] -. optional export .-> VisualRelease
    RepositoryWireframes[Repository SVG wireframes] --> VisualRelease[Visual design evidence]
    VisualRelease --> Release
```

## Critical path

1. Reconciliation.
2. Tests.
3. Accessibility and virtualization evidence.
4. Controlled benchmark.
5. CI/build/deployment.
6. Release checklist.

## Parallel work

- Repository wireframes and design system.
- Operations and deployment documentation.
- Repository governance and dependency policy.
- External Figma export where access is available.

No visual proof should be published ahead of implementation reconciliation.
