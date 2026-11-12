"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "오리온 인테리어 대표",
        review: "홈페이지를 새로 오픈하고 일주일 만에 전화 문의가 눈에 띄게 늘었습니다. 모바일에서도 시원하게 잘 보이고 사진 수정도 혼자 쉽게 할 수 있어 만족스럽습니다.",
        rating: 5,
        service: "실속형 홈페이지 제작",
    },
    {
        name: "스튜디오 픽셀 마케팅 팀장",
        review: "ChatGPT와 검색창에서 저희 사업장이 공식 추천으로 나오는 것을 보고 놀랐습니다. 압도적인 로딩 속도와 세련된 디자인 덕분에 브랜드 신뢰도가 확실히 올라갔습니다.",
        rating: 5,
        service: "맞춤형 프리미엄 제작",
    },
    {
        name: "넥스트 리테일 기획팀",
        review: "첫 상담부터 인터랙티브 시안 공유, 런칭까지 단계마다 명확한 결과물을 보여주셔서 안심하고 맡길 수 있었습니다. 실제 고객들의 반응이 아주 좋습니다.",
        rating: 5,
        service: "맞춤형 프리미엄 제작",
    },
    {
        name: "클린홈 케어 대표",
        review: "기존 사이트는 문의가 전혀 없었는데, 웹스케이프에서 전환 중심으로 다시 구축한 뒤 예약 문의가 꾸준히 이어지고 있습니다. 진짜 매출용 홈페이지입니다.",
        rating: 5,
        service: "실속형 홈페이지 제작",
    },
    {
        name: "더프라임 법률사무소 실장",
        review: "방문자가 신뢰할 수 있는 전문적인 디자인과 직관적인 상담 동선 설계 덕분에 온라인 문의 전환율이 대폭 상승했습니다.",
        rating: 5,
        service: "맞춤형 프리미엄 제작",
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-[#160B07] relative overflow-hidden flex flex-col items-center border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl mb-20 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-[#F5F1EB]">
                    고객이 증명하는 <span className="text-[#F07A32]">웹스케이프</span>
                </h2>
                <p className="text-[#F5F1EB]/70 text-lg max-w-2xl mx-auto break-keep">
                    수많은 파트너들이 웹스케이프와 함께 비즈니스의 성공적인 디지털 전환을 경험하고 있습니다.
                </p>
            </div>

            {/* Carousel for Testimonials */}
            <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-[#160B07] to-transparent z-10 pointer-events-none hidden md:block"></div>
                <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-[#160B07] to-transparent z-10 pointer-events-none hidden md:block"></div>

                {/* Mobile: Swipeable Carousel */}
                <div className="flex md:hidden overflow-x-auto whitespace-nowrap gap-4 py-8 px-6 items-stretch snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {TESTIMONIALS.map((item, i) => (
                        <div
                            key={i}
                            className="snap-center group w-[85vw] max-w-[350px] whitespace-normal bg-white/5 ring-1 ring-white/10 p-1.5 rounded-[2rem] flex flex-col shrink-0 shadow-lg"
                        >
                            <div className="flex flex-col justify-between h-full bg-[#211009]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2rem-0.375rem)] p-6">
                                <div>
                                    <div className="flex items-center gap-1 mb-5 text-[#F07A32]">
                                        {[...Array(item.rating)].map((_, j) => (
                                            <Star key={j} className="fill-[#F07A32] w-4 h-4" />
                                        ))}
                                    </div>
                                    <p className="text-[#F5F1EB]/90 leading-relaxed text-base font-medium mb-8 break-keep">
                                        &ldquo;{item.review}&rdquo;
                                    </p>
                                </div>
                                <div className="border-t border-white/10 pt-5 mt-auto">
                                    <p className="font-bold text-[#F5F1EB] text-sm">{item.name}</p>
                                    <p className="text-[#F5F1EB]/50 text-xs mt-1">{item.service}</p>
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
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
                        <div
                            key={i}
                            className="group w-[420px] whitespace-normal bg-white/5 ring-1 ring-white/10 p-1.5 rounded-[2.5rem] flex flex-col shrink-0 shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F07A32]/10"
                        >
                            <div className="flex flex-col justify-between h-full bg-[#211009]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2.5rem-0.375rem)] p-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#211009]">
                                <div>
                                    <div className="flex items-center gap-1 mb-6 text-[#F07A32]">
                                        {[...Array(item.rating)].map((_, j) => (
                                            <Star key={j} className="fill-[#F07A32] w-4 h-4" />
                                        ))}
                                    </div>
                                    <p className="text-[#F5F1EB]/90 leading-relaxed text-lg font-medium mb-8 break-keep">
                                        &ldquo;{item.review}&rdquo;
                                    </p>
                                </div>
                                <div className="border-t border-white/10 pt-6 mt-auto">
                                    <p className="font-bold text-[#F5F1EB] text-base">{item.name}</p>
                                    <p className="text-[#F5F1EB]/50 text-sm mt-1">{item.service}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

