import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  ShieldCheck,
  Scaling,
  Code2,
  Layout,
  Settings,
  Search,
  MessageSquare,
  Rocket
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services | Genius Technology",
  description:
    "Professional web development services by Genius Technology. We build scalable, secure, and high-performance websites and web applications for modern businesses.",
};

const features = [
  {
    title: "Custom Web Applications",
    desc: "Tailor-made software built to solve specific business problems and automate complex workflows.",
    icon: Code2
  },
  {
    title: "E-Commerce Platforms",
    desc: "Robust online stores with secure payment gateways and seamless inventory management.",
    icon: Globe
  },
  {
    title: "Corporate Websites",
    desc: "Professional, high-converting websites that represent your brand and values with precision.",
    icon: Layout
  },
  {
    title: "CMS Integration",
    desc: "User-friendly content management systems that empower your team to manage content effortlessly.",
    icon: Settings
  },
  {
    title: "API Development",
    desc: "Secure and scalable backends that connect your web frontend with mobile apps or third-party services.",
    icon: Zap
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous monitoring, performance tuning, and technical updates to keep your systems healthy.",
    icon: Search
  }
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "AWS", "Docker", "Vercel", "GraphQL", "Supabase"
];

export default function WebDevelopmentPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="Web Development"
        title="Scalable, Secure Web Solutions |Built for Business Growth"
        description="We design and develop modern websites and web applications that are fast, reliable, and built to scale. Our solutions focus on performance, security, and long-term maintainability."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                Building <span className="text-[var(--brand-blue)]">Performance-Driven</span> Web Ecosystems
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                In a digital-first world, your website is often the primary touchpoint for your customers. We go beyond aesthetics to build web solutions that are engineered for speed, conversion, and reliability.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Lightning-fast load times for better user retention." />
                <BenefitItem text="SEO-optimised architecture for organic visibility." />
                <BenefitItem text="Responsive design across all device categories." />
                <BenefitItem text="Clean, maintainable codebases for long-term growth." />
              </div>
            </div>

            <div className="animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <Image 
                src="/images/services/Web-Development.jpg" 
                alt="Web Development Services"
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">What We Deliver</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services tailored to your unique requirements.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Technology Stack</h2>
          <p className="mt-4 text-gray-500 text-sm">We use the most modern and reliable tools to build your web solutions.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How We Build Your Vision</h2>
            <p className="mt-4 text-gray-400">Our proven development methodology ensures quality and clarity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={MessageSquare} title="Discover" desc="We deep-dive into your business goals, target audience, and functional requirements." />
            <ProcessItem num="02" icon={Code2} title="Architect" desc="Defining the technology stack and system design for maximum performance and security." />
            <ProcessItem num="03" icon={Rocket} title="Develop" desc="High-quality coding with regular updates and feedback cycles to ensure alignment." />
            <ProcessItem num="04" icon={ShieldCheck} title="Launch" desc="Rigorous testing followed by seamless deployment and continuous monitoring." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Start Your Project
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to Build a <span className="text-gradient-brand">Web Solution</span> That Actually Works?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Let's discuss how we can help you build, launch, and scale your next big digital product.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Book a Free Consultation
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