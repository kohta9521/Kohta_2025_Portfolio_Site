import React from "react";

// components
import SecTitle from "../atoms/SecTitle";
// import NewsCard from "../molecules/NewsCard";

const News = () => {
  return (
    <div className="w-screen h-auto pt-20 pb-20">
      <div className="w-10/12 sm:w-9/12 max-w-11/12 mx-auto">
        <SecTitle id="home-news" jaText="ニュース一覧" enText="News" />
        {/* main */}
        <div className="w-full h-auto py-16"></div>
      </div>
    </div>
  );
};

export default News;
