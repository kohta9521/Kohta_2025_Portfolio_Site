import React from "react";
import Link from "next/link";

const Thanks = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      {/* 🎉 紙吹雪アニメーション */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 複数の紙吹雪を生成 */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`confetti confetti-${i + 1}`}></div>
        ))}
      </div>

      {/* 🎊 Thanks!! のメッセージ */}
      <h1 className="text-4xl sm:text-6xl font-bold text-red-600 drop-shadow-lg mb-4 z-10">
        🎉 Thanks!! ✨💖
      </h1>
      <p className="text-gray-300 text-lg sm:text-xl mb-8 z-10">
        担当者からの返信をお待ちください 😊
      </p>

      {/* 🏠 トップページに戻るボタン */}
      <Link
        href="/"
        className="bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out hover:bg-red-700 shadow-md hover:shadow-lg z-10 relative"
      >
        トップページに戻る
      </Link>
    </div>
  );
};

export default Thanks;
