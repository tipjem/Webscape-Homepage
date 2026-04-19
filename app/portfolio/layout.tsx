import { Metadata } from "next";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "최고의 기술력과 타협 없는 디자인으로 완성된 웹스케이프의 포트폴리오를 확인하세요.",
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
