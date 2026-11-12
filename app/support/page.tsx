import Accordion from "@/components/ui/Accordion";
import Link from "next/link";
import { Metadata } from "next";
import { FAQJsonLd } from "@/components/seo/JsonLd";
import { HelpCircle, ArrowRight, Bell, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
    title: "자주 묻는 질문 (Q&A) | 웹스케이프",
    description: "홈페이지 제작, 비용, SEO 및 최신 AI 검색(AEO) 최적화, 사후 관리에 관해 가장 많이 문의주시는 질문과 답변입니다.",
    openGraph: {
        title: "자주 묻는 질문 (Q&A) | 웹스케이프",
        description: "웹스케이프 홈페이지 제작에 대해 자주 묻는 질문과 명쾌한 답변을 확인하세요.",
        type: "website",
    },
    alternates: {
        canonical: "/support",
    },
};

const FAQS = [
    {
        id: "faq-aeo-1",
        title: "AEO(Answer Engine Optimization) 및 GEO 최적화 홈페이지란 무엇인가요?",
        content: "기존의 SEO(검색엔진 최적화)가 구글이나 네이버 검색결과 목록에 노출시키는 기술이었다면, AEO/GEO는 ChatGPT, Perplexity, Gemini, 네이버 CUE 등 생성형 AI 챗봇이 사용자의 대화형 질문에 답변할 때 고객님의 사업장을 1순위 추천 브랜드로 인용(Citation)하도록 홈페이지 데이터를 지식 구조화(schema.org JSON-LD)하는 최신 검색 최적화 기술입니다."
    },
    {
        id: "faq-aeo-2",
        title: "정말로 ChatGPT나 Perplexity 답변에 우리 사업장이 노출될 수 있나요?",
        content: "네, AI 챗봇 크롤러(GPTBot, PerplexityBot 등)는 웹상에서 신뢰할 수 있는 공식 정보 구조(Single Source of Truth)를 찾아 데이터를 파싱합니다. 웹스케이프는 사업장의 서비스, 위치, FAQ, 연혁 등을 schema.org 규격의 JSON-LD 스키마와 두괄식 Q&A 콘텐츠로 이식하여 AI 답변 채택률을 극대화합니다."
    },
    {
        id: "faq-1",
        title: "제작 기간은 얼마나 걸리나요?",
        content: "기본적인 비즈니스 웹사이트의 경우 보통 1~2주 내외로 신속하게 완성되며, 맞춤 기능이나 방대한 포트폴리오 기획이 포함된 경우 2~3주 정도 소요됩니다. 단계별 시안을 투명하게 공유하며 약속된 일정 내에 신속히 런칭합니다."
    },
    {
        id: "faq-4",
        title: "홈페이지 제작 시 어떤 기능들이 기본으로 포함되나요?",
        content: "모바일·PC 100% 반응형 최적화는 물론, 네이버·구글 검색엔진 등록, ChatGPT 및 Perplexity AI 검색 추천을 위한 schema.org 지식 구조화, 0.5초 초고속 로딩 세팅, 그리고 대표님이 직접 글과 사진을 수정할 수 있는 직관적인 관리자 환경이 모두 기본으로 포함됩니다."
    },
    {
        id: "faq-9",
        title: "네이버나 구글 검색 시 우리 사이트가 잘 나오게 할 수 있나요?",
        content: "네, 웹스케이프의 모든 웹사이트는 구글 Core Web Vitals 및 네이버 서치어드바이저 가이드를 100% 준수하여 제작됩니다. 런칭 즉시 네이버 웹마스터도구 및 구글 서치콘솔 수집 등록이 기본 지원됩니다."
    },
    {
        id: "faq-5",
        title: "홈페이지 제작 완료 후 유지보수나 A/S는 어떻게 되나요?",
        content: "사이트 오픈 후 1개월 무상 하자 보수를 기본 지원하며, 이후에도 대표님이 혼자 손쉽게 운영하실 수 있도록 맞춤 매뉴얼을 제공해 드립니다. 추가적인 기능 확장이나 지속적인 검색 알고리즘 케어가 필요하신 경우 안심 유지보수 플랜을 지원합니다."
    },
    {
        id: "faq-[#8]",
        title: "홈페이지 제작이 완료되면 소유권은 어떻게 되나요?",
        content: "잔금 결제가 완료되는 즉시 웹사이트의 모든 소스코드와 도메인, 데이터 소유권은 100% 고객님께 완전히 이전됩니다."
    }
];

export default function SupportPage() {
    return (
        <div className="bg-[#160B07] min-h-[100dvh] pt-32 pb-24 relative overflow-hidden text-[#F5F1EB]">
            <FAQJsonLd faqs={FAQS.map((faq) => ({ question: faq.title, answer: faq.content }))} />
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F07A32]/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D95F20]/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/25 mb-6">
                        <HelpCircle className="w-4 h-4 text-[#FF6B35]" />
                        <span className="text-xs sm:text-sm font-semibold text-[#FF6B35]">
                            자주 묻는 질문
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#F5F1EB] break-keep">
                        자주 묻는 질문 (Q&A)
                    </h1>
                    <p className="text-[#F5F1EB]/70 text-base sm:text-lg max-w-xl mx-auto break-keep">
                        홈페이지 제작 과정, 비용, 검색 최적화(SEO/AEO), 유지보수에 대해 가장 많이 문의주시는 질문들을 모았습니다.
                    </p>
                </div>

                {/* Notice Quick Banner */}
                <div className="mb-12 p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#FF6B35]/15 flex items-center justify-center text-[#FF6B35] shrink-0">
                            <Bell className="w-4 h-4" />
                        </div>
                        <div>
                            <span className="text-xs font-semibold text-[#FF6B35]">공지사항 안내</span>
                            <p className="text-sm font-bold text-[#F5F1EB]">웹스케이프의 최신 소식과 서비스 업데이트를 확인하세요.</p>
                        </div>
                    </div>
                    <Link
                        href="/notice"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF6B35] hover:underline shrink-0"
                    >
                        <span>공지사항 보러가기</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* FAQ Accordion */}
                <div className="mb-16">
                    <Accordion items={FAQS} />
                </div>

                {/* Still Have Questions CTA */}
                <div className="text-center p-10 rounded-[2rem] bg-[#211009]/80 border border-white/10 relative overflow-hidden">
                    <div className="max-w-md mx-auto">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF6B35]/15 text-[#FF6B35] flex items-center justify-center mx-auto mb-4">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F5F1EB] mb-2 tracking-tight">
                            원하시는 답변을 찾지 못하셨나요?
                        </h3>
                        <p className="text-sm text-[#F5F1EB]/60 mb-6 leading-relaxed break-keep">
                            대표님의 비즈니스 상황에 맞춰 친절하고 상세하게 안내해 드리겠습니다.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF6B35] hover:bg-[#FF7A47] text-white font-bold text-sm sm:text-base transition-[background-color,transform] shadow-lg shadow-[#FF6B35]/25 active:scale-95"
                        >
                            <span>1:1 맞춤 상담 신청하기</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
