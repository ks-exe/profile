/**
 * Animated SVG visualizations for each project.
 * These represent the engineering concept — not screenshots of deployed products.
 */

export function DQIVisual() {
  const bars = [
    { h: 55, color: '#762B3B' }, { h: 30, color: '#C58D91' },
    { h: 70, color: '#762B3B' }, { h: 20, color: '#B08A57' },
    { h: 85, color: '#762B3B' }, { h: 45, color: '#C58D91' },
  ];
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="160" fill="#201C1B"/>
      {[0,1,2,3].map((_i, i) => <line key={i} x1="30" y1={20+i*30} x2="260" y2={20+i*30} stroke="rgba(242,237,228,0.04)" strokeWidth="1"/>)}
      <text x="14" y="12" fontFamily="IBM Plex Mono" fontSize="6" fill="#A78B78" letterSpacing="0.1em">DATA QUALITY REPORT</text>
      <rect className="scan-line" x="30" width="230" height="1" fill="rgba(118,43,59,0.5)" y="20"/>
      {bars.map((b, i) => {
        const x = 32 + i * 38; const bh = b.h * 0.9; const y = 125 - bh;
        return (
          <g key={i}>
            <rect className="dq-bar" x={x} y={y} width="22" height={bh} fill={b.color} opacity="0.85" rx="1"/>
            <text x={x+11} y={y-4} textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="6" fill="rgba(242,237,228,0.5)">{b.h}%</text>
          </g>
        );
      })}
      <rect x="185" y="4" width="80" height="12" rx="2" fill="rgba(118,43,59,0.3)" stroke="rgba(118,43,59,0.5)" strokeWidth="0.5"/>
      <circle className="status-dot" cx="192" cy="10" r="2" fill="#762B3B"/>
      <text x="197" y="13" fontFamily="IBM Plex Mono" fontSize="5.5" fill="#C58D91" letterSpacing="0.08em">ANALYSING...</text>
      <text x="14" y="155" fontFamily="IBM Plex Mono" fontSize="5.5" fill="rgba(167,139,120,0.35)" letterSpacing="0.08em">AMAZON BEDROCK · AWS LAMBDA · API GATEWAY</text>
    </svg>
  );
}

export function PipelineGenVisual() {
  const nodes = [
    { x: 20, y: 70, label: 'PROMPT' },
    { x: 90, y: 70, label: 'BEDROCK' },
    { x: 160, y: 70, label: 'DESIGN' },
    { x: 230, y: 70, label: 'EXPORT' },
  ];
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="160" fill="#201C1B"/>
      <text x="14" y="12" fontFamily="IBM Plex Mono" fontSize="6" fill="#A78B78" letterSpacing="0.1em">PIPELINE ARCHITECTURE GENERATOR</text>
      {[0,1,2].map(i => (
        <line key={i} className="pipe-line" x1={nodes[i].x+30} y1="70" x2={nodes[i+1].x} y2="70"
          stroke="#762B3B" strokeWidth="1.5" strokeDasharray="200" strokeDashoffset="200"/>
      ))}
      {nodes.map((n, i) => (
        <g key={n.label} className="flow-node" style={{ animationDelay: `${i*0.4}s` }}>
          <rect x={n.x} y={n.y-14} width="60" height="28" rx="2" fill="rgba(32,28,27,0.9)" stroke="#762B3B" strokeWidth="1"/>
          <circle cx={n.x+50} cy={n.y-7} r="2.5" fill="#762B3B" className="status-dot" style={{ animationDelay: `${i*0.3}s` }}/>
          <text x={n.x+30} y={n.y+1} textAnchor="middle" dominantBaseline="middle" fontFamily="IBM Plex Mono" fontSize="5.5" fill="rgba(242,237,228,0.6)" letterSpacing="0.07em">{n.label}</text>
        </g>
      ))}
      <g>
        <circle r="3" fill="#762B3B" opacity="0.9">
          <animateMotion dur="4s" repeatCount="indefinite" begin="0s">
            <mpath href="#gen-path"/>
          </animateMotion>
        </circle>
      </g>
      <g>
        <circle r="2" fill="#C58D91" opacity="0.7">
          <animateMotion dur="4s" repeatCount="indefinite" begin="1.3s">
            <mpath href="#gen-path"/>
          </animateMotion>
        </circle>
      </g>
      <path id="gen-path" d="M 20 70 L 90 70 L 160 70 L 230 70" fill="none"/>
      <text x="14" y="155" fontFamily="IBM Plex Mono" fontSize="5.5" fill="rgba(167,139,120,0.35)" letterSpacing="0.08em">AMAZON BEDROCK · AWS CDK · AMPLIFY · LAMBDA</text>
    </svg>
  );
}

