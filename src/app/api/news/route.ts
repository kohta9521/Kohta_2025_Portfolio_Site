import { NextResponse } from "next/server";

// client
import { newsclient } from "@/libs/newsclient";

export async function GET() {
  try {
    const data = await newsclient.get({ endpoint: "news" });
    return NextResponse.json(data.contents);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
