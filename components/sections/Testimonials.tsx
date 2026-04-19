"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "오리온 인테리어 대표",
        review: "브릭스 빌더로 이렇게 빠르고 고급스러운 사이트가 나올 줄 몰랐습니다. 유지보수도 정말 편합니다. 비즈니스 성장에 큰 도움이 되었습니다.",
        rating: 5,
        service: "워드프레스 브릭스 빌더",
    },
    {
        name: "스튜디오 픽셀 마케팅 팀장",
        review: "바이브 코딩 커스텀 개발 덕분에 원하던 3D 쇼케이스가 완벽하게 구현되었습니다. 압도적인 퍼포먼스와 아름다운 디자인에 감탄했습니다.",
        rating: 5,
        service: "바이브 코딩 커스텀 개발",
    },
    {
        name: "넥스트 리테일 기획팀",
        review: "처음 상담부터 제작, 배포까지 웹스케이프의 전문적인 리드 덕분에 프로젝트를 성공적으로 마쳤습니다. 디자인의 디테일이 남다릅니다.",
        rating: 5,
        service: "바이브 코딩 커스텀 개발",
    },
    {
        name: "오리온 인테리어 대표",
        review: "브릭스 빌더로 이렇게 빠르고 고급스러운 사이트가 나올 줄 몰랐습니다. 유지보수도 정말 편합니다. 비즈니스 성장에 큰 도움이 되었습니다.",
        rating: 5,
        service: "워드프레스 브릭스 빌더",
    },
    {
        name: "스튜디오 픽셀 마케팅 팀장",
        review: "바이브 코딩 커스텀 개발 덕분에 원하던 3D 쇼케이스가 완벽하게 구현되었습니다. 압도적인 퍼포먼스와 아름다운 디자인에 감탄했습니다.",
        rating: 5,
        service: "바이브 코딩 커스텀 개발",
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-[#0A0A0A] relative overflow-hidden flex flex-col items-center">
            <div className="container mx-auto px-6 max-w-7xl mb-20 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
                    고객이 증명하는 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-400">웹스케이프</span>
                </h2>
                <p className="text-[#EDEDED]/70 text-lg max-w-2xl mx-auto break-keep">
                    수많은 파트너들이 웹스케이프와 함께 비즈니스의 성공을 경험하고 있습니다.
                </p>
            </div>

            {/* Carousel for Testimonials */}
            <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none hidden md:block"></div>
                <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none hidden md:block"></div>

                {/* Mobile: Swipeable Carousel */}
                <div className="flex md:hidden overflow-x-auto whitespace-nowrap gap-4 py-8 px-6 items-stretch snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {TESTIMONIALS.map((item, i) => (
                        <div
                            key={i}
                            className="snap-center group w-[85vw] max-w-[350px] whitespace-normal bg-white/5 ring-1 ring-white/10 p-1.5 rounded-[2rem] flex flex-col shrink-0 shadow-lg"
                        >
                            <div className="flex flex-col justify-between h-full bg-[#111111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] p-6">
                                <div>
                                    <div className="flex items-center gap-1 mb-5 text-accent">
                                        {[...Array(item.rating)].map((_, j) => (
                                            <Star key={j} className="fill-accent w-4 h-4" />
                                        ))}
                                    </div>
                                    <p className="text-[#EDEDED]/90 leading-relaxed text-base font-medium mb-8 break-keep">
                                        "{item.review}"
                                    </p>
                                </div>
                                <div className="border-t border-white/10 pt-5 mt-auto">
                                    <p className="font-bold text-white text-sm">{item.name}</p>
                                    <p className="text-[#EDEDED]/50 text-xs mt-1">{item.service}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: Infinite Marquee */}
                <motion.div
                    className="hidden md:flex whitespace-nowrap gap-8 py-4 px-6 items-stretch w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 50,
                    }}
                >
                    {/* Render the array twice to create a seamless infinite loop.
                        The array itself is long enough to span the screen. */}
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
                        <div
                            key={i}
                            className="group w-[420px] whitespace-normal bg-white/5 ring-1 ring-white/10 p-1.5 rounded-[2.5rem] flex flex-col shrink-0 shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
                        >
                            <div className="flex flex-col justify-between h-full bg-[#111111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2.5rem-0.375rem)] p-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#1a1a1a]">
                                <div>
                                    <div className="flex items-center gap-1 mb-6 text-accent">
                                        {[...Array(item.rating)].map((_, j) => (
                                            <Star key={j} className="fill-accent w-4 h-4" />
                                        ))}
                                    </div>
                                    <p className="text-[#EDEDED]/90 leading-relaxed text-lg font-medium mb-8 break-keep">
                                        "{item.review}"
                                    </p>
                                </div>
                                <div className="border-t border-white/10 pt-6 mt-auto">
                                    <p className="font-bold text-white text-base">{item.name}</p>
                                    <p className="text-[#EDEDED]/50 text-sm mt-1">{item.service}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
