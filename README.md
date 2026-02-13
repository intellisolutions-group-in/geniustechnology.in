# 🚀 Genius Technology Website

**Domain:** [geniustechnology.in](https://geniustechnology.in)  
**Framework:** Next.js 16.1.6 with Static Export  
**Status:** ✅ Production Ready

---

## 📊 Project Overview

This is a modern, SEO-optimized static website for **Genius Technology** - an IT services and software development company delivering reliable, scalable, and business-focused digital solutions.

### Key Features

- ✅ **100% Static Export** - Blazing fast, fully static HTML/CSS/JS
- ✅ **SEO Optimized** - Complete structured data, meta tags, sitemap
- ✅ **Mobile First** - Responsive design for all devices
- ✅ **Performance Optimized** - Target: 95+ Lighthouse score
- ✅ **Type Safe** - TypeScript for reliability
- ✅ **Modern Stack** - Next.js 16, React 19, Tailwind CSS v4

---

## 🏗️ Project Structure

```
geniustechnology.in/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Home page
│   ├── about/                   # About page
│   ├── services/                # Service pages (17 services)
│   ├── portfolio/               # Portfolio case studies
│   ├── contact/                 # Contact page
│   ├── faq/                     # FAQ page
│   ├── testimonials/            # Testimonials page
│   ├── sitemap.ts               # Auto-generated sitemap
│   └── robots.ts                # Auto-generated robots.txt
│
├── components/                   # React components
│   ├── layout/                  # Layout components (Header, Footer)
│   ├── sections/                # Page sections
│   └── ui/                      # UI components
│
├── data/                         # Content data (JSON)
│   ├── company.json             # Company information
│   ├── services.json            # Services data
│   ├── testimonials.json        # Client testimonials
│   ├── faq.json                 # FAQ content
│   └── portfolio.json           # Portfolio projects
│
├── utils/                        # Utility functions
│   ├── constants.ts             # Project constants & config
│   └── seo.ts                   # SEO utilities & schemas
│
├── public/                       # Static assets
│   └── images/                  # Images & icons
│
├── out/                          # Build output (generated)
│
├── DEPLOYMENT_GUIDE.md          # Deployment instructions
├── MAINTENANCE_GUIDE.md         # Maintenance procedures
├── PROJECT_SPECIFICATIONS.md    # Complete specifications
└── QA_REPORT.md                 # Quality assurance report
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Clone or navigate to project directory
cd geniustechnology.in

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production Build
npm run build        # Build for production (generates /out directory)

# Preview Build
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint
```

---

## 🎨 Company Information

### Brand Identity
- **Name:** Genius Technology
- **Tagline:** Take the complexity out of digital transformation
- **Established:** 2016
- **Domain Registered:** 2018-01-11
- **Industry:** IT Services & Software Development

### Brand Colors
- **Primary:** #2563eb (Blue 600)
- **Secondary:** #1e40af (Blue 800)
- **Accent:** #3b82f6 (Blue 500)

### Key Services (6)
1. Web Development
2. App Development
3. SEO Services
4. UI/UX Design
5. Cloud Solutions
6. Maintenance & Support

### Metrics
- **150+** Projects Delivered
- **85+** Active Clients
- **10+** Years Experience
- **24/7** Support Availability

---

## 📄 Site Pages (44 Total)

### Core Pages
- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Portfolio (`/portfolio`)
- Contact (`/contact`)
- FAQ (`/faq`)
- Testimonials (`/testimonials`)
- Why Choose Us (`/why-choose-us`)
- Our Process (`/our-process`)
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)

### 17 Service Pages
All services under `/services/[service-slug]`

### 3 Portfolio Case Studies
Detailed project showcases under `/portfolio/[project-slug]`

---

## 🔍 SEO Features

### Meta Tags
- ✅ Dynamic title tags with brand name
- ✅ Optimized meta descriptions
- ✅ Strategic keyword integration
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Canonical URLs

### Structured Data (JSON-LD)
- ✅ Organization schema
- ✅ Website schema
- ✅ Service schemas
- ✅ BreadcrumbList schema
- ✅ FAQ schema support

### Site Files
- ✅ XML Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Proper indexing configuration

---

## 🛠️ Technology Stack

### Core
- **Framework:** Next.js 16.1.6 (App Router)
- **React:** 19.2.3
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

### Build & Deploy
- **Build Output:** Static Export (`output: "export"`)
- **Deployment:** Vercel, Netlify, AWS S3, or any static host
- **CDN:** Recommended (Cloudflare, CloudFront)

