"use client";

import { useState } from "react";
import Link from "next/link";
import { PvShell } from "@/components/site/PvShell";
import { PvCaseHero } from "@/components/site/PvCaseHero";
import { PvBand } from "@/components/site/PvHatch";
import { PvFooter } from "@/components/site/PvFooter";
import {
  PvBody,
  PvP,
  PvQuote,
  PvSection,
  PvSectionBleed,
  PvSteps,
} from "@/components/site/PvProse";
import { PvLightbox, type LightboxImage } from "@/components/site/PvLightbox";
import { PvPhones, PvPhoneRow } from "@/components/site/PvPhones";

const NEXT_HEADING_GRADIENT =
  "linear-gradient(180.10035450598858deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";

// Content carried over from the light case study at /work/battle-pass, rebuilt
// on the preview design system so it matches the Growth Funds page.
const PROCESS = [
  {
    n: "01",
    title: "Understood the Brief",
    body: "Started with the product spec. Tiers, rewards, mechanics, naming, all defined. My job was figuring out how it would actually look and live in the game.",
  },
  {
    n: "02",
    title: "Audited the UI",
    body: "Audited what each screen actually needed to show and what it didn't. Decided what to keep, what to compress, and what to move so the battle pass could earn its place without crowding the rest.",
  },
  {
    n: "03",
    title: "Research & Design",
    body: "Studied how other mobile strategy games handled battle pass UI, then designed within the existing C&C design system. Borrowed conventions where they served the player, rejected them where they didn't fit the game's tone.",
  },
  {
    n: "04",
    title: "Critique",
    body: "Reviewed with senior designers and refined details for hand-off. The art team produced the final illustration and atmospheric art; my work was the layout, components, and flows.",
  },
];

type Shot = { src: string; alt: string };

// Decisions with a screen show it beside the text; the HUD button and the
// expanded dropdown have no sharp capture yet, so those two stand as text.
const DECISIONS: { n: string; title: string; body: string; shots?: Shot[] }[] = [
  {
    n: "01",
    title: "Moved Daily Trials into the Battle Pass",
    body: "Daily Trials already lived as their own screen. They were also the only way to earn battle pass points, which meant the activity sat in one place and the progression sat in another. I moved them inside the Battle Pass as a tab so both lived in the same screen. Complete trials, earn points, unlock rewards. One loop, one place.",
    shots: [{ src: "/media/bp-trials.webp", alt: "The Spoils of Conquest screen with Daily Trials as a tab inside the battle pass." }],
  },
  {
    n: "02",
    title: "Turned a fixed claim banner into a dropdown",
    body: "The Claim 15 Daily Trials panel used to sit as a permanent header at the top of the screen. It mattered for ten seconds a day and stole space the rest of the time. I collapsed it into a dropdown that auto-expands the moment a claim is ready. The prominence shows up when it matters and disappears when it doesn't.",
  },
  {
    n: "03",
    title: "Added a HUD button without taking from the game",
    body: "Mobile RTS HUDs are full. Every pixel already has a job. Adding a battle pass entry meant finding a slot that felt obvious without making players relearn the interface they already knew.",
  },
  {
    n: "04",
    title: "Made progress easy to find in a long list",
    body: "A battle pass is a long, vertical list. Without help, players open it at the top and scroll to find where they are. Instead, the pass opens already scrolled to the tier you're on. The chest button in the header acts as a smart jump: tap once to skip to the final reward, tap again to drop back to your tier.",
    shots: [{ src: "/media/bp-rewards.webp", alt: "The reward track: free and Exalted rewards across each tier." }],
  },
  {
    n: "05",
    title: "Gave the feature one place to explain itself",
    body: "New players needed to understand what the battle pass was and what premium unlocked without leaving the screen. I laid out an info popup that leads with the value up top, follows with a short progression explainer, and ends on two clear actions: view the daily trials or unlock premium.",
    shots: [
      { src: "/media/bp-info.webp", alt: "The info popup: the value, a short progression explainer, and two actions." },
      { src: "/media/bp-exalted.webp", alt: "Unlock Exalted Tier: the two premium options and their prices." },
    ],
  },
];

/** Runs of decisions that do or don't have screens, so screen rows can sit
    together and share their rules. */
function groupDecisions() {
  const groups: (typeof DECISIONS)[] = [];
  for (const d of DECISIONS) {
    const last = groups[groups.length - 1];
    if (last && !!last[0].shots === !!d.shots) last.push(d);
    else groups.push([d]);
  }
  return groups;
}

/** Screen rows alternate sides, counting only the rows that have screens. */
function sideOf(n: string): "left" | "right" {
  const withShots = DECISIONS.filter((d) => d.shots);
  return withShots.findIndex((d) => d.n === n) % 2 === 0 ? "left" : "right";
}

