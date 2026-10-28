import { KeyboardEvent, useMemo, useRef, useState } from 'react';
import { useEventStream } from './useEventStream';

const ROW_HEIGHT = 64;
const VIEW_HEIGHT = 520;

export default function App() {
  const streamed = useEventStream();
  const [statusOverrides, setStatusOverrides] = useState<Record<string, AlertEvent['status']>>({});
  const [selected, setSelected] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const merged = useMemo(() => streamed.map(event => ({ ...event, status: statusOverrides[event.id] ?? event.status })), [streamed, statusOverrides]);
  const start = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - 6);
  const end = Math.min(merged.length, Math.ceil((scrollTop + VIEW_HEIGHT) / ROW_HEIGHT) + 6);

  function onKey(event: KeyboardEvent<HTMLDivElement>) {
    if (!['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      const next = Math.max(0, Math.min(merged.length - 1, selected + (event.key === 'ArrowDown' ? 1 : -1)));
      setSelected(next);
      const desired = next * ROW_HEIGHT;
      if (desired < scrollTop || desired > scrollTop + VIEW_HEIGHT - ROW_HEIGHT) viewport.current?.scrollTo({ top: desired, behavior: 'smooth' });
    } else {
      const alert = merged[selected];
      if (alert) setStatusOverrides(current => ({ ...current, [alert.id]: alert.status === 'open' ? 'investigating' : alert.status }));
    }
  }

  return <main>
    <header><div><span className="brandmark">S</span><strong>SENTINEL</strong><span className="environment">SYNTHETIC SOC</span></div><div className="live"><i /> LIVE · 240 EPS</div></header>
    <section className="stats" aria-label="Alert summary">
      <article><span>OPEN ALERTS</span><strong>{merged.filter(x => x.status === 'open').length.toLocaleString()}</strong><small>Streaming synthetic events</small></article>
      <article><span>CRITICAL</span><strong>{merged.filter(x => x.severity === 'critical').length.toLocaleString()}</strong><small>Highest severity retained</small></article>
      <article><span>INGESTED</span><strong>{merged.length.toLocaleString()}</strong><small>Bounded in browser memory</small></article>
      <article><span>BATCH INTERVAL</span><strong>250<em>ms</em></strong><small>Backpressure protected</small></article>
    </section>
    <section className="workspace">
      <div className="toolbar"><div><h1>Alert queue</h1><p>Virtualized analyst workspace</p></div><button type="button" onClick={() => setSelected(0)}>Top alert</button></div>
      <div className="table-head" aria-hidden="true"><span>ID</span><span>Time</span><span>Severity</span><span>Detection</span><span>Source → Destination</span><span>Status</span></div>
      <div ref={viewport} className="viewport" style={{ height: VIEW_HEIGHT }} tabIndex={0} role="listbox" aria-label="Security alerts. Use arrow keys to navigate and Enter to investigate." onScroll={e => setScrollTop(e.currentTarget.scrollTop)} onKeyDown={onKey}>
        <div style={{ height: merged.length * ROW_HEIGHT, position: 'relative' }}>
          {merged.slice(start, end).map((event, offset) => {
            const index = start + offset;
            return <button type="button" role="option" aria-selected={selected === index} key={event.id} className={`row ${selected === index ? 'selected' : ''}`} style={{ transform: `translateY(${index * ROW_HEIGHT}px)` }} onClick={() => setSelected(index)}>
              <span>{event.id}</span><span>{new Date(event.time).toLocaleTimeString()}</span><span><b className={`severity ${event.severity}`}>{event.severity}</b></span><span>{event.rule}</span><span>{event.source} → {event.destination}</span><span className="status">{event.status}</span>
            </button>;
          })}
        </div>
      </div>
      <div className="announcement" aria-live="polite">Selected alert {selected + 1} of {merged.length}. Press Enter to start investigation.</div>
      <footer><span>Keyboard: ↑ ↓ to navigate · Enter to investigate</span><span>{merged.length.toLocaleString()} synthetic events</span></footer>
    </section>
  </main>;
}
