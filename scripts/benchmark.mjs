import { performance } from 'node:perf_hooks';
import { BoundedRingBuffer } from '../src/ringBuffer.ts';
import { cpus, platform, arch, totalmem } from 'node:os';

const events = 120_000;
const buffer = new BoundedRingBuffer(120_000);
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
console.log(JSON.stringify({ implementation: 'src/ringBuffer.ts', platform: platform(), architecture: arch(), logicalCpuCount: cpus().length, totalMemoryBytes: totalmem(), eventsPerBatch: events / 20, batches: 20, elapsedMs: +((performance.now() - start).toFixed(2)), p95Ms: +p95.toFixed(2), retained: buffer.length }, null, 2));
