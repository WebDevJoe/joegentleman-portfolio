import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const HERO_IMAGE = "/figma/fs2/cover.png";
const LIVE_URL = "https://fs2.game/";

export const metadata = {
  title: "Fallen Sword II Landing page",
  description:
    "The pre-launch landing page for Fallen Sword II: a single page built to drive wishlists, name reservations, and press kit downloads across Steam, App Store, and Google Play.",
  alternates: { canonical: "/work/fs2" },
  openGraph: {
    type: "article",
    title: "Fallen Sword II Landing page — Joe Gentleman",
    description:
      "A pre-launch landing page built to drive wishlists and name reservations for Fallen Sword II.",
    url: "/work/fs2",
    images: [{ url: "/figma/fs2/cover.png", width: 800, height: 600 }],
  },
};

const META = [
  ["Role", "Designer"],
  ["Timeline", "2 weeks · 2025"],
  ["Tools", "Figma"],
  ["Status", "Live at fs2.game"],
] as const;

type WalkthroughSection = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  paragraphs: string[];
};

const SECTIONS: WalkthroughSection[] = [
  {
    src: "/figma/fs2/section-hero.png",
    alt: "Hero section with the Fallen Sword II logo on the left and a hooded character walking toward a glowing portal on the right.",
    width: 800,
    height: 495,
    title: "Hero",
    paragraphs: [
      "Two column layout. Brand and the primary actions on the left, key art on the right. A single illustration sets the tone for the whole world, so it takes the larger half of the fold.",
      "The left column stays on the job: logo, one line on what the game is, and the wishlist and reservation actions within reach before anyone scrolls.",
    ],
  },
  {
    src: "/figma/fs2/section-about.png",
    alt: "About section: six feature blocks alternating left and right.",
    width: 800,
    height: 1941,
    title: "About",
    paragraphs: [
      "Six feature blocks, alternating sides. Each block is the same template: art, tagline, description. Identical slots for the copy team to fill, so the section stays coherent however the words land and however many features make the final cut.",
      "Flipping the art from side to side keeps a long section from reading as a flat list, and gives each feature its own moment as you scroll past.",
    ],
  },
  {
    src: "/figma/fs2/section-secure.png",
    alt: "Secure It Early section: username reservation with a Log In control.",
    width: 800,
    height: 246,
    title: "Secure it early",
    paragraphs: [
      "Username reservation gets its own block. It speaks only to returning Fallen Sword players, the ones who care about keeping their old name, so it sits apart and talks to them directly.",
      "Scoping it this way keeps the promise out of the main flow, where it would only confuse a new player who has no name to protect.",
    ],
  },
  {
    src: "/figma/fs2/section-media.png",
    alt: "Bottom of the page: media gallery, Be Prepared Wishlist on Steam, Community newsletter, and footer.",
    width: 800,
    height: 1535,
    title: "The bottom of the page",
    paragraphs: [
      "Media carousel, a second wishlist callback, community and newsletter, then the footer. The page is one long scroll, so the closing stretch repeats the main action for anyone who read all the way down before deciding.",
      "Each block is self contained, which let the page ship in pieces and made it easy to reorder as priorities moved.",
    ],
  },
];

export default function Fs2Page() {
  return (
    <main className="flex min-h-screen flex-col items-stretch bg-white">
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
                Fallen Sword II Landing page
              </h1>
              <p className="text-ink-muted text-[16px] md:text-[18px] leading-[1.5]">
                Fallen Sword II is the sequel to a long running browser RPG. This was its first
                public page, built in two weeks to introduce the world and drive three actions:
                wishlist on Steam, reserve a name, and download the press kit.
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

            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 w-fit rounded-[12px] bg-[#133fc8] text-white text-[14px] font-medium tracking-[-0.42px] shadow-[0_0_0_1px_#1742cc,0_2px_4px_0_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out hover:-translate-y-0.5"
            >
              Visit fs2.game
              <ArrowUpRight size={14} weight="regular" />
            </a>

            <HeroImageCard />
          </div>
        </section>

        {/* The brief */}
        <Section eyebrow="The brief" title="One page, three actions to drive">
          <p>
            This was the game&apos;s first public presence, so the page had to introduce the world
            and give people a way to commit in the same scroll. I built it around three actions:
            wishlist on Steam, reserve a name, and download the press kit. Everything else on the
            page exists to support one of those.
          </p>
          <blockquote className="border-l-[3px] border-brand-text pl-5 py-2 text-ink text-[20px] font-medium leading-[1.5]">
            Introduce the world and give people a reason to commit, in a single scroll.
          </blockquote>
        </Section>

        {/* Walkthrough intro */}
        <Section eyebrow="The page" title="A walk through, top to bottom">
          <p>
            One continuous scroll, each part its own block so it could ship in pieces and be
            reordered as priorities moved. Here is how it reads from the top.
          </p>
        </Section>

        {SECTIONS.map((s) => (
          <SectionWalkthrough key={s.src} section={s} />
        ))}

        {/* Outcome */}
        <Section eyebrow="Outcome" title="What I took from it">
          <p>The page is live at fs2.game as the game&apos;s first public presence.</p>
          <p>
            The interesting part was holding a whole world together on one page while keeping three
            separate actions clear. Leaning on one strong illustration and a tight set of actions
            mattered more than filling the page with content.
          </p>
        </Section>
      </article>

      <NextProjectCta />
      <Footer />
    </main>
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

function SectionWalkthrough({ section }: { section: WalkthroughSection }) {
  return (
    <section className="border-b border-line flex flex-col items-center px-4 md:px-12 lg:px-16 py-16">
      <div className="flex flex-col gap-6 w-full max-w-[880px]">
        <SectionImageCard
          src={section.src}
          alt={section.alt}
          width={section.width}
          height={section.height}
        />
        <div className="flex flex-col gap-3 pt-2">
          <h2 className="text-ink text-[28px] font-medium leading-[1.15] tracking-[-0.84px]">
            {section.title}
          </h2>
          <div className="flex flex-col gap-4 text-ink-muted text-[16px] leading-[1.65]">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NextProjectCta() {
  return (
    <section className="flex flex-col items-center px-4 md:px-12 lg:px-16 pt-16 pb-24">
      <div className="w-full max-w-[880px]">
        <Link
          href="/work/growth-fund-store"
          className="group block bg-[#fafafa] rounded-[20px] px-8 py-12 hover:bg-[#f5f5f5] transition-colors"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-ink-faint text-[12px] font-medium tracking-[0.5px] uppercase">
              Next project
            </p>
            <p className="text-ink text-[28px] font-medium leading-tight tracking-[-0.84px]">
              Growth Fund and Store Bundles
            </p>
            <p className="text-ink-muted text-[14px] leading-tight">
              A growth fund monetisation feature, shipped inside two live App Store games.
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
          alt="Fallen Sword II landing page cover"
          fill
          sizes="(max-width: 880px) 100vw, 832px"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}

function SectionImageCard({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 880px) 100vw, 832px"
      className="block w-full h-auto rounded-[16px]"
    />
  );
}
