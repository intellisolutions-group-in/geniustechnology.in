"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PageHero from "@/components/ui/PageHero";
import {
  Briefcase,
  Globe,
  Smartphone,
  Code,
  Cloud,
  Shield,
  Database,
  Layers,
  X,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Lock,
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

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
              <PortfolioCard
                {...project}
                onClick={() => setSelectedProject(project)}
              />
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

      {/* ================= PROJECT MODAL ================= */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

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
  onClick,
}: {
  title: string;
  category: string;
  shortDescription: string;
  outcomes: string[];
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  onClick?: () => void;
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
    <div onClick={onClick}>
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
    </div>
  );
};

/* ================= PROJECT MODAL ================= */
function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEscape);

    // Trigger visible state for entrance animation
    const timer = setTimeout(() => setIsVisible(true), 50);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8
        transition-opacity duration-300
        ${isVisible && !isClosing ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Backdrop with scale animation */}
      <div
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm
          transition-all duration-300 ease-out
          ${isVisible && !isClosing ? "scale-100" : "scale-95"}
        `}
        onClick={handleClose}
      />

      {/* Modal with spring animation */}
      <div
        ref={modalRef}
        className={`
          relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
          bg-white rounded-2xl shadow-2xl
          transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
          ${isVisible && !isClosing
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-8"
          }
        `}
      >
        {/* Close Button - Sticky while scrolling */}
        <button
          onClick={handleClose}
          className="sticky top-4 left-full -ml-12 z-50 p-3 rounded-full bg-white hover:bg-[var(--brand-blue)] backdrop-blur-sm transition-all duration-300 group shadow-lg"
        >
          <X className="w-5 h-5 text-[var(--brand-blue)] group-hover:text-white transition-colors duration-300" />
        </button>

        {/* Header with gradient and slide animation - Full Height Banner */}
        <div className={`
          relative h-[35vh] sm:h-[45vh] w-full
          transition-all duration-500 delay-100
          ${isVisible && !isClosing ? "translate-y-0" : "-translate-y-4"}
        `}>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)] to-blue-700 animate-gradient-xy" />
          <div className="absolute inset-0 bg-black/20" />

          {/* Watermark Icon with scale animation - Larger for taller banner */}
          <div className={`
            absolute -bottom-4 -right-4 opacity-20
            transition-all duration-500 delay-200
            ${isVisible && !isClosing ? "scale-100" : "scale-90"}
          `}>
            <project.icon className="w-80 h-80 sm:w-96 sm:h-96 text-white" />
          </div>

          {/* Category Badge with bounce animation */}
          <div className={`
            absolute bottom-6 left-8
            transition-all duration-500 delay-300
            ${isVisible && !isClosing ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              <project.icon className="w-4 h-4" />
              {project.category}
            </span>
          </div>
        </div>

        {/* Content with staggered animations */}
        <div className="p-6 sm:p-10 pt-0">
          {/* Title */}
          <h2 className={`
            text-2xl sm:text-3xl font-bold text-black
            transition-all duration-500 delay-100
            ${isVisible && !isClosing ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}>
            {project.title}
          </h2>

          {/* Metrics with staggered animation */}
          <div className={`
            flex flex-wrap gap-4 mt-6
            transition-all duration-500 delay-200
            ${isVisible && !isClosing ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}>
            {project.metrics.map((metric: any, i: any) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="p-2 rounded-lg bg-[var(--brand-blue)]/10">
                  <metric.icon className="w-5 h-5 text-[var(--brand-blue)]" />
                </div>
                <div>
                  <p className="text-lg font-bold text-black">{metric.value}</p>
                  <p className="text-xs text-gray-500">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className={`
            mt-8
            transition-all duration-500 delay-300
            ${isVisible && !isClosing ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}>
            <h3 className="text-lg font-semibold text-black mb-3">Overview</h3>
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className={`
            grid sm:grid-cols-2 gap-6 mt-8
            transition-all duration-500 delay-400
            ${isVisible && !isClosing ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}>
            <div className="p-6 rounded-xl bg-red-50 border border-red-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-red-100">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <h4 className="font-semibold text-black">The Challenge</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--brand-blue)]/5 border border-[var(--brand-blue)]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[var(--brand-blue)]/20">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand-blue)]" />
                </div>
                <h4 className="font-semibold text-black">Our Solution</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className={`
            mt-8
            transition-all duration-500 delay-500
            ${isVisible && !isClosing ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}>
            <h3 className="text-lg font-semibold text-black mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: any, i: any) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className={`
            mt-8
            transition-all duration-500 delay-600
            ${isVisible && !isClosing ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}>
            <h3 className="text-lg font-semibold text-black mb-4">Key Outcomes</h3>
            <ul className="space-y-3">
              {project.outcomes.map((outcome: any, i: any) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand-blue)] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className={`
            mt-10 pt-8 border-t border-gray-100 flex justify-end
            transition-all duration-500 delay-700
            ${isVisible && !isClosing ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}>
            <button
              onClick={handleClose}
              className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors mr-4"
            >
              Close
            </button>
            <Link
              href={project.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--brand-blue)] text-white font-medium hover:bg-[var(--brand-blue-dark)] transition-colors"
            >
              View Full Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
