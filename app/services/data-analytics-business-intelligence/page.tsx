import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Zap,
  Database,
  LineChart,
  PieChart,
  Search,
  MessageSquare,
  Rocket,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
  Layers
} from "lucide-react";

// Helper for Activity icon as it wasn't imported properly from lucide-react but used in features
const ActivityIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const features = [
  {
    title: "Data Warehousing",
    desc: "Building scalable, centralized repositories to store and manage your organization's structured and unstructured data.",
    icon: Database
  },
  {
    title: "Interactive Dashboards",
    desc: "Designing real-time, visual reporting systems that provide clear insights into key business performance metrics.",
    icon: PieChart
  },
  {
    title: "Predictive Modeling",
    desc: "Using machine learning to forecast future trends, user behavior, and potential business outcomes.",
    icon: BrainCircuit
  },
  {
    title: "Data Engineering & ETL",
    desc: "Creating robust pipelines to extract, transform, and load data from multiple sources into a unified system.",
    icon: Layers
  },
  {
    title: "Statistical Analysis",
    desc: "In-depth quantitative analysis to identify correlations, patterns, and anomalies in your business data.",
    icon: BarChart3
  },
  {
    title: "Performance Monitoring",
    desc: "Continuous tracking of operational data to ensure your business processes are running at peak efficiency.",
    icon: ActivityIcon
  }
];


const techStack = [
  "Python", "SQL", "Pandas", "PySpark", "Snowflake", "BigQuery",
  "Tableau", "Power BI", "R", "Airflow", "dbt", "Grafana"
];

export default function DataAnalyticsPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="Data & Analytics"
        title="Turn Your Data Into |a Strategic Growth Engine"
        description="We help organizations harness the power of their data to make informed, data-driven decisions. From warehousing to predictive insights, we enable clarity in a complex digital world."
      />

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                Data Clarity Leads to <span className="text-[var(--brand-blue)]">Strategic Advantage</span>
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                Most organizations are drowning in data but starving for insights. We help you bridges the gap between raw data and actionable intelligence, enabling you to act with confidence and precision.
              </p>

              <div className="mt-10 space-y-4">
                <BenefitItem text="Single source of truth for all organizational data." />
                <BenefitItem text="Faster response times to changing market conditions." />
                <BenefitItem text="Improved operational efficiency through bottleneck identification." />
                <BenefitItem text="Evidence-based decision making at all levels." />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              <StatCard label="100%" desc="Data Accuracy" />
              <StatCard label="Real-Time" desc="Insight Delivery" />
              <StatCard label="Scalable" desc="Storage Solutions" />
              <StatCard label="ROI Focus" desc="Value Driven" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">Our Data Capabilities</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Transforming raw information into powerful business intelligence.
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Data Technology Stack</h2>
          <p className="mt-4 text-gray-500 text-sm">We use modern analytical tools and high-performance databases to turn data into insights.</p>
        </div>

        <TechSlider items={techStack} />
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Data Lifecycle</h2>
            <p className="mt-4 text-gray-400">A systematic process for extracting value from organizational information.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ProcessItem num="01" icon={Search} title="Audit" desc="Assessing existing data sources, quality, and storage infrastructure." />
            <ProcessItem num="02" icon={Database} title="Integrate" desc="Centralizing data from disparate systems into a unified warehouse." />
            <ProcessItem num="03" icon={BarChart3} title="Analyze" desc="Applying models and algorithms to extract meaningful patterns." />
            <ProcessItem num="04" icon={TrendingUp} title="Visualize" desc="Creating intuitive interfaces to communicate insights to stakeholders." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Get Data Insights
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Ready to <span className="text-[var(--brand-blue)]">Uncover</span> the Value in Your Data?
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Let's discuss how we can help you build the infrastructure and intelligence needed to stay ahead in a data-rich world.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Consult a Data Specialist
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