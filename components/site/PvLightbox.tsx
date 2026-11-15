"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { MEDIA_DIMS } from "@/lib/media-dims";

export type LightboxImage = { src: string; alt: string } | null;

export function PvLightbox({
  image,
  onClose,
}: {
  image: LightboxImage;
  onClose: () => void;
}) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!image) return;
    document.addEventListener("keydown", handleKey);
    // stop the page scrolling behind the overlay
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
    };
  }, [image, handleKey]);

  if (!image) return null;
  const [w, h] = MEDIA_DIMS[image.src] ?? [1444, 1444];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
      // Room above the image for the close button, so a tall phone screenshot
      // can never sit underneath it.
      className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-pv-bg/92 px-4 pb-6 pt-[72px] backdrop-blur-[6px] animate-[pv-fade_200ms_cubic-bezier(0.22,1,0.36,1)] lg:p-10"
    >
      {/* Solid and above the image: it used to be a bare outline drawn under
          the picture, easy to miss and, on a phone, covered by it. */}
      <button
        type="button"
        aria-label="Close preview"
        onClick={onClose}
        className="absolute right-4 top-[max(16px,env(safe-area-inset-top))] z-10 grid size-11 place-items-center rounded-full border border-white/20 bg-[#262626] text-pv-fg shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-colors duration-200 ease-smooth hover:border-white/40 hover:bg-[#303030] lg:right-6 lg:top-6"
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
          <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div className="flex max-h-full w-full max-w-[1100px] items-center justify-center">
        <Image
          src={image.src}
          alt={image.alt}
          width={w}
          height={h}
          // The frame stops at 1100, so a full-viewport size fetched more than
          // it can show on a wide screen. 90 keeps zoomed-in UI type crisp.
          sizes="(min-width: 1132px) 1100px, calc(100vw - 32px)"
          quality={90}
          // Sized to the image itself, not a box around it, so the border and
          // corners follow the picture whatever its shape.
          className="h-auto max-h-[calc(100dvh-96px)] w-auto max-w-full rounded-[12px] border border-pv-border animate-[pv-zoom_240ms_cubic-bezier(0.22,1,0.36,1)] lg:max-h-[calc(100dvh-80px)]"
        />
      </div>
    </div>
  );
}
