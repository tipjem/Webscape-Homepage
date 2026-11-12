"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";

export default function AboutCta() {
    return (
        <section className="py-28 md:py-36 bg-transparent relative overflow-hidden border-t border-white/5">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F07A32]/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-[#F5F1EB] mb-6 leading-tight break-keep">
                        현재 홈페이지의 검색 색인이나 <br />
                        유지보수 문제로 고민이신가요?
                    </h2>

                    <p className="text-[#F5F1EB]/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 break-keep">
                        과도한 영업이나 불필요한 기능 강요 없이, 대표님의 사업체에 가장 적합한 도구 선택과 
                        검색엔진(SEO) 및 AI(AEO) 최적화 방안을 정직하게 진단해 드립니다.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                        <Magnetic strength={0.25}>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4.5 rounded-full bg-gradient-to-r from-[#F07A32] to-[#FF6B35] text-white font-bold text-base hover:shadow-2xl hover:shadow-[#F07A32]/40 active:scale-[0.98] transition-all"
                            >
                                <span>기술 진단 및 프로젝트 문의하기</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Magnetic>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-xs text-[#F5F1EB]/50 font-medium">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#F07A32]" />
                            평균 24시간 이내 맞춤 분석 회신
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#F07A32]" />
                            불필요한 과금 요소 배제
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
