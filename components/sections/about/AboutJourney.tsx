"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutJourney() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    const services = [
        {
            num: "01",
            title: "워드프레스 (브릭스 빌더)",
            tagline: "자유로운 독립형 사이트 · 영구 소유 · 대표님 직접 수정",
            desc: "획일적인 템플릿의 틀을 벗어나 브랜드만의 독창적인 디자인을 구현합니다. 월 임대료 부담 없이 평생 소유하며, 비전공자 대표님도 직접 글과 이미지를 1분 만에 고칠 수 있는 실속형 비즈니스 웹입니다.",
        },
        {
            num: "02",
            title: "바이브코딩 (Next.js · Astro)",
            tagline: "AI 검색(AEO) 1순위 인용 · 타협 없는 고성능 맞춤형",
            desc: "ChatGPT, Perplexity, 구글 검색엔진이 내 사업장을 공식 정보 출처로 신뢰하도록 시맨틱 지식 스키마(JSON-LD)를 직접 설계합니다. Next.js와 Astro의 초경량 아키텍처로 모바일 반응 속도를 극대화합니다.",
        },
        {
            num: "03",
            title: "아임웹 · 카페24 & 사후 유지보수",
            tagline: "빠른 런칭 · 기존 사이트 리뉴얼 · 월정액 안심 관리",
            desc: "빠른 오픈이나 이커머스 연동이 필요할 때, 혹은 이미 아임웹이나 카페24로 운영 중이던 사이트의 디자인 개선과 혼자 하기 힘든 월정액 유지보수를 든든하게 전담합니다.",
        },
    ];

    return (
        <section
            onMouseLeave={() => setHoveredIdx(null)}
            className="py-24 md:py-36 bg-transparent text-[#F5F1EB] border-b border-white/5 relative overflow-hidden"
        >
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* Section Header */}
                <div className="mb-16 md:mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F1EB] mb-6 break-keep">
                        상황에 맞는 최적의 방식으로 <br />
                        <span className="text-[#F07A32]">가장 효율적인 웹사이트를 구축합니다.</span>
                    </h2>
                    <p className="text-[#F5F1EB]/70 text-base sm:text-lg leading-relaxed max-w-2xl break-keep">
                        특정 도구만을 강요하지 않습니다. 
                        아임웹, 카페24부터 워드프레스, 최신 Next.js와 Astro까지 다양한 플랫폼을 다뤄온 실무 경험을 바탕으로 
                        대표님의 사업 목적과 예산에 가장 적합한 방식을 제안합니다.
                    </p>
                </div>

                {/* Editorial Horizontal Rows with Kinetic Energy Beam */}
                <div className="divide-y divide-white/10 border-y border-white/10 relative">
                    {services.map((item, idx) => {
                        const isHovered = hoveredIdx === idx;
                        const hasOtherHovered = hoveredIdx !== null && !isHovered;

                        return (
                            <div
                                key={idx}
                                onMouseEnter={() => setHoveredIdx(idx)}
                                className={cn(
                                    "py-10 md:py-14 px-4 sm:px-6 rounded-2xl md:rounded-none grid md:grid-cols-12 gap-6 md:gap-8 items-start relative cursor-pointer transition-all duration-300",
                                    isHovered ? "bg-white/[0.02]" : "bg-transparent",
                                    hasOtherHovered ? "opacity-35" : "opacity-100"
                                )}
                            >
                                {/* Animated Energy Beam on Top Border when Hovered */}
                                {isHovered && (
                                    <motion.div
                                        initial={{ scaleX: 0, opacity: 0 }}
                                        animate={{ scaleX: 1, opacity: 1 }}
                                        exit={{ scaleX: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute -top-[1px] inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F07A32] to-transparent origin-left z-20 pointer-events-none"
                                    />
                                )}

                                {/* Number Indicator with Kinetic Spring */}
                                <div className="md:col-span-1 text-sm font-mono flex items-center justify-between">
                                    <motion.span
                                        animate={{
                                            scale: isHovered ? 1.15 : 1,
                                            color: isHovered ? "#F07A32" : "#F5F1EB",
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="font-bold inline-block"
                                    >
                                        {item.num}
                                    </motion.span>
                                    <motion.span
                                        animate={{
                                            x: isHovered ? 3 : -4,
                                            y: isHovered ? -3 : 4,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className="hidden md:inline-block text-[#F07A32]"
                                    >
                                        <ArrowUpRight className="w-4 h-4" />
                                    </motion.span>
                                </div>

                                {/* Title & Tagline with Kinetic Slide */}
                                <motion.div
                                    animate={{ x: isHovered ? 8 : 0 }}
                                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                    className="md:col-span-4"
                                >
                                    <h3
                                        className={cn(
                                            "text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 break-keep mb-2",
                                            isHovered ? "text-[#F07A32]" : "text-[#F5F1EB]"
                                        )}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className={cn(
                                            "text-xs sm:text-sm font-medium break-keep transition-colors duration-200",
                                            isHovered ? "text-[#F07A32]/95" : "text-[#F5F1EB]/50"
                                        )}
                                    >
                                        {item.tagline}
                                    </p>
                                </motion.div>

                                {/* Description */}
                                <motion.div
                                    animate={{ x: isHovered ? 4 : 0 }}
                                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                    className="md:col-span-7"
                                >
                                    <p className="text-[#F5F1EB]/70 text-sm sm:text-base leading-relaxed break-keep">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
