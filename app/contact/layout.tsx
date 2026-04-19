import { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
  description: "웹스케이프 프로젝트 문의하기. 웹스케이프와 함께 한계 없는 웹 브랜딩을 시작하세요.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
