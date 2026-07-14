import { Blocks, Bot, ShieldCheck, PackageCheck } from "lucide-react";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import { principles } from "@/lib/content";

const icons = {
  build: Blocks,
  automate: Bot,
  prove: ShieldCheck,
  ship: PackageCheck,
} as const;

export default function Process() {
  return (
    <section id="process" className="scroll-mt-16 border-t border-line bg-bg-subtle py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-12">
        <SectionHeader index="03" title="How I Engineer" />

        <Reveal>
          <p className="mb-12 max-w-2xl text-lg text-body">
            In university, I watched friends&rsquo; app die minutes before their
            final presentation. It worked the day before — nobody knew why it
            stopped. That moment taught me the difference between{" "}
            <em className="not-italic text-fg">software that works</em> and{" "}
            <em className="not-italic text-fg">software that&rsquo;s understood</em>.
            Since then, I&rsquo;ve tried to build software that&rsquo;s
            understood — not just software that works.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((p, i) => {
            const Icon = icons[p.key as keyof typeof icons];
            return (
              <Reveal
                key={p.key}
                delay={i * 0.05}
                className={p.span === 2 ? "md:col-span-2" : ""}
              >
                <div className="flex h-full flex-col gap-4 rounded-[var(--r-lg)] border border-line bg-surface p-7 transition-colors hover:border-line-strong">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-accent-subtle text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="text-[15px] text-body">{p.body}</p>
                  <p className="mt-auto pt-2 font-mono text-xs text-muted">
                    {p.metric}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
