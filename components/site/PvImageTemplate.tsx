// Every screenshot on the site is held back until better exports exist. While
// HOLD_IMAGES is true, each image slot not listed in READY shows this wireframe template instead:
// a frame crossed corner to corner with a picture glyph in the middle. Flip it
// to false and the real images come back exactly where they were.
export const HOLD_IMAGES = true;

// Images re-exported at full quality, which show even while the rest are held.
const READY = new Set([
  "/media/fs2-overview.webp",
  "/media/fs2-hero.webp",
  "/media/fs2-community.webp",
  "/media/fs2-about-pair.webp",
  "/media/fs2-wishlist.webp",
  "/media/gxk-base.webp",
  "/media/gxk-offer.webp",
  "/media/gxk-active.webp",
  "/media/gxk-popup.webp",
  "/media/bp-trials.webp",
  "/media/bp-rewards.webp",
  "/media/bp-info.webp",
  "/media/bp-exalted.webp",
  "/media/ws-app-signin.webp",
  "/media/ws-app-week.webp",
  "/media/ws-app-week-total.webp",
  "/media/ws-app-reuse.webp",
  "/media/ws-app-saved.webp",
  "/media/ws-app-log.webp",
  "/media/ws-app-leave.webp",
  "/media/ws-dash-overview.webp",
  "/media/ws-dash-approvals.webp",
  "/media/ws-dash-leave.webp",
  "/media/ws-dash-export.webp",
]);

/** Whether this image should show as a template rather than itself. */
export function isHeld(src: string) {
  return HOLD_IMAGES && !READY.has(src);
}

const GLYPH = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-[45%]">
    <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="9.5" r="1.75" stroke="currentColor" strokeWidth="1.5" />
    <path d="m3.5 17 5-5 4 4 3-3 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

/** Fills its parent (which must be positioned) with the template. */
export function PvImageTemplate({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`absolute inset-0 flex items-center justify-center overflow-hidden bg-white/[0.02] ${className}`}>
      <svg className="absolute inset-0 size-full" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none">
        <path d="M0 0 100 100M100 0 0 100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="relative flex size-14 items-center justify-center rounded-[12px] border border-pv-border bg-pv-card text-pv-muted lg:size-16">
        {GLYPH}
      </span>
    </div>
  );
}

/** A small round template, for avatar-sized image slots. */
export function PvImageDot({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`flex items-center justify-center rounded-full border border-pv-border bg-pv-card text-pv-muted ${className}`}>
      <span className="flex size-full items-center justify-center p-[22%] [&>svg]:size-full">{GLYPH}</span>
    </span>
  );
}
