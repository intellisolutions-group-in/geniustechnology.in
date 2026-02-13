# Deployment Guide - Genius Technology Website

**Project:** geniustechnology.in  
**Framework:** Next.js 16.1.6 (Static Export)  
**Generated:** ${new Date().toISOString()}

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### ✅ Required Items
- [ ] Domain DNS configured to point to hosting provider
- [ ] SSL certificate provisioned for HTTPS
- [ ] All environment variables configured (if any)
- [ ] Build completes successfully without errors
- [ ] Lighthouse audit shows 95+ score
- [ ] All pages tested on multiple devices and browsers

---

## 🏗️ BUILD PROCESS

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build for Production
```bash
npm run build
```

This command will:
- Compile TypeScript code
- Generate optimized static HTML/CSS/JS
- Create SEO files (sitemap.xml, robots.txt)
- Output production files to `/out` directory

### Step 3: Preview Build Locally (Optional)
```bash
npm run preview
```

This starts a local server to preview the production build at `http://localhost:3000`

---

## 🚀 DEPLOYMENT OPTIONS

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Built by Next.js creators
- Zero-configuration deployment
- Automatic HTTPS
- Global CDN
- Free SSL certificates

**Deployment Steps:**

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel --prod
```

4. **Configure Custom Domain:**
   - Go to Vercel dashboard
   - Project Settings → Domains
   - Add `geniustechnology.in` and `www.geniustechnology.in`
   - Follow DNS configuration instructions

**DNS Configuration for Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

### Option 2: Netlify

**Deployment Steps:**

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Login:**
```bash
netlify login
```

3. **Deploy:**
```bash
netlify deploy --prod --dir=out
```

4. **Configure Custom Domain:**
   - Netlify Dashboard → Domain Settings
   - Add custom domain `geniustechnology.in`

**DNS Configuration for Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

---

### Option 3: AWS S3 + CloudFront

**Step 1: Upload to S3**

1. Create S3 bucket named `geniustechnology.in`
2. Enable static website hosting
3. Upload contents of `/out` directory
4. Set bucket policy for public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::geniustechnology.in/*"
    }
  ]
}
```

**Step 2: Configure CloudFront**

1. Create CloudFront distribution
2. Set origin to S3 bucket
3. Enable HTTPS with ACM certificate
4. Set default root object to `index.html`
5. Configure custom error responses for SPA routing

**DNS Configuration:**
```
Type: A (Alias)
Name: @
Value: [CloudFront Distribution Domain]

Type: CNAME
Name: www
Value: [CloudFront Distribution Domain]
```

---

### Option 4: GitHub Pages

**Deployment Steps:**

1. **Create GitHub Repository:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/geniustechnology.in.git
git push -u origin main
```

2. **Add GitHub Actions Workflow:**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

3. **Configure GitHub Pages:**
   - Repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Folder: / (root)

4. **Add Custom Domain:**
   - Add `CNAME` file in `/public` with content: `geniustechnology.in`

---

## 🔧 DNS CONFIGURATION

### For .in Domain (Indian Registry)

**Nameservers (If using hosting provider's DNS):**
- Point nameservers to your hosting provider
- Example for Cloudflare:
  ```
  ns1.cloudflare.com
  ns2.cloudflare.com
  ```

**A Records (If using custom DNS):**
```
Type: A
Name: @
Value: [Your hosting IP]
TTL: 3600

Type: A
Name: www
Value: [Your hosting IP]
TTL: 3600
```

**HTTPS/SSL:**
- Ensure SSL certificate is configured
- Redirect HTTP to HTTPS
- Enable HSTS (HTTP Strict Transport Security)

---

## ⚡ PERFORMANCE OPTIMIZATION

### Post-Deployment Optimizations

1. **Enable Compression:**
   - Gzip or Brotli compression on server
   - Most modern hosts enable this by default

2. **Configure Cache Headers:**
```
# Static assets (1 year)
Cache-Control: public, max-age=31536000, immutable

