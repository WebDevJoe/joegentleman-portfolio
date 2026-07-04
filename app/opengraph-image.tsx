import { ImageResponse } from "next/og";

// Static social card shared across the site (per-page metadata can override).
export const alt = "Joe Gentleman — Product & Game UI/UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(49, 141, 217, 0.14)",
              color: "#133fc8",
              padding: "12px 22px",
              borderRadius: "999px",
              fontSize: "28px",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "999px",
                background: "#133fc8",
              }}
            />
            Available for work
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "92px",
              fontWeight: 600,
              color: "#252525",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            Joe Gentleman
          </div>
          <div style={{ fontSize: "40px", color: "#666666", letterSpacing: "-1px" }}>
            Product &amp; Game UI/UX Designer
          </div>
        </div>

        <div style={{ fontSize: "30px", color: "#999999" }}>joegentleman.co.uk</div>
      </div>
    ),
    { ...size },
  );
}
