"use client";

import { useEffect, useRef } from "react";

const PITCH = 24; // grid spacing
const DOT = 3; // cell size
const ACCENT = [241, 250, 56];
const PLAIN = [235, 235, 235];
const EDGE = 16; // short softening inside the 16px margin, so the field does not end on a razor line
const CLEAR = 72; // how far the field backs off from the portrait

/** A field of grid cells across the hero, each brightening and fading on its
    own phase, so the pattern breathes rather than a shape sliding over it. Two
    waves crossing at different speeds and angles, which is what stops it
    reading as a repeating loop.
 
    Canvas rather than CSS: per cell phase is the whole point, and a gradient
    cannot do it. Around 1700 flat rects at desktop size, so it costs little.
 
    The canvas is inset 16px so the field can never touch the section's own
    strokes, and it reads the portrait's real position every resize rather than
    assuming where it sits, so it keeps clear of it wherever it is anchored.
 
    Paused when the hero leaves the viewport or the tab is hidden, and a single
    still frame under prefers-reduced-motion. */
export function PvPulseField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let inView = true;
    // The portrait, in canvas coordinates. Re-measured on every resize, so it
    // does not matter which corner it is anchored to or how it moves between
    // breakpoints.
    let hole: { x0: number; y0: number; x1: number; y1: number } | null = null;

    const measure = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      width = r.width;
      height = r.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const portrait = canvas.parentElement?.querySelector("[data-hero-portrait]");
      if (portrait) {
        const p = portrait.getBoundingClientRect();
        hole = { x0: p.left - r.left, y0: p.top - r.top, x1: p.right - r.left, y1: p.bottom - r.top };
      } else {
        hole = null;
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const time = t / 1000;

      for (let y = 0; y < height; y += PITCH) {
        for (let x = 0; x < width; x += PITCH) {
          // Two crossing waves. The second is slower and at a different angle,
          // so peaks drift instead of marching in step.
          const a = Math.sin((x * 0.9 + y * 0.55) / 70 - time * 2.4);
          const b = Math.sin((x * -0.4 + y * 1.1) / 110 + time * 1.5);
          const v = (a + b + 2) / 4; // 0..1

          // A high power leaves most of the field dark and lights only the
          // crest, which is what makes it read as a pulse passing through.
          const peak = v * v * v * v * v;

          let f =
            smoothstep(0, EDGE, x) *
            smoothstep(0, EDGE, width - x) *
            smoothstep(0, EDGE, y) *
            smoothstep(0, EDGE, height - y);

          // Back off from the portrait, feathered so there is no cut line.
          if (hole) {
            const dx = Math.max(hole.x0 - x, x - hole.x1, 0);
            const dy = Math.max(hole.y0 - y, y - hole.y1, 0);
            f *= smoothstep(0, CLEAR, Math.hypot(dx, dy));
          }

          const alpha = (0.02 + peak * 0.34) * f;
          if (alpha < 0.004) continue;

          const c = [
            Math.round(PLAIN[0] + (ACCENT[0] - PLAIN[0]) * peak),
            Math.round(PLAIN[1] + (ACCENT[1] - PLAIN[1]) * peak),
            Math.round(PLAIN[2] + (ACCENT[2] - PLAIN[2]) * peak),
          ];
          ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha.toFixed(3)})`;
          ctx.fillRect(x, y, DOT, DOT);
        }
      }
    };

    const frame = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (raf || reduced || !inView || document.hidden) return;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    measure();
    draw(0);
    start();

    // Watch the section, not just the canvas: the portrait moves with it.
    const ro = new ResizeObserver(() => {
      measure();
      if (reduced || !raf) draw(performance.now());
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // 16px margin on every side, so the field cannot reach the section's own
  // strokes. Canvas is a replaced element with an intrinsic 300x150, so insets
  // alone will not stretch it; the size has to be stated.
  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-4 top-4 h-[calc(100%-32px)] w-[calc(100%-32px)]"
    />
  );
}

/** Smooth ramp between two edges, clamped. Used with pixel distances. */
function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}
