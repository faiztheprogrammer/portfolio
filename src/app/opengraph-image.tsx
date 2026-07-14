import { ImageResponse } from "next/og";

export const alt =
  "Faiz Ur Rehman — Software Engineer. Full-Stack, AI Automation & Quality Engineering.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#8e8e96",
            fontSize: 26,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 99,
              background: "#10b981",
            }}
          />
          faiz-rehman.vercel.app
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, color: "#f4f4f5" }}>
            Faiz Ur Rehman
          </div>
          <div style={{ fontSize: 52, fontWeight: 700, color: "#10b981" }}>
            Software Engineer
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#c9c9cf" }}>
            Full-Stack · AI Automation · Quality Engineering
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#8e8e96",
            fontSize: 24,
          }}
        >
          <div
            style={{ width: 10, height: 10, borderRadius: 99, background: "#10b981" }}
          />
          software that&apos;s understood — not just software that works
        </div>
      </div>
    ),
    size,
  );
}
