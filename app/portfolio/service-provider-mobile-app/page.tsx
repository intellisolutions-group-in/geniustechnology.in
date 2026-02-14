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
  Star,
  Download,
  Bell,
  CreditCard,
  Wifi,
  Phone,
  Mail,
  Calendar as CalendarIcon,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const project = {
  title: "Service Provider Mobile Application",
  category: "Mobile App Development",
  icon: Smartphone,
  iconColor: "text-[var(--brand-blue)]",
  shortDescription:
    "A cross-platform mobile solution helping service providers manage bookings and customer interactions efficiently.",
  description:
    "A comprehensive mobile application designed for service providers to manage their entire business workflow from their pocket. Built with React Native for cross-platform compatibility, the app offers native-like performance with a unified codebase.",
  fullDescription: `This mobile application transformed how service providers manage their daily operations, replacing manual spreadsheets and phone calls with a sleek, intuitive mobile experience.

Designed for field service professionals, the app provides complete business management capabilities including appointment scheduling, customer communication, payment processing, and real-time job tracking. The offline-first architecture ensures the app works reliably even in areas with poor connectivity, automatically syncing data when connection is restored.

Key innovations include intelligent scheduling algorithms that optimize route planning, push notifications that reduce missed appointments by 80%, and integrated payment processing that speeds up cash flow. The app has achieved a 4.8-star rating on app stores and has been downloaded over 50,000 times.

We worked closely with real service providers to design every feature, ensuring the app addresses the actual challenges they face in their daily work. The result is a tool that feels natural to use and delivers tangible productivity improvements.`,
  challenge:
    "Service providers were managing bookings through spreadsheets and phone calls, leading to scheduling conflicts, missed appointments, and poor customer communication. They needed a unified mobile solution. Managing multiple bookings across different channels meant double-bookings were common, customer information was scattered across various platforms, and there was no easy way to track job status or communicate with customers in real-time. Additionally, working in areas with unreliable internet meant many existing solutions simply didn't work when they were needed most.",
  solution:
    "We developed a feature-rich mobile application with integrated booking management, real-time notifications, customer communication tools, and payment processing. The app works offline with automatic sync when connection is restored. By building with React Native, we delivered a consistent experience on both iOS and Android while maintaining a single codebase. The offline-first architecture uses local storage to ensure full functionality regardless of connectivity.",
  techStack: ["React Native", "Redux", "Firebase", "Stripe", "Node.js", "MongoDB", "GraphQL", "AWS", "Twilio"],
  outcomes: [
    "Real-time notifications reducing missed appointments by 80%",
    "Intuitive mobile UX with 4.8-star app store rating",
      "Secure backend integration with payment processing",
    "Offline-first architecture for reliable performance",
    "50,000+ downloads",
    "40% increase in daily appointments handled",
  ],
  detailedOutcomes: [
    {
      title: "80% Fewer Missed Appointments",
      description: "Smart notifications and calendar reminders dramatically reduced no-shows and late cancellations.",
      icon: Bell,
    },
    {
      title: "4.8 Star Rating",
      description: "Consistently positive reviews from users praising the intuitive design and reliability.",
      icon: Star,
    },
    {
      title: "50K+ Downloads",
      description: "Strong adoption across both iOS and Android platforms within the first year.",
      icon: Download,
    },
  ],
  features: [
    {
      title: "Smart Scheduling",
      description: "AI-powered appointment booking with conflict detection and route optimization.",
    },
    {
      title: "Offline Mode",
      description: "Full functionality without internet, with automatic sync when connectivity returns.",
    },
    {
      title: "Payment Processing",
      description: "In-app payments via Stripe with PCI-compliant secure transaction handling.",
    },
    {
      title: "Customer Messaging",
      description: "Built-in chat and SMS integration for seamless customer communication.",
    },
    {
      title: "Real-time Notifications",
      description: "Push notifications for appointments, payments, and important updates.",
    },
    {
      title: "Analytics Dashboard",
      description: "Track earnings, appointments, and customer satisfaction metrics.",
    },
  ],
  metrics: [
    { label: "Appointments", value: "-80%", icon: Bell },
    { label: "App Rating", value: "4.8", icon: Star },
    { label: "Downloads", value: "50K+", icon: Download },
    { label: "Daily Jobs", value: "+40%", icon: TrendingUp },
  ],
  projectDetails: [
    { label: "Duration", value: "7 months", icon: Clock },
    { label: "Team Size", value: "4 members", icon: Users },
    { label: "Client Location", value: "Bangalore, India", icon: MapPin },
    { label: "Industry", value: "Field Services", icon: Briefcase },
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

export default function ServiceProviderMobileAppPage() {
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

