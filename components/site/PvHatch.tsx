// Rails and bands carry the diagonal hatch from Figma.
//
// This used to be the flattened PNG export drawn at half size, because it comes
// out of Figma at 2x. That holds up at 16px wide, where a stroke only has a few
// pixels of run anyway, but not once a rail is wide: the line weight lands on
// half a CSS pixel, so every stroke is resampled into a grey smear rather than
// a stroke. The export's 7px diagonal period also divides neither 32 nor 56, so
// tiling it sideways broke phase and the field read as noise.
//
// Drawn as a repeating gradient instead: real 1px strokes, continuous across
// any width, nothing resampled. The rail's copy lives in globals.css as
// .pv-rail because it has to switch off at a breakpoint.
//
// None of these paint a fill. The page gradient sits behind the whole layout,
// margins included, and every hatch strip lets it through so the pattern reads
// as part of the page rather than a black bar laid over it.
//
// The hairline is a plain border again now that pv-border is opaque. CSS paints
// a background under its own border, so while the stroke was 10% white the
// diagonals read straight through it.
const STROKE = "rgba(255,255,255,0.06)";
const PERIOD = "5px";

/** Figma 1178:12541 (left) and 1178:12564 (right). 16 wide on the phone, where
    the frame is the viewport. From sm up they step out to a fixed margin, 120px
    from lg, and the content column takes whatever is left. */
export function PvRail({
  side,
  children,
}: {
  side: "left" | "right";
  children?: React.ReactNode;
}) {
  const edge = side === "left" ? "border-r" : "border-l";
  return (
    <div className={`pv-rail relative w-4 shrink-0 sm:w-8 md:w-16 lg:w-[120px] ${edge} border-pv-border`}>
      {children}
    </div>
  );
}

/** 16 tall at every width, same as the grid gutters, so no hatch strip on the
    page is a different size from any other.

    361x16 band between sections. Figma 1175:1160, 1178:12548, 1178:12530, 1184:12657.
    The strip carries strokeRightWeight 1 and is rotated -90, which puts that
    hairline along the bottom. */
export function PvBand() {
  return (
    <div
      aria-hidden
      className="h-4 w-full shrink-0 border-b border-pv-border"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${STROKE} 0 1px, transparent 1px ${PERIOD})`,
      }}
    />
  );
}

/** Divider between the project cards when they run as a grid. Like the rails
    and the section bands it paints only its strokes and no fill, so the page
    gradient carries straight through it. A solid fill here made every hatch
    strip read as a black bar laid over a lit page. Carries no border of its
    own either: the cards it sits between are boxed, and a border would double
    up against theirs. */
export function PvGutter({
  axis,
  className = "",
  always = false,
}: {
  axis: "x" | "y";
  className?: string;
  /** The work grid only lays out from lg, so its gutters stay hidden below it.
      Anything framed at every size, like the gate, passes this. */
  always?: boolean;
}) {
  // The stroke lives on the gutter rather than on the cards it separates. On the
  // cards each line stopped at the edge of a gutter track, so nothing carried
  // through a crossing and the intersections read as holes. On the gutter the
  // same line runs the whole length of the grid, and the two meet where the
  // tracks cross.
  const shown = always ? "block" : "hidden lg:block";
  const box =
    axis === "y"
      ? `${shown} w-4 shrink-0 self-stretch border-x border-pv-border`
      : `${shown} h-4 w-full shrink-0 border-y border-pv-border`;
  return (
    <div
      aria-hidden
      className={`${box} ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(${axis === "y" ? 135 : 45}deg, ${STROKE} 0 1px, transparent 1px ${PERIOD})`,
      }}
    />
  );
}
