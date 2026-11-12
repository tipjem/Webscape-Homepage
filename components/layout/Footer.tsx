import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#120805] py-16 text-[#F5F1EB]/80 mt-auto">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
                    <div className="md:max-w-sm">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#F5F1EB] mb-6 inline-flex items-center">
                            <span>Webscape</span>
                        </Link>
                        <p className="text-sm text-[#F5F1EB]/60 break-keep leading-relaxed">
                            검색엔진부터 AI까지, 검색에 강한 홈페이지를 만듭니다. 가장 완벽한 프리미엄 웹 에이전시.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-left">
                        <div>
                            <h4 className="font-semibold text-[#F5F1EB] mb-4">Navigation</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="/services" className="hover:text-[#FF6B35] transition-colors">홈페이지 제작</Link></li>
                                <li><Link href="/portfolio" className="hover:text-[#FF6B35] transition-colors">포트폴리오</Link></li>
                                <li><Link href="/about" className="hover:text-[#FF6B35] transition-colors">소개</Link></li>
                                <li><Link href="/notice" className="hover:text-[#FF6B35] transition-colors">공지사항</Link></li>
                                <li><Link href="/support" className="hover:text-[#FF6B35] transition-colors">자주 묻는 질문 (Q&A)</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#F5F1EB] mb-4">Support & Contact</h4>
                            <ul className="space-y-3 text-sm text-[#F5F1EB]/60">
                                <li>webscape.kr@gmail.com</li>
                                <li>010-2633-9537</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between lg:items-center text-xs text-[#F5F1EB]/60 gap-4">
                    <p className="shrink-0">&copy; 2026 Webscape. All rights reserved.</p>
                    <p className="lg:text-right whitespace-normal leading-[1.8] md:break-keep">
                        대표: 민선홍 &nbsp;|&nbsp; <span className="inline-block mt-2 sm:mt-0"><Link href="/terms" className="hover:text-[#F5F1EB] transition-colors underline underline-offset-2">이용약관</Link> &nbsp;|&nbsp; <Link href="/privacy" className="hover:text-[#F5F1EB] transition-colors underline underline-offset-2">개인정보처리방침</Link></span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
