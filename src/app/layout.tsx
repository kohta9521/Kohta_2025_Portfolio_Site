import type { Metadata } from "next";

// scss
import "../styles/globals.scss";

// google fonts
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Kohta 2025 Portfolio Site",
  description: "kohtaの2025年版ポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${ibmPlexMono.variable}`}>{children}</body>
    </html>
  );
}
