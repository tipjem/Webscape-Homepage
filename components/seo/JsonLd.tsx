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
      email: 'webscape@naver.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
