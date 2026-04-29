import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} · ${profile.tagline}`;

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(1200px 700px at 20% -10%, rgba(191,164,96,0.22), transparent 60%), radial-gradient(900px 500px at 95% 110%, rgba(42,74,107,0.22), transparent 60%), #f6efe2",
          color: "#1b1813",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6b6258",
          }}
        >
          A personal site
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 132,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            {profile.name}
            <span style={{ color: "#2a4a6b" }}>.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 38,
              fontStyle: "italic",
              color: "#1b1813cc",
              maxWidth: 900,
              lineHeight: 1.2,
              display: "flex",
            }}
          >
            {`${profile.tagline}.`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6b6258",
          }}
        >
          <span>
            {profile.currently.role} · {profile.currently.at}
          </span>
          <span>{profile.location}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
