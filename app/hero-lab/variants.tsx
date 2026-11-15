import Image from "next/image";
import type { CSSProperties } from "react";

// Three takes on the landing hero, for /hero-lab. They share the live hero's
// copy, type ramp and accent, so what differs is only the idea.

const HEADLINE_GRADIENT =
  "linear-gradient(180.3deg, rgb(255,255,255) 0.8%, rgb(153,153,153) 112%)";
const ACCENT_GRADIENT = "linear-gradient(180deg, rgb(241,250,56) 0%, rgb(250,255,147) 100%)";
const ACCENT = "#f1fa38";

/* ---------------------------------------------------------------- pattern */

// The box cross from Atlas (node 4:746 repeated): hairline boxes with a short
// brighter cross on every corner. Grid lines are two 1px gradients; the
// crosses are one SVG tile shifted half a cell so each lands on a corner.
function crossTile(cell: number, arm: number, alpha: number) {
  const c = cell / 2 + 0.5;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${cell}' height='${cell}'><path d='M${c} ${c - arm}v${arm * 2}M${c - arm} ${c}h${arm * 2}' stroke='rgba(255,255,255,${alpha})' stroke-width='1'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

function BoxCross({
  cell = 96,
  mask = "radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 75%)",
  className = "",
}: {
  cell?: number;
  mask?: string;
  className?: string;
}) {
  const line = "rgba(255,255,255,0.045)";
  const style: CSSProperties = {
    backgroundImage: [
      crossTile(cell, 6, 0.32),
      `linear-gradient(to right, ${line} 1px, transparent 1px)`,
      `linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
    ].join(","),
    backgroundSize: `${cell}px ${cell}px`,
    backgroundPosition: `-${cell / 2}px -${cell / 2}px, 0 0, 0 0`,
    maskImage: mask,
    WebkitMaskImage: mask,
  };
  return <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`} style={style} />;
}

/** A cross lit in the accent, on the grid corner at column x, row y. */
function LitCross({ x, y, cell = 96, delay = 0 }: { x: number; y: number; cell?: number; delay?: number }) {
  return (
    <span
      aria-hidden
      className="lab-blink pointer-events-none absolute size-[13px] -translate-x-1/2 -translate-y-1/2"
      style={{ left: x * cell + 0.5, top: y * cell + 0.5, animationDelay: `${delay}ms` }}
    >
      <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2" style={{ background: ACCENT }} />
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2" style={{ background: ACCENT }} />
    </span>
  );
}

/* ----------------------------------------------------------------- shared */

const PORTRAIT_SIZES = "(min-width: 1024px) 620px, (min-width: 640px) 520px, 100vw";

function Portrait({ className, mask, opacity = 0.12 }: { className: string; mask: string; opacity?: number }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`} style={{ maskImage: mask, WebkitMaskImage: mask }}>
      <Image src="/media/joe.webp" alt="" fill sizes={PORTRAIT_SIZES} className="object-cover grayscale" style={{ opacity }} />
    </div>
  );
}

/** The selection box with corner handles, as on the live hero. */
function Marquee({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pv-marquee pointer-events-none absolute top-1/2 -translate-y-1/2 border border-[#f1fa38] ${className}`}
      style={{ backgroundImage: "linear-gradient(to bottom, rgba(241,250,56,0.12), rgba(250,255,147,0.12))" }}
    >
      <span className="pv-handle absolute -left-[3px] -top-[3px] size-[4px] border border-[#f1fa38] bg-[#161616]" />
      <span className="pv-handle absolute -right-[3px] -top-[3px] size-[4px] border border-[#f1fa38] bg-[#161616]" />
      <span className="pv-handle absolute -bottom-[3px] -left-[3px] size-[4px] border border-[#f1fa38] bg-[#161616]" />
      <span className="pv-handle absolute -bottom-[3px] -right-[3px] size-[4px] border border-[#f1fa38] bg-[#161616]" />
    </span>
  );
}

function WorkButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#work"
      className={`pv-rise pv-rise-3 pv-primary relative flex h-[44px] w-[156px] shrink-0 items-center justify-center rounded-[10px] text-[16px] font-medium leading-[24px] text-pv-bg shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_10px_22px_-8px_rgba(241,250,56,0.45)] ${className}`}
    >
      My Work
    </a>
  );
}

const Studio = () => (
  <span className="whitespace-nowrap bg-clip-text text-transparent" style={{ backgroundImage: ACCENT_GRADIENT }}>
    Hunted Cow Studios
  </span>
);

const LAB_CSS = `
@keyframes lab-blink { 0%, 100% { opacity: .25 } 50% { opacity: 1 } }
.lab-blink { animation: lab-blink 3.2s ease-in-out infinite both; }
@keyframes lab-drift {
  0%, 100% { transform: translate(0, 0) }
  35% { transform: translate(-14px, -8px) }
  70% { transform: translate(6px, -14px) }
}
.lab-drift { animation: lab-drift 7s cubic-bezier(.45,0,.25,1) infinite; }
@media (prefers-reduced-motion: reduce) { .lab-blink, .lab-drift { animation: none } }
`;

