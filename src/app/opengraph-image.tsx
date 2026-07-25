import { ImageResponse } from "next/og";

export const alt = "Legal Red Flags — 法律防骗指南";
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
          法律防骗指南 — 识别法律纠纷中的危险信号
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
            20
            <span style={{ fontSize: "16px", color: "#999", marginTop: "4px" }}>
              危险信号
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
              真实案例
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
              风险自测题
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
