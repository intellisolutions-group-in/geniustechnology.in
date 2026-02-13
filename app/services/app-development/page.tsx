import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Zap,
  ShieldCheck,
  Scaling,
  Code2,
  Layout,
  Settings,
  Search,
  MessageSquare,
  Rocket,
  Layers,
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "App Development Services | Genius Technology",
  description:
    "Professional mobile app development services by Genius Technology. We build high-performance iOS, Android, and cross-platform mobile applications.",
};

const features = [
  {
    title: "iOS App Development",
    desc: "Swift and Objective-C based native applications that leverage the full potential of the Apple ecosystem.",
    icon: Smartphone
  },
  {
    title: "Android App Development",
    desc: "Modern, secure Android applications built with Kotlin and Java for a broad range of devices.",
    icon: Cpu
  },
  {
    title: "Cross-Platform Solutions",
    desc: "React Native and Flutter apps that offer native performance with a single codebase for faster time-to-market.",
    icon: Layers
  },
  {
    title: "Mobile UI/UX Design",
    desc: "Intuitive, thumb-friendly interfaces designed for maximum user engagement and retention.",
    icon: Layout
  },
  {
    title: "Backend for Mobile",
    desc: "Scalable APIs and cloud backends optimized for mobile latency and intermittent connectivity.",
    icon: Zap
  },
  {
    title: "App Testing & QA",
    desc: "Rigorous testing on multiple devices and OS versions to ensure a bug-free user experience.",
    icon: ShieldCheck
  }
];

const techStack = [
  "React Native", "Flutter", "Kotlin", "Swift", "Dart", "Firebase",
  "Node.js", "GraphQL", "AWS Mobile Hub", "SQLite", "Redux", "Jest"
];

export default function AppDevelopmentPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="App Development"
        title="High-Performance Mobile Apps |Built for the Modern World"
        description="We build mobile applications that deliver consistent, native-like experiences across iOS and Android. Our apps are designed for speed, security, and seamless user engagement."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                Empowering Businesses With <span className="text-[var(--brand-blue)]">Mobile-First</span> Innovation
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                Mobile apps are the heart of modern customer engagement. We help you stay ahead by building mobile solutions that are not just functional, but delightful to use.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Offline-first capabilities for uninterrupted usage." />
                <BenefitItem text="Biometric security and data encryption." />
                <BenefitItem text="Smooth animations and high-performance rendering." />
                <BenefitItem text="Deep integration with device hardware (GPS, Camera, etc)." />
              </div>
            </div>

            <div className="animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <Image 
                src="/images/services/App-Development.jpg" 
                alt="App Development Services"
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">Mobile Solutions We Offer</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Custom mobile development tailored to your enterprise or startup requirements.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Mobile Technology Stack</h2>
          <p className="mt-4 text-gray-500 text-sm">We leverage industry-leading mobile frameworks for native performance.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How We Build Your Mobile App</h2>
            <p className="mt-4 text-gray-400">A rigorous process for delivering high-quality mobile products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={MessageSquare} title="Concept & Strategy" desc="Defining the app's core value proposition and user journeys." />
            <ProcessItem num="02" icon={Layout} title="UI/UX Prototyping" desc="Designing interactive prototypes to validate user experience early." />
            <ProcessItem num="03" icon={Code2} title="Agile Development" desc="Iterative coding with regular sprints and functional releases." />
            <ProcessItem num="04" icon={Rocket} title="Deployment & QA" desc="App Store & Play Store submissions followed by post-launch monitoring." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Launch Your App
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to Bring Your <span className="text-gradient-brand">Mobile Idea</span> to Life?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Whether it's a new startup idea or an enterprise tool, we have the expertise to build it right.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Consult Our App Experts
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
