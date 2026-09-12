import type { ReactNode } from "react";

// Section shell shared by the case study body blocks. Figma: py-40, an inner
// container at w-361 max-w-880 px-16 gap-16, header block gap-8, body pt-8.
const H2_GRADIENT =
  "linear-gradient(180.1970480898805deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";

export const PV_INSET = "mx-auto w-full max-w-[760px] px-4 lg:px-8";

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
    <section className="flex w-full flex-col items-center justify-center border-b border-pv-border py-10 lg:py-16">
      <div className={`flex w-full max-w-[760px] shrink-0 flex-col items-start ${gap} px-4 lg:px-8`}>
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

const ACCENT_GRADIENT = "linear-gradient(180deg, #f1fa38 0%, #faff93 100%)";

/** Figma 1189:34491: hairline separated rows, px-16 py-16, gap-6. */
export function PvSteps({
  steps,
}: {
  steps: { n: string; title: string; body: string }[];
}) {
  return (
    <div className="mx-auto flex w-full max-w-[760px] shrink-0 flex-col items-start pt-2">
      {steps.map((s, i) => (
        <div
          key={s.n}
          className={`flex w-full shrink-0 flex-col items-start gap-1.5 border-pv-border px-4 py-4 lg:px-8 lg:py-5 ${
            i === 0 ? "border-t border-b" : "border-b"
          }`}
        >
          <p
            className="whitespace-nowrap bg-clip-text text-[14px] font-medium leading-[20px] text-transparent"
            style={{ backgroundImage: ACCENT_GRADIENT }}
          >
            {s.n}
          </p>
          <p className="text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[22px] lg:leading-[30px]">{s.title}</p>
          <p className="w-full text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[30px]">
            {s.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Figma 1192:34569: full bleed image with border-y, caption px-16.
    Landscape captures sit in the 361x204 slot from the design. Portrait ones
    (the phone screenshots) keep their own ratio: forcing them into that slot
    crops about three quarters of the image away. */
export function PvFigure({
  src,
  caption,
  natural = false,
  onZoom,
}: {
  src: string;
  caption: string;
  natural?: boolean;
  onZoom?: (img: { src: string; alt: string }) => void;
}) {
  const img = natural ? (
    <div className="w-full shrink-0 overflow-hidden border-y border-pv-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={caption} className="block h-auto w-full" />
    </div>
  ) : (
    <div className="relative aspect-[361/204] w-full shrink-0 overflow-hidden border-y border-pv-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={caption} className="absolute inset-0 size-full max-w-none object-cover" />
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
    <div className="mx-auto flex w-full max-w-[760px] shrink-0 flex-col items-start">
      <p className="w-full px-4 pb-3 lg:px-8 text-[14px] font-medium leading-[20px] text-pv-fg">{who}</p>
      {rows.map((r, i) => (
        <div
          key={r.pain}
          className={`flex w-full shrink-0 flex-col items-start gap-2 border-pv-border px-4 py-4 lg:px-8 lg:py-5 ${
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
