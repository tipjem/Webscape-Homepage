"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroDiagonalMarquee from "@/components/sections/HeroDiagonalMarquee";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#0A0503] selection:bg-[#FF6B35]/30 selection:text-[#F5F1EB] pt-28 pb-20 md:pt-36 md:pb-28 lg:py-0"
        >
            {/* 1. 배경 베이스: 딥 오렌지 & 다크 브라운 베이스 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0503] via-[#160B07] to-[#2E140B] pointer-events-none" />

            {/* 우측 상단/중앙 초대형 소프트 오렌지 앰비언트 글로우 */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.25, 0.35, 0.25],
                    x: [0, 15, 0],
                    y: [0, -10, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 right-[5%] w-[520px] h-[520px] md:w-[750px] md:h-[750px] rounded-full bg-[radial-gradient(circle_at_center,#FF6B35_0%,#B84318_40%,transparent_70%)] blur-[120px] md:blur-[160px] pointer-events-none mix-blend-screen z-[1]"
            />

            {/* ========================================================= */}
            {/* [대각선 마퀴 포트폴리오 쇼케이스: 섹션 전체 우측 배경에 직접 통합] */}
            {/* 독립된 박스 형태가 아닌, 히어로 섹션 자체의 공간을 채우며 대각선으로 무한 롤링 */}
            {/* ========================================================= */}
            <div className="absolute right-[-15%] sm:right-[-5%] lg:right-[-3%] xl:right-[0%] top-[-20%] bottom-[-20%] w-[130%] sm:w-[105%] lg:w-[65%] xl:w-[60%] h-[140%] flex items-center justify-center pointer-events-auto z-[2] overflow-hidden">
                <HeroDiagonalMarquee />
            </div>

            {/* ========================================================= */}
            {/* [섹션 일체형 오버레이 마스크] */}
            {/* 배경과 마퀴를 하나의 톤앤매너로 자연스럽게 융합하는 마스킹 레이어 */}
            {/* ========================================================= */}
            {/* 좌측 0%~45%는 솔리드 블랙으로 덮어 텍스트 가독성을 완벽 보호하고, 우측으로 갈수록 부드럽게 투명해져 마퀴와 오렌지 글로우가 드러남 */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0503] via-[#0A0503] via-35% md:via-42% lg:via-46% to-transparent pointer-events-none z-[3]" />

            {/* 상단 GNB 헤더 영역 자연스러운 페이드아웃 */}
            <div className="absolute top-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-[#0A0503] via-[#0A0503]/80 to-transparent pointer-events-none z-[3]" />

            {/* 하단 트랜지션 영역 자연스러운 페이드아웃 */}
            <div className="absolute bottom-0 left-0 right-0 h-32 md:h-44 bg-gradient-to-t from-[#0A0A0A] via-[#0A0503]/90 to-transparent pointer-events-none z-[3]" />

            {/* 2. Hero 전면 컨테이너: Desktop 좌우 2컬럼 레이아웃 */}
            <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full min-h-[calc(100dvh-120px)] flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full py-8 lg:py-16">

                    {/* ========================================================= */}
                    {/* [LEFT COLUMN: 정보 전달 (선명한 가독성 확보)] */}
                    {/* ========================================================= */}
                    <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left z-20">

                        {/* 상단 문구: '검색엔진부터 AI까지' */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#F5F1EB]/85 tracking-tight mb-2 md:mb-3"
                        >
                            검색엔진부터 AI까지
                        </motion.p>

                        {/* 메인 헤드라인 */}
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="tracking-tight break-keep mb-6 md:mb-8 relative w-full"
                        >
                            {/* [메인 강조] "검색에 강한" - 모바일 한줄 최적화 & 데스크톱 웅장한 크기 + 3단계 레이저 점화 */}
                            <motion.span
                                className="block text-[2.25rem] sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[5.8rem] font-black tracking-tight text-transparent bg-clip-text select-none leading-[1.08] whitespace-nowrap"
                                style={{
                                    backgroundSize: "320% 100%",
                                    backgroundImage: `linear-gradient(
                                        110deg,
                                        #FF5722 0%,
                                        #FF6E3A 18%,
                                        #FF5722 35%,
                                        #FFFFFF 45%,
                                        #FFF1DC 49%,
                                        #2A140E 58%,
                                        #1A0C08 100%
                                    )`
                                }}
                                animate={{
                                    backgroundPosition: [
                                        "100% 0",   // [1단계] 숨죽인 어두운 브릭 레드 상태
                                        "100% 0",   // 잠시 대기 (0.6초)
                                        "0% 0",     // [2~3단계] 레이저 빛기둥이 지나가며 다크 오렌지로 점화!
                                        "0% 0",     // [완성] 선명하게 타오르는 다크 오렌지 상태 유지 (2.5초)
                                        "100% 0"    // 다음 사이클을 위해 어두운 톤으로 부드럽게 복귀
                                    ],
                                    filter: [
                                        "drop-shadow(0 0 0px rgba(255,87,34,0))",
                                        "drop-shadow(0 0 0px rgba(255,87,34,0))",
                                        "drop-shadow(0 0 35px rgba(255,110,58,0.7))",
                                        "drop-shadow(0 0 24px rgba(255,87,34,0.45))",
                                        "drop-shadow(0 0 0px rgba(255,87,34,0))"
                                    ]
                                }}
                                transition={{
                                    duration: 5.8,
                                    times: [0, 0.1, 0.42, 0.85, 1],
                                    repeat: Infinity,
                                    ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut"]
                                }}
                            >
                                검색에 강한
                            </motion.span>

                            {/* [하단 문구] '검색에 강한' 하단 여백을 시원하고 균형감 있게 확장 */}
                            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#F5F1EB]/85 tracking-tight mt-4 sm:mt-5 md:mt-6 lg:mt-7">
                                홈페이지를 제작합니다.
                            </span>
                        </motion.h1>

                        {/* 보조 문구: "홈페이지 제작부터 SEO, AI 검색 최적화,\n지속적인 운영까지 함께합니다." */}
                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="text-base sm:text-lg md:text-xl text-[#F5F1EB]/75 font-normal leading-relaxed break-keep max-w-xl mb-10 md:mb-12"
                        >
                            홈페이지 제작부터 SEO, AI 검색 최적화,
                            <br className="hidden sm:inline" />{" "}
                            지속적인 운영까지 함께합니다.
                        </motion.p>

                        {/* CTA 영역: 메인 CTA(홈페이지 제작 문의) */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
                        >
                            {/* 메인 CTA */}
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#FF6B35] hover:bg-[#FF7A47] text-white font-semibold text-base sm:text-lg transition-[background-color,box-shadow,transform] duration-300 shadow-[0_0_35px_rgba(255,107,53,0.35)] hover:shadow-[0_0_50px_rgba(255,107,53,0.55)] hover:scale-[1.02] active:scale-[0.98] min-h-[52px]"
                            >
                                <span>홈페이지 제작 문의</span>
                                <span className="inline-flex ml-2.5 w-6 h-6 rounded-full bg-white/20 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight size={14} className="text-white" />
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* ========================================================= */}
                    {/* [RIGHT COLUMN: 비어있는 투명 공간] */}
                    {/* 배경 레이어의 대각선 마퀴가 온전히 노출되며 마우스 상호작용 가능 */}
                    {/* ========================================================= */}
                    <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-end w-full h-[400px] lg:h-[550px] pointer-events-none" />

                </div>
            </div>
        </section>
    );
}
