"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Zap, SearchCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BENTO_ITEMS = [
  {
    id: "schema",
    title: "1. AI 지식 구조화 (JSON-LD Engine)",
    subtitle: "ChatGPT & Perplexity 인용 필수 조건",
    description: "단순한 텍스트가 아닌 schema.org 표준 스키마(Organization, Service, FAQ)를 내장하여 AI 크롤러가 사업장 데이터를 100% 명확히 인식합니다.",
    icon: Bot,
    badge: "AEO 핵심 기술",
    accentColor: "from-[#D95F20]/20 to-[#F07A32]/15",
    borderColor: "group-hover:border-[#F07A32]/50",
    colSpan: "md:col-span-2 lg:col-span-7",
    codeSnippet: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "고객 사업장명",
  "knowsAbout": ["AEO 최적화", "검색엔진 최적화"]
}`,
  },
  {
    id: "speed",
    title: "2. 0.5초 초고속 LCP 성능",
    subtitle: "구글 상위 노출 1순위 지표",
    description: "Next.js App Router 기반 초경량 코딩으로 Core Web Vitals 최상위 점수를 달성하고 이탈률을 획기적으로 낮춥니다.",
    icon: Zap,
    badge: "SEO 핵심 기술",
    accentColor: "from-[#F07A32]/20 to-[#FF6B35]/15",
    borderColor: "group-hover:border-[#F07A32]/50",
    colSpan: "md:col-span-1 lg:col-span-5",
    statNumber: "0.5s",
    statLabel: "평균 로딩 속도",
  },
  {
    id: "qa-structure",
    title: "3. AEO 전용 Q&A 두괄식 구조",
    subtitle: "AI 생성 답변의 1순위 인용 출처",
    description: "자연어 대화형 검색(AI Search) 질문 패턴을 분석하여 AI가 답변을 작성할 때 바로 발췌(Citation)하기 쉬운 두괄식 답변 템플릿을 설계합니다.",
    icon: Cpu,
    badge: "GEO 프레임워크",
    accentColor: "from-[#D95F20]/20 to-[#8A3A14]/20",
    borderColor: "group-hover:border-[#D95F20]/50",
    colSpan: "md:col-span-1 lg:col-span-5",
    features: ["자연어 Q&A 롱테일 설계", "FAQPage 스키마 자동 연동", "네이버 CUE & Perplexity 동시 최적화"],
  },
  {
    id: "indexing",
    title: "4. AI 크롤러 자동 Indexing 시스템",
    subtitle: "GPTBot, PerplexityBot 수집 보장",
    description: "robots.txt 및 동적 sitemap.xml을 실시간 동기화하여 주요 AI 크롤러봇이 사이트 신규 콘텐츠를 누락 없이 빠르게 수집하도록 보장합니다.",
    icon: SearchCheck,
    badge: "자동화 케어",
    accentColor: "from-[#F07A32]/15 to-[#D95F20]/20",
    borderColor: "group-hover:border-[#F07A32]/50",
    colSpan: "md:col-span-2 lg:col-span-7",
    botBadges: ["GPTBot", "PerplexityBot", "ClaudeBot", "Googlebot", "Yeti"],
  },
];

export default function AeoFeaturesBento() {
  return (
    <section className="py-24 md:py-36 bg-[#160B07] relative overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F07A32]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#F07A32]/10 border border-[#F07A32]/25 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#F07A32] animate-ping"></span>
            <span className="text-xs md:text-sm font-semibold text-[#F07A32] tracking-wide uppercase">
              Webscape Technical Advantage
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-[#F5F1EB] leading-tight mb-6"
          >
            웹스케이프가 만든 사이트가<br />
            <span className="text-[#F07A32]">
              AI와 검색엔진에 강한 4가지 이유
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#F5F1EB]/70 text-base md:text-lg leading-relaxed"
          >
            단순히 보기만 좋고 검색창에도 안 나오는 홈페이지는 제작하지 않습니다.<br className="hidden md:block" />
            AI 시대의 검색 엔진 기준에 완벽히 맞춘 하이테크 AEO/GEO/SEO 엔지니어링을 경험해 보세요.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {BENTO_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative rounded-3xl p-8 bg-[#211009]/50 border border-white/10 backdrop-blur-xl transition-[background-color,border-color] duration-500 hover:bg-[#211009]/80 ${item.borderColor} ${item.colSpan} flex flex-col justify-between overflow-hidden shadow-2xl`}
              >
                {/* Gradient Fill on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#160B07] border border-white/10 flex items-center justify-center text-[#F07A32] group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <Icon size={28} />
                    </div>
                    <span className="text-xs font-semibold text-[#F5F1EB]/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-[#F5F1EB] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-[#F07A32] mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-[#F5F1EB]/70 text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Inner Content Component by Type */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  {item.codeSnippet && (
                    <div className="bg-[#120805] rounded-xl p-4 border border-white/10 font-mono text-xs text-[#F07A32]/90 overflow-x-auto">
                      <pre>{item.codeSnippet}</pre>
                    </div>
                  )}

                  {item.statNumber && (
                    <div className="flex items-baseline space-x-3 bg-[#F07A32]/10 rounded-2xl p-4 border border-[#F07A32]/20">
                      <span className="text-4xl font-extrabold text-[#F5F1EB] tracking-tight">{item.statNumber}</span>
                      <span className="text-xs font-medium text-[#F5F1EB]/70">{item.statLabel}</span>
                    </div>
                  )}

                  {item.features && (
                    <ul className="space-y-2">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2 text-xs md:text-sm text-[#F5F1EB]/80">
                          <CheckCircle2 size={16} className="text-[#F07A32] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.botBadges && (
                    <div className="flex flex-wrap gap-2">
                      {item.botBadges.map((bot, bIdx) => (
                        <span key={bIdx} className="text-xs font-mono font-medium text-[#F07A32] bg-[#F07A32]/10 px-3 py-1 rounded-lg border border-[#F07A32]/25">
                          ✓ {bot}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#F07A32] hover:text-[#F5F1EB] transition-colors"
          >
            <span>웹스케이프의 AI & SEO 기술 상세 사안 살펴보기</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

