import { socials } from "@/lib/content";

const siteUrl = "https://faiz-rehman.vercel.app";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Faiz Ur Rehman",
  url: siteUrl,
  jobTitle: "Software Engineer",
  description:
    "Software engineer specializing in full-stack development, AI automation, and quality engineering.",
  email: `mailto:${socials.email}`,
  address: { "@type": "PostalAddress", addressCountry: "BH" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "The University of Lahore",
  },
  worksFor: { "@type": "Organization", name: "CodeAutomation" },
  knowsAbout: [
    "Full-Stack Development",
    "Test Automation",
    "AI Automation",
    "React",
    "Node.js",
    "Playwright",
  ],
  sameAs: [socials.github, socials.linkedin],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Faiz Ur Rehman — Software Engineer",
  url: siteUrl,
  author: { "@type": "Person", name: "Faiz Ur Rehman" },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
