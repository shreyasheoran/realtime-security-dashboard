export type Severity = 'critical' | 'high' | 'medium' | 'low';
export interface AlertEvent { id: string; time: string; severity: Severity; rule: string; source: string; destination: string; status: 'open' | 'investigating' | 'resolved'; }

const rules = ['Impossible travel', 'Suspicious PowerShell', 'C2 beacon pattern', 'Credential spraying', 'Data staging', 'Malware signature', 'Privilege escalation'];
const sources = ['10.24.3.18', '172.16.8.41', '10.24.9.22', '192.168.4.7', '10.24.1.103'];
const destinations = ['api.synthetic.local', 'files.synthetic.local', 'auth.synthetic.local', '185.199.108.153', '10.24.0.8'];
let sequence = 0;

export function makeSyntheticEvent(): AlertEvent {
  const severityRoll = Math.random();
  const severity: Severity = severityRoll > .94 ? 'critical' : severityRoll > .72 ? 'high' : severityRoll > .35 ? 'medium' : 'low';
  sequence += 1;
  return { id: `SYN-${String(sequence).padStart(6, '0')}`, time: new Date().toISOString(), severity, rule: rules[Math.floor(Math.random() * rules.length)], source: sources[Math.floor(Math.random() * sources.length)], destination: destinations[Math.floor(Math.random() * destinations.length)], status: 'open' };
}

export function makeInitialEvents(count = 1200): AlertEvent[] { return Array.from({ length: count }, makeSyntheticEvent); }
