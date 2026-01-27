import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  ShieldAlert,
  Eye,
  Search,
  MessageSquare,
  Rocket,
  Shield,
  FileCheck,
  Activity,
  History
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity & Compliance Services | Genius Technology",
  description:
    "Enterprise-grade cybersecurity and compliance services by Genius Technology. We protect your digital assets through rigorous audits, vulnerability assessments, and security implementation.",
};

const features = [
  {
    title: "Vulnerability Assessments",
    desc: "Proactive identification of security weaknesses in your applications, networks, and cloud infrastructure.",
    icon: ShieldAlert
  },
  {
    title: "Penetration Testing",
    desc: "Simulated cyber-attacks to evaluate the strength of your defenses and identify exploitable vulnerabilities.",
    icon: Search
  },
  {
    title: "Compliance Readiness",
    desc: "Expert guidance to help you meet global standards like GDPR, HIPAA, SOC2, and ISO 27001.",
    icon: FileCheck
  },
  {
    title: "Endpoint Protection",
    desc: "Securing all devices connected to your network with advanced threat detection and response systems.",
    icon: Zap
  },
  {
    title: "Security Audits",
    desc: "Comprehensive reviews of your code, architecture, and operational processes for maximum security posture.",
    icon: Eye
  },
  {
    title: "Disaster Recovery Planning",
    desc: "Designing robust backup and business continuity strategies to ensure resilience against data loss.",
    icon: History
  }
];

const techStack = [
  "Kali Linux", "Burp Suite", "OWASP ZAP", "Nessus", "Metasploit", "Splunk",
  "Wireshark", "Azure Sentinel", "AWS GuardDuty", "Snyk", "Prisma Cloud", "SentinelOne"
];

export default function CybersecurityPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="Cybersecurity & Compliance"
        title="Protect Your Business |With Enterprise-Grade Digital Security"
        description="We protect your digital infrastructure and sensitive data from evolving cyber threats. Our security-first approach ensures that your business stays resilient, secure, and compliant."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                Security Is a <span className="text-[var(--brand-blue)]">Process</span>, Not a Product
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                In today's threat landscape, passive defense is not enough. We implement a proactive, multi-layered security strategy that protects your assets across every layer of the technology stack.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Continuous monitoring for real-time threat detection." />
                <BenefitItem text="Rigorous compliance alignment for global markets." />
                <BenefitItem text="Minimized risk of data breaches and downtime." />
                <BenefitItem text="Employee training and security awareness programs." />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <StatCard label="99.9%" desc="Threat Mitigation" />
              <StatCard label="Zero" desc="Critical Breach Record" />
              <StatCard label="24/7" desc="SecOps Monitoring" />
              <StatCard label="Compliant" desc="Ready for Audit" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">Our Security Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A holistic suite of protection and compliance services for the modern enterprise.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Security Toolkit</h2>
          <p className="mt-4 text-gray-500 text-sm">We use advanced security frameworks and tools to protect your digital assets.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Security Lifecycle</h2>
            <p className="mt-4 text-gray-400">A disciplined approach to identifying, protecting, and responding to threats.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={Search} title="Identify" desc="Mapping your digital assets and assessing potential risk surfaces." />
            <ProcessItem num="02" icon={Shield} title="Protect" desc="Implementing controls to defend against known and unknown threats." />
            <ProcessItem num="03" icon={Activity} title="Detect" desc="Continuous monitoring to identify security events in real-time." />
            <ProcessItem num="04" icon={Rocket} title="Recover" desc="Defining response strategies to ensure rapid recovery from incidents." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Secure Your Assets
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to <span className="text-[var(--brand-blue)]">Secure</span> Your Digital Infrastructure?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Don't wait for a breach to happen. Let's work together to build a robust security posture for your business.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Get a Free Security Consultation
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