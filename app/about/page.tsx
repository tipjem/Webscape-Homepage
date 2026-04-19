import type { Metadata } from 'next';
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: '회사 소개',
  description: '하이엔드 디자인과 최적의 기술력을 결합한 웹 제작 전문가 그룹, 웹스케이프의 철학과 비전을 소개합니다.',
  openGraph: {
    title: '회사 소개',
    description: '타협하지 않는 퀄리티로 당신의 비즈니스 성공을 이끄는 기술 파트너가 되겠습니다.',
    type: 'website',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
