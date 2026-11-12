# 카페24 및 순수 웹 퍼블리싱 전용 가이드 (Framework: Cafe24 & Vanilla)

카페24 쇼핑몰, 브랜드 랜딩페이지, 일반 정적 HTML/CSS 퍼블리싱 시 **호환성과 유지보수성, 국내 전자상거래법 규격**을 보장하는 전문 지침입니다.

---

## 1. 퍼블리싱 기본 원칙 & 호환성

- **외부 라이브러리 최소화**: 카페24 내장 모듈 및 기존 스크립트와의 충돌을 방지하기 위해 불필요하게 무거운 JS 라이브러리를 지양하고 모던 CSS 및 바닐라 JS로 작성합니다.
- **반응형 뷰포트 메타태그 필수**:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  ```
- **Pretendard 웹폰트 CDN**:
  ```html
  <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
  ```

---

## 2. 검색 최적화(SEO) & 모바일 공유 썸네일(OG 태그) 표준 마크업

카카오톡이나 SNS에 링크를 공유했을 때 회색 박스 대신 세련된 대표 썸네일과 안내 문구가 즉시 출력되도록 하고, 포털 사이트 검색 결과에 정확히 노출되도록 `<head>` 태그 내에 아래 코드를 필수로 작성합니다.

```html
<!-- ======================================================== -->
<!-- [SEO & 모바일 공유 썸네일 메타태그] -->
<!-- ======================================================== -->
<!-- 1. 제목 태그: 반드시 '[지역명] + [핵심 서비스] | [상호명]' 공식 준수 -->
<title>[강남구] 3일 완성 맞춤형 웹사이트 제작 | 에이전시명</title>

<!-- 2. 설명문: 80자 이내로 핵심 서비스와 연락처가 한눈에 보이게 요약 -->
<meta name="description" content="강남구 소상공인·기업 맞춤형 반응형 홈페이지 3일 완성. 지금 무료 상담: 02-1234-5678" />

<!-- 3. 모바일 공유(카카오톡/SNS) 썸네일 미리보기 자동 연동 (Open Graph) -->
<!-- ※ og:image 경로는 회색 박스 방지를 위해 반드시 'https://' 절대 경로로 작성합니다. -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="에이전시명" />
<meta property="og:title" content="[강남구] 3일 완성 맞춤형 웹사이트 제작 | 에이전시명" />
<meta property="og:description" content="강남구 소상공인·기업 맞춤형 반응형 홈페이지 3일 완성. 지금 무료 상담: 02-1234-5678" />
<meta property="og:image" content="https://yourdomain.com/images/og-thumbnail.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="에이전시명 대표 소개 썸네일" />
<meta property="og:url" content="https://yourdomain.com/" />

<!-- 트위터/X 카드 메타태그 -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[강남구] 3일 완성 맞춤형 웹사이트 제작 | 에이전시명" />
<meta name="twitter:description" content="강남구 소상공인·기업 맞춤형 반응형 홈페이지 3일 완성. 지금 무료 상담: 02-1234-5678" />
<meta name="twitter:image" content="https://yourdomain.com/images/og-thumbnail.jpg" />
```

> [!TIP] **카카오톡 썸네일 회색 박스 해결 및 캐시 갱신 팁**:
> - 이미지를 변경했음에도 카카오톡에 기존 회색 박스나 옛날 이미지가 남아있다면, [카카오 개발자 도구(Kakao Developers) > 도구 > 초기화 도구](https://developers.kakao.com/tool/clear/og)에서 해당 URL의 'OG(Open Graph) 캐시 삭제'를 실행하세요.

---

## 3. 모바일 친화적 CTA 마크업 (원터치 연결)

국내 모바일 방문자가 터치 한 번으로 바로 상담할 수 있도록 표준 링크 프로토콜을 사용합니다:

```html
<!-- 원터치 전화 상담 -->
<a href="tel:02-1234-5678" class="btn-tel" aria-label="고객센터 전화상담 연결">
  <span>📞 전화 문의하기</span>
</a>

<!-- 카카오톡 채널 1:1 상담 -->
<a href="https://pf.kakao.com/_xxxx" target="_blank" rel="noopener noreferrer" class="btn-kakao">
  <span>💬 카카오톡 실시간 상담</span>
</a>
```

---

## 4. 전자상거래법 필수 사업자 정보 푸터 (표준 규격)

국내 웹사이트 및 쇼핑몰 납품 시 법적으로 누락되어서는 안 되는 푸터 마크업 템플릿입니다:

```html
<footer class="site-footer" style="padding: 40px 20px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 13px; color: #64748b; line-height: 1.6; word-break: keep-all;">
  <div class="footer-container" style="max-width: 1200px; margin: 0 auto;">
    <div style="margin-bottom: 12px; font-weight: 600; color: #1e293b;">
      <a href="/member/privacy.html" style="margin-right: 16px; color: inherit; text-decoration: none;">개인정보처리방침</a>
      <a href="/member/mall_agreement.html" style="color: inherit; text-decoration: none;">이용약관</a>
    </div>
    <p style="margin: 0;">
      상호명: [주식회사 OOO] | 대표자: [홍길동] | 사업자등록번호: [000-00-00000] | 통신판매업신고: [제 2026-서울강남-00000호]<br />
      주소: [서울특별시 강남구 테헤란로 00, 0층] | 고객센터: <a href="tel:02-1234-5678" style="color: inherit; text-decoration: underline;">02-1234-5678</a> | 이메일: [contact@domain.com]<br />
      개인정보관리책임자: [홍길동] (contact@domain.com)
    </p>
    <p style="margin-top: 16px; font-size: 12px; color: #94a3b8;">
      Copyright © 2026 [상호명]. All Rights Reserved.
    </p>
  </div>
</footer>
```

---

## 5. 고객사(비개발자)를 위한 친절한 한글 주석 규칙

납품 후 고객사 담당자가 직접 텍스트나 이미지를 교체할 수 있도록, 주요 블록마다 명확한 한국어 안내 주석을 남깁니다:

```html
<!-- ======================================================== -->
<!-- [수정 안내] 메인 히어로 배너 영역 시작 -->
<!-- 1. 배경 이미지 변경: 아래 style 안의 url 경로를 수정하세요. -->
<!-- 2. 문구 변경: h1 태그 안의 텍스트를 직접 수정하세요. -->
<!-- ======================================================== -->
<section id="hero-banner" class="hero-section">
  ...
</section>
<!-- [수정 안내] 메인 히어로 배너 영역 끝 -->
```
