export class BoundedRingBuffer<T> {
  private values: Array<T | undefined>;
  private write = 0;
  private count = 0;

  constructor(private capacity: number) {
    if (!Number.isInteger(capacity) || capacity < 1) throw new Error('Capacity must be a positive integer');
    this.values = new Array(capacity);
  }

  push(value: T) {
    this.values[this.write] = value;
    this.write = (this.write + 1) % this.capacity;
    if (this.count < this.capacity) this.count += 1;
  }

  get length() { return this.count; }

  prependNew(values: T[]) {
    const combinedNewestFirst = [...values, ...this.toNewestFirst()];
    this.clear();
    for (const value of [...combinedNewestFirst.slice(0, this.capacity)].reverse()) this.push(value);
  }

  toNewestFirst(): T[] {
    if (this.count === 0) return [];
    const oldest = this.count < this.capacity ? 0 : this.write;
    const oldestFirst: T[] = [];
    for (let index = 0; index < this.count; index++) oldestFirst.push(this.values[(oldest + index) % this.capacity] as T);
    return oldestFirst.reverse();
  }

  clear() {
    this.values = new Array(this.capacity);
    this.write = 0;
    this.count = 0;
  }
}
