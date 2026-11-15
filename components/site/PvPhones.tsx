"use client";

import Image from "next/image";
import { MEDIA_DIMS } from "@/lib/media-dims";
import type { LightboxImage } from "./PvLightbox";

const PANEL =
  "flex w-full shrink-0 items-start justify-center gap-3 border-y border-pv-border bg-[#141414] px-4 py-8 sm:gap-6 lg:gap-12 lg:py-14";

/** A row of phone screens on a dark panel, each one opening in the lightbox.
    Each phone is at most 300px wide, so two or three sit side by side even on
    a phone, and every one keeps its own height. */
export function PvPhones({
  shots,
  onZoom,
  className = PANEL,
  itemClassName = "max-w-[300px] rounded-[18px] lg:rounded-[24px]",
  sizes = "(min-width: 640px) 300px, 45vw",
}: {
  shots: { src: string; alt: string }[];
  onZoom: (img: LightboxImage) => void;
  className?: string;
  /** Width cap and corners for each screen; a popup wants more room and
      squarer corners than a phone. */
  itemClassName?: string;
  sizes?: string;
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
            className={`w-full min-w-0 cursor-zoom-in overflow-hidden border border-white/10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-smooth hover:-translate-y-1 ${itemClassName}`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={w}
              height={h}
              quality={90}
              sizes={sizes}
              className="block h-auto w-full"
            />
          </button>
        );
      })}
    </div>
  );
}
