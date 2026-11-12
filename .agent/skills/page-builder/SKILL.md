---
name: nextjs-page-builder
description: Next.js App Router 기반 페이지 및 컴포넌트 생성 가이드 (최신 표준)
---

# Next.js 페이지 빌더 스킬

## 프로젝트 구조 (App Router)
```
app/
├── layout.tsx              # 루트 레이아웃 (html, body, 네비게이션, 푸터)
├── page.tsx                # 홈페이지 (/)
├── globals.css             # 글로벌 스타일 (Tailwind v4 theme import)
├── about/
│   └── page.tsx            # /about
├── services/
│   └── page.tsx            # /services
├── contact/
│   └── page.tsx            # /contact
├── blog/
│   ├── page.tsx            # /blog (목록)
│   └── [slug]/
│       └── page.tsx        # /blog/:slug (상세)
├── (group)/                # route group (옵션)
└── api/
    └── contact/
        └── route.ts        # API 라우트
components/
├── ui/                     # 공통 UI (Button, Card, Input 등)
├── layout/                 # Header, Footer, Navigation
├── sections/               # 페이지 섹션 (Hero, Services, CTA 등)
└── features/               # 기능 단위 컴포넌트 (폼, 인증 등)
lib/
├── utils.ts                # 유틸리티 함수 (cn 등)
├── constants.ts            # 상수 값
└── api.ts                  # API 관련 로직
hooks/
├── useXxx.ts               # 커스텀 훅
types/
├── index.ts                # 공통 타입 정의
public/
├── images/
├── fonts/
└── icons/
```

## 페이지 생성 패턴

### 서버 컴포넌트 (기본값)
```tsx
// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // PRD 기반 필수 공식: [지역명] + [핵심 서비스] | [상호명]
  title: '[지역명] [핵심 서비스] | [상호명]',
  description: 'PRD 기반 핵심 가치와 연락처를 80자 이내로 명확하게 요약',
  openGraph: {
    title: '[지역명] [핵심 서비스] | [상호명]',
    description: 'PRD 기반 핵심 가치와 대표 연락처 요약',
    images: [{ url: '/images/og-main.jpg', width: 1200, height: 630, alt: '[상호명] 대표 썸네일' }],
  },
};

export default function AboutPage() {
  return (
    <main>
      <section id="hero">{/* 히어로 */}</section>
      <section id="content">{/* 본문 */}</section>
      <section id="cta">{/* CTA */}</section>
    </main>
  );
}
```

### 클라이언트 컴포넌트 (인터랙션 필요 시)
```tsx
'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  return <form>{/* ... */}</form>;
}
```

## 확장 패턴 (권장)

### 로딩 상태
```tsx
// app/loading.tsx
export default function Loading() {
  return <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>;
}
```

### 에러 처리
```tsx
// app/error.tsx
'use client';

export default function Error({ error }: { error: Error }) {
  return <div className="min-h-[50vh] flex items-center justify-center">오류가 발생했습니다: {error.message}</div>;
}
```

### 404 페이지
```tsx
// app/not-found.tsx
export default function NotFound() {
  return <div className="min-h-[50vh] flex items-center justify-center">페이지를 찾을 수 없습니다.</div>;
}
```

## 필수 홈페이지 섹션 구성 (Anti-Template Bento Grid)
1. **Hero** — 메인 비주얼 + 전환 CTA 버튼 + 핵심 가치 전달
2. **Services** — 동일 3열 카드가 아닌 **비대칭 벤토 그리드(Bento Grid) 및 더블 베젤 카드**
3. **About** — 대표자/에이전시 철학 소개 + 고해상도 비주얼
4. **Portfolio/Proof** — 실무 작업물 및 신뢰 데이터 (구체적 숫자 활용)
5. **Contact/CTA** — 직관적인 문의 폼 및 하단 Sticky/Fixed 전화 상담 버튼
6. **Footer** — 상호명, 사업자 정보, 저작권, 필수 링크

## 컴포넌트 작성 규칙
- 서버 컴포넌트 우선, 인터랙션이 필요한 경우에만 `'use client'`
- `next/image`로 이미지 최적화 및 `priority` 설정 (LCP 최적화)
- `next/link`로 내부 네비게이션
- **스타일 방식:** Tailwind CSS v4 단일화 (CSS Modules 사용 금지, HSL 테마 토큰 활용)
- props에 TypeScript 인터페이스 타입 정의 필수
- 재사용 가능한 UI는 `components/ui`에 분리

## 관련 스킬
- SEO & AEO 최적화 → `seo-optimize` 스킬 참조
- 성능 최적화 & 반응형 → `performance` 스킬 참조
- 디자인 토큰 & 컴포넌트 → `design-system` 스킬 참조
- 종합 에이전시 워크플로우 → `agency-web-master` 스킬 참조

## 체크리스트
- [ ] App Router 구조로 페이지 생성
- [ ] 시맨틱 HTML (header, main, section, article, nav, footer)
- [ ] next/image, next/link 사용
- [ ] 서버/클라이언트 컴포넌트 분리
- [ ] TypeScript 타입 정의
- [ ] loading / error / not-found 구성
- [ ] 동일 규격 3열 카드 대신 비대칭 벤토 그리드 적용
