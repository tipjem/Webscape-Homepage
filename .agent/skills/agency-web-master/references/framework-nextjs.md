# Next.js 전용 개발 & SEO/성능 최적화 가이드 (Framework: Next.js)

Next.js (App Router)를 사용하여 웹사이트를 구축할 때 적용하는 **아키텍처, 성능, 구글/네이버 SEO 최적화 전문 지침**입니다.

---

## 1. App Router 아키텍처 및 폴더 구조

```
app/
├── layout.tsx              # 전역 레이아웃 (Pretendard 폰트, 메타데이터 기본 설정, GNB/Footer)
├── page.tsx                # 메인 페이지 (서버 컴포넌트 원칙)
├── sitemap.ts              # 동적/정적 사이트맵 자동 생성
├── robots.ts               # 크롤러 제어 설정
├── loading.tsx             # 로딩 스켈레톤 UI
├── not-found.tsx           # 맞춤형 404 페이지
components/
├── ui/                     # 기본 UI (Button, Card, Input)
├── sections/               # 페이지 섹션 (Hero, SocialProof, Services, CTA)
└── JsonLd.tsx              # 구조화 데이터 컴포넌트
```

- **서버 컴포넌트 기본 원칙**: 모든 페이지와 섹션은 기본적으로 서버 컴포넌트(SSR)로 작성하여 초기 HTML에 텍스트가 모두 렌더링되도록 합니다. (검색 크롤러 노출 필수)
- **클라이언트 컴포넌트 제한**: 폼 입력, 캐러셀 슬라이더 등 이벤트 리스너가 필요한 최소한의 컴포넌트에만 파일 최상단에 `'use client';`를 선언합니다.

---

## 2. Metadata API & 완벽한 검색엔진(SEO) 세팅

Next.js의 Metadata API를 활용하여 검색 엔진 진단 기준과 모바일 공유(카카오톡/SNS) 썸네일 미리보기 규격을 완벽히 충족합니다.

### 📌 SEO & 모바일 공유 필수 3대 원칙
1. **제목 태그(Title) 공식**: 상호명만 덜렁 적지 않고, 반드시 `[지역명] + [핵심 서비스] | [상호명]` 공식으로 작성하여 지역 검색에 확실히 노출시킵니다.
2. **설명문(Description)**: 검색창 노출에 최적화되도록 **80자 이내**로 핵심 서비스와 연락처가 한눈에 보이게 요약합니다.
3. **모바일 공유(카카오톡/SNS) 썸네일 미리보기 자동 연동**: 카카오톡이나 SNS 링크 공유 시 회색 박스 대신 세련된 대표 이미지와 안내 문구가 즉시 출력되도록 `openGraph` 객체(og:title, og:description, og:image)를 완비하고 `metadataBase`를 통해 절대 URL을 보장합니다.

### (1) 루트 레이아웃 전역 메타데이터 (`app/layout.tsx`)
```tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

// 카카오톡/SNS 공유 시 회색 박스 방지를 위한 베이스 도메인 설정 필수
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // 1. 제목 태그: 반드시 '[지역명] + [핵심 서비스] | [상호명]' 공식 준수
  title: {
    default: '[강남구] 3일 완성 맞춤형 웹사이트 제작 | 상호명',
    template: '%s | 상호명',
  },
  // 2. 설명문: 80자 이내로 핵심 서비스와 연락처가 한눈에 보이게 요약
  description: '강남구 소상공인·기업 맞춤형 홈페이지 3일 완성. 지금 무료 상담: 02-1234-5678',
  alternates: {
    canonical: '/',
  },
  // 3. 모바일 공유(카카오톡/SNS) 썸네일 미리보기 자동 연동 (Open Graph)
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName: '상호명',
    title: '[강남구] 3일 완성 맞춤형 웹사이트 제작 | 상호명',
    description: '강남구 소상공인·기업 맞춤형 홈페이지 3일 완성. 지금 무료 상담: 02-1234-5678',
    images: [
      {
        url: '/images/og-thumbnail.jpg', // metadataBase와 결합되어 절대 URL로 생성됨
        width: 1200,
        height: 630,
        alt: '상호명 대표 썸네일 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '[강남구] 3일 완성 맞춤형 웹사이트 제작 | 상호명',
    description: '강남구 소상공인·기업 맞춤형 홈페이지 3일 완성. 지금 무료 상담: 02-1234-5678',
    images: ['/images/og-thumbnail.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

---

## 3. 구조화된 데이터 (JSON-LD) - 구글 & AI 인용(GEO) 최적화

지역 기반 사업체(LocalBusiness) 및 기업형 홈페이지를 위한 Schema.org 표준 구조화 데이터를 주입합니다:

```tsx
// components/JsonLd.tsx
export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness', // 또는 'HomeAndConstructionBusiness', 'Organization'
    name: '업체 상호명',
    description: '지역 기반 3일 완성 고품질 홈페이지 제작 서비스',
    url: 'https://yourdomain.com',
    telephone: '02-1234-5678',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '서울특별시',
      addressRegion: '강남구',
      addressCountry: 'KR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
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

---

## 4. 사이트맵 & robots.txt 자동화

### (1) `app/sitemap.ts`
```typescript
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // 필요 시 하위 페이지 추가
  ];
}
```

### (2) `app/robots.ts`
```typescript
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  };
}
```

---

## 5. 이미지 및 웹 성능 최적화 (Core Web Vitals)

- **히어로 이미지 LCP 극대화**:
  ```tsx
  <Image
    src="/images/hero-visual.webp"
    alt="대표 서비스 시각 자료"
    width={1200}
    height={675}
    priority
    className="w-full h-auto object-cover rounded-2xl"
  />
  ```
- **하단 반응형 이미지**:
  `fill` 및 `sizes="(max-width: 768px) 100vw, 50vw"`를 활용하여 모바일에서 불필요한 대용량 이미지를 다운받지 않도록 설정합니다.
