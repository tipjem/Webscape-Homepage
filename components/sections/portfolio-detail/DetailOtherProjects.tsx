"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { cn } from "@/lib/utils";

export default function DetailOtherProjects({ currentId }: { currentId: number }) {
    // Show up to 3 OTHER projects, reversed so newer ones show first
    const others = [...PORTFOLIO_DATA].reverse().filter(p => p.id !== currentId).slice(0, 3);

    return (
        <section className="py-24 md:py-32 lg:py-40 bg-foreground/5 border-t border-foreground/10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <SectionHeader 
                        title="다른 테마 살펴보기"
                        description="웹스케이프의 더 많은 프리미엄 템플릿들을 확인해보세요."
                        centered={false}
                        className="mb-0"
                    />
                    <Link href="/portfolio" className={cn(
                        "group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-background border border-foreground/15 text-foreground font-bold",
                        "hover:border-accent hover:text-accent transition-all hover:shadow-lg dark:hover:bg-foreground/[0.02]"
                    )}>
                        전체 리스트 보기 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {others.map((p, idx) => (
                        <PortfolioCard key={p.id} project={p} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
