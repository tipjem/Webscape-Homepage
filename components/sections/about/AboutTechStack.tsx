"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, LayoutTemplate, ShoppingBag, Bot, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/ui/Magnetic";

export default function AboutTechStack() {
    const [activeTab, setActiveTab] = useState<"vibe" | "bricks" | "domestic">("vibe");

    // 3D Tilt Card Ref & Handlers (Transitions.dev 19-card-tilt style)
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setTilt({
            x: -(y / (rect.height / 2)) * 8,
            y: (x / (rect.width / 2)) * 8,
        });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <section className="py-24 md:py-36 bg-transparent text-[#F5F1EB] relative border-b border-white/5 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#F07A32]/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header (No AI eyebrow badge) */}
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter mb-5 break-keep">
                        플랫폼별 특성에 맞춘 <br />
                        <span className="text-[#F07A32]">웹스케이프의 엔지니어링 표준</span>
                    </h2>
                    <p className="text-[#F5F1EB]/70 text-base sm:text-lg leading-relaxed break-keep">
                        프로젝트의 목적과 예산에 따라 최적의 아키텍처를 선택합니다.
                        어떤 플랫폼으로 제작하거나 운영 중이든, 웹 표준 준수와 안정적인 유지보수를 보장합니다.
                    </p>
                </div>

                {/* 3-Tab Sliding Segmented Control with Magnetic Touch */}
                <div className="flex justify-center mb-12 sm:mb-16">
                    <div className="inline-flex flex-wrap sm:flex-nowrap p-1.5 rounded-2xl sm:rounded-full bg-white/[0.03] border border-white/10 relative backdrop-blur-xl w-full max-w-3xl justify-center gap-1 sm:gap-0">
                        <Magnetic strength={0.15} className="flex-1">
                            <button
                                type="button"
                                onClick={() => setActiveTab("vibe")}
                                className={cn(
                                    "w-full relative z-10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-colors duration-200 flex items-center justify-center gap-2",
                                    activeTab === "vibe" ? "text-white" : "text-[#F5F1EB]/60 hover:text-white"
                                )}
                            >
                                <Code2 className="w-4 h-4" />
                                <span>바이브코딩 (Next.js · Astro)</span>
                            </button>
                        </Magnetic>

                        <Magnetic strength={0.15} className="flex-1">
                            <button
                                type="button"
                                onClick={() => setActiveTab("bricks")}
                                className={cn(
                                    "w-full relative z-10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-colors duration-200 flex items-center justify-center gap-2",
                                    activeTab === "bricks" ? "text-white" : "text-[#F5F1EB]/60 hover:text-white"
                                )}
                            >
                                <LayoutTemplate className="w-4 h-4" />
                                <span>워드프레스 브릭스</span>
                            </button>
                        </Magnetic>

                        <Magnetic strength={0.15} className="flex-1">
                            <button
                                type="button"
                                onClick={() => setActiveTab("domestic")}
                                className={cn(
                                    "w-full relative z-10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-colors duration-200 flex items-center justify-center gap-2",
                                    activeTab === "domestic" ? "text-white" : "text-[#F5F1EB]/60 hover:text-white"
                                )}
                            >
                                <ShoppingBag className="w-4 h-4" />
                                <span>아임웹 · 카페24</span>
                            </button>
                        </Magnetic>

                        {/* Sliding Active Pill (Desktop) */}
                        <motion.div
                            layoutId="activeTabPill"
                            className="hidden sm:block absolute inset-y-1.5 rounded-full bg-gradient-to-r from-[#F07A32] to-[#FF6B35] shadow-lg shadow-[#F07A32]/25 pointer-events-none"
                            style={{
                                left: activeTab === "vibe" ? "6px" : activeTab === "bricks" ? "calc(33.333% + 2px)" : "calc(66.666% + 2px)",
                                width: "calc(33.333% - 8px)",
                            }}
                            transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                    </div>
                </div>

                {/* Tab Content Display Area */}
                <AnimatePresence mode="wait">
                    {activeTab === "vibe" && (
                        <motion.div
                            key="vibe"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                        >
                            {/* Left: Next.js & Astro Interactive AI Schema Generation Visual */}
                            <div className="lg:col-span-7">
                                <div
                                    ref={cardRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                                        transition: "transform 0.15s ease-out",
                                    }}
                                    className="rounded-3xl bg-[#1B0D07]/90 border border-[#F07A32]/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F07A32] to-transparent animate-pulse opacity-70" />

                                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                                            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                                            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                                            <span className="text-xs text-[#F5F1EB]/40 font-mono ml-2">vibe/schema.json-ld.ts</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-[#3B82F6] font-mono">
                                            <Bot className="w-3.5 h-3.5" />
                                            <span>GPTBot & Perplexity Verified</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 font-mono text-xs sm:text-sm text-[#F5F1EB]/85 leading-relaxed bg-black/40 p-5 rounded-2xl border border-white/5">
                                        <p className="text-[#F07A32] font-semibold">{"// 생성형 AI 검색 답변 1순위 인용 표준 스키마"}</p>
                                        <p className="text-purple-400">{"export const jsonLd = {"}</p>
                                        <p className="pl-4 text-emerald-400">{'  "@context": "https://schema.org",'}</p>
                                        <p className="pl-4 text-emerald-400">{'  "@type": "LocalBusiness",'}</p>
                                        <p className="pl-4 text-sky-400">{'  "name": "고객사 공식 상호",'}</p>
                                        <p className="pl-4 text-amber-300">{'  "knowsAbout": ["전문 서비스", "실시간 상담", "A/S 보증"],'}</p>
                                        <p className="pl-4 text-blue-300">{'  "aiRecommendationPriority": "Verified Source"'}</p>
                                        <p className="text-purple-400">{"};"}</p>
                                    </div>

                                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs text-[#F5F1EB]/60">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                            <span>초경량 제로-JS & LCP 최적화</span>
                                        </div>
                                        <span className="font-mono text-[#F07A32]">Next.js & Astro Dual Engine</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Technical Explanation */}
                            <div className="lg:col-span-5 space-y-6">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F1EB] tracking-tight mb-4 break-keep">
                                        AI가 사람처럼 읽고 추천하는 <br />
                                        고성능 맞춤 코딩 (Next.js · Astro)
                                    </h3>
                                    <p className="text-sm sm:text-base text-[#F5F1EB]/75 leading-relaxed break-keep">
                                        웹스케이프의 바이브코딩은 최신 Next.js와 초경량 Astro 프레임워크를 기반으로 합니다. ChatGPT, Perplexity, 구글 검색 크롤러가 직접 해석하고 1순위로 인용할 수 있는 시맨틱 지식 구조화 코드를 직접 탑재하여 타협 없는 로딩 속도와 검색 노출을 동시에 달성합니다.
                                    </p>
                                </div>

                                <div className="space-y-3.5 pt-2">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#F07A32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#F5F1EB]/85 break-keep">
                                            <strong>schema.org JSON-LD 마크업:</strong> AI 검색 챗봇이 내 사업장을 공식 정보 출처로 신뢰.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#F07A32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#F5F1EB]/85 break-keep">
                                            <strong>Next.js & Astro 듀얼 엔진:</strong> 프로젝트 성격에 맞춰 최적의 풀스택 또는 초경량 렌더링 선택.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#F07A32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#F5F1EB]/85 break-keep">
                                            <strong>100% 영구 소유권:</strong> 플랫폼에 종속되지 않고 영구 소장 가능한 소스코드 납품.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "bricks" && (
                        <motion.div
                            key="bricks"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                        >
                            {/* Left: Bricks Visual Editor Mockup */}
                            <div className="lg:col-span-7">
                                <div
                                    ref={cardRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                                        transition: "transform 0.15s ease-out",
                                    }}
                                    className="rounded-3xl bg-[#1F1209]/95 border border-[#FF6B35]/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
                                >
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                                            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                                            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                                            <span className="text-xs text-[#F5F1EB]/40 font-mono ml-2">Bricks Visual Canvas</span>
                                        </div>
                                        <span className="text-xs text-[#FF6B35] font-bold px-2.5 py-0.5 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/30">
                                            초경량 DOM
                                        </span>
                                    </div>

                                    <div className="space-y-4 bg-black/40 p-5 rounded-2xl border border-white/5">
                                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] font-bold text-xs">
                                                    H1
                                                </div>
                                                <div>
                                                    <p className="text-xs text-[#F5F1EB]/50">메인 타이틀 영역</p>
                                                    <p className="text-sm font-bold text-[#F5F1EB]">대표님이 클릭 한 번으로 글자 직접 수정</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-emerald-400 font-mono">1-Click Edit</span>
                                        </div>

                                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] font-bold text-xs">
                                                    IMG
                                                </div>
                                                <div>
                                                    <p className="text-xs text-[#F5F1EB]/50">포트폴리오 갤러리</p>
                                                    <p className="text-sm font-bold text-[#F5F1EB]">드래그 앤 드롭으로 최신 시공 사진 교체</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-sky-400 font-mono">Instant Sync</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
                                        <div>
                                            <p className="text-xs text-[#F5F1EB]/50">DOM 구조</p>
                                            <p className="text-sm font-bold text-[#F5F1EB]">98% 순수 HTML</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#F5F1EB]/50">플러그인 의존</p>
                                            <p className="text-sm font-bold text-emerald-400">극최소화</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#F5F1EB]/50">수정 소요</p>
                                            <p className="text-sm font-bold text-[#FF6B35]">평균 1분</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Technical Explanation */}
                            <div className="lg:col-span-5 space-y-6">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F1EB] tracking-tight mb-4 break-keep">
                                        불필요한 군더더기를 걷어낸 <br />
                                        경량 워드프레스 브릭스 빌더
                                    </h3>
                                    <p className="text-sm sm:text-base text-[#F5F1EB]/75 leading-relaxed break-keep">
                                        기존 엘리멘터처럼 플러그인이 쌓여 느려지거나 오류가 나지 않습니다.
                                        가장 가벼운 DOM 엔진으로 빠른 속도를 보장하며, 비전공자 대표님도 직접 글자와 사진을 1분 만에 고칠 수 있습니다.
                                    </p>
                                </div>

                                <div className="space-y-3.5 pt-2">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#F5F1EB]/85 break-keep">
                                            <strong>초경량 코드 구조:</strong> 일반 워드프레스 대비 3배 가벼운 DOM으로 쾌적한 속도.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#F5F1EB]/85 break-keep">
                                            <strong>비전공자 맞춤형 관리자:</strong> 개발자에게 매번 비용을 지불하지 않고 직접 수정 가능.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#F5F1EB]/85 break-keep">
                                            <strong>합리적인 단가와 빠른 런칭:</strong> 사업 시작 초기 예산 부담을 획기적으로 절감.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "domestic" && (
                        <motion.div
                            key="domestic"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                        >
                            {/* Left: Domestic Builder Management Mockup */}
                            <div className="lg:col-span-7">
                                <div
                                    ref={cardRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                                        transition: "transform 0.15s ease-out",
                                    }}
                                    className="rounded-3xl bg-[#1B0F0A]/95 border border-[#F07A32]/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
                                >
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                                            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                                            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                                            <span className="text-xs text-[#F5F1EB]/40 font-mono ml-2">아임웹 · 카페24 관리 허브</span>
                                        </div>
                                        <span className="text-xs text-[#F07A32] font-bold px-2.5 py-0.5 rounded-full bg-[#F07A32]/15 border border-[#F07A32]/30">
                                            신규제작 & 유지보수
                                        </span>
                                    </div>

                                    <div className="space-y-4 bg-black/40 p-5 rounded-2xl border border-white/5">
                                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-[#F07A32]/20 flex items-center justify-center text-[#F07A32] font-bold text-xs">
                                                    NEW
                                                </div>
                                                <div>
                                                    <p className="text-xs text-[#F5F1EB]/50">빠른 실속형 신규 제작</p>
                                                    <p className="text-sm font-bold text-[#F5F1EB]">쇼핑몰, 예약 시스템, 맞춤 템플릿 세팅</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-emerald-400 font-mono">초고속 오픈</span>
                                        </div>

                                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] font-bold text-xs">
                                                    MNT
                                                </div>
                                                <div>
                                                    <p className="text-xs text-[#F5F1EB]/50">기존 운영 사이트 케어</p>
                                                    <p className="text-sm font-bold text-[#F5F1EB]">배너 교체, 디자인 리뉴얼, 월정액 유지보수</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-sky-400 font-mono">월 안심 전담</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
                                        <div>
                                            <p className="text-xs text-[#F5F1EB]/50">국내 결제(PG)</p>
                                            <p className="text-sm font-bold text-emerald-400">100% 최적화</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#F5F1EB]/50">기존 사이트</p>
                                            <p className="text-sm font-bold text-[#F5F1EB]">리뉴얼 지원</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#F5F1EB]/50">월 관리 대행</p>
                                            <p className="text-sm font-bold text-[#F07A32]">24h 이내 처리</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Technical Explanation */}
                            <div className="lg:col-span-5 space-y-6">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F1EB] tracking-tight mb-4 break-keep">
                                        친숙하고 빠른 국내 플랫폼 <br />
                                        아임웹 · 카페24 제작과 운영
                                    </h3>
                                    <p className="text-sm sm:text-base text-[#F5F1EB]/75 leading-relaxed break-keep">
                                        복잡한 개발 없이 빠르게 오픈해야 하거나, 이미 아임웹이나 카페24로 만들어진 사이트가 있으신가요?
                                        신규 맞춤 세팅부터 기존 사이트의 디자인 개선, 대표님이 혼자 하기 버거운 월정액 유지보수까지 모두 지원합니다.
                                    </p>
                                </div>

                                <div className="space-y-3.5 pt-2">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#F07A32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#F5F1EB]/85 break-keep">
                                            <strong>빠른 런칭과 친숙한 관리:</strong> 이커머스, 예약, 기본 문의 기능의 신속한 구축.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#F07A32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#F5F1EB]/85 break-keep">
                                            <strong>기존 사이트 리뉴얼:</strong> 촌스러운 템플릿 디자인을 세련된 반응형 레이아웃으로 개선.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#F07A32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#F5F1EB]/85 break-keep">
                                            <strong>골치 아픈 월 관리 대행:</strong> 상품 등록, 팝업 배너 교체 등 귀찮은 작업을 대신 처리.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
