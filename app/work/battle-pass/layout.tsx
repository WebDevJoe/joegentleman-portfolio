import type { Metadata } from "next";

// The page itself is a client component, so its metadata lives here. Without
// this every case study inherited the site title and description, which gave
// Google four pages that looked identical.
export const metadata: Metadata = {
  title: "Battle Pass, Warhammer Chaos and Conquest",
  description:
    "Fitting a battle pass into a five year old mobile RTS HUD without crowding what players already knew.",
  alternates: { canonical: "https://joegentleman.co.uk/work/battle-pass" },
  openGraph: {
    type: "article",
    title: "Battle Pass, Warhammer Chaos and Conquest | Joe Gentleman",
    description:
      "Fitting a battle pass into a five year old mobile RTS HUD without crowding what players already knew.",
    url: "https://joegentleman.co.uk/work/battle-pass",
  },
  twitter: {
    card: "summary_large_image",
    title: "Battle Pass, Warhammer Chaos and Conquest | Joe Gentleman",
    description:
      "Fitting a battle pass into a five year old mobile RTS HUD without crowding what players already knew.",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
