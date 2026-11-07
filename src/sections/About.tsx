import { profile } from '../data/profile';

export function About() {
  return (
    <section id="about" className="sec-dark bg-grid-dark relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        {/* Header row */}
        <div className="reveal mb-16 flex items-end justify-between border-b border-parchment/10 pb-6">
          <div>
            <p className="eyebrow mb-4">02 / About</p>
            <h2 className="font-display font-normal text-parchment" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
              Beyond the<br />
              <em className="italic text-rose not-italic">interface.</em>
            </h2>
          </div>
          <span className="label-meta hidden sm:block text-clay/40">Personal story</span>
        </div>

        {/* Two-column */}
        <div className="grid gap-12 lg:grid-cols-[400px_1fr] lg:gap-20">
          {/* Left: photo + principles */}
          <div>
            {/* Photo */}
            <div className="reveal relative inline-block">
              <div className="relative overflow-hidden" style={{ width: '100%', maxWidth: 280, aspectRatio: '3/4' }}>
                <img src="/profile-pic.png" alt="Khadija Sajid — AI &amp; Data Engineer"
                  className="h-full w-full object-cover object-top"
                  loading="lazy" decoding="async" />
                {/* Subtle bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/50 to-transparent pointer-events-none" />
              </div>
              {/* Offset decorative border */}
              <span className="absolute -bottom-3 -right-3 border border-oxblood/40 pointer-events-none"
                style={{ width: '100%', maxWidth: 280, height: '100%', maxHeight: 373 }}
                aria-hidden />
              {/* Status badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-ink border border-parchment/15 px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-rose opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose" />
                </span>
                <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-parchment/60">Available</span>
              </div>
            </div>

            {/* Principles */}
            <div className="reveal mt-12">
              <p className="label-meta mb-5 text-clay/40">Operating principles</p>
              <ul className="divide-y divide-parchment/8">
                {profile.principles.map((p, i) => (
                  <li key={p.title} className="flex items-start gap-4 py-4">
                    <span className="font-mono text-[10px] text-oxblood mt-0.5 flex-shrink-0">0{i+1}</span>
                    <div>
                      <h3 className="font-mono text-[10px] tracking-[0.15em] uppercase text-parchment mb-1">
                        {p.title}
                      </h3>
                      <p className="text-sm text-clay/75 leading-relaxed">{p.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: bio */}
          <div className="reveal space-y-6">
            {profile.about.map((para, i) => (
              <p key={i} className={`leading-relaxed ${i === 0 ? 'text-parchment text-lg font-medium' : 'text-parchment/65 text-base'}`}>
                {para}
              </p>
            ))}
            <div className="divider-ink mt-8 pt-8">
              <p className="label-meta text-clay/40 mb-2">University</p>
              <p className="font-mono text-[11px] text-parchment/50">{profile.university}</p>
              <p className="font-mono text-[11px] text-clay/40 mt-1">{profile.year}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
