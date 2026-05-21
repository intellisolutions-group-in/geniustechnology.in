// Auto-generated constants from company data
// Domain: geniustechnology.in | Registered: 2018-01-11

export const PROJECT_VARS = {
  // Brand Information
  BRAND_NAME: "Genius Technology",
  DOMAIN: "geniustechnology.in",
  INDUSTRY: "IT Services & Software Development",
  ESTABLISHED_YEAR: "2018",
  DOMAIN_REGISTERED: "2018-01-11",
  
  // Contact Information
  PRIMARY_CONTACT: "info@geniustechnology.in",
  
  // Business Details
  BUSINESS_TYPE: "Corporate",
  TARGET_AUDIENCE: "B2B, Enterprise, Growing Businesses, Startups",
  TARGET_COUNTRIES: ["IN"],
  COMPANY_SIZE: "Medium",
  
  // Brand Colors
  PRIMARY_COLOR: "#2563eb",
  SECONDARY_COLOR: "#1e40af",
  ACCENT_COLOR: "#3b82f6",
  
  // Services
  SERVICES_COUNT: 6,
  KEY_SERVICES: [
    "Web Development",
    "App Development",
    "SEO Services",
    "UI/UX Design",
    "Cloud Solutions",
    "Maintenance & Support"
  ],
  
  // SEO Keywords
  SEO_KEYWORDS: [
    "IT services India",
    "software development company",
    "web development services",
    "mobile app development",
    "cloud solutions",
    "digital transformation",
    "enterprise software development",
    "custom software solutions",
    "UI UX design services",
    "SEO optimization services"
  ],
  
  // Company Tagline & Description
  TAGLINE: "Take the complexity out of digital transformation",
  DESCRIPTION: "Genius Technology is an IT services and software development company focused on delivering practical, scalable, and reliable digital solutions for modern businesses.",
  
  // Metrics
  METRICS: {
    PROJECTS_DELIVERED: "150+",
    ACTIVE_CLIENTS: "85+",
    YEARS_EXPERIENCE: "8",
    SUPPORT_AVAILABILITY: "24/7"
  },
  
  // Features Configuration
  SHOW_NEWSLETTER: false,
  SHOW_TESTIMONIALS: true,
  SHOW_FAQ: true,
  SHOW_BLOG: false,
  SHOW_PORTFOLIO: true,
  SHOW_TEAM_PAGE: false,
  SHOW_CHAT_WIDGET: false,
  SHOW_MULTI_LANGUAGE: false,
  
  // Social Media (Optional - can be added later)
  SOCIAL_INSTAGRAM: null,
  SOCIAL_TWITTER: null,
  SOCIAL_FACEBOOK: null,
  SOCIAL_LINKEDIN: null,
  SOCIAL_YOUTUBE: null,
  
  // Analytics (Optional - can be added later)
  GOOGLE_ANALYTICS_ID: null,
  GOOGLE_TAG_MANAGER_ID: null,
  FACEBOOK_PIXEL_ID: null,
  HOTJAR_ID: null,
} as const;

// Conditional rendering logic
export const CONDITIONAL_RENDERING = {
  showPhone: false,
  showWhatsApp: false,
  showAddress: false,
  showSocialMedia: false,
  socialMediaCount: 0,
  
  // Logo configuration
  hasCustomLogo: false,
  logoFormat: "svg",
  
  // Features
  showNewsletter: false,
  showTestimonials: true,
  showFAQ: true,
  showBlog: false,
  showPortfolio: true,
  showTeamPage: false,
  showChatWidget: false,
  showMultiLanguage: false,
  
  // Analytics
  hasAnalytics: false,
} as const;

// Color System
export const COLOR_SYSTEM = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  neutral: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  semantic: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },
} as const;

// Foundation Date Calculation Logic
export const calculateFoundationYear = (domainYear: number, industry: string): number => {
  const industryOffset: Record<string, number> = {
    "Technology": -1,
    "IT Services": -2,
    "Finance": -2,
    "Healthcare": -2,
    "Manufacturing": -3,
    "Startup": 0,
    "Default": -1
  };
  
  const offset = industryOffset[industry] || industryOffset["Default"];
  return domainYear + offset;
};

// Export metadata for SEO
export const SITE_METADATA = {
  title: "Genius Technology | Official Website | IT Solutions in India",
  description: "Genius Technology is the official website for IT Solutions. Operating in India. Visit our About and Contact pages for verification and business details.",
  keywords: PROJECT_VARS.SEO_KEYWORDS.join(", "),
  author: PROJECT_VARS.BRAND_NAME,
  siteUrl: `https://${PROJECT_VARS.DOMAIN}`,
  ogImage: `/images/og-image.jpg`,
  twitterCard: "summary_large_image",
} as const;
