import { NextResponse } from "next/server";
import { client } from "@/libs/client"; // MicroCMS クライアント

// GET メソッドのエクスポート
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params; // URL パラメータから ID を取得
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // MicroCMS API からデータ取得
    const data = await client.get({ endpoint: `works/${id}` });

    // 成功レスポンスを返す
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching work:", error);
    return NextResponse.json(
      { error: "Failed to fetch work data" },
      { status: 500 }
    );
  }
}
