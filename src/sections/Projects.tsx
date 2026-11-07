import { ArrowUpRight, Github, Play } from 'lucide-react';
import { projects } from '../data/projects';
import {
  DQIVisual, PipelineGenVisual, UlloVisual,
  SecurityVisual, AgentCoreVisual, EcoProofVisual, NeuroVisual,
} from '../components/ProjectVisuals';

const VISUALS = [DQIVisual, PipelineGenVisual, UlloVisual, SecurityVisual, AgentCoreVisual, EcoProofVisual, NeuroVisual];

export function Projects() {
  return (
    <section id="projects" className="sec-dark bg-grid-dark relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Header */}
        <div className="reveal mb-16 flex items-end justify-between border-b border-parchment/10 pb-6">
          <div>
            <p className="eyebrow mb-4">05 / Projects</p>
            <h2 className="font-display font-normal text-parchment"
                style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
              Selected<br />
              <em className="text-rose">experiments.</em>
            </h2>
          </div>
          <p className="label-meta hidden sm:block text-clay/40">Real links only · {projects.length} projects</p>
        </div>

        <div className="space-y-0 divide-y divide-parchment/8">
          {projects.map((project, idx) => {
            const items  = project.features ?? project.capabilities ?? [];
            const Visual = VISUALS[idx] ?? VISUALS[0];
            return (
              <article key={project.number}
                className="reveal proj-card grid gap-8 py-12 lg:grid-cols-[90px_1fr_300px] lg:gap-12"
                style={{ animationDelay: `${idx * 70}ms` }}>

                {/* Number */}
                <div className="flex-shrink-0 pt-1">
                  <span className="font-display font-normal leading-none text-parchment/7 select-none"
                    style={{ fontSize: 'clamp(4rem,10vw,7rem)' }}>
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <p className="eyebrow mb-3">{project.category}</p>
                  <h3 className="proj-title-link font-display text-2xl font-normal text-parchment mb-4 sm:text-3xl">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="inline-flex items-center gap-2 border border-rose/30 bg-rose/5 px-3 py-1 font-mono text-[9px] tracking-[0.12em] uppercase text-rose/70 mb-4">
                      ★ {project.status}
                    </span>
                  )}
                  <p className="text-base text-parchment/55 leading-relaxed mb-5 max-w-xl">
                    {project.description}
                  </p>

                  {items.length > 0 && (
                    <ul className="space-y-1.5 mb-5">
                      {items.map(f => (
                        <li key={f} className="flex items-start gap-3 text-sm text-parchment/40">
                          <span className="mt-2 h-px w-4 flex-shrink-0 bg-oxblood/50" aria-hidden />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map(t => (
                      <span key={t} className="skill-tag"><span>{t}</span></span>
                    ))}
                  </div>

                  {/* Action links */}
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
                        className="group inline-flex items-center gap-1.5 border border-parchment/15 px-4 py-2.5 font-mono text-[9px] tracking-[0.12em] uppercase text-parchment/40 transition-colors hover:border-parchment/40 hover:text-parchment">
                        <Github className="h-3 w-3" />
                        Code
                      </a>
                    )}
                    {project.videoUrl && (
                      <a href={project.videoUrl} target="_blank" rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 border border-rose/25 px-4 py-2.5 font-mono text-[9px] tracking-[0.12em] uppercase text-rose/50 transition-colors hover:border-rose/50 hover:text-rose">
                        <Play className="h-3 w-3" />
                        Walkthrough
                      </a>
                    )}
                    {!project.demoUrl && !project.github && !project.videoUrl && (
                      <span className="font-mono text-[9px] text-clay/25 uppercase tracking-[0.12em]">Links to configure</span>
                    )}
                  </div>
                </div>

                {/* Visual panel */}
                <div className="proj-vis overflow-hidden" style={{ minHeight: 150 }}>
                  <Visual />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
