import { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/profile';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // 不再屏蔽 /_next/：否则 Googlebot 无法抓取 JS/CSS，会影响渲染评估与 Core Web Vitals 判定
      disallow: ['/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
