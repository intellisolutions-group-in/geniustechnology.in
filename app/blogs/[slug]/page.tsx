import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  ChevronRight,
  Share2,
  Bookmark,
} from "lucide-react";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  imageColor: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "future-ai-enterprise-software-development",
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Explore how artificial intelligence is revolutionizing the way enterprises build, deploy, and maintain software solutions for modern businesses.",
    category: "Artificial Intelligence",
    author: "Rahul Patel",
    authorRole: "Senior AI Engineer",
    authorImage: "",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    imageColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
    content: `
Introduction

Artificial Intelligence is no longer just a buzzword in enterprise software development—it's becoming the backbone of modern business operations. From automated code generation to intelligent testing and deployment, AI is transforming every aspect of the software development lifecycle.

The Current State of AI in Enterprise

Enterprises are increasingly adopting AI-powered tools to accelerate development cycles, reduce errors, and improve code quality. According to recent industry reports, over 70% of enterprises are already using some form of AI in their software development processes.

Key Applications

1. Code Generation and Completion
Modern AI coding assistants can generate entire functions, classes, and even entire modules based on natural language descriptions or existing code patterns.

2. Automated Testing
AI-powered testing tools can automatically generate test cases, identify edge cases, and predict potential failures before they occur in production.

3. Intelligent Code Review
Machine learning algorithms can analyze code changes, identify potential bugs, security vulnerabilities, and performance issues in real-time.

Benefits for Enterprise

Increased Productivity
Development teams can focus on higher-level architectural decisions while AI handles repetitive coding tasks.

Improved Code Quality
AI-powered static analysis catches bugs and security issues that human reviewers might miss.

Faster Time-to-Market
Automated code generation and testing significantly reduce development cycles.

Implementation Strategies

Start Small
Begin with specific use cases like code completion or automated testing before expanding to more complex applications.

Invest in Training
Ensure your development team understands how to effectively use AI tools and interpret their outputs.

Maintain Human Oversight
AI should augment human developers, not replace them. Always maintain human review for critical decisions.

The Road Ahead

As AI continues to evolve, we can expect even more sophisticated tools that can understand business requirements, predict system failures, and automatically optimize performance.

The future of enterprise software development lies in the collaboration between human creativity and AI capabilities.

Conclusion

AI is fundamentally changing how enterprises approach software development. Organizations that embrace these technologies today will be better positioned to compete in tomorrow's digital economy.
    `,
  },
  {
    id: 2,
    slug: "cloud-migration-strategies-legacy-systems",
    title: "Cloud Migration Strategies for Legacy Systems",
    excerpt: "A comprehensive guide to modernizing your legacy applications and successfully migrating to cloud infrastructure without disruption.",
    category: "Cloud Computing",
    author: "Priya Sharma",
    authorRole: "Cloud Architecture Lead",
    authorImage: "",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    imageColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
    content: `
Introduction

Migrating legacy systems to the cloud is one of the most significant challenges enterprises face today. With proper strategies and planning, organizations can successfully transition their applications while minimizing risk and disruption.

Understanding Your Legacy System

Before starting any migration, it's crucial to thoroughly understand your current system architecture.

Assessment Checklist

- Application Inventory: Document all applications and their dependencies
- Data Mapping: Understand data flows and storage requirements
- Integration Points: Identify all internal and external integrations
- Performance Baselines: Measure current system performance

Migration Strategies

1. Rehosting (Lift and Shift)
The fastest migration approach where applications are moved as-is to cloud infrastructure.

Best for: Systems that need immediate cloud benefits without modification
Pros: Fast migration, minimal changes required
Cons: May not optimize costs or performance

2. Replatforming
Moving applications with minor optimizations to take advantage of cloud-native features.

Best for: Databases and backend services
Pros: Better performance, improved scalability
Cons: Requires some code changes

3. Repurchasing
Moving to a cloud-native SaaS solution that replaces the legacy application.

Best for: Commodity functions like CRM or HR systems
Pros: Reduced maintenance, always up-to-date
Cons: Data migration complexity, vendor lock-in

4. Refactoring
Restructuring application architecture to fully leverage cloud capabilities.

Best for: Mission-critical applications requiring scalability
Pros: Maximum cloud benefits, improved agility
Cons: Highest cost and complexity

Migration Best Practices

Start with a Pilot
Begin with a low-risk application to validate your migration strategy and build team expertise.

Automate Everything
Use Infrastructure as Code (IaC) and automated deployment tools to ensure consistency and repeatability.

Implement Robust Testing
Create comprehensive test suites that validate functionality, performance, and security in the cloud environment.

Conclusion

Successful cloud migration requires careful planning, the right strategy for each application, and a focus on continuous improvement.
    `,
  },
  {
    id: 3,
    slug: "cybersecurity-best-practices-modern-web-applications",
    title: "Cybersecurity Best Practices for Modern Web Applications",
    excerpt: "Learn essential security measures to protect your web applications from emerging threats and vulnerabilities in the digital landscape.",
    category: "Cybersecurity",
    author: "Amit Kumar",
    authorRole: "Security Consultant",
    authorImage: "",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    imageColor: "bg-gradient-to-br from-red-500 to-orange-500",
    content: `
Introduction

In today's digital landscape, cybersecurity is not optional—it's essential. With cyberattacks becoming increasingly sophisticated, web application security must be a top priority for every organization.

Fundamental Security Principles

Defense in Depth
Layer your security controls so that if one layer is breached, others still provide protection.

Least Privilege
Grant only the minimum permissions necessary for users and systems to perform their functions.

Zero Trust
Never trust, always verify. Authenticate and authorize every request regardless of its origin.

Essential Security Measures

1. Authentication and Authorization

Multi-Factor Authentication (MFA)
Implement MFA for all user accounts, especially administrative access.

Session Management
Use secure, random session tokens with appropriate expiration times.

Role-Based Access Control (RBAC)
Implement granular permissions based on user roles and responsibilities.

2. Data Protection

Encryption at Rest and in Transit
Use TLS 1.3 for data in transit and strong encryption algorithms for stored data.

Input Validation
Validate and sanitize all user inputs to prevent injection attacks.

Secure Password Storage
Use bcrypt, Argon2, or similar adaptive hashing algorithms.

Common Vulnerabilities and Prevention

SQL Injection
Prevention: Use parameterized queries and ORM libraries

Cross-Site Scripting (XSS)
Prevention: Output encoding and Content Security Policy

Cross-Site Request Forgery (CSRF)
Prevention: Anti-CSRF tokens and SameSite cookies

Conclusion

Web application security is an ongoing process, not a one-time implementation.
    `,
  },
  {
    id: 4,
    slug: "microservices-architecture-benefits-implementation-guide",
    title: "Microservices Architecture: Benefits and Implementation Guide",
    excerpt: "Discover how microservices can improve scalability and maintainability in complex software systems for enterprise applications.",
    category: "Software Architecture",
    author: "Vikram Singh",
    authorRole: "Principal Architect",
    authorImage: "",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    imageColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    content: `
Introduction

Microservices architecture has become the de facto standard for building modern, scalable enterprise applications. This approach decomposes monolithic applications into smaller, independent services that can be developed, deployed, and scaled independently.

What is Microservices Architecture?

Microservices is an architectural style that structures an application as a collection of loosely coupled, independently deployable services. Each microservice implements a specific business capability, owns its own data store, and communicates with other services via well-defined APIs.

Key Benefits

1. Scalability
Individual services can be scaled independently based on demand, optimizing resource utilization and costs.

2. Flexibility
Teams can choose different technologies for different services based on specific requirements.

3. Resilience
Failures in one service don't necessarily bring down the entire system.

4. Faster Development
Smaller, focused teams can develop and deploy services independently.

Implementation Guide

Step 1: Identify Bounded Contexts
Analyze your domain and identify natural boundaries between different business capabilities.

Step 2: Design APIs First
Define clear, stable APIs for service communication before implementation.

Step 3: Implement Service Communication
Choose between synchronous (REST, gRPC) and asynchronous (message queues) communication patterns.

Step 4: Handle Cross-Cutting Concerns
Implement centralized logging, monitoring, and distributed tracing.

Conclusion

Microservices architecture offers significant benefits for enterprise applications when implemented correctly.
    `,
  },
  {
    id: 5,
    slug: "digital-transformation-trends-2025",
    title: "Digital Transformation Trends Shaping 2025",
    excerpt: "Key technology trends that are driving digital transformation across industries and how your business can leverage them effectively.",
    category: "Digital Transformation",
    author: "Neha Gupta",
    authorRole: "Digital Strategy Director",
    authorImage: "",
    date: "Nov 20, 2024",
    readTime: "5 min read",
    imageColor: "bg-gradient-to-br from-green-500 to-teal-500",
    content: `
Introduction

As we approach 2025, digital transformation continues to accelerate at an unprecedented pace. Organizations that embrace these trends will gain competitive advantages, while those that don't risk being left behind.

Key Trends for 2025

1. AI-Powered Everything

Artificial Intelligence is no longer confined to specific use cases—it's becoming ubiquitous across all business functions including customer service, predictive analytics, automated content generation, and intelligent process automation.

2. Edge Computing

Processing data closer to its source is becoming critical for real-time applications, offering reduced latency, lower bandwidth costs, improved privacy, and enhanced IoT capabilities.

3. Hyper-Personalization

Customers expect personalized experiences tailored to their preferences and behavior through AI-driven recommendation engines, dynamic content optimization, and real-time personalization.

4. Sustainability Tech

Environmental responsibility is becoming a core business imperative with focus on green cloud computing, energy-efficient data centers, and sustainable software development.

Strategic Recommendations

Prioritize Data
Invest in data infrastructure, governance, and analytics capabilities.

Build Digital-First Culture
Foster innovation and digital literacy across your organization.

Embrace Automation
Automate repetitive processes to free up resources for strategic initiatives.

Conclusion

Digital transformation in 2025 is about more than technology—it's about fundamentally changing how businesses operate.
    `,
  },
  {
    id: 6,
    slug: "optimizing-react-performance-tips-techniques",
    title: "Optimizing React Performance: Tips and Techniques",
    excerpt: "Practical strategies to improve your React application performance and deliver better user experiences across all devices.",
    category: "Web Development",
    author: "Rahul Patel",
    authorRole: "Senior Frontend Developer",
    authorImage: "",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    imageColor: "bg-gradient-to-br from-cyan-400 to-blue-500",
    content: `
Introduction

Performance is crucial for user experience and SEO. Slow React applications lead to poor user engagement, lower conversion rates, and frustrated users. This guide covers practical techniques to optimize your React applications.

Core Performance Principles

1. Code Splitting

Break your application into smaller chunks to reduce initial load time using React.lazy and Suspense.

2. Memoization

Prevent unnecessary re-renders with React.memo, useMemo, and useCallback.

React.memo - Only re-renders component if props change

useMemo - Memoize expensive computations

useCallback - Memoize callback functions to prevent unnecessary re-renders

3. Virtualization

Render only visible items in long lists using libraries like react-window to significantly improve performance with large datasets.

4. Lazy Loading Images

Defer loading of images until they're needed using the loading="lazy" attribute and responsive image srcsets.

State Management Optimization

Use Component State Wisely
- Lift state up only when necessary
- Use context for truly global state
- Consider atomic state libraries for complex state

Conclusion

Optimizing React performance is an ongoing process. Start with the biggest bottlenecks, measure your improvements, and continue iterating.
    `,
  },
];

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p: BlogPost) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Genius Technology",
    };
  }

  return {
    title: `${post.title} | Genius Technology`,
    description: post.excerpt,
    keywords: `${post.category}, technology, software development`,
  };
}

