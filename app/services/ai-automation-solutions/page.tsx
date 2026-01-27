import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  Cpu,
  Zap,
  ShieldCheck,
  Scaling,
  Database,
  Settings,
  Search,
  MessageSquare,
  Rocket,
  BrainCircuit,
  Bot,
  Terminal,
  BarChart3,
  Workflow
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Automation Solutions | Genius Technology",
  description:
    "Intelligent AI and business automation services by Genius Technology. We help organizations leverage LLMs, machine learning, and automated workflows to improve efficiency.",
};

const features = [
  {
    title: "LLM Integration",
    desc: "Seamlessly integrate Large Language Models (GPT, Claude, Llama) into your business applications for intelligent content generation and analysis.",
    icon: BrainCircuit
  },
  {
    title: "Intelligent Chatbots",
    desc: "Custom AI-powered conversational interfaces that handle customer queries, internal support, and lead qualification 24/7.",
    icon: Bot
  },
  {
    title: "Robotic Process Automation",
    desc: "Automating repetitive, rule-based manual tasks across different software systems to eliminate errors and save time.",
    icon: Workflow
  },
  {
    title: "Predictive Analytics",
    desc: "Leveraging machine learning models to analyze historical data and predict future trends, user behavior, and market shifts.",
    icon: BarChart3
  },
  {
    title: "Business Workflow Automation",
    desc: "Connecting your business tools (CRMs, ERPs, Communication apps) into intelligent, automated event-driven workflows.",
    icon: Zap
  },
  {
    title: "Computer Vision Solutions",
    desc: "Implementing visual recognition systems for automated quality control, document processing, and security monitoring.",
    icon: Search
  }
];

const techStack = [
  "OpenAI API", "Anthropic Claude", "LangChain", "Python", "PyTorch", "TensorFlow",
  "Hugging Face", "Vector Databases", "Pinecone", "AutoGPT", "Zapier APIs", "n8n"
];

export default function AiAutomationPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="AI & Automation"
        title="Modernize Your Business |Operations With Intelligent Automation"
        description="We help organizations navigate the AI revolution by building practical, high-impact automation solutions. From intelligent agents to predictive models, we turn AI potential into business results."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                AI Built for <span className="text-[var(--brand-blue)]">Real-World Business</span> Impact
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                AI is moving from experimental to essential. We focus on building AI solutions that solve actual business problems, reduce operational costs, and help your team focus on high-value creative work.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Significant reduction in manual data processing time." />
                <BenefitItem text="High-accuracy AI agents for internal and external support." />
                <BenefitItem text="Scalable automation that grows with your transaction volume." />
                <BenefitItem text="Ethical AI implementation with focus on data privacy." />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <StatCard label="60%+" desc="Cost Efficiency Gain" />
              <StatCard label="24/7" desc="Automated Operation" />
              <StatCard label="95%+ " desc="Accuracy Baseline" />
              <StatCard label="Secure" desc="Enterprise Privacy" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">What We Automate</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Intelligent solutions designed to transform how your organization handles data and workflows.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our AI Technology Stack</h2>
          <p className="mt-4 text-gray-500 text-sm">We leverage cutting-edge AI models and automation frameworks for real-world impact.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our AI Implementation Roadmap</h2>
            <p className="mt-4 text-gray-400">A low-risk, high-reward approach to adopting AI in your organization.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={Search} title="Data Assessment" desc="Identifying automation potential and evaluating data readiness." />
            <ProcessItem num="02" icon={Terminal} title="Rapid Pilot (PoC)" desc="Building a functional proof of concept to validate impact quickly." />
            <ProcessItem num="03" icon={Cpu} title="Development & Tuning" desc="Scaling the solution and fine-tuning models for maximum accuracy." />
            <ProcessItem num="04" icon={CheckCircle2} title="Deploy & Monitor" desc="Seamless production rollout with continuous performance monitoring." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Start Automating
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to Build an <span className="text-[var(--brand-blue)]">AI-Powered</span> Future?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Let's identify the highest-impact automation opportunities in your organization and build solutions that deliver visible results.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Consult an AI Expert
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