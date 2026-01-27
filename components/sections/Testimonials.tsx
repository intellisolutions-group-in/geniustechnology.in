"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Arjun Malhotra",
    role: "Chief Technology Officer",
    quote:
      "Genius Technology helped us build a scalable digital platform that significantly improved system performance and reliability. Their approach was structured, transparent, and highly professional.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    quote:
      "The team understood our business goals clearly and delivered solutions that improved both user experience and digital visibility. Communication throughout the project was excellent.",
  },
  {
    name: "Rahul Verma",
    role: "Operations Manager",
    quote:
      "Their development process was well organised, and the final solution aligned perfectly with our operational requirements. We appreciated their attention to detail and reliability.",
  },
  {
    name: "Ananya Gupta",
    role: "Product Manager",
    quote:
      "Working with Genius Technology was smooth and efficient. They translated complex requirements into a clean, user-friendly product that our customers love using.",
  },
  {
    name: "Vikram Singh",
    role: "Technical Lead",
    quote:
      "The technical expertise of the team stood out. From architecture decisions to implementation, everything was handled with clarity and precision.",
  },
  {
    name: "Neha Patel",
    role: "Business Development Head",
    quote:
      "Their solutions helped streamline our processes and improve overall efficiency. We value their long-term support and collaborative approach.",
  },
];

const Testimonials = () => {
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

  /* ===== Reveal testimonials one by one ===== */
  useEffect(() => {
    if (!start) return;
    if (visibleCount >= testimonials.length) return;

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, 150);

    return () => clearTimeout(timer);
  }, [start, visibleCount]);

  return (
    <section ref={sectionRef} className="w-full bg-gray-50 py-24">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <p className="mb-3 text-sm font-medium tracking-wide text-[var(--brand-blue)] uppercase">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-snug">
              What Our Clients Say About Working With Us
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Feedback from professionals who have partnered with us to deliver
              reliable, scalable, and effective digital solutions.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                visible={index < visibleCount}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;

/* ===== Testimonial Card ===== */

const TestimonialCard = ({
  testimonial,
  visible,
}: {
  testimonial: {
    name: string;
    role: string;
    quote: string;
  };
  visible: boolean;
}) => {
  return (
    <div
      className={`
        h-full border border-gray-200 rounded-lg p-8 bg-white
        transform-gpu will-change-transform
        transition-all duration-700 ease-out
        hover:-translate-y-1 hover:shadow-md
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
        }
      `}
    >
      <p className="text-sm text-gray-600 leading-relaxed">
        “{testimonial.quote}”
      </p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-black">
          {testimonial.name}
        </p>
        <p className="text-xs text-gray-500">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
};