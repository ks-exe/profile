import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Animated data-flow illustration ─────────────────────────── */
function DataFlow() {
  return (
    <div className="relative w-full" aria-hidden>
      <svg viewBox="0 0 440 420" className="w-full h-auto max-w-[420px] mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background grid */}
        {[0,1,2,3,4,5,6].map(i => (
          <line key={`h${i}`} x1="20" y1={30+i*56} x2="420" y2={30+i*56} stroke="#D8CEC1" strokeWidth="0.4" />
        ))}
        {[0,1,2,3,4,5,6,7].map(i => (
          <line key={`v${i}`} x1={20+i*56} y1="20" x2={20+i*56} y2="395" stroke="#D8CEC1" strokeWidth="0.4" />
        ))}

        {/* Main flow paths */}
        <path className="flow-line" d="M 76 86 Q 148 86 148 170" stroke="#762B3B" strokeWidth="2" strokeLinecap="round"/>
        <path className="flow-line" d="M 148 170 Q 148 254 228 254" stroke="#762B3B" strokeWidth="2" strokeLinecap="round"/>
        <path className="flow-line" d="M 228 254 Q 308 254 308 170" stroke="#762B3B" strokeWidth="2" strokeLinecap="round"/>
        <path className="flow-line" d="M 76 86 Q 196 86 308 170" stroke="#A78B78" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 5"/>
        <path className="flow-line" d="M 228 254 Q 368 254 368 170" stroke="#B08A57" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 5"/>

        {/* Pulse rings on key nodes */}
        <circle className="node-pulse" cx="148" cy="170" r="22" stroke="#762B3B" strokeWidth="0.8" fill="none" opacity="0.4"/>
        <circle className="node-pulse" cx="228" cy="254" r="22" stroke="#C58D91" strokeWidth="0.8" fill="none" opacity="0.3" style={{ animationDelay: '0.8s' }}/>
        <circle className="node-pulse" cx="308" cy="170" r="22" stroke="#B08A57" strokeWidth="0.8" fill="none" opacity="0.3" style={{ animationDelay: '1.6s' }}/>

        {/* Data particle — tiny circle travelling the main path */}
        <g>
          <circle r="3" fill="#762B3B" opacity="0.9">
            <animateMotion dur="4s" repeatCount="indefinite" begin="0s">
              <mpath href="#main-path"/>
            </animateMotion>
          </circle>
        </g>
        <g>
          <circle r="2.5" fill="#C58D91" opacity="0.7">
            <animateMotion dur="4s" repeatCount="indefinite" begin="1.3s">
              <mpath href="#main-path"/>
            </animateMotion>
          </circle>
        </g>
        <g>
          <circle r="2" fill="#B08A57" opacity="0.6">
            <animateMotion dur="4s" repeatCount="indefinite" begin="2.6s">
              <mpath href="#main-path"/>
            </animateMotion>
          </circle>
        </g>
        {/* Hidden path for animateMotion */}
        <path id="main-path" d="M 76 86 Q 148 86 148 170 Q 148 254 228 254 Q 308 254 308 170" fill="none"/>

        {/* Nodes */}
        {[
          { cx: 76,  cy: 86,  label: 'INGEST',  status: '●' },
          { cx: 148, cy: 170, label: 'PROCESS', status: '●' },
          { cx: 228, cy: 254, label: 'AI/LLM',  status: '●' },
          { cx: 308, cy: 170, label: 'AWS',     status: '●' },
          { cx: 368, cy: 170, label: 'OUTPUT',  status: '●' },
          { cx: 228, cy: 86,  label: 'SCHEMA',  status: '●' },
        ].map((n, i) => (
          <g key={n.label} className="flow-node" style={{ animationDelay: `${i*0.4}s` }}>
            <rect x={n.cx-28} y={n.cy-15} width="56" height="30" rx="2"
              fill="#FBF9F5" stroke="#762B3B" strokeWidth="1.2" />
            {/* Status indicator */}
            <circle cx={n.cx+20} cy={n.cy-8} r="2.5" fill="#762B3B" className="status-dot"
              style={{ animationDelay: `${i*0.3}s` }} />
            <text x={n.cx} y={n.cy+1} textAnchor="middle" dominantBaseline="middle"
              fontFamily="IBM Plex Mono" fontSize="6.5" fontWeight="500" fill="#762B3B" letterSpacing="0.08em">
              {n.label}
            </text>
          </g>
        ))}

        {/* Corner labels */}
        <text x="22" y="412" fontFamily="IBM Plex Mono" fontSize="7" fill="#A78B78" letterSpacing="0.1em">01 / INTRODUCTION</text>
        <text x="295" y="412" fontFamily="IBM Plex Mono" fontSize="7" fill="#A78B78" letterSpacing="0.1em">2026 / ENGINEERING</text>
      </svg>
    </div>
  );
}

