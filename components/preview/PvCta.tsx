import Image from "next/image";

// Figma node 1175:304. Outer stack gap 40; CTA Wrap is gap 32, px-16, py-40.
const EMAIL = "joegentlemanux@gmail.com";

// Chip glow: a chartreuse radial sitting behind the label at 12%.
const CHIP_GLOW =
  "radial-gradient(ellipse 84.23px 15.28px at 83.767px 23px, rgba(241,250,56,0.12) 0%, rgba(245,253,102,0.06) 50%, rgba(250,255,147,0) 100%)";

export function PvCta() {
  return (
    <section className="relative flex w-full flex-col items-center gap-10 border-b border-pv-border">
      <div className="mx-auto flex w-full max-w-[860px] shrink-0 flex-col items-center justify-center gap-8 overflow-clip px-4 py-10 lg:gap-10 lg:px-8 lg:py-16">
        <div className="flex w-full shrink-0 flex-col items-center gap-3">
          {/* Chip 1175:307 */}
          <div className="pv-chip-ring relative flex h-[26px] shrink-0 items-center gap-2 rounded-[32px] border border-pv-border bg-white/[0.04] px-4">
            <span
              aria-hidden
              className="pointer-events-none absolute left-[12.5px] top-[-1px] h-[25px] w-[168px]"
              style={{ background: CHIP_GLOW }}
            />
            <span className="pv-dot-pulse relative z-10 block size-4 shrink-0">
              <Image src="/preview/cta-dot.svg" alt="" width={20} height={20} className="absolute -inset-[12.5%] max-w-none size-[125%]" />
            </span>
            <p className="relative z-10 whitespace-nowrap text-[14px] font-medium leading-[0.95] tracking-[-0.42px] text-pv-fg">
              Available for projects
            </p>
            {/* underline 1178:12567 */}
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-px left-[calc(50%-2.5px)] h-px w-20 -translate-x-1/2"
              style={{
                backgroundImage: 'url("/preview/cta-underline.png")',
                backgroundSize: "100% 100%",
              }}
            />
          </div>

          {/* Headline 1175:310 */}
          <div className="whitespace-nowrap text-center text-[36px] font-medium leading-[40px] text-pv-fg lg:text-[52px] lg:leading-[60px]">
            <p className="mb-0 leading-[40px] lg:leading-[60px]">Got an idea?</p>
            <p className="leading-[40px] lg:leading-[60px]">Let&apos;s make it real.</p>
          </div>

          {/* Subtitle 1175:311 */}
          <p className="w-full text-center text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[28px]">
            Open to UX Design Roles and freelance work. Reply guaranteed within 48 hours.
          </p>
        </div>

        {/* Hand drawn arrow 1178:12551, flipped and rotated as in the design.
            Anchored to the button so it keeps its aim at every breakpoint. */}
        <div className="relative shrink-0">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-[78px] -top-[29px] flex h-[57.34px] w-[71.94px] items-center justify-center"
          >
            <span className="flex-none -scale-y-100 rotate-150">
              <Image
                src="/preview/cta-arrow.svg"
                alt=""
                width={68}
                height={28}
                className="block h-[27.375px] w-[67.264px] max-w-none"
              />
            </span>
          </span>
          <a
            href={`mailto:${EMAIL}`}
            className="pv-primary pv-stroke pv-stroke-btn relative flex h-[44px] w-[156px] shrink-0 items-center justify-center gap-2 rounded-[10px] px-[10px] py-2 text-[16px] font-medium leading-[24px] text-pv-bg shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] transition-[transform,box-shadow,background-image] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_10px_22px_-8px_rgba(241,250,56,0.45)] active:translate-y-0 active:duration-75"
          >
            Get in touch
          </a>
        </div>
      </div>

    </section>
  );
}
