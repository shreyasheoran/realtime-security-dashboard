# C4 and Architecture Views

## Level 1: System context

```mermaid
flowchart TB
    Analyst[Security analyst reviewer] -->|keyboard and pointer| Sentinel[Sentinel synthetic console]
    Recruiter[Recruiter or engineering reviewer] -->|views proof and documentation| Sentinel
    Sentinel -->|contains synthetic events only| Browser[(Browser memory and timers)]
    Sentinel -->|static assets| Pages[GitHub Pages]
    pages[Repository CI] --> Pages
```

## Level 2: Container view

```mermaid
flowchart LR
    subgraph Static deployment
      React[React UI]
      TS[TypeScript domain logic]
      CSS[Responsive design system]
      Vite[Vite build]
    end
    Synthetic[Synthetic generator] --> Queue[Pending queue]
    Queue --> Buffer[Bounded React buffer]
    Buffer --> Filtering[Search and severity pipeline]
    Filtering --> List[Virtualized alert workspace]
    List --> Actions[Selection and status actions]
    React --> Synthetic
    React --> Actions
    Vite --> Pages[GitHub Pages]
```

## Level 3: Component view

```mermaid
flowchart TD
    A[PremiumApp] --> B[Stream hook]
    A --> C[Synthetic generator]
    A --> D[Filter state]
    A --> E[Alert selection state]
    A --> F[Keyboard controller]
    B --> G[Retention state]
    D --> H[Filtered alert list]
    G --> H
    H --> I[Viewport window calculation]
    I --> J[Rendered alert rows]
    J --> K[Alert detail panel]
    E --> K
```

## Physical view

```mermaid
flowchart LR
    UserBrowser[User browser] --> Assets[HTML, CSS and JavaScript assets]
    Assets --> Memory[In-memory synthetic events]
    UserBrowser -.local only.-> Memory
```

There is intentionally no API, database, identity provider, secrets store, network event transport, or production telemetry connection in this proof.
