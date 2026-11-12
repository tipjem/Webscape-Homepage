import { notices } from "@/src/data/notice";
import Link from "next/link";
import { Metadata } from "next";
import { Bell, ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "공지사항 | 웹스케이프",
    description: "웹스케이프의 공식 소식과 서비스 업데이트, 중요 안내 사항을 확인하세요.",
    openGraph: {
        title: "공지사항 | 웹스케이프",
        description: "웹스케이프의 최신 소식과 서비스 업데이트를 전해드립니다.",
        type: "website",
    },
    alternates: {
        canonical: "/notice",
    },
};

export default function NoticeListPage() {
    return (
        <div className="bg-[#160B07] min-h-[100dvh] pt-32 pb-24 relative overflow-hidden text-[#F5F1EB]">
            {/* Background glow effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F07A32]/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D95F20]/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/25 mb-6">
                        <Bell className="w-4 h-4 text-[#FF6B35]" />
                        <span className="text-xs sm:text-sm font-semibold text-[#FF6B35]">
                            웹스케이프 소식
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#F5F1EB] break-keep">
                        공지사항
                    </h1>
                    <p className="text-[#F5F1EB]/70 text-base sm:text-lg max-w-xl mx-auto break-keep">
                        웹스케이프의 새로운 기능 출시, 시스템 점검 및 중요 소식을 안내해 드립니다.
                    </p>
                </div>

                {/* Notice List */}
                <div className="space-y-4 mb-16">
                    {notices.length === 0 ? (
                        <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-2xl text-[#F5F1EB]/50 text-sm">
                            등록된 공지사항이 없습니다.
                        </div>
                    ) : (
                        notices.map((notice) => (
                            <Link
                                key={notice.id}
                                href={`/notice/${notice.id}`}
                                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-7 bg-white/[0.02] rounded-2xl border border-white/10 hover:border-[#FF6B35]/40 hover:bg-white/[0.04] transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 text-xs text-[#FF6B35] font-semibold mb-2">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{notice.date}</span>
                                    </div>
                                    <h2 className="text-lg sm:text-xl font-bold text-[#F5F1EB] group-hover:text-[#FF6B35] transition-colors duration-200 tracking-tight break-keep">
                                        {notice.title}
                                    </h2>
                                </div>
                                <div className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#F5F1EB]/50 group-hover:text-[#FF6B35] transition-colors self-end sm:self-center shrink-0">
                                    <span>자세히 보기</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                {/* Bottom Guide */}
                <div className="p-8 rounded-2xl bg-[#211009]/60 border border-white/5 text-center">
                    <p className="text-sm text-[#F5F1EB]/70 mb-4">
                        궁금하신 점이 있거나 빠른 상담이 필요하신가요?
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link
                            href="/support"
                            className="text-xs sm:text-sm font-bold text-[#FF6B35] hover:underline inline-flex items-center gap-1"
                        >
                            <span>자주 묻는 질문(Q&A) 확인하기</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
