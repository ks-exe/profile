import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile';
import { impactStats, impactTimeline, impactStatement } from '../data/impact';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';

function StatCard({ value, label, detail, delay }: { value: string; label: string; detail: string; delay: number }) {
  const { ref, inView } = useInView(0.3);
  const displayed = useCountUp(value, inView);
  return (
    <div ref={ref}
      className={`stat-item p-7 transition-colors hover:bg-parchment/60 ${inView ? 'is-visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}>
      <p className="font-display font-normal text-oxblood"
        style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: '1' }}>
        {displayed}
      </p>
      <p className="mt-2 text-sm font-medium text-ink/70">{label}</p>
      <p className="mt-1 font-mono text-[10px] text-clay/50 tracking-[0.08em]">{detail}</p>
    </div>
  );
}

function TimelineItem({ label, detail, idx }: { label: string; detail: string; idx: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <li ref={ref}
      className={`timeline-item flex items-start gap-5 py-5 ${vis ? 'is-visible' : ''}`}
      style={{ animationDelay: `${idx * 100}ms` }}>
      <span className="font-mono text-[10px] text-oxblood flex-shrink-0 mt-0.5 tracking-widest">
        {String(idx+1).padStart(2,'0')}
      </span>
      <div>
        <p className="text-sm font-semibold text-ink mb-1">{label}</p>
        <p className="text-xs text-clay/70">{detail}</p>
      </div>
    </li>
  );
}

export function Impact() {
  return (
    <section id="impact" className="sec-mid relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Header */}
        <div className="reveal mb-16 flex items-end justify-between border-b border-stone/50 pb-6">
          <div>
            <p className="eyebrow mb-4">06 / Community</p>
            <h2 className="font-display font-normal text-ink"
                style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
              Engineering beyond<br />
              <em className="text-oxblood">the screen.</em>
            </h2>
          </div>
          <p className="label-meta hidden sm:block text-clay/50 max-w-[140px] text-right">
            AWS Student Builder Group Lead
          </p>
        </div>

        {/* Stats grid — count-up on enter */}
        <div className="mb-16 grid grid-cols-2 gap-0 sm:grid-cols-3 border border-stone/40">
          {impactStats.map((stat, idx) => (
            <StatCard key={stat.label}
              value={stat.value}
              label={stat.label}
              detail={stat.detail}
              delay={idx * 60}
            />
          ))}
        </div>

        {/* Timeline + quote */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="label-meta mb-6 text-clay/50">Community journey</p>
            <ol className="space-y-0 divide-y divide-stone/40">
              {impactTimeline.map((item, idx) => (
                <TimelineItem key={idx} label={item.label} detail={item.detail} idx={idx} />
              ))}
            </ol>
          </div>

          <div className="reveal flex flex-col justify-between">
            <blockquote className="border-l-2 border-oxblood pl-6">
              <p className="font-display text-xl font-normal italic text-ink/80 leading-relaxed">
                "{impactStatement}"
              </p>
              <footer className="mt-5">
                <p className="font-mono text-[10px] text-clay/50 tracking-[0.12em] uppercase">— {profile.name}</p>
              </footer>
            </blockquote>
            <div className="mt-10 border-t border-stone/50 pt-6">
              <p className="label-meta text-clay/40 mb-2">Role</p>
              <p className="font-mono text-xs text-ink/60">AWS Student Builder Group Lead</p>
              <p className="font-mono text-xs text-clay/40 mt-1">{profile.university}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
