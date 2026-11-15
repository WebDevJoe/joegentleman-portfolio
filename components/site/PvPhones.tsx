"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { MEDIA_DIMS } from "@/lib/media-dims";
import type { LightboxImage } from "./PvLightbox";

type Shot = { src: string; alt: string };
type Zoom = (img: LightboxImage) => void;

const PANEL =
  "flex w-full shrink-0 items-start justify-center gap-3 border-y border-pv-border bg-[#141414] px-4 py-8 sm:gap-6 lg:gap-12 lg:py-14";

/** A row of phone screens on a dark panel, each one opening in the lightbox.
    Each phone stops at 300px wide, so two or three sit side by side even on a
    phone, and each keeps its own height. */
export function PvPhones({
  shots,
  onZoom,
  className = PANEL,
}: {
  shots: Shot[];
  onZoom: Zoom;
  className?: string;
}) {
  return (
    <div className={className}>
      {shots.map((s) => {
        const [w, h] = MEDIA_DIMS[s.src] ?? [1179, 1977];
        return (
          <button
            key={s.src}
            type="button"
            onClick={() => onZoom({ src: s.src, alt: s.alt })}
            aria-label={`Preview: ${s.alt}`}
            className="w-full max-w-[300px] min-w-0 cursor-zoom-in overflow-hidden rounded-[18px] border border-white/10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-smooth hover:-translate-y-1 lg:rounded-[24px]"
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={w}
              height={h}
              quality={90}
              sizes="(min-width: 640px) 300px, 45vw"
              className="block h-auto w-full"
            />
          </button>
        );
      })}
    </div>
  );
}

/** Text beside its phone screens. From lg the screens sit in a dark panel
    the height of the row, on the side given, so consecutive rows can swap
    sides. On a phone the text always comes first and the screens follow.
    Consecutive rows share a single rule between them. */
export function PvPhoneRow({
  children,
  shots,
  side = "left",
  onZoom,
}: {
  children: ReactNode;
  shots: Shot[];
  side?: "left" | "right";
  onZoom: Zoom;
}) {
  const left = side === "left";
  return (
    <div className="grid w-full shrink-0 grid-cols-1 gap-6 pt-12 first:pt-0 lg:grid-cols-2 lg:gap-0 lg:border-b lg:border-pv-border lg:pt-0 lg:first:border-t">
      <div
        className={`flex flex-col items-start justify-center gap-3 px-4 lg:gap-5 lg:px-16 lg:py-14 ${
          left ? "lg:order-2" : ""
        }`}
      >
        {children}
      </div>
      <div
        className={`flex items-center justify-center border-y border-pv-border bg-[#141414] px-4 py-8 lg:border-y-0 lg:px-10 lg:py-14 ${
          left ? "lg:order-1 lg:border-r" : "lg:border-l"
        }`}
      >
        <PvPhones
          shots={shots}
          onZoom={onZoom}
          className="flex w-full items-start justify-center gap-3 sm:gap-6 lg:gap-8"
        />
      </div>
    </div>
  );
}
