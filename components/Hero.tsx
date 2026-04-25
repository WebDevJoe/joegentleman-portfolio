"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { AvailableChip } from "./AvailableChip";
import { ShowcaseCard } from "./ShowcaseCard";
import { Marquee } from "./Marquee";
import { HeroHeadline } from "./HeroHeadline";

const showcaseImages = [
  "https://placedog.net/760/570?id=10",
  "https://placedog.net/760/570?id=20",
  "https://placedog.net/760/570?id=30",
  "https://placedog.net/760/570?id=40",
  "https://placedog.net/760/570?id=50",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Hide pre-paint so nothing flashes before the timeline runs.
      gsap.set("[data-anim='chip']", { y: -12, opacity: 0 });
      gsap.set("[data-anim='subtitle']", { y: 12, opacity: 0 });
      gsap.set("[data-anim='cards']", { y: 24, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to("[data-anim='chip']", { y: 0, opacity: 1, duration: 0.6 })
        .to(
          "[data-anim='subtitle']",
          { y: 0, opacity: 1, duration: 0.7 },
          2.4
        )
        .to(
          "[data-anim='cards']",
          { y: 0, opacity: 1, duration: 0.9 },
          2.6
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      {/* pixel grid background, masked to fade out at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[244px] md:h-[522px] lg:h-[900px] bg-grid"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4) 60%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4) 60%, transparent)",
        }}
      />

      <div className="relative flex flex-col items-center justify-center gap-10 px-4 py-12 md:gap-10 md:p-12 lg:gap-16 lg:p-16">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 w-full">
          <div data-anim="chip">
            <AvailableChip />
          </div>
          <HeroHeadline />
          <p
            data-anim="subtitle"
            className="text-center text-[16px] md:text-[18px] font-normal leading-[0.95] tracking-[-0.48px] md:tracking-[-0.54px] text-ink-muted max-w-[284px] md:max-w-none"
          >
            A game UI/UX designer with a web development background.
          </p>
        </div>

        {/* showcase row — auto-scrolling marquee, no scrollbar */}
        <div
          data-anim="cards"
          className="w-full -mx-4 md:-mx-12 lg:-mx-16"
        >
          <Marquee gap={32} className="px-4 md:px-12 lg:px-16">
            {showcaseImages.map((src, i) => (
              <ShowcaseCard
                key={i}
                src={src}
                alt={`Featured project ${i + 1}`}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
