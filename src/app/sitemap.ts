import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";

const base = "https://faiz-rehman.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/resume`, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