export function UlloVisual() {
  const nodes = [
    { x: 15,  y: 75, label: 'SOURCE', ok: true },
    { x: 80,  y: 75, label: 'INGEST', ok: true },
    { x: 148, y: 75, label: 'VALIDATE', ok: false },
    { x: 213, y: 75, label: 'RECOVER', ok: true },
  ];
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="160" fill="#201C1B"/>
      <text x="14" y="12" fontFamily="IBM Plex Mono" fontSize="6" fill="#A78B78" letterSpacing="0.1em">DATAOPS PIPELINE / INCIDENT TRIAGE</text>
      {[0,1,2].map(i => (
        <line key={i} className="pipe-line" x1={nodes[i].x+52} y1="75" x2={nodes[i+1].x} y2="75"
          stroke="#762B3B" strokeWidth="1.5" strokeDasharray="200" strokeDashoffset="200"/>
      ))}
      {nodes.map((n, nodeIdx) => (
        <g key={n.label}>
          {!n.ok && <rect className="alert-node" x={n.x-2} y={n.y-32} width="60" height="16" rx="2" fill="rgba(118,43,59,0.2)" stroke="#762B3B" strokeWidth="0.8"/>}
          {!n.ok && <text x={n.x+28} y={n.y-22} textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="5" fill="#C58D91" letterSpacing="0.08em">⚠ DRIFT</text>}
          <rect x={n.x} y={n.y-14} width="52" height="28" rx="2"
            fill={n.ok ? 'rgba(32,28,27,0.9)' : 'rgba(118,43,59,0.15)'}
            stroke={n.ok ? 'rgba(242,237,228,0.1)' : '#762B3B'} strokeWidth="1"/>
          <circle cx={n.x+42} cy={n.y-7} r="2.5" fill={n.ok ? '#4a7c59' : '#762B3B'} className={n.ok ? '' : 'status-dot'}/>
          <text x={n.x+26} y={n.y+1} textAnchor="middle" dominantBaseline="middle" fontFamily="IBM Plex Mono" fontSize="5" fill="rgba(242,237,228,0.6)" letterSpacing="0.06em">{n.label}</text>
          <text x={n.x} y={n.y+22} fontFamily="IBM Plex Mono" fontSize="5" fill="rgba(167,139,120,0.3)">0{nodeIdx+1}</text>
        </g>
      ))}
      <rect x="95" y="108" width="90" height="16" rx="2" fill="rgba(118,43,59,0.1)" stroke="rgba(118,43,59,0.3)" strokeWidth="0.6"/>
      <text x="140" y="118" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="5.5" fill="#C58D91" letterSpacing="0.08em">▸ AGENT INVESTIGATING</text>
      <text x="14" y="155" fontFamily="IBM Plex Mono" fontSize="5.5" fill="rgba(167,139,120,0.35)" letterSpacing="0.08em">STRANDS AGENTS · DAGSTER · AMAZON BEDROCK</text>
    </svg>
  );
}

