import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    default: "Joe Gentleman — Product & Game UI/UX Designer",
    template: "%s — Joe Gentleman",
  },
  description:
    "Joe Gentleman is a product designer and game UI/UX designer with a web development background. Available for product design roles and freelance work.",
  applicationName: "Joe Gentleman",
  authors: [{ name: "Joe Gentleman", url: SITE_URL }],
  creator: "Joe Gentleman",
  publisher: "Joe Gentleman",
  keywords: [
    "Joe Gentleman",
    "Joegentleman",
    "product designer",
    "game UI designer",
    "UI/UX designer",
    "freelance designer",
    "UK product designer",
    "game UX",
    "portfolio",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Joe Gentleman",
    title: "Joe Gentleman — Product & Game UI/UX Designer",
    description:
      "Product designer and game UI/UX designer with a web development background. Available for product design roles and freelance work.",
    url: SITE_URL,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Gentleman — Product & Game UI/UX Designer",
    description:
      "Product designer and game UI/UX designer with a web development background. Available for product design roles and freelance work.",
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe Gentleman",
    alternateName: "Joegentleman",
    url: SITE_URL,
    jobTitle: "Product & Game UI/UX Designer",
    description:
      "Product designer and game UI/UX designer with a web development background, based in the UK.",
    knowsAbout: [
      "Product Design",
      "Game UI",
      "Game UX",
      "User Experience",
      "User Interface Design",
      "Web Design",
    ],
    sameAs: [
      "https://dribbble.com/Joegentleman",
      "https://github.com/WebDevJoe",
    ],
  };

  return (
    <html lang="en" className={rethinkSans.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </body>
    </html>
  );
}
