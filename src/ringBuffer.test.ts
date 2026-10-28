import { describe, expect, it } from 'vitest';
import { BoundedRingBuffer } from './ringBuffer';

describe('BoundedRingBuffer', () => {
  it('returns newest-first values in order before capacity is reached', () => {
    const buffer = new BoundedRingBuffer<number>(5);
    [1, 2, 3].forEach(value => buffer.push(value));
    expect(buffer.toNewestFirst()).toEqual([3, 2, 1]);
  });

  it('evicts the oldest value and wraps correctly at capacity', () => {
    const buffer = new BoundedRingBuffer<number>(3);
    [1, 2, 3, 4, 5].forEach(value => buffer.push(value));
    expect(buffer.length).toBe(3);
    expect(buffer.toNewestFirst()).toEqual([5, 4, 3]);
  });

  it('prepends a batch without losing wrap-around order', () => {
    const buffer = new BoundedRingBuffer<number>(4);
    [1, 2, 3, 4].forEach(value => buffer.push(value));
    buffer.prependNew([6, 5]);
    expect(buffer.toNewestFirst()).toEqual([6, 5, 4, 3]);
  });

  it('rejects invalid capacities', () => {
    expect(() => new BoundedRingBuffer(0)).toThrow();
  });
});