# HTML files (no cache)
Cache-Control: no-cache, must-revalidate
```

3. **Enable CDN:**
   - Cloudflare (Free tier available)
   - AWS CloudFront
   - Fastly

4. **Set Up Monitoring:**
   - Google Analytics (if GA ID provided)
   - Google Search Console
   - UptimeRobot for uptime monitoring
   - Sentry for error tracking (optional)

---

## 🔍 POST-DEPLOYMENT SEO TASKS

### Immediate Tasks (Day 1)

1. **Submit Sitemap to Google:**
   - Go to Google Search Console
   - Add property: `https://geniustechnology.in`
   - Submit sitemap: `https://geniustechnology.in/sitemap.xml`

2. **Verify robots.txt:**
   - Visit `https://geniustechnology.in/robots.txt`
   - Ensure it's accessible and correct

3. **Test Structured Data:**
   - Use Google Rich Results Test
   - Verify Organization and Website schemas

4. **Check Mobile Usability:**
   - Google Mobile-Friendly Test
   - Test all key pages

### Week 1 Tasks

1. **Performance Monitoring:**
   - Run Lighthouse audit on live site
   - Target: 95+ score on all metrics
   - Fix any issues found

2. **Cross-Browser Testing:**
   - Chrome, Firefox, Safari, Edge
   - Mobile: iOS Safari, Android Chrome
   - Fix any compatibility issues

3. **Set Up Analytics:**
   - Configure Google Analytics 4
   - Set up conversion tracking
   - Monitor Core Web Vitals

4. **Monitor Search Console:**
   - Check for crawl errors
   - Monitor index coverage
   - Fix any issues reported

---

## 🛡️ SECURITY CHECKLIST

- [ ] HTTPS enabled with valid SSL certificate
- [ ] Security headers configured:
  - Content-Security-Policy
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
- [ ] No sensitive data in source code
- [ ] Environment variables properly secured
- [ ] Regular security updates scheduled

---

## 📊 MONITORING & MAINTENANCE

### Regular Tasks

**Weekly:**
- Check website uptime and performance
- Review Google Search Console for errors
- Monitor Core Web Vitals

**Monthly:**
- Update dependencies: `npm update`
- Review analytics and traffic patterns
- Check for broken links
- Update content as needed

**Quarterly:**
- Full security audit
- Performance optimization review
- Content refresh and SEO updates
- Backup verification

---

## 🆘 TROUBLESHOOTING

### Build Fails

**Issue:** `npm run build` fails with errors

**Solutions:**
1. Delete `node_modules` and `.next` directories
2. Run `npm install` again
3. Check for TypeScript errors
4. Ensure all imports are correct

### Pages Not Loading

**Issue:** 404 errors on page routes

**Solutions:**
1. Verify all pages are in `/out` directory after build
2. Check server routing configuration
3. Ensure `output: "export"` is set in `next.config.ts`

### Images Not Displaying

**Issue:** Images showing broken links

**Solutions:**
1. Verify images are in `/public` directory
2. Check image paths are correct (start with `/`)
3. Ensure `images: { unoptimized: true }` in config

### Slow Performance

**Issue:** Lighthouse score below 95

**Solutions:**
1. Enable CDN
2. Optimize images (WebP format)
3. Enable compression
4. Check for render-blocking resources
5. Minimize JavaScript bundle size

---

## 📞 SUPPORT & CONTACTS

### Technical Support
- **Email:** info@geniustechnology.in
- **Emergency:** Use hosting provider's support

### Resources
- **Next.js Documentation:** https://nextjs.org/docs
- **Deployment Guide:** https://nextjs.org/docs/deployment
- **Static Export:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports

---

## ✅ DEPLOYMENT SUCCESS CHECKLIST

- [ ] Website accessible at https://geniustechnology.in
- [ ] HTTPS working with valid certificate
- [ ] All pages loading correctly
- [ ] Mobile responsive on all devices
- [ ] Lighthouse score 95+ on all metrics
- [ ] Sitemap submitted to Google Search Console
- [ ] robots.txt accessible and correct
- [ ] Analytics configured (if IDs provided)
- [ ] No console errors or warnings
- [ ] Contact form functioning properly
- [ ] All images loading correctly
- [ ] DNS propagated globally (24-48 hours)

---

**Deployment Date:** _____________________  
**Deployed By:** _____________________  
**Hosting Provider:** _____________________  
**Go-Live Confirmed:** _____________________

---

**🎉 Congratulations! Your website is now live!**

For maintenance and support, refer to the maintenance guide or contact Genius Technology support.
