# Security Policy

## Supported versions

This repository is a public portfolio proof. Only the current default branch and its latest GitHub Pages deployment are supported.

## Reporting a vulnerability

Do not publish sensitive proof or exploit details in a public issue. Open a GitHub security advisory for the repository if private reporting is enabled, or use the repository owner's public contact for coordination.

Please include:

- Affected URL or source file.
- Reproduction steps.
- Impact and expected behavior.
- Browser/environment details.
- Whether the issue exposes synthetic-only or real data.

## Synthetic data

The public application must not contain credentials, employer/customer telemetry, secrets, or real indicators. Report any real-looking data immediately.

## Deployment controls

- GitHub Actions should deploy only reviewed commits.
- Static deployment contains no server-side secret.
- Dependencies should be locked and scanned.
- Public content should use text rendering rather than raw HTML.

## Response expectations

The repository owner aims to acknowledge reports promptly, assess affected behavior, fix or disable unsafe behavior, document the resolution, and identify a safe disclosure time. A production incident-response SLA is not claimed for this portfolio repository.
