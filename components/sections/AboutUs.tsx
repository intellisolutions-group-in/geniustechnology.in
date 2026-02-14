"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  /* ===== Detect when About section enters viewport ===== */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="mb-3 text-sm font-medium tracking-wide text-[var(--brand-blue)] uppercase">
              About Genius Technology
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold leading-snug text-black">
              Technology Built to Support Growth, Scale, and Reliability
            </h2>

            <p className="mt-6 text-base text-gray-600 leading-relaxed">
              Genius Technology is an IT services and software development company
              focused on delivering practical, scalable, and reliable digital
              solutions for modern businesses. We work closely with organisations
              to understand their challenges and design technology that supports
              long-term growth and operational efficiency.
            </p>

            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              From web and mobile application development to cloud solutions,
              digital optimisation, and ongoing support, our approach is centred
              on clarity, quality, and measurable outcomes. We believe technology
              should simplify processes, not complicate them.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center text-[var(--brand-blue)] font-medium hover:underline"
              >
                Learn more about us
              </Link>
            </div>

         
          </div>

          {/* RIGHT CONTENT – IMAGE */}
          <div className={`
            relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl
            transition-all duration-1000 ease-out
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
          `}>
            <Image
              src="/images/about/about.webp"
              alt="About Genius Technology"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;

/* ===== Helper Card – FAR DISTANCE + HOVER ===== */

const AboutCard = ({
  title,
  description,
  animate,
  from,
}: {
  title: string;
  description: string;
  animate: boolean;
  from: "left" | "right" | "top" | "bottom";
}) => {
  const directionClasses = {
    left: "translate-x-[-40px]",
    right: "translate-x-[40px]",
    top: "translate-y-[-40px]",
    bottom: "translate-y-[40px]",
  };

  return (
    <div
      className={`
        border border-gray-200 rounded-lg p-6
        bg-white hover:bg-gray-200
        transform-gpu will-change-transform

        /* MOVEMENT + FADE */
        transition-all duration-[1100ms] ease-out

        /* COLOR ONLY ON HOVER */
        hover:transition-colors hover:duration-300

        ${animate
          ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0"
          : `opacity-0 ${directionClasses[from]} scale-[0.85] blur-sm`
        }
      `}
    >
      <h3 className="text-lg font-semibold text-black">
        {title}
      </h3>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};