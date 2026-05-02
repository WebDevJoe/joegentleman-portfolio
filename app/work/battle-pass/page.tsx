import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RevokeOnLeave } from "@/components/RevokeOnLeave";

const HERO_IMAGE = "/figma/battle-pass/hero.png";

export const metadata = {
  title: "Battle pass — Chaos & Conquest",
  description:
    "Designing a battle pass that fit naturally into a 5-year-old mobile RTS HUD.",
};

const META = [
  ["Role", "Solo product designer"],
  ["Timeline", "3 weeks · 2025"],
  ["Tools", "Figma, Photoshop"],
  ["Status", "Shipped"],
] as const;

const PROCESS = [
  [
    "01",
    "Understood the Brief",
    "Started with the product spec. Tiers, rewards, mechanics, naming, all defined. My job was figuring out how it would actually look and live in the game.",
  ],
  [
    "02",
    "Audited the UI",
    "Audited what each screen actually needed to show and what it didn't. Decided what to keep, what to compress, and what to move so the battle pass could earn its place without crowding the rest.",
  ],
  [
    "03",
    "Research & Design",
    "Studied how other mobile strategy games handled battle pass UI, then designed within the existing C&C design system. Borrowed conventions where they served the player, rejected them where they didn't fit the game's tone.",
  ],
  [
    "04",
    "Critique",
    "Reviewed with senior designers and refined details for hand-off. The art team produced the final illustration and atmospheric art; my work was the layout, components, and flows.",
  ],
] as const;

const DECISIONS = [
  [
    "01",
    "Moved Daily Trials into the Battle Pass",
    "Daily Trials already lived as their own screen. They were also the only way to earn battle pass points, which meant the activity sat in one place and the progression sat in another. I moved them inside the Battle Pass as a tab so both lived in the same screen. Complete trials, earn points, unlock rewards. One loop, one place.",
  ],
  [
    "02",
    "Turned a fixed claim banner into a dropdown",
    "The “Claim 15 Daily Trials” panel used to sit as a permanent header at the top of the screen. It mattered for ten seconds a day and stole space the rest of the time. I collapsed it into a dropdown that auto-expands the moment a claim is ready. The prominence shows up when it matters and disappears when it doesn't.",
  ],
  [
    "03",
    "Added a HUD button without taking from the game",
    "Mobile RTS HUDs are full. Every pixel already has a job. Adding a battle pass entry meant finding a slot that felt obvious without making players relearn the interface they already knew.",
  ],
  [
    "04",
    "Made progress easy to find in a long list",
    "A battle pass is a long, vertical list. Without help, players open it at the top and scroll to find where they are. The screen now opens scrolled to the player's current tier, so the answer to “where am I?” is the first thing you see. The chest button in the header acts as a smart jump: tap it once to skip to the final reward, tap again to come back. Two taps to see the full arc instead of a thumb workout.",
  ],
] as const;

export default function BattlePassPage() {
  return (
    <main className="flex min-h-screen flex-col items-stretch bg-white">
      <RevokeOnLeave lockId="battle-pass-c-and-c" />
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
                Battle pass - Making a new feature feel like it always belonged
              </h1>
              <p className="text-ink-muted text-[16px] md:text-[18px] leading-[1.5]">
                Warhammer: Chaos &amp; Conquest didn&apos;t have a battle pass when I joined the
                project. Designing one meant fitting a major new monetisation feature into a HUD,
                screen system, and player ritual that had been live for years.
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
          eyebrow="The problem"
          title="The brief defined a battle pass. It didn't define where it would live."
        >
          <p>
            Chaos &amp; Conquest is a long-running mobile strategy game with a dense HUD, a busy
            resource bar, and a screen system that players had built habits around for years. The
            product spec defined the battle pass: tiers, rewards, naming, mechanics. What it
            didn&apos;t define was how any of it fit into a UI that hadn&apos;t been built to
            accommodate it.
          </p>
          <blockquote className="border-l-[3px] border-brand-text pl-5 py-2 text-ink text-[20px] font-medium leading-[1.5]">
            The hardest part wasn&apos;t designing it. It was finding room for it.
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
          title="Three calls that fit the battle pass into the game"
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
                <PhoneMock />
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Final designs" title="Where it landed">
          <div className="not-prose pt-2">
            <HeroImageCard />
          </div>
        </Section>

        <Section eyebrow="Outcome" title="What I learned">
          <p>
            This was an early project for me, and it&apos;s still the one I learned the most from.
            Working from someone else&apos;s spec, inside someone else&apos;s game, on someone
            else&apos;s design system, I learned that good design in a live product is rarely about
            invention. It&apos;s about finding the smallest set of changes that make a new feature
            feel like it always belonged. The dropdown, the tab restructure, the HUD slot. None of
            those were exciting on their own, but together they made the Battle Pass feel native
            rather than bolted on.
          </p>
          <p>
            There was no user testing on this project. The team&apos;s process leaned on real
            player behaviour after launch rather than testing in advance. The decisions in this
            case study are backed by design reasoning and senior critique, not user data. If I
            picked up a feature this big again, I&apos;d make the case for a testing round before
            launch.
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
          alt="Battle pass — three screens of Spoils of Conquest in Warhammer: Chaos & Conquest"
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

function PhoneMock() {
  return (
    <div className="w-full md:w-[280px] h-[480px] md:h-[580px] rounded-[36px] border-[1.5px] border-line bg-card-tint relative overflow-hidden flex items-center justify-center shrink-0">
      <span
        aria-hidden
        className="absolute -translate-x-1/2 left-1/2 top-3 h-1.5 w-20 rounded-full bg-ink-faint/40"
      />
      <p className="text-ink-faint text-[14px]">Phone mockup</p>
    </div>
  );
}
