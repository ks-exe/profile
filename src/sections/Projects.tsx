import { ArrowUpRight, Github, Play } from 'lucide-react';
import { projects } from '../data/projects';
import {
  PipelineGenVisual,
  SecurityVisual,
  EcoProofVisual,
  UlloVisual,
  AgentCoreVisual,
  DQIVisual,
  NeuroVisual,
} from '../components/ProjectVisuals';

/**
 * Visual map — index matches projects array order (01–07).
 * Reorder projects.ts and this array stays in sync automatically
 * because we index by position.
 */
const VISUALS = [
  PipelineGenVisual,  // 01 AI Data Pipeline Generator
  SecurityVisual,     // 02 AI-Powered Security Incident Analytics
  EcoProofVisual,     // 03 EcoProof
  UlloVisual,         // 04 Project Ullo
  AgentCoreVisual,    // 05 Amazon Bedrock AgentCore Harness
  DQIVisual,          // 06 Data Quality Inspector
  NeuroVisual,        // 07 NeuroPath AI
];

export function Projects() {
  const featured  = projects.filter(p => p.featured);
  const standard  = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="sec-dark bg-grid-dark relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="reveal mb-16 flex items-end justify-between border-b border-parchment/10 pb-6">
          <div>
            <p className="eyebrow mb-4">05 / Projects</p>
            <h2 className="font-display font-normal text-parchment"
                style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
              Selected<br />
              <em className="text-rose">experiments.</em>
            </h2>
          </div>
          <p className="label-meta hidden sm:block text-clay/40">
            {projects.length} projects · real links only
          </p>
        </div>

        {/* ── Featured projects (01–03) — stronger visual weight ── */}
        <div className="mb-0">
          <p className="label-meta mb-6 text-clay/30">Featured work</p>
          <div className="space-y-0 divide-y divide-parchment/10">
            {featured.map((project) => {
              const idx    = projects.indexOf(project);
              const Visual = VISUALS[idx] ?? VISUALS[0];
              const items  = project.features ?? project.capabilities ?? [];
              return (
                <FeaturedCard key={project.number} project={project} Visual={Visual} items={items} idx={idx} />
              );
            })}
          </div>
        </div>

        {/* ── Standard projects (04–07) ───────────────────────────── */}
        <div className="mt-12 border-t border-parchment/8 pt-12">
          <p className="label-meta mb-6 text-clay/30">More projects</p>
          <div className="space-y-0 divide-y divide-parchment/8">
            {standard.map((project) => {
              const idx    = projects.indexOf(project);
              const Visual = VISUALS[idx] ?? VISUALS[0];
              const items  = project.features ?? project.capabilities ?? [];
              return (
                <StandardCard key={project.number} project={project} Visual={Visual} items={items} idx={idx} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Featured project card ──────────────────────────────────────────── */
type CardProps = {
  project: (typeof projects)[number];
  Visual: React.ComponentType;
  items: string[];
  idx: number;
};

function FeaturedCard({ project, Visual, items, idx }: CardProps) {
  return (
    <article
      className="reveal proj-card grid gap-10 py-14 lg:grid-cols-[100px_1fr_340px] lg:gap-14"
      style={{ animationDelay: `${idx * 70}ms` }}>

      {/* Large number */}
      <div className="flex-shrink-0 pt-2">
        <span className="font-display font-normal leading-none select-none"
          style={{ fontSize: 'clamp(5rem,12vw,8.5rem)', color: 'rgba(242,237,228,0.06)' }}>
          {project.number}
        </span>
      </div>

      {/* Content */}
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="eyebrow">{project.category}</span>
          {/* Featured badge */}
          <span className="border border-rose/30 bg-rose/6 px-2.5 py-0.5 font-mono text-[8px] tracking-[0.15em] uppercase text-rose/60">
            Featured
          </span>
        </div>

        <h3 className="proj-title-link font-display font-normal text-parchment mb-5"
            style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', lineHeight: '1.1' }}>
          {project.title}
        </h3>

        {project.status && (
          <div className="mb-4">
            <span className="border border-rose/30 bg-rose/5 px-3 py-1 font-mono text-[9px] tracking-[0.12em] uppercase text-rose/70">
              ★ {project.status}
            </span>
          </div>
        )}

        <p className="text-base text-parchment/60 leading-relaxed mb-6 max-w-xl">
          {project.description}
        </p>

        {items.length > 0 && (
          <ul className="space-y-2 mb-6">
            {items.map(f => (
              <li key={f} className="flex items-start gap-3 text-sm text-parchment/40">
                <span className="mt-2 h-px w-5 flex-shrink-0 bg-oxblood/50" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mb-7">
          {project.stack.map(t => (
            <span key={t} className="skill-tag"><span>{t}</span></span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>

      {/* Visual — larger for featured */}
      <div className="proj-vis overflow-hidden" style={{ minHeight: 180 }}>
        <Visual />
      </div>
    </article>
  );
}

/* ─── Standard project card ──────────────────────────────────────────── */
function StandardCard({ project, Visual, items, idx }: CardProps) {
  return (
    <article
      className="reveal proj-card grid gap-8 py-10 lg:grid-cols-[80px_1fr_260px] lg:gap-10"
      style={{ animationDelay: `${idx * 60}ms` }}>

      {/* Number — smaller on standard cards */}
      <div className="flex-shrink-0 pt-1">
        <span className="font-display font-normal leading-none select-none"
          style={{ fontSize: 'clamp(3.5rem,8vw,6rem)', color: 'rgba(242,237,228,0.05)' }}>
          {project.number}
        </span>
      </div>

      {/* Content */}
      <div>
        <p className="eyebrow mb-3">{project.category}</p>

        <h3 className="proj-title-link font-display text-xl font-normal text-parchment mb-3 sm:text-2xl">
          {project.title}
        </h3>

        {project.status && (
          <div className="mb-3">
            <span className="border border-rose/25 px-2.5 py-0.5 font-mono text-[8px] tracking-[0.12em] uppercase text-rose/55">
              ★ {project.status}
            </span>
          </div>
        )}

        <p className="text-sm text-parchment/50 leading-relaxed mb-4 max-w-xl">
          {project.description}
        </p>

        {items.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {items.map(f => (
              <li key={f} className="flex items-start gap-3 text-xs text-parchment/35">
                <span className="mt-1.5 h-px w-4 flex-shrink-0 bg-oxblood/40" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map(t => (
            <span key={t} className="skill-tag"><span>{t}</span></span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>

      {/* Visual — slightly smaller on standard cards */}
      <div className="proj-vis overflow-hidden" style={{ minHeight: 130 }}>
        <Visual />
      </div>
    </article>
  );
}

/* ─── Shared link row ────────────────────────────────────────────────── */
function ProjectLinks({ project }: { project: (typeof projects)[number] }) {
  const hasAny = project.demoUrl || project.github || project.videoUrl;
  return (
    <div className="flex flex-wrap gap-3">
      {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
          className="btn-primary group inline-flex items-center gap-1.5 border border-oxblood bg-oxblood px-4 py-2.5 font-mono text-[9px] tracking-[0.12em] uppercase text-paper transition-colors hover:bg-oxblood-deep">
          Live Demo
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 border border-parchment/15 px-4 py-2.5 font-mono text-[9px] tracking-[0.12em] uppercase text-parchment/45 transition-colors hover:border-parchment/40 hover:text-parchment">
          <Github className="h-3 w-3" />
          GitHub Repo
        </a>
      )}
      {project.videoUrl && (
        <a href={project.videoUrl} target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 border border-rose/25 px-4 py-2.5 font-mono text-[9px] tracking-[0.12em] uppercase text-rose/50 transition-colors hover:border-rose/50 hover:text-rose">
          <Play className="h-3 w-3" />
          Watch Demo
        </a>
      )}
      {!hasAny && (
        <span className="font-mono text-[9px] text-clay/25 uppercase tracking-[0.12em]">
          Links to configure
        </span>
      )}
    </div>
  );
}
