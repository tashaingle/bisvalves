import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "BiS Valves: stainless steel valves for pressures up to 20,000 psi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = async (name: string) =>
  `data:image/png;base64,${await readFile(join(process.cwd(), "assets", name), "base64")}`;

const logo = await asset("og-logo.png");
const valve = await asset("og-valve.png");

// The link preview shown when the site is shared (LinkedIn, Teams, email).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #e3efe3 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", padding: "64px 0 64px 72px", width: 640 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} height={96} alt="" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 48,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#0f1a12",
              letterSpacing: -1.5,
            }}
          >
            <span>Built for pressures</span>
            <span style={{ display: "flex" }}>
              up to&nbsp;<span style={{ color: "#278030" }}>20,000 psi.</span>
            </span>
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#5a665d", lineHeight: 1.35 }}>
            Stainless steel valves designed, machined and tested in Dorset since 1971.
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={valve} width={470} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
