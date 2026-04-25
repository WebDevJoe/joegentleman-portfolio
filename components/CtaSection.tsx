"use client";

import { AvailableChip } from "./AvailableChip";
import { PrimaryButton } from "./Buttons";
import { ScrollReveal } from "./ScrollReveal";

export function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16">
      {/* pixel grid background, faded out at top and bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      />

      <ScrollReveal
        stagger={0.12}
        className="relative flex flex-col items-center justify-center gap-8 px-4 md:px-16 py-12 md:py-24 text-center"
      >
        <AvailableChip />
        <div className="text-ink leading-none tracking-[-1.44px] md:tracking-[-2.4px]">
          <p className="text-[48px] md:text-[64px] lg:text-[80px] font-normal">
            Got an idea?
          </p>
          <p className="text-[48px] md:text-[64px] lg:text-[80px] font-medium">
            Let&apos;s make it real.
          </p>
        </div>
        <p className="max-w-[448px] text-[18px] font-normal leading-[1.5] text-ink-muted">
          Open to product design roles and freelance work. Reply guaranteed within 48
          hours.
        </p>
        <PrimaryButton
          onClick={() => {
            const target = document.getElementById("contact");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = "mailto:joegentleman2002@gmail.com";
            }
          }}
          className="w-[132px]"
        >
          Get in touch
        </PrimaryButton>
      </ScrollReveal>
    </section>
  );
}
