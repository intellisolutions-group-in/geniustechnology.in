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
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const project = {
  title: "Enterprise Resource Management System",
  category: "Custom Software Development",
  icon: Layers,
  iconColor: "text-[var(--brand-blue)]",
  shortDescription:
    "A centralised internal platform designed to streamline operations and improve decision-making across departments.",
  description:
    "A comprehensive enterprise resource planning solution that unifies multiple business functions into a single, cohesive platform. Built with scalability and security at its core, this system helps organizations streamline their operations, reduce manual processes, and make data-driven decisions.",
  fullDescription: `This enterprise-grade resource management system represents a significant digital transformation initiative for our client, a mid-sized manufacturing company looking to modernize their operations and break down data silos across departments.

The platform integrates HR management, financial planning, inventory control, and project management into one unified system. With real-time data synchronization and advanced analytics, the client now has complete visibility into their operations and can make informed decisions faster than ever before.

Our team worked closely with stakeholders from every department to understand their unique requirements and pain points, ensuring the final solution addressed the specific needs of each team while maintaining a consistent user experience across the entire platform.`,
  challenge:
    "The client faced significant challenges with disconnected systems across departments, leading to data silos, inefficient workflows, and delayed decision-making. Manual processes were prone to errors and consumed valuable employee time. Each department was using different software solutions that didn't communicate with each other, resulting in duplicate data entry, inconsistent reporting, and a lack of real-time visibility into business operations.",
  solution:
    "We developed a centralized platform that integrates all core business functions including HR, Finance, Inventory, and Project Management. The solution features real-time data synchronization, automated workflows, and advanced reporting capabilities. By consolidating multiple disparate systems into one platform, we eliminated data silos and created a single source of truth for all business data.",
  techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL", "TypeScript", "Tailwind CSS"],
  outcomes: [
    "Automated internal workflows saving 40% processing time",
    "Secure role-based access with SSO integration",
    "Scalable system architecture supporting 500+ concurrent users",
    "Real-time dashboards for executive decision-making",
    "Eliminated duplicate data entry across departments",
    "Reduced reporting time from days to minutes",
  ],
  detailedOutcomes: [
    {
      title: "40% Efficiency Improvement",
      description: "Automated workflows reduced manual processing time by nearly half, allowing employees to focus on higher-value tasks.",
      icon: TrendingUp,
    },
    {
      title: "95% User Satisfaction",
      description: "Post-implementation surveys showed overwhelmingly positive feedback from employees across all departments.",
      icon: Users,
    },
    {
      title: "3x ROI",
      description: "The system paid for itself within the first year through cost savings and productivity gains.",
      icon: BarChart3,
    },
  ],
  features: [
    {
      title: "Unified Dashboard",
      description: "Real-time visibility into all business metrics with customizable widgets and drill-down capabilities.",
    },
    {
      title: "HR Management Module",
      description: "Complete employee lifecycle management from onboarding to retirement, including performance reviews and training tracking.",
    },
    {
      title: "Financial Management",
      description: "Budgeting, forecasting, expense management, and financial reporting with multi-currency support.",
    },
    {
      title: "Inventory Control",
      description: "Real-time inventory tracking, automated reordering, and warehouse management integration.",
    },
    {
      title: "Project Management",
      description: "Resource allocation, time tracking, milestone management, and project portfolio analytics.",
    },
    {
      title: "Advanced Reporting",
      description: "Custom report builder with scheduled delivery and interactive data visualization.",
    },
  ],
  metrics: [
    { label: "Efficiency Gain", value: "40%", icon: Zap },
    { label: "User Satisfaction", value: "95%", icon: Users },
    { label: "ROI", value: "3x", icon: BarChart3 },
    { label: "Concurrent Users", value: "500+", icon: Target },
  ],
  projectDetails: [
    { label: "Duration", value: "8 months", icon: Clock },
    { label: "Team Size", value: "6 members", icon: Users },
    { label: "Client Location", value: "Vadodara, India", icon: MapPin },
    { label: "Industry", value: "Manufacturing", icon: Briefcase },
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

export default function EnterpriseResourceSystemPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="w-full bg-white">
      {/* ================= HERO ================= */}
      <section className="w-full">
        {/* Header Banner */}
        <div className={`relative h-[45vh] sm:h-[55vh] w-full overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)] to-[#0088cc] animate-gradient-xy" />
          <div className="absolute inset-0 bg-black/20" />

          {/* Animated Watermark Icon */}
          <div className={`absolute -bottom-4 -right-4 opacity-20 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-20" : "translate-y-full opacity-0"}`}>
            <project.icon className="w-80 h-80 sm:w-96 sm:h-96 text-white" />
          </div>

          {/* Back Button */}
          <div className={`absolute top-6 left-6 z-10 transition-all duration-500 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>

          {/* Category Badge */}
          <div className={`absolute bottom-6 left-6 sm:left-16 transition-all duration-700 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium animate-fadeUp">
              <project.icon className="w-4 h-4" />
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
          {/* Title */}
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
              {project.title}
            </h1>
          </ScrollReveal>

          {/* Project Details */}
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap gap-4 mt-8">
              {project.projectDetails.map((detail, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <detail.icon className="w-4 h-4 text-[var(--brand-blue)]" />
                  <span className="text-sm text-gray-600">{detail.label}:</span>
                  <span className="text-sm font-medium text-black">{detail.value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

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

