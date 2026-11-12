"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative pt-40 md:pt-52 pb-24 md:pb-36 overflow-hidden bg-transparent border-b border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#F07A32]/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F1EB] leading-[1.2] mb-8 break-keep">
                    <motion.span
                        className="block text-[#F5F1EB]"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        만들고 끝나는 홈페이지 대신,
                    </motion.span>
                    <motion.span
                        className="block text-[#F07A32] mt-2 font-extrabold"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        비즈니스를 지탱하는 웹을 설계합니다.
                    </motion.span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[#F5F1EB]/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed break-keep font-normal"
                >
                    워드프레스부터 바이브코딩, 그리고 지속적인 사후 관리까지. <br className="hidden sm:block" />
                    대표님의 사업체가 온라인에서 제대로 일하도록 돕는 기술 파트너, 웹스케이프입니다.
                </motion.p>
            </div>
        </section>
    );
}
