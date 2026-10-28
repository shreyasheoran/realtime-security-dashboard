# Synthetic data policy

## Permitted data

- Synthetic host names under `.synthetic.local`.
- Reserved documentation networks such as RFC ranges where appropriate.
- Fictional alert rules.
- Generated identifiers and timestamps.
- Synthetic analyst interaction state.

## Prohibited data

- Employer names, systems, architecture diagrams, or proprietary operational details.
- Customer names, endpoints, identifiers, alerts, or telemetry.
- Real usernames, credentials, API keys, tokens, secrets, or personal information.
- Threat indicators that are presented as real intelligence.

## Labeling requirements

The UI, repository README, screenshots, benchmarks, demos, and public posts must identify data as synthetic. Synthetic throughput figures must not be described as production throughput.

## Reset behavior

A page reload may reset IDs, timestamps, and analyst state. Code must not infer persistence from the synthetic stream.
