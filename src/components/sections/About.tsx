import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";

const facts = [
  "Bahrain · working globally",
  "B.S. Software Engineering — completed, 2026",
  "English · Urdu · German (learning)",
];

export default function About() {
  const hasPhoto = fs.existsSync(
    path.join(process.cwd(), "public", "about", "faiz.jpg"),
  );
  return (
    <section id="about" className="scroll-mt-16 border-t border-line bg-bg-subtle py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-12">
        <SectionHeader index="05" title="About" />
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <Reveal>
            {hasPhoto ? (
              <div className="relative aspect-square overflow-hidden rounded-[var(--r-lg)] border border-line-strong">
                <Image
                  src="/about/faiz.jpg"
                  alt="Faiz Ur Rehman"
                  fill
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="object-cover saturate-[0.92]"
                />
                {/* Soft vignette so the bright photo sits into the dark canvas */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[var(--r-lg)] shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]"
                  aria-hidden="true"
                />
              </div>
            ) : (
              /* Real photo pending — placeholder deliberately honest, not stock */
              <div
                className="flex aspect-square items-center justify-center rounded-[var(--r-lg)] border border-line bg-surface font-mono text-sm text-muted"
                aria-hidden="true"
              >
                photo pending
              </div>
            )}
          </Reveal>
          <div className="max-w-[65ch] space-y-5 text-[17px] leading-relaxed text-body">
            <Reveal>
              <p>
                I got hooked in a high-school computer science class in Bahrain —
                not on HTML itself, but on a question my teacher must have gotten
                tired of hearing:{" "}
                <span className="text-fg">
                  how does a page on my laptop become something anyone in the
                  world can open?
                </span>{" "}
                Chasing that answer led me from static pages to WordPress client
                sites to full-stack apps, and eventually to a software
                engineering degree in Lahore.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Along the way I noticed the pattern in what I enjoy: I like
                understanding systems end to end — how the pieces fit, why they
                fail, what could be automated away. It&rsquo;s why my day job is
                improving software quality and reliability through automated
                testing, why my side projects automate other people&rsquo;s
                repetitive work, and why my final-year project pairs an LLM with
                a behavioral model instead of settling for either one.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                The feedback I hear most is that I ask good questions. I take
                that as the compliment it is — the questions are how I end up
                knowing where to look when something goes wrong.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-mono text-[13px] text-muted">
                {facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
