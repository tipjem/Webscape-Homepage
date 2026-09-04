"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { PORTFOLIO_DATA } from "@/src/data/portfolio";

const PROJECTS = [...PORTFOLIO_DATA].reverse().slice(0, 4);

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.id || i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block w-full outline-none"
                            >
                                {/* Thumbnail Image Area */}
                                <div className="relative w-full aspect-[16/10] bg-white/5 rounded-2xl overflow-hidden mb-2.5 shadow-sm border border-white/10">
                                    {project.image && (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                    )}
                                </div>

                                {/* Title Area */}
                                <h3 className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                            </a>
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
