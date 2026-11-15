import type { ReactNode } from "react";
import Image from "next/image";
import { MEDIA_DIMS } from "@/lib/media-dims";
import { HOLD_IMAGES, PvImageTemplate } from "./PvImageTemplate";

// Section shell shared by the case study body blocks. Figma: py-40, an inner
// container at w-361 max-w-880 px-16 gap-16, header block gap-8, body pt-8.
const H2_GRADIENT =
  "linear-gradient(180.1970480898805deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";

export const PV_INSET = "w-full px-4 lg:px-16";

export function PvSection({
  eyebrow,
  heading,
  children,
  gap = "gap-4",
}: {
  eyebrow: string;
  heading: string;
  children?: ReactNode;
  gap?: string;
}) {
  return (
    <section className="flex w-full flex-col items-start justify-center border-b border-pv-border py-10 lg:py-16">
      <div className={`flex w-full shrink-0 flex-col items-start ${gap} px-4 lg:px-16`}>
        <div className="flex w-full shrink-0 flex-col items-start gap-2">
          <p className="whitespace-nowrap text-[12px] font-medium leading-[16px] text-pv-muted">
            {eyebrow}
          </p>
          <h2
            className="w-full bg-clip-text text-[24px] font-medium leading-[32px] text-transparent lg:text-[34px] lg:leading-[44px]"
            style={{ backgroundImage: H2_GRADIENT }}
          >
            {heading}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

/** Body column: paragraphs and quotes, gap-16 with an 8px lead-in. */
export function PvBody({ children }: { children: ReactNode }) {
  return <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">{children}</div>;
}

export function PvP({ children }: { children: ReactNode }) {
  return (
    <p className="w-full text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[30px]">{children}</p>
  );
}

/** Figma 1189:34433: 3px chartreuse rule, pl-20, py-8, Geist Medium 20/28. */
export function PvQuote({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start border-l-[3px] border-[#f1fa38] py-2 pl-5">
      <p className="w-full text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[26px] lg:leading-[36px]">{children}</p>
    </div>
  );
}

/** Full bleed section: header is inset px-16 but children run edge to edge. */
export function PvSectionBleed({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading: string;
  children?: ReactNode;
}) {
  return (
    <section className="flex w-full flex-col items-start gap-4 border-b border-pv-border py-10 lg:gap-6 lg:py-16">
      <div className={`flex shrink-0 flex-col items-start gap-2 ${PV_INSET}`}>
        <p className="whitespace-nowrap text-[12px] font-medium leading-[16px] text-pv-muted">
          {eyebrow}
        </p>
        <h2
          className="w-full bg-clip-text text-[24px] font-medium leading-[32px] text-transparent lg:text-[34px] lg:leading-[44px]"
          style={{ backgroundImage: H2_GRADIENT }}
        >
          {heading}
        </h2>
      </div>
      {children}
    </section>
  );
}


/** Figma 1189:34491: hairline separated rows. The rows run the full width
    of the column. From lg each one splits in two, number and title on the
    left and the explanation on the right, so the section fills the column
    without the body running to an unreadable line length. */
export function PvSteps({
  steps,
}: {
  steps: { n: string; title: string; body: string }[];
}) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start pt-2">
      {steps.map((s, i) => (
        <div
          key={s.n}
          className={`grid w-full shrink-0 grid-cols-1 gap-1.5 border-pv-border px-4 py-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-16 lg:px-16 lg:py-8 ${
            i === 0 ? "border-t border-b" : "border-b"
          }`}
        >
          <div className="flex flex-col items-start gap-1.5">
            <p className="text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[22px] lg:leading-[30px]">{s.title}</p>
          </div>
          <p className="w-full max-w-[720px] text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[30px]">
            {s.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/** The column's width at each breakpoint (see PV_COLUMN and the rails), so the
    browser asks the optimiser for a copy that size and no bigger. */
const COLUMN_SIZES =
  "(min-width: 1640px) 1400px, (min-width: 1024px) calc(100vw - 240px), (min-width: 768px) calc(100vw - 128px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)";

/** Figma 1192:34569: full bleed image with border-y, caption px-16.
    Landscape captures sit in the 361x204 slot from the design. Portrait ones
    (the phone screenshots) keep their own ratio: forcing them into that slot
    crops about three quarters of the image away.

    Through next/image rather than a bare img: each screen gets an AVIF or WebP
    at the width it shows, loaded as it scrolls into view, instead of every
    original at full size up front. Quality 90 because these are interface
    captures, and small type is the first thing lower settings smear.

    Portrait captures stop at two thirds of their pixel width, centred between
    side strokes. Stretched to the full column a 640px phone screenshot ran
    1200px wide and 2600 tall: soft, and nothing on screen but its top. */
export function PvFigure({
  src,
  caption,
  natural = false,
  placeholder = HOLD_IMAGES,
  onZoom,
}: {
  src: string;
  caption: string;
  natural?: boolean;
  /** Show an image-shaped template instead of the image itself, for screens
      that are held back until a better export exists. */
  placeholder?: boolean;
  onZoom?: (img: { src: string; alt: string }) => void;
}) {
  const [w, h] = MEDIA_DIMS[src] ?? [1600, 900];
  const portrait = h > w;
  if (placeholder) {
    return (
      <figure className="flex w-full shrink-0 flex-col items-start gap-4">
        <div className="relative aspect-[4/3] w-full shrink-0 border-y border-pv-border sm:aspect-video">
          <PvImageTemplate />
        </div>
        <figcaption className={`text-[14px] font-normal leading-[20px] text-pv-muted lg:text-[15px] ${PV_INSET}`}>
          {caption}
        </figcaption>
      </figure>
    );
  }
  const img = natural ? (
    <div className="flex w-full shrink-0 justify-center overflow-hidden border-y border-pv-border">
      <Image
        src={src}
        alt={caption}
        width={w}
        height={h}
        quality={90}
        sizes={portrait ? `(min-width: 640px) ${Math.round(w / 1.5)}px, calc(100vw - 32px)` : COLUMN_SIZES}
        className={`block h-auto w-full ${portrait ? "sm:border-x sm:border-pv-border" : ""}`}
        style={portrait ? { maxWidth: Math.round(w / 1.5) } : undefined}
      />
    </div>
  ) : (
    <div className="relative aspect-[361/204] w-full shrink-0 overflow-hidden border-y border-pv-border">
      <Image src={src} alt={caption} fill quality={90} sizes={COLUMN_SIZES} className="object-cover" />
    </div>
  );
  // gap-4 rather than gap-2: the stacks these sit in are gap-4, so a tighter
  // internal gap left the caption 8px under its image and 16px above the next
  // one. Matching the two makes the caption sit evenly between them.
  return (
    <figure className="flex w-full shrink-0 flex-col items-start gap-4">
      {onZoom ? (
        <button
          type="button"
          onClick={() => onZoom({ src, alt: caption })}
          aria-label={`Preview: ${caption}`}
          className="group w-full cursor-zoom-in"
        >
          {img}
        </button>
      ) : (
        img
      )}
      <figcaption className={`text-[14px] font-normal leading-[20px] text-pv-muted lg:text-[15px] ${PV_INSET}`}>
        {caption}
      </figcaption>
    </figure>
  );
}

/** Inset paragraph inside a full bleed section. */
export function PvPInset({ children }: { children: ReactNode }) {
  return (
    <div className={`flex shrink-0 flex-col items-start ${PV_INSET}`}>
      <p className="w-full text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[30px]">{children}</p>
    </div>
  );
}

/** Empty figure slot: marks where a screen still needs to be dropped in.
    Same 361 bleed and caption rhythm as PvFigure so the layout does not move
    when the real image replaces it. */
export function PvFigureSlot({ label, height = 240 }: { label: string; height?: number }) {
  return (
    <figure className="flex w-full shrink-0 flex-col items-start gap-2">
      <div
        className="flex w-full shrink-0 items-center justify-center border-y border-dashed border-pv-border bg-white/[0.02]"
        style={{ height }}
      >
        <p className="px-6 text-center text-[14px] font-normal leading-[20px] text-pv-muted">
          {label}
        </p>
      </div>
    </figure>
  );
}

/** Pain point paired with the design response. Rows are hairline separated in
    the same rhythm as PvSteps. */
export function PvPainPoints({
  who,
  rows,
}: {
  who: string;
  rows: { pain: string; fix: string }[];
}) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start">
      <p className="w-full px-4 pb-3 lg:px-16 text-[14px] font-medium leading-[20px] text-pv-fg">{who}</p>
      {rows.map((r, i) => (
        <div
          key={r.pain}
          className={`flex w-full shrink-0 flex-col items-start gap-2 border-pv-border px-4 py-4 lg:px-16 lg:py-5 ${
            i === 0 ? "border-y" : "border-b"
          }`}
        >
          <div className="flex w-full flex-col items-start gap-1">
            <p className="text-[12px] font-medium leading-[16px] text-pv-muted">Pain point</p>
            <p className="w-full text-[16px] font-normal leading-[24px] text-pv-muted">{r.pain}</p>
          </div>
          <div className="flex w-full flex-col items-start gap-1">
            <p
              className="bg-clip-text text-[12px] font-medium leading-[16px] text-transparent"
              style={{ backgroundImage: "linear-gradient(180deg, #f1fa38 0%, #faff93 100%)" }}
            >
              How I answered it
            </p>
            <p className="w-full text-[16px] font-normal leading-[24px] text-pv-fg">{r.fix}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
