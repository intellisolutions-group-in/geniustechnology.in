import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  Workflow,
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
  Globe,
  Monitor
} from "lucide-react";

export const metadata: Metadata = {
  title: "System Integration Services | Genius Technology",
  description:
    "Professional system integration services by Genius Technology. We connect disparate software platforms, CRMs, ERPs, and third-party tools into a unified ecosystem.",
};

const features = [
  {
    title: "CRM & ERP Integration",
    desc: "Connecting your sales and operational platforms to ensure a unified view of your customers and business data.",
    icon: Database
  },
  {
    title: "Custom Middleware Development",
    desc: "Building specialized software layers that facilitate communication and data exchange between incompatible systems.",
    icon: Layers
  },
  {
    title: "Legacy System Connectivity",
    desc: "Bridging the gap between modern cloud applications and legacy on-premise systems through secure adapters.",
    icon: Zap
  },
  {
    title: "Data Synchronization",
    desc: "Ensuring real-time data consistency across all your business applications through automated sync processes.",
    icon: Workflow
  },
  {
    title: "Third-Party API Integration",
    desc: "Rapidly connecting your digital products with payment gateways, shipping providers, and marketing tools.",
    icon: Globe
  },
  {
    title: "Real-Time Monitoring",
    desc: "Implementing visibility layers into your integrated systems to detect and resolve connectivity issues instantly.",
    icon: Monitor
  }
];

const techStack = [
  "MuleSoft", "Zapier", "n8n", "Node.js", "Python", "REST / GraphQL",
  "RabbitMQ", "Kafka", "AWS EventBridge", "Azure Service Bus", "Webhooks", "OIDC"
];

export default function SystemIntegrationPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="System Integration"
        title="Unify Your Digital Ecosystem |With Intelligent Connectivity"
        description="We help organizations break down data silos by connecting disparate software platforms into one high-performing ecosystem. Our integration services focus on reliability, security, and real-time data flow."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                Software Shouldn't <span className="text-[var(--brand-blue)]">Live in Isolation</span>
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                When your systems don't talk to each other, your business loses efficiency and clarity. We build the bridges needed to ensure that your data flows seamlessly across your entire organization.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Single point of truth for critical business data." />
                <BenefitItem text="Elimination of manual data entry and human error." />
                <BenefitItem text="Faster cross-departmental workflows and visibility." />
                <BenefitItem text="Scalable architecture for future tool additions." />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <StatCard label="99.9%" desc="Sync Reliability" />
              <StatCard label="Real-Time" desc="Data Exchange" />
              <StatCard label="Secure" desc="Encrypted Flow" />
              <StatCard label="Scalable" desc="High Throughput" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">Our Integration Capabilities</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Professional connectivity solutions for complex organizational software landscapes.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Integration Toolkit</h2>
          <p className="mt-4 text-gray-500 text-sm">We leverage modern middleware and API tools to connect your enterprise ecosystem.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Integration Roadmap</h2>
            <p className="mt-4 text-gray-400">A structured approach to connecting mission-critical systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={Search} title="Audit" desc="Mapping all existing systems and identifying data flow requirements." />
            <ProcessItem num="02" icon={Layers} title="Architect" desc="Designing the connectivity layer and selecting the right integration tools." />
            <ProcessItem num="03" icon={Workflow} title="Connect" desc="High-quality development of APIs, webhooks, and synchronization logic." />
            <ProcessItem num="04" icon={Monitor} title="Monitor" desc="Continuous tracking of system health and automated error recovery." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Unify Your Tools
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to <span className="text-[var(--brand-blue)]">Simplify</span> Your Digital Infrastructure?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Discuss your system integration challenges with our senior software engineers and architects.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Consult an Integration Expert
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