"use client";

import { motion } from "framer-motion";
import { Search, Wrench, ShieldCheck, RefreshCw, Cpu } from "lucide-react";

export default function AboutPillars() {
    return (
        <section className="py-24 md:py-36 bg-[#120805] text-[#F5F1EB] relative border-b border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section Header (No AI eyebrow badge) */}
                <div className="max-w-3xl mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight break-keep mb-6">
                        웹스케이프를 지탱하는 <br />
                        <span className="text-[#F07A32]">2가지 비즈니스 기둥</span>
                    </h2>
                    <p className="text-[#F5F1EB]/70 text-base sm:text-lg leading-relaxed break-keep">
                        우리는 한 번 만들고 끝나는 일회성 납품을 거부합니다.
                        검색엔진과 AI가 좋아하는 최적화 홈페이지를 &lsquo;제작&rsquo;하고, 
                        운영 과정에서 생기는 귀찮고 힘든 모든 수정을 &lsquo;월정액 관리(WAAS)&rsquo;로 평생 덜어드립니다.
                    </p>
                </div>

                {/* 2 Big Pillars Bento Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Pillar 1: AEO/GEO/SEO Optimization Build */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="p-8 sm:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-[#F07A32]/40 transition-[border-color,background-color] duration-500 flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F07A32]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#F07A32]/10 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#F07A32]/10 border border-[#F07A32]/30 flex items-center justify-center text-[#F07A32] mb-8">
                                <Search className="w-7 h-7" />
                            </div>

                            <span className="text-xs font-semibold text-[#F07A32] block mb-2">맞춤 제작 솔루션</span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F1EB] tracking-tight mb-4 break-keep">
                                AEO · GEO · SEO <br />
                                통합 검색 최적화 맞춤 제작
                            </h3>

                            <p className="text-[#F5F1EB]/70 leading-relaxed text-sm sm:text-base mb-8 break-keep">
                                단순히 겉모습만 그럴싸한 홈페이지는 아무런 가치를 만들지 못합니다.
                                네이버, 구글 검색엔진 상위 노출은 물론, ChatGPT, Perplexity 등 최신 생성형 AI 검색 챗봇이 내 사업장의 전화번호, 위치, 서비스 특징을 공식 정보 출처로 정확하게 인용(Citation)하도록 시맨틱 지식 스키마를 탑재하여 설계합니다.
                            </p>

                            <ul className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-[#F5F1EB]/80 font-medium">
                                <li className="flex items-center gap-2.5">
                                    <Cpu className="w-4 h-4 text-[#F07A32]" />
                                    <span>schema.org 글로벌 웹 표준 스키마 100% 반영</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <Cpu className="w-4 h-4 text-[#F07A32]" />
                                    <span>구글/네이버 웹마스터도구 색인 및 Sitemap 자동 발행</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <Cpu className="w-4 h-4 text-[#F07A32]" />
                                    <span>모바일 및 PC 100% 반응형 최적화 인터페이스</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Pillar 2: Unlimited Monthly Maintenance (WAAS) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="p-8 sm:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-[#FF6B35]/40 transition-[border-color,background-color] duration-500 flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B35]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#FF6B35]/10 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#FF6B35]/10 border border-[#FF6B35]/30 flex items-center justify-center text-[#FF6B35] mb-8">
                                <Wrench className="w-7 h-7" />
                            </div>

                            <span className="text-xs font-semibold text-[#FF6B35] block mb-2">월정액 안심 관리 (WAAS)</span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F1EB] tracking-tight mb-4 break-keep">
                                귀찮고 힘든 수정을 대신하는 <br />
                                월정액 안심 관리 (WAAS)
                            </h3>

                            <p className="text-[#F5F1EB]/70 leading-relaxed text-sm sm:text-base mb-8 break-keep">
                                &ldquo;홈페이지 만들고 나서 글자 하나, 사진 하나 바꾸려다 제작업체와 연락이 끊긴 적 있으신가요?&rdquo;
                                사소한 텍스트 수정, 신규 배너 교체, 팝업 등록, 보안 패치, 도메인 및 호스팅 갱신까지 대표님이 신경 쓰실 필요 없도록 전담 엔지니어가 월정액 구독 형태로 지속적인 유지보수를 전담합니다.
                            </p>

                            <ul className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-[#F5F1EB]/80 font-medium">
                                <li className="flex items-center gap-2.5">
                                    <RefreshCw className="w-4 h-4 text-[#FF6B35]" />
                                    <span>영업일 기준 24시간 이내 요청 작업 신속 처리</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
                                    <span>도메인/호스팅/SSL 보안인증서 무중단 갱신 관리</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
                                    <span>새로운 포트폴리오 및 공지사항 정기 업데이트 지원</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
