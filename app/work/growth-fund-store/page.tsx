import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Growth Fund and Store Bundles",
  description:
    "Designing a growth fund monetisation feature for two live mobile games, each inside its own store and design system.",
  alternates: { canonical: "/work/growth-fund-store" },
  openGraph: {
    type: "article",
    title: "Growth Fund and Store Bundles — Joe Gentleman",
    description:
      "A growth fund monetisation feature shipped inside two live App Store games, each in its own store and design system.",
    url: "/work/growth-fund-store",
    images: [{ url: "/figma/growth-fund-store/cover.png", width: 810, height: 586 }],
  },
};

const META = [
  ["Role", "UI/UX designer"],
  ["Timeline", "4 weeks · 2025"],
  ["Tools", "Photoshop"],
  ["Status", "Shipped"],
] as const;

const PROCESS = [
  [
    "01",
    "Mapped the states",
    "Laid out every state the growth fund needed: locked, near unlock, ready to claim, claimed, and maxed. Knowing the states up front kept the design consistent across both games.",
  ],
  [
    "02",
    "Looked at existing examples",
    "Studied how other live games present growth funds and milestone rewards, then kept the patterns that fit each game and left the ones that did not.",
  ],
  [
    "03",
    "Designed inside each system",
    "Built the screens using each game's existing design system, then added new components that followed the same rules and principles so nothing looked bolted on. The item art was produced by the artists.",
  ],
  [
    "04",
    "Approval and handoff",
    "Reviewed each design with my manager for sign off, then handed the final screens to the developers to build.",
  ],
] as const;

