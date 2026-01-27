
**Genius Technology – Corporate Website**

A modern, static, SEO-focused corporate website for Genius Technology, built using Next.js App Router and Tailwind CSS, following enterprise-grade UI/UX, performance, and scalability standards.

⸻

1. Project Summary
	•	Brand Name: Genius Technology
	•	Domain: geniustechnology.in
	•	Industry: IT / Software Development
	•	Target Audience: B2B / Enterprise (India)
	•	Business Type: Corporate
	•	Primary Email: info@geniustechnology.in
	•	Office Location: Vadodara, Gujarat, India

This project is built for static export, high Lighthouse scores, and long-term maintainability.

⸻

2. Tech Stack
	•	Framework: Next.js (App Router)
	•	Language: TypeScript / React
	•	Styling: Tailwind CSS
	•	Icons: lucide-react (no emojis used anywhere)
	•	Deployment Type: Static Export (output: 'export')
	•	Animations: CSS-based (no JS-heavy animation libraries)

⸻

3. Core Architecture
	•	App Router–based routing
	•	Server Components by default
	•	Client Components only where required (forms, modals, menus)
	•	Fully responsive (320px → 4K)
	•	No backend, database, or authentication
	•	Fake API calls only where mandated (Careers)

⸻

4. Pages Implemented

Core Pages (Completed)

Page	Route	Status
Home	/	Completed
About Us	/about	Completed
Services Overview	/services	Completed
Contact Us	/contact	Completed (with modal)
Careers	/careers	Completed (modal + fake API)
Portfolio / Case Studies	/portfolio	Completed
Why Choose Us	/why-choose-us	Completed
Our Process	/our-process	Completed
FAQ	/faq	Completed
Testimonials	/testimonials	Completed


⸻

5. Service Pages Implemented

Each service page follows a shared enterprise template:

Includes on every service page:
	•	Hero section
	•	Business-focused description
	•	Challenges solved
	•	Features / capabilities
	•	Process methodology
	•	Why choose us
	•	CTA section
	•	Related services component
	•	SEO metadata

Services Built

#	Service	Route	Status
1	Web Development	/services/web-development	Completed
2	App Development	/services/app-development	Completed
3	SEO Services	/services/seo-services	Completed
4	UI / UX Design	/services/ui-ux-design	Completed
5	Cloud Solutions	/services/cloud-solutions	Completed
6	DevOps Services	/services/devops-services	Completed
7	API Development	/services/api-development	Completed
8	Digital Marketing	/services/digital-marketing	Completed
9	ERP Solutions	/services/erp-solutions	Completed
10	Maintenance & Support	/services/maintenance-support	Completed
11	Software Consulting	/services/software-consulting	Completed
12	Custom Software Development	/services/custom-software-development	Completed
13	SaaS Product Development	/services/saas-product-development	Completed
14	AI & Automation Solutions	/services/ai-automation-solutions	Completed
15	Data Analytics & BI	/services/data-analytics-business-intelligence	Completed
16	Cybersecurity & Compliance	/services/cybersecurity-compliance-services	Completed
17	System Integration	/services/system-integration	Completed


⸻

6. Navigation System

Desktop
	•	Fixed header
	•	Sliding underline indicator
	•	Hover-triggered mega menu
	•	Categorised service grouping
	•	No accidental hover triggers

Mobile
	•	Locked body scroll
	•	Slide-in services panel
	•	Clean back navigation
	•	Fully accessible touch targets

⸻

7. Forms & Modal Behaviour

Contact Form
	•	Client-side only
	•	Loading spinner (1s)
	•	Success modal
	•	Auto-close after 3 seconds
	•	No API call

Careers Page (Special Spec)
	•	Job listings with “Apply” button
	•	Modal-based application form
	•	Required fields enforced
	•	Fake API call to:

https://geniustechnology.in/api/career-application


	•	API errors ignored safely
	•	Success modal shown regardless of response
	•	Auto-close after 3 seconds

⸻

8. UI Components Built
	•	Header with Mega Menu
	•	Footer with office details
	•	Service Cards
	•	ScrollItem (staggered scroll animation)
	•	ThankYouModal (reusable)
	•	LoadingSpinner
	•	Career Form Modal
	•	FAQ Accordion
	•	Testimonial Cards
	•	Related Services Component

⸻

9. Brand & Design Rules (Followed)
	•	Zero emojis across entire project
	•	Clean corporate typography
	•	Brand colour variables used globally
	•	Consistent spacing & layout rhythm
	•	No flashy or gimmicky animations
	•	Enterprise-first UI tone

⸻

10. SEO Implementation
	•	Per-page metadata using export const metadata
	•	Clean URLs
	•	Semantic HTML structure
	•	Ready for sitemap.xml & robots.txt
	•	Optimised for Indian search intent

⸻

11. Static Export Compatibility
	•	No server-only APIs
	•	No runtime databases
	•	No cookies or auth
	•	Compatible with:

npm run build
npm run export



⸻

12. What Is Intentionally NOT Included
	•	Newsletter signup
	•	WhatsApp integration
	•	Chat widgets
	•	Team page
	•	Authentication
	•	Payments
	•	Multi-language
	•	Real client names
	•	External APIs (except fake career API)

⸻

13. Project Status

Overall Build Status:
🟢 Core architecture complete
🟢 Navigation & services complete
🟢 Forms & modals implemented
🟢 25+ pages achieved
🟢 Ready for final polish & deployment

⸻

14. Next Optional Improvements
	•	Add Privacy Policy page
	•	Add Terms of Service page
	•	Add sitemap.xml & robots.txt
	•	Final Lighthouse optimisation
	•	Content length expansion where needed (SEO)

⸻

15. Maintainer Notes

This project is designed for:
	•	Long-term scalability
	•	Easy service additions
	•	Static hosting (Netlify / Vercel / S3)
	•	SEO growth without refactors

⸻

© Genius Technology – All Rights Reserved

