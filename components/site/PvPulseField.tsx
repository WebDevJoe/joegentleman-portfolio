"use client";

import { useEffect, useRef, useState } from "react";

// Cells on a 24px pitch, the blocky vocabulary the mark and the dot matrix
// already use. Painted faintly as the resting state, and used again as a mask
// so the rings behind only show through the cells.
const CELL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='3' height='3' fill='white' fill-opacity='0.05'/%3E%3C/svg%3E\")";
const CELL_MASK =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='3' height='3' fill='white'/%3E%3C/svg%3E\")";

// Two masks, intersected. The radial keeps the field a pool of light around its
// own origin; the horizontal one is the hard rule that it never reaches the
// right of the section, which is where the portrait is. Intersect rather than
// the default union, or the two fades cancel each other out.
const FIELD_FADE = [
  "radial-gradient(115% 105% at 24% 88%, #000 10%, transparent 70%)",
  "linear-gradient(to right, #000 0%, #000 26%, transparent 46%)",
].join(", ");

const RINGS =
  "repeating-radial-gradient(circle, rgba(241,250,56,0.85) 0 2px, rgba(250,255,147,0.3) 2px 3px, transparent 3px 46px)";

/** Rings ping out from a point low on the left, clipped to a grid of cells, so
    it reads as pixels lighting up in rings rather than a gradient sliding
    about. Three share one loop, staggered, so a new ring leaves as the last
    fades, and it runs for as long as the hero is on screen.

    Desktop only. Under prefers-reduced-motion the rings hold still rather than
    disappearing, so the texture is there without the movement. */
export function PvPulseField() {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  // Only animate while the hero is actually in view. Scrolled past, the loop
  // stops rather than burning a compositor frame every 16ms for nothing.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setLive(entry.isIntersecting),
      { rootMargin: "0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      data-live={live}
      className="pv-field pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      style={{
        maskImage: FIELD_FADE,
        maskComposite: "intersect",
        WebkitMaskImage: FIELD_FADE,
        WebkitMaskComposite: "source-in",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: CELL, backgroundSize: "24px 24px" }}
      />
      <div
        className="absolute inset-0"
        style={{
          maskImage: CELL_MASK,
          maskSize: "24px 24px",
          WebkitMaskImage: CELL_MASK,
          WebkitMaskSize: "24px 24px",
        }}
      >
        {/* The centring translate sits on the wrapper: the keyframes animate
            transform, so a translate on the same element would be thrown away
            the moment the animation started. */}
        <div className="absolute left-[24%] top-[88%] size-[1500px] -translate-x-1/2 -translate-y-1/2">
          {["", "pv-ping-2", "pv-ping-3"].map((stagger, i) => (
            <div
              key={i}
              className={`pv-ping absolute inset-0 ${stagger}`}
              style={{ backgroundImage: RINGS }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
