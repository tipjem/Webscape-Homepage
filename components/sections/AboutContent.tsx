"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const VALUES = [
    {
        icon: <Target className="text-accent" size={32} />,
        title: "목적에 맞는 최적의 기술",
        desc: "무조건 비싸고 화려한 것은 정답이 아닙니다. 비즈니스 단계와 예산에 맞는 최적의 투트랙 기술 로드맵을 제안합니다."
    },
    {
        icon: <Lightbulb className="text-purple-500" size={32} />,
        title: "한계 없는 디자인 퀄리티",
        desc: "템플릿을 사용하더라도, 프레임워크를 직접 개발하더라도 가장 모던하고 트렌디한 하이엔드 디자인을 고집합니다."
    },
    {
        icon: <Rocket className="text-emerald-500" size={32} />,
        title: "압도적인 퍼포먼스와 최적화",
        desc: "애플 스타일의 부드러운 애니메이션부터 0.1초 단위의 로딩 속도까지, 최상의 사용자 경험(UX)을 보장합니다."
    }
];

const TECH_STACK = [
    "WordPress", "Next.js", "Tailwind CSS", "Framer Motion", "Supabase", "React", "TypeScript", "Node.js", "Vercel", "Figma", "Bricks Builder"
];

export default function AboutContent() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="pt-40 md:pt-48 pb-20 px-6 container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground break-keep">
                        누구도 타협하지 않는 <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
                            최고의 웹사이트 프레임워크
                        </span>
                    </h1>
                    <p className="text-foreground/70 text-base md:text-xl leading-relaxed mb-12 break-keep">
                        웹스케이프(Webscape)는 단순한 웹 제작 에이전시가 아닙니다.
                        단기간에 비즈니스를 런치해야 하는 스타트업부터, 세상에 없던 압도적이고 유니크한 브랜딩이 필요한 기업까지.
                        당신의 프로젝트 성공을 이끄는 기술 파트너입니다.
                    </p>
                </motion.div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-foreground/[0.02] border-y border-foreground/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-foreground break-keep">우리의 3가지 핵심 철학</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {VALUES.map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="group bg-foreground/5 ring-1 ring-foreground/10 p-1.5 rounded-[2.5rem] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/5"
                            >
                                <div className="flex flex-col h-full bg-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2.5rem-0.375rem)] p-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-foreground/[0.02]">
                                    <div className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mb-6">
                                        {val.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground break-keep">{val.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed break-keep text-sm md:text-base">{val.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Marquee Section */}
            <section className="py-12 border-b border-foreground/5 overflow-hidden flex bg-background">
                <motion.div
                    className="flex whitespace-nowrap gap-16 items-center w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                        <div key={i} className="text-2xl md:text-3xl font-extrabold text-foreground/10 tracking-widest uppercase">
                            {tech}
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Our Story / Vision Section */}
            <section className="py-20 md:py-24 bg-gradient-to-b from-background to-gray-50 dark:to-white/5">
                <div className="container mx-auto px-5 md:px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: 3D Graphic / Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 dark:shadow-none border border-foreground/10"
                    >
                        <Image
                            src="/about-vision.png"
                            alt="Webscape Vision"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/30 to-transparent mix-blend-overlay"></div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 md:mb-10 text-foreground break-keep">
                            왜 웹스케이프인가?
                        </h2>
                        <div className="space-y-8 md:space-y-10 text-foreground/70 text-base md:text-lg leading-[1.7] break-keep">
                            <div className="space-y-5 md:space-y-6">
                                <p>
                                    웹사이트 구축 시, 예산을 낮추면 퀄리티가 아쉽고 퀄리티를 높이면 비용과 시간의 장벽에 부딪히는 것이 현실입니다. 공장형 템플릿은 <strong className="font-semibold text-foreground">확장에 한계</strong>가 있고, 전통적인 커스텀 개발은 <strong className="font-semibold text-foreground">지나치게 무겁습니다.</strong>
                                </p>
                                <p>
                                    웹스케이프는 이 딜레마를 해결하기 위해 비즈니스 단계에 맞춘 <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">완벽한 투트랙(Two-Track) 솔루션</strong>을 제안합니다.
                                </p>
                            </div>
                            <div className="space-y-6 md:space-y-8">
                                <div className="flex items-start gap-4 md:gap-5 text-sm md:text-base">
                                    <div className="shrink-0 mt-0.5 md:mt-1">
                                        <CheckCircle2 className="text-accent" size={24} />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <p>
                                            <strong className="font-bold text-foreground">워드프레스 브릭스 (효율과 완성도): </strong>
                                            검증된 프리미엄 템플릿과 브릭스 빌더를 결합하여, 제작 기간을 단축하고 유지보수의 편의성은 극대화합니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 md:gap-5 text-sm md:text-base">
                                    <div className="shrink-0 mt-0.5 md:mt-1">
                                        <CheckCircle2 className="text-purple-500" size={24} />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <p>
                                            <strong className="font-bold text-foreground">바이브 코딩 (하이엔드 커스텀): </strong>
                                            최신 프레임워크와 AI 기술로 제약 없는 UI/UX 기획부터 독보적인 3D 인터랙션, 압도적인 SEO 성능까지 완벽하게 구현합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2 md:pt-4">
                                <p className="font-medium text-foreground/90 text-lg md:text-xl leading-relaxed">
                                    단순히 '웹사이트를 만드는 것'을 넘어, 당신의 아이디어를 가장 <strong className="font-bold text-accent inline-block">성공적인 형태로 론칭하는 디지털 파트너</strong>가 되겠습니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden flex items-center justify-center border-t border-white/5">
                {/* Background Glow Effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen -z-0"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen -z-0"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-6 text-white leading-tight break-keep">
                        이제, 당신의 아이디어를 <br className="hidden md:block" />
                        현실로 만들 차례입니다.
                    </h2>
                    <p className="text-[#EDEDED]/70 text-base md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto break-keep">
                        어떤 기술이 적합할지 고민되시나요? 웹스케이프의 전문가가 비즈니스 단계에 맞는 최적의 로드맵을 제안해 드립니다.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="group relative flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] hover:bg-accent/90 active:scale-[0.98] shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                        >
                            <span>프로젝트 무료 상담하기</span>
                        </Link>
                        <p className="text-[#EDEDED]/50 text-sm font-medium mt-2">
                            평균 24시간 이내 회신 | 무료 초기 상담
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
