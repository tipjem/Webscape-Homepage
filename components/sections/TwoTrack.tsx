"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Code2, PenTool } from "lucide-react";
import Link from "next/link";

export default function TwoTrack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="py-32 bg-[#160B07] relative z-20 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-[#F5F1EB]">
                        웹스케이프 맞춤 제작 서비스 라인업
                    </h2>
                    <p className="text-[#F5F1EB]/70 text-lg max-w-2xl mx-auto">
                        사업체 규모와 비즈니스 목적에 맞는 최적의 AI/SEO 구축 솔루션을 선택해 보세요.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                >
                    {/* Vibe Coding / AEO WAAS */}
                    <motion.div
                        variants={itemVariants}
                        className="group bg-white/[0.03] ring-1 ring-white/10 p-1.5 rounded-[2rem] flex flex-col transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F07A32]/10"
                    >
                        <div className="relative flex flex-col h-full w-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#211009]/80 p-8 md:p-12 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#211009]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F07A32]/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-[#F07A32]/20 transition-colors duration-500"></div>

                            <Code2 size={48} className="text-[#F07A32] mb-8" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#F5F1EB] break-keep">맞춤형 프리미엄 제작 (AEO·GEO)</h3>
                            <p className="text-[#F5F1EB]/70 mb-8 max-w-sm">
                                ChatGPT 및 생성형 AI 검색 노출을 위한 전용 스키마 구축과 지속적인 케어를 제공하는 최고급 패키지입니다.
                            </p>
                            <ul className="space-y-3 mb-10 text-sm md:text-base text-[#F5F1EB]/80 flex-1">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#F07A32] mr-3"></span> AI 지식 구조화 (JSON-LD Schema) 이식</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#F07A32] mr-3"></span> 0.5초 초고속 LCP 성능 및 커스텀 UI/UX</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#F07A32] mr-3"></span> 지속적인 알고리즘 업데이트 대응 (WAAS 서비스)</li>
                            </ul>
                            <Link href="/services" className="inline-flex items-center mt-auto w-fit px-6 py-3 rounded-full bg-[#F07A32]/15 text-[#F07A32] font-semibold border border-[#F07A32]/30 transition-[background-color,color] duration-300 hover:bg-[#F07A32] hover:text-[#160B07] group/link">
                                자세히 보기
                                <span className="ml-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1">→</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* WordPress Bricks */}
                    <motion.div
                        variants={itemVariants}
                        className="group bg-white/[0.03] ring-1 ring-white/10 p-1.5 rounded-[2rem] flex flex-col transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D95F20]/15"
                    >
                        <div className="relative flex flex-col h-full w-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#211009]/80 p-8 md:p-12 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#211009]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D95F20]/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-[#D95F20]/20 transition-colors duration-500"></div>

                            <PenTool size={48} className="text-[#D95F20] mb-8" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#F5F1EB] break-keep">실속형 홈페이지 제작 패키지</h3>
                            <p className="text-[#F5F1EB]/70 mb-8 max-w-sm">
                                합리적인 비용으로 빠르게 시작하고, 대표님이 직접 손쉽게 수정하고 관리할 수 있는 실용형 솔루션입니다.
                            </p>
                            <ul className="space-y-3 mb-10 text-sm md:text-base text-[#F5F1EB]/80 flex-1">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#D95F20] mr-3"></span> 구글/네이버 기본 검색엔진 최적화 완료</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#D95F20] mr-3"></span> 업종별 검증된 고효율 전환형 구조 제공</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#D95F20] mr-3"></span> 직접 수정이 쉬운 관리자 환경 제공</li>
                            </ul>
                            <Link href="/services" className="inline-flex items-center mt-auto w-fit px-6 py-3 rounded-full bg-[#D95F20]/15 text-[#D95F20] font-semibold border border-[#D95F20]/30 transition-[background-color,color] duration-300 hover:bg-[#D95F20] hover:text-[#160B07] group/link">
                                자세히 보기
                                <span className="ml-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1">→</span>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
