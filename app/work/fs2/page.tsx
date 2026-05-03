import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RevokeOnLeave } from "@/components/RevokeOnLeave";

const HERO_IMAGE = "https://placedog.net/832/495?id=304";

export const metadata = {
  title: "Fallen Sword II — Wishlist landing page",
  description:
    "Designing the pre-launch landing page for Fallen Sword II — a single page built to drive wishlists, name reservations, and press kit downloads across Steam, App Store, and Google Play.",
};

const META = [
  ["Role", "Lead designer"],
  ["Timeline", "4 weeks · 2025"],
  ["Tools", "Figma"],
  ["Status", "Live — fs2.game"],
] as const;

const PROCESS = [
  [
    "01",
    "Pinned down the job",
    "The brief was a single landing page to launch alongside the wishlist campaign. It had to do three things at once: convert visitors into wishlists, give press a clean place to grab assets, and let returning players reserve their character name before the game went live.",
  ],
  [
    "02",
    "Mapped the storefronts",
    "Wishlists meant Steam, pre-orders meant the App Store, pre-registration meant Google Play. Three platforms, three different button systems, and three legal logo rules. I planned the hero around making all three feel like equal options without turning the page into a row of badges.",
  ],
  [
    "03",
    "Built the story spine",
    "The game team had key art and a list of pillars they wanted highlighted: the world, the combat, the dungeons, the classes, the guilds. I structured the About section as alternating feature blocks so each pillar got its own moment with art, instead of a cramped feature grid.",
  ],
  [
    "04",
    "Designed for press and fans in one section",
    "Press kit needed to be one click away, but it also had to live next to media that excited regular visitors. I designed a Media section that doubled as the press hub — gallery, trailer, and a quiet press kit download that a journalist could find without anyone else having to wade through it.",
  ],
] as const;

const DECISIONS = [
  [
    "01",
    "Wishlist as the only hero CTA",
    "The page exists to drive wishlists. Everything else is downstream of that. I made “Wishlist Now” the headline and the buttons — Steam, Google Play, App Store — sit underneath as one row. No competing newsletter signup, no “learn more” button stealing the click. If you do nothing else on the page, you wishlist.",
  ],
  [
    "02",
    "Reserve Your Name as a second conversion",
    "Wishlists are passive. A name reservation is a commitment — it's the player saying “I'm playing this on day one.” I designed it as its own section with weight, not a footnote, so visitors who already wishlist have a second action to take. It's also a clean email-capture for the team without dressing it up as a newsletter.",
  ],
  [
    "03",
    "Press kit hidden in plain sight",
    "Most game sites either bury the press kit in a footer link or put a giant “PRESS” button on the homepage that nobody clicks. I put the download in the Media section between the gallery and the trailer — high enough that journalists find it instantly, contextual enough that it doesn't shout at fans.",
  ],
  [
    "04",
    "Alternating feature blocks instead of a grid",
    "The About section had six pillars to communicate. A 3×2 grid would have flattened them into bullet points. Alternating image-left / image-right blocks gave each pillar its own breathing room and let the team's key art do the heavy lifting — which is what people are actually here to see.",
  ],
] as const;

