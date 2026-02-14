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
    '/careers',
    '/blogs',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/contact' ? 0.9 : 0.8,
  }));

  // Service pages
  const services = [
    'web-development',
    'app-development',
    'custom-software-development',
    'saas-product-development',
    'api-development',
    'cloud-solutions',
    'devops-services',
    'seo-services',
    'digital-marketing',
    'data-analytics-business-intelligence',
    'cybersecurity-compliance',
    'ui-ux-design',
    'software-consulting',
    'erp-solutions',
    'system-integration',
    'ai-automation-solutions',
    'maintenance-support',
  ];

  const serviceRoutes = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Portfolio pages
  const portfolioPages = [
    'enterprise-resource-system',
    'customer-engagement-platform',
    'service-provider-mobile-app',
  ];

  const portfolioRoutes = portfolioPages.map(page => ({
    url: `${baseUrl}/portfolio/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog pages
  const blogPosts = [
    'future-ai-enterprise-software-development',
    'cloud-migration-strategies-legacy-systems',
    'cybersecurity-best-practices-modern-web-applications',
    'microservices-architecture-benefits-implementation-guide',
    'digital-transformation-trends-2025',
    'optimizing-react-performance-tips-techniques',
  ];

  const blogRoutes = blogPosts.map(post => ({
    url: `${baseUrl}/blogs/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes];
}
