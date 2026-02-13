import { MetadataRoute } from 'next';
import { PROJECT_VARS } from '@/utils/constants';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${PROJECT_VARS.DOMAIN}`;
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
