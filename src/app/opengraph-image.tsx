import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — Guided Tours & Vehicle Rentals in Ghana`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#0d1c32 0%,#0055c7 140%)", color: "#fff" }}>
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#b0c6ff", marginBottom: 24 }}>
          Premium Ghanaian Travel &amp; Transport
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, maxWidth: 950 }}>
          Explore Ghana in Unmatched Comfort &amp; Style
        </div>
        <div style={{ fontSize: 36, marginTop: 40, color: "#d9e2ff" }}>{SITE.name}</div>
      </div>
    ),
    size,
  );
}