export function SecurityVisual() {
  const events = [
    { x: 30,  y: 40, type: 'NORMAL', ok: true },
    { x: 90,  y: 60, type: 'NORMAL', ok: true },
    { x: 155, y: 35, type: 'ANOMALY', ok: false },
    { x: 215, y: 55, type: 'NORMAL', ok: true },
  ];
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="160" fill="#201C1B"/>
      <text x="14" y="12" fontFamily="IBM Plex Mono" fontSize="6" fill="#A78B78" letterSpacing="0.1em">SECURITY ANALYTICS / ANOMALY DETECTION</text>
      {/* Timeline baseline */}
      <line x1="20" y1="100" x2="260" y2="100" stroke="rgba(242,237,228,0.06)" strokeWidth="1"/>
      {/* Event bars */}
      {events.map((e, i) => (
        <g key={i}>
          <line x1={e.x+10} y1="100" x2={e.x+10} y2={e.y} stroke={e.ok ? 'rgba(118,43,59,0.4)' : '#762B3B'} strokeWidth={e.ok ? 1 : 1.5}
            className={e.ok ? '' : 'pipe-line'} strokeDasharray={e.ok ? 'none' : '200'} strokeDashoffset={e.ok ? 'none' : '200'}/>
          <rect x={e.x} y={e.y-8} width="40" height="16" rx="2"
            fill={e.ok ? 'rgba(32,28,27,0.8)' : 'rgba(118,43,59,0.2)'}
            stroke={e.ok ? 'rgba(242,237,228,0.1)' : '#762B3B'} strokeWidth="1"
            className={e.ok ? '' : 'alert-node'}/>
          <text x={e.x+20} y={e.y+1} textAnchor="middle" dominantBaseline="middle" fontFamily="IBM Plex Mono" fontSize="5" fill={e.ok ? 'rgba(242,237,228,0.5)' : '#C58D91'} letterSpacing="0.06em">{e.type}</text>
        </g>
      ))}
      {/* dbt medallion labels */}
      {['BRONZE', 'SILVER', 'GOLD'].map((layer, i) => (
        <g key={layer}>
          <rect x={15 + i*85} y="118" width="65" height="14" rx="1" fill="rgba(32,28,27,0.6)" stroke="rgba(242,237,228,0.07)" strokeWidth="0.6"/>
          <text x={47 + i*85} y="127" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="5.5" fill="rgba(167,139,120,0.5)" letterSpacing="0.08em">{layer}</text>
        </g>
      ))}
      <text x="14" y="155" fontFamily="IBM Plex Mono" fontSize="5.5" fill="rgba(167,139,120,0.35)" letterSpacing="0.08em">dbt · DAGSTER · DUCKDB · ISOLATION FOREST</text>
    </svg>
  );
}

export function AgentCoreVisual() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="160" fill="#201C1B"/>
      <text x="14" y="12" fontFamily="IBM Plex Mono" fontSize="6" fill="#A78B78" letterSpacing="0.1em">AGENTCORE HARNESS / CHATBOT FLOW</text>
      {/* Central AgentCore node */}
      <rect x="95" y="55" width="90" height="36" rx="3" fill="rgba(118,43,59,0.15)" stroke="#762B3B" strokeWidth="1.2"/>
      <text x="140" y="70" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="5.5" fill="#C58D91" letterSpacing="0.08em">BEDROCK</text>
      <text x="140" y="82" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="5.5" fill="#C58D91" letterSpacing="0.08em">AGENTCORE</text>
      <circle cx="140" cy="73" r="26" fill="none" stroke="rgba(197,141,145,0.2)" strokeWidth="0.8" strokeDasharray="3 3" className="flow-node"/>
      {/* Satellite nodes */}
      {[
        { x: 18,  y: 73, label: 'FAQ\nFLOW' },
        { x: 240, y: 73, label: 'BUG\nTICKET' },
        { x: 100, y: 130, label: 'DYNAMO' },
        { x: 165, y: 130, label: 'LAMBDA' },
      ].map((n, i) => (
        <g key={n.label}>
          <line x1={i < 2 ? (i===0 ? n.x+40 : n.x) : n.x+20} y1={i < 2 ? n.y : n.y}
            x2={i===0 ? 95 : i===1 ? 185 : 140} y2={i < 2 ? 73 : 91}
            stroke="rgba(118,43,59,0.3)" strokeWidth="0.8" className="pipe-line" strokeDasharray="200" strokeDashoffset="200"
            style={{ animationDelay: `${i*0.3}s` }}/>
          <rect x={n.x} y={n.y-12} width="40" height="24" rx="2" fill="rgba(32,28,27,0.8)" stroke="rgba(242,237,228,0.1)" strokeWidth="0.8"/>
          {n.label.split('\n').map((l, li) => (
            <text key={li} x={n.x+20} y={n.y-2+li*10} textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="5" fill="rgba(242,237,228,0.5)" letterSpacing="0.06em">{l}</text>
          ))}
        </g>
      ))}
      <text x="14" y="155" fontFamily="IBM Plex Mono" fontSize="5.5" fill="rgba(167,139,120,0.35)" letterSpacing="0.08em">AMAZON BEDROCK · AGENTCORE · LAMBDA · DYNAMODB</text>
    </svg>
  );
}

