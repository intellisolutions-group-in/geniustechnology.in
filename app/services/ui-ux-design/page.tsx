import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  Layout,
  Zap,
  ShieldCheck,
  Scaling,
  Code2,
  Settings,
  Search,
  MessageSquare,
  Rocket,
  Layers,
  Cpu,
  Figma,
  Palette,
  Eye,
  MousePointer2
} from "lucide-react";

export const metadata: Metadata = {
  title: "UI / UX Design Services | Genius Technology",
  description:
    "Expert UI/UX design services by Genius Technology. We create user-centric interfaces and meaningful digital experiences that drive engagement and conversion.",
};

const features = [
  {
    title: "User Research & Analysis",
    desc: "Understanding user behavior, needs, and pain points through surveys, interviews, and competitive analysis.",
    icon: Search
  },
  {
    title: "Wireframing & Prototyping",
    desc: "Low and high-fidelity prototypes that visualize the structure and flow of your digital product before development.",
    icon: Layers
  },
  {
    title: "Visual Identity Design",
    desc: "Crafting a unique look and feel including color palettes, typography, and iconography that align with your brand.",
    icon: Palette
  },
  {
    title: "Interaction Design",
    desc: "Designing smooth transitions and interactive elements that make digital interfaces feel alive and intuitive.",
    icon: MousePointer2
  },
  {
    title: "Usability Testing",
    desc: "Validating design decisions with real users to identify friction points and optimize the overall experience.",
    icon: Eye
  },
  {
    title: "Accessibility (a11y) Design",
    desc: "Ensuring your digital products are usable by everyone, including people with various disabilities.",
    icon: ShieldCheck
  }
];

const techStack = [
  "Figma", "Adobe XD", "Sketch", "Protopie", "Miro", "Lottie",
  "UserTesting", "Maze", "Hotjar", "Principle", "InVision", "Spline"
];

export default function UiUxDesignPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="UI / UX Design"
        title="Human-Centric Design |That Drives Business Results"
        description="We create intuitive, engaging, and accessible digital experiences. Our design process focuses on understanding user needs to build interfaces that are both beautiful and functional."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                Design Is <span className="text-[var(--brand-blue)]">More Than Just</span> Visuals
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                Great design is invisible. It guides users effortlessly toward their goals. We combine data-driven research with artistic intuition to create products that people love to use.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Improved user engagement and retention rates." />
                <BenefitItem text="Reduced development costs through early validation." />
                <BenefitItem text="Cohesive brand identity across all platforms." />
                <BenefitItem text="Data-backed design decisions for higher conversion." />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <StatCard label="40%+" desc="Increase in Conversion" />
              <StatCard label="80%+" desc="User Task Success" />
              <StatCard label="WCAG 2.1" desc="Compliance Standard" />
              <StatCard label="Premium" desc="Visual Excellence" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">Our Design Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A holistic approach to crafting meaningful digital interactions.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Design Toolkit</h2>
          <p className="mt-4 text-gray-500 text-sm">We use industry-standard tools to craft high-fidelity digital experiences.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Iterative Design Process</h2>
            <p className="mt-4 text-gray-400">Transforming ideas into polished, user-ready interfaces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={Search} title="Empathize" desc="Understanding the user and business landscape through deep research." />
            <ProcessItem num="02" icon={Layers} title="Define & Ideate" desc="Mapping user journeys and sketching initial concepts and wireframes." />
            <ProcessItem num="03" icon={Palette} title="Design & Prototype" desc="Creating high-fidelity visual designs and interactive prototypes." />
            <ProcessItem num="04" icon={CheckCircle2} title="Test & Refine" desc="Gathering user feedback and iterating to reach the perfect solution." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Start Designing
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to Build an <span className="text-gradient-brand">Exceptional Experience</span>?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Let's work together to create a digital product that stands out and delights your users.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Get a Free Design Audit
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