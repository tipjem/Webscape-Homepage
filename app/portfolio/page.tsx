"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/src/data/portfolio";

export default function PortfolioPage() {
    const projects = [...PORTFOLIO_DATA].reverse();

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
                                    {/* Thumbnail Image Area */}
                                    <div className="relative w-full aspect-[16/10] bg-foreground/5 rounded-2xl overflow-hidden mb-2.5 shadow-sm border border-foreground/10">
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
                                    <h3 className="text-base md:text-lg font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {projects.length === 0 && (
                    <div className="text-center py-20 text-foreground/50">
                        등록된 포트폴리오가 없습니다.
                    </div>
                )}
            </div>
        </div>
    );
}
