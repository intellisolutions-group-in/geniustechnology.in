import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  Code2,
  Zap,
  ShieldCheck,
  Database,
  Settings,
  Search,
  MessageSquare,
  Rocket,
  Server,
  Layers,
  Cpu,
  Workflow
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development | Genius Technology",
  description:
    "Bespoke software development services by Genius Technology. We build tailor-made, enterprise-grade software solutions to solve complex business challenges.",
};

const features = [
  {
    title: "Enterprise Software Solutions",
    desc: "Robust, scalable systems designed to manage large-scale operations and complex business logic.",
    icon: Server
  },
  {
    title: "Legacy System Modernization",
    desc: "Updating outdated software with modern architectures while preserving critical business data and functionality.",
    icon: Zap
  },
  {
    title: "System Integration Services",
    desc: "Connecting disparate software platforms into a unified, high-performing ecosystem.",
    icon: Settings
  },
  {
    title: "Custom CRM & ERP",
    desc: "Building management tools perfectly aligned with your unique operational workflows and reporting needs.",
    icon: Database
  },
  {
    title: "Business Process Automation",
    desc: "Developing intelligent software to eliminate manual tasks and improve organizational efficiency.",
    icon: Workflow
  },
  {
    title: "Software Re-Engineering",
    desc: "Optimizing existing codebases for better performance, security, and future-ready scalability.",
    icon: Cpu
  }
];

const techStack = [
  "Java", "Python", "Go", "C# .NET", "Node.js", "Spring Boot",
  "Django", "Microservices", "Kafka", "Docker", "Kubernetes", "PostgreSQL"
];

export default function CustomSoftwarePage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="Custom Software"
        title="Bespoke Software Solutions |Built for Complex Business Needs"
        description="We translate complex business requirements into high-quality, reliable, and scalable software. Our custom solutions are built to solve your unique challenges and drive long-term value."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                Software That <span className="text-[var(--brand-blue)]">Adapts to Your Business</span>, Not Vice Versa
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                Off-the-shelf software often forces you to compromise on your processes. Our custom development approach ensures that every feature and workflow is built exactly as your business needs it.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Fully proprietary solutions with zero licensing fees." />
                <BenefitItem text="Seamless integration with your existing IT ecosystem." />
                <BenefitItem text="Ownership of source code and intellectual property." />
                <BenefitItem text="Long-term support and iterative evolution support." />
              </div>
            </div>

            <div className="animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <Image 
                src="/images/services/Custom-Software-Development.jpg" 
                alt="Custom Software Development Services"
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">Our Development Capabilities</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              End-to-end software engineering focus on stability, performance, and real-world results.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Backend & Architecture Expertise</h2>
          <p className="mt-4 text-gray-500 text-sm">We build on a foundation of high-performance backend technologies and clean architecture.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Software Lifecycle</h2>
            <p className="mt-4 text-gray-400">A disciplined engineering approach for high-stakes business software.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={MessageSquare} title="Requirements" desc="Detailed discovery and functional specification documentation." />
            <ProcessItem num="02" icon={Layers} title="Design" desc="System architecture and database schema design for scalability." />
            <ProcessItem num="03" icon={Code2} title="Build" desc="Agile coding with regular demos and continuous integration." />
            <ProcessItem num="04" icon={ShieldCheck} title="Validate" desc="Rigorous QA, security audits, and production stabilization." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Build Your Solution
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to <span className="text-[var(--brand-blue)]">Engineer</span> Your competitive Advantage?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Discuss your complex software requirements with our senior engineers and architects.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Consult a Tech Architect
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