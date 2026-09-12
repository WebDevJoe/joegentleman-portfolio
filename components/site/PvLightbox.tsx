"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-pv-bg/92 p-4 backdrop-blur-[6px] animate-[pv-fade_200ms_cubic-bezier(0.22,1,0.36,1)]"
    >
      <button
        type="button"
        aria-label="Close preview"
        onClick={onClose}
        className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-pv-border text-pv-muted transition-colors duration-200 ease-smooth hover:border-white/30 hover:text-pv-fg"
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
          <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <div className="relative max-h-full w-full max-w-[1100px]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1444}
          height={1444}
          sizes="100vw"
          className="h-auto max-h-[86vh] w-full rounded-[12px] border border-pv-border object-contain animate-[pv-zoom_240ms_cubic-bezier(0.22,1,0.36,1)]"
        />
      </div>
    </div>
  );
}