export default function Fs2Page() {
  return (
    <main className="flex min-h-screen flex-col items-stretch bg-white">
      <RevokeOnLeave lockId="fs2" />
      <Nav />

      <article className="flex flex-col">
        {/* Hero */}
        <section className="border-b border-line flex flex-col items-center px-4 md:px-12 lg:px-16 py-12">
          <div className="flex flex-col gap-6 w-full max-w-[880px]">
            <Link
              href="/#top"
              className="inline-flex items-center gap-1.5 text-ink-faint text-[16px] font-medium leading-none hover:text-ink transition w-fit"
            >
              <ArrowLeft size={16} weight="regular" aria-hidden />
              Back to work
            </Link>

            <div className="flex flex-col gap-4">
              <span className="self-start inline-flex items-center gap-2 px-4 py-2 bg-chip-blue-tint rounded-full text-brand-text text-[16px] font-medium leading-[0.95] tracking-[-0.48px]">
                <span aria-hidden className="h-2 w-2 rounded-full bg-brand-text" />
                Web Design
              </span>
              <h1 className="text-ink text-[40px] md:text-[56px] font-medium leading-[1.05] tracking-[-1.68px]">
                Fallen Sword II — One page to launch a sequel
              </h1>
              <p className="text-ink-muted text-[16px] md:text-[18px] leading-[1.5]">
                A pre-launch landing page for the spiritual successor to a beloved browser MMORPG.
                One page, three storefronts, and three jobs to do at once: drive wishlists, capture
                name reservations, and give press a clean place to grab assets.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-3">
              {META.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1">
                  <p className="text-ink-faint text-[12px] font-medium">{label}</p>
                  <p className="text-ink text-[14px] font-medium">{value}</p>
                </div>
              ))}
            </div>

            <HeroImageCard />
          </div>
        </section>

        <Section
          eyebrow="The brief"
          title="A single page that had to convert, inform, and serve press."
        >
          <p>
            I was asked to design the launch landing page for Fallen Sword II ahead of the wishlist
            campaign. The brief was deliberately scoped to one page — no marketing site, no blog,
            no docs. Just one URL doing all of the pre-launch work.
          </p>
          <p>
            The non-negotiables were the conversion features: a wishlist CTA wired to Steam, App
            Store, and Google Play; a name reservation flow so returning players could lock in
            their character name before launch; a press kit download for journalists; and a Media
            section showing off the world. All of that on one page, on mobile and desktop, without
            it feeling like a bullet list.
          </p>
          <blockquote className="border-l-[3px] border-brand-text pl-5 py-2 text-ink text-[20px] font-medium leading-[1.5]">
            One page. Three storefronts. Press, players, and lapsed fans all reading the same URL.
          </blockquote>
        </Section>

        <Section eyebrow="Process" title="How I got there">
          <div className="not-prose flex flex-col gap-4">
            {PROCESS.map(([num, title, copy]) => (
              <div
                key={num}
                className="bg-white border border-line rounded-[12px] p-4 flex flex-col gap-1.5"
              >
                <p className="text-brand-text text-[14px] font-medium tracking-[0.5px] uppercase">
                  {num}
                </p>
                <p className="text-ink text-[22px] font-medium">{title}</p>
                <p className="text-ink-faint text-[16px] leading-[1.4]">{copy}</p>
              </div>
            ))}
          </div>
          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <ImagePlaceholder height="h-[240px] md:h-[320px]" />
            <ImagePlaceholder height="h-[240px] md:h-[320px]" />
          </div>
        </Section>

        <Section
          eyebrow="Key decisions"
          title="Four calls that shaped the page"
        >
          <div className="not-prose flex flex-col gap-12 pt-2">
            {DECISIONS.map(([num, title, copy], i) => (
              <div
                key={num}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 flex flex-col gap-3">
                  <p className="text-brand-text text-[40px] md:text-[56px] font-medium leading-none tracking-[-1.68px]">
                    {num}
                  </p>
                  <p className="text-ink text-[24px] font-medium leading-[1.3] tracking-[-0.6px]">
                    {title}
                  </p>
                  <p className="text-ink-muted text-[15px] leading-[1.65]">{copy}</p>
                </div>
                <DesktopMock />
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Final designs" title="Where it landed">
          <div className="not-prose pt-2">
            <HeroImageCard />
          </div>
          <p>
            The page is live at{" "}
            <a
              href="https://fs2.game/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-brand-text underline underline-offset-2"
            >
              fs2.game
            </a>
            . Wishlist, name reservation, and press kit all sit on the one URL the team needed.
          </p>
        </Section>

        <Section eyebrow="Outcome" title="What I learned">
          <p>
            A landing page like this looks small on paper — one URL, a handful of sections — but
            the constraint is the work. Every section had to earn its place because there was no
            second page to fall back on. Cutting was harder than designing.
          </p>
          <p>
            The biggest lesson was treating the storefront row as one decision instead of three.
            Steam, Google Play, and App Store each have their own button rules and visual weight,
            and trying to make them all equal would have produced a stripe of competing badges.
            Picking the hierarchy — Steam first because it carries the wishlist verb — let the
            other two sit underneath without fighting.
          </p>
        </Section>
      </article>

      <NextProjectCta />
      <Footer />
    </main>
  );
}

function NextProjectCta() {
  return (
    <section className="flex flex-col items-center px-4 md:px-12 lg:px-16 pt-16 pb-24">
      <div className="w-full max-w-[880px]">
        <Link
          href="/#top"
          className="group block bg-[#fafafa] rounded-[20px] px-8 py-12 hover:bg-[#f5f5f5] transition-colors"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-ink-faint text-[12px] font-medium tracking-[0.5px] uppercase">
              Next project
            </p>
            <p className="text-ink text-[28px] font-medium leading-tight tracking-[-0.84px]">
              Project name — short hook
            </p>
            <p className="text-ink-muted text-[14px] leading-tight">
              A one-line teaser describing the next project.
            </p>
            <span className="inline-flex items-center gap-2 mt-2 h-11 px-5 rounded-[12px] bg-[#133fc8] text-white text-[14px] font-medium tracking-[-0.42px] shadow-[0_0_0_1px_#1742cc,0_2px_4px_0_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              View project
              <ArrowRight
                size={14}
                weight="regular"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-line flex flex-col items-center px-4 md:px-12 lg:px-16 py-16">
      <div className="flex flex-col gap-4 w-full max-w-[880px]">
        <p className="text-ink-faint text-[12px] font-medium tracking-[0.5px] uppercase">
          {eyebrow}
        </p>
        <h2 className="text-ink text-[28px] font-medium leading-[1.15] tracking-[-0.84px]">
          {title}
        </h2>
        <div className="flex flex-col gap-4 text-ink-muted text-[16px] leading-[1.65] mt-2">
          {children}
        </div>
      </div>
    </section>
  );
}

function HeroImageCard() {
  return (
    <div
      className="relative w-full h-[280px] md:h-[495px] rounded-[20px] border-[1.5px] border-line overflow-hidden mt-6"
      style={{
        background: "linear-gradient(to top, #e0f1fe 0%, rgba(246,251,255,0) 60%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 rounded-[inherit] card-inset pointer-events-none z-[1]"
      />
      {[
        "top-3 left-3",
        "top-3 right-3",
        "bottom-3 left-3",
        "bottom-3 right-3",
      ].map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={`absolute ${pos} h-1.5 w-1.5 rounded-full bg-ink-faint/40 z-[2]`}
        />
      ))}
      <div className="absolute inset-6 rounded-[10px] overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Placeholder image — final hero pending"
          fill
          sizes="(max-width: 880px) 100vw, 832px"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}

function ImagePlaceholder({ height = "h-[320px]" }: { height?: string }) {
  return (
    <div
      className={`relative w-full ${height} rounded-[16px] border-[1.5px] border-line bg-card-tint overflow-hidden`}
    >
      <div
        aria-hidden
        className="absolute inset-0 rounded-[inherit] card-inset pointer-events-none"
      />
      {[
        "top-3 left-3",
        "top-3 right-3",
        "bottom-3 left-3",
        "bottom-3 right-3",
      ].map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={`absolute ${pos} h-1.5 w-1.5 rounded-full bg-ink-faint/40`}
        />
      ))}
    </div>
  );
}

function DesktopMock() {
  return (
    <div className="w-full md:w-[420px] aspect-[4/3] rounded-[16px] border-[1.5px] border-line bg-card-tint relative overflow-hidden flex items-center justify-center shrink-0">
      <span
        aria-hidden
        className="absolute top-3 left-3 flex gap-1.5"
      >
        <span className="h-2 w-2 rounded-full bg-ink-faint/30" />
        <span className="h-2 w-2 rounded-full bg-ink-faint/30" />
        <span className="h-2 w-2 rounded-full bg-ink-faint/30" />
      </span>
      <p className="text-ink-faint text-[14px]">Desktop mockup</p>
    </div>
  );
}
