import type { CSSProperties } from "react";

/* Pixel-grid background.

   Drawn as explicit vector lines in a single SVG pass rather than a tiled CSS
   background. A repeating background-image (gradient or SVG tile) is a bitmap
   that the compositor resamples at fractional device-pixel ratios — Windows
   display scaling at 125%/150% — so the 1px lines land on fractional pixels,
   vary in intensity, and "beat" into what looks like two overlaid grids.

   Here every line is its own <line> with shape-rendering:crispEdges, so each
   one snaps to a whole device pixel independently and the spacing stays
   uniform at any DPR. Lines run the full width/height via "100%" and any that
   fall outside the container are clipped by the SVG viewport. */

function GridSvg({
  cellW,
  cellH,
  vOpacity,
  hOpacity,
  className,
}: {
  cellW: number;
  cellH: number;
  vOpacity: number;
  // Horizontals sit further apart than the dense verticals, so they read
  // weaker for the same alpha — especially inside a fade. Give them their own,
  // slightly higher opacity to balance.
  hOpacity: number;
  className?: string;
}) {
  // Generous coverage so the grid fills ultrawide / tall sections; overflow is
  // clipped by the SVG viewport.
  const cols = Math.ceil(3600 / cellW);
  const rows = Math.ceil(2600 / cellH);

  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 h-full w-full ${className ?? ""}`}
    >
      <g stroke="#0d0d0d" strokeWidth={1} shapeRendering="crispEdges">
        <g strokeOpacity={vOpacity}>
          {Array.from({ length: cols }).map((_, i) => {
            const x = i * cellW + 0.5;
            return <line key={`v${i}`} x1={x} y1={0} x2={x} y2="100%" />;
          })}
        </g>
        <g strokeOpacity={hOpacity}>
          {Array.from({ length: rows }).map((_, j) => {
            const y = j * cellH + 0.5;
            return <line key={`h${j}`} x1={0} y1={y} x2="100%" y2={y} />;
          })}
        </g>
      </g>
    </svg>
  );
}

export function GridBackground({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className ?? ""}`}
      style={style}
    >
      {/* Softer, tighter grid on mobile so it doesn't compete with content */}
      <GridSvg
        cellW={56}
        cellH={50}
        vOpacity={0.06}
        hOpacity={0.1}
        className="md:hidden"
      />
      <GridSvg
        cellW={84}
        cellH={75}
        vOpacity={0.08}
        hOpacity={0.14}
        className="hidden md:block"
      />
    </div>
  );
}
