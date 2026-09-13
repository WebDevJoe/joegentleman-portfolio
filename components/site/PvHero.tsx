import Image from "next/image";
import { IconDownload } from "./PvIcons";
import { PvPulseField } from "./PvPulseField";

// Figma node 1175:268. Mobile frame is 393 wide with 16px hatch rails, so the
// hero content column is 361. The height is fixed because the portrait is
// absolutely positioned and would otherwise collapse the section. 656 is the
// value that puts the top of the head about 32px under the resume button.
//
// Larger screens keep the same arrangement, everything anchored to the bottom,
// and scale the three pieces together: taller section, taller portrait capped
// to a width so it does not stretch across the whole frame, larger headline.
const HEADLINE_GRADIENT =
  "linear-gradient(180.29557067819997deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";
const ACCENT_GRADIENT =
  "linear-gradient(180deg, rgb(241,250,56) 0%, rgb(250,255,147) 100%)";

const MASK = "linear-gradient(to bottom, #000 0%, #000 70%, transparent 96%)";

export function PvHero() {
  return (
    <section className="relative flex h-[656px] w-full flex-col items-center gap-4 overflow-hidden border-b border-pv-border px-4 py-10 sm:h-[720px] lg:h-screen lg:gap-6 lg:px-8 lg:py-16">
      {/* Portrait, sat right back at 12%. Centred while the frame is narrow,
          pushed to the right edge from lg. The photo ends on a bright row (the
          shirt), so the last stretch is faded out rather than cut, and it stops
          clear of the section stroke. */}
      <div
        aria-hidden
        data-hero-portrait
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[541px] w-full sm:max-w-[520px] lg:left-auto lg:right-0 lg:mx-0 lg:h-[77%] lg:max-w-[620px]"
        style={{ maskImage: MASK, WebkitMaskImage: MASK }}
      >
        <Image
          src="/media/joe.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 620px, (min-width: 640px) 520px, 100vw"
          className="object-cover opacity-[0.12]"
          priority
        />
      </div>

      <PvPulseField />

      {/* Headline: the whole line is one white to grey gradient, clipped to text.
          The selection box hugs the word with insets rather than a fixed size,
          so it tracks the type at every breakpoint. */}
      <h1
        className="pv-rise relative w-full max-w-[329px] bg-clip-text text-center text-[36px] font-medium leading-[48px] text-transparent sm:max-w-[560px] sm:text-[52px] sm:leading-[64px] lg:max-w-[820px] lg:text-[72px] lg:leading-[88px]"
        style={{ backgroundImage: HEADLINE_GRADIENT }}
      >
        {/* Hard break: the word sits on its own line on the phone because the
            measure forces it, and it should keep doing that once the measure
            is wide enough to fit the whole line. */}
        Design built to
        <br />
        <span
          className="relative inline-block bg-clip-text text-transparent"
          style={{ backgroundImage: HEADLINE_GRADIENT }}
        >
          <span
            aria-hidden
            className="pv-marquee pointer-events-none absolute -inset-x-[11px] top-1/2 h-[42px] -translate-y-1/2 border border-[#f1fa38] sm:-inset-x-[15px] sm:h-[60px] lg:-inset-x-[20px] lg:h-[82px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(241,250,56,0.12), rgba(250,255,147,0.12))",
            }}
          >
            <span className="pv-handle absolute -left-[3px] -top-[3px] size-[4px] border border-[#f1fa38] bg-[#161616]" />
            <span className="pv-handle absolute -right-[3px] -top-[3px] size-[4px] border border-[#f1fa38] bg-[#151515]" />
            <span className="pv-handle absolute -bottom-[3px] -left-[3px] size-[4px] border border-[#f1fa38] bg-[#161616]" />
            <span className="pv-handle absolute -bottom-[3px] -right-[3px] size-[4px] border border-[#f1fa38] bg-[#171717]" />
          </span>
          Solve
        </span>
      </h1>

      <p className="pv-rise pv-rise-2 relative w-full max-w-[560px] text-balance text-center text-[16px] font-normal leading-[24px] text-pv-muted lg:max-w-[820px] lg:text-[18px] lg:leading-[28px]">
        A UX designer from the north east of Scotland, currently working @{" "}
        {/* The studio name is one thing, so it never breaks across lines. */}
        <span
          className="whitespace-nowrap bg-clip-text text-transparent"
          style={{ backgroundImage: ACCENT_GRADIENT }}
        >
          Hunted Cow Studios
        </span>
      </p>

      <a
        href="/resume.pdf"
        download
        className="pv-rise pv-rise-3 pv-primary pv-stroke pv-stroke-btn relative flex h-[44px] w-[156px] shrink-0 items-center justify-center gap-2 rounded-[10px] px-[10px] py-2 text-[16px] font-medium leading-[24px] text-pv-bg shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] transition-[transform,box-shadow,background-image] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_10px_22px_-8px_rgba(241,250,56,0.45)] active:translate-y-0 active:duration-75"
      >
        Resume
        <IconDownload className="size-4" />
      </a>
    </section>
  );
}