---

## 📝 Content Management

All content is managed through JSON files in the `/data` directory:

### Update Company Info
Edit `/data/company.json` - brand name, description, metrics, etc.

### Manage Services
Edit `/data/services.json` - add, remove, or modify services

### Update Testimonials
Edit `/data/testimonials.json` - client feedback and ratings

### Manage FAQ
Edit `/data/faq.json` - questions and answers

### Portfolio Projects
Edit `/data/portfolio.json` - case studies and results

After editing data files, rebuild:
```bash
npm run build
```

---

## 🚀 Deployment

### Recommended: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Alternative: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=out
```

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload contents of `/out` directory to your hosting provider

3. Configure DNS to point to your host

4. Enable HTTPS/SSL

For detailed deployment instructions, see **DEPLOYMENT_GUIDE.md**

---

## 🔧 Configuration

### Environment Variables (Optional)

Create `.env.local` for analytics and tracking:

```env
NEXT_PUBLIC_GA_ID=GA-XXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Next.js Config

See `next.config.ts` for configuration options.

### Tailwind Config

Customize styling in Tailwind CSS configuration if needed.

---

## 📊 Performance Targets

### Lighthouse Scores (Target)
- 🎯 **Performance:** 95+
- ♿ **Accessibility:** 95+
- 🔧 **Best Practices:** 95+
- 🔍 **SEO:** 95+

### Core Web Vitals
- ⏱️ **LCP:** < 2.5s
- ⚡ **FID:** < 100ms
- 📐 **CLS:** < 0.1

---

## 🔐 Security

- ✅ No hardcoded secrets
- ✅ Environment variables for sensitive data
- ✅ HTTPS enforcement recommended
- ✅ Security headers configuration documented
- ✅ Regular dependency audits

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| **PROJECT_SPECIFICATIONS.md** | Complete project specifications and requirements |
| **DEPLOYMENT_GUIDE.md** | Step-by-step deployment instructions |
| **MAINTENANCE_GUIDE.md** | Ongoing maintenance and update procedures |
| **QA_REPORT.md** | Quality assurance validation report |
| **README.md** | This file - project overview and quick start |

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clean install
Remove-Item -Recurse -Force node_modules, .next
npm install
npm run build
```

### Images Not Loading
- Ensure images are in `/public` directory
- Check paths start with `/`
- Verify `images: { unoptimized: true }` in config

### TypeScript Errors
- Check import paths are correct
- Ensure all type definitions are available
- Review error messages in terminal

For more troubleshooting, see **MAINTENANCE_GUIDE.md**

---

## 🤝 Contributing

### Adding New Features

1. Create feature branch
2. Make changes
3. Test thoroughly (`npm run build`)
4. Update documentation
5. Submit for review

### Code Style

- Use TypeScript for type safety
- Follow existing component patterns
- Keep components small and reusable
- Document complex logic

---

## 📞 Support & Contact

- **Primary Email:** info@geniustechnology.in
- **Website:** https://geniustechnology.in
- **Documentation:** See docs in root directory

---

## 📋 Maintenance Schedule

### Weekly
- Check uptime and performance
- Review analytics
- Monitor search console

### Monthly
- Update dependencies
- Content review
- Performance audit
- Security check

### Quarterly
- Comprehensive audit
- SEO review
- Accessibility check
- Design refresh evaluation

See **MAINTENANCE_GUIDE.md** for detailed procedures.

---

## ✅ Quality Assurance

✅ **Build Status:** Production Ready  
✅ **Pages Generated:** 44  
✅ **SEO Configuration:** Complete  
✅ **Documentation:** Comprehensive  
✅ **Performance:** Optimized  

See **QA_REPORT.md** for full validation details.

---

## 📜 License

Copyright © 2016-2024 Genius Technology. All rights reserved.

---

## 🎯 Project Status

| Phase | Status |
|-------|--------|
| ✅ **Phase 1:** Domain Research & Data Discovery | COMPLETED |
| ✅ **Phase 2:** Design System & Project Structure | COMPLETED |
| ✅ **Phase 3:** Content Population & SEO | COMPLETED |
| ✅ **Phase 4:** QA Validation & Testing | COMPLETED |
| ✅ **Phase 5:** Documentation & Deliverables | COMPLETED |

**Status:** ✅ **PRODUCTION READY - APPROVED FOR DEPLOYMENT**

---

**Built with ❤️ for Genius Technology**  
**Framework:** Next.js | **Styling:** Tailwind CSS | **Language:** TypeScript
