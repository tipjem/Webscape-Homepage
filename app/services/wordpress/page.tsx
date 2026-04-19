import { Metadata } from "next";
import WordPressContent from "@/components/sections/WordPressContent";

export const metadata: Metadata = {
    title: "워드프레스 패키지 | 합리적이고 빠른 웹사이트 구축",
    description: "글로벌 표준 CMS 워드프레스와 프리미엄 브릭스 빌더를 결합하여 가장 빠르고 합리적인 웹사이트 구축 솔루션을 제공합니다.",
    openGraph: {
        title: "워드프레스 패키지 - 웹스케이프",
        description: "비즈니스의 시작을 가장 신속하게. 검증된 안정성의 워드프레스 솔루션.",
    },
    alternates: {
        canonical: "/services/wordpress",
    },
};

export default function WordPressServicesPage() {
    return <WordPressContent />;
}
