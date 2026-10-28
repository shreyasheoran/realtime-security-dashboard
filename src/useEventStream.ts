import { useEffect, useRef, useState } from 'react';
import { AlertEvent, makeInitialEvents, makeSyntheticEvent } from './synthetic';

export function useEventStream(rate = 240, batchMs = 250, capacity = 120000, active = true) {
  const [events, setEvents] = useState<AlertEvent[]>(() => makeInitialEvents());
  const pending = useRef<AlertEvent[]>([]);
  const running = useRef(true);

  useEffect(() => {
    running.current = true;
    const producer = window.setInterval(() => {
      if (!running.current || !active) return;
      const count = Math.max(1, Math.round(rate / 4));
      for (let i = 0; i < count; i++) pending.current.push(makeSyntheticEvent());
    }, 250);
    const consumer = window.setInterval(() => {
      if (!active || !pending.current.length) return;
      const incoming = pending.current;
      pending.current = [];
      setEvents(previous => [...incoming, ...previous].slice(0, capacity));
    }, batchMs);
    return () => { running.current = false; window.clearInterval(producer); window.clearInterval(consumer); };
  }, [rate, batchMs, capacity, active]);

  return events;
}
