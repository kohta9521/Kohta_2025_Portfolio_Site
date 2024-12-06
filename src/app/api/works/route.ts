import { NextResponse } from "next/server";
import { client } from "@/libs/client";


export async function GET() {
  try {
    const data = await client.get({ endpoint: "works" });
    return NextResponse.json(data.contents);
  } catch (error) {
    console.error("Error fetching works:", error);
    return NextResponse.json(
      { error: "Failed to fetch works" },
      { status: 500 }
    );
  }
}
