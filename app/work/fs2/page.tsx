"use client";

import { useState } from "react";
import Link from "next/link";
import { PvShell } from "@/components/site/PvShell";
import { PvCaseHero } from "@/components/site/PvCaseHero";
import { PvBand } from "@/components/site/PvHatch";
import { PvFooter } from "@/components/site/PvFooter";
import {
  PvBody,
  PvFigure,
  PvP,
  PvPInset,
  PvQuote,
  PvSection,
  PvSectionBleed,
  PvSteps,
} from "@/components/site/PvProse";
import { PvLightbox, type LightboxImage } from "@/components/site/PvLightbox";

const NEXT_HEADING_GRADIENT =
  "linear-gradient(180.10035450598858deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";
const LIVE_URL = "https://fs2.game/";

// Every image here is cut from the Figma design (Playground, Desktop frame
// 877:35714) exported at 2x, so it stays sharp on a retina screen at the full
// column width.

const CHALLENGES = [
  {
    n: "new",
    title: "A world I hadn't worked on",
    body: "I hadn't worked on Fallen Sword before. The world, tone and art direction were already set in the game's design bible, so getting it right meant designing from that document, not from my own taste.",
  },
  {
    n: "audiences",
    title: "Two audiences",
    body: "Returning players want continuity, starting with their old name. New players need to understand the world and why they should care.",
  },
  {
    n: "asks",
    title: "Several asks on one page",
    body: "Wishlist on Steam, pre-register on mobile, reserve a name, join the newsletter and download the press kit, all competing for the same scroll.",
  },
];

const DECISIONS = [
  {
    title: "One job above the fold",
    body: "Logo, one line, the store buttons and a single piece of key art taking the bigger half of the screen. Wishlisting is the action. Mobile pre-registration sits beside it as the same ask on other platforms, not a second one.",
    src: "/media/fs2-hero.webp",
    alt: "The hero: Fallen Sword II logo, Wishlist Now with Steam, Google Play and App Store, beside the key art.",
  },
  {
    title: "One template, six features",
    body: "Every About block is art, title and description, alternating sides. Copy could land late and features could be cut without the section falling apart, and flipping the art keeps a long section from reading as a list.",
    src: "/media/fs2-about-pair.webp",
    alt: "The first two About blocks, Live the Legend and Become a Hero, with the art on alternating sides.",
  },
  {
    title: "Talk to veterans on their own",
    body: "Secure It Early only speaks to returning Fallen Sword players. Kept out of the main flow, it can't confuse someone who has no name to protect.",
    src: "/media/fs2-secure.webp",
    alt: "Secure It Early: reserve your username, with a Log in button for returning players.",
  },
  {
    title: "Ask again at the end",
    body: "Anyone who reads all the way down gets the wishlist a second time, followed by community, the newsletter and the press kit, so nobody reaches the bottom without a next step.",
    src: "/media/fs2-wishlist.webp",
    alt: "Be Prepared: the second wishlist ask near the bottom of the page, with the Add to Steam Wishlist button.",
  },
];

const REFLECTION = [
  {
    n: "tracking",
    title: "Agree on tracking before launch",
    body: "The page went live without events on each action, so I can't say which block did the work. Next time I'd set that up first, so the page is judged on more than being live.",
  },
  {
    n: "kit",
    title: "Start with a small kit",
    body: "I made the UI assets as the page needed them. A small component sheet built from the bible up front would have been quicker, and the team could reuse it for the next page.",
  },
];

/** A decision: title left and reasoning right from lg, then its screen at the
    full width of the column. */
function Decision({
  d,
  onZoom,
}: {
  d: (typeof DECISIONS)[number];
  onZoom: (img: LightboxImage) => void;
}) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start gap-6 lg:gap-8">
      <div className="grid w-full grid-cols-1 gap-2 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-x-16 lg:px-16">
        <h3 className="text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[22px] lg:leading-[30px]">{d.title}</h3>
        <p className="w-full max-w-[720px] text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[30px]">
          {d.body}
        </p>
      </div>
      <PvFigure src={d.src} caption={d.alt} natural onZoom={onZoom} />
    </div>
  );
}

export default function Fs2CaseStudy() {
  const [zoom, setZoom] = useState<LightboxImage>(null);

  return (
    <PvShell>
      <PvCaseHero
        title="Fallen Sword II Landing page"
        intro="The first public page for Fallen Sword II, the sequel to a long running browser RPG. Designed in two weeks to introduce the world and turn interest into wishlists, name reservations and press coverage."
        meta={[
          { label: "Role", value: "Sole designer" },
          { label: "Timeline", value: "Two weeks" },
          { label: "Art and copy", value: "The game's artists and designers" },
          { label: "Status", value: "Live at fs2.game", href: LIVE_URL },
        ]}
      />

      <PvBand />

      <PvSectionBleed eyebrow="Overview" heading="The whole page at a glance">
        <div className="w-full shrink-0 pt-2">
          <PvFigure
            src="/media/fs2-overview.webp"
            caption="The full Fallen Sword II landing page, top to bottom in three columns."
            natural
            onZoom={setZoom}
          />
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSection eyebrow="Context" heading="A sequel that needed a front door">
        <PvBody>
          <PvP>
            Announcing Fallen Sword II meant players, press and the Steam page all needed somewhere
            to point. The brief was simple: get it live as soon as possible. That gave the page two
            weeks from first frame to launch.
          </PvP>
          <PvQuote>
            Make it feel like Fallen Sword, make the wishlist the obvious next step, and get it out
            fast.
          </PvQuote>
        </PvBody>
      </PvSection>

      <PvBand />

      <PvSectionBleed eyebrow="The challenge" heading="A new world to me, with a lot to say">
        <PvSteps steps={CHALLENGES} />
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Craft" heading="Working from the design bible">
        <div className="flex w-full shrink-0 flex-col items-start gap-6 pt-2 lg:gap-8">
          <PvPInset>
            I treated the bible as the spec: its palette, type, ornament and tone. The art and copy
            came from the game&apos;s artists and designers. Every UI asset on the page is mine:
            the buttons, frames, double line dividers, accents and icons, drawn to sit inside the
            game&apos;s art rather than on top of it.
          </PvPInset>
          <PvFigure
            src="/media/fs2-community.webp"
            caption="The Community section as it shipped: a heading with double line dividers, the newsletter form with its Sign Up button, and the social row."
            natural
            onZoom={setZoom}
          />
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="The decisions" heading="Four calls that shaped the page">
        <div className="flex w-full shrink-0 flex-col items-start gap-14 pt-2 lg:gap-20">
          {DECISIONS.map((d) => (
            <Decision key={d.title} d={d} onZoom={setZoom} />
          ))}
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Reflection" heading="What I'd do differently">
        <PvSteps steps={REFLECTION} />
      </PvSectionBleed>

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
                Battle Pass Chaos &amp; Conquest
              </p>
              <p className="w-full max-w-[297px] text-center text-[14px] font-normal leading-[17.5px] text-[#666] lg:max-w-[520px] lg:text-[16px] lg:leading-[24px]">
                A battle pass fitted into a five year old mobile RTS HUD.
              </p>
            </div>
          </div>
          <Link
            href="/work/battle-pass"
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
