"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Code,
  Smartphone,
  Search,
  Layout,
  Cloud,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Custom, scalable websites and web applications built for performance, security, and long-term growth.",
    icon: Code,
    href: "/services/web-development",
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile applications designed to deliver seamless user experiences.",
    icon: Smartphone,
    href: "/services/app-development",
  },
  {
    title: "SEO Services",
    description:
      "Technical and content-driven SEO strategies to improve visibility, traffic, and search performance.",
    icon: Search,
    href: "/services/seo-services",
  },
  {
    title: "UI/UX Design",
    description:
      "User-focused interface and experience design that improves usability and engagement.",
    icon: Layout,
    href: "/services/ui-ux-design",
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud architecture, migration, and optimisation services for secure and scalable infrastructure.",
    icon: Cloud,
    href: "/services/cloud-solutions",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing monitoring, updates, and support to ensure reliability and performance.",
    icon: Settings,
    href: "/services/maintenance-support",
  },
];

const ServicesHome = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  /* ===== Trigger when section enters ===== */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ===== Reveal cards ONE BY ONE ===== */
  useEffect(() => {
    if (!start) return;
    if (visibleCount >= services.length) return;

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, 160);

    return () => clearTimeout(timer);
  }, [start, visibleCount]);

  return (
    <section ref={sectionRef} className="w-full bg-gray-50 py-24">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="max-w-2xl mb-16">
            <p className="mb-3 text-sm font-medium tracking-wide text-[var(--brand-blue)] uppercase">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-snug">
              Comprehensive Digital Services for Modern Businesses
            </h2>
            <p className="mt-4 text-base text-gray-600">
              We provide end-to-end digital services designed to help businesses
              build, scale, and maintain reliable technology solutions.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                visible={index < visibleCount}
              />
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/services"
              className="inline-flex items-center text-[var(--brand-blue)] font-medium hover:underline"
            >
              View all services →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHome;

/* ===== Clickable Service Card ===== */

const ServiceCard = ({
  service,
  visible,
}: {
  service: {
    title: string;
    description: string;
    icon: any;
    href: string;
  };
  visible: boolean;
}) => {
  const Icon = service.icon;

  return (
    <Link href={service.href} className="block">
      <div
        className={`
          h-full border border-gray-200 rounded-lg p-8 bg-white
          transform-gpu will-change-transform
          transition-all duration-1100 ease-out
          hover:-translate-y-1 hover:shadow-md  hover:bg-gray-200
          ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-24"
          }
        `}
      >
        <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-md bg-[var(--brand-blue)]/10">
          <Icon className="w-6 h-6 text-[var(--brand-blue)]" />
        </div>

        <h3 className="text-lg font-semibold text-black">
          {service.title}
        </h3>

        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </Link>
  );
};