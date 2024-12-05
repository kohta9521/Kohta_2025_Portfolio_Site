import { NextResponse } from "next/server";
import { client } from "@/libs/client";

export async function GET() {
  try {
    const data = await client.get({ endpoint: "blogs" });
    return NextResponse.json(data.contents);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
