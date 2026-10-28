import { describe, expect, it } from 'vitest';
import { makeInitialEvents, makeSyntheticEvent } from './synthetic';

describe('synthetic telemetry', () => {
  it('creates bounded synthetic event objects with valid lifecycle state', () => {
    const event = makeSyntheticEvent();
    expect(event.id).toMatch(/^SYN-\d{6}$/);
    expect(['open', 'investigating', 'resolved']).toContain(event.status);
    expect(Number.isNaN(Date.parse(event.time))).toBe(false);
  });

  it('uses unambiguously synthetic hosts and reserved documentation-network destinations', () => {
    const events = makeInitialEvents(20);
    expect(events.every(event => event.source.startsWith('10.') || event.source.startsWith('172.16.') || event.source.startsWith('192.168.'))).toBe(true);
    expect(events.every(event => event.destination.endsWith('.local') || event.destination === '203.0.113.20' || event.destination.startsWith('10.'))).toBe(true);
  });
});
