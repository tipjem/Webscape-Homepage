import type { Metadata } from 'next';
import Link from 'next/link';
import { PenTool, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '서비스 안내 | 웹스케이프',
  description: '당신의 비즈니스 단계에 맞는 최적의 웹 제작 솔루션을 제안합니다. 워드프레스 브릭스와 바이브 코딩 중 적합한 서비스를 선택하세요.',
  openGraph: {
    title: '서비스 안내 | 웹스케이프',
    description: '효율적인 구축부터 하이엔드 커스텀 개발까지, 웹스케이프의 투트랙 솔루션을 확인하세요.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground break-keep">
            비즈니스의 성장을 위한 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">최적의 기술 로드맵</span>
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto break-keep">
            단순히 만드는 것을 넘어, 실제 성과를 만드는 홈페이지를 지향합니다.
            목표와 예산에 가장 적합한 프레임워크를 선택하세요.
          </p>
        </div>

        {/* Services Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          
          {/* WordPress Bricks */}
          <div className="group relative bg-[#F8FAFC] dark:bg-white/5 rounded-[2.5rem] p-1.5 ring-1 ring-foreground/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="h-full bg-background rounded-[calc(2.5rem-0.375rem)] p-8 md:p-12 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8">
                <PenTool size={32} className="text-purple-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">워드프레스 브릭스</h2>
              <p className="text-foreground/60 mb-8 text-lg leading-relaxed break-keep">
                프리미엄 템플릿과 Bricks Builder를 활용하여, 합리적인 비용으로 빠르게 고품질 웹사이트를 런칭합니다. 중소기업, 식당, 카페 등 안내형 사이트에 가장 적합합니다.
              </p>
              
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 size={20} className="text-purple-500 shrink-0" />
                  <span>평균 3~7일 내 빠른 구축</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 size={20} className="text-purple-500 shrink-0" />
                  <span>검증된 프리미엄 템플릿 구축</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 size={20} className="text-purple-500 shrink-0" />
                  <span>비전문가도 쉬운 직접 수정 가능</span>
                </li>
              </ul>

              <Link 
                href="/services/wordpress"
                className="inline-flex items-center justify-center gap-2 bg-purple-500 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-purple-600 active:scale-95"
              >
                <span>상세 내용 보기</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Vibe Coding */}
          <div className="group relative bg-[#F0F7FF] dark:bg-accent/5 rounded-[2.5rem] p-1.5 ring-1 ring-accent/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10">
            <div className="h-full bg-background rounded-[calc(2.5rem-0.375rem)] p-8 md:p-12 flex flex-col">
                <div className="absolute top-8 right-8 px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20">
                    <span className="text-accent text-xs font-bold uppercase tracking-wider">Premium Custom</span>
                </div>
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                <Code2 size={32} className="text-accent" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">바이브 코딩</h2>
              <p className="text-foreground/60 mb-8 text-lg leading-relaxed break-keep">
                Next.js와 최신 웹 기술을 기반으로 상상하는 모든 인터랙션과 기능을 100% 맞춤 제작합니다. 독보적인 브랜드 아이덴티티와 압도적인 성능이 필요한 프로젝트에 필수적인 선택입니다.
              </p>
              
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 size={20} className="text-accent shrink-0" />
                  <span>정해진 틀 없는 100% 커스텀 디자인</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 size={20} className="text-accent shrink-0" />
                  <span>압도적인 페이지 로딩 성능 및 SEO</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 size={20} className="text-accent shrink-0" />
                  <span>복잡한 비즈니스 로직 및 외부 API 연동</span>
                </li>
              </ul>

              <Link 
                href="/services/vibecoding"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-accent/90 active:scale-95 shadow-lg shadow-accent/20"
              >
                <span>상세 내용 보기</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-[#0A0A0A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-0" />
            <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white break-keep">
                    여전히 어떤 서비스가 <br /> 맞을지 고민되시나요?
                </h3>
                <p className="text-white/60 text-lg mb-10 break-keep">
                    웹스케이프의 전문가와 상담하세요. 당신의 아이디어와 예산에 맞는 최선의 해결책을 찾아드립니다.
                </p>
                <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-slate-900 px-12 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95"
                >
                    무료 컨설팅 신청하기
                </Link>
            </div>
        </div>
      </div>
    </main>
  );
}
