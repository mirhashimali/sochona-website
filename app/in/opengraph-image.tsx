import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Sochona India | Stop Junk Leads. Build Systems.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient emerald background glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "rgba(37, 211, 102, 0.15)",
            filter: "blur(120px)",
          }}
        />

        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            sochona<span style={{ color: "#007AFF" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              backgroundColor: "rgba(37, 211, 102, 0.12)",
              border: "1px solid rgba(37, 211, 102, 0.3)",
              fontSize: "14px",
              fontWeight: 700,
              color: "#25D366",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            🇮🇳 India Edition
          </div>
        </div>

        {/* Main Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "1000px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-2px",
            }}
          >
            Stop Burning Money on Junk Leads.
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#25D366",
              lineHeight: 1.15,
              letterSpacing: "-2px",
            }}
          >
            Build a 24/7 Customer Machine.
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.5,
              marginTop: "8px",
            }}
          >
            Sub-1s Mobile Speed • Verified WhatsApp Lead Qualification • Custom CRM Dashboards
          </div>
        </div>

        {/* Footer info strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "32px",
          }}
        >
          <div style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.5)", fontWeight: 600 }}>
            sochona.net/in
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#25D366",
              color: "#000000",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "16px",
              fontWeight: 800,
            }}
          >
            Direct WhatsApp Booking: +91 9835182801
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}