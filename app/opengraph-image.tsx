import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Joe Gentleman — Product & Game UI/UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(120% 80% at 100% 0%, #e9f2ff 0%, #ffffff 60%)",
          color: "#252525",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#133fc8",
            fontWeight: 500,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#133fc8",
            }}
          />
          Available for projects
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: -3,
            }}
          >
            Joe Gentleman
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: "#666666",
              letterSpacing: -0.6,
            }}
          >
            Product &amp; Game UI/UX Designer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#666666",
          }}
        >
          <span>joegentleman.co.uk</span>
          <span>UK · Open to roles &amp; freelance</span>
        </div>
      </div>
    ),
    size,
  );
}
