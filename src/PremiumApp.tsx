import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import { makeInitialEvents, AlertEvent, Severity } from './synthetic';
import { useEventStream } from './useEventStream';
import './premium.css';

const severityOrder: Severity[] = ['critical', 'high', 'medium', 'low'];
const ROW_HEIGHT = 64;
const OVERSCAN = 6;

export default function PremiumApp() {
  const [running, setRunning] = useState(true);
  const streamed = useEventStream(240, 250, 120000, running);
  const events = streamed.length ? streamed : makeInitialEvents();
  const [query, setQuery] = useState('');
  const [severity, setSeverity] = useState<Severity | 'all'>('all');
  const [selectedId, setSelectedId] = useState(events[0]?.id ?? '');
  const [statusOverrides, setStatusOverrides] = useState<Record<string, AlertEvent['status']>>({});
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(520);
  const viewportRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const merged = useMemo(() => events.map(event => ({ ...event, status: statusOverrides[event.id] ?? event.status })), [events, statusOverrides]);
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return merged.filter(event => {
      const matchesSeverity = severity === 'all' || event.severity === severity;
      const haystack = `${event.id} ${event.rule} ${event.source} ${event.destination}`.toLowerCase();
      return matchesSeverity && (!needle || haystack.includes(needle));
    });
  }, [merged, severity, query]);
  const selectedIndex = Math.max(0, filtered.findIndex(event => event.id === selectedId));
  const selected = filtered[selectedIndex];
  const counts = severityOrder.reduce((acc, level) => ({ ...acc, [level]: merged.filter(e => e.severity === level).length }), {} as Record<Severity, number>);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const update = () => setViewportHeight(viewport.clientHeight || 520);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!filtered.length) return;
    if (!filtered.some(event => event.id === selectedId)) setSelectedId(filtered[0].id);
  }, [filtered, selectedId]);

  function selectRelative(delta: number) {
    if (!filtered.length) return;
    const index = Math.max(0, filtered.findIndex(event => event.id === selectedId));
    const nextIndex = Math.max(0, Math.min(filtered.length - 1, index + delta));
    const next = filtered[nextIndex];
    setSelectedId(next.id);
    viewportRef.current?.scrollTo({ top: Math.max(0, nextIndex * ROW_HEIGHT - viewportHeight / 3), behavior: 'smooth' });
  }

  function setStatus(event: AlertEvent, status: AlertEvent['status']) {
    setStatusOverrides(current => ({ ...current, [event.id]: status }));
  }

  function onListKey(event: KeyboardEvent<HTMLDivElement>) {
    if (!(event.target instanceof HTMLElement)) return;
    if (!event.currentTarget.contains(event.target)) return;
    if (event.key === 'ArrowDown') { event.preventDefault(); selectRelative(1); }
    if (event.key === 'ArrowUp') { event.preventDefault(); selectRelative(-1); }
    if (event.key === 'Enter' && selected) { event.preventDefault(); setStatus(selected, selected.status === 'open' ? 'investigating' : selected.status); }
    if (event.key === 'Escape' && detailsOpen) {
      event.preventDefault();
      setDetailsOpen(false);
      listRef.current?.focus();
    }
  }

  const start = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN);
  const visibleCount = Math.ceil(viewportHeight / ROW_HEIGHT) + OVERSCAN * 2;
  const end = Math.min(filtered.length, start + visibleCount);

  return <main className="sentinel-shell">
    <aside className="sidebar">
      <div className="logo"><div className="logo-glyph">S</div><div><b>Sentinel</b><span>Security operations</span></div></div>
      <nav aria-label="Primary navigation">
        <button className="active" aria-current="page"><span>⌁</span> Alert stream</button>
        <button disabled><span>◫</span> Investigations</button>
        <button disabled><span>⌗</span> Asset inventory</button>
        <button disabled><span>⌁</span> Detection rules</button>
        <div className="nav-label">WORKSPACE</div>
        <button disabled><span>◌</span> Playbooks</button>
        <button disabled><span>▥</span> Audit log</button>
      </nav>
      <div className="workspace-status"><i /> Synthetic environment<span>Client-side proof</span></div>
    </aside>

    <section className="content">
      <header className="topbar"><div><p>OPERATIONS</p><h1>Alert stream</h1></div><div className="top-actions"><span className="live-pill"><i /> {running ? 'LIVE' : 'PAUSED'}</span><div className="avatar" aria-label="Synthetic session">SS</div></div></header>
      <section className="metrics" aria-label="Measured alert statistics">
        <article><div><span>Retained alerts</span><small>Browser memory buffer</small></div><strong>{merged.length.toLocaleString()}</strong></article>
        <article><div><span>Critical</span><small>Current retained severity</small></div><strong>{counts.critical.toLocaleString()}</strong></article>
        <article><div><span>Generated rate</span><small>Configured synthetic workload</small></div><strong>240</strong><small className="metric-unit">events / second</small></article>
        <article><div><span>Snapshot interval</span><small>Configured React batch window</small></div><strong>250</strong><small className="metric-unit">milliseconds</small></article>
      </section>

      <section className="alert-workspace">
        <div className="alert-list">
          <div className="list-header"><div><h2>Live detections</h2><span>{filtered.length.toLocaleString()} matching events</span></div><button className="pause" onClick={() => setRunning(!running)}>{running ? 'Ⅱ Pause stream' : '▶ Resume stream'}</button></div>
          <div className="filters">
            <label><span aria-hidden="true">⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search alert, host, or indicator" /></label>
            <select value={severity} onChange={e => setSeverity(e.target.value as Severity | 'all')} aria-label="Filter by severity"><option value="all">All severities</option>{severityOrder.map(level => <option key={level} value={level}>{level}</option>)}</select>
          </div>
          <div className="severity-tabs" role="tablist" aria-label="Severity filter">{(['all', ...severityOrder] as const).map(level => <button role="tab" aria-selected={severity === level} key={level} onClick={() => setSeverity(level)}>{level === 'all' ? 'All' : level}<b>{level === 'all' ? merged.length : counts[level]}</b></button>)}</div>
          <div className="columns"><span>Severity / detection</span><span>Source</span><span>Received</span></div>
          <div ref={viewportRef} className="rows" tabIndex={0} role="listbox" aria-label="Security alerts" onKeyDown={onListKey} onScroll={event => setScrollTop(event.currentTarget.scrollTop)}>
            <div ref={listRef} style={{ height: filtered.length * ROW_HEIGHT, position: 'relative' }}>
              {filtered.slice(start, end).map((event, offset) => {
                const index = start + offset;
                return <button type="button" role="option" tabIndex={selected?.id === event.id ? 0 : -1} aria-selected={selected?.id === event.id} key={event.id} className={`alert-row ${selected?.id === event.id ? 'selected' : ''}`} style={{ position: 'absolute', top: index * ROW_HEIGHT, height: ROW_HEIGHT }} onClick={() => { setSelectedId(event.id); setDetailsOpen(true); }}>
                  <span className={`severity-icon ${event.severity}`} />
                  <span className="alert-name"><b>{event.rule}</b><small>{event.id}</small></span>
                  <span className="source"><b>{event.source}</b><small>{event.destination}</small></span>
                  <time>{new Date(event.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</time>
                </button>;})}
            </div>
          </div>
          <p className="keyboard-hint">Keyboard: ↑ ↓ select · Enter investigate · Esc close details</p>
          <p className="sr-only" aria-live="polite">{filtered.length.toLocaleString()} matching synthetic alerts. Selected alert {selected?.id ?? 'none'}.</p>
        </div>

        {selected && detailsOpen && <aside className="detail-panel" aria-label="Selected alert details">
          <div className="detail-top"><span className={`pill ${selected.severity}`}>{selected.severity}</span><button aria-label="Close alert details" onClick={() => { setDetailsOpen(false); viewportRef.current?.focus(); }}>×</button></div>
          <p className="alert-code">{selected.id}</p><h2>{selected.rule}</h2>
          <div className="detail-status"><span>STATUS</span><b>{selected.status}</b></div>
          <div className="timeline"><h3>Evidence</h3><div><i /><span><b>Detection generated</b><small>{new Date(selected.time).toLocaleString()}</small></span></div><div><i /><span><b>Synthetic event ingested</b><small>Normalized locally</small></span></div></div>
          <div className="entities"><h3>Entities</h3><dl><div><dt>Source host</dt><dd>{selected.source}</dd></div><div><dt>Destination</dt><dd>{selected.destination}</dd></div></dl></div>
          {selected.status === 'resolved' ? <button className="investigate" onClick={() => setStatus(selected, 'open')}>Reopen alert</button> : selected.status === 'investigating' ? <button className="investigate" onClick={() => setStatus(selected, 'resolved')}>Resolve alert</button> : <button className="investigate" onClick={() => setStatus(selected, 'investigating')}>Begin investigation</button>}
        </aside>}
      </section>
      <p className="data-note" aria-live="polite">Synthetic telemetry only · bounded at 120,000 events · snapshots batched every 250 ms</p>
    </section>
  </main>;
}
