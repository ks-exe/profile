import { useState } from 'react';
import { Mail, Linkedin, Github, Globe, Youtube, Copy, Check, ArrowUpRight } from 'lucide-react';
import { links, contactChannels } from '../data/links';
import { profile } from '../data/profile';

const ICONS: Record<string, typeof Mail> = {
  Email: Mail, LinkedIn: Linkedin, GitHub: Github, YouTube: Youtube, 'AWS Builder Center': Globe,
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const el = document.createElement('textarea');
      el.value = profile.email;
      document.body.appendChild(el);
      el.select();
      try { document.execCommand('copy'); } catch { /**/ }
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="sec-mid relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Header */}
        <div className="reveal mb-16 border-b border-stone/50 pb-6">
          <p className="eyebrow mb-4">09 / Contact</p>
          <h2 className="font-display font-normal text-ink" style={{ fontSize: 'clamp(2.2rem,5vw,4.5rem)', lineHeight: '1.05', letterSpacing: '-0.025em', maxWidth: '18ch' }}>
            Have something worth<br />
            <em className="text-oxblood">building?</em>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* Left: email + channels */}
          <div className="reveal">
            <p className="text-base text-ink/65 leading-relaxed max-w-md mb-10">
              I'm always interested in meaningful engineering challenges, collaboration, and opportunities to build useful technology.
            </p>

            {/* Email */}
            <div className="border border-stone/50 p-6 mb-6">
              <p className="label-meta mb-3">Primary contact</p>
              <p className="font-display text-xl font-normal text-ink mb-5">{profile.email}</p>
              <div className="flex flex-wrap gap-3">
                <a href={links.email}
                  className="group inline-flex items-center gap-2 border border-oxblood bg-oxblood px-5 py-2.5 font-mono text-[10px] tracking-[0.12em] uppercase text-paper transition-colors hover:bg-oxblood-deep">
                  <Mail className="h-3 w-3" />
                  Send Email
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <button type="button" onClick={copyEmail} aria-label="Copy email"
                  className="inline-flex items-center gap-2 border border-stone px-5 py-2.5 font-mono text-[10px] tracking-[0.12em] uppercase text-ink/60 transition-colors hover:border-ink hover:text-ink">
                  {copied ? <><Check className="h-3 w-3 text-oxblood" />Copied</> : <><Copy className="h-3 w-3" />Copy</>}
                </button>
              </div>
            </div>

            {/* Channels */}
            <div>
              <p className="label-meta mb-4 text-clay/50">Channels</p>
              <div className="grid grid-cols-2 gap-2">
                {contactChannels.map(c => {
                  const Icon = ICONS[c.label] ?? Mail;
                  return (
                    <a key={c.label} href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 border border-stone/50 px-4 py-3 transition-colors hover:border-oxblood/50 hover:bg-parchment/60">
                      <Icon className="h-3.5 w-3.5 text-clay/60 group-hover:text-oxblood transition-colors" />
                      <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink/60 group-hover:text-ink transition-colors">{c.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: identity card */}
          <div className="reveal border border-stone/40 bg-paper p-8">
            <p className="label-meta mb-6 text-clay/40">Identity</p>
            {[
              { k: 'Name',       v: profile.name },
              { k: 'Role',       v: profile.role },
              { k: 'University', v: profile.university },
              { k: 'Location',   v: profile.location },
              { k: 'Mission',    v: profile.mission },
              { k: 'Availability', v: profile.availability },
            ].map(row => (
              <div key={row.k} className="flex flex-col gap-0.5 border-b border-stone/30 py-3.5 last:border-b-0">
                <span className="label-meta text-clay/40">{row.k}</span>
                <span className="text-sm text-ink/80">{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
