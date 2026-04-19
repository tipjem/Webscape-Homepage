"use client";

import { motion } from "framer-motion";
import { PortfolioItem } from "@/src/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export default function DetailProcess({ project }: { project: PortfolioItem }) {
    const steps = project.processSteps || [
        { step: "01", title: "심층 상담 및 기획", desc: "비즈니스 지표 분석 및 타겟 리서치" },
        { step: "02", title: "UI/UX 퍼블리싱", desc: "시선을 사로잡는 전환율 중심의 디자인" },
        { step: "03", title: "검수 및 라이브", desc: "검색 엔진 세팅 및 실제 도메인 연결" }
    ];

    return (
        <section className="py-24 md:py-32 lg:py-48 bg-foreground/5 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl text-center">
                <SectionHeader title="성공적인 런칭을 위한 프로세스" />

                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-16 md:gap-20 relative w-full px-4">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-1 bg-foreground/10 -z-10" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex-1 flex flex-col items-center text-center relative z-10 w-full group"
                        >
                            <div className={cn(
                                "w-28 h-28 md:w-32 md:h-32 rounded-full bg-background border-4 border-accent flex items-center justify-center shadow-xl mb-10 transition-all duration-500",
                                "group-hover:scale-110 group-hover:shadow-accent/30 group-hover:border-accent/80"
                            )}>
                                <span className="text-3xl font-black text-foreground">{step.step}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 break-keep">{step.title}</h3>
                            <p className="text-foreground/60 leading-relaxed max-w-sm break-keep text-lg">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
