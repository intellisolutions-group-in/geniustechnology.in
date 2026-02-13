# Maintenance Guide - Genius Technology Website

**Project:** geniustechnology.in  
**Framework:** Next.js 16.1.6 (Static Export)  
**Last Updated:** ${new Date().toISOString()}

---

## 📋 TABLE OF CONTENTS

1. [Regular Maintenance Tasks](#regular-maintenance-tasks)
2. [Content Updates](#content-updates)
3. [Technical Updates](#technical-updates)
4. [Performance Monitoring](#performance-monitoring)
5. [Security Updates](#security-updates)
6. [Troubleshooting](#troubleshooting)
7. [Emergency Procedures](#emergency-procedures)

---

## 🔄 REGULAR MAINTENANCE TASKS

### Daily Tasks (Automated Monitoring)

- **Uptime Monitoring:** Set up UptimeRobot or similar service
- **Error Monitoring:** Check Sentry or logging service for errors
- **Performance:** Monitor Core Web Vitals via Google Search Console

### Weekly Tasks (15-30 minutes)

1. **Check Website Health:**
   ```bash
   # Run local dev server to test
   npm run dev
   ```
   - Test all critical pages load correctly
   - Verify forms are working
   - Check for broken links

2. **Review Analytics:**
   - Check Google Analytics for traffic patterns
   - Review top pages and user behavior
   - Monitor bounce rate and conversions

3. **Search Console Check:**
   - Review Google Search Console for crawl errors
   - Check index coverage status
   - Monitor search performance

### Monthly Tasks (1-2 hours)

1. **Update Dependencies:**
   ```bash
   # Check for outdated packages
   npm outdated
   
   # Update dependencies (be cautious with major versions)
   npm update
   
   # Rebuild and test
   npm run build
   npm run preview
   ```

2. **Content Review:**
   - Update outdated information
   - Refresh testimonials if new ones available
   - Review and update service descriptions
   - Check portfolio case studies are current

3. **Performance Audit:**
   - Run Lighthouse audit on live site
   - Check Core Web Vitals
   - Optimize any underperforming pages
   - Review and compress new images if added

4. **Security Check:**
   - Review security headers
   - Check SSL certificate expiry
   - Update any security-related dependencies
   - Review access logs for suspicious activity

### Quarterly Tasks (2-4 hours)

1. **Comprehensive Content Audit:**
   - Review all page content for accuracy
   - Update company metrics and achievements
   - Refresh case studies with latest results
   - Update team information if changes

2. **Technical Audit:**
   - Full dependency update review
   - Code quality review
   - Accessibility audit (WCAG 2.1 AA)
   - Browser compatibility testing

3. **SEO Review:**
   - Keyword performance analysis
   - Competitor analysis
   - Update meta descriptions if needed
   - Review and update structured data

4. **Backup Verification:**
   - Verify automated backups are running
   - Test backup restoration process
   - Update backup retention policy

---

## ✏️ CONTENT UPDATES

### Updating Company Information

**File Location:** `/data/company.json`

```json
{
  "brandName": "Genius Technology",
  "description": "Update this description...",
  "metrics": {
    "projectsDelivered": "150+",  // Update as needed
    "activeClients": "85+",       // Update as needed
    "yearsExperience": "10+"      // Update as needed
  }
}
```

**After updating:**
```bash
npm run build
# Deploy updated build
```

### Adding/Updating Services

**File Location:** `/data/services.json`

To add a new service:
```json
{
  "id": "new-service",
  "name": "New Service Name",
  "slug": "new-service",
  "shortDescription": "Brief description...",
  "fullDescription": "Detailed description...",
  "icon": "IconName",
  "features": ["Feature 1", "Feature 2"],
  "technologies": ["Tech1", "Tech2"],
  "cta": "Get Started",
  "ctaLink": "/contact"
}
```

**Create service page:**
Create file: `/app/services/new-service/page.tsx`

### Updating Testimonials

**File Location:** `/data/testimonials.json`

Add new testimonial:
```json
{
  "id": "testimonial-7",
  "name": "Client Name",
  "role": "Job Title",
  "company": "Company Name",
  "image": "/images/testimonials/client-7.jpg",
  "rating": 5,
  "quote": "Client feedback here...",
  "projectType": "Project Type"
}
```

### Adding Portfolio Projects

**File Location:** `/data/portfolio.json`

Add new project:
```json
{
  "id": "portfolio-4",
  "title": "Project Name",
  "slug": "project-slug",
  "client": "Client Name",
  "industry": "Industry",
  "year": "2024",
  "category": "Category",
  "thumbnail": "/images/portfolio/project.jpg",
  "shortDescription": "Brief description...",
  "fullDescription": "Detailed description...",
  "challenge": "The challenge...",
  "solution": "Our solution...",
  "results": ["Result 1", "Result 2"],
  "technologies": ["Tech1", "Tech2"],
  "features": ["Feature 1", "Feature 2"],
  "images": ["/images/portfolio/project-1.jpg"]
}
```

**Create portfolio page:**
Create file: `/app/portfolio/project-slug/page.tsx`

### Updating FAQ

**File Location:** `/data/faq.json`

Add new FAQ:
```json
{
  "id": "faq-11",
  "category": "Category",
  "question": "Your question here?",
  "answer": "Your detailed answer here..."
}
```

### Adding Blog Posts (If Blog Feature Enabled)

**File Location:** `/data/blog/` directory

Create markdown file: `post-slug.md`

```markdown
---
title: "Post Title"
date: "2024-02-13"
author: "Author Name"
category: "Category"
excerpt: "Brief excerpt..."
---

Post content here in markdown...
```

---

## 🔧 TECHNICAL UPDATES

### Updating Next.js

```bash
# Check current version
npm list next

# Update to latest version
npm install next@latest react@latest react-dom@latest

# Test thoroughly
npm run build
npm run preview

# If issues, rollback
npm install next@16.1.6 react@19.2.3 react-dom@19.2.3
```

### Updating Tailwind CSS

```bash
# Update Tailwind
npm install tailwindcss@latest @tailwindcss/postcss@latest

# Rebuild
npm run build
```

### Adding New Dependencies

```bash
# Install new package
npm install package-name

# Update package.json manually if needed
# Always test after adding dependencies
npm run build
```

### Environment Variables

If you need to add environment variables (analytics, API keys):

1. Create `.env.local`:
```env
NEXT_PUBLIC_GA_ID=GA-XXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

2. Update code to use variables:
```typescript
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
```

3. Update deployment platform with environment variables

---

## 📊 PERFORMANCE MONITORING

### Key Metrics to Track

1. **Lighthouse Scores:**
   - Performance: 95+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

2. **Core Web Vitals:**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

3. **Page Load Speed:**
   - First Contentful Paint: < 1.5s
   - Time to Interactive: < 3.5s
   - Total Blocking Time: < 300ms

### Tools for Monitoring

1. **Google Search Console:**
   - Core Web Vitals report
   - Mobile usability
   - Index coverage

2. **PageSpeed Insights:**
   - https://pagespeed.web.dev/
   - Test both mobile and desktop
   - Follow optimization suggestions

3. **Lighthouse CI:**
   ```bash
   npm install -g @lhci/cli
   lhci autorun --collect.url=https://geniustechnology.in
   ```

4. **WebPageTest:**
   - https://www.webpagetest.org/
   - Detailed performance analysis
   - Waterfall charts

### Performance Optimization Tips

1. **Image Optimization:**
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Lazy load below-the-fold images
   - Use appropriate image sizes

2. **Code Optimization:**
   - Remove unused dependencies
   - Code splitting for large components
   - Minimize third-party scripts
   - Use dynamic imports where appropriate

3. **Caching:**
   - Configure proper cache headers
   - Use CDN for static assets
   - Implement service workers (PWA)

---

## 🔒 SECURITY UPDATES

### Regular Security Tasks

1. **Dependency Audits:**
   ```bash
   # Check for vulnerabilities
   npm audit
   
   # Fix automatically if possible
   npm audit fix
   
   # For manual fixes
   npm audit fix --force
   ```

2. **SSL Certificate:**
   - Monitor expiry date (auto-renew with Let's Encrypt)
   - Verify HTTPS redirects working
   - Check SSL configuration (SSLLabs.com)

3. **Security Headers:**
   Verify these headers are set:
   ```
   Content-Security-Policy: default-src 'self'
   X-Frame-Options: DENY
   X-Content-Type-Options: nosniff
   Referrer-Policy: strict-origin-when-cross-origin
   Permissions-Policy: camera=(), microphone=(), geolocation=()
   ```

4. **Access Control:**
   - Review who has deployment access
   - Rotate API keys annually
   - Use strong passwords
   - Enable 2FA on all accounts

---

## 🔍 TROUBLESHOOTING

### Common Issues

#### Issue: Build Fails

**Symptoms:**
- `npm run build` returns errors
- TypeScript compilation errors

**Solutions:**
1. Check error messages carefully
2. Delete `node_modules` and `.next`:
   ```bash
   Remove-Item -Recurse -Force node_modules
   Remove-Item -Recurse -Force .next
   npm install
   npm run build
   ```
3. Check for syntax errors in recently modified files
4. Verify all imports are correct

#### Issue: Pages Return 404

**Symptoms:**
- Pages work in development but not production
- Routes not found after deployment

**Solutions:**
1. Verify `output: "export"` in `next.config.ts`
2. Check all pages are in `/out` after build
3. Ensure server is configured for SPA routing
4. Clear CDN cache

#### Issue: Images Not Loading

**Symptoms:**
- Broken image icons
- 404 errors for images

**Solutions:**
1. Verify images are in `/public` directory
2. Check image paths start with `/`
3. Ensure `images: { unoptimized: true }` in config
4. Clear browser cache
5. Check file extensions match code (case-sensitive)

#### Issue: Slow Performance

**Symptoms:**
- Lighthouse score below 90
- Slow page load times

**Solutions:**
1. Run Lighthouse audit to identify issues
2. Optimize images (compress, use WebP)
3. Enable CDN
4. Check for large JavaScript bundles
5. Remove unused dependencies
6. Enable compression on server

#### Issue: Forms Not Submitting

**Symptoms:**
- Contact form doesn't send emails
- No confirmation message

**Solutions:**
1. Check form endpoint configuration
2. Verify email service is working
3. Check browser console for errors
4. Test form validation
5. Verify CORS if using external API

---

## 🚨 EMERGENCY PROCEDURES

### Website Down

**Immediate Actions:**

1. **Check Hosting Status:**
   - Login to hosting provider dashboard
   - Check for service outages
   - Review recent deployments

2. **Verify DNS:**
   ```bash
   nslookup geniustechnology.in
   ```
   - Ensure DNS is resolving correctly
   - Check DNS propagation

3. **Check SSL Certificate:**
   - Verify certificate hasn't expired
   - Check SSL configuration

4. **Rollback if Needed:**
   ```bash
   # Vercel
   vercel rollback
   
   # Or redeploy previous version
   git checkout previous-commit
   vercel --prod
   ```

### Critical Bug Found

1. **Assess Severity:**
   - Does it affect all users?
   - Is data at risk?
   - Can it be temporarily worked around?

2. **Quick Fix:**
   - Fix the specific issue
   - Test locally
   - Deploy immediately
   - Monitor closely

3. **Post-Mortem:**
   - Document the issue
   - Identify root cause
   - Implement prevention measures

### Security Breach

1. **Immediate Response:**
   - Take site offline if necessary
   - Change all passwords and API keys
   - Review access logs
   - Contact hosting provider

2. **Investigation:**
   - Identify breach method
   - Check for data exposure
   - Review recent code changes
   - Scan for malware

3. **Recovery:**
   - Fix vulnerability
   - Restore from clean backup
   - Deploy secured version
   - Monitor for 24-48 hours

---

## 📞 SUPPORT CONTACTS

### Primary Contact
- **Email:** info@geniustechnology.in
- **Response Time:** Within 24 hours

### Hosting Provider Support
- Check your hosting provider's documentation
- Keep support contact information handy

### Third-Party Services
- **Vercel Support:** vercel.com/support
- **Netlify Support:** netlify.com/support
- **AWS Support:** Based on your support plan

---

## 📝 MAINTENANCE LOG

Keep a record of all maintenance activities:

| Date | Activity | Performed By | Notes |
|------|----------|--------------|-------|
| 2024-02-13 | Initial deployment | Developer | First production release |
| | | | |
| | | | |

---

## ✅ MAINTENANCE CHECKLIST

### Weekly
- [ ] Check website uptime and performance
- [ ] Review analytics for unusual patterns
- [ ] Check Google Search Console for errors
- [ ] Verify forms are working

### Monthly
- [ ] Update dependencies (`npm update`)
- [ ] Content review and updates
- [ ] Performance audit
- [ ] Security check (`npm audit`)
- [ ] Backup verification

### Quarterly
- [ ] Comprehensive content audit
- [ ] Full technical audit
- [ ] SEO review and optimization
- [ ] Accessibility audit
- [ ] User experience review

### Annually
- [ ] Major dependency updates
- [ ] Complete security audit
- [ ] Design refresh evaluation
- [ ] Feature additions review
- [ ] Hosting plan review

---

**Last Maintenance:** _____________________  
**Next Scheduled:** _____________________  
**Performed By:** _____________________

---

For additional support or questions, contact the development team at info@geniustechnology.in
