// Copy source: design/NARRATIVE.md — honesty constraints apply.

export type Project = {
  slug: string;
  /** raster UI screenshots get the browser-frame mount */
  framed?: boolean;
  title: string;
  featured: boolean;
  tags: string[];
  outcome: string;
  intro: string;
  image: string | null;
  context: string;
  approach: string[];
  result: string;
  verify: { label: string; href: string | null }[];
};

export const projects: Project[] = [
  {
    slug: "skillswap",
    title: "SkillSwap",
    featured: true,
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    outcome:
      "MERN skill-sharing platform — JWT auth, protected routes, dynamic search & filters.",
    intro:
      "I built SkillSwap to answer the question I'd been asking since my first web page: not 'can I code this?' but 'can I run this — auth, data, deployment, all of it?'",
    image: "/projects/skillswap.png",
    framed: true,
    context:
      "SkillSwap is a full-stack skill-sharing platform: post what you can teach, find someone who wants to learn it, and swap — no money involved. I owned every layer: data model, REST API, auth, and the React front end.",
    approach: [
      "Designed RESTful APIs for user profiles and full skill CRUD, backed by MongoDB with Mongoose schemas.",
      "Implemented JWT authentication with bcrypt password hashing, plus protected user-specific routes on both API and client.",
      "Built dynamic search and category filters so users can find matches without scanning lists.",
      "Structured the app so each concern — auth, skills, matching — stays independently understandable and testable.",
    ],
    result:
      "A working MERN application demonstrating end-to-end ownership: schema design, secure auth, API architecture, and a responsive UI.",
    verify: [
      { label: "GitHub repository", href: "https://github.com/faiztheprogrammer/skillswap" },
      { label: "Live demo — deployment in progress", href: null },
    ],
  },
  {
    slug: "sdet-automation",
    title: "Test Automation at CodeAutomation",
    featured: false,
    tags: ["Playwright", "Cypress", "Selenium", "Jira"],
    outcome:
      "Production test suites built from Jira test cases — quality as part of development.",
    intro:
      "I joined looking for engineering experience. I left thinking like a different engineer — one who designs for the edge cases first.",
    image: "/projects/sdet-automation.svg",
    context:
      "At CodeAutomation (Lahore) I work as an SDET, translating Jira test cases into automated suites that protect real client products. The work is confidential, so this case study describes process rather than internals.",
    approach: [
      "Translate Jira test cases into maintainable automated suites using Playwright, Cypress, and Selenium.",
      "Cover the paths users actually take — including the edge cases that only surface when you ask 'what could go wrong?' first.",
      "Keep suites maintainable: stable selectors, shared fixtures, and failures that tell you where to look.",
      "Work inside a professional QA workflow: test case review, execution reporting, regression cycles.",
    ],
    result:
      "Nine-plus months of professional discipline that changed how I build my own software: quality designed in from the start, not bolted on after.",
    verify: [
      { label: "Client codebases are confidential (NDA) — happy to walk through my testing process and connect you with references on a call", href: null },
    ],
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Lead Automation",
    featured: false,
    tags: ["Automation", "Workflows", "APIs"],
    outcome:
      "Guided lead qualification with auto-categorization and follow-ups — owners only talk to buyers.",
    intro:
      "The business owner was answering the same questions all day. Now a workflow qualifies leads, categorizes them, and follows up automatically.",
    image: "/projects/whatsapp-automation.svg",
    context:
      "A business was losing hours daily answering the same first questions from every WhatsApp lead. The owner didn't need more staff — the workflow needed to disappear.",
    approach: [
      "Mapped the owner's actual conversation flow before automating anything — understand the system first.",
      "Built a guided question sequence that qualifies each lead automatically.",
      "Added automatic categorization and forwarding, so the owner receives structured lead info instead of raw chats.",
      "Automated follow-ups for leads that go quiet — the step humans always forget.",
    ],
    result:
      "Lead handling that runs without the owner's attention: qualified, categorized, followed up. Manual work reduced to talking with people who are ready to buy.",
    verify: [
      { label: "Client project — demo walkthrough available on request", href: null },
    ],
  },
  {
    slug: "productivity-ai",
    title: "AI Productivity Verdict",
    featured: false,
    tags: ["LLM", "Naive Bayes", "Python"],
    outcome:
      "LLM reads content, a trained model reads behavior — fused into one real-time verdict.",
    intro:
      "One model reads what you're watching; another learns how you behave. Together they answer a question neither could alone: is this time well spent?",
    image: "/projects/productivity-ai.svg",
    context:
      "My final-year project: a productivity application that judges, in real time, whether screen time is productive. Neither content analysis nor behavior tracking alone answers that — so I combined both.",
    approach: [
      "An LLM analyzes the title and channel of YouTube videos to classify content as productive or not.",
      "A locally trained Naive Bayes model evaluates behavioral signals — app switching, viewing patterns.",
      "The two outputs fuse into a single real-time productivity verdict shown to the user.",
      "Built additional productivity features around the verdict throughout the application.",
    ],
    result:
      "A working hybrid-AI system — applied LLM integration plus a classical model I trained myself, combined where each is strongest.",
    verify: [
      { label: "Final-year project — demo video coming with launch", href: null },
    ],
  },
];

export const principles = [
  {
    key: "build",
    title: "Understand systems before building",
    body: "Full-stack, end to end — I've been chasing 'how does this reach real users?' since my first HTML class.",
    metric: "MERN · Laravel · Flask · WordPress",
    span: 2,
  },
  {
    key: "automate",
    title: "Automate repetitive work",
    body: "I automate the work that drains people. Repetition is a bug.",
    metric: "workflows · APIs · LLM integrations",
    span: 1,
  },
  {
    key: "prove",
    title: "Quality is part of development",
    body: "Nine months writing production test suites taught me to ask 'what could go wrong?' before 'what should we build next?'",
    metric: "Playwright · Cypress · Selenium",
    span: 1,
  },
  {
    key: "ship",
    title: "Build for maintainability",
    body: "A feature isn't done when it works. It's done when I know why it works.",
    metric: "software that's understood ✓",
    span: 2,
  },
] as const;

export const timeline = [
  {
    period: "2025 — Present",
    role: "SDET",
    org: "CodeAutomation, Lahore",
    detail:
      "Building automated test suites with Playwright, Cypress & Selenium from Jira test cases — improving software quality, reliability, and release confidence.",
  },
  {
    period: "2023 — 2024",
    role: "Freelance Web Developer",
    org: "Client projects, Bahrain",
    detail:
      "Built and delivered WordPress sites for real clients — a marketing business portfolio and a barber appointment booking system.",
  },
  {
    period: "2022 — 2026",
    role: "B.S. Software Engineering",
    org: "The University of Lahore — completed",
    detail:
      "Full-stack coursework and an AI final-year project pairing an LLM with a trained behavioral model.",
  },
] as const;

export const socials = {
  github: "https://github.com/faiztheprogrammer",
  linkedin: "https://www.linkedin.com/in/faiz-ur-rehman-uol/",
  email: "faizrehman561@gmail.com",
} as const;

export const stack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Python",
  "Laravel",
  "MongoDB",
  "MySQL",
  "Playwright",
  "Cypress",
  "Selenium",
] as const;
