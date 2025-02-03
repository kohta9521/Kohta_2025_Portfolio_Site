import React from "react";

// components
import BasicTemp from "@/components/template/BasicTemp";
import SubPageTitle from "@/components/atoms/SubPageTitle";

const Management = () => {
  return (
    <BasicTemp
      id="management"
      linkArr={[{ link: "/management", text: "個人情報の取り扱いについて" }]}
      title="個人情報の取り扱いについて"
      desc="kohta（以下「弊社」といいます）は、以下のとおり個人情報の取り扱いをいたします。"
    >
      <SubPageTitle id="privacy-title-1" title="個人情報の利用目的" />
      <p className="subpage-main-text">
        弊社のWebサイト上にて、提供するサービスを利用いただく際や弊社へのお問い合わせをされる際に、必要に応じてお客様の個人情報をお知らせいただく場合がございます。弊社はお客様から情報を収集する際は、あらかじめその目的・利用内容をお知らせした上で、適切な範囲で個人情報の収集をいたします。また、お知らせした目的以外に個人情報を利用する際には、改めて目的をお知らせし、お客様のご了解をいただきます。
        弊社が管理しておりますお客様の個人情報を、紛失、破壊、社外への不正な流出、改ざん、不正アクセスから保護するために、合理的な範囲内にて安全対策を講じます。
        弊社は、利用目的を達成したと自ら判断した個人情報については廃棄する場合がございます。
      </p>
      <SubPageTitle id="management-title-2" title="個人情報の提供の任意性" />
      <p className="mb-10 text-base leading-relaxed sm:leading-loose">
        お客様からの個人情報のご提供は、お客様の任意によるものですが、ご提供いただけない場合は、サービスについて部分的もしくはすべてを、ご利用できないものがありますので、あらかじめご了承ください。
      </p>
      <SubPageTitle id="management-title-3" title="個人情報の利用目的" />
      <p className="mb-10 text-base leading-relaxed sm:leading-loose">
        ご本人から直接書面等にて取得する場合およびそれ以外にて取得する場合の個人情報は、業務の遂行に必要な範囲内で以下の利用目的で管理および利用いたします。
      </p>
      <p className="mb-10 text-base text-gray-400">現在準備中...</p>
      <SubPageTitle
        id="management-title-4"
        title="第三者への開示・提供について"
      />
      <p className="mb-10 text-base leading-relaxed sm:leading-loose">
        弊社は、以下の場合を除き、お預かりしている個人情報を第三者に開示・提供いたしません。
        ご本人様の同意がある場合。
        司法機関または行政機関から、法的義務を伴う個人情報の開示要請を受けた場合など、法令に基づく場合。
        合併、会社分割、営業譲渡その他の事由によって事業の継承が行われる場合。
        人の生命、身体または財産の保護のために必要であって、お客様の同意を取ることが困難な場合。
        個人情報の保護に関する法律27条2項本文に基づく場合。
      </p>
      <SubPageTitle
        id="management-title-5"
        title="個人情報の取り扱いの委託について"
      />
      <p className="mb-10 text-base leading-relaxed sm:leading-loose">
        弊社は、各種業務、サービスへの対応を行う上で必要となる業務を委託することがあります。この場合、当該業務に必要となる最小限の個人情報のみとし、使用範囲もその範囲に限定いたします。また、委託先に対し、契約などにより、委託業務に必要な範囲内での利用の徹底など、個人情報の適切な保護に努めます。
      </p>
      <SubPageTitle
        id="management-title-6"
        title="個人情報の開示・訂正・削除について"
      />
      <p className="mb-10 text-base text-gray-400">現在準備中...</p>
      <SubPageTitle
        id="management-title-7"
        title="クッキー（Cookie）・Webビーコンについて"
      />
      <p className="mb-10 text-base leading-relaxed sm:leading-loose">
        弊社は、Webサイトにおけるより良いサービス提供、弊社の広告宣伝効果の判断、保守管理、利用状況に関する統計分析、その他社内業務を目的に、クッキー・Webビーコンを使用することがあります。クッキーとは、インターネットの効果的な運用のために、Webサーバがお客様のブラウザに送信する小さなテキストファイルです。お客様は、ブラウザの設定により、クッキーの受け取りを拒否したり、クッキーを受け取ったときに警告を表示させたりできます。ただし、その場合は一部機能に制約が生じることがあります。
        Webビーコンとは、クッキーを利用し、お客様のコンピュータ、携帯端末、その他電子機器からのアクセス状況を把握して、特定のWebページの利用状況等について統計をとるために使用するツールです。お客様はブラウザの設定でクッキーの受け取りを制限することにより、Webビーコンを拒否することができます。クッキーの設定方法は、お使いのブラウザの「ヘルプ」メニューでご確認ください。
      </p>
      <SubPageTitle
        id="management-title-8"
        title="Google広告拡張コンバージョンについて"
      />
      <p className="mb-10 text-base leading-relaxed sm:leading-loose">
        弊社は、お客様の興味・関心等に合わせた広告の配信、ならびに広告効果測定の精度向上等の目的で、Google広告拡張コンバージョンを利用し、プライバシーに配慮した上でお客様の個人情報（ハッシュ化したメールアドレス・電話番号・住所等のデータ）を配信事業者であるGoogle
        LLCに提供することがあります。 弊社から送信した情報をGoogle
        LLC社では広告配信以外の目的で利用することはございません。
      </p>
      <SubPageTitle id="management-title-9" title="アクセスログについて" />
      <p className="mb-10 text-base leading-relaxed sm:leading-loose">
        弊社のWebサイトでは、アクセスされた方の情報をアクセスログ（アクセス履歴）というかたちで記録しています。アクセスログは、アクセスされた方のドメイン名やIPアドレス、使用しているブラウザの種類、アクセス日時などが含まれますが、通常は個人を特定できる情報を含むものではありません。これらのアクセスログはWebサイトの保守管理や利用状況に関する統計分析などのために活用されますが、それ以外の目的で利用されることはありません。
      </p>
      <SubPageTitle id="management-title-10" title="SSLについて" />
      <p className="mb-10 text-base leading-relaxed sm:leading-loose">
        弊社のWebサイトは、お客様の個人情報を保護するために「SSL（Secure Sockets
        Layer）/TLS（Transport Layer
        Security）」に対応しています。セキュリティ機能に対応したブラウザを使用することで、お客様が入力される名前や住所あるいは電話番号などの個人情報が自動的に暗号化されて送受信されるため、万が一、送信データが第三者に傍受された場合でも、内容が盗み取られる心配はありません。
        SSL/TLSに対応していないブラウザをご利用の場合は、弊社のWebサイトにアクセスできなかったり、情報の入力ができない場合があります。そのため、新しいバージョンのブラウザをご利用することをお勧めします。
      </p>
    </BasicTemp>
  );
};

export default Management;
