import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RevokeOnLeave } from "@/components/RevokeOnLeave";

const HERO_IMAGE = "/figma/reconpass/hero.png";
const TUTORIAL_IMAGE = "/figma/reconpass/tutorial.png";
const HUD_IMAGE = "/figma/reconpass/hud.png";
const UPGRADE_IMAGE = "/figma/reconpass/upgrade.png";
const PASS_FREE_IMAGE = "/figma/reconpass/pass-free.png";
const MISSIONS_IMAGE = "/figma/reconpass/missions.png";

export const metadata = {
  title: "New Earth Recon Pass, Operation New Earth",
  description:
    "Adding the first battle pass to a mobile RTS without adding a single HUD button.",
};

const META = [
  ["Role", "Solo product designer"],
  ["Timeline", "Background project · 2025"],
  ["Tools", "Figma, Photoshop"],
  ["Status", "In development"],
] as const;

const PROCESS = [
  [
    "01",
    "Started ahead of the brief",
    "The feature hadn't been confirmed when I started. I worked on the pass in the background between other projects, designing what the game might want if this ever came in.",
  ],
  [
    "02",
    "Went back into the design system",
    "I move between games often, so muscle memory can't be trusted. Before drawing anything I spent time back inside the Operation: New Earth design system, refamiliarising myself with its components, tokens and iconography, so the pass would land as native to the game rather than something imported from elsewhere.",
  ],
  [
    "03",
    "Second time through the format",
    "This was my second battle pass. The first taught me the format conventions: both lanes visible, horizontal tier flow, claim states, timer treatments. That let me spend the design budget on the game specific fit instead of re solving what the pattern already answers.",
  ],
  [
    "04",
    "Finalised against the spec with my manager",
    "When the feature was greenlit the brief defined tiers, rewards, pricing and mechanics. My mature draft absorbed those specifics through rounds of feedback from my manager, and moved into handoff.",
  ],
] as const;

const DECISIONS = [
  {
    num: "01",
    title: "Made the entry point a card inside Routine Missions",
    copy: "The obvious move for a new feature is a new HUD button. The New Earth HUD was already dense with resource bar, VIP timers, build queues, sale banner, event countdown and chat. Adding a new entry meant either demoting something else or asking players to learn another piece of chrome. Recon Points were earned from Routine Missions, so the pass belonged next to them. I made the entry point a card pinned to the Routine tab of the Missions screen, using the same card language the rest of the game already uses. Familiar shape, new content, no HUD change.",
    image: MISSIONS_IMAGE,
    alt: "Missions screen with the New Earth Recon Pass card pinned to the left of the Routine tab",
  },
  {
    num: "02",
    title: "Taught the loop in one modal",
    copy: "A player seeing the pass for the first time can't infer the loop from the tier screen alone. I designed a first time modal that surfaces the loop as one sentence with the important nouns highlighted, delivered by the game's existing commander character rather than a UI only overlay. One screen, one tap, mental model set before the player starts scanning tiers.",
    image: TUTORIAL_IMAGE,
    alt: "First time modal introducing the New Earth Recon Pass with the commander character",
  },
  {
    num: "03",
    title: "Chevrons that visualise the skip",
    copy: "The progress bar shows Recon Points as a fraction, 1650 of 2000. On its own that number is inert. I added three forward chevrons flowing from the progress bar into the next tier number so the eye moves along an arrow of progress into what's next. The chevrons also hint at the other half of the loop: you can spend points to jump ahead, and the visual invites you to.",
    image: HERO_IMAGE,
    alt: "Recon Pass tier screen showing the Recon Points progress bar with forward chevrons into the next tier number",
  },
  {
    num: "04",
    title: "Kept the earning activity one tap from the rewards",
    copy: "Once the player was in the pass they still needed to earn points to unlock rewards. Rather than making them back out to Routine Missions each time, I kept a Routine Missions button pinned in the pass header. View a tier, jump to the activity, come back and claim. It closes the loop and stays consistent with the parent decision. The pass lives inside missions, and missions are one tap from anywhere in the pass.",
    image: PASS_FREE_IMAGE,
    alt: "Recon Pass tier screen with the Routine Missions shortcut pinned in the header",
  },
  {
    num: "05",
    title: "Bundle presentation",
    copy: "The brief handed me two SKUs: a Premium Pass and a Premium Bundle that adds a Recon Points top up. Rather than sell the difference in copy, I laid the two side by side using the same card shape and let the visual difference (a Recon Points ribbon on the bundle) carry the pitch. Same colour language as the rest of the pass, so the upsell reads in world instead of like a shop bolted on.",
    image: UPGRADE_IMAGE,
    alt: "Upgrade screen showing the Premium Pass and Premium Bundle side by side",
  },
] as const;

