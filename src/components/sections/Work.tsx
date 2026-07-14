import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import { projects } from "@/lib/content";

function ProjectCard({
  project,
  featured,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  const imgOk =
    !!project.image &&
    fs.existsSync(path.join(process.cwd(), "public", project.image));
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-[var(--r-md)] border border-line bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface-hover ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden border-b border-line bg-bg-subtle ${
          featured ? "aspect-[16/7]" : "aspect-[16/10]"
        }`}
      >
        {imgOk && project.image && project.framed ? (
          <div className="absolute inset-0 flex items-end justify-center px-6 pt-6 md:px-10 md:pt-10">
            <div className="relative h-full w-full max-w-4xl overflow-hidden rounded-t-[10px] border border-line-strong bg-[#0d0d0f] shadow-2xl">
              <div className="flex h-7 items-center gap-1.5 border-b border-[#232326] bg-[#141416] px-3">
                <span className="h-2 w-2 rounded-full bg-[#2e2e33]" />
                <span className="h-2 w-2 rounded-full bg-[#2e2e33]" />
                <span className="h-2 w-2 rounded-full bg-[#2e2e33]" />
              </div>
              <div className="relative h-[calc(100%-1.75rem)]">
                <Image
                  src={project.image}
                  alt={`${project.title} — interface screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        ) : imgOk && project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} — project diagram`}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 1152px" : "(max-width: 768px) 100vw, 560px"}
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          /* Placeholder until real screenshots land (audit: no fake imagery) */
          <span className="flex h-full items-center justify-center font-mono text-sm text-muted">
            {project.slug}/ · screenshot pending
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-2.5 py-0.5">
              {t}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-bold">
          <a
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 group-hover:text-accent"
          >
            {project.title}
          </a>
        </h3>
        <p className="text-[15px] text-body">{project.outcome}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-accent">
          Case study
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-12">
        <SectionHeader index="02" title="Selected Work" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05} className={p.featured ? "md:col-span-2" : ""}>
              <ProjectCard project={p} featured={p.featured} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
