"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ContactCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  /* ===== Trigger animation on scroll ===== */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--brand-blue)] py-24"
    >
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div
          className={`
            max-w-4xl mx-auto text-center text-white
            transform-gpu
            transition-all duration-700 ease-out
            ${visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }
          `}
        >
          <p className="mb-4 text-sm font-medium tracking-wide uppercase text-white/80">
            Let’s Work Together
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug">
            Ready to Build Scalable Digital Solutions for Your Business?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/90">
            Whether you’re planning a new project, modernising existing systems,
            or looking for long-term technical support, our team is ready to help
            you move forward with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg bg-white text-[var(--brand-blue)] font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>

            <Link
              href="/services"
              className="px-8 py-3 rounded-lg border border-white text-white font-medium hover:bg-white hover:text-[var(--brand-blue)] transition-colors"
            >
              Explore Services
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;