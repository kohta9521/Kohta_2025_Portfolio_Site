import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// icons
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="w-screen h-auto py-6">
      <div className="w-10/12 max-h-11/12 mx-auto sm:flex sm:items-center sm:justify-between">
        {/* card */}
        <div className="w-full h-auto my-3 text-center border-b border-gray-700 sm:border-b-0 sm:border-r">
          <h2 className="text-4xl text-red-600 mb-1">Contact</h2>
          <p className="text-sm font-semibold mb-6">お問い合わせ</p>
          <Image
            className="mx-auto mb-5"
            src="/images/contact.png"
            width={50}
            height={100}
            alt="contact-image"
          />
          <p className="text-sm font-medium mb-5 leading-relaxed">
            まずはお気軽にお問い合わせください。
            <br />
            担当者が３営業日以内のご連絡させていただきます。
          </p>
          <Link
            href="/contact"
            className="flex w-full justify-center items-center gap-3 mb-10 transition-all duration-300 hover:scale-105 hover:text-red-500"
          >
            <p className="text-xs font-semibold">
              お問い合わせフォームからお問い合わせ
            </p>
            <IoArrowForwardCircleSharp
              size={24}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* download */}
        <div className="w-full h-auto my-8 text-center border-b border-gray-700 sm:border-b-0 sm:border-r">
          <h2 className="text-4xl text-red-600 mb-1">Download</h2>
          <p className="text-sm font-semibold mb-6">資料ダウンロード</p>
          <Image
            className="mx-auto mb-5"
            src="/images/download.png"
            width={100}
            height={600}
            alt="download-image"
          />
          <p className="text-sm font-medium mb-5 leading-relaxed">
            ポートフォリオ資料をダウンロードできます。
            <br />
            Webサイト制作やアプリ制作のご参考にどうぞ。
          </p>
          <Link
            href="/contact"
            className="flex w-full justify-center items-center gap-3 mb-10 transition-all duration-300 hover:scale-105 hover:text-red-500"
          >
            <p className="text-xs font-semibold">
              お問い合わせフォームからお問い合わせ
            </p>
            <IoArrowForwardCircleSharp
              size={24}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* News */}
        <div className="w-full h-auto my-8 text-center">
          <h2 className="text-4xl text-red-600 mb-1">Kohta News</h2>
          <p className="text-sm font-semibold mb-6">メルマガ登録</p>
          <Image
            className="mx-auto mb-10"
            src="/images/mail.png"
            width={100}
            height={600}
            alt="download-image"
          />
          <p className="text-sm font-medium mb-5 leading-relaxed">
            kohtaの日々のブログや活動を定期的にお届けします。
            <br />
            サイト制作のクーポンや最新情報もお知らせします。
          </p>
          <Link
            href="/contact"
            className="flex w-full justify-center items-center gap-3 mb-10 transition-all duration-300 hover:scale-105 hover:text-red-500"
          >
            <p className="text-xs font-semibold">登録はこちらから</p>
            <IoArrowForwardCircleSharp
              size={24}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