export default function BattlePassCaseStudy() {
  const [zoom, setZoom] = useState<LightboxImage>(null);

  return (
    <PvShell>
      <PvCaseHero
        title="Making a new feature feel like it always belonged"
        intro="Warhammer: Chaos & Conquest didn't have a battle pass when I joined the project. Designing one meant fitting a major new monetisation feature into a HUD, screen system, and player ritual that had been live for years."
        role="UX designer"
        status="Shipped"
      />

      <PvBand />

      <PvSectionBleed eyebrow="Overview" heading="Spoils of Conquest">
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          <PvPhones
            onZoom={setZoom}
            shots={[
              { src: "/media/bp-rewards.webp", alt: "The Spoils of Conquest reward track." },
              { src: "/media/bp-trials.webp", alt: "Daily Trials, the way to earn Conquest points." },
              { src: "/media/bp-exalted.webp", alt: "Unlocking the Exalted tier." },
            ]}
          />
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSection
        eyebrow="The problem"
        heading="The brief defined a battle pass. It didn't define where it would live."
      >
        <PvBody>
          <PvP>
            Chaos &amp; Conquest is a long-running mobile strategy game with a dense HUD, a busy
            resource bar, and a screen system that players had built habits around for years. The
            product spec defined the battle pass: tiers, rewards, naming, mechanics. What it
            didn&apos;t define was how any of it fit into a UI that hadn&apos;t been built to
            accommodate it.
          </PvP>
          <PvQuote>
            The hardest part wasn&apos;t designing it. It was finding room for it.
          </PvQuote>
        </PvBody>
      </PvSection>

      <PvBand />

      <PvSectionBleed eyebrow="The Process" heading="How I worked">
        <PvSteps steps={PROCESS} />
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Key Decisions" heading="Five changes that made room">
        <div className="flex w-full shrink-0 flex-col items-start gap-14 pt-2 lg:gap-20">
          {groupDecisions().map((group) =>
            group[0].shots ? (
              <div key={group[0].n} className="flex w-full shrink-0 flex-col">
                {group.map((d) => (
                  <PvPhoneRow key={d.n} shots={d.shots!} side={sideOf(d.n)} onZoom={setZoom}>
                    <h3 className="text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[24px] lg:leading-[32px]">{d.title}</h3>
                    <p className="w-full max-w-[720px] text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[30px]">{d.body}</p>
                  </PvPhoneRow>
                ))}
              </div>
            ) : (
              group.map((d) => (
                <div
                  key={d.n}
                  className="grid w-full shrink-0 grid-cols-1 gap-3 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-x-16 lg:px-16"
                >
                  <h3 className="text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[24px] lg:leading-[32px]">{d.title}</h3>
                  <p className="w-full max-w-[720px] text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[30px]">{d.body}</p>
                </div>
              ))
            ),
          )}
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSection eyebrow="Outcome" heading="What I learned">
        <PvBody>
          <PvP>
            This was an early project for me, and it&apos;s still the one I learned the most from.
            Working from someone else&apos;s spec, inside someone else&apos;s game, on someone
            else&apos;s design system, I learned that good design in a live product is rarely about
            invention. It&apos;s about finding the smallest set of changes that make a new feature
            feel like it always belonged. The dropdown, the tab restructure, the HUD slot. None of
            those were exciting on their own, but together they made the Battle Pass feel native
            rather than bolted on.
          </PvP>
          <PvP>
            There was no user testing on this project. The team&apos;s process leaned on real player
            behaviour after launch rather than testing in advance. The decisions in this case study
            are backed by design reasoning and senior critique, not user data. If I picked up a
            feature this big again, I&apos;d make the case for a testing round before launch.
          </PvP>
        </PvBody>
      </PvSection>

      <PvBand />

      <section className="flex w-full flex-col items-center border-b border-pv-border px-4 py-10 lg:py-16">
        <div className="flex shrink-0 flex-col items-center gap-6">
          <div className="flex shrink-0 flex-col items-center gap-3">
            <p className="whitespace-nowrap text-[12px] font-medium leading-[16px] text-pv-muted">
              Next Project
            </p>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <p
                className="w-full max-w-[323px] bg-clip-text text-center text-[24px] font-medium leading-[32px] text-transparent lg:max-w-[560px] lg:text-[34px] lg:leading-[44px]"
                style={{ backgroundImage: NEXT_HEADING_GRADIENT }}
              >
                Growth Fund and Store Bundles
              </p>
              <p className="w-full max-w-[297px] text-center text-[14px] font-normal leading-[17.5px] text-[#666] lg:max-w-[520px] lg:text-[16px] lg:leading-[24px]">
                A growth fund monetisation feature, shipped inside two live App Store games.
              </p>
            </div>
          </div>
          <Link
            href="/work/growth-fund-store"
            className="pv-primary pv-stroke pv-stroke-btn relative flex h-[44px] w-[156px] shrink-0 items-center justify-center gap-2 rounded-[10px] px-[10px] py-2 text-[16px] font-medium leading-[24px] text-pv-bg shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] transition-[transform,box-shadow,background-image] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_10px_22px_-8px_rgba(241,250,56,0.45)] active:translate-y-0 active:duration-75"
          >
            View Project
          </Link>
        </div>
      </section>

      <PvBand />

      <PvFooter />

      <PvLightbox image={zoom} onClose={() => setZoom(null)} />
    </PvShell>
  );
}
