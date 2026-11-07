import { ArrowUpRight, Youtube, Cloud, BookOpen, Code2, Github } from 'lucide-react';
import { writingChannels } from '../data/links';

/** Map channel labels to relevant icons */
const CHANNEL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'YouTube':            Youtube,
  'AWS Builder Center': Cloud,
  'Medium':             BookOpen,
  'DEV Community':      Code2,
  'GitHub':             Github,
};

export function Writing() {
  return (
    <section id="writing" className="sec-light relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Header */}
        <div className="reveal mb-16 flex items-end justify-between border-b border-stone/50 pb-6">
          <div>
            <p className="eyebrow mb-4">08 / Writing &amp; Channels</p>
            <h2 className="font-display font-normal text-ink"
                style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
              Notes, ideas<br />
              <em className="text-oxblood">&amp; knowledge.</em>
            </h2>
            <p className="mt-4 text-sm text-ink/55 max-w-lg">
              Where I write, build in public, and share what I learn.
            </p>
          </div>
        </div>

        {/* 5 channels — 5-col on lg, 2-col on sm, 1-col on mobile */}
        <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-stone/40">
          {writingChannels.map((ch, idx) => {
            const Icon = CHANNEL_ICONS[ch.label] ?? ArrowUpRight;
            const isYT = ch.label === 'YouTube';
            return (
              <a key={ch.label} href={ch.href} target="_blank" rel="noopener noreferrer"
                aria-label={`Visit ${ch.label}`}
                className={`reveal group flex flex-col justify-between p-7 transition-colors duration-200
                  hover:bg-parchment
                  ${idx < writingChannels.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-stone/40' : ''}
                  ${idx < 2 ? 'sm:border-b sm:border-r-0' : ''}
                  ${idx % 2 === 0 && idx < writingChannels.length - 1 ? 'sm:border-r border-stone/40' : ''}`}
                style={{ animationDelay: `${idx * 60}ms` }}>

                {/* Top row: icon + arrow */}
                <div className="flex items-start justify-between">
                  <span className={`flex h-9 w-9 items-center justify-center border transition-colors duration-200
                    ${isYT
                      ? 'border-rose/30 bg-rose/5 text-rose/70 group-hover:border-rose/60 group-hover:text-rose'
                      : 'border-stone text-clay/60 group-hover:border-oxblood/50 group-hover:text-oxblood'}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-clay/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-oxblood" />
                </div>

                {/* Label + hostname */}
                <div className="mt-8">
                  <p className={`font-display text-base font-normal transition-colors duration-200
                    ${isYT ? 'text-ink group-hover:text-rose' : 'text-ink group-hover:text-oxblood'}`}>
                    {ch.label}
                  </p>
                  <p className="mt-1 font-mono text-[9px] text-clay/45 tracking-[0.08em] truncate">
                    {(() => { try { return new URL(ch.href).hostname.replace('www.',''); } catch { return ''; } })()}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
