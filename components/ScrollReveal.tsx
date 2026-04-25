"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: ReactNode;
  /** y offset (px) to slide from. */
  y?: number;
  /** stagger between direct children of the wrapper, in seconds. */
  stagger?: number;
  /** ScrollTrigger start position. */
  start?: string;
  className?: string;
};

export function ScrollReveal({
  children,
  y = 24,
  stagger = 0.08,
  start = "top 85%",
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(root.children) as HTMLElement[];
    if (targets.length === 0) return;

    // Hide synchronously before paint so there is no FOUC flash.
    gsap.set(targets, { y, opacity: 0, force3D: true });

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: root,
          start,
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [y, stagger, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
