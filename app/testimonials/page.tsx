import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Client Testimonials | Genius Technology",
  description:
    "Read what our clients say about working with Genius Technology and the digital solutions we deliver.",
  keywords:
    "Genius Technology Testimonials, Client Reviews, IT Company Reviews, Software Development Feedback",
};

export default function TestimonialsPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="Testimonials"
        title="Trusted by Businesses |Who Value Reliability and Clarity"
        description="We work closely with our clients to build scalable, dependable digital solutions. Here’s what they say about working with us."
      />

      {/* ================= TESTIMONIALS GRID ================= */}
      <section className="w-full py-24 bg-white opacity-0 animate-[fadeUp_0.8s_ease-out_0.15s_forwards]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <TestimonialCard
              name="Amit Patel"
              role="Founder"
              company=""
              quote="Genius Technology delivered exactly what we needed. Clear communication, strong technical understanding, and reliable delivery throughout the project."
            />

            <TestimonialCard
              name="Neha Sharma"
              role="Product Manager"
              company=""
              quote="Their team took the time to understand our requirements and built a solution that scaled smoothly as our user base grew."
            />

            <TestimonialCard
              name="Rahul Mehta"
              role="Operations Head"
              company=""
              quote="What stood out most was their structured approach and attention to long-term maintainability. Highly recommended."
            />

            <TestimonialCard
              name="Priya Desai"
              role="Marketing Lead"
              company=""
              quote="From UI/UX to performance optimisation, the experience was seamless. We appreciated their transparency and responsiveness."
            />

            <TestimonialCard
              name="Sandeep Kulkarni"
              role="Chief Technology Officer"
              company=""
              quote="A dependable technology partner who focuses on clean architecture and scalable systems rather than shortcuts."
            />

            <TestimonialCard
              name="Karan Shah"
              role="Co-Founder"
              company=""
              quote="Working with Genius Technology felt like an extension of our internal team. Professional, reliable, and detail-oriented."
            />
          </div>

        </div>
      </section>

      {/* ================= TRUST STATEMENT ================= */}
      <section className="w-full bg-gray-50 py-24 opacity-0 animate-[fadeUp_0.8s_ease-out_0.3s_forwards]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Long-Term Partnerships, Not Short-Term Projects
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We believe successful digital solutions are built through trust,
            clarity, and consistent execution. Our clients partner with us
            because we focus on reliability, scalability, and long-term value.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-20 border-t border-black/10 opacity-0 animate-[fadeUp_0.8s_ease-out_0.45s_forwards]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Want to Work With a Reliable Technology Partner?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Let’s discuss your requirements and explore how we can help you
            build scalable, dependable digital solutions.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex px-8 py-3 rounded-lg bg-[var(--brand-blue)] text-white font-medium hover:bg-[var(--brand-blue-dark)] transition-colors"
            >
              Contact Us
            </Link>

            <Link
              href="/services"
              className="inline-flex px-8 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENT ================= */

function TestimonialCard({
  name,
  role,
  company,
  quote,
}: {
  name: string;
  role: string;
  company: string;
  quote: string;
}) {
  return (
    <div
      className="
    relative rounded-2xl overflow-hidden
    p-8
    border border-gray-200 bg-white
    transition-all duration-300 ease-out
    hover:-translate-y-2 hover:shadow-xl
  "
    >
      {/* Accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[var(--brand-blue)] to-transparent" />

      <p className="text-gray-600 text-sm leading-relaxed">
        “{quote}”
      </p>

      <div className="mt-6">
        <p className="font-semibold text-black">{name}</p>
        <p className="text-sm text-gray-500">
          {role}
        </p>
      </div>
    </div>
  );
}