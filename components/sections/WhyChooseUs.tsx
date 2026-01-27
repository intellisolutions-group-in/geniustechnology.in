"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Business-First Approach",
    description:
      "We focus on understanding business goals before choosing technologies, ensuring solutions deliver measurable impact.",
  },
  {
    number: "02",
    title: "Scalable & Future-Ready Solutions",
    description:
      "Our architectures are designed to grow with your organisation and adapt to changing requirements.",
  },
  {
    number: "03",
    title: "Proven Development Practices",
    description:
      "We follow structured, transparent development processes to ensure quality, stability, and predictable delivery.",
  },
  {
    number: "04",
    title: "Experienced Technical Team",
    description:
      "Our team brings hands-on experience across web, mobile, cloud, and enterprise software development.",
  },
  {
    number: "05",
    title: "Clear Communication & Transparency",
    description:
      "We believe in honest timelines, clear documentation, and regular updates throughout every project.",
  },
  {
    number: "06",
    title: "Long-Term Partnership Mindset",
    description:
      "Beyond delivery, we support, optimise, and evolve solutions to ensure long-term success.",
  },
];

const WhyChooseUs = () => {
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

  /* ===== Reveal points one by one ===== */
  useEffect(() => {
    if (!start) return;
    if (visibleCount >= reasons.length) return;

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, 140);

    return () => clearTimeout(timer);
  }, [start, visibleCount]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-24">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <p className="mb-3 text-sm font-medium tracking-wide text-[var(--brand-blue)] uppercase">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-snug">
              A Reliable Technology Partner for Growing Businesses
            </h2>
            <p className="mt-4 text-base text-gray-600">
              We combine technical expertise with a practical, business-focused
              approach to deliver digital solutions that create long-term value.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <ReasonItem
                key={reason.number}
                reason={reason}
                visible={index < visibleCount}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

/* ===== Reason Item ===== */

const ReasonItem = ({
  reason,
  visible,
  index,
}: {
  reason: {
    number: string;
    title: string;
    description: string;
  };
  visible: boolean;
  index: number;
}) => {
  return (
    <div
      className={`
        transform-gpu
        transition-all duration-700 ease-out
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
        }
      `}
    >
      {/* Card with watermark number and hover effects */}
      <div className="group relative overflow-hidden rounded-xl bg-gray-50 border border-gray-100 p-6 transition-all duration-300 hover:border-[var(--brand-blue)] hover:shadow-lg hover:shadow-[var(--brand-blue)]/10">

        {/* Watermark Number */}
        <span className="absolute -bottom-2 -right-2 text-7xl sm:text-8xl font-bold text-gray-200 transition-all duration-300 group-hover:text-[var(--brand-blue)]/20 group-hover:scale-110 select-none">
          {reason.number}
        </span>

        {/* Content */}
        <div className="relative z-10">
          {/* Header with number badge */}
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-lg font-bold transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:text-white group-hover:scale-110">
              {reason.number}
            </span>

            {/* Step indicator */}
            {index < reasons.length - 1 && (
              <div className="hidden sm:flex items-center gap-2 ml-auto text-[var(--brand-blue)]/40 group-hover:text-[var(--brand-blue)] transition-colors duration-300">
                <span className="text-xs font-medium uppercase tracking-wider">Step {index + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>

          <h3 className="text-xl font-semibold text-black group-hover:text-[var(--brand-blue)] transition-colors duration-300">
            {reason.title}
          </h3>
          <p className="mt-2 text-base text-gray-600 leading-relaxed">
            {reason.description}
          </p>
        </div>

        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

