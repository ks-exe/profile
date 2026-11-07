import { achievements } from '../data/achievements';

export function Achievements() {
  return (
    <section id="achievements" className="sec-dark bg-grid-dark relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="reveal mb-16 flex items-end justify-between border-b border-parchment/10 pb-6">
          <div>
            <p className="eyebrow mb-4">07 / Recognition</p>
            <h2 className="font-display font-normal text-parchment"
                style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
              Milestones &amp;<br />
              <em className="text-rose">recognition.</em>
            </h2>
          </div>
          <p className="label-meta hidden sm:block text-clay/40">Verified credentials</p>
        </div>

        <div className="divide-y divide-parchment/8">
          {achievements.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <div key={ach.id}
                className="reveal ach-item flex items-start gap-5 py-6"
                style={{ animationDelay: `${idx * 45}ms` }}>
                <span className="font-mono text-[10px] text-oxblood/50 flex-shrink-0 mt-1 tracking-widest w-7">
                  {String(idx+1).padStart(2,'0')}
                </span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-parchment/10 text-rose/60 transition-colors hover:border-oxblood/40 duration-200 mt-0.5">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-parchment/85">{ach.title}</p>
                  <p className="mt-1 text-xs text-clay/50">{ach.detail}</p>
                </div>
                {ach.pending && (
                  <span className="flex-shrink-0 border border-parchment/10 px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] uppercase text-clay/30">
                    To verify
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
