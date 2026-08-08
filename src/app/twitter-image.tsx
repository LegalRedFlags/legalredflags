import { ImageResponse } from "next/og";

export const alt =
  "Legal Red Flags — Spot fraud in legal disputes before it costs you";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d1b1b 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div style={{ fontSize: "72px" }}>🚩</div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            Legal Red Flags
          </div>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#cccccc",
            textAlign: "center",
            lineHeight: 1.6,
            maxWidth: "800px",
          }}
        >
          Spot fraud in legal disputes — before it costs you everything
        </div>
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#e74c3c",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            36
            <span style={{ fontSize: "16px", color: "#999", marginTop: "4px" }}>
              Red Flags
            </span>
          </div>
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "#444",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#e74c3c",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            3
            <span style={{ fontSize: "16px", color: "#999", marginTop: "4px" }}>
              Real Cases
            </span>
          </div>
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "#444",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#e74c3c",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            12
            <span style={{ fontSize: "16px", color: "#999", marginTop: "4px" }}>
              Risk Questions
            </span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "40px",
            fontSize: "18px",
            color: "#666",
          }}
        >
          legalredflag.org
        </div>
      </div>
    ),
    { ...size }
  );
}
