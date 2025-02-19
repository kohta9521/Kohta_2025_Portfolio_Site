import { Metadata } from "next";

// 仮のデータ取得関数
const fetchBlogData = async (id: string) => {
  // API やデータベースからデータを取得
  const response = await fetch(`https://localhost:3000/blogs/${id}`);
  const data = await response.json();

  return {
    title: data.title,
    description: data.excerpt || "ブログの記事詳細ページです。",
    ogImage: data.topImage.url,
    url: `https://localhost:3000/blogs/${id}`,
    publishedAt: data.createdAt,
  };
};

// 動的なメタ情報を生成
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const blogData = await fetchBlogData(params.id);

  return {
    title: blogData.title,
    description: blogData.description,
    openGraph: {
      title: blogData.title,
      description: blogData.description,
      url: blogData.url,
      siteName: "My Blog",
      images: [{ url: blogData.ogImage }],
      type: "article",
      publishedTime: blogData.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blogData.title,
      description: blogData.description,
      images: [blogData.ogImage],
    },
  };
}
