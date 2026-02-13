import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  Terminal,
  Zap,
  ShieldCheck,
  Scaling,
  Database,
  Settings,
  Search,
  MessageSquare,
  Rocket,
  Layers,
  Code2,
  Workflow,
  Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: "API Development & Integration | Genius Technology",
  description:
    "Expert API development and system integration services by Genius Technology. We build robust, secure, and high-performance APIs for seamless data exchange.",
};

const features = [
  {
    title: "RESTful API Design",
    desc: "Building standardized, resource-oriented APIs that are easy to consume and maintain over time.",
    icon: Globe
  },
  {
    title: "GraphQL Implementation",
    desc: "Leveraging GraphQL for more efficient data fetching and improved performance in complex client-server interactions.",
    icon: Layers
  },
  {
    title: "API Security & Gateway",
    desc: "Implementing OAuth2, JWT, and rate limiting to protect your APIs from unauthorized access and abuse.",
    icon: ShieldCheck
  },
  {
    title: "Microservices Connectivity",
    desc: "Designing secure and reliable communication layers between distributed microservices using event-driven architectures.",
    icon: Workflow
  },
  {
    title: "Third-Party Integrations",
    desc: "Seamlessly connecting your systems with external services like payment gateways, CRMs, and ERPs.",
    icon: Settings
  },
  {
    title: "API Documentation (Swagger)",
    desc: "Providing comprehensive, interactive documentation to ensure smooth integration for internal and external developers.",
    icon: Terminal
  }
];

const techStack = [
  "Node.js", "Python", "Go", "Express", "FastAPI", "GraphQL",
  "Apollo", "PostgreSQL", "MongoDB", "Redis", "Swagger / OpenAPI", "Postman"
];

export default function ApiDevelopmentPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="API Development"
        title="Robust & Secure APIs |for Seamless System Connectivity"
        description="We design and build high-performance APIs that power modern digital ecosystems. Our focus is on security, scalability, and ease of integration for developers."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                Connect Your Digital <span className="text-[var(--brand-blue)]">Ecosystem</span> with Ease
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                APIs are the glue of the modern internet. We build connectivity layers that are not just bridges between systems, but strategic assets that enable innovation and growth.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Standardized protocols for predictable integration." />
                <BenefitItem text="High-performance backends with low latency response." />
                <BenefitItem text="Comprehensive error handling and logging." />
                <BenefitItem text="Versioned APIs to ensure backward compatibility." />
              </div>
            </div>

            <div className="animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <Image 
                src="/images/services/API-Development.jpg" 
                alt="API Development Services"
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">Our API Solutions</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Professional engineering for the backbone of your digital applications.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Backend Ecosystem</h2>
          <p className="mt-4 text-gray-500 text-sm">We build robust APIs using high-performance backend frameworks and databases.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our API Design Methodology</h2>
            <p className="mt-4 text-gray-400">A disciplined approach to building developer-friendly and secure APIs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={Search} title="Contract First" desc="Defining the API specification (OpenAPI) before implementation." />
            <ProcessItem num="02" icon={Terminal} title="Development" desc="High-quality coding with meticulous focus on performance and security." />
            <ProcessItem num="03" icon={ShieldCheck} title="Validation" desc="Rigorous integration and security testing for every endpoint." />
            <ProcessItem num="04" icon={Rocket} title="Documentation" desc="Publishing clear, interactive documentation for effortless consumption." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Connect Your Apps
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to Build a <span className="text-[var(--brand-blue)]">Connected</span> Future?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Discuss your system integration and API development needs with our senior software engineers.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Consult an API Architect
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