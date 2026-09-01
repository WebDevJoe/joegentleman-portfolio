import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cookies } from "next/headers";
import { SiteGate } from "@/components/SiteGate";
import { SITE_UNLOCK_COOKIE } from "@/lib/site-unlock-constants";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://joegentleman.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Joe Gentleman | UX Designer & Game UI Artist",
    template: "%s | Joe Gentleman",
  },
  description:
    "Joe Gentleman is a UX designer from the north east of Scotland, currently working as a game UI artist. Available for roles and freelance work.",
  applicationName: "Joe Gentleman",
  authors: [{ name: "Joe Gentleman", url: SITE_URL }],
  creator: "Joe Gentleman",
  publisher: "Joe Gentleman",
  keywords: [
    "Joe Gentleman",
    "Joegentleman",
    "UX designer",
    "game UI artist",
    "game UI designer",
    "UI/UX designer",
    "freelance designer",
    "UX designer Scotland",
    "north east Scotland",
    "game UX",
    "portfolio",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Joe Gentleman",
    title: "Joe Gentleman | UX Designer & Game UI Artist",
    description:
      "A UX designer from the north east of Scotland, currently working as a game UI artist.",
    url: SITE_URL,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Gentleman | UX Designer & Game UI Artist",
    description:
      "A UX designer from the north east of Scotland, currently working as a game UI artist.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  // Skip the site gate during local development so the password modal
  // doesn't block work. Production still requires the cookie.
  const unlocked =
    process.env.NODE_ENV === "development" ||
    cookieStore.get(SITE_UNLOCK_COOKIE)?.value === "1";

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe Gentleman",
    alternateName: "Joegentleman",
    url: SITE_URL,
    jobTitle: "UX Designer & Game UI Artist",
    description:
      "A UX designer from the north east of Scotland, currently working as a game UI artist.",
    knowsAbout: [
      "User Experience Design",
      "Game UI Art",
      "Game UI",
      "Game UX",
      "User Experience",
      "User Interface Design",
      "Web Design",
    ],
    homeLocation: {
      "@type": "Place",
      name: "North East Scotland",
    },
    sameAs: [
      "https://dribbble.com/Joegentleman",
      "https://github.com/WebDevJoe",
      "https://x.com/joegentsui",
      "https://www.linkedin.com/in/joe-gentleman-48a648244",
    ],
  };

  return (
    <html lang="en" className={rethinkSans.variable}>
      <body>
        {/* Structured data renders regardless of the gate so name-based
            search results stay rich. */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        {unlocked ? (
          <>
            <a href="#main-content" className="skip-link">
              Skip to content
            </a>
            <div id="main-content" tabIndex={-1}>
              {children}
            </div>
            <Analytics />
            <SpeedInsights />
          </>
        ) : (
          <SiteGate />
        )}
      </body>
    </html>
  );
}
