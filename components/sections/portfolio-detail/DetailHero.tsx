"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { PortfolioItem } from "@/src/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowUpRight, X, Maximize2 } from "lucide-react";
import { DeviceMockup } from "../../ui/DeviceMockup";

export default function DetailHero({ project }: { project: PortfolioItem }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // 기기 타입 판별 로직 고도화: 명시적 모바일 외에는 기본적으로 MacBook 프레임 적용
    const getDeviceType = (path: string): "macbook" | "iphone" | "none" => {
        const lowerPath = path.toLowerCase();
        if (lowerPath.includes("mob") || lowerPath.includes("mobile")) return "iphone";
        // 기본적으로는 모든 디자인을 MacBook 프레임에 넣어 전문성을 높임
        return "macbook";
    };

    // 모달 오픈 시 스크롤 방지
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    return (
        <section className="bg-background pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden border-b border-foreground/5">
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <header className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                            "inline-block px-4 py-1.5 rounded-full bg-foreground/10 text-foreground text-xs font-bold mb-6 backdrop-blur-md border border-foreground/5 uppercase tracking-widest"
                        )}
                    >
                        {project.category}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 text-foreground break-keep leading-tight"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl lg:text-2xl text-foreground/70 break-keep leading-relaxed max-w-3xl mx-auto"
                    >
                        {project.description}
                    </motion.p>
                    
                    {project.url && project.url !== "#" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-10 md:mt-14 flex justify-center"
                        >
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-bold rounded-full hover:bg-accent/90 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 text-lg"
                            >
                                샘플 직접 보러가기
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </motion.div>
                    )}
                </header>

                {/* 다중 이미지 스택 갤러리 */}
                <div className="flex flex-col gap-24 md:gap-40 w-full max-w-6xl mx-auto mb-20 md:mb-32">
                    {(project.images || (project.image ? [project.image] : [])).map((imgTarget, index) => {
                        const deviceType = getDeviceType(imgTarget);
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative w-full flex justify-center"
                            >
                                {/* Mesh Gradient Background Layer (Card 배후) */}
                                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-50">
                                    <motion.div 
                                        animate={{ 
                                            x: [0, 60, 0], 
                                            y: [0, -40, 0],
                                            scale: [1, 1.15, 1]
                                        }}
                                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-400/25 rounded-full blur-[130px]" 
                                    />
                                    <motion.div 
                                        animate={{ 
                                            x: [0, -80, 0], 
                                            y: [0, 50, 0],
                                            scale: [1.1, 0.9, 1.1]
                                        }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-purple-400/20 rounded-full blur-[150px]" 
                                    />
                                    <motion.div 
                                        animate={{ 
                                            scale: [1, 1.3, 1],
                                            rotate: [0, 60, 0]
                                        }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-300/15 rounded-full blur-[160px]" 
                                    />
                                </div>

                                {/* Glassmorphism Card */}
                                <div className={cn(
                                    "w-full relative overflow-hidden flex items-center justify-center",
                                    "rounded-[2.5rem] md:rounded-[4.5rem]",
                                    "bg-white/40 border border-white/20 backdrop-blur-2xl",
                                    "shadow-[0_24px_100px_rgba(0,0,0,0.06),inset_0_1px_4px_rgba(255,255,255,0.4)]",
                                    "p-8 md:p-24 lg:p-36"
                                )}>
                                    <DeviceMockup 
                                        type={deviceType}
                                        className={cn(
                                            "group/img cursor-zoom-in transition-all duration-1000",
                                            deviceType === "iphone" ? "max-w-[280px] md:max-w-[340px]" : "max-w-screen-lg"
                                        )}
                                    >
                                        <div 
                                            className="relative w-full h-full transform transition-transform duration-700 group-hover/img:scale-[1.03]"
                                            onClick={() => setSelectedImage(imgTarget)}
                                        >
                                            <Image
                                                src={imgTarget}
                                                alt={`${project.title} - ${project.category} 상세 내역 ${index + 1}`}
                                                width={1920}
                                                height={2000}
                                                className={cn(
                                                    "w-full h-auto object-cover rounded-[1px]",
                                                    deviceType === "macbook" ? "aspect-[16/10] object-top" : "",
                                                    deviceType === "iphone" ? "aspect-[9/19.5] object-top" : ""
                                                )}
                                                priority={index === 0}
                                                placeholder="blur"
                                                blurDataURL="data:image/webp;base64,UklGRmYAAABXRUJQVlA4IGIAAACQAgCdASoBAAEAAkA4JaACdAEpAAAA/v7+AAEAAwABAAEAAQAA"
                                            />
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                                                <motion.div 
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    whileHover={{ opacity: 1, scale: 1 }}
                                                    className="p-6 bg-white/30 backdrop-blur-2xl rounded-full text-white opacity-0 group-hover/img:opacity-100 transition-opacity"
                                                >
                                                    <Maximize2 className="w-8 h-8" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </DeviceMockup>
                                </div>
                            </motion.div>
                        );
                    })}
                    
                    {!(project.images || project.image) && (
                        <div className="relative w-full aspect-[21/9] rounded-[3rem] border border-dashed border-foreground/20 flex flex-col items-center justify-center text-foreground/30 font-medium bg-foreground/5 p-12 text-center">
                            <span className="text-sm">목업 이미지가 현재 준비중입니다.</span>
                        </div>
                    )}
                </div>

                {/* Stats Row */}
                {project.stats && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    >
                        {project.stats.map((stat, idx) => (
                            <div key={idx} className={cn(
                                "bg-foreground/5 rounded-[2.5rem] p-10 text-center backdrop-blur-xl border border-foreground/10 shadow-sm",
                                "hover:border-accent/40 hover:bg-foreground/[0.07] transition-all hover:-translate-y-2 duration-500"
                            )}>
                                <h3 className="text-foreground/60 font-semibold mb-4 text-xs md:text-sm uppercase tracking-wider">{stat.label}</h3>
                                <div className="flex items-baseline justify-center gap-1.5">
                                    <span className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tighter">{stat.value}</span>
                                    <span className="text-2xl font-bold text-accent">{stat.suffix}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Image Detail Modal (Lightbox) */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-10 right-10 z-[10000] p-4 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors order-none"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X className="w-10 h-10" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 250 }}
                            className="relative max-w-full max-h-full flex items-center justify-center overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="확대된 포트폴리오 이미지"
                                className="max-w-full max-h-[95vh] object-contain rounded-xl shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
