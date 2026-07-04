import type { MetadataRoute } from "next";

const SITE_URL = "https://joegentleman.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Note: /work/battle-pass is intentionally excluded — it is a private,
  // password-gated case study and is marked noindex.
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/work/growth-fund-store`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work/fs2`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
