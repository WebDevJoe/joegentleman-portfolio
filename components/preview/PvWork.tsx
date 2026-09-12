"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconChevronRight } from "./PvIcons";
import { PvLightbox, type LightboxImage } from "./PvLightbox";
import { PvGutter } from "./PvHatch";

// Figma nodes 1175:271 (section), 1175:272 (header), then four cards.
// The white to grey gradient is shared with the hero headline.
const HEADING_GRADIENT =
  "linear-gradient(180.11083984928297deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";
const ACCENT_GRADIENT =
  "linear-gradient(180deg, rgb(241,250,56) 0%, rgb(250,255,147) 100%)";

type Card = {
  node: string;
  href: string;
  image: string;
  /** Slot ratio. Kept close to each cover's own so nothing is cropped hard or
      scaled up: the battle pass shot is three screens side by side and a square
      slot threw two of them away and blew the third up almost threefold. */
  ratio: string;
  title: string;
  body: string;
};

const CARDS: Card[] = [
  {
    node: "1175:289",
    href: "/preview/work/growth-fund-store",
    image: "/preview/one-5.webp",
    ratio: "aspect-[722/408]",
    title: "Growth Fund Bundles",
    body: "A paid progression track shipped into two live App Store games, built inside each one's own store and design system.",
  },
  {
    node: "1175:294",
    href: "/preview/work/fs2",
    image: "/preview/fs2-cover.webp",
    ratio: "aspect-square",
    title: "Fallen Sword II Landing page",
    body: "A pre-launch landing page built in two weeks to drive wishlists, name reservations and press kit downloads.",
  },
  {
    node: "1175:299",
    href: "/preview/work/battle-pass",
    image: "/preview/bp-hero.webp",
    ratio: "aspect-[722/388]",
    title: "Battle Pass Chaos & Conquest",
    body: "A battle pass fitted into a five year old mobile RTS HUD without crowding what was already there.",
  },
  {
    node: "1175:275",
    href: "/preview/work/worksheets",
    image: "/preview/worksheets-dashboard.webp",
    ratio: "aspect-[361/329]",
    title: "Worksheets",
    body: "Time and attendance for a cleaning contractor in Moray. Timesheets a team will actually fill in.",
  },
];

function WorkCard({
  card,
  onZoom,
  className = "",
}: {
  card: Card;
  onZoom: (img: LightboxImage) => void;
  className?: string;
}) {
  return (
    // 24 above the text and 24 below it, so the caption block sits evenly
    // between its own cover and the next one.
    <div
      data-node-id={card.node}
      className={`group flex w-full flex-col items-center gap-6 lg:min-w-0 lg:gap-0 ${className}`}
    >
      <button
        type="button"
        onClick={() => onZoom({ src: card.image, alt: card.title })}
        aria-label={`Preview ${card.title}`}
        className={`relative w-full shrink-0 cursor-zoom-in overflow-hidden border-y border-pv-border ${card.ratio} lg:aspect-[4/3] lg:border-t-0`}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          // The column is 1152 at xl, so a flat 361 had Next serving the 750w
          // variant and the browser scaling it up by half.
          sizes="(min-width: 1024px) 46vw, (min-width: 768px) calc(100vw - 128px), (min-width: 640px) calc(100vw - 64px), 100vw"
          className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-pv-bg/0 transition-colors duration-300 ease-smooth group-hover:bg-pv-bg/10"
        />
      </button>

      <div className="mx-auto flex w-full max-w-[760px] shrink-0 flex-col items-start gap-3 px-4 lg:p-8">
        <div className="flex w-full flex-col items-start gap-1">
          <p className="whitespace-nowrap text-[18px] font-medium leading-[28px] text-pv-fg lg:text-[18px] lg:leading-[26px]">
            {card.title}
          </p>
          <p className="w-full text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[15px] lg:leading-[24px]">
            {card.body}
          </p>
        </div>
        <Link
          href={card.href}
          className="group/link flex shrink-0 items-center gap-1 transition-opacity duration-200 ease-smooth hover:opacity-80"
        >
          <p
            className="whitespace-nowrap bg-clip-text text-[14px] font-medium leading-[20px] text-transparent"
            style={{ backgroundImage: ACCENT_GRADIENT }}
          >
            View Case Study
          </p>
          <IconChevronRight className="size-4 transition-transform duration-300 ease-smooth group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

// From lg the grid runs to the bottom edge of the section: the bottom padding
// left a dead strip between the last row and the band. The section border stays
// and is what closes the grid off along the bottom.
export function PvWork() {
  const [zoom, setZoom] = useState<LightboxImage>(null);

  return (
    <section className="flex w-full flex-col items-center gap-10 border-b border-pv-border py-10 lg:gap-14 lg:pb-0 lg:pt-16">
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-start gap-2 px-4 text-center lg:px-8">
        <h2
          className="w-full bg-clip-text text-[30px] font-medium leading-[36px] text-transparent lg:text-[44px] lg:leading-[52px]"
          style={{ backgroundImage: HEADING_GRADIENT }}
        >
          My Work
        </h2>
        <p className="w-full text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[28px]">
          Selected case studies across game UI, product, and web.
        </p>
      </div>

      {/* One stacked column on the phone. From lg it is a 2x2 grid with 16px
          tracks between the columns and between the rows, and another across
          the top. The top track is one strip across all three columns, so the
          stroke closing the grid runs unbroken edge to edge, the same as the
          section border does along the bottom. The track between the rows runs
          the same way, all the way across, and the divider breaks at it: the
          horizontals are continuous and the vertical is the one interrupted.
          Every gutter is hidden below lg, so the phone still gets four cards in
          source order with nothing between them. */}
      <div className="flex w-full flex-col items-center gap-6 lg:grid lg:grid-cols-[1fr_16px_1fr] lg:grid-rows-[16px_auto_16px_auto] lg:gap-0">
        <PvGutter axis="x" className="lg:col-start-1 lg:col-span-3 lg:row-start-1" />

        <WorkCard card={CARDS[0]} onZoom={setZoom} className="lg:col-start-1 lg:row-start-2" />
        <WorkCard card={CARDS[1]} onZoom={setZoom} className="lg:col-start-3 lg:row-start-2" />

        <PvGutter axis="x" className="lg:col-start-1 lg:col-span-3 lg:row-start-3" />

        <WorkCard card={CARDS[2]} onZoom={setZoom} className="lg:col-start-1 lg:row-start-4" />
        <WorkCard card={CARDS[3]} onZoom={setZoom} className="lg:col-start-3 lg:row-start-4" />

        <PvGutter axis="y" className="lg:col-start-2 lg:row-start-2" />
        <PvGutter axis="y" className="lg:col-start-2 lg:row-start-4" />
      </div>
      <PvLightbox image={zoom} onClose={() => setZoom(null)} />
    </section>
  );
}
