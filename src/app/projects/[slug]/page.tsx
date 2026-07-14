import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, CircleDashed } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.outcome,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const imgOk =
    !!project.image &&
    fs.existsSync(path.join(process.cwd(), "public", project.image));

  return (
    <>
      <Nav />
      <main id="main" className="relative z-0 flex-1 pt-16">
        <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Link
              href="/#work"
              className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} /> All work
            </Link>

            <ul className="mb-4 flex flex-wrap gap-2 font-mono text-xs text-muted">
              {project.tags.map((t) => (
                <li key={t} className="rounded-full border border-line px-2.5 py-0.5">
                  {t}
                </li>
              ))}
            </ul>

            <h1 className="text-[clamp(2rem,1.2rem+3vw,3.25rem)] font-bold leading-[1.1] tracking-tight">
              {project.title}
            </h1>

            <p className="mt-6 border-l-2 border-accent pl-5 text-lg leading-relaxed text-body">
              {project.intro}
            </p>
          </Reveal>

          {imgOk && project.image && (
            <Reveal className="mt-12">
              <div
                className={
                  project.framed
                    ? "rounded-[var(--r-md)] border border-line bg-bg-subtle p-4 md:p-8"
                    : undefined
                }
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-[10px] border border-line">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.framed ? "interface screenshot" : "project diagram"}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          )}

          <Reveal className="mt-14">
            <h2 className="mb-4 flex items-baseline gap-3 text-2xl font-bold">
              <span className="font-mono text-sm text-accent">01</span> Context
            </h2>
            <p className="max-w-[65ch] text-[17px] leading-relaxed text-body">
              {project.context}
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="mb-5 flex items-baseline gap-3 text-2xl font-bold">
              <span className="font-mono text-sm text-accent">02</span> Approach
            </h2>
            <ul className="space-y-4">
              {project.approach.map((a) => (
                <li key={a} className="flex gap-3 text-[17px] leading-relaxed text-body">
                  <CheckCircle2 size={20} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                  <span className="max-w-[60ch]">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="mb-4 flex items-baseline gap-3 text-2xl font-bold">
              <span className="font-mono text-sm text-accent">03</span> Result
            </h2>
            <p className="max-w-[65ch] text-[17px] leading-relaxed text-body">
              {project.result}
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="rounded-[var(--r-lg)] border border-line bg-surface p-7">
              <h2 className="mb-5 flex items-baseline gap-3 text-xl font-bold">
                <span className="font-mono text-sm text-accent">04</span> Verify it yourself
              </h2>
              <ul className="space-y-3">
                {project.verify.map((v) =>
                  v.href ? (
                    <li key={v.label}>
                      <a
                        href={v.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent-hover"
                      >
                        {v.label} <ArrowUpRight size={16} />
                      </a>
                    </li>
                  ) : (
                    <li key={v.label} className="inline-flex items-center gap-2 text-body">
                      <CircleDashed size={16} className="text-muted" aria-hidden="true" />
                      {v.label}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
              <p className="text-body">Want something built like this?</p>
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-[15px] font-semibold text-on-accent transition-colors hover:bg-accent-hover"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </article>
      </main>
    </>
  );
}
