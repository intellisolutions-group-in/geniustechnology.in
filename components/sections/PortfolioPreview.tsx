"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Enterprise Web Platform",
    category: "Web Development",
    problem:
      "The client needed a scalable web platform to support increasing traffic and complex business workflows.",
    solution:
      "We designed and developed a modular, performance-optimised web application with a scalable architecture.",
    tech: "React, Next.js, Node.js",
  },
  {
    title: "Mobile Application for Service Management",
    category: "App Development",
    problem:
      "Manual service requests caused delays and lack of visibility across teams.",
    solution:
      "We built a cross-platform mobile application to streamline service requests and improve response times.",
    tech: "React Native, REST APIs",
  },
  {
    title: "SEO & Performance Optimisation",
    category: "SEO Services",
    problem:
      "Low search visibility and slow page performance were affecting lead generation.",
    solution:
      "We implemented technical SEO improvements and performance optimisation to improve rankings and load speed.",
    tech: "Technical SEO, Web Performance",
  },
  {
    title: "UI/UX Redesign for SaaS Product",
    category: "UI/UX Design",
    problem:
      "Users struggled with navigation and task completion due to a complex interface.",
    solution:
      "We redesigned the user experience with simplified flows and modern UI patterns.",
    tech: "Figma, UX Research",
  },
];

const PortfolioPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  /* ===== Trigger section ===== */
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

  /* ===== Reveal cards one by one ===== */
  useEffect(() => {
    if (!start) return;
    if (visibleCount >= projects.length) return;

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, 160);

    return () => clearTimeout(timer);
  }, [start, visibleCount]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-24">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <p className="mb-3 text-sm font-medium tracking-wide text-[var(--brand-blue)] uppercase">
              Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-snug">
              Solutions We’ve Delivered for Real Business Challenges
            </h2>
            <p className="mt-4 text-base text-gray-600">
              A selection of projects that demonstrate how we help organisations
              solve complex problems through thoughtful technology solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                visible={index < visibleCount}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-[var(--brand-blue)] font-medium hover:underline"
            >
              View full portfolio →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;

/* ===== Project Card ===== */

const ProjectCard = ({
  project,
  visible,
}: {
  project: {
    title: string;
    category: string;
    problem: string;
    solution: string;
    tech: string;
  };
  visible: boolean;
}) => {
  return (
    <div
      className={`
        border border-gray-200 rounded-lg p-8 bg-gray-50
        transform-gpu
        transition-all duration-700 ease-out
        hover:-translate-y-1 hover:shadow-md
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
        }
      `}
    >
      <p className="text-xs font-medium uppercase text-[var(--brand-blue)]">
        {project.category}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-black">
        {project.title}
      </h3>

      <div className="mt-4 text-sm text-gray-600 leading-relaxed">
        <p>
          <span className="font-medium text-gray-800">Challenge:</span>{" "}
          {project.problem}
        </p>
        <p className="mt-2">
          <span className="font-medium text-gray-800">Solution:</span>{" "}
          {project.solution}
        </p>
      </div>

      <p className="mt-4 text-xs font-medium text-gray-500">
        Technology: {project.tech}
      </p>
    </div>
  );
};