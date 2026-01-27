import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "FAQ | Genius Technology – Common Questions Answered",
  description:
    "Find answers to frequently asked questions about Genius Technology’s services, processes, support, timelines, and engagement models.",
};

const faqData = [
  {
    category: "General",
    items: [
      {
        q: "What services does Genius Technology provide?",
        a: "Genius Technology provides end-to-end IT services including web development, mobile app development, cloud solutions, digital marketing, SEO services, software consulting, and long-term maintenance and support.",
      },
      {
        q: "Where is Genius Technology located?",
        a: "Our headquarters is located in Vadodara, Gujarat, India. We also work with clients remotely across India.",
      },
      {
        q: "Do you work with startups or enterprises?",
        a: "We work with startups, growing businesses, and enterprise clients. Our solutions are designed to scale as your business grows.",
      },
    ],
  },
  {
    category: "Project & Process",
    items: [
      {
        q: "How do you start a new project?",
        a: "Every project starts with requirement analysis and technical consultation to understand business goals, scope, and constraints before proposing a solution.",
      },
      {
        q: "Do you follow an agile development process?",
        a: "Yes. We primarily follow agile and iterative development methodologies to ensure flexibility, transparency, and continuous improvement.",
      },
      {
        q: "How long does a typical project take?",
        a: "Project timelines vary depending on scope and complexity. Smaller projects may take a few weeks, while larger systems may take several months.",
      },
      {
        q: "Will I receive regular progress updates?",
        a: "Yes. We maintain transparent communication and provide regular updates through meetings, reports, or project management tools.",
      },
    ],
  },
  {
    category: "Technology & Quality",
    items: [
      {
        q: "Which technologies do you work with?",
        a: "We work with modern technologies including React, Next.js, Node.js, cloud platforms, DevOps tools, and scalable backend architectures.",
      },
      {
        q: "How do you ensure code quality?",
        a: "We follow best practices including code reviews, testing, performance optimisation, and security checks before deployment.",
      },
      {
        q: "Do you provide documentation?",
        a: "Yes. We provide technical documentation to ensure maintainability and smooth handover.",
      },
    ],
  },
  {
    category: "Support & Maintenance",
    items: [
      {
        q: "Do you offer post-launch support?",
        a: "Yes. We provide ongoing maintenance, monitoring, updates, and optimisation services after project delivery.",
      },
      {
        q: "Can you work on an existing system?",
        a: "Yes. We can audit, improve, optimise, or extend existing systems built by other vendors.",
      },
      {
        q: "How do you handle bug fixes?",
        a: "Bug fixes are handled based on priority and severity, with clear turnaround timelines.",
      },
    ],
  },
  {
    category: "Engagement & Pricing",
    items: [
      {
        q: "Do you offer fixed-price or hourly engagement models?",
        a: "We offer flexible engagement models including fixed-price, time-based, and long-term partnerships based on project needs.",
      },
      {
        q: "Is my project idea confidential?",
        a: "Yes. We treat all project discussions and shared information as confidential.",
      },
      {
        q: "How do I get started?",
        a: "You can contact us through the contact form on our website, and our team will reach out to discuss your requirements.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="FAQ"
        title="Frequently Asked |Questions"
        description="Answers to common questions about our services, processes, and engagement approach."
      />

      {/* ================= FAQ CONTENT ================= */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {faqData.map((section) => (
            <div key={section.category} className="mb-16">
              <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6">
                {section.category}
              </h2>

              <div className="space-y-4">
                {section.items.map((item, index) => (
                  <FAQItem key={index} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}

/* ================= FAQ ITEM ================= */

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details
      className="
        group
        rounded-xl
        border border-gray-200
        p-6
        cursor-pointer
        transition-all
        hover:shadow-md
      "
    >
      <summary className="flex justify-between items-center font-medium text-black">
        {question}
        <span className="ml-4 text-[var(--brand-blue)] group-open:rotate-45 transition-transform">
          +
        </span>
      </summary>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {answer}
      </p>
    </details>
  );
}