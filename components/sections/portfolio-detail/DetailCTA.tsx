"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DetailCTA() {
    return (
        <section className={cn(
            "py-32 md:py-48 lg:py-60 bg-[#0A0A0A] relative overflow-hidden text-white w-full border-t border-white/5",
            "dark" // Ensure dark text color if theme switches
        )}>
            {/* Dynamic background effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-accent/25 rounded-full blur-[200px] pointer-events-none mix-blend-screen opacity-60" />
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-10 tracking-tighter break-keep leading-tight drop-shadow-2xl"
                >
                    가장 효율적인 선택,<br />웹스케이프와 함께하세요.
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[#EDEDED]/70 text-lg md:text-xl lg:text-2xl mb-16 max-w-3xl mx-auto break-keep leading-relaxed"
                >
                    비즈니스에 꼭 필요한 고품질의 홈페이지를 3일 만에 합리적으로 구축해 드립니다. 지금 바로 무료 샘플 제작을 신청하세요.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        href="/contact"
                        className={cn(
                            "group inline-flex items-center justify-center space-x-4 bg-accent text-white",
                            "px-10 md:px-16 py-6 md:py-8 rounded-full text-xl md:text-2xl font-bold transition-all",
                            "hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(59,130,246,0.6)] border border-accent/60 relative overflow-hidden"
                        )}
                    >
                        <span>프로젝트 문의하기</span>
                        <ArrowRight size={28} className="group-hover:translate-x-3 transition-transform duration-500" />
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
                    </Link>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 text-[#EDEDED]/50 text-base md:text-lg"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>평균 24시간 이내 회신</span>
                    </div>
                    <span className="hidden md:block w-2 h-2 rounded-full bg-accent/30" />
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span>초기 상담 무료</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
