import { Play, ArrowUpRight, Youtube } from 'lucide-react';

const CHANNEL = 'https://www.youtube.com/channel/UC5FapuVL0HpBifsXnmsI3CQ';

type Video = {
  title: string;
  description: string;
  url: string;
  project?: string;
  thumbnail: string;
};

/** YouTube thumbnail URLs use the standard format — verified against supplied video IDs */
const videos: Video[] = [
  {
    title: 'Project Ullo — Walkthrough',
    description: 'Full walkthrough of the AI-assisted DataOps incident triage and recovery platform built on Strands Agents and Amazon Bedrock.',
    url: 'https://youtu.be/L49PCaaJgPQ',
    project: 'Project Ullo',
    thumbnail: 'https://img.youtube.com/vi/L49PCaaJgPQ/hqdefault.jpg',
  },
  {
    title: 'NeuroPath AI — Demo',
    description: 'Demonstration of the adaptive learning platform for ADHD students, built for the AWS 10,000 AIdeas Competition.',
    url: 'https://youtu.be/LGUcXuvvigM',
    project: 'NeuroPath AI',
    thumbnail: 'https://img.youtube.com/vi/LGUcXuvvigM/hqdefault.jpg',
  },
  {
    title: 'Amazon Bedrock AgentCore — Demo',
    description: 'Walkthrough of the customer support chatbot built on the Amazon Bedrock AgentCore managed harness pattern with prompt-routed Bedrock Flows.',
    url: 'https://youtu.be/zZUFQLpvs8A',
    project: 'Amazon Bedrock AgentCore Harness',
    thumbnail: 'https://img.youtube.com/vi/zZUFQLpvs8A/hqdefault.jpg',
  },
];

export function YouTube() {
  return (
    <section id="youtube" className="sec-mid relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Header */}
        <div className="reveal mb-16 flex flex-col gap-6 border-b border-stone/50 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-4">09 / Videos</p>
            <h2 className="font-display font-normal text-ink"
                style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
              Watch what<br />
              <em className="text-oxblood">I build.</em>
            </h2>
            <p className="mt-4 text-sm text-ink/60 max-w-lg leading-relaxed">
              From engineering ideas to working implementations. Explore my project walkthroughs, technical demos, and experiments.
            </p>
          </div>
          <a href={CHANNEL} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-stone px-5 py-2.5 font-mono text-[10px] tracking-[0.15em] uppercase text-ink/60 transition-colors hover:border-oxblood hover:text-oxblood self-start sm:self-end flex-shrink-0">
            <Youtube className="h-3.5 w-3.5" />
            YouTube Channel
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Video grid */}
        <div className="grid gap-0 sm:grid-cols-3 border border-stone/40">
          {videos.map((v, idx) => (
            <a key={v.url} href={v.url} target="_blank" rel="noopener noreferrer"
              className={`reveal group flex flex-col transition-colors hover:bg-parchment/60
                ${idx < 2 ? 'sm:border-r border-stone/40' : ''}
                border-b sm:border-b-0 border-stone/40 last:border-b-0`}
              style={{ animationDelay: `${idx * 80}ms` }}>

              {/* Thumbnail */}
              <div className="relative overflow-hidden bg-ink" style={{ aspectRatio: '16/9' }}>
                <img src={v.thumbnail} alt={v.title}
                  className="w-full h-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-102"
                  loading="lazy" decoding="async"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center border border-parchment/20 bg-ink/60 transition-all duration-300 group-hover:border-oxblood/60 group-hover:bg-oxblood/80">
                    <Play className="h-5 w-5 text-parchment/80 group-hover:text-paper transition-colors" />
                  </div>
                </div>
                {/* Project badge */}
                {v.project && (
                  <div className="absolute bottom-3 left-3 border border-parchment/15 bg-ink/80 px-2.5 py-1">
                    <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-parchment/60">{v.project}</span>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col gap-2 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-normal text-ink group-hover:text-oxblood transition-colors leading-snug">
                    {v.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-clay/40 flex-shrink-0 transition-all group-hover:text-oxblood group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-xs text-ink/50 leading-relaxed">{v.description}</p>
                <div className="mt-auto pt-4 flex items-center gap-2">
                  <Play className="h-3 w-3 text-oxblood" />
                  <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-clay/50">Watch on YouTube</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Channel CTA */}
        <div className="reveal mt-8 flex flex-col items-start gap-4 border border-stone/40 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-base font-normal text-ink">More engineering content on YouTube</p>
            <p className="font-mono text-[10px] text-clay/50 tracking-[0.1em] mt-1">youtube.com/channel/UC5FapuVL0HpBifsXnmsI3CQ</p>
          </div>
          <a href={CHANNEL} target="_blank" rel="noopener noreferrer"
            className="btn-primary group inline-flex items-center gap-2 border border-oxblood bg-oxblood px-5 py-2.5 font-mono text-[10px] tracking-[0.15em] uppercase text-paper transition-colors hover:bg-oxblood-deep flex-shrink-0">
            <Youtube className="h-3.5 w-3.5" />
            Subscribe
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
