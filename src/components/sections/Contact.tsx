"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
import Reveal from "../Reveal";
import { socials } from "@/lib/content";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 border-t border-line py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="mb-12 flex items-baseline gap-4">
            <span className="font-mono text-sm text-accent" aria-hidden="true">06</span>
            <h2 className="text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.15] tracking-tight">
              Let&rsquo;s build something reliable.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <p className="max-w-[50ch] text-[17px] text-body">
                The projects I do best: SaaS platforms, AI-powered workflows,
                and automation that gives people their time back. If
                you&rsquo;re a founder or team trying to turn an idea into
                production-ready software — let&rsquo;s talk.
              </p>
              <p className="font-mono text-sm text-muted">
                Response within 24 hours. Usually faster.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-line-strong px-6 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied ✓" : socials.email}
                </button>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong text-body transition-colors hover:border-accent hover:text-accent"
                >
                  <GithubIcon />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong text-body transition-colors hover:border-accent hover:text-accent"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="h-12 w-full rounded-[var(--r-sm)] border border-line bg-surface px-4 text-fg outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="h-12 w-full rounded-[var(--r-sm)] border border-line bg-surface px-4 text-fg outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-[var(--r-sm)] border border-line bg-surface px-4 py-3 text-fg outline-none transition-colors focus:border-accent"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 cursor-pointer items-center rounded-full bg-accent px-7 text-[15px] font-semibold text-on-accent transition-all hover:bg-accent-hover disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p aria-live="polite" className="min-h-5 text-sm">
                {status === "sent" && (
                  <span className="text-accent">Message sent — I&rsquo;ll reply within 24 hours.</span>
                )}
                {status === "error" && (
                  <span className="text-danger">
                    Something went wrong — email me directly instead.
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>

        <footer className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="font-mono text-xs text-muted">
            Built to be understood — Next.js, tested with Playwright ✓
          </p>
          <p className="font-mono text-xs text-muted">© 2026 Faiz Ur Rehman</p>
        </footer>
      </div>
    </section>
  );
}
