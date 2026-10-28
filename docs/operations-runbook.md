# Operations runbook

## Symptoms

### No alerts appear
1. Confirm JavaScript loaded without console errors.
2. Confirm browser page is not paused or throttled excessively.
3. Reload and verify seed events appear within 2 seconds.
4. Check deployed asset URLs and CSP/network failures.

### Stream rate is unexpectedly low
1. Check the configured synthetic rate.
2. Check whether the browser tab is background-throttled.
3. Check whether pause state is enabled.
4. Verify no terminal error exists in the event producer interval.

### UI becomes unresponsive
1. Pause the stream.
2. Record DOM row count and retained data count.
3. Check virtualizer range and ensure dynamic-height rows are not accidentally introduced.
4. Capture a performance profile for ingress, commit, and paint phases.

### Deployment returns 404
1. Verify Pages status and workflow result.
2. Confirm repository and Pages base path.
3. Confirm assets refer to `/realtime-security-dashboard/` for project-page deployment.
4. Re-run the deployment workflow.

## Evidence collection

Record browser version, OS, viewport, commit SHA, workload, date, screenshots, console output, and performance trace.
