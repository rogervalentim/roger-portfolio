import { ImageResponse } from "next/og";
import { profile } from "./data/profile";

export const alt = "Roger Valentim — Desenvolvedor Front-End. React, Next.js, TypeScript e Tailwind CSS. Interfaces responsivas e fiéis ao Figma.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: 80, background: "linear-gradient(120deg, #000319, #0C0E23)", color: "#E4ECFF", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 24, letterSpacing: 5 }}>PORTFÓLIO · SÃO PAULO, BRASIL</div>
      <div style={{ display: "flex", marginTop: 44, fontSize: 76, fontWeight: 700, color: "white" }}>{profile.name}</div>
      <div style={{ display: "flex", marginTop: 8, fontSize: 54, fontWeight: 700, color: "#CBACF9" }}>{profile.role}</div>
      <div style={{ display: "flex", marginTop: 36, fontSize: 28 }}>React · Next.js · TypeScript · Tailwind CSS</div>
      <div style={{ display: "flex", marginTop: 20, fontSize: 26 }}>Interfaces responsivas e fiéis ao Figma.</div>
    </div>,
    size,
  );
}
