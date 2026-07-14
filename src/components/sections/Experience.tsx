import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import { timeline } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-12">
        <SectionHeader index="04" title="Experience" />
        <ol className="relative ml-2 border-l border-line">
          {timeline.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.05}>
              <li className="group relative -ml-px border-l border-transparent pb-12 pl-8 last:pb-0 hover:border-accent">
                <span
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-line-strong bg-bg transition-colors group-hover:border-accent"
                  aria-hidden="true"
                />
                <p className="font-mono text-[13px] text-muted">{t.period}</p>
                <h3 className="mt-1 text-lg font-bold">
                  {t.role} <span className="font-medium text-body">· {t.org}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-[15px] text-body">{t.detail}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
