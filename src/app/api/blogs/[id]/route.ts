import { NextRequest, NextResponse } from "next/server";
import { client } from "@/libs/client";

export async function GET(
  req: NextRequest,
  context: { params: { [key: string]: string } } // 動的なキーを持つ型を指定
) {
  const { id } = context.params; // params から id を取得

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

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
