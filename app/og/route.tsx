import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Nate Ksou";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#FAFAFA",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#1A1A1A",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#666666",
          }}
        >
          nathansou.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
