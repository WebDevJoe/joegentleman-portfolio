import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    // AVIF first (smaller than WebP), WebP fallback.
    formats: ["image/avif", "image/webp"],
    // Whitelist the quality values used across the app (required in Next 16).
    qualities: [75, 90],
    // Cache optimized variants for 31 days at the edge.
    minimumCacheTTL: 60 * 60 * 24 * 31,
    remotePatterns: [
      { protocol: "https", hostname: "placedog.net" },
    ],
  },
};

export default nextConfig;
