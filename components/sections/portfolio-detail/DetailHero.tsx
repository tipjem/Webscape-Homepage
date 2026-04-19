"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PortfolioItem } from "@/src/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export default function DetailHero({ project }: { project: PortfolioItem }) {
    return (
        <section className="bg-background pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden border-b border-foreground/5">
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <header className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                            "inline-block px-4 py-1.5 rounded-full bg-foreground/10 text-foreground text-xs font-bold mb-6 backdrop-blur-md border border-foreground/5 uppercase tracking-widest"
                        )}
                    >
                        {project.category}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 text-foreground break-keep leading-tight"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl lg:text-2xl text-foreground/70 break-keep leading-relaxed max-w-3xl mx-auto"
                    >
                        {project.description}
                    </motion.p>
                    
                    {project.url && project.url !== "#" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-10 md:mt-14 flex justify-center"
                        >
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-bold rounded-full hover:bg-accent/90 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 text-lg"
                            >
                                샘플 직접 보러가기
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </motion.div>
                    )}
                </header>

                {/* 다중 이미지 스택 갤러리 */}
                <div className="flex flex-col gap-12 md:gap-24 w-full max-w-5xl mx-auto mb-20 md:mb-32">
                    {(project.images || (project.image ? [project.image] : [])).map((imgTarget, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className={cn(
                                "relative w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden ring-1 ring-white/10 shadow-2xl bg-foreground/5",
                                "transition-transform hover:scale-[1.01] duration-700",
                                "will-change-transform flex flex-col items-center justify-center" // 애니메이션 가속 최적화
                            )}
                        >
                            <Image
                                src={imgTarget}
                                alt={`${project.title} - ${project.category} 전문 홈페이지 디자인 상세 미리보기 ${index + 1}`}
                                width={1920}
                                height={2000}
                                className="w-auto h-auto max-w-full object-contain"
                                priority={index === 0}
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,UklGRmYAAABXRUJQVlA4IGIAAACQAgCdASoBAAEAAkA4JaACdAEpAAAA/v7+AAEAAwABAAEAAQAA"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            />
                        </motion.div>
                    ))}
                    
                    {!(project.images || project.image) && (
                        <div className="relative w-full aspect-[21/9] rounded-[2rem] border border-dashed border-foreground/20 flex flex-col items-center justify-center text-foreground/30 font-medium bg-foreground/5 p-8 text-center">
                            <span className="text-sm">목업 이미지가 현재 준비중입니다.</span>
                        </div>
                    )}
                </div>

                {/* Stats Row */}
                {project.stats && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                    >
                        {project.stats.map((stat, idx) => (
                            <div key={idx} className={cn(
                                "bg-foreground/5 rounded-3xl p-8 text-center backdrop-blur-sm border border-foreground/10 shadow-sm",
                                "hover:border-accent/40 hover:bg-foreground/[0.07] transition-all hover:-translate-y-1 duration-300"
                            )}>
                                <h3 className="text-foreground/60 font-semibold mb-3 text-xs md:text-sm uppercase tracking-wider">{stat.label}</h3>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tighter">{stat.value}</span>
                                    <span className="text-xl font-bold text-accent">{stat.suffix}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
