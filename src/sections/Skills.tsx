import { skillGroups } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="sec-light bg-grid-light relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="reveal mb-16 flex items-end justify-between border-b border-stone/50 pb-6">
          <div>
            <p className="eyebrow mb-4">04 / Capabilities</p>
            <h2 className="font-display font-normal text-ink"
                style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
              The tools behind<br />
              <em className="text-oxblood">the thinking.</em>
            </h2>
          </div>
          <p className="label-meta hidden sm:block text-clay/50 text-right">No invented percentages</p>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 border border-stone/40">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <article key={group.id}
                className={`reveal group p-8 transition-colors duration-300 hover:bg-parchment/60
                  ${idx % 2 === 0 ? 'sm:border-r border-stone/40' : ''}
                  ${idx < 2 ? 'border-b border-stone/40' : ''}`}
                style={{ animationDelay: `${idx * 70}ms` }}>
                <header className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center border border-stone text-clay transition-colors group-hover:border-oxblood group-hover:text-oxblood duration-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg font-normal text-ink">{group.title}</h3>
                  </div>
                  <span className="font-mono text-[10px] text-clay/40 tracking-[0.15em]">
                    {String(idx+1).padStart(2,'0')}
                  </span>
                </header>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <li key={skill} className="skill-tag">
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
