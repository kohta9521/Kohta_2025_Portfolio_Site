import React from "react";

// next

// components
import Logo from "../atoms/Logo";
import FooterSubItem from "../atoms/FooterSubItem";

const Footer = () => {
  return (
    <div className="w-screen h-auto py-10 border-t border-gray-500">
      <div className="w-10/12 mx-auto">
        <div className="">
          <Logo id="footer-logo" link="/" size="medium" color="red" />
        </div>
        <div className=""></div>
      </div>
      {/* privacy 個人情報関連 */}
      <div className="w-10/12 mx-auto py-4">
        <FooterSubItem
          id="footer-management"
          text="個人情報の取り扱いについて"
          link="/management"
        />
        <FooterSubItem
          id="footer-sitemap"
          text="サイトマップ"
          link="/sitemap"
        />
        <FooterSubItem
          id="footer-contact"
          text="お問い合わせ"
          link="/contact"
        />
      </div>
      <p className="text-xs text-center text-gray-500 font-semibold mt-4">
        © 2025 kohta kochi
      </p>
    </div>
  );
};

export default Footer;
