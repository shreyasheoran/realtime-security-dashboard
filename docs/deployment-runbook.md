# Deployment runbook

## GitHub Pages target

The repository deploys the static Vite build through GitHub Actions.

## Pre-deployment checklist

- `npm ci`
- `npm run build`
- `npm run benchmark`
- Review repository for secrets or real data
- Verify Pages is configured for GitHub Actions
- Confirm deployed base path matches repository subdirectory

## Deployment

Push to `main` or run the Deploy dashboard workflow manually. GitHub Actions builds `dist` and publishes the Pages artifact.

## Verification

1. Open the Pages URL.
2. Confirm it shows the synthetic-data label.
3. Confirm synthetic alerts stream and pause/resume controls operate.
4. Perform Arrow Down/Arrow Up and Enter.
5. Confirm browser console is free of application errors.
6. Check the deployed asset URLs for 404s.

## Rollback

Revert the bad commit on `main` or redeploy the known-good commit through workflow dispatch. Static GitHub Pages releases have no application database to roll back.
