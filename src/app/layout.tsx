import type { Metadata } from "next";

// scss
import "../styles/globals.scss";

// next
import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

// google fonts
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Kohta 2025 Portfolio Site",
  description: "kohta kochiの2025年版ポートフォリオサイト",
  keywords:
    "大学生, えんじにあ, 2025, エンジニア, ポートフォリオ, プログラミング, プログラム, IT業界, 開発者, フリーランス, キャリア, 技術スタック, プロジェクト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${ibmPlexMono.variable}`}>{children}</body>
      <Analytics />
      {/* <SpeedInsights /> */}
    </html>
  );
}
