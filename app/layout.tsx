import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

import NavigateCursor from "@/components/ui/NavigateCursor";
import StaticCursor from "@/components/ui/StaticCursor";
import { generatePageMetadata, generateOrganizationSchema, generateWebsiteSchema } from "@/utils/seo";
import { PROJECT_VARS } from "@/utils/constants";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Auto-generated SEO metadata from company data
export const metadata: Metadata = generatePageMetadata({
  title: `${PROJECT_VARS.BRAND_NAME} | ${PROJECT_VARS.INDUSTRY}`,
  description: PROJECT_VARS.DESCRIPTION,
  keywords: PROJECT_VARS.SEO_KEYWORDS,
  path: '/',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate structured data schemas
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Preconnect to optimize font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={outfit.className}>
        <StaticCursor/>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
