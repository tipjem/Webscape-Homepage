"use client";

import { motion } from "framer-motion";
import {
    Compass,
    ShieldCheck,
    LayoutTemplate,
    Cpu,
    CheckCircle2,
    Rocket,
    Sparkles,
} from "lucide-react";

interface StepItem {
    step: string;
    phase: string;
    title: string;
    description: string;
    deliverable: string;
    icon: typeof Compass;
}

const STEPS: StepItem[] = [
    {
        step: "01",
        phase: "초기 진단 & 전략",
        title: "비즈니스 분석 및 최적 구조 제안",
        description: "대표님의 사업 맥락과 타겟 고객을 면밀히 분석합니다. 단순 제작을 넘어 실제 전화와 문의 전환으로 연결되는 가장 효과적인 웹사이트 구조를 맞춤 제안합니다.",
        deliverable: "맞춤 기획 제안서 · 플랫폼 최적화 방향",
        icon: Compass,
    },
    {
        step: "02",
        phase: "투명 계약 & 확정",
        title: "투명한 정가 견적 및 상세 일정 확정",
        description: "숨겨진 추가 비용 없이 명확한 표준 견적서와 계약서를 교부합니다. 런칭 목표일부터 무상 유지보수 범위까지 서면으로 명확히 확정하고 착수합니다.",
        deliverable: "표준 계약서 · 단계별 확정 마일스톤",
        icon: ShieldCheck,
    },
    {
        step: "03",
        phase: "전환 설계 & 시안",
        title: "맞춤형 UI/UX 및 전환 중심 시안 제작",
        description: "단순히 보기 좋은 디자인을 넘어, 모바일 방문자가 3초 안에 신뢰를 느끼고 문의 버튼을 누를 수 있도록 카피라이팅과 레이아웃을 1:1 맞춤 설계하여 인터랙티브 시안을 공유합니다.",
        deliverable: "고화질 인터랙티브 시안 · 피드백 1~2회 반영",
        icon: LayoutTemplate,
    },
    {
        step: "04",
        phase: "엔지니어링 & 최적화",
        title: "0.5초 초고속 코딩 & AEO/SEO 엔진 탑재",
        description: "Next.js 기반 초경량 코딩으로 픽셀 단위 완성도를 구현합니다. 구글 상위 노출 기준과 ChatGPT, Perplexity 등 최신 AI 검색 크롤러가 사이트를 즉시 인용할 수 있는 검색 최적화를 내장합니다.",
        deliverable: "반응형 완성 코딩 · Schema.org 구조화 데이터 탑재",
        icon: Cpu,
    },
    {
        step: "05",
        phase: "완성도 검증",
        title: "실기기 크로스 체크 및 무제한 미세 조율",
        description: "스마트폰, 태블릿, PC 등 모든 디바이스에서 폰트 깨짐이나 터치 오류가 없는지 철저히 전수 검수합니다. 대표님께서 100% 만족하실 때까지 세밀하게 다듬습니다.",
        deliverable: "전 디바이스 호환성 검수 · 최종 피드백 완결",
        icon: CheckCircle2,
    },
    {
        step: "06",
        phase: "정식 런칭 & 케어",
        title: "도메인 공식 연결 및 1:1 안심 운영 지원",
        description: "도메인과 보안 인증서(SSL)를 완벽하게 세팅하고 공식 사이트를 런칭합니다. 대표님이나 직원이 혼자서도 쉽게 콘텐츠를 수정할 수 있도록 맞춤 매뉴얼을 제공하며 1개월간 무상 케어를 지원합니다.",
        deliverable: "도메인 실서버 배포 · 관리 매뉴얼 · 1개월 무상 케어",
        icon: Rocket,
    },
];

export default function ProcessSection() {
    return (
        <section className="py-24 md:py-32 bg-[#160B07] text-[#F5F1EB] relative border-t border-white/5 overflow-hidden">
            {/* 배경 앰비언트 글로우 */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF6B35]/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* 상단 헤더: 타이틀 + 서브카피 */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#F5F1EB] break-keep"
                    >
                        첫 상담부터 완성까지, 막힘없는 6단계 제작 여정
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#F5F1EB]/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed break-keep"
                    >
                        <p>상담부터 런칭 이후 사후 관리까지</p>
                        <p>단계마다 확정된 결과물과 투명한 일정을 공유합니다.</p>
                    </motion.div>
                </div>

                {/* 인터랙티브 타임라인 프로세스 로드맵 */}
                <div className="relative">
                    {/* 세로 타임라인 커넥팅 라인 (타임라인 기둥 빔) */}
                    <div className="absolute left-[23px] sm:left-[27px] md:left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#FF6B35] via-[#FF6B35]/40 to-transparent pointer-events-none" />

                    <div className="space-y-8 sm:space-y-10 md:space-y-12">
                        {STEPS.map((step, i) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{
                                        duration: 0.55,
                                        delay: i * 0.08,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group"
                                >
                                    {/* 스텝 노드 아이콘 & 번호 링 */}
                                    <div className="relative z-10 shrink-0 mt-1">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-[#1F1008] border border-[#FF6B35]/30 flex flex-col items-center justify-center text-[#FF6B35] shadow-[0_0_20px_rgba(255,107,53,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white group-hover:shadow-[0_0_25px_rgba(255,107,53,0.4)]">
                                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                                            <span className="text-[10px] sm:text-[11px] font-mono font-bold mt-0.5 tracking-tighter">
                                                {step.step}
                                            </span>
                                        </div>
                                    </div>

                                    {/* 스텝 상세 컨텐츠 카드 */}
                                    <div className="flex-1 p-6 sm:p-7 md:p-8 rounded-2xl md:rounded-[1.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-[transform,box-shadow,border-color,background-color] duration-300 group-hover:-translate-y-1 group-hover:bg-white/[0.05] group-hover:border-[#FF6B35]/40 group-hover:shadow-[0_12px_32px_rgba(255,107,53,0.1)]">
                                        {/* 상단 태그 및 단계명 */}
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide text-[#FF6B35] bg-[#FF6B35]/10 border border-[#FF6B35]/20">
                                                {step.phase}
                                            </span>
                                            <span className="text-xs font-mono text-[#F5F1EB]/40 font-medium">
                                                STAGE {step.step} / 06
                                            </span>
                                        </div>

                                        {/* 단계 메인 타이틀 */}
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F5F1EB] mb-2.5 tracking-tight group-hover:text-[#FF6B35] transition-colors duration-300 break-keep">
                                            {step.title}
                                        </h3>

                                        {/* 상세 설명 */}
                                        <p className="text-[#F5F1EB]/70 text-sm sm:text-base leading-relaxed break-keep font-normal mb-4">
                                            {step.description}
                                        </p>

                                        {/* 단계 확정 산출물 (Deliverable 칩) */}
                                        <div className="pt-3 border-t border-white/5 flex items-center">
                                            <div className="inline-flex items-center gap-1.5 text-xs text-[#F5F1EB]/85 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
                                                <Sparkles className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
                                                <span className="font-medium text-[#F5F1EB]/90 break-keep">{step.deliverable}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
