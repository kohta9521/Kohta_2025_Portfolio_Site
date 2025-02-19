import React from "react";

// next
import Image from "next/image";

// components
import BasicTemp from "@/components/template/BasicTemp";
import SubPageTitle from "@/components/atoms/SubPageTitle";
import Button from "@/components/subpage/Button";

const Service = () => {
  return (
    <BasicTemp
      id="service"
      linkArr={[{ link: "/service", text: "kohtaの提供しているサービス一覧" }]}
      title="提供しているサービス一覧"
      desc="kohtaの提供しているサービス一覧です。ご覧ください。"
    >
      <SubPageTitle id="service-title-1" title="はじめに" />
      <p className="subpage-main-text">
        こちらのページでは私、kohtaの提供しているサービスをご覧いただくことが可能です。
        <br />
        私はWebサイトの制作から動画の制作、イベントなどの企画など多岐にわたるお仕事を請け負ってきました。
        様々なお仕事を単体で捉えるだけでなく、それぞれから学んだ知見や経験を全て糧にして次のクリエイティブに繋げていきます。
      </p>
      <SubPageTitle id="service-title-2" title="Web制作" />
      <Image
        src="/images/freers.png"
        width={1280}
        height={720}
        alt="service-page-web-image"
        className="subpage-main-image"
      />
      <p className="subpage-main-text">
        私がいただいているお仕事の大半がこちらのWebサイト制作です。
        <br />
        Webサイトと言っても種類は様々ですが主に企業様の
        <span className="text-red-600 font-semibold">
          公式ホームページ・イベント用LP・通販サイト
        </span>
        の構築が挙げられます。
        <br />
        Webサイトは今や会社だけが持つものではありません。クリエイターを代表とする個人も持つ時代です。
        <br />
        URlを介して気軽にその人・サービスを閲覧でき世界中の人に共有することが可能です。
        <br />
        私はお仕事としてWebサイトを制作をしています。しかし根底には私が制作をしたWebサイトを通じてより多くの人に内容を認知してもらいたいと考えております。
        <br />
        以下のリンクより、金額・使用技術・納期など詳細をご覧いただけます。
      </p>
      <Button
        id="service-web-button"
        link="/service/web"
        text="より詳細な情報を見る"
      />
      <SubPageTitle id="service-title-3" title="モバイルアプリ開発" />
      <Image
        src="/images/gate.webp"
        width={1280}
        height={720}
        alt="service-page-web-image"
        className="subpage-main-image"
      />
      <p className="subpage-main-text">
        私、kohtaはモバイル開発も行っています。
        <br />
        IOSだけの開発だけでなくAndroidにも対応したクロスプラットフォームでの開発が可能です。
        <br />
        主に開発ではReact
        Nativeを使用して開発を行っています。上記の画像でご覧いただける通り管理者とユーザーでUI/UXを分けたイベントの入場管理システムなどをこれまで開発してきました。
      </p>
      <SubPageTitle id="service-title-4" title="写真撮影・動画編集" />
      <Image
        src="/images/gate.webp"
        width={1280}
        height={720}
        alt="service-page-web-image"
        className="subpage-main-image"
      />
      <p className="subpage-main-text">
        写真撮影・動画編集のお仕事も請け負っております。
        <br />
        特に多い案件といたしましては、Webサイトに掲載するたの会社の中の雰囲気、主要メンバーの顔写真の撮影などです。
        <br />
        写真は全てプロのカメラマンがおりますのでそちらにお願いをして、撮影・レタッチまでを行います。
        <br />
        <span className="text-red-600 font-semibold">
          また、Webサイトに掲載する写真に関しましては、Webサイトのデザインや色味などを考慮した画角やレタッチなども行いますので高品質なサービスを提供可能です。
        </span>
        写真撮影も含めたWeb制作をご希望の方はお気軽にWeb制作のヒアリングの際に仰ってください。写真の枚数などによって金額が上下するため見積もりを都度出させていただきます。
      </p>
      <Button
        id="service-photo-button"
        link="/contact"
        text="ヒアリングをしてみる"
      />
      <SubPageTitle id="service-title-5" title="DJ活動・イベント企画" />
      <Image
        src="/images/event.webp"
        width={1280}
        height={720}
        alt="service-page-web-image"
        className="subpage-main-image"
      />
      <p className="subpage-main-text">
        イベントの企画・運営も私だけではないのですが行っています。
        <br />
        これまでのイベントでは平均して1000人以上の大学生や社会人を集客、様々なトピックにあったイベントを行ってきました。(ex.卒業イベント・SDGs・起業)
        <br />
        また企業様にも何度もスポンサーとして入ってもらっており、独自のネットワークを介した大学生や新社会人に向けた認知度向上の一役を担っております。
        <br />
        こちらも金額面など都度変化いたしますのでお気軽にご相談ください。
      </p>
      <Button
        id="service-photo-button"
        link="/contact"
        text="簡単に相談してみる"
      />
    </BasicTemp>
  );
};

export default Service;
