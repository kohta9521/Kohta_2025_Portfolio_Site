import React from "react";

// components
import BasicTemp from "@/components/template/BasicTemp";
import SubPageTitle from "@/components/atoms/SubPageTitle";

const Contact = () => {
  return (
    <BasicTemp
      id="contact"
      linkArr={[{ link: "/contact", text: "お問い合わせ" }]}
      title="お問い合わせ"
      desc="お問い合わせはこちらからお願いします。"
    >
      <SubPageTitle id="contact-title-1" title="お問い合わせについて" />
      <p className="subpage-main-text">
        以下のフォームよりお問い合わせください。
        担当者が3営業日以内にご連絡いたします。
        <br />
        また、お問合せの際に入力していただいたメールアドレス宛に、お問い合わせ内容の確認メールを自動送信いたします。
        <br />
      </p>
      <SubPageTitle id="contact-title-2" title="お問い合わせフォーム" />
      {/* 📌 Contact Form */}
      <form
        method="post"
        action="https://kohta-engineer-portfolio.form.newt.so/v1/RqLXd0DCc"
        className="max-w-lg w-full mx-auto bg-gray-900 p-6 rounded-lg shadow-md"
      >
        {/* 📝 名前 */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-red-600 font-semibold mb-2"
          >
            お名前<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            id="name"
            name="name"
            required
            placeholder="山田太郎"
          />
        </div>

        {/* ✉️ メールアドレス */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-red-600 font-semibold mb-2"
          >
            メールアドレス<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="sample@sample.mail"
            required
          />
        </div>

        {/* 💬 メッセージ */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-red-600 font-semibold mb-2"
          >
            お問い合わせ内容<span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            required
          ></textarea>
        </div>

        {/* 📩 送信ボタン */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out hover:bg-red-700 shadow-md hover:shadow-lg"
        >
          送信
        </button>
      </form>
    </BasicTemp>
  );
};

export default Contact;
