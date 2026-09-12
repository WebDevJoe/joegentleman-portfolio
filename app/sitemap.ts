import type { MetadataRoute } from "next";

const SITE_URL = "https://joegentleman.co.uk";

const WORK = ["growth-fund-store", "fs2", "battle-pass", "worksheets"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...WORK.map((slug) => ({
      url: `${SITE_URL}/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
