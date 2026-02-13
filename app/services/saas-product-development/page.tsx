import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  Code2,
  Layout,
  Layers,
  Zap,
  ShieldCheck,
  Scaling,
  Database,
  Settings,
  Search,
  MessageSquare,
  Rocket,
  CreditCard,
  Users,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Product Development | Genius Technology",
  description:
    "End-to-end SaaS product development services by Genius Technology. We build scalable, multi-tenant, and high-performance subscription-based software products.",
};

const features = [
  {
    title: "Multi-Tenant Architecture",
    desc: "Robust architectural design that ensures data isolation, security, and scalability for thousands of concurrent customers.",
    icon: Layers
  },
  {
    title: "Subscription Management",
    desc: "Integration with modern billing engines like Stripe or Chargebee for flexible pricing tiers and automated recurring payments.",
    icon: CreditCard
  },
  {
    title: "User Onboarding Flows",
    desc: "Designing seamless sign-up and onboarding experiences that reduce churn and accelerate time-to-value for new users.",
    icon: Users
  },
  {
    title: "SaaS Analytics & Monitoring",
    desc: "Implementing detailed product analytics and infrastructure monitoring to track performance and user health.",
    icon: Activity
  },
  {
    title: "API-First Methodology",
    desc: "Building extensible products with robust APIs that allow for easy integration with third-party tools and ecosystems.",
    icon: Zap
  },
  {
    title: "Automated Scaling",
    desc: "Cloud-native infrastructure that adjusts resources automatically based on user growth and traffic patterns.",
    icon: Scaling
  }
];

const techStack = [
  "Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Stripe API",
  "AWS", "Kubernetes", "GraphQL", "Auth0 / Clerk", "Segment", "Datadog"
];

export default function SaaSDevelopmentPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="SaaS Product Development"
        title="Scale Your Software Vision |With Enterprise-Grade SaaS Engineering"
        description="We partner with startups and enterprises to build, launch, and scale modern SaaS products. Our focus is on multi-tenancy, high availability, and seamless user experiences."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                Build a <span className="text-[var(--brand-blue)]">Profitable & Scalable</span> Digital Product
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                Building a SaaS product is about more than just features. It's about reliability, security, and the ability to grow without technical debt. We help you build a solid foundation for your subscription-based business.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Rapid MVP development to validate your market." />
                <BenefitItem text="Bulletproof data isolation for multi-tenant setups." />
                <BenefitItem text="Global infrastructure for low-latency user access." />
                <BenefitItem text="Continuous delivery for frequent feature updates." />
              </div>
            </div>

            <div className="animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <Image 
                src="/images/services/SaaS-Product-Development.jpg" 
                alt="SaaS Product Development Services"
                width={800}
                height={400}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">Comprehensive SaaS Capabilities</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Technological expertise for the entire SaaS lifecycle, from ideation to global scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="bg-white p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[var(--brand-blue)]/10 flex items-center justify-center mb-8 text-[var(--brand-blue)]">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="w-full py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our SaaS Engineering Stack</h2>
          <p className="mt-4 text-gray-500 text-sm">We use modern, scalable frameworks to build multi-tenant SaaS platforms.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How We Build Your SaaS Product</h2>
            <p className="mt-4 text-gray-400">A product-centric approach focusing on user growth and technical stability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={MessageSquare} title="Market Fit" desc="Validating requirements and mapping features to business goals and MRR." />
            <ProcessItem num="02" icon={Layers} title="MVP Architecture" desc="Designing a modular foundation that allows for rapid scaling and iteration." />
            <ProcessItem num="03" icon={Code2} title="Iterative Build" desc="Shipping features in sprints with constant user feedback loops." />
            <ProcessItem num="04" icon={Rocket} title="Scale & Optimize" desc="Post-launch growth support, cloud optimization, and security hardening." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Build for Scale
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to Build Your <span className="text-[var(--brand-blue)]">SaaS Empire</span>?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Let's discuss how we can help you build a reliable, secure, and profitable SaaS product.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Get a SaaS Strategy Session
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// Subcomponents

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="w-6 h-6 text-[var(--brand-blue)] flex-shrink-0" />
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

const StatCard = ({ label, desc }: { label: string; desc: string }) => (
  <div className="bg-gray-50 p-8 rounded-3xl border border-black/5 text-center">
    <div className="text-2xl font-bold text-black mb-1">{label}</div>
    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{desc}</div>
  </div>
);

const ProcessItem = ({ num, icon: Icon, title, desc }: { num: string; icon: any; title: string, desc: string }) => (
  <div className="text-center group">
    <div className="relative mb-8 flex justify-center">
      <div className="absolute top-1/2 -right-1/2 w-full h-[1px] bg-white/10 hidden md:block" />
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--brand-blue)] relative z-10 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <div className="absolute -top-4 -right-4 text-xs font-bold text-white/20 select-none">{num}</div>
    </div>
    <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed px-2">{desc}</p>
  </div>
);