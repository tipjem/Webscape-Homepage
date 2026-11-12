import { Metadata } from "next";

export const metadata: Metadata = {
  title: "실무 검증된 반응형 웹사이트 제작 사례 및 포트폴리오",
  description: "최고의 기술력과 타협 없는 디자인으로 완성된 웹스케이프의 포트폴리오를 확인하세요.",
  openGraph: {
    title: "실무 검증된 반응형 웹사이트 제작 사례 및 포트폴리오 | 웹스케이프",
    description: "업종별 실무 검증된 고효율 포트폴리오 및 템플릿 쇼케이스.",
    type: "website",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
