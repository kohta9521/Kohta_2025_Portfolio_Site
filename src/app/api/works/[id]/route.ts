import { NextResponse, NextRequest } from "next/server";
import { client } from "@/libs/client"; // MicroCMS クライアント

// GET メソッドのエクスポート
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
      endpoint: `works/${id}`,
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
