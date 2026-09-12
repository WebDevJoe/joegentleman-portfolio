import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Unlisted while the rebrand is being trialled: kept out of the sitemap and
// told not to index, so it can be shared by link without surfacing in search.
export const metadata: Metadata = {
  title: "Preview",
  robots: { index: false, follow: false, nocache: true },
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geist.variable} pv-root min-h-screen bg-pv-bg text-pv-fg antialiased`}>
      {children}
    </div>
  );
}
