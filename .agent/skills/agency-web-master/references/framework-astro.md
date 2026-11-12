# Astro 전용 초고속 빌드 & SEO/성능 최적화 가이드 (Framework: Astro)

Astro 5+ 기반으로 가볍고 빠른 랜딩페이지나 회사 소개 사이트를 제작할 때 적용하는 **Astro 전용 아키텍처 및 구글 서치콘솔/네이버 최적화 지침**입니다.

---

## 1. 프로젝트 구성 및 필수 라이브러리

Astro 프로젝트의 검색 노출과 Core Web Vitals 점수를 극대화하기 위한 패키지 구성:

```bash
npm install astro-seo @astrojs/sitemap lodash.merge astro-compress
```

---

## 2. Astro 설정 최적화 (`astro.config.ts`)

정적 빌드(`output: 'static'`), 사이트맵 자동화, 뷰포트 프리페칭 및 리소스 압축을 구성합니다:

```typescript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://yourdomain.com', // 실제 배포 도메인
  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport', // 링크가 화면에 들어오면 즉시 프리로드 (페이지 전환 체감 0초)
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'), // noindex 대상 제외
    }),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false, // Astro 내장 이미지 파이프라인 활용을 위해 분리
      JavaScript: true,
      SVG: true,
    }),
  ],
});
```

---

## 3. 공통 레이아웃 & SEO 컴포넌트 구조 (`src/layouts/Layout.astro`)

Astro 프로젝트에서 검색 최적화 진단 기준과 모바일 공유(카카오톡/SNS) 썸네일 미리보기 규격을 준수하는 표준 레이아웃입니다:

- **제목 태그(Title) 공식**: 반드시 `[지역명] + [핵심 서비스] | [상호명]` 공식으로 작성
- **설명문(Description)**: 80자 이내로 핵심 서비스와 연락처가 한눈에 보이게 요약
- **모바일 공유(카카오톡/SNS) 썸네일 미리보기 자동 연동**: 회색 박스 대신 세련된 대표 썸네일이 즉시 출력되도록 절대 URL 기반 Open Graph 메타태그 구성

```astro
---
import { SEO } from 'astro-seo';
import '~/styles/global.css';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

const siteUrl = Astro.site?.toString() || 'https://yourdomain.com';

const {
  // 1. 제목: 반드시 '[지역명] + [핵심 서비스] | [상호명]' 공식 준수
  title = '[강남구] 3일 완성 맞춤형 웹사이트 제작 | 상호명',
  // 2. 설명문: 80자 이내로 핵심 서비스와 연락처가 한눈에 보이게 요약
  description = '강남구 소상공인·기업 맞춤형 홈페이지 3일 완성. 지금 무료 상담: 02-1234-5678',
  // 3. 모바일 공유 시 회색 박스 방지를 위해 절대 URL로 대표 이미지 설정
  image = new URL('/images/og-thumbnail.jpg', siteUrl).toString(),
  canonical = Astro.url.href,
} = Astro.props;
---

<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    
    <!-- 구글 서치콘솔 & 네이버 소유확인 메타 -->
    <meta name="google-site-verification" content="구글인증코드" />
    <meta name="naver-site-verification" content="네이버인증코드" />

    <!-- astro-seo 통합 제어 (카카오톡 및 SNS 공유 미리보기 자동 연동) -->
    <SEO
      title={title}
      titleTemplate="%s | 상호명"
      description={description}
      canonical={canonical}
      openGraph={{
        basic: {
          title,
          type: 'website',
          image,
          url: canonical,
        },
        optional: {
          locale: 'ko_KR',
          siteName: '상호명',
          description,
        },
        image: {
          alt: '상호명 대표 썸네일 이미지',
          width: 1200,
          height: 630,
        },
      }}
      twitter={{
        card: 'summary_large_image',
        title,
        description,
        image,
      }}
    />

    <!-- LocalBusiness Schema.org JSON-LD -->
    <script type="application/ld+json" is:inline set:html={JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "상호명",
      "description": description,
      "url": siteUrl,
      "telephone": "02-1234-5678"
    })} />
  </head>
  <body class="bg-zinc-950 text-zinc-100 font-sans antialiased break-keep">
    <slot />
  </body>
</html>
```

---

## 4. 이미지 최적화 및 LCP 극대화

- **Hero 섹션 이미지 (LCP 최적화)**:
  `astro:assets`의 `<Image />` 컴포넌트를 사용하고 `loading="eager"` 및 `fetchpriority="high"`를 부여합니다:
  ```astro
  ---
  import { Image } from 'astro:assets';
  import heroImg from '~/assets/images/hero.jpg';
  ---
  <Image
    src={heroImg}
    alt="대표 서비스 시각자료"
    widths={[400, 800, 1200]}
    sizes="(max-width: 768px) 100vw, 1200px"
    loading="eager"
    fetchpriority="high"
    class="rounded-3xl object-cover w-full h-auto shadow-2xl"
  />
  ```
