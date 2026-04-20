"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { PORTFOLIO_DATA } from "@/src/data/portfolio";

const PROJECTS = [...PORTFOLIO_DATA].reverse().slice(0, 3);

export default function PortfolioHighlight() {
    return (
        <section className="py-32 bg-foreground text-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter break-keep mb-4 text-background">
                            성공을 증명하는 포트폴리오
                        </h2>
                        <p className="text-background/70 text-lg max-w-xl">
                            투트랙 솔루션을 통해 완성된 최고 수준의 웹사이트를 확인하세요.
                        </p>
                    </div>
                    <Link href="/portfolio" className="hidden md:inline-flex group relative items-center shrink-0 bg-accent text-white px-8 py-4 rounded-full font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] active:scale-[0.98]">
                        <span>전체보기</span>
                        <span className="inline-flex ml-2 w-8 h-8 rounded-full bg-black/10 items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                            <ArrowUpRight className="w-4 h-4" />
                        </span>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.id || i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="group bg-white/5 ring-1 ring-white/10 p-1.5 rounded-[2rem] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20"
                        >
                            <Link
                                href={`/portfolio/${project.id}`}
                                className="flex flex-col h-full w-full outline-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-white/5 relative"
                            >
                                {/* Thumbnail Image Area */}
                                <div className="relative w-full h-[300px] md:h-[250px] bg-white/5 overflow-hidden">
                                    {project.image && (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-transparent group-hover:bg-white/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-1 relative z-20">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full shadow-sm ring-1 ring-white/10">
                                            {project.category}
                                        </span>
                                        {project.type && (
                                            <span className="px-3 py-1 text-white/60 text-xs font-semibold">
                                                {project.type}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300 break-keep">
                                        {project.title}
                                    </h3>
                                    {project.description && (
                                        <p className="text-white/70 text-sm line-clamp-2 mt-1">
                                            {project.description}
                                        </p>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-12 flex justify-center md:hidden">
                    <Link href="/portfolio" className="w-full justify-center group relative inline-flex items-center shrink-0 bg-accent text-white px-8 py-4 rounded-full font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] active:scale-[0.98]">
                        <span>전체보기</span>
                        <span className="inline-flex ml-2 w-8 h-8 rounded-full bg-black/10 items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                            <ArrowUpRight className="w-4 h-4" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
