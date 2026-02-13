import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  Cloud,
  Zap,
  ShieldCheck,
  Scaling,
  Database,
  Settings,
  Search,
  MessageSquare,
  Rocket,
  Server,
  Lock,
  Workflow
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Solutions | Genius Technology",
  description:
    "Secure, scalable, and high-performance cloud infrastructure services by Genius Technology. We specialize in cloud migration, architecture, and optimization.",
};

const features = [
  {
    title: "Cloud Migration",
    desc: "Seamlessly transition your legacy applications and data to the cloud with zero downtime and maximum reliability.",
    icon: Rocket
  },
  {
    title: "Serverless Architecture",
    desc: "Build highly responsive applications that scale automatically without the overhead of managing hardware.",
    icon: Zap
  },
  {
    title: "Cloud Security & Compliance",
    desc: "Implement enterprise-grade security protocols and ensure compliance with global standards like GDPR and HIPAA.",
    icon: Lock
  },
  {
    title: "Managed Cloud Services",
    desc: "24/7 monitoring, maintenance, and optimization of your cloud environment for peak performance.",
    icon: Settings
  },
  {
    title: "Disaster Recovery",
    desc: "Robust backup and recovery solutions to ensure your business stays resilient during unexpected outages.",
    icon: ShieldCheck
  },
  {
    title: "DevOps & Automation",
    desc: "Streamline your development lifecycle with CI/CD pipelines and automated infrastructure deployment.",
    icon: Workflow
  }
];

const techStack = [
  "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform",
  "Ansible", "Jenkins", "Cloudflare", "Firebase", "Redis", "Elasticsearch"
];

export default function CloudSolutionsPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="Cloud Solutions"
        title="Future-Proof Your Infrastructure |With Scalable Cloud Solutions"
        description="We help organizations leverage the power of the cloud to achieve unparalleled scalability, security, and operational efficiency. From strategy to migration, we've got you covered."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                Achieve Real <span className="text-[var(--brand-blue)]">Operational Agility</span> Through the Cloud
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                Modern business demands speed and flexibility. Our cloud solutions enable you to deploy faster, scale instantly, and reduce infrastructure costs while maintaining top-tier security.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Pay-as-you-go pricing for cost optimization." />
                <BenefitItem text="Multi-cloud and hybrid cloud strategy support." />
                <BenefitItem text="Automated scaling to handle traffic spikes." />
                <BenefitItem text="Proactive threat detection and vulnerability management." />
              </div>
            </div>

            <div className="animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <Image 
                src="/images/services/Cloud-Solutions.jpg" 
                alt="Cloud Solutions Services"
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">Comprehensive Cloud Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Tailored cloud engineering services designed for modern digital organizations.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Cloud Ecosystem</h2>
          <p className="mt-4 text-gray-500 text-sm">We leverage global cloud providers and DevOps tools for peak performance.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Cloud Adoption Roadmap</h2>
            <p className="mt-4 text-gray-400">A structured path to a secure and scalable cloud infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={Search} title="Assess" desc="Evaluating current infrastructure and identifying high-impact cloud opportunities." />
            <ProcessItem num="02" icon={Server} title="Architect" desc="Designing a cloud-native or hybrid architecture focused on security and scale." />
            <ProcessItem num="03" icon={Rocket} title="Migrate" desc="Executing data and application transfer with proven tools to ensure zero loss." />
            <ProcessItem num="04" icon={Scaling} title="Optimize" desc="Continuously monitoring and fine-tuning for cost and performance excellence." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Modernize Your IT
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to <span className="text-[var(--brand-blue)]">Accelerate</span> Your Cloud Journey?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Our cloud architects are ready to help you navigate the complexities of modern infrastructure.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Get a Free Infrastructure Audit
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