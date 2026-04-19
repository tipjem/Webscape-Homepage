"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, LayoutTemplate } from "lucide-react";

const TECH_STACK = [
    "WordPress", "Bricks Builder", "Next.js", "React", "Tailwind CSS", "Vercel", "Supabase", "Framer Motion"
];

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    return (
        <section ref={containerRef} className="relative h-[120vh] flex items-center justify-center overflow-hidden bg-background perspective-[1000px]">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div
                className="container mx-auto px-6 py-16 md:py-0 relative z-10 text-center flex flex-col items-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center space-x-2 bg-foreground/5 rounded-full px-4 py-2 mb-8 border border-foreground/10 backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">프리미엄 웹 에이전시, 웹스케이프</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-bold tracking-tighter mb-6 text-foreground leading-tight px-2 md:px-0"
                >
                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] mb-6 md:mb-8">
                        보기만 좋고 문의는 없는<br className="block md:hidden" /> 웹사이트에 지치셨나요?
                    </span>
                    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 mt-2 pb-2">
                        '실전용 웹사이트'를 설계합니다.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-base sm:text-lg md:text-xl text-foreground/80 font-medium max-w-4xl lg:max-w-5xl mb-12 leading-relaxed px-4 md:px-0"
                >
                    압도적인 로딩 속도와 완벽한<br className="block md:hidden" /> 검색엔진 최적화(SEO)부터, 고객을 사로잡는 프리미엄 UI/UX까지.<br className="hidden md:block" /> 비즈니스의 성장을 견인하는 진짜 웹사이트를 경험해 보세요.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link href="/services" className="group relative flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-accent/20 hover:shadow-accent/40">
                        <span>서비스 알아보기</span>
                        <span className="inline-flex ml-2 w-8 h-8 rounded-full bg-white/20 items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                            <ArrowRight size={16} />
                        </span>
                    </Link>
                    <Link href="/portfolio" className="group relative flex items-center justify-center bg-foreground/5 text-foreground px-8 py-4 rounded-full font-semibold border border-foreground/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-foreground/10 hover:scale-[1.02] active:scale-[0.98]">
                        <span>포트폴리오 보기</span>
                    </Link>
                </motion.div>
            </div>

            {/* Enhanced Floating 3D Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotateX: [0, 180, 360]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute shadow-[0_20px_50px_rgba(59,130,246,0.2)] bottom-[15%] left-10 md:bottom-[25%] md:left-20 hidden md:flex items-center justify-center w-28 h-28 rounded-3xl bg-background/40 backdrop-blur-2xl border border-white/20 select-none pointer-events-none will-change-transform"
            >
                <LayoutTemplate size={48} className="text-accent drop-shadow-md" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotateY: [0, 180, 360]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute shadow-[0_20px_50px_rgba(168,85,247,0.2)] top-40 right-10 md:top-60 md:right-20 hidden md:flex items-center justify-center w-36 h-36 rounded-[2rem] bg-background/40 backdrop-blur-2xl border border-white/20 select-none pointer-events-none will-change-transform"
            >
                <Code size={56} className="text-purple-500 drop-shadow-md" />
            </motion.div>

            {/* Redesigned Tech Stack Marquee (Top Whitespace) */}
            <div className="absolute top-[80%] left-0 w-full overflow-hidden border-y border-foreground/5 py-3 z-20">
                <motion.div
                    className="flex whitespace-nowrap gap-16 items-center w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                >
                    {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                        <div key={i} className="text-sm md:text-base font-medium text-foreground/30 tracking-widest uppercase flex items-center gap-4">
                            <span>{tech}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-foreground/10"></span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
