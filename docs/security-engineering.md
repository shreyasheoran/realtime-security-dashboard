# Security Engineering

## Summary

The public console is a synthetic frontend proof, not a production security platform. Security engineering focuses on data provenance, render safety, supply-chain control, privacy, and safe documentation.

## Assets

- Source code and documentation.
- Synthetic alert state.
- Static deployment account and repository permissions.
- Browser session integrity.
- Recruiter-facing claims derived from evidence.

## Trust boundaries

- Repository and CI artifacts.
- Third-party dependencies.
- Synthetic generator output.
- User search and status inputs.
- Rendered text and DOM attributes.
- Public GitHub Pages deployment.

## Controls

- No employer/customer telemetry in repository or deployment.
- No secrets in source, build workflow, or issue payloads.
- Render strings as text rather than HTML.
- Validate synthetic fields before display.
- Dependabot or equivalent dependency alerts are enabled where available.
- GitHub Actions actions are pinned or reviewed before upgrades.
- GitHub Pages source is limited to reviewed builds.
- Security-sensitive claims require reproduction and threat-model review.

## Abuse cases

| Abuse case | Mitigation |
|---|---|
| Synthetic data contains real identity | Data review and prefixes; synthetic-data policy |
| Search input becomes markup | React text rendering and no raw inner HTML |
| Dependency compromise | Lockfile, review, CI vulnerability checks |
| Malicious URL parameters | Reject unknown or malformed values |
| Excessive synthetic load hangs UI | bounded queue and retention |
| Public deployment exposes credential | deployment has no server or secrets |
| Recruiter claim exceeds evidence | implementation-status reconciliation gate |

## Residual risk

Browser memory is process-local and not suitable for sensitive data. A static site has no authenticated authorization boundary. Future backend, AI, or persistence features require separate design review and threat modeling.
