import { Metadata } from "next";
import VibeCodingContent from "@/components/sections/VibeCodingContent";

export const metadata: Metadata = {
    title: "바이브 코딩 | 하이엔드 커스텀 웹 개발",
    description: "Next.js 기반의 압도적인 퍼포먼스와 한계 없는 디자인, 복잡한 비즈니스 로직을 완벽하게 구현하는 프리미엄 커스텀 개발 솔루션입니다.",
    openGraph: {
        title: "바이브 코딩 - 하이엔드 커스텀 웹 개발",
        description: "상상하는 모든 기능을 현실로. 웹스케이프의 차세대 웹 개발 솔루션.",
    },
    alternates: {
        canonical: "/services/vibecoding",
    },
};

export default function VibeCodingServicesPage() {
    return <VibeCodingContent />;
}
