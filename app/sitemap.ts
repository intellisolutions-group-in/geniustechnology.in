import { MetadataRoute } from 'next';
import { PROJECT_VARS } from '@/utils/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${PROJECT_VARS.DOMAIN}`;
  
  // Core pages
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/faq',
    '/testimonials',
    '/why-choose-us',
    '/our-process',
    '/privacy',
    '/terms',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/contact' ? 0.9 : 0.8,
  }));

  // Service pages
  const serviceRoutes = PROJECT_VARS.KEY_SERVICES.map(service => {
    const slug = service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
    return {
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  return [...routes, ...serviceRoutes];
}
