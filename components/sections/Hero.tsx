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
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <p className="mb-4 text-sm font-medium tracking-wide text-black uppercase">
            Take the complexity out of digital transformation
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="text-[var(--brand-blue)]">Fast, </span>
            <span className="text-black">Scalable </span>
            <span className="text-black">Reliable </span>
            <span className="text-[var(--brand-blue)]">
              Digital Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl">
            Modern businesses expect technology to be intuitive, dependable, and
            easy to scale. Whether it's building a new web platform, launching a
            mobile application, integrating cloud infrastructure, or optimising
            digital performance, these processes should be seamless and efficient.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
            That's where <strong>Genius Technology</strong> comes in — enabling
            organisations to design, develop, and manage digital solutions that
            improve operational efficiency and deliver meaningful user
            experiences. From strategy to execution, we help businesses move
            faster, reduce complexity, and achieve long-term growth through
            well-engineered technology solutions.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
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
