import type { Metadata } from "next";

// The page itself is a client component, so its metadata lives here. Without
// this every case study inherited the site title and description, which gave
// Google four pages that looked identical.
export const metadata: Metadata = {
  title: "Fallen Sword II Landing Page",
  description:
    "The first public page for Fallen Sword II, built in two weeks to drive Steam wishlists, name reservations and press kit downloads.",
  alternates: { canonical: "https://joegentleman.co.uk/work/fs2" },
  openGraph: {
    type: "article",
    title: "Fallen Sword II Landing Page | Joe Gentleman",
    description:
      "The first public page for Fallen Sword II, built in two weeks to drive Steam wishlists, name reservations and press kit downloads.",
    url: "https://joegentleman.co.uk/work/fs2",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fallen Sword II Landing Page | Joe Gentleman",
    description:
      "The first public page for Fallen Sword II, built in two weeks to drive Steam wishlists, name reservations and press kit downloads.",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
