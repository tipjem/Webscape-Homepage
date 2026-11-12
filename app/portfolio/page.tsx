"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio";

export default function PortfolioPage() {
    const projects = [...PORTFOLIO_DATA].reverse();

    return (
        <div className="bg-[#160B07] min-h-[100dvh] pt-32 pb-24 text-[#F5F1EB]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12 md:mb-14">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold tracking-tighter text-[#F5F1EB]"
                    >
                        포트폴리오 전시대
                    </motion.h1>
                </div>

                {/* Portfolio Grid Viewer */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block w-full outline-none"
                                >
                                    {/* Thumbnail Image Area with Black Overlay & '보러가기' Button on Hover */}
                                    <div className="relative w-full aspect-[16/10] bg-[#211009] rounded-2xl overflow-hidden mb-2.5 shadow-sm border border-white/10 group-hover:border-[#FF6B35]/40 transition-colors">
                                        {project.image && (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover object-top w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            />
                                        )}

                                        {/* 호버 시 검정색 오버레이 + 보러가기 버튼 */}
                                        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF6B35] group-hover:bg-[#FF7A47] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-black/50 translate-y-2 group-hover:translate-y-0 transition-[transform,background-color] duration-300">
                                                <span>보러가기</span>
                                                <ArrowUpRight size={14} />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title Area */}
                                    <h3 className="text-base md:text-lg font-bold text-[#F5F1EB] tracking-tight group-hover:text-[#FF6B35] transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {projects.length === 0 && (
                    <div className="text-center py-20 text-[#F5F1EB]/50">
                        등록된 포트폴리오가 없습니다.
                    </div>
                )}
            </div>
        </div>
    );
}
