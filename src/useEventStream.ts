import { useEffect, useRef, useState } from 'react';
import { AlertEvent, makeInitialEvents, makeSyntheticEvent } from './synthetic';
import { BoundedRingBuffer } from './ringBuffer';

export function useEventStream(rate = 240, batchMs = 250, capacity = 120000, active = true) {
  const [events, setEvents] = useState<AlertEvent[]>(() => makeInitialEvents());
  const buffer = useRef(new BoundedRingBuffer<AlertEvent>(capacity));
  const pending = useRef<AlertEvent[]>([]);

  useEffect(() => {
    buffer.current = new BoundedRingBuffer<AlertEvent>(capacity);
    for (const event of makeInitialEvents().reverse()) buffer.current.push(event);
    setEvents(buffer.current.toNewestFirst());
  }, [capacity]);

  useEffect(() => {
    if (!active) {
      pending.current = [];
      return;
    }
    const producer = window.setInterval(() => {
      if (!active) return;
      const count = Math.max(1, Math.round(rate / 4));
      for (let i = 0; i < count; i++) pending.current.push(makeSyntheticEvent());
    }, 250);
    const consumer = window.setInterval(() => {
      if (!active || !pending.current.length) return;
      buffer.current.prependNew(pending.current);
      pending.current = [];
      setEvents(buffer.current.toNewestFirst());
    }, batchMs);
    return () => {
      pending.current = [];
      window.clearInterval(producer);
      window.clearInterval(consumer);
    };
  }, [rate, batchMs, capacity, active]);

  return events;
}
