import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KakaoContactButton from "@/components/ui/KakaoContactButton";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
// trigger route watch
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webscape.co.kr"),
  title: {
    default: "웹스케이프 | 문의가 쏟아지는 매출용 홈페이지",
    template: "%s | 웹스케이프",
  },
  description: "지역 사업체를 위한 웹스케이프의 맞춤형 홈페이지 제작 서비스. 빠른 완성, 성과 중심 디자인, 지속적인 관리 경험을 제공합니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "웹스케이프",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "웹스케이프 (Webscape)" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased selection:bg-accent/30 selection:text-foreground overflow-x-hidden min-h-[100dvh] flex flex-col break-keep`}>
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <KakaoContactButton />
      </body>
    </html>
  );
}
