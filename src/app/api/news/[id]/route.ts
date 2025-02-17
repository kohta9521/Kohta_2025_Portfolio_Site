import { NextRequest, NextResponse } from "next/server";
import { client } from "@/libs/client";

// 非同期に `id` を取得
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // 非同期で id を取得

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const data = await client.get({
      endpoint: `news/${id}`,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching news by ID:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
