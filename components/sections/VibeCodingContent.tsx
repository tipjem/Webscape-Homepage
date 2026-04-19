"use client";

import { motion } from "framer-motion";
import { Code2, Zap, MonitorSmartphone, Database } from "lucide-react";
import PricingCard, { PricingTier } from "@/components/ui/PricingCard";
import WorkflowSection from "@/components/sections/WorkflowSection";

const VIBE_TIER: PricingTier = {
    name: "바이브코딩 (Next.js)",
    desc: "Next.js 기반, 세상에 없던 완벽한 커스텀 하이엔드 퀄리티",
    target: "한계 없는 인터랙션과 완벽한 퍼포먼스가 필요한 하이엔드 프로젝트",
    color: "text-accent",
    bg: "bg-accent",
    popular: true,
    features: [
        { name: "Next.js / React 100% 자체 개발", included: true },
        { name: "압도적인 퍼포먼스 (Lighthouse 100)", included: true },
        { name: "복잡한 비즈니스 커스텀 로직", included: true },
        { name: "고급진 애니메이션", included: true },
        { name: "외부 API 및 SaaS DB 완벽 연동", included: true },
    ],
    link: "/contact?tab=vibe",
};

export default function VibeCodingContent() {
    return (
        <div className="bg-background min-h-screen pt-32 pb-24 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>

                {/* Hero Section */}
                <div className="text-center mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-accent/10 mb-8 border border-accent/20 backdrop-blur-md shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                    >
                        <Code2 size={48} className="text-accent" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground break-keep"
                    >
                        한계가 없는 맞춤형 웹 개발,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">바이브 코딩</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto break-keep"
                    >
                        최신 프레임워크인 Next.js를 기반으로, 당신의 상상 속 디자인과 복잡한 비즈니스 로직을 현실로 구현합니다. 타협 없는 성능과 완벽한 SEO 최적화가 기본 제공됩니다.
                    </motion.p>
                </div>

                {/* Strengths Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-foreground/5 ring-1 ring-foreground/10 p-1.5 rounded-[2.5rem] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
                        <div className="flex flex-col h-full bg-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2.5rem-0.375rem)] p-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-foreground/[0.02]">
                            <Zap className="text-amber-500 mb-6" size={36} />
                            <h3 className="font-bold text-xl mb-3 text-foreground break-keep">압도적인 퍼포먼스</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed">눈 깜짝할 새 열리는 로딩 속도를 경험하세요. 검색엔진 노출(SEO)을 극대화하는 최고의 아키텍처를 설계합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-foreground/5 ring-1 ring-foreground/10 p-1.5 rounded-[2.5rem] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/10">
                        <div className="flex flex-col h-full bg-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2.5rem-0.375rem)] p-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-foreground/[0.02]">
                            <MonitorSmartphone className="text-blue-400 mb-6" size={36} />
                            <h3 className="font-bold text-xl mb-3 text-foreground break-keep">고급진 애니메이션</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed">눈에 띄지 않는 섬세한 전환과 부드러운 움직임으로 사용자 경험을 한 차원 높이는 고급스러운 애니메이션을 제공합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group bg-foreground/5 ring-1 ring-foreground/10 p-1.5 rounded-[2.5rem] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
                        <div className="flex flex-col h-full bg-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2.5rem-0.375rem)] p-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-foreground/[0.02]">
                            <Database className="text-emerald-500 mb-6" size={36} />
                            <h3 className="font-bold text-xl mb-3 text-foreground break-keep">자유로운 연동 확장</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed">Supabase, Firebase, 결제 모듈, 외부 API 등 커스텀 플랫폼을 구축하는데 필요한 어떠한 기술 스택도 유연하게 연결 가능합니다.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Pricing Section (Single Card Centered) */}
                <div className="max-w-md mx-auto relative z-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-3 text-foreground">웹스케이프 솔루션 가이드</h2>
                    </div>

                    <PricingCard tier={VIBE_TIER} index={0} />

                    <div className="mt-8 text-center text-foreground/50 text-sm">
                        * 클라이언트의 비즈니스 목표와 세부 요구사항에 따라 프로젝트 예산은 유연하게 맞춤 설계됩니다.
                    </div>
                </div>

                {/* Workflow Section */}
                <WorkflowSection
                    title="한계를 뛰어넘는 개발, 바이브 코딩 프로세스"
                    subtitle="복잡한 비즈니스 로직과 압도적인 퍼포먼스를 현실로 만듭니다."
                    theme="blue"
                    steps={[
                        { title: "하이엔드 프로젝트 문의", description: "프로젝트 목표 분석 및 최적의 맞춤형 개발 로드맵 제안" },
                        { title: "계약 및 착수금 결제", description: "전자 계약서 작성 및 착수금(50%) 결제" },
                        { title: "심화 기획 및 프리미엄 디자인", description: "브랜드 아이덴티티를 극대화하는 하이엔드 맞춤형 UI/UX 디자인" },
                        { title: "Next.js 풀스택 개발", description: "최신 프레임워크와 외부 API를 연동하여 고객이 원하는 모든 기능을 완벽하게 구현" },
                        { title: "완벽한 QA 및 최종 검수", description: "반응형 및 기능 최적화와 꼼꼼한 최종 품질 테스트 진행" },
                        { title: "잔금 결제 및 라이브 런칭", description: "잔금 결제 완료 후 서버 배포, 소유권 이전 및 사후 관리" }
                    ]}
                />
            </div>
        </div>
    );
}
