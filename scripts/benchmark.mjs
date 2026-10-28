import { performance } from 'node:perf_hooks';

class RingBuffer {
  constructor(capacity) { this.capacity = capacity; this.values = new Array(capacity); this.write = 0; this.size = 0; }
  push(value) { this.values[this.write] = value; this.write = (this.write + 1) % this.capacity; if (this.size < this.capacity) this.size += 1; }
}

const events = 120_000;
const buffer = new RingBuffer(120_000);
for (let i = 0; i < 10_000; i++) buffer.push({ id: i });
const start = performance.now();
const samples = [];
for (let batch = 0; batch < 20; batch++) {
  const batchStart = performance.now();
  for (let i = 0; i < events / 20; i++) buffer.push({ id: batch * 6000 + i });
  samples.push(performance.now() - batchStart);
}
samples.sort((a, b) => a - b);
const p95 = samples[Math.floor(samples.length * 0.95) - 1];
console.log(JSON.stringify({ eventsPerBatch: events / 20, batches: 20, elapsedMs: +((performance.now() - start).toFixed(2)), p95Ms: +p95.toFixed(2), retained: buffer.size }, null, 2));
