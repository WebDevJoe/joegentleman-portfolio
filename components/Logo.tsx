export function LogoTile({ size = 48 }: { size?: number }) {
  // The whole tile is one inline SVG (gradient fill, top-highlight border, and
  // the J glyph) so it paints natively at any scale — no rasterisation, no
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
      <path
        transform="translate(10.08 10.08) scale(0.435)"
        fill="white"
        d="M50.9424 37.2597V41.0683C50.9424 52.7224 41.9772 60.0567 32.6074 59.9999C21.3289 59.9999 13.1157 50.4485 13 41.0683H25.0303C26.2449 46.0142 30.4094 48.4593 35.21 48.3456C42.6711 48.0046 48.3967 42.8309 50.8838 37.2597H50.9424ZM49.1494 4.00287C50.4216 4.05994 50.9424 5.25389 50.9424 6.33393L51 29.3583C50.942 37.4876 45.6785 43.8543 38.5645 46.0146V16.4531C38.6223 11.5073 41.6298 7.81202 44.9844 5.53803C46.3147 4.74214 48.1083 3.94602 49.1494 4.00287Z"
      />
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
