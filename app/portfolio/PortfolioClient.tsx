"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PageHero from "@/components/ui/PageHero";
import {
  Globe,
  Smartphone,
  Layers,
  CheckCircle2,
  Zap,
  Globe2,
  Users,
  BarChart3
} from "lucide-react";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    id: "enterprise-resource-system",
    title: "Enterprise Resource Management System",
    category: "Custom Software Development",
    icon: Layers,
    iconColor: "text-[var(--brand-blue)]",
    shortDescription:
      "A centralised internal platform designed to streamline operations and improve decision-making across departments.",
    description: "A comprehensive enterprise resource planning solution that unifies multiple business functions into a single, cohesive platform. Built with scalability and security at its core, this system helps organizations streamline their operations, reduce manual processes, and make data-driven decisions.",
    challenge: "The client faced significant challenges with disconnected systems across departments, leading to data silos, inefficient workflows, and delayed decision-making. Manual processes were prone to errors and consumed valuable employee time.",
    solution: "We developed a centralized platform that integrates all core business functions including HR, Finance, Inventory, and Project Management. The solution features real-time data synchronization, automated workflows, and advanced reporting capabilities.",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    outcomes: [
      "Automated internal workflows saving 40% processing time",
      "Secure role-based access with SSO integration",
      "Scalable system architecture supporting 500+ concurrent users",
      "Real-time dashboards for executive decision-making",
    ],
    metrics: [
      { label: "Efficiency Gain", value: "40%", icon: Zap },
      { label: "User Satisfaction", value: "95%", icon: Users },
      { label: "ROI", value: "3x", icon: BarChart3 },
    ],
    href: "/portfolio/enterprise-resource-system",
  },
  {
    id: "customer-engagement-platform",
    title: "Customer Engagement Web Platform",
    category: "Web Application Development",
    icon: Globe,
    iconColor: "text-emerald-500",
    shortDescription:
      "A performance-focused platform enabling businesses to engage customers through personalised digital experiences.",
    description: "A modern, performance-oriented customer engagement platform designed to transform how businesses connect with their audience. Leveraging cutting-edge web technologies, we built a solution that delivers personalized experiences at scale while maintaining exceptional performance metrics.",
    challenge: "The client struggled with low customer engagement rates and poor user experience on their existing website. High bounce rates and low conversion were impacting their bottom line significantly.",
    solution: "We created a blazing-fast web platform with advanced personalization engine, interactive content management, and seamless third-party integrations. The platform uses progressive loading and edge caching for optimal performance.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel", "Cloudflare"],
    outcomes: [
      "Improved engagement metrics by 65%",
      "SEO-friendly architecture with 95+ Lighthouse score",
      "Modern responsive UI working across all devices",
      "Reduced page load time by 3 seconds",
    ],
    metrics: [
      { label: "Engagement Up", value: "65%", icon: Globe2 },
      { label: "Page Speed", value: "+95", icon: Zap },
      { label: "SEO Score", value: "95+", icon: BarChart3 },
    ],
    href: "/portfolio/customer-engagement-platform",
  },
  {
    id: "service-provider-mobile-app",
    title: "Service Provider Mobile Application",
    category: "Mobile App Development",
    icon: Smartphone,
    iconColor: "text-purple-500",
    shortDescription:
      "A cross-platform mobile solution helping service providers manage bookings and customer interactions efficiently.",
    description: "A comprehensive mobile application designed for service providers to manage their entire business workflow from their pocket. Built with React Native for cross-platform compatibility, the app offers native-like performance with a unified codebase.",
    challenge: "Service providers were managing bookings through spreadsheets and phone calls, leading to scheduling conflicts, missed appointments, and poor customer communication. They needed a unified mobile solution.",
    solution: "We developed a feature-rich mobile application with integrated booking management, real-time notifications, customer communication tools, and payment processing. The app works offline with automatic sync when connection is restored.",
    techStack: ["React Native", "Redux", "Firebase", "Stripe", "Node.js", "MongoDB"],
    outcomes: [
      "Real-time notifications reducing missed appointments by 80%",
      "Intuitive mobile UX with 4.8-star app store rating",
      "Secure backend integration with payment processing",
      "Offline-first architecture for reliable performance",
    ],
    metrics: [
      { label: "Appointments", value: "-80%", icon: CheckCircle2 },
      { label: "App Rating", value: "4.8", icon: StarIcon },
      { label: "Downloads", value: "50K+", icon: Users },
    ],
    href: "/portfolio/service-provider-mobile-app",
  },
];

/* ================= PAGE ================= */

export default function PortfolioClient() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="Portfolio"
        title="Delivering Digital Solutions |That Solve Real Business Problems"
        description="A selection of projects demonstrating our structured, scalable, and reliability-focused approach to software development."
      />

      {/* ================= PROJECTS ================= */}
      <section className="w-full  py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 space-y-12">
          {projects.map((project, index) => (
            <ScrollItem key={index} delay={index * 140}>
              <PortfolioCard {...project} />
            </ScrollItem>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Ready to Build Your Next Digital Solution?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help design and deliver a reliable solution
            tailored to your business needs.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex px-8 py-3 rounded-lg bg-[var(--brand-blue)] text-white font-medium"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= STAR ICON ================= */
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

/* ================= SCROLL REVEAL ================= */

const ScrollItem = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transform transition-all duration-[900ms] ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      {children}
    </div>
  );
};

/* ================= PORTFOLIO CARD ================= */

const PortfolioCard = ({
  title,
  category,
  shortDescription,
  outcomes,
  href,
  icon: Icon,
  iconColor,
}: {
  title: string;
  category: string;
  shortDescription: string;
  outcomes: string[];
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Link href={href}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="
          group relative overflow-hidden
          rounded-xl p-8 bg-white
          border border-black/10
          transition-all duration-500 ease-out
          hover:-translate-y-2
          hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)]
          hover:border-transparent
          active:scale-[0.98]
          cursor-pointer
        "
      >
        {/* Gradient glow */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
          style={{
            background:
              "radial-gradient(600px circle at var(--x) var(--y), rgba(59,130,246,0.18), transparent 40%)",
          }}
        />

        {/* Watermark Icon */}
        <div className="absolute bottom-4 right-4 pointer-events-none select-none">
          <Icon className={`w-40 h-40 ${iconColor} opacity-[0.07] transition-transform duration-500 group-hover:scale-110`} />
        </div>

        <p className="relative z-10 text-sm font-medium uppercase text-[var(--brand-blue)]">
          {category}
        </p>

        <h3 className="relative z-10 mt-3 text-xl font-semibold text-black group-hover:text-[var(--brand-blue)] transition-colors">
          {title}
        </h3>

        <p className="relative z-10 mt-4 text-gray-600">
          {shortDescription}
        </p>

        <ul className="relative z-10 mt-6 list-disc list-inside text-gray-600 space-y-1">
          {outcomes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Hover CTA */}
        <div
          className="
            relative z-10 mt-8
            opacity-0 translate-y-2
            transition-all duration-300
            group-hover:opacity-100 group-hover:translate-y-0
          "
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-blue)]">
            View case study →
          </span>
        </div>
      </div>
    </Link>
  );
};
