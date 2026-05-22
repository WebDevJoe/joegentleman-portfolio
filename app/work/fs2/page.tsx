import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const HERO_IMAGE = "/figma/fs2/cover.png";
const LIVE_URL = "https://fs2.game/";

export const metadata = {
  title: "Fallen Sword II Landing page",
  description:
    "The pre-launch landing page for Fallen Sword II: a single page built to drive wishlists, name reservations, and press kit downloads across Steam, App Store, and Google Play.",
};

const META = [
  ["Role", "Designer"],
  ["Timeline", "4 weeks · 2025"],
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
      "Two column layout. Brand and conversion on the left, key art on the right. Designed before final game art existed, so a single illustration carries the world.",
    ],
  },
  {
    src: "/figma/fs2/section-about.png",
    alt: "About section: six feature blocks alternating left and right.",
    width: 800,
    height: 1941,
    title: "About",
    paragraphs: [
      "Six feature blocks, alternating sides. Each block is the same template: art, tagline, description. Identical slots for the copy team to fill, so the section stays coherent however the words land.",
    ],
  },
  {
    src: "/figma/fs2/section-secure.png",
    alt: "Secure It Early section: username reservation with a Log In control.",
    width: 800,
    height: 246,
    title: "Secure it early",
    paragraphs: [
      "Username reservation gets its own block. Scoped to returning Fallen Sword players, so the rest of the page does not have to carry that audience.",
    ],
  },
  {
    src: "/figma/fs2/section-media.png",
    alt: "Bottom of the page: media gallery, Be Prepared Wishlist on Steam, Community newsletter, and footer.",
    width: 800,
    height: 1535,
    title: "The bottom of the page",
    paragraphs: [
      "Media carousel, wishlist callback, community and newsletter, then footer. One continuous scroll, each section its own block.",
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
                Pre-launch landing page for Fallen Sword II. Two weeks, one page, no real game
                assets yet.
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

        {SECTIONS.map((s) => (
          <SectionWalkthrough key={s.src} section={s} />
        ))}
      </article>

      <NextProjectCta />
      <Footer />
    </main>
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
          href="/#top"
          className="group block bg-[#fafafa] rounded-[20px] px-8 py-12 hover:bg-[#f5f5f5] transition-colors"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-ink-faint text-[12px] font-medium tracking-[0.5px] uppercase">
              Next project
            </p>
            <p className="text-ink text-[28px] font-medium leading-tight tracking-[-0.84px]">
              Project name: short hook
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
