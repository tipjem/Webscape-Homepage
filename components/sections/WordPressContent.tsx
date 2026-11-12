"use client";

import { motion } from "framer-motion";
import { PenTool, Rocket, ShieldCheck } from "lucide-react";
import PricingCard, { PricingTier } from "@/components/ui/PricingCard";
import WorkflowSection from "@/components/sections/WorkflowSection";

const WP_TIERS: PricingTier[] = [
    {
        name: "실속 기본형",
        desc: "빠른 런칭과 실용적인 구글/네이버 검색 노출을 위한 실속형 웹사이트",
        target: "빠른 런칭과 실용적인 구글/네이버 검색 노출이 필요한 소상공인",
        color: "text-[#D95F20]",
        bg: "bg-[#D95F20]",
        features: [
            { name: "구글/네이버 검색엔진 최적화 (SEO) 기본 세팅", included: true },
            { name: "가볍고 빠른 초경량 최적화 엔진 적용", included: true },
            { name: "모바일 퍼스트 반응형 레이아웃", included: true },
            { name: "페이지 5개 이내", included: true },
            { name: "기본적인 스키마 마크업 연동", included: true },
        ],
        link: "/contact?tab=wordpress",
    },
    {
        name: "실속 맞춤형",
        desc: "브랜딩과 검색 최적화 지수를 동시에 극대화하는 맞춤형 홈페이지",
        target: "검색 상위 노출과 차별화된 디자인이 필요한 전문 기업",
        color: "text-[#F07A32]",
        bg: "bg-[#F07A32]",
        popular: true,
        features: [
            { name: "맞춤형 전환 중심 UI/UX 제작", included: true },
            { name: "구글 Core Web Vitals 속도 최적화", included: true },
            { name: "원하는 페이지 무제한 (협의)", included: true },
            { name: "네이버 서치어드바이저 수집 세팅", included: true },
            { name: "손쉬운 직접 CMS 콘텐츠 관리", included: true },
        ],
        link: "/contact?tab=wordpress",
    }
];

export default function WordPressContent() {
    return (
        <div className="bg-[#160B07] min-h-[100dvh] pt-32 pb-24 text-[#F5F1EB]">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#D95F20]/10 border border-[#D95F20]/20 mb-8"
                    >
                        <PenTool size={40} className="text-[#D95F20]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-[#F5F1EB] break-keep"
                    >
                        합리적인 예산으로 빠르게 시작하는,<br />
                        <span className="text-[#D95F20]">실속형 홈페이지 제작</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[#F5F1EB]/70 text-lg md:text-xl max-w-2xl mx-auto mb-16 break-keep"
                    >
                        무거운 공장형 사이트가 아닙니다. 최적화 성능과 가벼운 엔진을 적용하여 빠른 로딩 속도와 검색엔진 노출, 그리고 누구나 쉽게 직접 수정할 수 있는 실용적인 웹사이트를 구축합니다.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left mb-24">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-white/[0.02] ring-1 ring-white/10 p-1.5 rounded-[2rem] flex flex-col transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D95F20]/15">
                            <div className="flex flex-col h-full bg-[#211009]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] p-6 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#211009]">
                                <Rocket className="text-[#D95F20] mb-4" size={32} />
                                <h3 className="font-bold text-lg mb-2 text-[#F5F1EB] break-keep">검색엔진(SEO) 최적화</h3>
                                <p className="text-[#F5F1EB]/60 text-sm">구글 서치콘솔 및 네이버 서치어드바이저 수집 가이드를 완벽히 준수하여 제작합니다.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-white/[0.02] ring-1 ring-white/10 p-1.5 rounded-[2rem] flex flex-col transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D95F20]/15">
                            <div className="flex flex-col h-full bg-[#211009]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] p-6 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#211009]">
                                <ShieldCheck className="text-[#D95F20] mb-4" size={32} />
                                <h3 className="font-bold text-lg mb-2 text-[#F5F1EB] break-keep">가볍고 빠른 초경량 구조</h3>
                                <p className="text-[#F5F1EB]/60 text-sm">불필요한 스크립트를 제거하여 모바일에서도 버벅임 없이 빠르게 열립니다.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-white/[0.02] ring-1 ring-white/10 p-1.5 rounded-[2rem] flex flex-col transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D95F20]/15">
                            <div className="flex flex-col h-full bg-[#211009]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] p-6 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#211009]">
                                <PenTool className="text-[#D95F20] mb-4" size={32} />
                                <h3 className="font-bold text-lg mb-2 text-[#F5F1EB] break-keep">손쉬운 직접 관리 환경</h3>
                                <p className="text-[#F5F1EB]/60 text-sm">코딩 지식이 없어도 직접 글을 쓰고 이미지나 텍스트를 손쉽게 수정할 수 있습니다.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-[#F5F1EB]">실속형 홈페이지 솔루션 사양</h2>
                        <p className="text-[#F5F1EB]/60">비즈니스 규모에 맞는 최적의 플랜을 확인하세요.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {WP_TIERS.map((tier, index) => (
                            <PricingCard key={tier.name} tier={tier} index={index} />
                        ))}
                    </div>

                    <div className="mt-12 text-center text-[#F5F1EB]/50 text-sm">
                        * 프로젝트 세부 요구사항에 따라 예산은 유연하게 맞춤 설계됩니다.
                    </div>
                </div>

                {/* Workflow Section */}
                <WorkflowSection
                    title="실속형 홈페이지 제작 프로세스"
                    subtitle="비즈니스에 최적화된 웹사이트를 빠르게 제작하고 검색 노출을 시작합니다."
                    theme="burnt-orange"
                    steps={[
                        { title: "문의 및 검색 키워드 상담", description: "업종별 목표 키워드 분석 및 최적 솔루션 추천" },
                        { title: "전자 계약 및 착수금 결제", description: "전자 계약서 작성 및 착수금(50%) 결제" },
                        { title: "브랜딩 기획 및 전환형 UI/UX", description: "검색 노출 레이아웃 기획 및 반응형 디자인 세팅" },
                        { title: "초경량 최적화 코딩 및 SEO 세팅", description: "속도 최적화 코딩 및 구글/네이버 수집 메타데이터 마크업 작성" },
                        { title: "SEO 수집 테스트 및 품질 검수", description: "검색엔진 최적화 인덱싱 테스트 및 품질 검수 진행" },
                        { title: "잔금 결제 및 소유권 이전", description: "잔금 결제 완료 후 완벽한 소유권 이전 및 직접 관리 가이드 전달" }
                    ]}
                />
            </div>
        </div>
    );
}

