"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What services does Genius Technology provide?",
    answer:
      "We provide end-to-end IT services including web development, mobile app development, UI/UX design, cloud solutions, SEO services, and ongoing maintenance and support.",
  },
  {
    question: "Do you work with startups or only large enterprises?",
    answer:
      "We work with startups, growing businesses, and established enterprises. Our solutions are tailored to match the scale, goals, and technical needs of each organisation.",
  },
  {
    question: "How do you ensure project quality and timely delivery?",
    answer:
      "We follow structured development processes, clear communication, and regular progress reviews to ensure quality, transparency, and predictable delivery timelines.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we offer ongoing maintenance, monitoring, updates, and technical support to ensure long-term reliability and performance after launch.",
  },
];

const FaqPreview = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-24">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-medium tracking-wide text-[var(--brand-blue)] uppercase">
              FAQs
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-snug">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Quick answers to common questions about our services, process, and
              support.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="py-6">
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-base font-medium text-black">
                      {faq.question}
                    </span>
                    <span className="ml-4 text-xl font-light text-gray-500">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`
                      overflow-hidden transition-all duration-400 ease-in-out
                      ${isOpen ? "max-h-40 mt-3" : "max-h-0"}
                    `}
                  >
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center text-[var(--brand-blue)] font-medium hover:underline"
            >
              View all FAQs →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqPreview;