import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  Settings,
  Zap,
  ShieldCheck,
  Scaling,
  Search,
  MessageSquare,
  Rocket,
  Wrench,
  ShieldAlert,
  Clock,
  Activity,
  LifeBuoy,
  RefreshCw
} from "lucide-react";

export const metadata: Metadata = {
  title: "Maintenance & Support | Genius Technology",
  description:
    "Reliable software maintenance and technical support services by Genius Technology. We ensure your digital products stay healthy, secure, and up-to-date.",
};

const features = [
  {
    title: "24/7 Monitoring",
    desc: "Continuous automated tracking of application performance, server health, and user activity to detect issues proactively.",
    icon: Activity
  },
  {
    title: "Security Patches & Updates",
    desc: "Timely implementation of security updates and framework patches to protect your software from new vulnerabilities.",
    icon: ShieldCheck
  },
  {
    title: "Bug Fixing & QA",
    desc: "Rapid identification and resolution of technical bugs to ensure a smooth, uninterrupted user experience.",
    icon: Wrench
  },
  {
    title: "Performance Optimization",
    desc: "Ongoing fine-tuning of code, database queries, and server configurations to maintain peak application speed.",
    icon: Zap
  },
  {
    title: "Technical Support",
    desc: "A dedicated team available to resolve technical queries, provide guidance, and handle emergency outages.",
    icon: LifeBuoy
  },
  {
    title: "System Modernization",
    desc: "Iterative improvements and feature updates to keep your digital products relevant and modern over time.",
    icon: RefreshCw
  }
];

const techStack = [
  "New Relic", "Datadog", "Sentry", "PostgreSQL", "AWS CloudWatch", "Jenkins",
  "GitHub Actions", "Docker", "Pingdom", "PagerDuty", "LogRocket", "Pingdom"
];

export default function MaintenanceSupportPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="Maintenance & Support"
        title="Predictable Technical Support |for Your Business Continuity"
        description="We ensure your digital products stay healthy, secure, and performant long after launch. Our maintenance services focus on proactive resolution, security readiness, and technical excellence."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                Your Technology <span className="text-[var(--brand-blue)]">Never Sleeps</span>, Nor Do We
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                Software is never "finished." It requires constant care to remain secure and performant. We take the technical burden off your shoulders so you can focus on growing your core business.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="High uptime target with incident response protocols." />
                <BenefitItem text="Proactive threat detection and security hardening." />
                <BenefitItem text="Consistent performance tuning for fast user experiences." />
                <BenefitItem text="Dedicated technical team that understands your codebase." />
              </div>
            </div>

            <div className="animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <Image 
                src="/images/services/Maintenance-&-Support.jpg" 
                alt="Maintenance & Support Services"
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">Comprehensive Support Plans</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Reliable engineering support designed to maintain the long-term health of your digital assets.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Monitoring Toolkit</h2>
          <p className="mt-4 text-gray-500 text-sm">We use advanced monitoring and observability tools to ensure your systems stay healthy and performant.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Support Lifecycle</h2>
            <p className="mt-4 text-gray-400">A proactive approach to software health and organizational peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={Search} title="Analyze" desc="Baseline performance audit and security posture assessment." />
            <ProcessItem num="02" icon={Settings} title="Setup" desc="Implementing monitoring agents and automated alerting systems." />
            <ProcessItem num="03" icon={Activity} title="Monitor" desc="24/7 real-time tracking of system health and security events." />
            <ProcessItem num="04" icon={RefreshCw} title="Evolve" desc="Continuous improvement work to keep the application modern and fast." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Stay Reliable
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to <span className="text-[var(--brand-blue)]">Future-Proof</span> Your Application?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Discuss our monthly maintenance and retainer plans with our support engineers today.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Get a Free Support Quote
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