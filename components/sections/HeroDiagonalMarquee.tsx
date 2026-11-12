"use client";

import { useMemo } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA, PortfolioItem } from "@/src/data/portfolio";

export default function HeroDiagonalMarquee() {
    // 7개의 포트폴리오 데이터를 각 열에 다채로운 순서로 7개씩 넉넉히 채워 화면 높이를 훨씬 초과하도록 구성
    // (이를 통해 무한 루프 시 화면 어디에서도 빈 공간(Gap)이 절대 생기지 않음)
    const { col1Items, col2Items, col3Items } = useMemo(() => {
        const p = PORTFOLIO_DATA;
        // 각 열마다 다른 순서로 배치하여 시각적 다양성 확보 (각 열 7개씩)
        const col1 = [p[0], p[1], p[2], p[3], p[4], p[5], p[6]];
        const col2 = [p[2], p[4], p[6], p[0], p[3], p[5], p[1]];
        const col3 = [p[5], p[3], p[1], p[6], p[0], p[2], p[4]];

        return { col1Items: col1, col2Items: col2, col3Items: col3 };
    }, []);

    return (
        <div className="marquee-wrapper relative w-full h-full min-h-[680px] lg:min-h-[850px] flex items-center justify-center overflow-hidden select-none pointer-events-auto">
            {/* GPU 가속 60fps 무한 루프 애니메이션 */}
            <style jsx>{`
                @keyframes marqueeScrollUp {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-50%);
                    }
                }
                @keyframes marqueeScrollDown {
                    0% {
                        transform: translateY(-50%);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
                .marquee-col-up {
                    animation: marqueeScrollUp 55s linear infinite;
                    will-change: transform;
                }
                .marquee-col-down {
                    animation: marqueeScrollDown 48s linear infinite;
                    will-change: transform;
                }
                .marquee-col-up-fast {
                    animation: marqueeScrollUp 60s linear infinite;
                    will-change: transform;
                }
                /* 마우스 호버 시 일시 정지 (사용자 요청: 인터랙션 없이 정지/자동작동만) */
                .marquee-wrapper:hover .marquee-track {
                    animation-play-state: paused;
                }
            `}</style>

            {/* 마퀴 전체를 대각선(-12도)으로 시원하게 기울여 섹션 위아래 끝까지 뻗어나가도록 배치 */}
            <div className="marquee-container relative w-[160%] sm:w-[140%] lg:w-[150%] max-w-none flex justify-center items-center -rotate-12 scale-110 lg:scale-115">
                <div className="flex gap-4 sm:gap-6 w-full justify-center">

                    {/* [열 1 (좌측 열)]: 좌측 상단 방향으로 이동 */}
                    <div className="w-[180px] sm:w-[210px] md:w-[230px] lg:w-[250px] shrink-0">
                        <div className="marquee-track marquee-col-up flex flex-col gap-5">
                            {[...col1Items, ...col1Items].map((item, idx) => (
                                <MarqueeCard key={`col1-${item.id}-${idx}`} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* [열 2 (가운데 열)]: 우측 하단 방향으로 이동 */}
                    <div className="w-[180px] sm:w-[210px] md:w-[230px] lg:w-[250px] shrink-0">
                        <div className="marquee-track marquee-col-down flex flex-col gap-5">
                            {[...col2Items, ...col2Items].map((item, idx) => (
                                <MarqueeCard key={`col2-${item.id}-${idx}`} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* [열 3 (우측 열)]: 좌측 상단 방향으로 이동 */}
                    <div className="w-[180px] sm:w-[210px] md:w-[230px] lg:w-[250px] shrink-0">
                        <div className="marquee-track marquee-col-up-fast flex flex-col gap-5">
                            {[...col3Items, ...col3Items].map((item, idx) => (
                                <MarqueeCard key={`col3-${item.id}-${idx}`} item={item} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

/**
 * 포트폴리오 이미지 & 타이틀 쇼케이스 카드
 * (상단 브라우저바나 복잡한 태그 없이, 고화질 이미지와 프로젝트 이름만 깔끔하게 노출)
 */
function MarqueeCard({ item }: { item: PortfolioItem }) {
    return (
        <div className="relative w-full rounded-none bg-[#160B06] shadow-[0_16px_45px_rgba(0,0,0,0.7)] overflow-hidden">
            {/* 웹사이트 스크린샷 썸네일 */}
            <div className="relative w-full aspect-[16/10] bg-[#0E0503] overflow-hidden">
                {item.image ? (
                    <Image
                        src={item.image}
                        alt={`${item.title} 포트폴리오`}
                        fill
                        sizes="(max-width: 768px) 240px, 300px"
                        className="object-cover object-top"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-[#F5F1EB]/30">
                        Webscape
                    </div>
                )}
            </div>

            {/* 하단: 프로젝트 이름만 간결하게 표시 */}
            <div className="px-3.5 py-2.5 bg-[#160B06]">
                <h4 className="text-xs sm:text-sm font-semibold text-[#F5F1EB] truncate">
                    {item.title}
                </h4>
            </div>
        </div>
    );
}
