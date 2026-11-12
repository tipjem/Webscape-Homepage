"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutJourney from "@/components/sections/about/AboutJourney";
import AboutTechStack from "@/components/sections/about/AboutTechStack";
import AboutCta from "@/components/sections/about/AboutCta";

export default function AboutContent() {
    const springConfig = { stiffness: 220, damping: 26, mass: 0.4 };
    const mouseX = useSpring(-500, springConfig);
    const mouseY = useSpring(-500, springConfig);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsHovering(true);
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        window.addEventListener("mousemove", handleGlobalMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleGlobalMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="bg-[#160B07] min-h-[100dvh] text-[#F5F1EB] selection:bg-[#F07A32]/30 selection:text-white relative overflow-hidden">
            {/* 1. Global Ambient Background Glow (배경 전역을 부드럽게 감싸는 베이스 조명) */}
            <motion.div
                className="pointer-events-none fixed z-0 w-[850px] h-[850px] rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
                style={{
                    left: mouseX,
                    top: mouseY,
                    background: "radial-gradient(circle, rgba(240, 122, 50, 0.16) 0%, rgba(240, 122, 50, 0.05) 50%, transparent 75%)",
                    opacity: isHovering ? 1 : 0,
                    transition: "opacity 0.3s ease",
                }}
            />

            {/* 2. Global Surface Light Touch (카드와 텍스트 표면 위를 은은하게 스쳐 지나가는 하이테크 조명) */}
            <motion.div
                className="pointer-events-none fixed z-20 w-[450px] h-[450px] rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-screen"
                style={{
                    left: mouseX,
                    top: mouseY,
                    background: "radial-gradient(circle, rgba(240, 122, 50, 0.09) 0%, rgba(255, 107, 53, 0.03) 45%, transparent 70%)",
                    opacity: isHovering ? 1 : 0,
                    transition: "opacity 0.3s ease",
                }}
            />

            {/* 1. Hero: 품격 있는 에이전시 선언과 여유로운 인트로 */}
            <AboutHero />

            {/* 2. 서비스 방식: 미니멀 에디토리얼 구분선 리스트 (에너지 빔 & 키네틱 슬라이드) */}
            <AboutJourney />

            {/* 3. 테크 스택: 실제 코드와 화면 구조를 다루는 3-탭 인터랙티브 쇼케이스 */}
            <AboutTechStack />

            {/* 4. 문의: 정직한 기술 진단 및 1:1 상담 안내 (마그네틱 CTA 탑재) */}
            <AboutCta />
        </div>
    );
}