export default function GrowthFundStorePage() {
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
                Game UI/UX
              </span>
              <h1 className="text-ink text-[40px] md:text-[56px] font-medium leading-[1.05] tracking-[-1.68px]">
                Growth funds, shipped across two live games
              </h1>
              <p className="text-ink-muted text-[16px] md:text-[18px] leading-[1.5]">
                A growth fund is a paid progression track: players upgrade naturally, hit
                milestones, and claim rewards along the way. I designed one for two live App Store
                games, Godzilla x Kong: Titan Chasers and Operation New Earth, fitting each into a
                store and a design system that already existed.
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

            <CoverPlaceholder />
          </div>
        </section>

        {/* The brief */}
        <Section
          eyebrow="The brief"
          title="Two live games, two design systems, one feature to add"
        >
          <p>
            The growth fund mechanic was defined. What was not defined was how it would live inside
            each game. Both titles were already shipped, each with its own store, its own
            components, and its own art direction. The job was fitting a new monetisation feature
            into interfaces that players already knew, without it looking out of place.
          </p>
          <p>
            Operation New Earth had a second problem. Its store had no spare room. The loyalty level
            already took up a full screen of its own, so adding a growth fund meant either more
            scrolling tabs or a rethink of what earned its space.
          </p>
          <blockquote className="border-l-[3px] border-brand-text pl-5 py-2 text-ink text-[20px] font-medium leading-[1.5]">
            Same feature, two games. The hard part was making each one feel native.
          </blockquote>
        </Section>

        {/* Process */}
        <Section eyebrow="Process" title="How I worked">
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
        </Section>

        {/* Operation New Earth */}
        <Section
          eyebrow="Operation New Earth"
          title="Making room by turning the loyalty level into a header"
        >
          <p>
            Operation New Earth ran its loyalty level as a full screen. Players earned loyalty XP
            buying shards and claimed bonus rewards at each milestone. It worked, but it owned an
            entire screen for something players checked for a few seconds at a time.
          </p>
          <Figure
            src="/figma/growth-fund-store/one-loyalty-before.png"
            alt="Operation New Earth loyalty level as a full screen, with a how it works panel, a reward list, and a claim button."
            caption="Before: the loyalty level took up a full screen of its own."
          />
          <p>
            To make space for the growth fund, I moved the loyalty level out of its own screen and
            into a header that sits on top of the shop. It shows the current level, progress to the
            next bonus, and a claim state when a reward is ready. Putting it on the pages that feed
            it means players see their progress exactly where they earn it, with no extra tab and no
            extra scrolling.
          </p>
          <div className="not-prose flex flex-col gap-4">
            <Figure
              src="/figma/growth-fund-store/one-loyalty-after-progress.png"
              alt="The shop with the loyalty level compressed into a header showing progress toward the next bonus."
              caption="After: progress state, sitting above the bundles."
            />
            <Figure
              src="/figma/growth-fund-store/one-loyalty-after-claim.png"
              alt="The shop loyalty header in its ready to claim state, highlighted green with a claim control."
              caption="After: the same header shifts to a claim state when a reward is ready."
            />
          </div>
          <p>
            The growth fund itself follows the same store language. A clear value line, the milestone
            list, and a single purchase. Players upgrade their HQ, unlock shards at every milestone,
            and claim as they go.
          </p>
          <div className="not-prose flex flex-col gap-4">
            <Figure
              src="/figma/growth-fund-store/one-growth-fund-popup.png"
              alt="Operation New Earth growth fund purchase popup offering up to 750k shards."
              caption="The growth fund offer, built in the game's store style."
            />
            <Figure
              src="/figma/growth-fund-store/one-growth-fund-tab.png"
              alt="The shop growth fund tab listing HQ level milestones with claimed and claimable rewards."
              caption="The milestone list, reachable as its own tab in the shop."
            />
          </div>
        </Section>

        {/* Godzilla x Kong */}
        <Section
          eyebrow="Godzilla x Kong: Titan Chasers"
          title="A fresh growth fund built to nudge"
        >
          <p>
            Godzilla x Kong was a clean design rather than a rescue. I built the growth fund into the
            game&apos;s webshop, using its blue crystal economy and its flatter interface style so it
            read as part of the game from the first glance.
          </p>
          <Figure
            src="/figma/growth-fund-store/gxk-hud.png"
            alt="The Godzilla x Kong: Titan Chasers base view, with the resource bar and the store entry point."
            caption="The game's base view, where players reach the store."
          />
          <p>
            The detail I am happiest with is the near unlock state. When a player is one step away
            from a reward, the card calls it out. It is a small nudge, but it gives players a reason
            to keep going and a clear next target to aim for. I had also designed the webshop entry
            button earlier in my time on the game, so the growth fund slotted in behind an entry
            point players already recognised.
          </p>
          <div className="not-prose flex flex-col gap-4">
            <Figure
              src="/figma/growth-fund-store/gxk-webshop.png"
              alt="The Godzilla x Kong webshop growth fund view, with milestone cards and a near unlock callout on the next reward."
              caption="The webshop growth fund, with the near unlock callout on the next card."
            />
            <Figure
              src="/figma/growth-fund-store/gxk-growth-fund-popup.png"
              alt="The Godzilla x Kong growth fund purchase popup offering up to 100k crystals."
              caption="The growth fund offer in the game's crystal economy."
            />
          </div>
        </Section>

        {/* Outcome */}
        <Section eyebrow="Outcome" title="What I learned">
          <p>Both growth funds shipped and are live on the App Store.</p>
          <p>
            This was a fast turnaround across two live games, and the main thing I took from it was
            how to extend an existing design system without breaking its rules. Working inside two
            different visual languages at once made the principles behind each one easier to see.
          </p>
          <p>
            There was no testing in the process. The work leaned on each game&apos;s established
            patterns and on sign off rather than player data. If I picked up similar work again, I would push
            for a short validation round on the nudges like near unlock, to confirm they actually
            move players.
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
          href="/work/fs2"
          className="group block bg-[#fafafa] rounded-[20px] px-8 py-12 hover:bg-[#f5f5f5] transition-colors"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-ink-faint text-[12px] font-medium tracking-[0.5px] uppercase">
              Next project
            </p>
            <p className="text-ink text-[28px] font-medium leading-tight tracking-[-0.84px]">
              Fallen Sword II Landing page
            </p>
            <p className="text-ink-muted text-[14px] leading-tight">
              A pre-launch landing page built in two weeks, before any real game assets existed.
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

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="not-prose flex flex-col gap-2">
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        sizes="(max-width: 880px) 100vw, 832px"
        className="block w-full h-auto rounded-[16px] border border-line"
      />
      {caption ? (
        <figcaption className="text-ink-faint text-[14px] leading-[1.4]">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

function CoverPlaceholder() {
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
      {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(
        (pos) => (
          <span
            key={pos}
            aria-hidden
            className={`absolute ${pos} h-1.5 w-1.5 rounded-full bg-ink-faint/40 z-[2]`}
          />
        ),
      )}
      <div className="absolute inset-6 rounded-[10px] overflow-hidden">
        <Image
          src="/figma/growth-fund-store/cover.png"
          alt="Godzilla x Kong: Titan Chasers growth fund webshop, with milestone reward cards and a near unlock callout."
          fill
          sizes="(max-width: 880px) 100vw, 832px"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
