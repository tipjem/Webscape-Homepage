"use client";

import { motion } from "framer-motion";
import { PortfolioItem } from "@/src/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export default function DetailFeatures({ project }: { project: PortfolioItem }) {
    if (!project.features) return null;

    return (
        <section className="py-24 md:py-32 lg:py-40 bg-background border-t border-foreground/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <SectionHeader 
                    title="내 사이트 핵심 경쟁력"
                    description={`${project.title} 프로젝트의 성공을 이끈 웹스케이프만이 가능한 테크니컬 솔루션입니다.`}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12 md:gap-y-8 max-w-5xl mx-auto items-start">
                    {project.features.map((feat, idx) => (
                        <motion.div
                            key={feat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.7 }}
                            className={cn(
                                "group relative bg-foreground/5 rounded-[2rem] p-10 overflow-hidden border border-foreground/10",
                                "hover:border-accent/40 hover:bg-foreground/[0.07] transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5",
                                "grid grid-rows-[auto_1fr] md:grid-rows-subgrid md:row-span-2 gap-y-4 md:gap-y-0",
                                "will-change-transform" // CSS 레이어 성능 최적화
                            )}
                        >
                            <div className="absolute top-6 right-8 text-7xl font-black text-foreground/5 group-hover:text-accent/10 transition-colors pointer-events-none select-none">
                                {feat.id}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground relative z-10 tracking-tight break-keep">{feat.title}</h3>
                            <p className="text-foreground/70 leading-relaxed relative z-10 break-keep text-lg">{feat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
