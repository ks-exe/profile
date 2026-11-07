import { ArrowUpRight } from 'lucide-react';
import { writingChannels } from '../data/links';

export function Writing() {
  return (
    <section id="writing" className="sec-light relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Header */}
        <div className="reveal mb-16 flex items-end justify-between border-b border-stone/50 pb-6">
          <div>
            <p className="eyebrow mb-4">08 / Writing</p>
            <h2 className="font-display font-normal text-ink" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
              Notes, ideas<br />
              <em className="text-oxblood">&amp; knowledge.</em>
            </h2>
          </div>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border border-stone/40">
          {writingChannels.map((ch, idx) => (
            <a key={ch.label} href={ch.href} target="_blank" rel="noopener noreferrer"
              className={`reveal group flex flex-col justify-between p-7 transition-colors hover:bg-parchment
                ${idx < 3 ? 'border-r border-stone/40' : ''}
                ${idx >= 2 && idx < 4 ? '' : ''}`}
              style={{ animationDelay: `${idx * 60}ms` }}>
              <ArrowUpRight className="h-4 w-4 text-clay/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-oxblood" />
              <div className="mt-8">
                <p className="font-display text-lg font-normal text-ink group-hover:text-oxblood transition-colors">{ch.label}</p>
                <p className="mt-1 font-mono text-[10px] text-clay/50 tracking-[0.08em]">
                  {(() => { try { return new URL(ch.href).hostname; } catch { return 'link'; } })()}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
