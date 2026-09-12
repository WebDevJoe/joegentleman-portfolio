"use client";

import { useEffect, useRef, useState } from "react";

// The dot matrix from the design: a 4px dot on a 5px pitch, shaped by the two
// gradient masks Figma exported. It used to sit there statically; now the same
// dots are what the pulse lights up, so there is one dot field rather than a
// design element and an effect competing in the same corner.
const DOT_TILE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='5' height='5'%3E%3Crect width='4' height='4' fill='white' fill-opacity='0.102'/%3E%3C/svg%3E\")";
// Same pitch, fully opaque: used as a mask so the rings behind can only show
// through where a dot is.
const DOT_MASK =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='5' height='5'%3E%3Crect width='4' height='4' fill='white'/%3E%3C/svg%3E\")";

const SHAPE = 'url("/media/dot-mask-a.svg"), url("/media/dot-mask-b.svg")';

const RINGS =
  "repeating-radial-gradient(circle, rgba(241,250,56,0.9) 0 2px, rgba(250,255,147,0.35) 2px 3px, transparent 3px 34px)";

/** Rings ping out from the bottom left corner and are clipped to the dots, so
    what moves is the matrix lighting up in rings and going out again.
    Three share one loop, staggered, so a new ring leaves as the last fades.

    It stays in the corner at every size, which keeps it clear of the face: the
    portrait is centred on a phone and over on the right from lg.

    Under prefers-reduced-motion the rings hold still rather than disappearing,
    so the matrix looks exactly as it did before the pulse existed. */
export function PvPulseField() {
  const ref = useRef<HTMLDivElement>(null);
  // Starts live so the very first paint is already animating: the observer is
  // there to stop it going out of view, not to start it going in.
  const [live, setLive] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setLive(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      data-live={live}
      className="pv-field pointer-events-none absolute bottom-0 left-0 h-[199px] w-[224px] origin-bottom-left overflow-hidden lg:scale-125"
      style={{
        maskImage: SHAPE,
        maskSize: "213px 181px, 213px 181px",
        maskRepeat: "no-repeat",
        // Both shapes fade at their own ends. They have to intersect, not union,
        // or the two fades cancel and the field renders as a hard rectangle.
        maskComposite: "intersect",
        WebkitMaskImage: SHAPE,
        WebkitMaskSize: "213px 181px, 213px 181px",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskComposite: "source-in",
      }}
    >
      {/* Resting dots */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: DOT_TILE, backgroundSize: "5px 5px" }}
      />

      {/* The rings, showing only where a dot is */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: DOT_MASK,
          maskSize: "5px 5px",
          WebkitMaskImage: DOT_MASK,
          WebkitMaskSize: "5px 5px",
        }}
      >
        {/* The centring translate sits on the wrapper: the keyframes animate
            transform, so a translate on the same element would be thrown away
            the moment the animation started. */}
        <div className="absolute bottom-0 left-0 size-[520px] translate-x-[-30%] translate-y-[30%]">
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
