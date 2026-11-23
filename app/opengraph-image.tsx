import { ImageResponse } from "next/og";
import { profile } from "./data/profile";

export const alt =
  "Roger Valentim — Engenheiro Front-End. Interfaces React e Next.js com TypeScript, fiéis ao Figma e de alta performance.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          padding: 80,
          background: "#0A0A0B",
          color: "#EDEDEF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", width: 8, height: 8, borderRadius: 8, background: "#10B981" }} />
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 4, color: "#A1A1AA" }}>
            DISPONÍVEL PARA FRONT-END · SÃO PAULO, BR
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 78, fontWeight: 600, letterSpacing: -3 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 34, color: "#A1A1AA", letterSpacing: -1, maxWidth: 940 }}>
          Engenheiro Front-End focado em interfaces de alta precisão e performance.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            paddingTop: 24,
            borderTop: "1px solid #222226",
            fontSize: 20,
            color: "#71717A",
            letterSpacing: 3,
          }}
        >
          REACT · NEXT.JS · TYPESCRIPT · TAILWIND CSS · FIGMA
        </div>
      </div>
    ),
    size,
  );
}
