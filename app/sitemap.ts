import type { MetadataRoute } from 'next';
import { PORTFOLIO_DATA } from '@/src/data/portfolio';
import { notices } from '@/src/data/notice';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webscape.co.kr';

  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/notice`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/support`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
  ];

  const portfolioRoutes = PORTFOLIO_DATA.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  const noticeRoutes = notices.map((n) => ({
    url: `${baseUrl}/notice/${n.id}`,
    lastModified: new Date(),
    priority: 0.5,
  }));

  return [...staticRoutes, ...portfolioRoutes, ...noticeRoutes];
}

