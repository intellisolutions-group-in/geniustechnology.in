// SEO Configuration and Metadata Generation
// Auto-generated for geniustechnology.in

import { Metadata } from 'next';
import { PROJECT_VARS, SITE_METADATA } from './constants';

export interface PageSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Generate complete SEO metadata for any page
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = '',
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
}: PageSEOProps): Metadata {
  const pageTitle = title 
    ? `${title} | ${PROJECT_VARS.BRAND_NAME}` 
    : SITE_METADATA.title;
  
  const pageDescription = description || SITE_METADATA.description;
  const pageKeywords = [...PROJECT_VARS.SEO_KEYWORDS, ...keywords].join(', ');
  const pageUrl = `${SITE_METADATA.siteUrl}${path}`;
  const pageImage = image || SITE_METADATA.ogImage;

  return {
    metadataBase: new URL(SITE_METADATA.siteUrl),
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: PROJECT_VARS.BRAND_NAME }],
    creator: PROJECT_VARS.BRAND_NAME,
    publisher: PROJECT_VARS.BRAND_NAME,
    
    // Open Graph
    openGraph: {
      type,
      locale: 'en_IN',
      url: pageUrl,
      siteName: PROJECT_VARS.BRAND_NAME,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: '@geniustech', // Can be updated if Twitter handle is provided
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Verification (can be added later)
    // verification: {
    //   google: 'your-google-verification-code',
    //   yandex: 'your-yandex-verification-code',
    // },
    
    // Alternates
    alternates: {
      canonical: pageUrl,
    },
  };
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: PROJECT_VARS.BRAND_NAME,
    url: SITE_METADATA.siteUrl,
    logo: `${SITE_METADATA.siteUrl}/images/logo.svg`,
    description: PROJECT_VARS.DESCRIPTION,
    foundingDate: PROJECT_VARS.ESTABLISHED_YEAR,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: PROJECT_VARS.PRIMARY_CONTACT,
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      // Add social media profiles when available
    ],
  };
}

/**
 * Generate JSON-LD structured data for Website
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: PROJECT_VARS.BRAND_NAME,
    url: SITE_METADATA.siteUrl,
    description: PROJECT_VARS.DESCRIPTION,
    publisher: {
      '@type': 'Organization',
      name: PROJECT_VARS.BRAND_NAME,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_METADATA.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate JSON-LD structured data for BreadcrumbList
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_METADATA.siteUrl}${item.url}`,
    })),
  };
}

/**
 * Generate JSON-LD structured data for Service
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: PROJECT_VARS.BRAND_NAME,
    },
    url: `${SITE_METADATA.siteUrl}${service.url}`,
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };
}

/**
 * Generate JSON-LD structured data for FAQPage
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
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
}

/**
 * SEO-friendly URL slug generator
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Meta tags for Core Web Vitals optimization
 */
export const PERFORMANCE_HINTS = {
  'dns-prefetch': [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ],
  'preconnect': [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ],
} as const;
