"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio";

const CATEGORIES = ["전체보기", "바이브코딩", "워드프레스 브릭스"];

// 로딩 버벅임을 방지하기 위한 최소한의 흐린 이미지 플레이스홀더 (Base64)
const BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("전체보기");

    // 나중에 추가된 데이터(일반적으로 하단 배열)가 가장 먼저 보이도록 reverse 적용 후 필터링
    const filteredProjects = [...PORTFOLIO_DATA]
        .reverse()
        .filter(p => activeCategory === "전체보기" ? true : p.category === activeCategory);

    return (
        <div className="bg-background min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-foreground"
                    >
                        포트폴리오 갤러리
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        최고의 기술력과 타협 없는 디자인으로 완성된 웹스케이프의 작업물들입니다.
                    </motion.p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {CATEGORIES.map((cat, i) => (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${activeCategory === cat
                                ? "bg-foreground text-background shadow-md translate-y-[-2px]"
                                : "bg-foreground/5 text-gray-600 dark:text-gray-400 hover:bg-foreground/10"
                                }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                {/* Portfolio Grid Viewer */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="group bg-foreground/5 ring-1 ring-foreground/10 p-1.5 rounded-[2rem] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
                            >
                                <Link
                                    href={`/portfolio/${project.id}`}
                                    className="flex flex-col h-full w-full outline-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-background relative"
                                >
                                    {/* Thumbnail Image Area */}
                                    <div className="relative w-full h-[300px] md:h-[250px] bg-foreground/5 overflow-hidden">
                                        {project.image && (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover object-top w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-transparent group-hover:bg-foreground/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex flex-col flex-1 relative z-20">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-3 py-1 bg-foreground/5 text-foreground text-xs font-semibold rounded-full shadow-sm ring-1 ring-foreground/10">
                                                {project.category}
                                            </span>
                                            {project.type && (
                                                <span className="px-3 py-1 text-foreground/60 text-xs font-semibold">
                                                    {project.type}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300 break-keep">{project.title}</h3>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-foreground/50">
                        해당 카테고리에 등록된 포트폴리오가 없습니다.
                    </div>
                )}
            </div>
        </div>
    );
}