const SECTION = "relative w-full overflow-hidden border-b border-pv-border h-[656px] sm:h-[720px] lg:h-[calc(100svh-97px)] lg:min-h-[720px] lg:max-h-[960px]";

/* ---------------------------------------------------------- A: box cross */

/** Today's hero, unchanged in layout, on the box cross grid. A handful of
    corners near the headline are lit in the accent and breathe on their own
    phase, which is the job the pulse field was doing. */
export function HeroBoxCross() {
  return (
    <section className={`${SECTION} flex flex-col items-center justify-end gap-4 px-4 py-10 lg:gap-6 lg:px-8 lg:py-16`}>
      <style>{LAB_CSS}</style>
      <BoxCross mask="radial-gradient(ellipse 75% 65% at 50% 60%, #000 10%, transparent 72%)" />
      <div aria-hidden className="absolute inset-0 hidden lg:block">
        <LitCross x={3} y={3} delay={0} />
        <LitCross x={9} y={2} delay={900} />
        <LitCross x={11} y={5} delay={1700} />
        <LitCross x={2} y={6} delay={2300} />
      </div>
      <div aria-hidden className="absolute inset-0 lg:hidden">
        <LitCross x={1} y={2} delay={0} />
        <LitCross x={3} y={1} delay={1200} />
      </div>

      <Portrait
        className="inset-x-0 bottom-0 mx-auto h-[541px] w-full sm:max-w-[520px] lg:left-auto lg:right-0 lg:mx-0 lg:h-[77%] lg:max-w-[620px]"
        mask="linear-gradient(to bottom, #000 0%, #000 70%, transparent 96%)"
      />

      <h1
        className="pv-rise relative w-full max-w-[329px] bg-clip-text text-center text-[36px] font-medium leading-[48px] text-transparent sm:max-w-[560px] sm:text-[52px] sm:leading-[64px] lg:max-w-[820px] lg:text-[72px] lg:leading-[88px]"
        style={{ backgroundImage: HEADLINE_GRADIENT }}
      >
        Design built to
        <br />
        <span className="relative inline-block bg-clip-text text-transparent" style={{ backgroundImage: HEADLINE_GRADIENT }}>
          <Marquee className="-inset-x-[11px] h-[42px] sm:-inset-x-[15px] sm:h-[60px] lg:-inset-x-[20px] lg:h-[82px]" />
          Solve
        </span>
      </h1>
      <p className="pv-rise pv-rise-2 relative w-full max-w-[560px] text-balance text-center text-[16px] leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[28px]">
        A UX designer from the north east of Scotland, currently working @ <Studio />
      </p>
      <WorkButton />
    </section>
  );
}

/* ---------------------------------------------------------- B: editorial */

const FACTS = [
  { label: "Role", value: "UX designer" },
  { label: "Based", value: "North east of Scotland" },
  { label: "Now", value: "Hunted Cow Studios", accent: true },
  { label: "Work", value: "Game UI, product, web" },
];

/** Big, left and low. The facts move out of the sentence into a spec line
    across the top, so the headline can be the only thing in the middle of the
    page, and the portrait gets the right half to itself. */
