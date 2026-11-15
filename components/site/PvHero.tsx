import Link from "next/link";

// Centred launch-style hero: a "new" badge, a two line headline, one line of
// who and where, and one action down to the work.
// Behind it, large grid boxes under a soft light from the top left, both
// fading out before the edges so nothing ends on a hard line.
//
// Desktop sizes are set to the reference at 1440: 72px headline, 20px lede,
// and the site's standard 44px button. The section is as tall as its content plus padding.
const HEADLINE_GRADIENT =
  "linear-gradient(180deg, rgb(255,255,255) 0%, rgb(255,255,255) 45%, rgb(170,170,170) 115%)";
const ACCENT_GRADIENT = "linear-gradient(180deg, rgb(241,250,56) 0%, rgb(250,255,147) 100%)";

const CELL = 112;
const GRID: React.CSSProperties = {
  backgroundImage: [
    "linear-gradient(to right, rgba(255,255,255,0.085) 1px, transparent 1px)",
    "linear-gradient(to bottom, rgba(255,255,255,0.085) 1px, transparent 1px)",
  ].join(","),
  backgroundSize: `${CELL}px ${CELL}px`,
  // Centred on the column, so the boxes sit symmetrically about the headline.
  backgroundPosition: "center top",
  maskImage: "radial-gradient(ellipse 75% 70% at 50% 35%, #000 25%, transparent 80%)",
  WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 50% 35%, #000 25%, transparent 80%)",
};
const LIGHT: React.CSSProperties = {
  backgroundImage: [
    "radial-gradient(55% 45% at 8% 30%, rgba(255,255,255,0.09), transparent 70%)",
    "radial-gradient(35% 30% at 50% 38%, rgba(241,250,56,0.035), transparent 70%)",
  ].join(","),
};

export function PvHero() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden border-b border-pv-border px-4 pb-20 pt-20 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={GRID} />
      <div aria-hidden className="pointer-events-none absolute inset-0" style={LIGHT} />

      {/* Badge: the newest case study. */}
      <Link
        href="/work/worksheets"
        className="pv-rise group relative flex h-[34px] items-center gap-2.5 rounded-full border border-[#f1fa38]/30 bg-[#f1fa38]/[0.06] pl-1 pr-3 transition-colors duration-200 hover:border-[#f1fa38]/50 hover:bg-[#f1fa38]/10"
      >
        <span
          className="flex h-[26px] items-center rounded-full px-2.5 text-[13px] font-medium leading-none text-pv-bg"
          style={{ backgroundImage: ACCENT_GRADIENT }}
        >
          New
        </span>
        <span className="text-[14px] font-medium leading-5 text-pv-accent-soft">Worksheets case study</span>
        <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-4 text-pv-accent-soft transition-transform duration-200 group-hover:translate-x-0.5">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <h1
        className="pv-rise pv-rise-2 relative mt-6 w-full max-w-[361px] bg-clip-text text-center text-[44px] font-semibold leading-[50px] tracking-[-0.03em] text-transparent sm:max-w-[640px] sm:text-[60px] sm:leading-[66px] lg:max-w-[900px] lg:text-[72px] lg:leading-[80px]"
        style={{ backgroundImage: HEADLINE_GRADIENT }}
      >
        Design built to
        <br />
        <span className="relative inline-block bg-clip-text text-transparent" style={{ backgroundImage: HEADLINE_GRADIENT }}>
          <span
            aria-hidden
            className="pv-marquee pointer-events-none absolute -inset-x-[12px] top-1/2 h-[50px] -translate-y-1/2 border border-[#f1fa38] sm:-inset-x-[16px] sm:h-[66px] lg:-inset-x-[18px] lg:h-[80px]"
            style={{ backgroundImage: "linear-gradient(to bottom, rgba(241,250,56,0.12), rgba(250,255,147,0.12))" }}
          >
            <span className="pv-handle absolute -left-[3px] -top-[3px] size-[5px] border border-[#f1fa38] bg-[#161616]" />
            <span className="pv-handle absolute -right-[3px] -top-[3px] size-[5px] border border-[#f1fa38] bg-[#161616]" />
            <span className="pv-handle absolute -bottom-[3px] -left-[3px] size-[5px] border border-[#f1fa38] bg-[#161616]" />
            <span className="pv-handle absolute -bottom-[3px] -right-[3px] size-[5px] border border-[#f1fa38] bg-[#161616]" />
          </span>
          Solve.
        </span>
      </h1>

      <p className="pv-rise pv-rise-2 relative mt-6 w-full max-w-[560px] text-balance text-center text-[17px] leading-[26px] text-pv-muted lg:max-w-[760px] lg:text-[20px] lg:leading-[31px]">
        A UX designer from the north east of Scotland, currently working @{" "}
        <span className="whitespace-nowrap bg-clip-text text-transparent" style={{ backgroundImage: ACCENT_GRADIENT }}>
          Hunted Cow Studios
        </span>
      </p>

      <a
        href="#work"
        className="pv-rise pv-rise-3 pv-primary pv-stroke pv-stroke-btn relative mt-8 flex h-[44px] w-[156px] shrink-0 items-center justify-center rounded-[10px] text-[16px] font-medium leading-[24px] text-pv-bg shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] transition-[transform,box-shadow,background-image] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_10px_22px_-8px_rgba(241,250,56,0.45)] active:translate-y-0 active:duration-75 lg:mt-10"
      >
        My Work
      </a>
    </section>
  );
}
