---
name: nextjs-aeo-geo-booster
description: Next.js 기반 AEO/GEO 통합 브랜드 최적화 엔진 - App Router Metadata API 및 구조화 데이터 활용 검색/생성 AI 엔진 최적화 범용 가이드
---

# Antigravity Skill: Next.js 기반 AEO/GEO 통합 브랜드 최적화 엔진 (AEO/GEO Brand Booster Engine)

## 1. 개요 및 목적 (Overview & Purpose)
본 스킬은 사용자의 브랜드가 생성형 AI 검색 엔진(ChatGPT, Gemini, Perplexity, Search Generative Experience, 네이버 큐 등)의 답변에 추천 브랜드로 우선 채택되도록 유도하는 **AEO(Answer Engine Optimization) 및 GEO(Generative Engine Optimization)** 자산 구축 파이프라인 가이드라인이자, 이를 **Next.js(App Router) 환경에서 기술적으로 완벽히 구현하는 개발 지침서**입니다.

AI가 웹 공간의 데이터를 수집하여 특정 브랜드를 신뢰할 수 있는 '엔티티(Entity, 독립된 정보 객체)'로 인식하게 만드는 전략적 워크플로우와 기술적 스키마 코드를 함께 제공합니다.

---

## 2. 초기화 프로세스 (Initialization Workflow) - ⚠️ 필독 시스템 명령

본 스킬 파일이 로드되거나 실행되면, AI는 어떠한 전략도 선제시하지 말고 **반드시 아래의 첫 번째 질문만을 수행하며 대기를 해야 합니다.**

### 🚨 최초 실행 시 출력할 질문:
> **"어떤 회사인가요? 최적화를 진행할 회사의 정보를 알려주세요! (예: 회사명, 제공하는 핵심 서비스/상품, 주요 타겟 고객, 온/오프라인 및 지역 기반 여부 등)"**

사용자가 정보를 입력하면, AI는 아래의 **[3. 프레임워크]**에 해당 회사 정보를 대입하여 최적화된 맞춤형 콘텐츠 기획안과 Next.js 최적화 코드를 단계별로 생성합니다.

---

## 3. Next.js 기반 홈페이지 AEO/GEO 기술 프레임워크

사용자가 정보를 제공하면 아래 파이프라인에 맞춰 분석을 진행하고, AI 최적화 관점에서의 실행 텍스트 및 스키마 코드를 도출합니다.

### [1] 웹사이트 (Website) - 브랜드 신분증 및 정보의 원천
* **AEO 역할:** AI 크롤러가 신뢰할 수 있는 공식적인 정보의 원천(Single Source of Truth).
* **Next.js 기술 구현:**
  * 시맨틱 태그(`<header>`, `<main>`, `<article>`, `<section>`)를 엄격히 준수하여 레이아웃 구현.
  * **전역 메타데이터 & 표준 URL:** Canonical URL을 명확히 하여 AI의 정보 혼선 방지.
  * **구조화된 데이터(JSON-LD):** `Organization` 또는 `LocalBusiness` 마크업 적용.

