"use client";

import {
  Briefcase,
  Globe,
  Smartphone,
  Code,
  Cloud,
  Shield,
  Database,
  Layers,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  ArrowLeft,
  Clock,
  Target,
  Award,
  TrendingUp,
  Calendar,
  MapPin,
  Globe2,
  Search,
  Timer,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const project = {
  title: "Customer Engagement Web Platform",
  category: "Web Application Development",
  icon: Globe,
  iconColor: "text-[var(--brand-blue)]",
  shortDescription:
    "A performance-focused platform enabling businesses to engage customers through personalised digital experiences.",
  description:
    "A modern, performance-oriented customer engagement platform designed to transform how businesses connect with their audience. Leveraging cutting-edge web technologies, we built a solution that delivers personalized experiences at scale while maintaining exceptional performance metrics.",
  fullDescription: `This customer engagement platform represents a complete digital overhaul for a growing e-commerce business that was struggling with low customer retention and poor user experience on their existing website.

We built a modern, lightning-fast web application that delivers personalized content, product recommendations, and seamless shopping experiences to each visitor. The platform integrates advanced analytics to understand customer behavior and uses machine learning algorithms to serve relevant content and product suggestions.

Key highlights include a progressive loading system that ensures instant page loads regardless of connection speed, edge caching through Cloudflare for global performance, and a sophisticated personalization engine that adapts the user experience based on browsing history and preferences.

The result is a platform that not only looks beautiful but performs exceptionally well across all devices and connection speeds.`,
  challenge:
    "The client struggled with low customer engagement rates and poor user experience on their existing website. High bounce rates and low conversion were impacting their bottom line significantly. Their legacy system was slow, difficult to maintain, and couldn't handle the traffic spikes during promotional periods. Additionally, the lack of personalization meant each visitor saw the same generic experience, missing opportunities to connect with customers on a more individual level.",
  solution:
    "We created a blazing-fast web platform with advanced personalization engine, interactive content management, and seamless third-party integrations. The platform uses progressive loading and edge caching for optimal performance. By implementing a modern JAMstack architecture with Next.js, we achieved sub-second page load times while maintaining full dynamic functionality.",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel", "Cloudflare", "Redis", "PostgreSQL", "Algolia"],
  outcomes: [
    "Improved engagement metrics by 65%",
    "SEO-friendly architecture with 95+ Lighthouse score",
    "Modern responsive UI working across all devices",
    "Reduced page load time by 3 seconds",
    "40% increase in conversion rate",
    "50% reduction in bounce rate",
  ],
  detailedOutcomes: [
    {
      title: "65% Engagement Increase",
      description: "Personalized content and improved UX led to significantly higher time on site and page views per session.",
      icon: TrendingUp,
    },
    {
      title: "95+ Lighthouse Score",
      description: "Achieved perfect scores across performance, accessibility, best practices, and SEO metrics.",
      icon: Award,
    },
    {
      title: "3s Faster Load Times",
      description: "Optimized architecture reduced average page load time from 5.8s to under 2s.",
      icon: Timer,
    },
  ],
  features: [
    {
      title: "Personalization Engine",
      description: "AI-powered content and product recommendations based on user behavior and preferences.",
    },
    {
      title: "Progressive Loading",
      description: "Instant-first paint with incremental content loading for perceived performance improvement.",
    },
    {
      title: "Advanced Search",
      description: "Full-text search with typo tolerance, filters, and instant results powered by Algolia.",
    },
    {
      title: "Mobile-First Design",
      description: "Responsive design optimized for all screen sizes with touch-friendly interactions.",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time insights into user behavior, conversion funnels, and business metrics.",
    },
    {
      title: "Content Management",
      description: "Headless CMS integration for flexible content creation and management.",
    },
  ],
  metrics: [
    { label: "Engagement Up", value: "65%", icon: Globe2 },
    { label: "Page Speed", value: "+95", icon: Zap },
    { label: "SEO Score", value: "95+", icon: Search },
    { label: "Load Time", value: "-3s", icon: Timer },
  ],
  projectDetails: [
    { label: "Duration", value: "6 months", icon: Clock },
    { label: "Team Size", value: "5 members", icon: Users },
    { label: "Client Location", value: "Mumbai, India", icon: MapPin },
    { label: "Industry", value: "E-commerce", icon: Briefcase },
  ],
};

// Scroll Reveal Component
function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function CustomerEngagementPlatformPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="w-full bg-white">
      {/* ================= HERO ================= */}
      <section className="w-full bg-gradient-to-br from-[var(--brand-blue)] to-[#0088cc] relative overflow-hidden">
        {/* Animated Watermark Icon */}
        <div className={`absolute bottom-0 right-0 opacity-10 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-10" : "translate-y-full opacity-0"}`}>
          <project.icon className="w-80 h-80 sm:w-96 sm:h-96 text-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 relative z-10">
          {/* Back Button */}
          <div className={`transition-all duration-500 mb-8 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>

          {/* Category Badge */}
          <div className={`transition-all duration-700 delay-200 mb-6 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              <project.icon className="w-4 h-4" />
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 transition-all duration-700 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            {project.title}
          </h1>

          {/* Project Details */}
          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            {project.projectDetails.map((detail, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm"
              >
                <detail.icon className="w-4 h-4" />
                <span className="font-medium">{detail.label}:</span>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTIONS ================= */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
          {/* Metrics */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-4 mt-8">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[var(--brand-blue)] hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-[var(--brand-blue)]/10">
                    <metric.icon className="w-6 h-6 text-[var(--brand-blue)]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-black">{metric.value}</p>
                    <p className="text-xs text-gray-500">{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Overview */}
          <ScrollReveal delay={300} className="mt-12">
            <h3 className="text-xl font-semibold text-black mb-4">Overview</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </ScrollReveal>

          {/* Challenge & Solution - Equal Height Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <ScrollReveal delay={400}>
              <div className="h-full p-6 sm:p-8 rounded-xl bg-red-50 border border-red-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                  <div className="p-2 rounded-lg bg-red-100">
                    <Shield className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-black">
                    The Challenge
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed flex-grow">{project.challenge}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="h-full p-6 sm:p-8 rounded-xl bg-[var(--brand-blue)]/5 border border-[var(--brand-blue)]/20 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                  <div className="p-2 rounded-lg bg-[var(--brand-blue)]/20">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-blue)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-black">Our Solution</h4>
                </div>
                <p className="text-gray-600 leading-relaxed flex-grow">{project.solution}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Features */}
          <ScrollReveal delay={600} className="mt-12">
            <h3 className="text-xl font-semibold text-black mb-6">
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-[var(--brand-blue)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 className="font-semibold text-black mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Tech Stack */}
          <ScrollReveal delay={700} className="mt-12">
            <h3 className="text-xl font-semibold text-black mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-[var(--brand-blue)] hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Detailed Outcomes */}
          <ScrollReveal delay={800} className="mt-12">
            <h3 className="text-xl font-semibold text-black mb-6">
              Project Outcomes
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {project.detailedOutcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/5 to-[#0088cc]/10 border border-[var(--brand-blue)]/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-[var(--brand-blue)]/10 w-fit mb-4">
                    <outcome.icon className="w-6 h-6 text-[var(--brand-blue)]" />
                  </div>
                  <h4 className="font-semibold text-black mb-2">{outcome.title}</h4>
                  <p className="text-sm text-gray-600">{outcome.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* All Outcomes */}
          <ScrollReveal delay={900} className="mt-12">
            <h3 className="text-xl font-semibold text-black mb-4">
              Key Results
            </h3>
            <ul className="space-y-4">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--brand-blue)] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={1000} className="mt-16 pt-10 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-[var(--brand-blue)] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                View More Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[var(--brand-blue)] text-white font-medium hover:bg-[var(--brand-blue-dark)] hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

