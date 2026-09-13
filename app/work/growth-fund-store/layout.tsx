import type { Metadata } from "next";

// The page itself is a client component, so its metadata lives here. Without
// this every case study inherited the site title and description, which gave
// Google four pages that looked identical.
export const metadata: Metadata = {
  title: "Growth Fund Bundles",
  description:
    "A paid progression track shipped into three live App Store games, built inside the store and design system each game already had.",
  alternates: { canonical: "https://joegentleman.co.uk/work/growth-fund-store" },
  openGraph: {
    type: "article",
    title: "Growth Fund Bundles | Joe Gentleman",
    description:
      "A paid progression track shipped into three live App Store games, built inside the store and design system each game already had.",
    url: "https://joegentleman.co.uk/work/growth-fund-store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Fund Bundles | Joe Gentleman",
    description:
      "A paid progression track shipped into three live App Store games, built inside the store and design system each game already had.",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
