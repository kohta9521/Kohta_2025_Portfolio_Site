import React from "react";

// components
import PostTemp from "@/components/template/PostTemp";

const Blogs = () => {
  return (
    <PostTemp
      id="blogs"
      linkArr={[{ link: "/blogs", text: "ブログ記事一覧ページ" }]}
      title="ブログ記事一覧"
    >
      <h1>blog page</h1>
    </PostTemp>
  );
};

export default Blogs;
