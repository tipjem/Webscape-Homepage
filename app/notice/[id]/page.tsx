import { notices } from "@/src/data/notice";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Bell, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const notice = notices.find(n => n.id === id);
    if (!notice) return { title: "공지사항을 찾을 수 없습니다" };
    return {
        title: `${notice.title} | 웹스케이프 공지사항`,
        description: notice.content.slice(0, 120),
    };
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const notice = notices.find(n => n.id === id);
    if (!notice) return notFound();

    // 단락별 분리하여 가독성 높은 여백과 줄간격 제공
    const paragraphs = notice.content
        .split("\n\n")
        .map(p => p.trim())
        .filter(Boolean);

    // 이전 글 / 다음 글 계산
    const currentIndex = notices.findIndex(n => n.id === id);
    const prevNotice = currentIndex > 0 ? notices[currentIndex - 1] : null;
    const nextNotice = currentIndex < notices.length - 1 ? notices[currentIndex + 1] : null;

    return (
        <div className="bg-[#160B07] min-h-[100dvh] pt-32 pb-28 relative overflow-hidden text-[#F5F1EB] selection:bg-[#FF6B35]/30 selection:text-white">
            {/* Background 앰비언트 글로우 */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FF6B35]/10 rounded-full blur-[160px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#D95F20]/10 rounded-full blur-[160px] translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                {/* 상단 네비게이션: 공지사항 목록으로 돌아가기 */}
                <div className="mb-8">
                    <Link
                        href="/notice"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-[#F5F1EB]/70 hover:text-[#FF6B35] transition-colors py-1.5 px-3 rounded-full hover:bg-white/5 w-fit"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                        <span>공지사항 목록으로 돌아가기</span>
                    </Link>
                </div>

                {/* 메인 아티클 카드 컨테이너 (Liquid Glass 스타일로 가독성과 집중도 극대화) */}
                <article className="bg-[#1F1008]/85 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-7 sm:p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] mb-10">

                    {/* 아티클 헤더 */}
                    <header className="border-b border-white/10 pb-8 sm:pb-10 mb-8 sm:mb-12">
                        {/* 메타 정보 (카테고리 뱃지, 작성일, 공식 작성자) */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#FF6B35] bg-[#FF6B35]/15 border border-[#FF6B35]/30">
                                <Bell className="w-3.5 h-3.5" />
                                <span>공지사항</span>
                            </span>

                            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#F5F1EB]/60 font-medium">
                                <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" />
                                <span>{notice.date}</span>
                            </div>

                            <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />

                            <span className="text-xs sm:text-sm text-[#F5F1EB]/50 font-medium hidden sm:block">
                                웹스케이프 공식 안내
                            </span>
                        </div>

                        {/* 대형 타이틀: 한글 최적화 줄바꿈과 넉넉한 자간/행간 */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F5F1EB] leading-[1.3] break-keep">
                            {notice.title}
                        </h1>
                    </header>

                    {/* 본문 콘텐츠: 시선이 편안한 단락 분리와 넉넉한 행간(leading-[1.85]) */}
                    <div className="space-y-6 sm:space-y-7 text-[#F5F1EB]/90 text-base sm:text-lg leading-[1.85] font-normal break-keep">
                        {paragraphs.map((para, idx) => (
                            <p key={idx} className="whitespace-pre-line">
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* 본문 하단 메타 / 감사 인사 배너 */}
                    <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="text-xs sm:text-sm text-[#F5F1EB]/50">
                            작성: 웹스케이프(Webscape) 운영팀
                        </div>
                        <div className="text-xs text-[#FF6B35] font-semibold bg-[#FF6B35]/10 px-3 py-1.5 rounded-lg border border-[#FF6B35]/20">
                            문의사항이 있으시면 고객지원 채널을 이용해 주세요.
                        </div>
                    </div>
                </article>

                {/* 이전 글 / 다음 글 내비게이션 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {prevNotice ? (
                        <Link
                            href={`/notice/${prevNotice.id}`}
                            className="group p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FF6B35]/40 hover:bg-white/[0.04] transition-all flex flex-col"
                        >
                            <span className="text-xs font-semibold text-[#FF6B35] mb-1">← 이전 공지</span>
                            <span className="text-sm font-bold text-[#F5F1EB] group-hover:text-[#FF6B35] transition-colors truncate">
                                {prevNotice.title}
                            </span>
                        </Link>
                    ) : (
                        <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 opacity-40 text-xs text-[#F5F1EB]/50 flex items-center">
                            이전 공지가 없습니다.
                        </div>
                    )}

                    {nextNotice ? (
                        <Link
                            href={`/notice/${nextNotice.id}`}
                            className="group p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FF6B35]/40 hover:bg-white/[0.04] transition-all flex flex-col text-right"
                        >
                            <span className="text-xs font-semibold text-[#FF6B35] mb-1">다음 공지 →</span>
                            <span className="text-sm font-bold text-[#F5F1EB] group-hover:text-[#FF6B35] transition-colors truncate">
                                {nextNotice.title}
                            </span>
                        </Link>
                    ) : (
                        <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 opacity-40 text-xs text-[#F5F1EB]/50 flex items-center justify-end">
                            다음 공지가 없습니다.
                        </div>
                    )}
                </div>

                {/* 하단 액션 카드: 궁금증 해결 & 상담 버튼 */}
                <div className="p-8 sm:p-10 rounded-[2rem] bg-[#211009]/80 border border-white/10 text-center relative overflow-hidden">
                    <h3 className="text-lg sm:text-xl font-bold text-[#F5F1EB] mb-2 tracking-tight">
                        웹스케이프의 서비스에 대해 더 궁금하신가요?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F5F1EB]/65 mb-6 max-w-md mx-auto leading-relaxed break-keep">
                        자주 묻는 질문(Q&A)을 확인하시거나, 1:1 상담을 통해 빠른 답변을 받아보실 수 있습니다.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href="/support"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-[#F5F1EB] transition-colors"
                        >
                            <span>자주 묻는 질문 (Q&A) 보기</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-[#FF6B35] hover:bg-[#FF7A47] text-white text-sm font-bold transition-all shadow-md shadow-[#FF6B35]/25 active:scale-95"
                        >
                            <span>홈페이지 제작 문의하기</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
