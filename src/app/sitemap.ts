import type { MetadataRoute } from "next";
import { flags } from "@/data/flags";
import { cases } from "@/data/cases";

const BASE = "https://legalredflags.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/flags`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/cases`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/checker`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/submit`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  const flagPages: MetadataRoute.Sitemap = flags.map((f) => ({
    url: `${BASE}/flags/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const casePages: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${BASE}/cases/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...flagPages, ...casePages];
}
