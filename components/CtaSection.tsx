"use client";

import { AvailableChip } from "./AvailableChip";
import { PrimaryButton } from "./Buttons";
import { ScrollReveal } from "./ScrollReveal";
import { GridBackground } from "./GridBackground";

export function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16">
      {/* pixel grid background, faded out at top and bottom */}
      <GridBackground
        className="absolute inset-0 opacity-50"
        style={{
          maskImage:
            "radial-gradient(ellipse farthest-side at 50% 60%, black 0%, black 38%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse farthest-side at 50% 60%, black 0%, black 38%, transparent 100%)",
        }}
      />

      <ScrollReveal
        stagger={0.12}
        className="relative flex flex-col items-center justify-center gap-8 px-4 md:px-16 py-12 md:py-24 text-center"
      >
        <AvailableChip />
        <h2 className="text-ink leading-none tracking-[-1.44px] md:tracking-[-2.4px]">
          <span className="block text-[48px] md:text-[64px] lg:text-[80px] font-normal">
            Got an idea?
          </span>
          <span className="block text-[48px] md:text-[64px] lg:text-[80px] font-medium">
            Let&apos;s make it real.
          </span>
        </h2>
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
              window.location.href = "mailto:joegentlemanux@gmail.com";
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
