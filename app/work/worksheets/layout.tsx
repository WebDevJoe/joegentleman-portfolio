import type { Metadata } from "next";

// The page itself is a client component, so its metadata lives here. Without
// this every case study inherited the site title and description, which gave
// Google four pages that looked identical.
export const metadata: Metadata = {
  title: "Worksheets, time and attendance",
  description:
    "Time and attendance for a cleaning contractor in Moray, replacing photographed paper timesheets with something a team will actually fill in.",
  alternates: { canonical: "https://joegentleman.co.uk/work/worksheets" },
  openGraph: {
    type: "article",
    title: "Worksheets, time and attendance | Joe Gentleman",
    description:
      "Time and attendance for a cleaning contractor in Moray, replacing photographed paper timesheets with something a team will actually fill in.",
    url: "https://joegentleman.co.uk/work/worksheets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Worksheets, time and attendance | Joe Gentleman",
    description:
      "Time and attendance for a cleaning contractor in Moray, replacing photographed paper timesheets with something a team will actually fill in.",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
