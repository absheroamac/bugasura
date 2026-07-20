import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url);
  const name = (searchParams.get("name") || "YOU").toUpperCase();
  const position = searchParams.get("position") || "847";

  const fontsDir = path.join(process.cwd(), "public", "fonts");
  const [semiboldData, boldData] = await Promise.all([
    readFile(path.join(fontsDir, "ClashGrotesk-Semibold.ttf")),
    readFile(path.join(fontsDir, "ClashGrotesk-Bold.ttf")),
  ]);

  const bgUrl = `${origin}/beta-share-card.png`;

  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 627, display: "flex", position: "relative" }}>
        {/* Background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bgUrl} width={1200} height={627} style={{ position: "absolute", top: 0, left: 0 }} alt="" />

        {/* Sign overlay - centered on the cream paper */}
        <div
          style={{
            position: "absolute",
            top: 337,
            left: 173,
            width: 309,
            height: 146,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "ClashGrotesk", fontWeight: 600, fontSize: 23, color: "#1E1E1E", textTransform: "uppercase", letterSpacing: "0.06em", lineHeight: 1.3 }}>
            {name}
          </span>
          <span style={{ fontFamily: "ClashGrotesk", fontWeight: 700, fontSize: 62, color: "#E52727", lineHeight: 1.05, marginTop: 4 }}>
            #{position}
          </span>
        </div>

        {/* Right side text - center aligned */}
        <div
          style={{
            position: "absolute",
            top: 368,
            left: 598,
            width: 452,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Line 1: I'm #847 in line */}
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
            <span style={{ fontFamily: "ClashGrotesk", fontWeight: 600, fontSize: 32, color: "#ffffff", lineHeight: 1.25, marginRight: 8 }}>{"I'm"}</span>
            <span style={{ fontFamily: "ClashGrotesk", fontWeight: 600, fontSize: 32, color: "#FF8C00", lineHeight: 1.25, marginRight: 8 }}>{`#${position}`}</span>
            <span style={{ fontFamily: "ClashGrotesk", fontWeight: 600, fontSize: 32, color: "#ffffff", lineHeight: 1.25 }}>{"in line"}</span>
          </div>

          {/* Line 2 */}
          <span style={{ fontFamily: "ClashGrotesk", fontWeight: 600, fontSize: 32, color: "#ffffff", lineHeight: 1.25, marginTop: 2 }}>
            to build my own QA Agent.
          </span>

          {/* Line 3 */}
          <span style={{ fontFamily: "ClashGrotesk", fontWeight: 600, fontSize: 26, color: "rgba(255,255,255,0.65)", lineHeight: 1.3, marginTop: 14 }}>
            Are you behind me?
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 627,
      fonts: [
        { name: "ClashGrotesk", data: semiboldData, weight: 600, style: "normal" },
        { name: "ClashGrotesk", data: boldData, weight: 700, style: "normal" },
      ],
    }
  );
}
