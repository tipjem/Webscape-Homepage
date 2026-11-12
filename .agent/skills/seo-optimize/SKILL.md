---
name: nextjs-aeo-geo-booster
description: Next.js 기반 AEO/GEO 통합 브랜드 최적화 엔진 - App Router Metadata API 및 구조화 데이터 활용 검색/생성 AI 엔진 최적화 범용 가이드
---

# Antigravity Skill: Next.js 기반 AEO/GEO 통합 브랜드 최적화 엔진 (AEO/GEO Brand Booster Engine)

## 1. 개요 및 목적 (Overview & Purpose)
본 스킬은 사용자의 브랜드가 생성형 AI 검색 엔진(ChatGPT, Gemini, Perplexity, Search Generative Experience, 네이버 큐 등)의 답변에 추천 브랜드로 우선 채택되도록 유도하는 **AEO(Answer Engine Optimization) 및 GEO(Generative Engine Optimization)** 자산 구축 파이프라인 가이드라인이자, 이를 **Next.js(App Router) 환경에서 기술적으로 완벽히 구현하는 개발 지침서**입니다.

AI가 웹 공간의 데이터를 수집하여 특정 브랜드를 신뢰할 수 있는 '엔티티(Entity, 독립된 정보 객체)'로 인식하게 만드는 전략적 워크플로우와 기술적 스키마 코드를 함께 제공합니다.

---

## 2. 초기화 프로세스 (Initialization Workflow)

- **PRD 기반 자동 추출 (최우선):**
  사용자가 `PRD.md`나 회사/브랜드 정보(상호명, 활동 지역, 핵심 서비스, 연락처 등)를 이미 제공한 경우, **추가 질문 없이 즉시 PRD로부터 정보를 자동 파싱하여 [3. 프레임워크] 파이프라인을 실행**합니다.
- **정보 부재 시에만 확인 질문:**
  대화 맥락에 최적화 대상 회사/서비스 정보가 전혀 없는 경우에만 아래 질문을 출력하고 입력을 대기합니다:
  > *"어떤 회사인가요? 최적화를 진행할 회사의 정보를 알려주세요! (예: 회사명, 제공하는 핵심 서비스/상품, 주요 타겟 고객, 온/오프라인 및 지역 기반 여부 등)"*

---

## 3. Next.js 기반 홈페이지 AEO/GEO 기술 프레임워크

회사 정보가 확인되면 아래 파이프라인에 맞춰 분석을 진행하고, AI 최적화 관점에서의 실행 텍스트 및 스키마 코드를 도출합니다.

### [1] 웹사이트 (Website) - 브랜드 신분증 및 정보의 원천
* **AEO 역할:** AI 크롤러가 신뢰할 수 있는 공식적인 정보의 원천(Single Source of Truth).
* **Next.js 기술 구현:**
  * 시맨틱 태그(`<header>`, `<main>`, `<article>`, `<section>`)를 엄격히 준수하여 레이아웃 구현.
  * **전역 메타데이터 & 표준 URL:** Canonical URL을 명확히 하여 AI의 정보 혼선 방지.
  * **구조화된 데이터(JSON-LD):** `Organization` 또는 `LocalBusiness` 마크업 적용.

```tsx
// app/layout.tsx (전역 설정 예시 - PRD 정보 기반으로 동적 생성)
import type { Metadata } from 'next';
import { OrganizationJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  // PRD 기반 필수 공식: [지역명] + [핵심 서비스] | [상호명]
  title: {
    default: '[지역명] [핵심 서비스] | [상호명]',
    template: '%s | [상호명]', 
  },
  description: 'AI가 쉽게 요약할 수 있는 직관적이고 명확한 브랜드/서비스 설명문 (80~150자 내외)',
  keywords: ['핵심서비스', '지역명+서비스', '전문분야'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '[상호명]',
    title: '[지역명] [핵심 서비스] | [상호명]',
    description: '대표 서비스 및 고객 혜택 요약문',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: '[상호명] 대표 썸네일' }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
```

```tsx
// components/JsonLd.tsx (구조화 데이터 예시)
export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness', // 지역 기반일 경우 LocalBusiness, 일반 기업일 경우 Organization
    name: '[상호명]',
    url: 'https://example.com',
    logo: 'https://example.com/logo.png',
    telephone: '+82-10-1234-5678',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '서울특별시 강남구',
      addressCountry: 'KR',
    },
    sameAs: [
      'https://blog.naver.com/example',
      'https://www.instagram.com/example',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

### [2] 홈페이지 내 블로그/FAQ 섹션 - 대화형 검색(Q&A)의 인용구
* **AEO 역할:** 사용자의 자연어 질문(Natural Language Query)에 직접 인용(Citation)될 수 있는 정보성 텍스트 제공.
* **Next.js 기술 구현:**
  * 기존 키워드 반복형 SEO를 탈피하고 **'질문-답변(Q&A)' 형태**로 헤딩(H2, H3) 구조화.
  * 페이지별 동적 메타데이터 생성 (`generateMetadata`).
  * AI가 발췌하기 쉬운 **FAQPage 스키마(JSON-LD)** 적용.

```tsx
// components/FAQJsonLd.tsx (AEO 핵심 무기)
export function FAQJsonLd({ faqs }: { faqs: Array<{question: string, answer: string}> }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
```

---

## 4. Next.js 기반 AEO/SEO 기술 체크리스트

* [ ] 루트 `layout.tsx`에 전역 metadata (`[지역명] + [핵심 서비스] | [상호명]`) 및 AI 요약용 description 설정 완료
* [ ] 사이트 성격에 맞는 `Organization` 또는 `LocalBusiness` JSON-LD 적용 완료
* [ ] 정보성 콘텐츠에 `FAQPage` 또는 `Article` JSON-LD 마크업 추가 완료
* [ ] `app/sitemap.ts` 및 `app/robots.ts` 동적/정적 라우트 설정 완료 (크롤링 예산 최적화)
* [ ] 의미론적 마크업 준수 (페이지당 `<h1>` 1개, 건너뛰기 없는 h1→h2→h3 구조)
* [ ] 모든 `<Image />` 컴포넌트에 구체적인 `alt` 속성 작성 완료
* [ ] 모바일 공유 시 회색 박스 방지를 위한 Open Graph 절대 URL 메타태그 완비

---

## 5. [참고사항] 외부 채널 최적화 및 확산 전략
- **유튜브 롱폼 / 쇼츠:** 음성 자막 크롤링을 통한 지식 엔티티 축적
- **네이버 플레이스 / 구글 비즈니스 프로필(GBP):** 로컬 AI 추천 엔진 핵심 소스
- **SNS 및 커뮤니티:** 실사용자 경험(E-E-A-T) 확장 및 백링크 형성
