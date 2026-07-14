"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { dur, ease } from "@/lib/motion";

/* Honesty rule (credibility audit): every terminal line must be literally
   true of this site. No invented numbers. */
const terminalLines = [
  { text: "$ npx inspect faiz --portfolio", cls: "text-[#f4f4f5]" },
  { text: "✓ full-stack · MERN, Laravel, Flask", cls: "text-[var(--code-green)]" },
  { text: "✓ ai automation · LLM + workflow builds", cls: "text-[var(--code-green)]" },
  { text: "✓ quality · SDET, Playwright/Cypress", cls: "text-[var(--code-green)]" },
];

function Terminal() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(reduced ? terminalLines.length : 0);

  useEffect(() => {
    if (reduced) return;
    if (visible >= terminalLines.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 900 : 350);
    return () => clearTimeout(t);
  }, [visible, reduced]);

  return (
    <div
      aria-hidden="true"
      className="w-full max-w-md rounded-[var(--r-md)] border border-[#232326] bg-[#0d0d0f] shadow-[0_0_24px_rgba(16,185,129,0.35)]"
    >
      <div className="flex items-center gap-1.5 border-b border-[#232326] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2e2e33]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2e2e33]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2e2e33]" />
      </div>
      <div className="min-h-36 px-4 py-4 font-mono text-[13px] leading-relaxed">
        {terminalLines.slice(0, visible).map((l) => (
          <div key={l.text} className={l.cls}>
            {l.text}
          </div>
        ))}
        <span className="inline-block h-4 w-2 animate-pulse bg-[#10b981] align-middle" />
      </div>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const anim = (i: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: dur.slow, ease: ease, delay: i * 0.08 },
  });

  return (
    <section className="relative flex min-h-dvh items-center pt-16">
      <div className="blueprint absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.2fr_1fr] lg:px-12">
        <div>
          <motion.p
            {...anim(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 font-mono text-sm text-muted"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance &amp; full-time
          </motion.p>

          <motion.h1
            {...anim(1)}
            className="text-[clamp(2.5rem,1.2rem+5.2vw,4.5rem)] font-bold leading-[1.05] tracking-tight"
          >
            Faiz Ur Rehman
            <span className="block text-accent">Software Engineer</span>
          </motion.h1>

          <motion.p
            {...anim(2)}
            className="mt-6 max-w-xl text-lg text-body"
          >
            I build full-stack products and AI automations. I believe reliable
            software starts with understanding the system behind it — not just
            making it work.
          </motion.p>

          <motion.div
            {...anim(3)}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="inline-flex h-12 cursor-pointer items-center rounded-full bg-accent px-7 text-[15px] font-semibold text-on-accent transition-all hover:bg-accent-hover hover:shadow-[0_0_24px_var(--accent-ring)]"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 cursor-pointer items-center rounded-full border border-line-strong px-7 text-[15px] font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur.slow, ease: ease, delay: 0.3 }}
          className="hidden justify-end lg:flex"
        >
          <Terminal />
        </motion.div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
      >
        <ArrowDown size={20} className="animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}
