# Threat model

## Assets

- Deployed application integrity.
- Repository credentials and deployment permissions.
- Availability of the public demo.
- Recruiter credibility of benchmark and visual claims.
- Absence of synthetic-data leakage or misrepresentation.

## Trust boundaries

- Synthetic generator is trusted code but treats its generated values as untrusted UI input.
- Query parameters and DOM text are untrusted.
- GitHub Actions and GitHub Pages controls repository and deployment artifacts.

## Primary risks and controls

| Risk | Control |
|---|---|
| Production data accidentally committed | Synthetic-data policy, secret scanning, review checklist |
| Dependency compromise | Lockfile, CI install, dependency review |
| XSS from rendered text | React escaping, no raw HTML or unsafe DOM injection |
| Deployment artifact mismatch | Deterministic build and immutable workflow artifact |
| Misrepresented synthetic benchmark | Explicit labeling, environment record, reproducible script |
| Availability service disruption | Static deployment, graceful empty and error states |

## Out of scope

Production authentication, authorization, tenant isolation, real threat detection, and backend ingestion are deliberately absent from this frontend proof.
