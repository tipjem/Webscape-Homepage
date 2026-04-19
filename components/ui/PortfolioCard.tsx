"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PortfolioItem } from "@/src/data/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
    project: PortfolioItem;
    idx?: number;
    className?: string;
}

export function PortfolioCard({ project, idx = 0, className }: PortfolioCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className={cn(
                "group bg-background rounded-[2.5rem] overflow-hidden ring-1 ring-foreground/5 hover:ring-accent/40 hover:-translate-y-3 transition-all duration-700 shadow-sm hover:shadow-2xl",
                "will-change-transform", // 레이어 최적화
                className
            )}
        >
            <Link href={`/portfolio/${project.id}`} className="flex flex-col h-full">
                <div className="relative w-full h-64 bg-foreground/5 overflow-hidden">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={`${project.title} - ${project.category} 홈페이지 제작 포트폴리오 메인이미지`}
                            fill
                            className="object-cover object-top group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            placeholder="blur"
                            blurDataURL="data:image/webp;base64,UklGRmYAAABXRUJQVlA4IGIAAACQAgCdASoBAAEAAkA4JaACdAEpAAAA/v7+AAEAAwABAAEAAQAA"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-foreground/20 text-sm font-bold gap-3 p-4 text-center">
                            <span>Image Placeholder</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="p-10 flex flex-col flex-1">
                    <div className="text-xs font-bold text-accent mb-4 uppercase tracking-widest bg-accent/5 py-1 px-3 rounded-full w-fit">
                        {project.category}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors break-keep leading-tight">
                        {project.title}
                    </h3>
                    <p className="text-foreground/60 line-clamp-2 leading-relaxed break-keep text-lg">
                        {project.description}
                    </p>

                    <div className="mt-8 pt-8 border-t border-foreground/5 flex items-center gap-2 text-accent font-bold group-hover:underline">
                        <span>상세히 보기</span> <ArrowRight size={16} />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
