"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { PORTFOLIO_DATA } from "@/src/data/portfolio";

export default function PortfolioHighlight() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const isHoveredRef = useRef(false);
    const [, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);

    // 최신 순 정렬
    const projects = [...PORTFOLIO_DATA].reverse();

    // 현재 슬라이더 중앙에 가장 가까운 카드의 인덱스 계산
    const updateActiveIndex = useCallback(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
        const children = Array.from(slider.children) as HTMLElement[];

        let closestIndex = 0;
        let minDistance = Infinity;

        children.forEach((child, index) => {
            const childCenter = child.offsetLeft + child.offsetWidth / 2;
            const distance = Math.abs(sliderCenter - childCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        setActiveIndex(closestIndex);
        activeIndexRef.current = closestIndex;
    }, []);

    // 스크롤 및 윈도우 리사이즈 리스너 등록
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateActiveIndex();
                    ticking = false;
                });
                ticking = true;
            }
        };

        slider.addEventListener("scroll", onScroll, { passive: true });
        const initFrameId = window.requestAnimationFrame(() => {
            updateActiveIndex();
        });
        window.addEventListener("resize", onScroll, { passive: true });

        return () => {
            window.cancelAnimationFrame(initFrameId);
            slider.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [updateActiveIndex]);

    // 2초마다 정확히 한 칸씩 중앙으로 자동 슬라이딩 (마지막 슬라이드 도달 시 2초 뒤 처음으로 복귀)
    useEffect(() => {
        const interval = setInterval(() => {
            if (isHoveredRef.current || !sliderRef.current) return;
            const slider = sliderRef.current;
            const children = Array.from(slider.children) as HTMLElement[];
            if (children.length === 0) return;

            // 다음 슬라이드 인덱스 계산 (마지막 슬라이드 도달 시 0번으로 순환)
            const nextIndex = (activeIndexRef.current + 1) % children.length;
            const nextCard = children[nextIndex];
            if (nextCard) {
                const targetScroll = nextIndex === 0
                    ? 0
                    : Math.max(0, nextCard.offsetLeft - (slider.clientWidth - nextCard.offsetWidth) / 2);
                slider.scrollTo({ left: targetScroll, behavior: "smooth" });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 md:py-24 bg-[#160B07] text-[#F5F1EB] relative overflow-hidden">
            {/* 배경 앰비언트 글로우 */}
            <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* 상단 헤더: 타이틀 + 전체보기 버튼 */}
            <div className="container mx-auto px-6 max-w-7xl mb-8 md:mb-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-5xl font-bold tracking-tighter break-keep mb-3 text-[#F5F1EB]"
                        >
                            성공을 증명하는 포트폴리오
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[#F5F1EB]/70 text-base md:text-lg max-w-xl break-keep"
                        >
                            검색과 전환에 최적화된 최고 수준의 웹사이트 결과물을 확인하세요.
                        </motion.p>
                    </div>

                    {/* 우측 상단: 전체보기 버튼 */}
                    <div className="hidden sm:inline-flex">
                        <Link
                            href="/portfolio"
                            className="group relative items-center shrink-0 bg-white/[0.05] hover:bg-white/[0.1] text-white px-5 py-3 rounded-full font-medium text-sm border border-white/10 transition-[background-color,border-color,transform] duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>전체보기</span>
                            <span className="inline-flex ml-2 w-6 h-6 rounded-full bg-white/10 items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 좌우 풀 너비 슬라이더 트랙 */}
            <div
                className="relative w-full"
                onMouseEnter={() => {
                    isHoveredRef.current = true;
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    isHoveredRef.current = false;
                    setIsHovered(false);
                }}
                onTouchStart={() => {
                    isHoveredRef.current = true;
                }}
                onTouchEnd={() => {
                    isHoveredRef.current = false;
                }}
            >
                {/* 좌우 끝 자연스러운 소프트 페이드 엣지 */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-[#160B07] to-transparent z-30 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-[#160B07] to-transparent z-30 pointer-events-none" />

                <div
                    ref={sliderRef}
                    className="flex gap-5 sm:gap-7 md:gap-9 overflow-x-auto scroll-smooth snap-x snap-mandatory py-12 md:py-16 px-[calc(50%-140px)] sm:px-[calc(50%-160px)] md:px-[calc(50%-175px)] lg:px-[calc(50%-185px)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-center"
                >
                    {projects.map((project, i) => {
                        const isActive = activeIndex === i;

                        return (
                            <motion.div
                                key={project.id || i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className={cn(
                                    "w-[280px] sm:w-[320px] md:w-[350px] lg:w-[370px] shrink-0 snap-center transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] origin-center",
                                    isActive
                                        ? "scale-[1.10] sm:scale-[1.14] md:scale-[1.18] opacity-100 z-20"
                                        : "scale-[0.84] sm:scale-[0.87] md:scale-[0.89] opacity-45 z-10 hover:opacity-75 cursor-pointer"
                                )}
                                onClick={() => {
                                    if (!isActive && sliderRef.current) {
                                        const children = Array.from(sliderRef.current.children) as HTMLElement[];
                                        const targetCard = children[i];
                                        if (targetCard) {
                                            const targetScroll = targetCard.offsetLeft - (sliderRef.current.clientWidth - targetCard.offsetWidth) / 2;
                                            sliderRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
                                        }
                                    }
                                }}
                            >
                                {/* 슬라이드 누르면 실제 웹사이트로 새 탭 열기 */}
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block w-full outline-none"
                                    onClick={(e) => {
                                        // 중앙에 오지 않은 주변 카드를 클릭했을 때는 링크 열기 대신 중앙 이동을 우선 수행
                                        if (!isActive) {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    {/* 썸네일 이미지 영역: 16/10 비율 */}
                                    <div
                                        className={cn(
                                            "relative w-full aspect-[16/10] bg-[#211009] rounded-2xl md:rounded-[1.75rem] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                                            isActive
                                                ? "border-2 border-[#FF6B35]/70 shadow-[0_24px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(255,107,53,0.3)]"
                                                : "border border-white/10 shadow-sm"
                                        )}
                                    >
                                        {project.image && (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className={cn(
                                                    "object-cover object-top w-full h-full transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                                                    isActive
                                                        ? "blur-0 brightness-100 group-hover:scale-105"
                                                        : "blur-[3px] brightness-[0.7] group-hover:blur-[1px] group-hover:brightness-[0.85]"
                                                )}
                                                sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 370px"
                                            />
                                        )}

                                        {/* 주변 카드용 어두운 반투명 딤드 오버레이 */}
                                        <div
                                            className={cn(
                                                "absolute inset-0 bg-black/40 transition-opacity duration-500 pointer-events-none",
                                                isActive ? "opacity-0" : "opacity-100 group-hover:opacity-40"
                                            )}
                                        />

                                        {/* 중앙 카드 호버 시 은은한 그라데이션 오버레이 */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    </div>

                                    {/* 하단 텍스트 영역: 프로젝트 타이틀 */}
                                    <h3
                                        className={cn(
                                            "text-base sm:text-lg md:text-xl font-bold tracking-tight transition-all duration-500 leading-snug mt-3 text-center",
                                            isActive
                                                ? "text-[#F5F1EB] group-hover:text-[#FF6B35]"
                                                : "text-[#F5F1EB]/50 blur-[0.4px]"
                                        )}
                                    >
                                        {project.title}
                                    </h3>
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* 모바일 전용 전체보기 버튼 */}
            <div className="container mx-auto px-6 max-w-7xl mt-4 sm:hidden">
                <Link
                    href="/portfolio"
                    className="w-full justify-center group relative inline-flex items-center shrink-0 bg-[#FF6B35] hover:bg-[#FF7A47] text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-[transform,background-color,box-shadow] duration-300 shadow-lg shadow-[#FF6B35]/25"
                >
                    <span>포트폴리오 전체보기</span>
                    <span className="inline-flex ml-2 w-5 h-5 rounded-full bg-white/20 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowUpRight className="w-3 h-3" />
                    </span>
                </Link>
            </div>
        </section>
    );
}