/* ── Hero ──────────────────────────────────────────────────────── */
export function Hero() {
  const heroRef   = useRef<HTMLElement>(null);
  const geoRef    = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  /* Mouse parallax */
  useEffect(() => {
    const hero = heroRef.current;
    const geo  = geoRef.current;
    if (!hero || !geo) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const mx = (e.clientX - left) / width  - 0.5;
      const my = (e.clientY - top)  / height - 0.5;
      geo.style.transform = `translate(${mx * 18}px, ${my * 12}px)`;
    };
    hero.addEventListener('mousemove', onMove, { passive: true });
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="home" ref={heroRef}
      className="sec-light bg-grid-light relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">

      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-oxblood" aria-hidden />

      {/* ── Atmospheric layer ──────────────────────────────── */}
      {mounted && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {/* Shooting stars */}
          {[1,2,3,4,5,6].map(n => <div key={n} className="shooting-star" />)}
          {/* Particles */}
          {[1,2,3,4,5,6,7,8].map(n => <div key={n} className="particle" />)}
          {/* Light streaks */}
          {[1,2,3].map(n => <div key={n} className="light-streak" />)}
          {/* Floating geometric rings (parallax target) */}
          <div ref={geoRef} className="absolute inset-0 transition-transform duration-100 ease-out">
            {/* Ring 1 — large, top-right */}
            <div className="geo-ring" style={{ width: 220, height: 220, top: '8%', right: '5%', animationDuration: '7s', animationDelay: '0s' }}>
              <div className="geo-ring-inner" style={{ animationDuration: '18s' }}>
                <div className="geo-ring-dot" />
              </div>
            </div>
            {/* Ring 2 — small, bottom-left */}
            <div className="geo-ring" style={{ width: 100, height: 100, bottom: '12%', left: '3%', animationDuration: '9s', animationDelay: '2s' }}>
              <div className="geo-ring-inner" style={{ animationDuration: '12s' }}>
                <div className="geo-ring-dot" />
              </div>
            </div>
            {/* Ring 3 — medium, mid-right */}
            <div className="geo-ring" style={{ width: 140, height: 140, top: '45%', right: '15%', animationDuration: '11s', animationDelay: '1s' }}>
              <div className="geo-ring-inner" style={{ animationDuration: '22s' }}>
                <div className="geo-ring-dot" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        {/* Breadcrumb row */}
        <div className="reveal mb-10 flex items-center justify-between border-b border-stone/50 pb-5">
          <span className="eyebrow">Khadija Sajid / Personal Engineering Portfolio</span>
          <span className="label-meta hidden sm:block">2026 · Pakistan</span>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left: copy */}
          <div>
            <p className="reveal eyebrow mb-6">AI &amp; Data Engineer</p>

            <h1 className="font-display font-normal text-ink"
                style={{ fontSize: 'clamp(3rem,8vw,6.5rem)', lineHeight: '1.02', letterSpacing: '-0.025em' }}>
              <span className="reveal block" style={{ animationDelay: '50ms' }}>I build</span>
              <span className="reveal block text-oxblood italic" style={{ animationDelay: '110ms' }}>systems.</span>
            </h1>
            <p className="reveal font-display font-normal text-ink/50 mt-1"
               style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.06', letterSpacing: '-0.02em', animationDelay: '160ms' }}>
              Not just software.
            </p>

            <p className="reveal mt-8 max-w-lg text-base leading-relaxed text-ink/65"
               style={{ animationDelay: '220ms' }}>
              I'm an AI &amp; Data Engineer working across intelligent applications, data
              infrastructure, and cloud systems. I build practical technology and create
              opportunities for others to build too.
            </p>

            {/* Meta row */}
            <div className="reveal mt-9 grid grid-cols-1 gap-5 border-t border-stone/40 pt-7 sm:grid-cols-3"
                 style={{ animationDelay: '270ms' }}>
              {[
                { k: 'Role',     v: 'AI & Data Engineer' },
                { k: 'Location', v: 'Pakistan' },
                { k: 'Status',   v: 'Open to opportunities', pulse: true },
              ].map(({ k, v, pulse }) => (
                <div key={k}>
                  <p className="label-meta mb-1.5">{k}</p>
                  <p className="flex items-center gap-2 text-sm font-medium text-ink">
                    {pulse && (
                      <span className="relative flex h-2 w-2 flex-shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-oxblood opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-oxblood" />
                      </span>
                    )}
                    {v}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal mt-9 flex flex-wrap gap-4" style={{ animationDelay: '320ms' }}>
              <button type="button" onClick={() => scrollTo('projects')}
                className="btn-primary group inline-flex items-center gap-2.5 border border-oxblood bg-oxblood px-6 py-3 font-mono text-[10px] tracking-[0.15em] uppercase text-paper transition-colors duration-200 hover:bg-oxblood-deep">
                Explore My Work
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button type="button" onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2.5 border border-stone px-6 py-3 font-mono text-[10px] tracking-[0.15em] uppercase text-ink/60 transition-all duration-200 hover:border-ink hover:text-ink hover:tracking-[0.2em]">
                Let's Connect
              </button>
            </div>
          </div>

          {/* Right: data-flow illustration */}
          <div className="reveal lg:pl-6" style={{ animationDelay: '180ms' }}>
            <DataFlow />
          </div>
        </div>
      </div>
    </section>
  );
}
