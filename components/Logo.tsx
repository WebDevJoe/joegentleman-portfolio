export function LogoTile({ size = 48 }: { size?: number }) {
  // The whole tile is one inline SVG (gradient fill, top-highlight border, and
  // the J glyph) so it paints natively at any scale, with no rasterisation, no
  // /_next/image roundtrip. The drop shadow stays in CSS so it renders crisp.
  // The tile fills the size box; the J is centred at ~58% like the source art.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0 select-none pointer-events-none"
      shapeRendering="geometricPrecision"
      style={{
        borderRadius: 8,
        boxShadow: "0 0 0 1px #0d0d0d, 0 2px 4px 0 rgba(0,0,0,0.1)",
      }}
    >
      <rect width="48" height="48" rx="8" fill="url(#jgTile)" />
      <rect
        x="0.568"
        y="0.568"
        width="46.865"
        height="46.865"
        rx="7.432"
        stroke="url(#jgBorder)"
        strokeWidth="1.135"
        fill="none"
      />
      {/* Logo mark, nested so the viewBox handles the scaling: the artwork's
          own bounds are 7,3 -> 39,45, placed centred at 20x26 inside the tile. */}
      <svg x="14" y="11" width="20" height="26" viewBox="7 3 32 42" fill="white">
        <rect x="29" y="3" width="10" height="11" />
        <rect x="34" y="14" width="5" height="9" />
        <rect x="18" y="14" width="10" height="10" />
        <rect x="29" y="23" width="10" height="12" />
        <rect x="7" y="25" width="10" height="10" />
        <polygon points="19,34 37.5,34 28.5,45 19,45" />
      </svg>
      <defs>
        <linearGradient
          id="jgTile"
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#201E25" />
          <stop offset="1" stopColor="#323137" />
        </linearGradient>
        <linearGradient
          id="jgBorder"
          x1="24"
          y1="48"
          x2="24"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#313036" stopOpacity="0" />
          <stop offset="1" stopColor="#4B4951" />
        </linearGradient>
      </defs>
    </svg>
  );
}