export function EcoProofVisual() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="160" fill="#201C1B"/>
      <text x="14" y="12" fontFamily="IBM Plex Mono" fontSize="6" fill="#A78B78" letterSpacing="0.1em">CLIMATE DATA / AUDIT PROOF</text>
      {/* PM2.5 line chart */}
      <polyline points="20,110 50,95 80,100 110,70 140,85 170,60 200,75 230,80 260,65"
        stroke="#762B3B" strokeWidth="1.5" fill="none" className="pipe-line" strokeDasharray="500" strokeDashoffset="500"/>
      <polyline points="20,115 50,108 80,112 110,98 140,105 170,90 200,95 230,98 260,88"
        stroke="rgba(176,138,87,0.5)" strokeWidth="1" fill="none" strokeDasharray="4 4"/>
      {/* Merkle chain */}
      {[30, 90, 150, 210].map((x, i) => (
        <g key={i}>
          <rect x={x} y="128" width="40" height="16" rx="1" fill="rgba(118,43,59,0.12)" stroke="rgba(118,43,59,0.4)" strokeWidth="0.6"/>
          <text x={x+20} y="138" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="4.5" fill="rgba(197,141,145,0.6)">BLOCK {String(i+1).padStart(2,'0')}</text>
          {i < 3 && <line x1={x+40} y1="136" x2={x+50} y2="136" stroke="rgba(118,43,59,0.3)" strokeWidth="0.8"/>}
        </g>
      ))}
      <text x="14" y="155" fontFamily="IBM Plex Mono" fontSize="5.5" fill="rgba(167,139,120,0.35)" letterSpacing="0.08em">FASTAPI · DUCKDB · SOLIDITY · WEB3.PY · REACT</text>
    </svg>
  );
}

export function NeuroVisual() {
  const nodes = [
    { cx: 50,  cy: 45, r: 14 }, { cx: 140, cy: 30,  r: 10 },
    { cx: 220, cy: 50, r: 12 }, { cx: 80,  cy: 100, r: 10 },
    { cx: 160, cy: 90, r: 16 }, { cx: 240, cy: 110, r: 10 },
    { cx: 110, cy: 135, r: 10 }, { cx: 195, cy: 140, r: 8 },
  ];
  const edges = [[0,1],[0,3],[1,2],[1,4],[2,5],[3,4],[4,5],[4,6],[4,7],[5,7],[6,7]];
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="160" fill="#201C1B"/>
      <text x="14" y="12" fontFamily="IBM Plex Mono" fontSize="6" fill="#A78B78" letterSpacing="0.1em">COGNITIVE TWIN / LEARNING NETWORK</text>
      {edges.map(([a,b], i) => (
        <line key={i} className="neural-line" x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="#762B3B" strokeWidth="0.8" opacity="0.3"
          style={{ animationDuration: `${3+(i%3)}s`, animationDelay: `${(i*0.3)%2}s` }}/>
      ))}
      {nodes.map((n, i) => (
        <g key={i} className="synapse-node" style={{ animationDuration: `${2.2+(i*0.4)}s`, animationDelay: `${(i*0.45)%2}s` }}>
          <circle cx={n.cx} cy={n.cy} r={n.r} fill="rgba(32,28,27,0.9)" stroke="#762B3B" strokeWidth="1"/>
          {i === 4 && <circle cx={n.cx} cy={n.cy} r={n.r+6} stroke="rgba(197,141,145,0.2)" strokeWidth="0.8" strokeDasharray="3 3"/>}
          <circle cx={n.cx} cy={n.cy} r={n.r*0.35} fill="#762B3B" opacity="0.7"/>
        </g>
      ))}
      <text x={nodes[4].cx} y={nodes[4].cy+1} textAnchor="middle" dominantBaseline="middle" fontFamily="IBM Plex Mono" fontSize="5" fill="rgba(242,237,228,0.5)">CORE</text>
      <text x="14" y="155" fontFamily="IBM Plex Mono" fontSize="5.5" fill="rgba(167,139,120,0.35)" letterSpacing="0.08em">AMAZON BEDROCK · AWS AMPLIFY GEN 2 · DYNAMODB</text>
    </svg>
  );
}
