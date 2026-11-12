import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KakaoContactButton from "@/components/ui/KakaoContactButton";
import { OrganizationJsonLd, AgencyServiceJsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";
// trigger route watch
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webscape.co.kr"),
  title: {
    default: "웹스케이프 | AI와 검색엔진이 가장 먼저 추천하는 홈페이지 제작 에이전시",
    template: "%s | 웹스케이프",
  },
  description: "ChatGPT, Perplexity, 구글, 네이버 등 생성형 AI 답변과 검색엔진 상위 노출에 최적화된 AEO/GEO/SEO 특화 홈페이지 제작 전문 에이전시 웹스케이프입니다.",
  keywords: ["홈페이지 제작", "맞춤형 홈페이지 제작", "실속형 홈페이지 제작", "AEO 홈페이지", "GEO 최적화", "SEO 홈페이지 제작", "AI 검색 노출 홈페이지", "웹스케이프", "반응형 홈페이지"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "웹스케이프",
    title: "웹스케이프 | AI와 검색엔진이 가장 먼저 추천하는 홈페이지 제작 에이전시",
    description: "생성형 AI(ChatGPT, Perplexity)와 구글/네이버가 내 사업장을 공식 추천 인용구로 인지하도록 제작해 드리는 AEO·SEO 특화 웹 에이전시.",
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
        <AgencyServiceJsonLd />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <KakaoContactButton />
        {(process.env.NEXT_PUBLIC_GA_ID || process.env.ANALYTICS_API_KEY) && (
          <GoogleAnalytics gaId={(process.env.NEXT_PUBLIC_GA_ID || process.env.ANALYTICS_API_KEY) as string} />
        )}
      </body>
    </html>
  );
}
