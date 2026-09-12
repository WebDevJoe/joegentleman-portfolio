"use client";

import { useState } from "react";
import Link from "next/link";
import { PvShell } from "@/components/preview/PvShell";
import { PvCaseHero } from "@/components/preview/PvCaseHero";
import { PvBand } from "@/components/preview/PvHatch";
import { PvFooter } from "@/components/preview/PvFooter";
import {
  PvBody,
  PvFigure,
  PvP,
  PvPInset,
  PvQuote,
  PvSection,
  PvSectionBleed,
  PvSteps,
} from "@/components/preview/PvProse";
import { PvLightbox, type LightboxImage } from "@/components/preview/PvLightbox";

const NEXT_HEADING_GRADIENT =
  "linear-gradient(180.10035450598858deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";

// Figma node 1189:32260, 393x6724.
export default function GrowthFundCaseStudy() {
  const [zoom, setZoom] = useState<LightboxImage>(null);

  return (
    <PvShell>
      <PvCaseHero
        title="Growth Funds shipped across 3 live games"
        intro="A growth fund is a paid progression track: players upgrade naturally, hit milestones, and claim rewards along the way. I designed one for three live App Store games, Godzilla x Kong: Titan Chasers and Operation New Earth, working inside the store and design system each game already had."
        role="UI/UX designer"
        status="Shipped"
      />

      <PvBand />

      <PvSectionBleed eyebrow="Overview" heading="Growth Fund Bundles">
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          <PvFigure
            src="/preview/one-5.webp"
            caption="The growth fund bundles as they ship in game."
            natural
            onZoom={setZoom}
          />
        </div>
      </PvSectionBleed>

      <PvBand />

      {/* 1189:34378 */}
      <PvSection eyebrow="The Brief" heading="Two live games, two design systems, one feature to add">
        <PvBody>
          <PvP>
            The growth fund mechanic was defined. What was not defined was how it would live inside
            each game. Both titles were already shipped, each with its own store, its own
            components, and its own art direction. The job was fitting a new monetisation feature
            into interfaces that players already knew, without it looking out of place.
          </PvP>
          <PvP>
            Operation New Earth had a second problem. Its store had no spare room. The loyalty level
            already took up a full screen of its own, so adding a growth fund meant either more
            scrolling tabs or a rethink of what earned its space.
          </PvP>
          <PvQuote>
            Same feature, two games, each with its own store and design system to build inside.
          </PvQuote>
        </PvBody>
      </PvSection>

      <PvBand />

      {/* 1189:34485 */}
      <PvSectionBleed eyebrow="The Process" heading="How I worked">
        <PvSteps
          steps={[
            {
              n: "01",
              title: "Mapped the states",
              body: "Laid out every state the growth fund needed: locked, near unlock, ready to claim, claimed, and maxed. Knowing the states up front kept the design consistent across both games.",
            },
            {
              n: "02",
              title: "Looked at competitors",
              body: "Studied how other live games present growth funds and milestone rewards, then kept the patterns that fit each game.",
            },
            {
              n: "03",
              title: "Designed inside each system",
              body: "Built the screens using each game's existing design system, then added new components that followed the same rules and principles so nothing looked bolted on. The item art was produced by the artists.",
            },
            {
              n: "04",
              title: "Approval and Handoff",
              body: "Reviewed each design with my manager for sign off, then handed the final screens to the developers to build.",
            },
          ]}
        />
      </PvSectionBleed>

      <PvBand />

      {/* 1192:34558 */}
      <PvSectionBleed
        eyebrow="Operation New Earth"
        heading="Making room by turning the loyalty level into a header."
      >
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          <PvPInset>
            Operation New Earth ran its loyalty level as a full screen. Players earned loyalty XP
            buying shards and claimed bonus rewards at each milestone. It worked, but it owned an
            entire screen for something players checked for a few seconds at a time.
          </PvPInset>
          <PvPInset>
            To make space for the growth fund, I moved the loyalty level out of its own screen and
            into a header that sits on top of the shop. It shows the current level, progress to the
            next bonus, and a claim state when a reward is ready. Putting it on the pages that feed
            it means players see their progress exactly where they earn it, with no extra tab and no
            extra scrolling.
          </PvPInset>

          <PvFigure
            src="/preview/one-1.webp"
            caption="After: progress state, sitting above the bundles."
            onZoom={setZoom}
          />
          <PvFigure
            src="/preview/one-2.webp"
            caption="After: the same header shifts to a claim state when a reward is ready."
            onZoom={setZoom}
          />
          <PvFigure
            src="/preview/one-3.webp"
            caption="Tapping the header opens the full loyalty detail."
            onZoom={setZoom}
          />

          <PvPInset>
            The growth fund itself follows the same store language. A clear value line, the
            milestone list, and a single purchase. Players upgrade their HQ, unlock shards at every
            milestone, and claim as they go.
          </PvPInset>

          <PvFigure
            src="/preview/one-4.webp"
            caption="The growth fund offer, built in the game's store style."
            onZoom={setZoom}
          />
          <PvFigure
            src="/preview/one-5.webp"
            caption="The milestone list, reachable as its own tab in the shop"
            onZoom={setZoom}
          />
        </div>
      </PvSectionBleed>

      <PvBand />

      {/* 1192:34649 */}
      <PvSectionBleed
        eyebrow="Godzilla x Kong Titan Chasers"
        heading="A fresh growth fund built to motivate"
      >
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          <PvPInset>
            Godzilla x Kong was a fresh start. I built the growth fund into the game&apos;s webshop
            and matched its flatter, cleaner look, so it felt like part of the game right away.
          </PvPInset>

          <PvFigure
            src="/preview/gxk-1.webp"
            caption="The game's base view, where players reach the store."
            onZoom={setZoom}
          />

          <PvPInset>
            I added a near unlock state to the cards. When a player is one step away from a reward,
            the card calls it out, so they have a reason to keep going and a clear next target to
            aim for. I had also designed the webshop entry button earlier in my time on the game, so
            the growth fund slotted in behind it.
          </PvPInset>

          <PvFigure
            src="/preview/gxk-2.webp"
            caption="The webshop growth fund, with the near unlock callout on the next card."
            onZoom={setZoom}
          />
          <PvFigure
            src="/preview/gxk-3.webp"
            caption="The growth fund offer pop up to ensure its discoverablity."
            onZoom={setZoom}
          />
        </div>
      </PvSectionBleed>

      <PvBand />

      {/* 1192:34723 */}
      <PvSection eyebrow="Outcome" heading="What I learned">
        <PvBody>
          <PvP>Both growth funds shipped and are live on the App Store.</PvP>
          <PvP>
            This was a fast turnaround across two live games, and the main thing I took from it was
            how to extend an existing design system without breaking its rules. Working inside two
            different visual languages at once made the principles behind each one easier to see.
          </PvP>
          <PvP>
            There was no testing in the process. The work leaned on each game&apos;s established
            patterns and on sign off rather than player data. If I picked up similar work again, I
            would push for a short validation round on the nudges like near unlock, to confirm they
            actually move players.
          </PvP>
        </PvBody>
      </PvSection>

      <PvBand />

      {/* 1192:34742 Link */}
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
                Fallen Sword II Landing page
              </p>
              <p className="w-full max-w-[297px] text-center text-[14px] font-normal leading-[17.5px] text-[#666] lg:max-w-[520px] lg:text-[16px] lg:leading-[24px]">
                A pre-launch landing page built in two weeks to drive wishlists and name
                reservations.
              </p>
            </div>
          </div>
          <Link
            href="/preview/work/fs2"
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
