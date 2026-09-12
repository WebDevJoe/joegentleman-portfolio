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
} from "@/components/preview/PvProse";
import { PvLightbox, type LightboxImage } from "@/components/preview/PvLightbox";

const NEXT_HEADING_GRADIENT =
  "linear-gradient(180.10035450598858deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";
const ACCENT_GRADIENT = "linear-gradient(180deg, #f1fa38 0%, #faff93 100%)";
const LIVE_URL = "https://fs2.game/";

// Content carried over from the light case study at /work/fs2, rebuilt on the
// preview design system. Every walkthrough shot keeps its own aspect ratio:
// they run from 3.25 wide down to 0.41 tall, so a fixed slot would ruin them.
const WALKTHROUGH = [
  {
    n: "01",
    src: "/preview/fs2-1.webp",
    title: "Hero",
    paragraphs: [
      "Two column layout. Brand and the primary actions on the left, key art on the right. A single illustration sets the tone for the whole world, so it takes the larger half of the fold.",
      "The left column stays on the job: logo, one line on what the game is, and the wishlist and reservation actions within reach before anyone scrolls.",
    ],
    caption:
      "Hero section with the Fallen Sword II logo on the left and a hooded character walking toward a glowing portal on the right.",
  },
  {
    n: "02",
    src: "/preview/fs2-2.webp",
    title: "About",
    paragraphs: [
      "Six feature blocks, alternating sides. Each block is the same template: art, tagline, description. Identical slots for the copy team to fill, so the section stays coherent however the words land and however many features make the final cut.",
      "Flipping the art from side to side keeps a long section from reading as a flat list, and gives each feature its own moment as you scroll past.",
    ],
    caption: "About section: six feature blocks alternating left and right.",
  },
  {
    n: "03",
    src: "/preview/fs2-3.webp",
    title: "Secure it early",
    paragraphs: [
      "Username reservation gets its own block. It speaks only to returning Fallen Sword players, the ones who care about keeping their old name, so it sits apart and talks to them directly.",
      "Scoping it this way keeps the promise out of the main flow, where it would only confuse a new player who has no name to protect.",
    ],
    caption: "Secure It Early section: username reservation with a Log In control.",
  },
  {
    n: "04",
    src: "/preview/fs2-4.webp",
    title: "The bottom of the page",
    paragraphs: [
      "Media carousel, a second wishlist callback, community and newsletter, then the footer. The page is one long scroll, so the closing stretch repeats the main action for anyone who read all the way down before deciding.",
      "Each block is self contained, which let the page ship in pieces and made it easy to reorder as priorities moved.",
    ],
    caption:
      "Bottom of the page: media gallery, Be Prepared Wishlist on Steam, Community newsletter, and footer.",
  },
];

export default function Fs2CaseStudy() {
  const [zoom, setZoom] = useState<LightboxImage>(null);

  return (
    <PvShell>
      <PvCaseHero
        title="Fallen Sword II Landing page"
        intro="Fallen Sword II is the sequel to a long running browser RPG. This was its first public page, built in two weeks to introduce the world and drive three actions: wishlist on Steam, reserve a name, and download the press kit."
        role="Designer"
        status="Live at fs2.game"
      />

      <PvBand />

      <PvSectionBleed eyebrow="Overview" heading="The page as it shipped">
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          <PvFigure
            src="/preview/fs2-cover.webp"
            caption="The Fallen Sword II landing page."
            natural
            onZoom={setZoom}
          />
          <div className="w-full px-4">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pv-primary pv-stroke pv-stroke-btn relative flex h-[44px] w-[156px] shrink-0 items-center justify-center gap-2 rounded-[10px] px-[10px] py-2 text-[16px] font-medium leading-[24px] text-pv-bg shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] transition-[transform,box-shadow,background-image] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_10px_22px_-8px_rgba(241,250,56,0.45)] active:translate-y-0 active:duration-75"
            >
              Visit fs2.game
            </a>
          </div>
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSection eyebrow="The brief" heading="One page, three actions to drive">
        <PvBody>
          <PvP>
            This was the game&apos;s first public presence, so the page had to introduce the world
            and give people a way to commit in the same scroll. I built it around three actions:
            wishlist on Steam, reserve a name, and download the press kit. Everything else on the
            page exists to support one of those.
          </PvP>
          <PvQuote>
            Introduce the world and give people a reason to commit, in a single scroll.
          </PvQuote>
        </PvBody>
      </PvSection>

      <PvBand />

      <PvSectionBleed eyebrow="The page" heading="A walk through, top to bottom">
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          <PvPInset>
            One continuous scroll, each part its own block so it could ship in pieces and be
            reordered as priorities moved. Here is how it reads from the top.
          </PvPInset>

          {WALKTHROUGH.map((s) => (
            <div key={s.n} className="flex w-full shrink-0 flex-col items-start gap-4">
              <div className="mx-auto flex w-full max-w-[760px] flex-col items-start gap-1.5 px-4 lg:px-8">
                <p
                  className="whitespace-nowrap bg-clip-text text-[14px] font-medium leading-[20px] text-transparent"
                  style={{ backgroundImage: ACCENT_GRADIENT }}
                >
                  {s.n}
                </p>
                <p className="text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[24px] lg:leading-[32px]">{s.title}</p>
              </div>
              {s.paragraphs.map((p) => (
                <PvPInset key={p.slice(0, 24)}>{p}</PvPInset>
              ))}
              <PvFigure src={s.src} caption={s.caption} natural onZoom={setZoom} />
            </div>
          ))}
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSection eyebrow="Outcome" heading="What I took from it">
        <PvBody>
          <PvP>The page is live at fs2.game as the game&apos;s first public presence.</PvP>
          <PvP>
            The interesting part was holding a whole world together on one page while keeping three
            separate actions clear. Leaning on one strong illustration and a tight set of actions
            mattered more than filling the page with content.
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
                Battle Pass Chaos &amp; Conquest
              </p>
              <p className="w-full max-w-[297px] text-center text-[14px] font-normal leading-[17.5px] text-[#666] lg:max-w-[520px] lg:text-[16px] lg:leading-[24px]">
                A battle pass fitted into a five year old mobile RTS HUD.
              </p>
            </div>
          </div>
          <Link
            href="/preview/work/battle-pass"
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
