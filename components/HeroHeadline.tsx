"use client";

import { useEffect, useState } from "react";

const PARTS = [
  { text: "Designing things people ", weight: "font-normal" },
  { text: "actually", weight: "font-medium" },
  { text: " want to use.", weight: "font-normal" },
] as const;

const CHARS = PARTS.flatMap((p) =>
  Array.from(p.text, (ch) => ({ ch, weight: p.weight }))
);
const FULL_TEXT = PARTS.map((p) => p.text).join("");

const HEADLINE_CLASSES =
  "max-w-[1062px] text-center font-normal text-ink text-[48px] md:text-[64px] lg:text-[96px] leading-[0.95] tracking-[-1.44px] md:tracking-[-1.92px] lg:tracking-[-2.88px]";

const START_DELAY_MS = 350;
const DURATION_MS = 1800;

export function HeroHeadline() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf = 0;
    let cancelled = false;
    const start = performance.now() + START_DELAY_MS;

    const tick = (now: number) => {
      if (cancelled) return;
      const elapsed = Math.max(0, now - start);
      const progress = Math.min(1, elapsed / DURATION_MS);
      const next = Math.ceil(progress * CHARS.length);
      setCount(next);
      if (progress >= 1) return;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <h1 className={HEADLINE_CLASSES} aria-label={FULL_TEXT}>
      {CHARS.map(({ ch, weight }, i) => (
        <span
          key={i}
          aria-hidden
          className={weight}
          style={{ opacity: i < count ? 1 : 0 }}
        >
          {ch}
        </span>
      ))}
    </h1>
  );
}
