import type { CSSProperties, ReactNode } from "react";

/**
 * Seamless infinite marquee. Children are rendered twice and the track is
 * translated by exactly one half + the inter-copy gap, so the loop has no jump.
 */
export function Marquee({
  children,
  gap = 32,
  className = "",
}: {
  children: ReactNode;
  gap?: number;
  className?: string;
}) {
  const trackStyle = {
    "--marquee-gap": `${gap}px`,
    gap: `${gap}px`,
  } as CSSProperties;

  return (
    <div className={`overflow-hidden no-scrollbar ${className}`}>
      <div className="marquee-track items-start" style={trackStyle}>
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-start"
            style={{ gap: `${gap}px` }}
            aria-hidden={copy === 1 ? true : undefined}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
