"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-[80vh] sm:min-h-screen flex items-center py-20 sm:py-0">

      {/* 
        IMPORTANT:
        pt-16 = header height (h-16)
        This prevents hero content from hiding behind the sticky navbar
      */}
      <div className="w-full px-4 sm:px-6 lg:px-16 pt-2 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
        <div className="max-w-3xl mx-auto text-center">

          {/* Eyebrow */}
          <p className="mb-4 text-sm font-medium tracking-wide text-black uppercase">
            Take the complexity out of digital transformation
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="text-[var(--brand-blue)]">Genius Technology </span>
            <span className="text-black">– IT Solutions</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Genius Technology provides IT Solutions with operations in India. This is the official website for brand verification and contact information.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg bg-[var(--brand-blue)] text-white font-medium hover:bg-[var(--brand-blue-dark)] transition-colors"
            >
              Get in touch
            </Link>

            <Link
              href="/services"
              className="px-8 py-3 rounded-lg border border-[var(--brand-blue)] text-[var(--brand-blue)] font-medium hover:bg-[var(--brand-blue)] hover:text-white transition-colors"
            >
              Explore services
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
