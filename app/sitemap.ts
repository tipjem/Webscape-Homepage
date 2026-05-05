import type { MetadataRoute } from 'next';
import { PORTFOLIO_DATA } from '@/src/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webscape.co.kr';

  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services/vibecoding`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services/wordpress`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/support`, lastModified: new Date(), priority: 0.6 },
  ];

  const portfolioRoutes = PORTFOLIO_DATA.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}

