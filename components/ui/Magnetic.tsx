"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
    children: ReactNode;
    strength?: number; // 마우스로 끌려오는 탄성 계수 (0.1 ~ 0.5)
    className?: string;
}

/**
 * 마우스 호버 시 자석처럼 커서 방향으로 부드럽게 끌려왔다가
 * 마우스가 벗어나면 물리 엔진(Spring)에 의해 제자리로 복귀하는 마그네틱 래퍼 컴포넌트
 */
export default function Magnetic({ children, strength = 0.3, className = "" }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * strength, y: middleY * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 280, damping: 20, mass: 0.4 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
