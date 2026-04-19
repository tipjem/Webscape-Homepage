import Hero from "@/components/sections/Hero";
import TwoTrack from "@/components/sections/TwoTrack";
import PortfolioHighlight from "@/components/sections/PortfolioHighlight";
import Testimonials from "@/components/sections/Testimonials";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '웹스케이프 | 문의가 쏟아지는 매출용 홈페이지',
  description: '비싼 홈페이지 말고, 3일 만에 완성되는 내 사업장 영업사원. 지역 사업체를 위한 관리형 구독(WAAS) 홈페이지 제작 에이전시 웹스케이프입니다.',
  openGraph: {
    title: '웹스케이프 | 문의가 쏟아지는 매출용 홈페이지',
    description: '3일 완성, 전환율 중심, 무제한 관리. 웹스케이프와 함께 매출을 극대화하세요.',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TwoTrack />
      <PortfolioHighlight />
      <Testimonials />

      {/* Main Page Final CTA Section (Full-width Dark Theme) */}
      <section className="py-32 md:py-48 bg-[#0A0A0A] relative overflow-hidden flex items-center justify-center border-t border-white/5">
        {/* Dark background effects inside the wide section */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8 text-white leading-tight px-2 md:px-0">
            어떤 서비스가 맞을지<br className="block" /> 고민되시나요?
          </h2>
          <p className="text-[#EDEDED]/70 text-lg md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            웹스케이프의 전문가가 비즈니스 단계에 맞는 최적의 로드맵을 제안해 드립니다.
            <br className="block md:hidden" /><br className="hidden md:block" />
            지금 바로 무료 상담을 받아보세요.
          </p>
          <div className="flex flex-col items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center space-x-2 bg-accent text-white px-12 py-6 rounded-full text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(59,130,246,0.4)] border border-blue-400/20"
            >
              <span>프로젝트 문의하기</span>
              <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <p className="text-sm text-gray-400">평균 24시간 이내 회신 | 무료 초기 상담</p>
          </div>
        </div>
      </section>
    </>
  );
}
