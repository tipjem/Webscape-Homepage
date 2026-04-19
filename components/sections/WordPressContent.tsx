"use client";

import { motion } from "framer-motion";
import { PenTool, Rocket, ShieldCheck } from "lucide-react";
import PricingCard, { PricingTier } from "@/components/ui/PricingCard";
import WorkflowSection from "@/components/sections/WorkflowSection";

const WP_TIERS: PricingTier[] = [
    {
        name: "WP 기본형",
        desc: "기존 템플릿을 활용한 빠르고 가성비 좋은 웹사이트",
        target: "초기 스타트업 및 소상공인을 위한 빠르고 합리적인 선택",
        color: "text-purple-500",
        bg: "bg-purple-500",
        features: [
            { name: "프리미엄 브릭스 테마 적용", included: true },
            { name: "기본 모바일 반응형", included: true },
            { name: "페이지 5개 이내", included: true },
            { name: "커스텀 기능 구현", included: false },
            { name: "고급진 애니메이션", included: false },
        ],
        link: "/contact?tab=wordpress",
    },
    {
        name: "WP 커스텀",
        desc: "템플릿의 한계를 벗어난 맞춤형 워드프레스 기획 및 제작",
        target: "독보적인 브랜딩이 필요한 중소/중견기업을 위한 맞춤형 웹",
        color: "text-accent",
        bg: "bg-accent",
        popular: true,
        features: [
            { name: "맞춤형 브릭스 빌더 세팅", included: true },
            { name: "풀 반응형 및 속도 최적화", included: true },
            { name: "원하는 페이지 무제한 (협의)", included: true },
            { name: "기본적인 애니메이션 효과", included: true },
            { name: "고급진 애니메이션", included: false },
        ],
        link: "/contact?tab=wordpress",
    }
];

export default function WordPressContent() {
    return (
        <div className="bg-background min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-purple-500/10 mb-8"
                    >
                        <PenTool size={40} className="text-purple-500" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground break-keep"
                    >
                        합리적이고 빠른 시작,<br />
                        <span className="text-purple-500">워드프레스 패키지</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-16 break-keep"
                    >
                        수많은 글로벌 기업이 선택하는 워드프레스. 프리미엄 빌더를 더해 유지보수는 쉽고 완성도는 높은 웹사이트를 신속하게 구축합니다.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left mb-24">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-foreground/5 ring-1 ring-foreground/10 p-1.5 rounded-[2rem] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                            <div className="flex flex-col h-full bg-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] p-6 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-foreground/[0.02]">
                                <Rocket className="text-purple-500 mb-4" size={32} />
                                <h3 className="font-bold text-lg mb-2 text-foreground break-keep">신속한 프로젝트 론칭</h3>
                                <p className="text-foreground/60 text-sm">기획부터 디자인, 개발까지 영업일 기준 최단 기간 내에 고품질 결과물을 제공합니다.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-foreground/5 ring-1 ring-foreground/10 p-1.5 rounded-[2rem] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                            <div className="flex flex-col h-full bg-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] p-6 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-foreground/[0.02]">
                                <ShieldCheck className="text-purple-500 mb-4" size={32} />
                                <h3 className="font-bold text-lg mb-2 text-foreground break-keep">검증된 안정성</h3>
                                <p className="text-foreground/60 text-sm">전 세계에서 가장 많이 쓰이는 CMS 플랫폼으로 보안과 안정성이 입증되었습니다.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-foreground/5 ring-1 ring-foreground/10 p-1.5 rounded-[2rem] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                            <div className="flex flex-col h-full bg-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] p-6 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-foreground/[0.02]">
                                <PenTool className="text-purple-500 mb-4" size={32} />
                                <h3 className="font-bold text-lg mb-2 text-foreground break-keep">손쉬운 직접 관리</h3>
                                <p className="text-foreground/60 text-sm">개발 지식이 없어도 직접 글을 쓰고 이미지를 수정할 수 있는 편리한 환경을 제공합니다.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-foreground">웹스케이프 솔루션 가이드</h2>
                        <p className="text-foreground/60">비즈니스 규모에 맞는 최적의 플랜을 확인하세요.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {WP_TIERS.map((tier, index) => (
                            <PricingCard key={tier.name} tier={tier} index={index} />
                        ))}
                    </div>

                    <div className="mt-12 text-center text-foreground/50 text-sm">
                        * 클라이언트의 비즈니스 목표와 세부 요구사항에 따라 프로젝트 예산은 유연하게 맞춤 설계됩니다.
                    </div>
                </div>

                {/* Workflow Section */}
                <WorkflowSection
                    title="합리적이고 빠른 완성, 브릭스 워크플로우"
                    subtitle="비즈니스에 최적화된 웹사이트를 가장 빠르고 안정적으로 구축합니다."
                    theme="purple"
                    steps={[
                        { title: "문의 및 견적 상담", description: "프로젝트 목표 분석 및 투명한 견적 산출" },
                        { title: "계약 및 착수금 결제", description: "전자 계약서 작성 및 착수금(50%) 결제" },
                        { title: "기획 및 프리미엄 디자인", description: "벤치마킹 자료 공유 및 브랜드 맞춤형 UI/UX 디자인" },
                        { title: "최적화된 모던 반응형 웹 개발", description: "브릭스 빌더를 기반으로 최적화된 최신 반응형 코드를 구현합니다." },
                        { title: "SEO 최적화 및 최종 검수", description: "검색엔진 최적화(SEO) 세팅 및 꼼꼼한 품질 테스트" },
                        { title: "잔금 결제 및 소유권 이전", description: "잔금(50%) 결제 완료 후 완벽한 소유권 이전 및 관리자 교육" }
                    ]}
                />
            </div>
        </div>
    );
}