```tsx
// app/layout.tsx (전역 설정 예시 - AI는 사용자 맞춤형 데이터로 변환하여 출력할 것)
import type { Metadata } from 'next';
import { OrganizationJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: '[브랜드명] | [핵심 가치]',
    template: '%s | [브랜드명]', 
  },
  description: 'AI가 쉽게 요약할 수 있는 직관적이고 명확한 브랜드/서비스 설명문 (150자 내외)',
  keywords: ['핵심키워드1', '대화형 롱테일 키워드2'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '[브랜드명]',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: '[브랜드명] 메인 이미지' }],
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
    '@type': 'Organization', // 지역 사업체인 경우 'LocalBusiness'로 변경
    name: '[브랜드명]',
    url: 'https://example.com',
    logo: 'https://example.com/logo.png',
    sameAs: [
      'https://www.youtube.com/channel/example',
      'https://www.linkedin.com/company/example'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-2-1234-5678',
      contactType: 'customer service',
    },
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

```tsx
// app/blog/[slug]/page.tsx (동적 메타데이터 예시)
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt, // 두괄식 단답형 요약문
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: { images: [post.thumbnail] },
  };
}
```

---

## 4. Next.js 기반 AEO/SEO 기술 체크리스트

* [ ] 루트 `layout.tsx`에 전역 metadata 및 명확한 AI 요약용 description 설정 완료
* [ ] 사이트 성격에 맞는 `Organization` 또는 `LocalBusiness` JSON-LD 적용 완료
* [ ] 정보성 콘텐츠에 `FAQPage` 또는 `Article` JSON-LD 마크업 추가 완료
* [ ] `app/sitemap.ts` 및 `app/robots.ts` 동적/정적 라우트 설정 완료 (크롤링 예산 최적화)
* [ ] 의미론적 마크업 준수 (페이지당 `<h1>` 1개, 건너뛰기 없는 h1→h2→h3 구조)
* [ ] 모든 `<Image />` 컴포넌트에 AI 이미지 인식(Vision)을 돕는 구체적인 `alt` 속성 작성 완료
* [ ] 내부 링크에 의미 있는 앵커 텍스트 사용 ("여기 클릭" 등 지양)

---

## 5. AI 가동 규칙 (AI Execution Rules)

1. **철저한 범용성 유지:** 사용자가 정보를 제공하기 전까지는 특정 업종에 치우친 예시를 본문에 직접 고정하지 마십시오.
2. **홈페이지 중심의 스키마 및 SEO 코드 자동 생성:** 사용자가 회사를 입력하면 홈페이지 구축에 필요한 Next.js 메타데이터 구성 및 구조화 데이터(JSON-LD) 코드를 우선적으로 도출하십시오.
3. **대화형 진행:** 한 번에 모든 것을 쏟아내기보다는, 사용자의 회사 정보를 분석한 뒤 가장 시급한 **1단계(웹사이트 기본 메타데이터 및 스키마 구조)**부터 순차적으로 심도 있게 디벨롭할 것을 권장하며 대화를 이끌어가십시오.

---

## 6. [참고사항] 외부 채널 최적화 및 확산 전략

홈페이지 외에 브랜드의 AEO/GEO 효과를 극대화하기 위해 연계할 수 있는 외부 마케팅 채널과 오프페이지(Off-page) 최적화 방안입니다.

### [1] 유튜브 롱폼 (YouTube Long-form) - 정보성 콘텐츠의 Anchor
* **AEO 역할:** AI가 영상 자막(Subtitle)과 스크립트를 크롤링하여 지식 데이터베이스로 활용.
* **실행 과제:**
  * 본질적인 문제 해결형(How-to) 정보성 롱폼 콘텐츠 기획.
  * 스크립트 초반 30초 이내에 핵심 키워드와 브랜드 정체성을 명확한 음성 텍스트로 노출.

### [2] 외부 블로그 및 SNS (Threads & LinkedIn) - 소셜 신뢰도(E-E-A-T) 확장
* **AEO 역할:** 최신 트렌드 데이터 수집 및 전문가 집단으로의 권위 인정 유도.
* **실행 과제:**
  * 홈페이지 내의 정보성 SEO 콘텐츠를 플랫폼 문법에 맞게 리라이팅하여 외부 블로그 및 SNS에 확산.
  * **링크드인:** 전문 지식, 인사이트, 비즈니스 성과 중심의 신뢰 구축.
  * **스레드:** 실시간 소통, 유저 대화 유도, 가벼운 확산 중심.

### [3] PR 언론보도 (Press Release) - 공인된 신뢰성 확보
* **AEO 역할:** 고품질 언론사 도메인의 백링크(Backlink)와 인용을 신뢰성 가중치 지표로 판단.
* **실행 과제:** 단순 광고가 아닌 가치 있는 정보, 통계자료, 공익성 성과 중심으로 배포 및 브랜드명 결합.

### [4] 위키류 및 전문 지식 플랫폼 (Wiki & Knowledge Base) - 지식 그래프 편입
* **AEO 역할:** AI의 핵심 지식 구조(Knowledge Graph) 형성에 직접적인 영향.
* **실행 과제:** 조건 충족 시 위키백과 등재 추진 또는 전문 지식 아카이브(오픈북 등) 개설. 객관적 사실, 연혁, 서비스 모델 위주 서술.

### [5] 구글 비즈니스 프로필 (GBP) & 네이버 스마트플레이스 (로컬 비즈니스)
* **AEO 역할:** 구글 맵 및 로컬 AI 추천 엔진의 핵심 소스.
* **실행 과제:** 리뷰 내에 핵심 서비스 키워드를 자연스럽게 녹이도록 유도하여 로컬 지수 향상.

### [6] 하이퍼로컬 플랫폼 (당근 등)
* **AEO 역할:** 지역 내 신뢰도 및 실사용자 언급 빈도 축적.
* **실행 과제:** 당근비즈니스 등 하이퍼로컬 광고 및 게시글을 통해 지역 밀착형 신뢰 증명.

### [7] 커뮤니티 확산 (Off-page Optimization)
* **AEO 역할:** 레딧, 디시인사이드, 타겟 버티컬 커뮤니티 등 실사용자 경험(Experience)이 누적되는 공간에 브랜드 노출.
* **실행 과제:** 정보성 답변과 함께 자연스러운 브랜드 언급, 버티컬/인플루언서 블로그 협찬 진행.