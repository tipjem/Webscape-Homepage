"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Code2, PenTool } from "lucide-react";
import Link from "next/link";

export default function TwoTrack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="py-32 bg-background relative z-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
                        투트랙 비즈니스 모델
                    </h2>
                    <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                        당신의 프로젝트에 딱 맞는 방법을 선택하세요.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                >
                    {/* Vibe Coding */}
                    <motion.div
                        variants={itemVariants}
                        className="group bg-foreground/5 ring-1 ring-foreground/10 p-1.5 rounded-[2rem] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
                    >
                        <div className="relative flex flex-col h-full w-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-background p-8 md:p-12 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-foreground/[0.02]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-accent/20 transition-colors duration-500"></div>

                            <Code2 size={48} className="text-accent mb-8" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground break-keep">바이브 코딩</h3>
                            <p className="text-foreground/70 mb-8 max-w-sm">
                                한계가 없는 맞춤형 웹 개발. 최신 프레임워크를 기반으로 독창적인 UI/UX와 복잡한 기능을 완벽하게 구현합니다.
                            </p>
                            <ul className="space-y-3 mb-10 text-sm md:text-base text-foreground/80 flex-1">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span> 단 하나뿐인 프리미엄 디자인</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span> 자유로운 커스텀 기능 개발</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span> 극대화된 퍼포먼스와 보안</li>
                            </ul>
                            <Link href="/services/vibecoding" className="inline-flex items-center mt-auto w-fit px-6 py-3 rounded-full bg-accent/10 text-accent font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent hover:text-white group/link">
                                자세히 보기
                                <span className="ml-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1">→</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* WordPress Bricks */}
                    <motion.div
                        variants={itemVariants}
                        className="group bg-foreground/5 ring-1 ring-foreground/10 p-1.5 rounded-[2rem] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
                    >
                        <div className="relative flex flex-col h-full w-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-background p-8 md:p-12 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-foreground/[0.02]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-purple-500/20 transition-colors duration-500"></div>

                            <PenTool size={48} className="text-purple-500 mb-8" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground break-keep">워드프레스 패키지</h3>
                            <p className="text-foreground/70 mb-8 max-w-sm">
                                빠르고 직관적인 검증된 템플릿. 프리미엄 빌더를 활용하여 합리적인 비용으로 완성도 높은 웹을 제공합니다.
                            </p>
                            <ul className="space-y-3 mb-10 text-sm md:text-base text-foreground/80 flex-1">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3"></span> 영업일 3일 내 프로젝트 오픈</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3"></span> 검증된 프리미엄 템플릿 제공</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3"></span> 손쉬운 유지보수 및 무제한 관리</li>
                            </ul>
                            <Link href="/services/wordpress" className="inline-flex items-center mt-auto w-fit px-6 py-3 rounded-full bg-purple-500/10 text-purple-500 font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-purple-500 hover:text-white group/link">
                                자세히 보기
                                <span className="ml-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1">→</span>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