export function HeroEditorial() {
  return (
    <section className={`${SECTION} flex flex-col justify-between`}>
      <style>{LAB_CSS}</style>
      <BoxCross mask="linear-gradient(to left, #000 0%, #000 30%, transparent 75%)" />
      <Portrait
        className="bottom-0 right-0 h-[70%] w-full sm:w-[70%] lg:h-[88%] lg:w-[52%]"
        mask="linear-gradient(to bottom, #000 55%, transparent 96%), linear-gradient(to right, transparent 0%, #000 35%)"
        opacity={0.22}
      />

      <dl className="pv-rise relative grid grid-cols-2 border-b border-pv-border lg:grid-cols-4">
        {FACTS.map((f, i) => (
          <div
            key={f.label}
            className={`flex flex-col gap-1 px-4 py-4 lg:px-8 lg:py-5 ${i % 2 ? "border-l border-pv-border" : ""} ${i > 1 ? "border-t border-pv-border lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
          >
            <dt className="text-[12px] font-medium uppercase leading-4 tracking-[0.08em] text-pv-muted/70">{f.label}</dt>
            <dd className="text-[15px] leading-[22px] text-pv-fg">{f.accent ? <Studio /> : f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="relative flex flex-col items-start gap-6 px-4 pb-10 lg:gap-8 lg:px-8 lg:pb-16">
        <h1
          className="pv-rise bg-clip-text text-[52px] font-medium leading-[52px] tracking-[-0.03em] text-transparent sm:text-[80px] sm:leading-[80px] lg:text-[112px] lg:leading-[108px]"
          style={{ backgroundImage: HEADLINE_GRADIENT }}
        >
          Design
          <br />
          built to{" "}
          <span className="relative ml-2 inline-block bg-clip-text sm:ml-3 lg:ml-4 text-transparent" style={{ backgroundImage: HEADLINE_GRADIENT }}>
            <Marquee className="-inset-x-[10px] h-[54px] sm:-inset-x-[14px] sm:h-[80px] lg:-inset-x-[18px] lg:h-[108px]" />
            Solve
          </span>
        </h1>
        <div className="pv-rise pv-rise-2 flex w-full flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <WorkButton />
          <p className="max-w-[360px] text-[15px] leading-[24px] text-pv-muted">
            Four case studies below: a game store, a battle pass, a launch site and a timesheet app.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- C: canvas */

const RULER_TICKS: CSSProperties = {
  backgroundImage: [
    "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px)",
    "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px)",
  ].join(","),
  backgroundSize: "96px 100%, 12px 6px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "0 0, 0 100%",
};
const RULER_TICKS_Y: CSSProperties = {
  backgroundImage: [
    "linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
    "linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
  ].join(","),
  backgroundSize: "100% 96px, 6px 12px",
  backgroundRepeat: "repeat-y",
  backgroundPosition: "0 0, 100% 0",
};

/** The hero drawn as the thing a designer looks at all day: rulers on two
    edges, the headline as a selected frame with its size underneath, and a
    named cursor that has just let go of it. */
export function HeroCanvas() {
  const marks = Array.from({ length: 16 }, (_, i) => i * 96);
  return (
    <section className={`${SECTION} flex flex-col items-center justify-center px-4 py-10 lg:px-8`}>
      <style>{LAB_CSS}</style>
      <BoxCross cell={96} mask="radial-gradient(ellipse 80% 75% at 50% 50%, #000 25%, transparent 80%)" />
      <Portrait
        className="bottom-0 right-0 hidden h-[80%] w-[44%] lg:block"
        mask="linear-gradient(to bottom, #000 60%, transparent 96%), linear-gradient(to right, transparent, #000 40%)"
        opacity={0.1}
      />

      {/* Rulers */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-5 border-b border-pv-border bg-pv-bg/80" style={RULER_TICKS}>
        {marks.map((m) => (
          <span key={m} className="absolute top-0.5 text-[9px] leading-none text-pv-muted/60" style={{ left: m + 3 }}>
            {m}
          </span>
        ))}
      </div>
      <div aria-hidden className="absolute bottom-0 left-0 top-5 hidden w-5 border-r border-pv-border bg-pv-bg/80 sm:block" style={RULER_TICKS_Y} />

      <div className="relative flex flex-col items-center gap-8 lg:gap-10">
        {/* Selected frame */}
        <div className="pv-rise relative px-5 py-4 sm:px-8 sm:py-6">
          <span aria-hidden className="absolute -top-6 left-0 text-[12px] leading-4 text-pv-muted">
            <span className="text-pv-accent">#</span> Hero
          </span>
          <span aria-hidden className="pointer-events-none absolute inset-0 border border-[#f1fa38]">
            {["-left-[4px] -top-[4px]", "-right-[4px] -top-[4px]", "-bottom-[4px] -left-[4px]", "-bottom-[4px] -right-[4px]"].map((pos) => (
              <span key={pos} className={`pv-handle absolute size-[7px] border border-[#f1fa38] bg-pv-bg ${pos}`} />
            ))}
          </span>
          <span
            aria-hidden
            className="absolute -bottom-[30px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[4px] px-1.5 py-0.5 text-[11px] font-medium leading-4 text-pv-bg"
            style={{ backgroundImage: ACCENT_GRADIENT }}
          >
            Fill × Hug
          </span>

          <h1
            className="bg-clip-text text-center text-[36px] font-medium leading-[44px] tracking-[-0.02em] text-transparent sm:text-[56px] sm:leading-[64px] lg:text-[80px] lg:leading-[88px]"
            style={{ backgroundImage: HEADLINE_GRADIENT }}
          >
            Design built to
            <br />
            Solve
          </h1>

          {/* Cursor, just off the bottom right handle */}
          <span aria-hidden className="lab-drift absolute -bottom-12 -right-4 flex items-start sm:-right-16">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path d="M1 1l15 7.2-6.6 1.9L6.6 17 1 1z" fill={ACCENT} stroke="#0a0a0a" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            <span className="-ml-0.5 mt-4 rounded-[4px] px-1.5 py-0.5 text-[11px] font-medium leading-4 text-pv-bg" style={{ backgroundImage: ACCENT_GRADIENT }}>
              Joe
            </span>
          </span>
        </div>

        <p className="pv-rise pv-rise-2 mt-4 w-full max-w-[560px] text-balance text-center text-[16px] leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[28px]">
          A UX designer from the north east of Scotland, currently working @ <Studio />
        </p>
        <WorkButton />
      </div>
    </section>
  );
}
