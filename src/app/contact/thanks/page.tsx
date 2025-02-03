import React from "react";

// next
import Link from "next/link";

const Thanks = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      {/* 🎉 紙吹雪アニメーション */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 複数の紙吹雪を生成 */}
        <div className="confetti confetti-1"></div>
        <div className="confetti confetti-2"></div>
        <div className="confetti confetti-3"></div>
        <div className="confetti confetti-4"></div>
        <div className="confetti confetti-5"></div>
        <div className="confetti confetti-6"></div>
        <div className="confetti confetti-7"></div>
        <div className="confetti confetti-8"></div>
        <div className="confetti confetti-9"></div>
        <div className="confetti confetti-10"></div>
        {/* 他にも必要なだけ `div` を追加 */}
      </div>

      {/* 🎊 Thanks!! のメッセージ */}
      <h1 className="text-4xl sm:text-6xl font-bold text-red-600 drop-shadow-lg mb-4">
        🎉 Thanks!! ✨💖
      </h1>
      <p className="text-gray-300 text-lg sm:text-xl mb-8">
        担当者からの返信をお待ちください 😊
      </p>

      {/* 🏠 トップページに戻るボタン */}
      <Link
        href="/"
        className="bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out hover:bg-red-700 shadow-md hover:shadow-lg"
      >
        トップページに戻る
      </Link>
    </div>
  );
};

export default Thanks;
