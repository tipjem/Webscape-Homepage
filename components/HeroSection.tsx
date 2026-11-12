"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// SSR 환경에서 window is not defined 방지를 위한 dynamic import
const ParticleCubeCanvas = dynamic(() => import("./ParticleCubeCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-64 h-64 rounded-full bg-[#90D4FF]/5 blur-3xl animate-pulse" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative w-full h-[88vh] min-h-[640px] max-h-[960px] overflow-hidden bg-[#05070A] text-[#F5F1EB] flex flex-col justify-center pt-24 pb-8 sm:pb-12 select-none">
      {/* 1. 배경 Three.js WebGL 파티클 큐브 캔버스 오버레이 */}
      <div className="absolute inset-0 z-0">
        <ParticleCubeCanvas />
      </div>

      {/* 1-1. 모바일 전용 다크 오버레이 (md 이상 숨김): 3D 큐브가 뒤에서 은은하게 투과되며 텍스트 가독성을 100% 확보 */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#05070A]/95 via-[#05070A]/88 to-[#05070A]/92 md:hidden pointer-events-none z-[2]"
        aria-hidden="true"
      />

      {/* 2. 배경 분위기: 딥 네이비 & 은은한 소프트 스카이블루 앰비언트 글로우 */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#90D4FF]/5 blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-[#4EC5F1]/5 blur-[140px] pointer-events-none z-0" />

      {/* 3. 하단 섹션(#160B07)으로의 자연스러운 무봉제선 톤 블렌딩 및 큐브 하단 소프트 페이드아웃 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 md:h-80 bg-gradient-to-b from-transparent via-[#05070A]/70 via-50% to-[#160B07] pointer-events-none z-[6]"
        aria-hidden="true"
      />
      {/* 섹션 연결부 은은한 웜 앰비언트 글로우 */}
      <div
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[220px] bg-[#FF6B35]/[0.04] rounded-full blur-[140px] pointer-events-none z-[7]"
        aria-hidden="true"
      />

      {/* 4. 메인 콘텐츠 영역 (좌측 정렬 미니멀 타이포그래피 - 딥 오렌지 브랜드 톤 복원) */}
      <div className="container mx-auto px-6 sm:px-10 max-w-7xl relative z-10 flex-1 flex flex-col justify-center pointer-events-none">
        <div className="relative max-w-xl md:max-w-2xl text-left pointer-events-auto">

          {/* 모바일 전용 텍스트 집중 다크 백드롭: 파티클 빛을 자연스럽게 묵직하게 가라앉혀 텍스트를 100% 또렷하게 돋보이게 함 */}
          <div
            className="absolute -inset-x-6 -inset-y-8 bg-[#05070A]/85 rounded-3xl blur-2xl md:hidden -z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* 미니멀 감성 메인 헤딩 (오렌지 포인트 강조, 모바일 가독성 드롭 섀도우) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-light tracking-tight leading-[1.18] sm:leading-[1.15] mb-6 sm:mb-8 text-[#F5F1EB] break-keep drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] md:drop-shadow-none">
            <span className="block font-medium text-[#FF6B35]">검색에 강한</span>
            <span className="block font-light text-[#F5F1EB] tracking-tight mt-1">
              홈페이지 &amp; 쇼핑몰
            </span>
          </h1>

          {/* 서브 텍스트: 간결하고 세련된 설명 (모바일 명도 및 대비 보정) */}
          <p className="text-sm sm:text-base md:text-lg text-[#F5F1EB]/85 md:text-[#F5F1EB]/70 leading-relaxed font-normal max-w-lg mb-8 sm:mb-10 break-keep drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] md:drop-shadow-none">
            단순한 제작을 넘어 구글·네이버 검색엔진과 최신 AI가 가장 먼저 추천하는 지식 구조를 설계합니다.
            지속적인 유지보수와 안정적인 매출 전환을 경험해 보세요.
          </p>

          {/* CTA 버튼 영역 (기존 딥 오렌지 버튼 스타일 복원) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FF6B35] text-white font-bold text-sm sm:text-base transition-[background-color,transform,box-shadow] duration-300 hover:bg-[#FF7A47] hover:scale-105 active:scale-95 shadow-[0_0_35px_rgba(255,107,53,0.35)]"
            >
              <span>프로젝트 문의하기</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/[0.04] text-[#F5F1EB]/85 border border-white/10 font-medium text-sm sm:text-base transition-[background-color,border-color,color] duration-300 hover:bg-white/10 hover:border-[#FF6B35]/40 hover:text-white"
            >
              <span>포트폴리오 보기</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
