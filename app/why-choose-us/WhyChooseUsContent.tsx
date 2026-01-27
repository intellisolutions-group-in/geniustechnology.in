"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We take time to understand your business, users, and objectives before defining technical solutions.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "Our teams design and develop scalable systems using best practices and modern frameworks.",
  },
  {
    number: "03",
    title: "Deliver & Support",
    description:
      "We ensure smooth deployment and provide ongoing support to maintain performance and reliability.",
  },
];

const valueCards = [
  {
    title: "Business-First Thinking",
    description:
      "We align technology decisions with business goals to ensure every solution delivers measurable value.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Our solutions are designed to grow with your business, supporting increased users, data, and complexity.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Structured processes and clear milestones ensure predictable timelines and consistent quality.",
  },
  {
    title: "Transparent Communication",
    description:
      "We maintain open communication throughout the project lifecycle with clear documentation and updates.",
  },
  {
    title: "Modern Technology Stack",
    description:
      "We use proven, modern technologies to build secure, maintainable, and future-ready systems.",
  },
  {
    title: "Long-Term Support",
    description:
      "Beyond delivery, we provide ongoing support, optimisation, and guidance to maximise ROI.",
  },
];

export default function WhyChooseUsContent() {
  const approachRef = useRef<HTMLDivElement>(null);
  const [approachStart, setApproachStart] = useState(false);
  const [visibleApproachCount, setVisibleApproachCount] = useState(0);

  useEffect(() => {
    const el = approachRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setApproachStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!approachStart) return;
    if (visibleApproachCount >= approachSteps.length) return;

    const timer = setTimeout(() => {
      setVisibleApproachCount((prev) => prev + 1);
    }, 140);

    return () => clearTimeout(timer);
  }, [approachStart, visibleApproachCount]);

  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <PageHero
        category="Why Choose Us"
        title="A Technology Partner |Focused on Reliability, Clarity, and Long-Term Growth"
        description="Choosing the right technology partner is critical. At Genius Technology, we focus on delivering practical, scalable solutions that support business objectives today and evolve with future needs."
      />

      <section className="w-full py-24 bg-white opacity-0 animate-[fadeUp_0.8s_ease-out_0.15s_forwards]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            What Sets Us Apart
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {valueCards.map((card, index) => (
              <ValueCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        ref={approachRef}
        className="w-full bg-gray-50 py-24 opacity-0 animate-[fadeUp_0.8s_ease-out_0.25s_forwards]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Our Approach
            </h2>
            <p className="mt-6 text-gray-600 max-w-3xl">
              We follow a structured, collaborative approach to ensure clarity,
              accountability, and successful outcomes at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachSteps.map((step, index) => (
              <ApproachCard
                key={step.number}
                step={step}
                visible={index < visibleApproachCount}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-white opacity-0 animate-[fadeUp_0.8s_ease-out_0.35s_forwards]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Built on Trust and Long-Term Partnerships
          </h2>
          <p className="mt-6 text-gray-600">
            Our success is measured by the long-term relationships we build with
            clients. We focus on delivering consistent value, adapting to change,
            and supporting growth at every stage of your digital journey.
          </p>
        </div>
      </section>

      <section className="w-full py-20 border-t border-black/10 opacity-0 animate-[fadeUp_0.8s_ease-out_0.45s_forwards]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Ready to Work With a Reliable Technology Partner?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Let&apos;s discuss how Genius Technology can support your business with
            scalable, dependable digital solutions.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 rounded-lg bg-[var(--brand-blue)] text-white font-medium hover:bg-[var(--brand-blue-dark)] transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="px-8 py-3 rounded-lg border border-[var(--brand-blue)] text-[var(--brand-blue)] font-medium hover:bg-[var(--brand-blue)] hover:text-white transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-2xl p-8 border border-gray-200 bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--brand-blue)] to-transparent" />
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

const ApproachCard = ({
  step,
  visible,
  index,
}: {
  step: { number: string; title: string; description: string };
  visible: boolean;
  index: number;
}) => {
  const cardClass = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-12";

  return (
    <div
      className={`transform-gpu transition-all duration-700 ease-out ${cardClass}`}
    >
      <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-6 transition-all duration-300 hover:border-[var(--brand-blue)] hover:shadow-lg hover:shadow-[var(--brand-blue)]/10 h-full">
        <span className="absolute -bottom-2 -right-2 text-7xl sm:text-8xl font-bold text-gray-100 transition-all duration-300 group-hover:text-[var(--brand-blue)]/20 group-hover:scale-110 select-none">
          {step.number}
        </span>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-lg font-bold transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:text-white group-hover:scale-110">
              {step.number}
            </span>
            {index < approachSteps.length && (
              <div className="hidden sm:flex items-center gap-2 ml-auto text-[var(--brand-blue)]/40 group-hover:text-[var(--brand-blue)] transition-colors duration-300">
                <span className="text-xs font-medium uppercase tracking-wider">
                  Step {index + 1}
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>
          <h3 className="text-xl font-semibold text-black group-hover:text-[var(--brand-blue)] transition-colors duration-300">
            {step.title}
          </h3>
          <p className="mt-2 text-base text-gray-600 leading-relaxed">
            {step.description}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

