import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Our Process | Genius Technology – How We Deliver Reliable Solutions",
  description:
    "Discover the structured development process followed by Genius Technology to deliver scalable, secure, and business-focused digital solutions.",
};

export default function OurProcessPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="Our Process"
        title="A Structured Approach |to Building Reliable Digital Solutions"
        description="At Genius Technology, we follow a proven, transparent process that ensures every solution is aligned with business goals, built with quality, and delivered with confidence."
      />

      {/* ================= INTRO ================= */}
      <section className="w-full py-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.15s_forwards]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Why Our Process Matters
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Successful digital products are not built by chance. They require
            clarity, planning, technical expertise, and continuous improvement.
            Our process reduces risk, improves predictability, and ensures that
            every project delivers measurable business value.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether we are building a web platform, mobile application, cloud
            infrastructure, or enterprise system, our approach remains focused
            on long-term reliability and scalability.
          </p>
        </div>
      </section>

      {/* ================= PROCESS STEPS ================= */}
      <section className="w-full bg-gray-50 py-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.3s_forwards]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Our Delivery Framework
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "1. Discovery & Planning",
                desc: "We understand business goals, user needs, technical constraints, and success metrics before writing a single line of code.",
              },
              {
                title: "2. Design & Architecture",
                desc: "We define system architecture, user experience, and technical foundations to ensure scalability and maintainability.",
              },
              {
                title: "3. Development & Integration",
                desc: "Our engineers build secure, high-performance solutions while integrating required third-party systems and APIs.",
              },
              {
                title: "4. Testing & Quality Assurance",
                desc: "Every feature is tested for functionality, performance, security, and reliability before release.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-xl bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-black">{step.title}</h3>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTINUOUS SUPPORT ================= */}
      <section className="w-full py-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.45s_forwards]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Launch, Support & Scale
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Our responsibility does not end at launch. We provide continuous
            support, monitoring, and optimisation to ensure your systems remain
            stable as usage grows and requirements evolve.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <li>Post-launch monitoring and performance tracking</li>
            <li>Security updates and system maintenance</li>
            <li>Feature enhancements and scalability planning</li>
            <li>Long-term technical partnership</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-20 border-t border-black/10 opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Ready to Start a Well-Structured Project?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Let’s discuss your requirements and apply a proven process that
            delivers reliable, scalable results.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex px-8 py-3 rounded-lg bg-[var(--brand-blue)] text-white font-medium hover:bg-[var(--brand-blue-dark)] transition-colors"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}