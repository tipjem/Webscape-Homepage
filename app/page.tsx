import HeroSection from "@/components/HeroSection";
import AeoFeaturesBento from "@/components/sections/AeoFeaturesBento";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioHighlight from "@/components/sections/PortfolioHighlight";
import Testimonials from "@/components/sections/Testimonials";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '웹스케이프 | AI와 검색엔진이 가장 먼저 추천하는 홈페이지 제작 에이전시',
  description: 'ChatGPT, Perplexity, 구글, 네이버 등 생성형 AI 검색 답변과 검색엔진 상위 노출에 최적화된 AEO/GEO/SEO 특화 홈페이지 제작 에이전시 웹스케이프입니다.',
  openGraph: {
    title: '웹스케이프 | AI와 검색엔진이 가장 먼저 추천하는 홈페이지 제작 에이전시',
    description: 'AEO 지식 구조화, 0.5초 초고속 LCP 코딩, AI 크롤러 자동 인덱싱 특화 제작.',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioHighlight />
      <AeoFeaturesBento />
      <ProcessSection />
      <Testimonials />

      {/* Main Page Final CTA Section (Full-width Dark Theme) */}
      <section className="py-32 md:py-48 bg-[#160B07] relative overflow-hidden flex items-center justify-center border-t border-white/5">
        {/* Dark background effects inside the wide section */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#F07A32]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#D95F20]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 text-[#F5F1EB] leading-tight px-2 md:px-0 break-keep">
            검색에 강한 홈페이지 제작부터<br className="block" /> 유지보수, SEO·AEO 최적화까지
          </h2>
          <p className="text-[#F5F1EB]/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed px-4 md:px-0 break-keep">
            홈페이지 신규 제작부터 지속적인 유지보수, 검색엔진(SEO) 및 생성형 AI(AEO/GEO) 최적화까지 대표님의 비즈니스 성장을 함께합니다.
          </p>
          <div className="flex flex-col items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center space-x-2 bg-[#F07A32] text-[#160B07] px-10 py-5 rounded-full text-lg md:text-xl font-bold transition-[transform,background-color,box-shadow] duration-300 hover:bg-[#FF6B35] hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(240,122,50,0.35)] border border-[#F07A32]/40"
            >
              <span>홈페이지 제작 & 최적화 문의하기</span>
              <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <p className="text-sm text-[#F5F1EB]/50">평균 24시간 이내 맞춤 상담 회신</p>
          </div>
        </div>
      </section>
    </>
  );
}

