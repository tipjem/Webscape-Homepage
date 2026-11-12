"use client";

import { motion } from "framer-motion";
import { Code2, Zap, MonitorSmartphone, Database } from "lucide-react";
import PricingCard, { PricingTier } from "@/components/ui/PricingCard";
import WorkflowSection from "@/components/sections/WorkflowSection";

const VIBE_TIER: PricingTier = {
    name: "AEO/GEO 맞춤형 제작 (Next.js)",
    desc: "AI 검색 답변 인용 1순위 구조화 & 0.5초 초고속 LCP 특화 맞춤 웹사이트",
    target: "ChatGPT, Perplexity, 구글, 네이버 등 AI 및 검색 상위 노출이 필수적인 사업체",
    color: "text-[#F07A32]",
    bg: "bg-[#F07A32]",
    popular: true,
    features: [
        { name: "schema.org 스키마 (JSON-LD) 100% 자동 이식", included: true },
        { name: "Next.js App Router 기반 0.5초 초고속 LCP 성능", included: true },
        { name: "AEO 자연어 대화형 Q&A 인용 구조 설계", included: true },
        { name: "GPTBot / PerplexityBot 실시간 크롤링 보장", included: true },
        { name: "WAAS 무제한 알고리즘 업데이트 유지보수", included: true },
    ],
    link: "/contact?tab=vibe",
};

export default function VibeCodingContent() {
    return (
        <div className="bg-[#160B07] min-h-[100dvh] pt-32 pb-24 overflow-hidden text-[#F5F1EB]">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F07A32]/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>

                {/* Hero Section */}
                <div className="text-center mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-[#F07A32]/10 mb-8 border border-[#F07A32]/25 backdrop-blur-md shadow-[0_0_50px_rgba(240,122,50,0.2)]"
                    >
                        <Code2 size={48} className="text-[#F07A32]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-[#F5F1EB] break-keep"
                    >
                        AI와 검색엔진 답변 노출에 특화된,<br />
                        <span className="text-[#F07A32]">AEO/GEO 맞춤형 홈페이지 제작</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[#F5F1EB]/70 text-lg md:text-xl max-w-3xl mx-auto break-keep"
                    >
                        Next.js 프레임워크를 기반으로 ChatGPT, Perplexity, 구글, 네이버가 고객사의 사업장을 1순위로 추천하도록 지식 데이터(JSON-LD Schema)와 Q&A 인용 프레임워크를 완벽하게 구현합니다.
                    </motion.p>
                </div>

                {/* Strengths Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-white/[0.02] ring-1 ring-white/10 p-1.5 rounded-[2.5rem] flex flex-col transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F07A32]/10">
                        <div className="flex flex-col h-full bg-[#211009]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2.5rem-0.375rem)] p-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#211009]">
                            <Zap className="text-[#FF6B35] mb-6" size={36} />
                            <h3 className="font-bold text-xl mb-3 text-[#F5F1EB] break-keep">0.5초 LCP 초고속 성능</h3>
                            <p className="text-[#F5F1EB]/60 text-sm leading-relaxed">구글 Core Web Vitals 최고 지수를 달성하여 검색엔진 상위 노출과 낮은 이탈률을 완벽 보장합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-white/[0.02] ring-1 ring-white/10 p-1.5 rounded-[2.5rem] flex flex-col transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F07A32]/10">
                        <div className="flex flex-col h-full bg-[#211009]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2.5rem-0.375rem)] p-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#211009]">
                            <MonitorSmartphone className="text-[#F07A32] mb-6" size={36} />
                            <h3 className="font-bold text-xl mb-3 text-[#F5F1EB] break-keep">JSON-LD 지식 구조화</h3>
                            <p className="text-[#F5F1EB]/60 text-sm leading-relaxed">AI 크롤러봇이 사업체의 서비스 항목, FAQ, 연락처 등을 100% 명확히 파싱하도록 스키마 마크업을 내장합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-white/[0.02] ring-1 ring-white/10 p-1.5 rounded-[2.5rem] flex flex-col transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D95F20]/10">
                        <div className="flex flex-col h-full bg-[#211009]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2.5rem-0.375rem)] p-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#211009]">
                            <Database className="text-[#D95F20] mb-6" size={36} />
                            <h3 className="font-bold text-xl mb-3 text-[#F5F1EB] break-keep">WAAS 지속 관리형 모델</h3>
                            <p className="text-[#F5F1EB]/60 text-sm leading-relaxed">제작 후 끝나는 것이 아니라, AI 검색 및 구글 알고리즘 변화에 맞춰 웹사이트를 수시 업데이트 해 드립니다.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Pricing Section (Single Card Centered) */}
                <div className="max-w-md mx-auto relative z-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-3 text-[#F5F1EB]">맞춤형 프리미엄 홈페이지 솔루션 사양</h2>
                    </div>

                    <PricingCard tier={VIBE_TIER} index={0} />

                    <div className="mt-8 text-center text-[#F5F1EB]/50 text-sm">
                        * 사업체의 업종 및 원하는 기능 항목에 따라 프로젝트 견적은 최적으로 맞춤 설계됩니다.
                    </div>
                </div>

                {/* Workflow Section */}
                <WorkflowSection
                    title="AEO/GEO 맞춤 홈페이지 구축 프로세스"
                    subtitle="AI와 검색엔진이 인정하는 고성능 표준 홈페이지가 완성되는 과정입니다."
                    theme="blue"
                    steps={[
                        { title: "AEO/SEO 가능성 분석 및 상담", description: "사업장의 키워드 및 대화형 AI 질문 분석 후 맞춤 개발 로드맵 제시" },
                        { title: "전자 계약 및 착수금 결제", description: "전자 계약서 작성 및 안전한 착수금 결제 진행" },
                        { title: "AEO 두괄식 기획 & 프리미엄 UI/UX", description: "AI 크롤러 발췌에 최적화된 기획 및 브랜드 하이엔드 UI/UX 설계" },
                        { title: "Next.js & JSON-LD 풀스택 구축", description: "0.5초 LCP 성능 코딩 및 schema.org 표준 스키마 마크업 100% 반영" },
                        { title: "AI 크롤러 수집 테스트 및 QA", description: "GPTBot, PerplexityBot 인덱싱 허용 및 검색 엔진 수집 상태 최종 검수" },
                        { title: "라이브 배포 및 지속적 WAAS 케어", description: "사이트 배포 완료 후 AI 알고리즘 변화에 맞춘 무제한 사후 관리 지원" }
                    ]}
                />
            </div>
        </div>
    );
}

