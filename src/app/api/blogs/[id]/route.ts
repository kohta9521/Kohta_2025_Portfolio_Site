import { NextRequest, NextResponse } from "next/server";
import { client } from "@/libs/client";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const data = await client.get({
      endpoint: `blogs/${id}`,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
