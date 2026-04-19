"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PortfolioItem } from "@/src/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export default function DetailCoverage({ project }: { project: PortfolioItem }) {
    return (
        <section className="py-24 md:py-32 lg:py-40 bg-background border-t border-foreground/5 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    <div className="flex-1">
                        <SectionHeader 
                            badge="SEO & Global Presence"
                            title={project.coverage?.title || "전국 지역 및 맞춤 업종 커버리지"}
                            description={project.coverage?.description || "웹스케이프의 최적화된 테크 웹사이트는 어느 지역이든, 어떤 사업이든 유연하게 적용되며 최고의 성과를 냅니다."}
                            centered={false}
                            className="mb-10 md:mb-12"
                        />
                        
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {["서울/수도권", "제주/도서", "광역시 단위", "전국 전역"].map((region, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={cn(
                                        "flex items-center gap-4 bg-foreground/5 p-5 md:p-6 rounded-2xl border border-foreground/10",
                                        "hover:border-accent/40 hover:bg-background hover:shadow-xl transition-all cursor-default"
                                    )}
                                >
                                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                                    <span className="font-bold text-foreground text-lg">{region}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Map Visual */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className={cn(
                            "flex-1 relative w-full aspect-square md:aspect-[4/3] bg-foreground/5 rounded-[2.5rem] md:rounded-[4rem]",
                            "border border-foreground/10 flex items-center justify-center shadow-inner overflow-hidden"
                        )}
                    >
                        <Image 
                            src="/portfolio/map-coverage.png"
                            alt="전국 지역 및 맞춤 업종 커버리지 지도"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
