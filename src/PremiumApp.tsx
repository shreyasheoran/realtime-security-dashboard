import { useMemo, useState } from 'react';
import { makeInitialEvents, AlertEvent, Severity } from './synthetic';
import { useEventStream } from './useEventStream';
import './premium.css';

const severityOrder: Severity[] = ['critical', 'high', 'medium', 'low'];

export default function PremiumApp() {
  const [running, setRunning] = useState(true);
  const streamed = useEventStream(240, 250, 120000, running);
  const events = streamed.length ? streamed : makeInitialEvents();
  const [query, setQuery] = useState('');
  const [severity, setSeverity] = useState<Severity | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string>(events[0]?.id ?? '');
  const [resolved, setResolved] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => events.filter(event => {
    const matchesSeverity = severity === 'all' || event.severity === severity;
    const haystack = `${event.id} ${event.rule} ${event.source} ${event.destination}`.toLowerCase();
    return matchesSeverity && haystack.includes(query.toLowerCase());
  }), [events, severity, query]);
  const selected = filtered.find(event => event.id === selectedId) ?? filtered[0];
  const counts = severityOrder.reduce((acc, level) => ({ ...acc, [level]: events.filter(e => e.severity === level && !resolved[e.id]).length }), {} as Record<Severity, number>);

  function move(delta: number) {
    const index = filtered.findIndex(event => event.id === selected?.id);
    const next = filtered[Math.max(0, Math.min(filtered.length - 1, index + delta))];
    if (next) setSelectedId(next.id);
  }

  function toggleResolved(event?: AlertEvent) {
    if (!event) return;
    setResolved(current => ({ ...current, [event.id]: !current[event.id] }));
  }

  return <main className="sentinel-shell" onKeyDown={event => {
    if (event.key === 'ArrowDown') { event.preventDefault(); move(1); }
    if (event.key === 'ArrowUp') { event.preventDefault(); move(-1); }
    if (event.key === 'Enter' || event.key === 'r') toggleResolved(selected);
  }}>
    <aside className="sidebar">
      <div className="logo"><div className="logo-glyph">S</div><div><b>Sentinel</b><span>Security operations</span></div></div>
      <nav aria-label="Primary navigation">
        <button className="active" aria-current="page"><span>⌁</span> Alert stream</button>
        <button><span>◫</span> Investigations</button>
        <button><span>⌗</span> Asset inventory</button>
        <button><span>⌁</span> Detection rules</button>
        <div className="nav-label">WORKSPACE</div>
        <button><span>◌</span> Playbooks</button>
        <button><span>▥</span> Audit log</button>
      </nav>
      <div className="workspace-status"><i /> Synthetic environment<span>All systems operational</span></div>
    </aside>

    <section className="content">
      <header className="topbar"><div><p>OPERATIONS</p><h1>Alert stream</h1></div><div className="top-actions"><span className="live-pill"><i /> LIVE</span><button className="icon-button" aria-label="Notifications">♢</button><div className="avatar">SS</div></div></header>
      <div className="metrics">
        <article><div><span>Open alerts</span><small>± 4.2% vs. last hour</small></div><strong>{(events.length - Object.values(resolved).filter(Boolean).length).toLocaleString()}</strong><div className="spark critical" /></article>
        <article><div><span>Critical</span><small>Require immediate review</small></div><strong>{counts.critical.toLocaleString()}</strong><div className="spark high" /></article>
        <article><div><span>Events / minute</span><small>240 synthetic events / sec</small></div><strong>{(events.length ? 14400 : 0).toLocaleString()}</strong><div className="spark medium" /></article>
        <article><div><span>Mean response</span><small>Target under 15 minutes</small></div><strong>08:42</strong><div className="spark low" /></article>
      </div>

      <section className="alert-workspace">
        <div className="alert-list">
          <div className="list-header"><div><h2>Live detections</h2><span>{filtered.length.toLocaleString()} matching events</span></div><button className="pause" onClick={() => setRunning(!running)}>{running ? 'Ⅱ Pause stream' : '▶ Resume stream'}</button></div>
          <div className="filters">
            <label><span aria-hidden="true">⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search alert, host, or indicator" /></label>
            <select value={severity} onChange={e => setSeverity(e.target.value as Severity | 'all')} aria-label="Filter by severity"><option value="all">All severities</option>{severityOrder.map(level => <option key={level} value={level}>{level}</option>)}</select>
          </div>
          <div className="severity-tabs" role="tablist">{(['all', ...severityOrder] as const).map(level => <button role="tab" aria-selected={severity === level} key={level} onClick={() => setSeverity(level)}>{level === 'all' ? 'All' : level}<b>{level === 'all' ? events.length : counts[level]}</b></button>)}</div>
          <div className="columns"><span>Severity / detection</span><span>Source</span><span>Received</span></div>
          <div className="rows" role="listbox" aria-label="Security alerts">
            {filtered.slice(0, 80).map(event => <button role="option" aria-selected={selected?.id === event.id} key={event.id} className={`alert-row ${selected?.id === event.id ? 'selected' : ''}`} onClick={() => setSelectedId(event.id)}>
              <span className={`severity-icon ${event.severity}`} />
              <span className="alert-name"><b>{event.rule}</b><small>{event.id}</small></span>
              <span className="source"><b>{event.source}</b><small>{event.destination}</small></span>
              <time>{new Date(event.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</time>
            </button>)}
          </div>
        </div>

        {selected && <aside className="detail-panel" aria-label="Selected alert details">
          <div className="detail-top"><span className={`pill ${selected.severity}`}>{selected.severity}</span><button aria-label="Close details">×</button></div>
          <p className="alert-code">{selected.id}</p>
          <h2>{selected.rule}</h2>
          <div className="detail-status"><span>STATUS</span><b>{resolved[selected.id] ? 'Resolved' : selected.status}</b></div>
          <div className="timeline"><h3>Evidence</h3><div><i /><span><b>Detection generated</b><small>{new Date(selected.time).toLocaleString()}</small></span></div><div><i /><span><b>Synthetic event ingested</b><small>Normalized and indexed locally</small></span></div></div>
          <div className="entities"><h3>Entities</h3><dl><div><dt>Source host</dt><dd>{selected.source}</dd></div><div><dt>Destination</dt><dd>{selected.destination}</dd></div></dl></div>
          <button className="investigate" onClick={() => toggleResolved(selected)}>{resolved[selected.id] ? 'Reopen alert' : 'Resolve alert'}</button>
          <p className="keyboard-hint">Keyboard: ↑ ↓ select · Enter resolve</p>
        </aside>}
      </section>
      <p className="data-note" aria-live="polite">Synthetic telemetry only · bounded at 120,000 events · snapshots batched every 250 ms</p>
    </section>
  </main>;
}
