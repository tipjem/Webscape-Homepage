export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '웹스케이프',
    url: 'https://webscape.co.kr',
    // 변경된 로고 파일(.svg) 경로를 반영합니다.
    logo: 'https://webscape.co.kr/logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-10-2633-9537',
      contactType: 'customer service',
      email: 'webscape.kr@gmail.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function AgencyServiceJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '웹스케이프 (Webscape)',
    description: 'AI(ChatGPT, Perplexity, Gemini)와 검색엔진(구글, 네이버)이 가장 먼저 추천하는 AEO/GEO/SEO 특화 홈페이지 제작 전문 에이전시',
    url: 'https://webscape.co.kr',
    telephone: '+82-10-2633-9537',
    email: 'webscape.kr@gmail.com',
    priceRange: '$$',
    knowsAbout: [
      'Answer Engine Optimization (AEO)',
      'Generative Engine Optimization (GEO)',
      'Search Engine Optimization (SEO)',
      'JSON-LD Schema Markup',
      'Next.js Web Development',
      'Bricks Builder WordPress Development'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '웹스케이프 올인원 홈페이지 제작 서비스',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '매출용 홈페이지 제작 & AI·검색엔진 최적화',
            description: '문의 전환 중심 UI/UX 기획, 0.5초 초고속 LCP 성능, ChatGPT·Perplexity AI 검색 인용 지식 구조화, 반응형 웹 및 사후 안심 케어를 제공하는 올인원 홈페이지 제작 솔루션'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

