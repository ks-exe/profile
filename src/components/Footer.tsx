import { profile } from '../data/profile';
import { contactChannels } from '../data/links';

export function Footer() {
  return (
    <footer className="sec-dark border-t border-parchment/10">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-normal text-parchment">{profile.name}</p>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-clay mt-1">
              AI · Data · Cloud Engineering
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer links">
            {contactChannels.map(c => (
              <a key={c.label} href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.12em] uppercase text-clay/60 transition-colors hover:text-parchment">
                {c.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-parchment/8 pt-8 flex flex-col gap-1 sm:flex-row sm:justify-between">
          <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-clay/40">
            Designed &amp; engineered by {profile.name}
          </p>
          <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-clay/40">
            2026 / Pakistan / AWS Student Builder Challenge
          </p>
        </div>
      </div>
    </footer>
  );
}
