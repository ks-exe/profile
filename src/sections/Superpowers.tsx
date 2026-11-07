import { useState, useRef, useEffect } from 'react';
import { Terminal, Users, Lightbulb, ChevronRight } from 'lucide-react';
import { superpowers } from '../data/superpowers';
import type { Superpower } from '../data/superpowers';

const ICONS = { terminal: Terminal, users: Users, lightbulb: Lightbulb } as const;
const NUMS  = ['01', '02', '03'] as const;

/* Subtle animated background glyph per superpower */
const BG_GLYPHS: Record<Superpower['id'], string> = {
  builder: '{ }',
  leader:  '◎',
  enabler: '✦',
};

export function Superpowers() {
  const [active, setActive]     = useState<Superpower['id']>('builder');
  const [prev,   setPrev]       = useState<Superpower['id'] | null>(null);
  const panelRef                = useRef<HTMLDivElement>(null);
  const current    = superpowers.find(s => s.id === active) ?? superpowers[0];
  const CurrentIcon = ICONS[current.icon];
  const currentIdx  = superpowers.findIndex(s => s.id === active);

  const switchTo = (id: Superpower['id']) => {
    if (id === active) return;
    setPrev(active);
    setActive(id);
  };

  /* Scroll panel into view on mobile after switching */
  useEffect(() => {
    if (prev !== null && panelRef.current) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [active, prev]);

  return (
    <section id="superpowers" className="sec-mid relative overflow-hidden py-24 sm:py-32">
      {/* Subtle background glyph */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-16 overflow-hidden select-none" aria-hidden>
        <span key={active} className="font-display text-[18rem] font-normal leading-none text-stone/20 sp-bg-glyph"
          style={{ transition: 'opacity 0.5s ease' }}>
          {BG_GLYPHS[active]}
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        {/* Header */}
        <div className="reveal mb-16 flex items-end justify-between border-b border-stone/50 pb-6">
          <div>
            <p className="eyebrow mb-4">03 / Superpowers</p>
            <h2 className="font-display font-normal text-ink"
                style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
              Three sides.<br />
              <em className="text-oxblood">One engineer.</em>
            </h2>
          </div>
          <p className="label-meta hidden sm:block text-clay/50 max-w-[180px] text-right leading-relaxed">
            Click a card to unlock a different side of my journey
          </p>
        </div>

        {/* Selector cards */}
        <div className="reveal grid grid-cols-1 gap-0 sm:grid-cols-3 border border-stone/50"
          role="tablist" aria-label="Superpowers">
          {superpowers.map((sp, idx) => {
            const Icon     = ICONS[sp.icon];
            const isActive = sp.id === active;
            return (
              <button key={sp.id} type="button" role="tab"
                aria-selected={isActive}
                aria-controls={`sp-panel-${sp.id}`}
                id={`sp-tab-${sp.id}`}
                onClick={() => switchTo(sp.id)}
                className={`relative flex flex-col items-start p-7 text-left transition-all duration-300 group cursor-pointer
                  ${isActive ? 'bg-oxblood' : 'bg-paper hover:bg-parchment'}
                  ${idx < 2 ? 'sm:border-r border-stone/50' : ''}
                  border-b sm:border-b-0 border-stone/50 last:border-b-0`}>

                {/* Large number */}
                <span className={`font-display leading-none mb-5 transition-all duration-300 select-none
                  ${isActive ? 'text-parchment/20 sp-num-active text-7xl' : 'text-stone text-6xl group-hover:text-clay group-hover:text-7xl'}`}>
                  {NUMS[idx]}
                </span>

                {/* Icon box */}
                <div className={`flex h-9 w-9 items-center justify-center border mb-4 transition-all duration-300
                  ${isActive ? 'border-parchment/30 bg-parchment/10 text-parchment' : 'border-stone text-clay group-hover:border-oxblood/40 group-hover:text-oxblood'}`}>
                  <Icon className="h-4 w-4" />
                </div>

                <h3 className={`font-display text-xl font-normal mb-2 transition-colors duration-300 ${isActive ? 'text-parchment' : 'text-ink'}`}>
                  {sp.title}
                </h3>
                <p className={`font-mono text-[10px] tracking-[0.12em] uppercase mb-3 transition-colors duration-300 ${isActive ? 'text-rose' : 'text-clay'}`}>
                  {sp.description}
                </p>

                {/* "Click to explore" hint on inactive */}
                {!isActive && (
                  <span className="flex items-center gap-1 font-mono text-[9px] tracking-[0.1em] uppercase text-clay/40 group-hover:text-oxblood transition-colors duration-200">
                    Explore <ChevronRight className="h-3 w-3" />
                  </span>
                )}

                {/* Active bottom bar */}
                <span className={`absolute bottom-0 inset-x-0 h-[3px] transition-all duration-300
                  ${isActive ? 'bg-rose scale-x-100' : 'bg-transparent scale-x-0'}`}
                  style={{ transformOrigin: 'left' }}
                  aria-hidden />
              </button>
            );
          })}
        </div>

        {/* Content panel — key forces re-mount → triggers sp-panel animation */}
        <div key={current.id} ref={panelRef}
          id={`sp-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`sp-tab-${current.id}`}
          className="sp-panel mt-0 border border-t-0 border-stone/50 bg-paper">

          <div className="grid lg:grid-cols-[280px_1fr]">
            {/* Left rail */}
            <div className="border-b border-stone/40 bg-parchment p-7 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-8 w-8 items-center justify-center border border-oxblood/40 bg-oxblood-8 text-oxblood transition-transform duration-300 hover:scale-110">
                  <CurrentIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-oxblood">{NUMS[currentIdx]}</p>
                  <p className="font-display text-base font-normal text-ink">{current.title}</p>
                </div>
              </div>

              {current.featureProjects && (
                <div className="mb-5">
                  <p className="label-meta mb-3 text-clay/50">Featured projects</p>
                  {current.featureProjects.map(p => (
                    <div key={p} className="border border-stone/60 px-3 py-1.5 mb-2 font-mono text-[10px] text-ink/55 tracking-[0.1em] transition-colors hover:border-oxblood/40 hover:text-oxblood cursor-default">
                      {p}
                    </div>
                  ))}
                </div>
              )}

              {current.metrics && (
                <div className="mt-5 pt-5 border-t border-stone/40">
                  <p className="label-meta mb-4 text-clay/50">Key metrics</p>
                  {current.metrics.map((m, mi) => (
                    <div key={m.label} className="mb-4"
                      style={{ animation: `fade-up 0.4s ${mi * 80}ms both cubic-bezier(0.22,1,0.36,1)` }}>
                      <p className="font-display text-2xl font-normal text-oxblood">{m.value}</p>
                      <p className="font-mono text-[10px] text-clay/60 tracking-[0.1em] uppercase">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right content */}
            <div className="p-7 sm:p-10">
              <ul className="space-y-0 divide-y divide-stone/30">
                {current.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-4 py-4"
                    style={{ animation: `fade-up 0.4s ${i * 60 + 100}ms both cubic-bezier(0.22,1,0.36,1)` }}>
                    <span className="font-mono text-[9px] text-oxblood/50 mt-1 flex-shrink-0 tracking-wider">—</span>
                    <p className="text-sm text-ink/75 leading-relaxed">{pt}</p>
                  </li>
                ))}
              </ul>

              {/* Switch row */}
              <div className="mt-8 pt-6 border-t border-stone/40 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[9px] text-clay/40 uppercase tracking-[0.15em] mr-1">Switch</span>
                {superpowers.map(s => (
                  <button key={s.id} type="button" onClick={() => switchTo(s.id)}
                    className={`border px-3 py-1 font-mono text-[9px] tracking-[0.12em] uppercase transition-all duration-200 ${
                      s.id === active
                        ? 'border-oxblood bg-oxblood text-paper'
                        : 'border-stone text-clay/60 hover:border-oxblood/60 hover:text-oxblood'
                    }`}>
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
