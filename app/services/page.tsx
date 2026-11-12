import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Compass
} from 'lucide-react';

export const metadata: Metadata = {
  title: '홈페이지 제작 솔루션 | 웹스케이프',
  description: '비싼 홈페이지 말고, 문의가 쏟아지는 매출용 홈페이지. 기획부터 초고속 코딩, 검색엔진(SEO) 및 AI(AEO) 최적화, 사후 관리까지 올인원으로 완성합니다.',
  openGraph: {
    title: '홈페이지 제작 솔루션 | 웹스케이프',
    description: '문의 전환 중심 기획과 0.5초 초고속 성능, AI 검색 추천까지 담아낸 웹스케이프 올인원 홈페이지 제작.',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
};

const CORE_VALUES = [
  {
    icon: Compass,
    title: '3초 만에 신뢰를 주는 전환 설계',
    description:
      '단순히 보기 좋은 디자인을 넘어, 모바일 방문자가 첫 화면에서 3초 안에 신뢰를 느끼고 "전화 걸기"나 "상담 신청" 버튼을 누르도록 전환 동선과 카피라이팅을 1:1 맞춤 설계합니다.',
    badge: '전환율 극대화',
  },
  {
    icon: Zap,
    title: '0.5초 초고속 코딩 & AI·검색 최적화',
    description:
      '불필요한 군더더기 코드를 배제한 최신 초경량 Next.js 아키텍처로 0.5초 로딩 속도를 달성합니다. 구글/네이버 검색 상위 노출과 ChatGPT, Perplexity 등 최신 AI 검색 크롤러 인용 스키마를 기본 탑재합니다.',
    badge: 'SEO & AEO 기본 탑재',
  },
  {
    icon: ShieldCheck,
    title: '누구나 쉬운 직접 관리 & 100% 소유권 이전',
    description:
      '코딩을 전혀 몰라도 직관적인 관리자 환경에서 글과 사진을 직접 손쉽게 수정할 수 있습니다. 런칭 즉시 도메인과 사이트 소스코드를 대표님께 100% 온전히 이전해 드리며 1개월 무상 안심 케어를 제공합니다.',
    badge: '완전한 소유권 이전',
  },
];

const PACKAGE_FEATURES = [
  { title: 'PC · 스마트폰 · 태블릿 100% 반응형 최적화', desc: '모든 모바일 기기에서 깨짐 없이 완벽한 화면 구현' },
  { title: '구글 서치콘솔 & 네이버 서치어드바이저 수집 등록', desc: '런칭 즉시 검색엔진 로봇 수집 자동화 및 색인 최적화' },
  { title: 'ChatGPT / Perplexity AI 인용 지식 구조화', desc: 'schema.org JSON-LD 표준 스키마 100% 반영' },
  { title: '0.5초 초고속 LCP 성능 및 Core Web Vitals 최상위', desc: '이탈률을 최소화하는 압도적인 첫 화면 로딩 체감' },
  { title: '누구나 글·사진을 쉽게 바꾸는 직관적 관리자 환경', desc: '코딩 지식 없이도 포트폴리오/공지사항 직접 업데이트' },
  { title: '카카오톡 실시간 상담 & 원클릭 전화 문의 버튼', desc: '모바일 방문자의 상담 이탈을 막는 상시 플로팅 CTA' },
  { title: '도메인 연결 & 보안 인증서(SSL) 무상 세팅', desc: '안전한 자물쇠 표시(HTTPS)와 도메인 실서버 완벽 배포' },
  { title: '1개월 무상 안심 유지보수 & 1:1 운영 가이드', desc: '런칭 후에도 대표님이 혼자 운영하실 수 있도록 꼼꼼히 지원' },
];

const WORKFLOW_STEPS = [
  { step: '01', title: '비즈니스 진단', desc: '사업 맥락과 타겟 고객을 분석하여 문의 전환에 최적화된 사이트 구조를 설계합니다.' },
  { step: '02', title: '맞춤 시안 제작', desc: '모바일 가독성과 브랜드 신뢰도를 극대화한 고화질 인터랙티브 시안을 제작·공유합니다.' },
  { step: '03', title: '초경량 코딩 & 최적화', desc: '0.5초 속도 최적화 코딩 및 구글/네이버, AI 검색 크롤러 인덱싱 엔진을 탑재합니다.' },
  { step: '04', title: '실기기 전수 검수', desc: '스마트폰, 태블릿, PC 등 전 디바이스에서 터치 오류와 폰트를 꼼꼼히 크로스 체크합니다.' },
  { step: '05', title: '공식 런칭 & 케어', desc: '도메인 공식 연결, 100% 소유권 이전, 맞춤 관리 매뉴얼 제공 및 1개월 무상 케어를 지원합니다.' },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#160B07] min-h-[100dvh] pt-32 pb-24 overflow-hidden text-[#F5F1EB]">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* 1. Hero Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 mb-8">
            <Sparkles className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-xs sm:text-sm font-semibold text-[#FF6B35] tracking-wide">
              웹스케이프 올인원 홈페이지 제작
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-[#F5F1EB] leading-tight break-keep">
            비싼 홈페이지 말고,<br />
            <span className="text-[#FF6B35]">문의가 쏟아지는 매출용 홈페이지</span>
          </h1>

          <p className="text-[#F5F1EB]/75 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed break-keep mb-10">
            기획부터 전환 설계, 0.5초 초고속 코딩, 검색엔진(SEO) 및 최신 생성형 AI(AEO) 최적화, 사후 관리까지.
            복잡하게 고민할 필요 없이 사업 성장을 위한 모든 가치를 하나의 홈페이지에 완벽하게 담아드립니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF6B35] text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-[transform,background-color,box-shadow] duration-200 hover:bg-[#FF7A47] hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,107,53,0.35)]"
            >
              <span>홈페이지 제작 문의하기</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 text-[#F5F1EB] border border-white/10 px-8 py-4 rounded-full font-semibold text-base sm:text-lg transition-colors hover:bg-white/10"
            >
              <span>포트폴리오 보러가기</span>
            </Link>
          </div>
        </div>

        {/* 2. Core 3 Pillars (Bento Grid) */}
        <div className="mb-28">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F1EB] mb-3 break-keep">
              고객을 끌어당기는 3가지 핵심 원칙
            </h2>
            <p className="text-[#F5F1EB]/60 text-sm sm:text-base">
              에이전시의 기술 자랑이 아닌, 대표님의 비즈니스 성과만을 생각합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_VALUES.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group bg-white/[0.02] ring-1 ring-white/10 p-1.5 rounded-[2rem] flex flex-col transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF6B35]/10"
                >
                  <div className="flex flex-col h-full bg-[#211009]/80 rounded-[calc(2rem-0.375rem)] p-8 border border-white/5">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#160B07] border border-white/10 flex items-center justify-center text-[#FF6B35] shadow-inner group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-300">
                        <Icon size={28} />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] border border-[#FF6B35]/20">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F1EB] mb-3 tracking-tight break-keep group-hover:text-[#FF6B35] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-[#F5F1EB]/70 text-sm sm:text-base leading-relaxed break-keep font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. All-in-One Package Spec */}
        <div className="mb-28 bg-[#120805] rounded-[2.5rem] md:rounded-[3rem] p-8 sm:p-12 md:p-16 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35]/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center mb-14 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F5F1EB] mb-4 break-keep">
              추가 비용 없는 올인원 표준 제작 사양
            </h2>
            <p className="text-[#F5F1EB]/70 text-sm sm:text-base leading-relaxed break-keep">
              옵션 장사 없이, 실제 사업 운영에 꼭 필요한 모든 핵심 기능을 표준으로 완벽히 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto relative z-10 mb-12">
            {PACKAGE_FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
              >
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F5F1EB] text-sm sm:text-base mb-1 tracking-tight">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F5F1EB]/60 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center relative z-10">
            <p className="text-xs sm:text-sm text-[#F5F1EB]/50 mb-6">
              * 사업체의 업종, 페이지 수량 및 요구 기능에 맞춰 가장 투명하고 합리적인 1:1 정가 견적으로 제작해 드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-8 py-3.5 rounded-full font-bold text-base transition-[background-color,transform] hover:bg-[#FF7A47] active:scale-95 shadow-lg shadow-[#FF6B35]/25"
            >
              <span>맞춤 견적 & 상담 신청하기</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* 4. Workflow Steps */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F1EB] mb-3 break-keep">
              첫 상담부터 런칭까지 5단계 여정
            </h2>
            <p className="text-[#F5F1EB]/60 text-sm sm:text-base">
              단계마다 명확한 산출물과 투명한 일정을 공유하며 막힘없이 진행됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {WORKFLOW_STEPS.map((s, idx) => (
              <div
                key={s.step}
                className="relative bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-[#FF6B35]/30 transition-colors"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#FF6B35] mb-2">
                    STEP {s.step}
                  </div>
                  <h4 className="text-lg font-bold text-[#F5F1EB] mb-2 break-keep">
                    {s.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F5F1EB]/60 leading-relaxed break-keep">
                    {s.desc}
                  </p>
                </div>
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-[#FF6B35]/40 text-xs font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5. Final CTA */}
        <div className="text-center bg-[#160B07] rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 text-[#F5F1EB] break-keep leading-tight">
              대표님의 사업장에도<br />
              <span className="text-[#FF6B35]">24시간 일하는 영업사원</span>을 두세요
            </h3>
            <p className="text-[#F5F1EB]/70 text-base sm:text-lg mb-10 break-keep leading-relaxed">
              만들어 놓고 방치되는 홈페이지가 아닌, 실제 고객의 전화와 문의로 보답하는 사이트를 제작합니다.
              지금 사업장의 상황을 편하게 알려주시면 최적의 솔루션을 제안해 드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl transition-[transform,background-color,box-shadow] duration-300 hover:bg-[#FF7A47] hover:scale-105 active:scale-95 shadow-[0_0_35px_rgba(255,107,53,0.35)]"
            >
              <span>홈페이지 제작 무료 상담하기</span>
              <ArrowRight size={22} />
            </Link>
            <p className="text-xs text-[#F5F1EB]/40 mt-4">평균 24시간 이내 맞춤 상담 회신</p>
          </div>
        </div>

      </div>
    </main>
  );
}