export default function ReconPassPage() {
  return (
    <main className="flex min-h-screen flex-col items-stretch bg-white">
      <RevokeOnLeave lockId="reconpass" />
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
                New Earth Recon Pass. Adding a battle pass without adding to the HUD.
              </h1>
              <p className="text-ink-muted text-[16px] md:text-[18px] leading-[1.5]">
                Operation: New Earth didn&apos;t have a battle pass. Designing the first one meant
                fitting a new monetisation feature into a landscape HUD that was already dense
                corner to corner, without training players on a new button.
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

            <HeroImageCard src={HERO_IMAGE} alt="New Earth Recon Pass tier screen" />
          </div>
        </section>

        <Section
          eyebrow="The problem"
          title="The brief defined a battle pass. The HUD had nowhere obvious to put one."
        >
          <p>
            Operation: New Earth is a mobile sci fi base builder with a landscape HUD packed from
            edge to edge. Resource bar up top, VIP and build timers on the left, sale and event
            nudges on the right, chat and menu bar across the bottom. The product spec defined the
            pass: free and premium lanes, Recon Points earned from Routine Missions, tiers and
            rewards. What it didn&apos;t define was how any of it would sit inside a HUD that
            hadn&apos;t been built to hold it.
          </p>
          <blockquote className="border-l-[3px] border-brand-text pl-5 py-2 text-ink text-[20px] font-medium leading-[1.5]">
            The game already had a HUD. My job was to fit a new feature into it without asking
            players to relearn where anything was.
          </blockquote>
          <div className="not-prose pt-4">
            <LandscapeImageCard
              src={HUD_IMAGE}
              alt="Operation New Earth outpost HUD"
            />
          </div>
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
        </Section>

        <Section
          eyebrow="Key decisions"
          title="Five calls that let the pass fit inside the game"
        >
          <div className="not-prose flex flex-col gap-16 pt-2">
            {DECISIONS.map(({ num, title, copy, image, alt }) => (
              <div key={num} className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <p className="text-brand-text text-[40px] md:text-[56px] font-medium leading-none tracking-[-1.68px]">
                    {num}
                  </p>
                  <p className="text-ink text-[24px] font-medium leading-[1.3] tracking-[-0.6px]">
                    {title}
                  </p>
                  <p className="text-ink-muted text-[15px] leading-[1.65]">{copy}</p>
                </div>
                <LandscapeImageCard src={image} alt={alt} />
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Outcome" title="What I learned">
          <p>
            Working across multiple games means you can&apos;t rely on muscle memory. Before
            drawing this pass I went back into the New Earth design system, refamiliarising myself
            with its components, tokens and iconography, so the work looked like the game rather
            than something carried in from elsewhere. That discipline pointed the whole project
            in one direction: nest, don&apos;t add. Every decision above avoids extending the HUD.
            The pass hides inside Routine Missions, the entry point uses the game&apos;s existing
            card pattern, the premium colour is the game&apos;s premium currency colour, the
            earning activity is one tap away rather than a new destination. On a mature product,
            the more experienced move is often not adding. It&apos;s finding where the new feature
            can live inside what&apos;s already there.
          </p>
          <p>
            This was also a background project. The feature hadn&apos;t been confirmed when I
            started, so I built it slowly, with rounds of feedback from my manager, on my own time
            between other work. When the ask officially landed the design was already mature.
            Reading the roadmap and getting work ready before it&apos;s asked for turns
            &ldquo;greenlit&rdquo; into &ldquo;landed&rdquo; in a much shorter jump.
          </p>
          <p>
            As with the last battle pass, there was no user testing on this one, and there
            won&apos;t be pre launch. The decisions are backed by design reasoning, senior
            critique, and the game&apos;s design system rather than user data.
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
              Project name · short hook
            </p>
            <p className="text-ink-muted text-[14px] leading-tight">
              A one line teaser describing the next project.
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

function HeroImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative w-full aspect-[16/9] rounded-[20px] border-[1.5px] border-line overflow-hidden mt-6"
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
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 880px) 100vw, 832px"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}

function LandscapeImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full aspect-[16/9] rounded-[16px] border-[1.5px] border-line overflow-hidden bg-card-tint">
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
      <div className="absolute inset-4 rounded-[10px] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 880px) 100vw, 832px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
