import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0A0A0A] py-16 text-[#EDEDED]/80 mt-auto">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
                    <div className="md:max-w-sm">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
                            Webscape
                        </Link>
                        <p className="text-sm text-[#EDEDED]/60 break-keep leading-relaxed">
                            빠르고 유연한 워드프레스부터, 한계 없는 커스텀 웹 개발까지. 가장 완벽한 프리미엄 웹 에이전시.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-left">
                        <div>
                            <h4 className="font-semibold text-white mb-4">Navigation</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="/about" className="hover:text-accent transition-colors">소개</Link></li>
                                <li><Link href="/services" className="hover:text-accent transition-colors">서비스</Link></li>
                                <li><Link href="/portfolio" className="hover:text-accent transition-colors">포트폴리오</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Support & Contact</h4>
                            <ul className="space-y-3 text-sm text-[#EDEDED]/60">
                                <li>webscape@naver.com</li>
                                <li>010-2633-9537</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between lg:items-center text-xs text-[#EDEDED]/60 gap-4">
                    <p className="shrink-0">&copy; 2026 Webscape. All rights reserved.</p>
                    <p className="lg:text-right whitespace-normal leading-[1.8] md:break-keep">
                        대표: 민선홍 | 사업자 등록번호: 843-08-02925 | 인천광역시 연수구 컨벤시아대로 80, 401동 1층 138-p192호 | <br className="hidden sm:block lg:hidden" />
                        <span className="inline-block mt-2 sm:mt-0"><Link href="/terms" className="hover:text-[#EDEDED] transition-colors underline underline-offset-2">이용약관</Link> &nbsp;|&nbsp; <Link href="/privacy" className="hover:text-[#EDEDED] transition-colors underline underline-offset-2">개인정보처리방침</Link></span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
