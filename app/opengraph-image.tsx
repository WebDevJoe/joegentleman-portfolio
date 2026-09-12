import { ImageResponse } from "next/og";

// Static social card shared across the site (per-page metadata can override).
// Dark plate, chartreuse mark, same palette as the site itself.
export const alt = "Joe Gentleman | UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MARK =
  "M39 34L33.8662 39.5L29 45H19V35H29V23H34V14H29V3H39V34ZM17 35H7V25H17V35ZM28 24H18V14H28V24Z";

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
          background: "#0a0a0a",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "84px",
              height: "84px",
              borderRadius: "14px",
              background: "linear-gradient(to bottom, #f1fa38, #faff93)",
            }}
          >
            <svg width="62" height="62" viewBox="0 0 48 48">
              <path d={MARK} fill="#252525" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#fafafa", fontSize: "34px", fontWeight: 600 }}>
              Joe Gentleman
            </div>
            <div style={{ color: "#a3a3a3", fontSize: "26px" }}>UX Designer</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              color: "#fafafa",
              fontSize: "76px",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Design built to Solve
          </div>
          <div style={{ color: "#a3a3a3", fontSize: "30px", lineHeight: 1.4 }}>
            A UX designer from the north east of Scotland, currently working @ Hunted Cow
            Studios
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#737373",
            fontSize: "24px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#f1fa38",
            }}
          />
          joegentleman.co.uk
        </div>
      </div>
    ),
    size,
  );
}
