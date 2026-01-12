import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Gnet Telecomunicaciones";

    // Fetch logo for Edge runtime
    const logoSrc = await fetch(
      new URL("../../../../public/Gnet-white.png", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #171717 2%, transparent 0%), radial-gradient(circle at 75px 75px, #171717 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo Container */}
        <div style={{ display: "flex", marginBottom: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            width="180"
            height="80"
            src={logoSrc as any}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 800,
            padding: "0 60px",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 20,
            textWrap: "balance",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 400,
            color: "#a3a3a3",
            marginTop: 10,
          }}
        >
          Internet Fibra Óptica • Bariloche
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
