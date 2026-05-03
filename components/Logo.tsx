export function LogoTile({ size = 48 }: { size?: number }) {
  // The J glyph renders at ~58% of the tile width. Inlining the SVG means the
  // browser paints the vector paths natively at any scale — no rasterisation,
  // no /_next/image roundtrip, no quality loss on retina or zoom.
  const glyph = Math.round(size * 0.58);
  return (
    <div
      className="bg-logo-tile rounded-[8px] shrink-0 relative grid place-items-center overflow-hidden"
      style={{
        width: size,
        height: size,
        boxShadow: "0 0 0 1px #0d0d0d, 0 2px 4px 0 rgba(0,0,0,0.1)",
        border: "1.135px solid rgba(49,48,54,0)",
      }}
      aria-hidden
    >
      <svg
        width={glyph}
        height={glyph}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none pointer-events-none"
        shapeRendering="geometricPrecision"
      >
        <path
          d="M39.232 14.592V47.872C47.104 45.44 52.928 38.272 52.992 29.12L52.928 3.2C52.928 1.984 52.352 0.639998 50.944 0.575998C49.792 0.511998 47.808 1.408 46.336 2.304C42.624 4.864 39.296 9.024 39.232 14.592Z"
          fill="white"
        />
        <path
          d="M52.864 38.016C50.112 44.288 43.776 50.112 35.52 50.496C30.208 50.624 25.6 47.872 24.256 42.304H10.944C11.072 52.864 20.16 63.616 32.64 63.616C43.008 63.68 52.928 55.424 52.928 42.304V38.016H52.864Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
