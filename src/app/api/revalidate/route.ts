import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
    try {
        const { body, isValidSignature } = await parseBody<{
            _type: string;
            slug?: { current?: string };
        }>(req, process.env.SANITY_WEBHOOK_SECRET);

        // Validate the webhook signature (important for security)
        if (!isValidSignature) {
            return new Response("Invalid signature", { status: 401 });
        }

        if (!body?._type) {
            return new Response("Bad Request", { status: 400 });
        }

        // Revalidate specific paths based on document type
        switch (body._type) {
            case "wifi6Page":
                revalidatePath("/wifi-6");
                return NextResponse.json({
                    revalidated: true,
                    now: Date.now(),
                    path: "/wifi-6",
                });

            case "homePage":
                revalidatePath("/");
                return NextResponse.json({
                    revalidated: true,
                    now: Date.now(),
                    path: "/",
                });

            default:
                // Revalidate all paths if document type is unknown
                revalidatePath("/", "layout");
                return NextResponse.json({
                    revalidated: true,
                    now: Date.now(),
                    path: "all",
                });
        }
    } catch (err: unknown) {
        console.error(err);
        return new Response(
            err instanceof Error ? err.message : "Internal Server Error",
            { status: 500 }
        );
    }
}
