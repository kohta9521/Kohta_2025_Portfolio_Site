import React from "react";

// scss
import styles from "./Blogs.module.scss";

// components
import SubPageTemp from "@/components/template/SubPageTemp";
import SubTitle from "@/components/atoms/SubTitle";
import SubText from "@/components/atoms/SubText";
// import BlogSearchBox from "@/components/organism/BlogSearchBox";
import BlogsPage from "@/components/subpage/BlogPage";

const Blogs = () => {
  return (
    <SubPageTemp id="blogs" enTitle="BLOGS" jaTitle="ブログ" desc="ブログ一覧">
      <SubTitle id="#title" size="h1" text="ブログ一覧" />
      <SubText
        id="#blog_top_text"
        text="kohtaの執筆したブログ記事一覧です。単語検索・タグ検索・関連日時での検索が可能です。ぜひご利用ください。"
      />
      {/* <BlogSearchBox /> */}
      <div className={styles.blogContainer}>
        <BlogsPage />
      </div>
    </SubPageTemp>
  );
};

export default Blogs;