function formatContent(content: string) {
  const sections = content.split(/\n\n+/);
  
  return sections.map((section, index) => {
    if (!section.trim()) return null;
    
    const lines = section.split('\n');
    
    // Check if it's a heading (short single line, likely a title)
    if (lines.length === 1 && lines[0].trim().length < 80 && !lines[0].includes(':')) {
      return (
        <h2 key={index} className="text-2xl font-semibold text-black mb-6 pb-2 border-b border-gray-200 mt-10 first:mt-0">
          {lines[0].trim()}
        </h2>
      );
    }
    
    // Check if it's a numbered list or bullet points
    if (lines.some(line => /^\d+\.|^-|^\*/.test(line.trim()))) {
      return (
        <div key={index} className="my-6">
          {lines.map((line, lineIndex) => {
            const cleanLine = line.replace(/^\d+\.\s*|\*\s*|-\s*/, '').trim();
            if (!cleanLine) return null;
            const isBold = line.includes(':') || /^\d+\./.test(line.trim());
            return (
              <div key={lineIndex} className="flex items-start gap-3 my-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)] mt-2.5 flex-shrink-0" />
                <span className={isBold ? "font-semibold text-gray-800 text-lg" : "text-gray-600 leading-relaxed"}>
                  {cleanLine}
                </span>
              </div>
            );
          })}
        </div>
      );
    }
    
    // Regular paragraph - join all lines
    const paraText = lines.join(' ').trim();
    if (paraText) {
      // Handle inline code
      if (paraText.includes('`')) {
        const parts = paraText.split('`');
        return (
          <p key={index} className="text-gray-600 leading-relaxed my-4 text-lg">
            {parts.map((part, i) => 
              i % 2 === 1 ? <code key={i} className="bg-gray-100 px-2 py-1 rounded text-sm text-[var(--brand-blue)] font-mono mx-1">{part}</code> : part
            )}
          </p>
        );
      }
      return (
        <p key={index} className="text-gray-600 leading-relaxed my-4 text-lg">
          {paraText}
        </p>
      );
    }
    
    return null;
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p: BlogPost) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p: BlogPost) => p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="w-full bg-white">
      {/* HERO SECTION */}
      <section className={`w-full py-24 ${post.imageColor}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              {post.category}
            </span>
            <span className="text-white/70 text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="w-full py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </div>

          {/* TAGS */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500 font-medium">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-sm rounded-full hover:bg-[var(--brand-blue)] hover:text-white transition-colors cursor-pointer">
                {post.category}
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                Technology
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                Innovation
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                Digital Transformation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className="w-full py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-black">Related Articles</h2>
              <Link href="/blogs" className="text-[var(--brand-blue)] hover:underline flex items-center gap-1 text-sm font-medium">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost: BlogPost) => (
                <Link key={relatedPost.id} href={`/blogs/${relatedPost.slug}`} className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[var(--brand-blue)] hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs font-medium rounded-full mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[var(--brand-blue)] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{relatedPost.date}</span>
                      <span className="flex items-center gap-2 text-[var(--brand-blue)] font-medium text-sm group-hover:gap-3 transition-all">
                        Read <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="w-full py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
            Have Questions About This Topic?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement these strategies 
            in your organization. Let's discuss how we can support your goals.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[var(--brand-blue)] text-white font-medium hover:bg-[var(--brand-blue-dark)] transition-colors shadow-lg shadow-blue-200">
            Get in Touch
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

