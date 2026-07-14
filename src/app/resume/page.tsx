import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import Nav from "@/components/Nav";
import { socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Faiz Ur Rehman — Software Engineer specializing in full-stack development, AI automation, and quality engineering.",
};

const skills = [
  { group: "Languages", items: "JavaScript / TypeScript, Python, PHP, HTML, CSS" },
  { group: "Frameworks", items: "React, Next.js, Node.js, Express, Laravel, Flask" },
  { group: "Testing", items: "Playwright, Cypress, Selenium" },
  { group: "Data & AI", items: "MongoDB, MySQL, Scikit-Learn, LLM integration" },
  { group: "Tools", items: "Git/GitHub, Jira, REST APIs, WordPress, Figma" },
];

function Entry({
  period,
  title,
  org,
  bullets,
}: {
  period: string;
  title: string;
  org: string;
  bullets: string[];
}) {
  return (
    <div className="grid gap-2 md:grid-cols-[160px_1fr] md:gap-6">
      <p className="font-mono text-[13px] text-muted">{period}</p>
      <div>
        <h3 className="font-bold text-fg">
          {title} <span className="font-medium text-body">· {org}</span>
        </h3>
        <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[15px] text-body marker:text-accent">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main id="main" className="relative z-0 flex-1 pt-16">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} /> Home
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Faiz Ur Rehman</h1>
              <p className="mt-2 text-lg text-body">
                Software Engineer — Full-Stack · AI Automation · Quality Engineering
              </p>
              <p className="mt-2 font-mono text-[13px] text-muted">
                Bahrain · {socials.email} ·{" "}
                <a href={socials.github} className="hover:text-accent">github.com/faiztheprogrammer</a>
              </p>
            </div>
            {/* PDF export generated at launch — keep HTML as source of truth */}
            <a
              href="/Faiz-Ur-Rehman-Resume.pdf"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-semibold text-on-accent transition-colors hover:bg-accent-hover"
              download
            >
              <Download size={16} /> Download PDF
            </a>
          </div>

          <section className="mt-12">
            <h2 className="mb-5 font-mono text-sm uppercase tracking-widest text-accent">Experience</h2>
            <div className="space-y-8">
              <Entry
                period="2025 — Present"
                title="SDET"
                org="CodeAutomation, Lahore"
                bullets={[
                  "Build automated test suites with Playwright, Cypress, and Selenium from Jira test cases.",
                  "Improve software quality, reliability, and release confidence across client products.",
                  "Work within professional QA workflows: test case review, execution reporting, regression cycles.",
                ]}
              />
              <Entry
                period="2023 — 2024"
                title="Freelance Web Developer"
                org="Client projects, Bahrain"
                bullets={[
                  "Built and deployed a business portfolio website for a marketing client (WordPress, custom code).",
                  "Delivered a barber appointment booking system with service selection and a dynamic availability calendar.",
                ]}
              />
            </div>
          </section>

          <section className="mt-12">
            <h2 className="mb-5 font-mono text-sm uppercase tracking-widest text-accent">Selected Projects</h2>
            <div className="space-y-8">
              <Entry
                period="Full-stack"
                title="SkillSwap"
                org="MERN"
                bullets={[
                  "Skill-sharing platform with JWT + bcrypt auth, protected routes, REST CRUD, dynamic search & filters.",
                ]}
              />
              <Entry
                period="Applied AI"
                title="AI Productivity Verdict"
                org="Final-year project"
                bullets={[
                  "LLM classifies YouTube content; locally trained Naive Bayes model evaluates behavior; outputs fused into a real-time productivity verdict.",
                ]}
              />
              <Entry
                period="Automation"
                title="WhatsApp Lead Automation"
                org="Client project"
                bullets={[
                  "Guided qualification flow with auto-categorization, forwarding, and automated follow-ups.",
                ]}
              />
            </div>
          </section>

          <section className="mt-12">
            <h2 className="mb-5 font-mono text-sm uppercase tracking-widest text-accent">Skills</h2>
            <div className="space-y-3">
              {skills.map((s) => (
                <div key={s.group} className="grid gap-1 md:grid-cols-[160px_1fr] md:gap-6">
                  <p className="font-mono text-[13px] text-muted">{s.group}</p>
                  <p className="text-[15px] text-body">{s.items}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="mb-5 font-mono text-sm uppercase tracking-widest text-accent">Education</h2>
            <Entry
              period="2022 — 2026"
              title="B.S. Software Engineering"
              org="The University of Lahore — completed"
              bullets={[
                "Final-year project: hybrid AI productivity system (LLM + trained behavioral model).",
              ]}
            />
          </section>
        </div>
      </main>
    </>
  );
}
