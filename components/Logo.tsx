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
      {/* Logo mark (Joe.svg). Its whole 48x48 frame is nested at 75% of the
          tile, i.e. 36x36 inset by 6, the 48-in-64 ratio from the source. */}
      <svg x="6" y="6" width="36" height="36" viewBox="0 0 48 48">
        <path
          d="M39 34L33.8662 39.5L29 45H19V35H29V23H34V14H29V3H39V34ZM17 35H7V25H17V35ZM28 24H18V14H28V24Z"
          fill="white"
        />
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
