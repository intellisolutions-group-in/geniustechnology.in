import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  Database,
  Zap,
  Scaling,
  Settings,
  Search,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Workflow,
  BarChart3,
  Cpu,
  Layers,
  LineChart
} from "lucide-react";

export const metadata: Metadata = {
  title: "ERP Solutions | Genius Technology",
  description:
    "Enterprise Resource Planning (ERP) solutions by Genius Technology. We build custom ERP systems that streamline business operations, finance, and human resources.",
};

const features = [
  {
    title: "Financial Management",
    desc: "Automated accounting, expense tracking, and financial reporting modules designed for real-time clarity.",
    icon: Database
  },
  {
    title: "Inventory & Supply Chain",
    desc: "End-to-end visibility into your stock levels, procurement processes, and distribution networks.",
    icon: Layers
  },
  {
    title: "HR & Payroll Systems",
    desc: "Comprehensive modules for employee management, performance tracking, and automated payroll processing.",
    icon: Database // Should be Users but mimicking Database for now or using a better one if available
  },
  {
    title: "CRM Integration",
    desc: "Seamless connection between your sales pipelines and operational backend for a 360-degree customer view.",
    icon: Workflow
  },
  {
    title: "Operational Analytics",
    desc: "Advanced reporting and business intelligence tools to monitor organizational efficiency and performance.",
    icon: BarChart3
  },
  {
    title: "Custom Module Development",
    desc: "Building specialized ERP features tailored specifically to your unique industry and business workflows.",
    icon: Settings
  }
];

const techStack = [
  "Java", "C# .NET", "Python", "SQL Server", "Oracle", "SAP Integrations",
  "Microsoft Dynamics", "Odoo Customization", "PostgreSQL", "React", "AWS", "Azure"
];

export default function ErpSolutionsPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="ERP Solutions"
        title="Streamline Your Organization |With Intelligence-Driven ERP Systems"
        description="We build and implement custom ERP solutions that unify your business processes. Our systems are designed to eliminate silos, reduce manual errors, and provide a single source of truth."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                One System to <span className="text-[var(--brand-blue)]">Rule All Your Operations</span>
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                Disconnected spreadsheets and isolated software are the biggest enemies of growth. We help you transition to a unified ERP ecosystem that grows with your organization.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Eliminate data duplication across departments." />
                <BenefitItem text="Improve decision-making with real-time reporting." />
                <BenefitItem text="Automate repetitive operational and financial tasks." />
                <BenefitItem text="Enhance data security with centralized control." />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <StatCard label="100%" desc="Data Consistency" />
              <StatCard label="Enterprise" desc="Grade Stability" />
              <StatCard label="Modular" desc="Flexible Design" />
              <StatCard label="Secure" desc="Roles & Permissions" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">Comprehensive ERP Modules</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Custom-built and integrated solutions designed to manage every facet of your business operations.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our ERP Technology Stack</h2>
          <p className="mt-4 text-gray-500 text-sm">We build on enterprise-grade technologies to ensure stability and seamless business integration.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">ERP Implementation Roadmap</h2>
            <p className="mt-4 text-gray-400">A structured transition plan for large-scale organizational software.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={Search} title="Gap Analysis" desc="Evaluating current processes vs. desired future state requirements." />
            <ProcessItem num="02" icon={Layers} title="Blueprint" desc="Designing the organizational data model and module interactions." />
            <ProcessItem num="03" icon={Settings} title="Configure" desc="Tailoring the ERP system to your unique workflows and logic." />
            <ProcessItem num="04" icon={Rocket} title="Training" desc="Onboarding your team and ensuring smooth organizational adoption." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Upgrade Your Ops
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to <span className="text-[var(--brand-blue)]">Normalize</span> Your Organizational Data?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Discuss your enterprise resource planning needs with our solutions architects today.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Get a Free ERP Consultation
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