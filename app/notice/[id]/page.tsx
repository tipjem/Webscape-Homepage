import { notices } from "@/src/data/notice";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { id } = await params;
    const notice = notices.find(n => n.id === id);
    if (!notice) return { title: "공지사항을 찾을 수 없습니다" };
    return { title: `${notice.title} | 웹스케이프 공지사항` };
}

export default async function NoticeDetailPage({ params }: any) {
    const { id } = await params;
    const notice = notices.find(n => n.id === id);
    if (!notice) return notFound();

    return (
        <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                <Link href="/support" className="inline-flex items-center text-foreground/60 hover:text-accent mb-8 transition-colors text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    지원 센터로 돌아가기
                </Link>
                
                <div className="mb-12 border-b border-foreground/10 pb-8">
                    <div className="text-accent text-sm font-bold mb-4">{notice.date}</div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground leading-tight">
                        {notice.title}
                    </h1>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 leading-relaxed whitespace-pre-wrap">
                    {notice.content}
                </div>
            </div>
        </div>
    );
}
