import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import TechSlider from "@/components/ui/TechSlider";
import {
    CheckCircle2,
    ArrowRight,
    Megaphone,
    Zap,
    ShieldCheck,
    Scaling,
    BarChart3,
    Search,
    MessageSquare,
    Rocket,
    Globe,
    Users,
    MousePointerClick,
    Share2,
    TrendingUp,
    Layout,
    AlertCircle,
    Check
} from "lucide-react";

export const metadata: Metadata = {
    title: "Digital Marketing Services | Genius Technology",
    description:
        "Data-driven digital marketing services by Genius Technology. We help brands grow through strategic SEO, PPC, social media management, and performance marketing.",
};

const features = [
    {
        title: "Search Engine Optimization",
        desc: "Comprehensive SEO strategies to improve your organic rankings, increase visibility, and drive high-quality traffic.",
        icon: Search
    },
    {
        title: "Pay-Per-Click (PPC)",
        desc: "Highly targeted advertising campaigns on Google, Bing, and Social Media to deliver immediate ROI and lead generation.",
        icon: MousePointerClick
    },
    {
        title: "Social Media Marketing",
        desc: "Building and managing your brand's presence across platforms like LinkedIn, Instagram, and X to engage your audience.",
        icon: Share2
    },
    {
        title: "Content Strategy",
        desc: "Creating valuable, relevant content that attracts, informs, and converts your target audience into loyal customers.",
        icon: Layout
    },
    {
        title: "Email Marketing",
        desc: "Personalized email automation workflows that nurture leads and drive repeat business from your existing customer base.",
        icon: MessageSquare
    },
    {
        title: "Performance Analytics",
        desc: "In-depth tracking and reporting on campaign performance to ensure every marketing dollar is working towards your goals.",
        icon: TrendingUp
    }
];

const techStack = [
    "Google Analytics 4", "Google Ads", "Meta Ads Manager", "Semrush", "HubSpot", "LinkedIn Ads",
    "Mailchimp", "Hotjar", "Ahrefs", "Buffer / Hootsuite", "Canva", "Looker Studio"
];

export default function DigitalMarketingPage() {
    return (
        <main className="w-full bg-white">

            {/* ================= HERO ================= */}
            <PageHero
                category="Growth & Marketing"
                title="Accelerate Your Brand Growth |With Performance-Driven Digital Marketing"
                description="We combine data-driven strategies with creative execution to help your business reach the right audience, at the right time. From organic search to targeted ads, we drive measurable results."
            />

            {/* ================= CORE VALUE PROPOSITION ================= */}
            <section className="w-full py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
                            <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
                                Grow Your <span className="text-[var(--brand-blue)]">Digital Presence</span> With Precision
                            </h2>
                            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                                Marketing without data is like driving with your eyes closed. We use advanced analytics and psychological insights to build campaigns that don't just get clicks, but drive meaningful business growth.
                            </p>

                            <div className="mt-10 space-y-4">
                                <BenefitItem text="Custom marketing strategies aligned with your business KPIs." />
                                <BenefitItem text="Multi-channel approach for maximum audience reach." />
                                <BenefitItem text="Continuous optimization to improve conversion rates." />
                                <BenefitItem text="Transparent reporting with real-time performance tracking." />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0">
                            <StatCard label="3.5x" desc="Average ROAS" />
                            <StatCard label="200%" desc="Organic Growth" />
                            <StatCard label="Data" desc="Driven Decisions" />
                            <StatCard label="Global" desc="Campaign Reach" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= COMMON CHALLENGES ================= */}
            <section className="w-full py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-black">Common Marketing <span className="text-[var(--brand-blue)]">Frustrations</span></h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We solve the core problems that hold businesses back from digital success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ChallengeBox
                            title="Low ROI"
                            desc="Spending thousands on ads with minimal conversion or lead generation."
                            solution="Strategic campaign targeting and conversion rate optimization (CRO)."
                        />
                        <ChallengeBox
                            title="Poor Targeting"
                            desc="Driving traffic that isn't qualified or interested in your products/services."
                            solution="Granular audience segmentation and buyer persona mapping."
                        />
                        <ChallengeBox
                            title="Inconsistent Brand"
                            desc="Fragmented messaging across different platforms leading to user confusion."
                            solution="Unified multi-channel brand positioning and content strategy."
                        />
                    </div>
                </div>
            </section>

            {/* ================= FEATURES GRID ================= */}
            <section className="w-full py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-black">Our Marketing Capabilities</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Integrated marketing solutions designed to capture attention and convert it into revenue.
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
                    <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Marketing Technology Stack</h2>
                    <p className="mt-4 text-gray-500 text-sm">We leverage industry-leading tools to drive performance and insights.</p>
                </div>

                <TechSlider items={techStack} />
            </section>

            {/* ================= PROCESS ================= */}
            <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                    <div className="text-center mb-20 text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Marketing Growth Process</h2>
                        <p className="mt-4 text-gray-400">A systematic, iterative approach to scaling your brand and revenue.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <ProcessItem num="01" icon={Search} title="Analyze" desc="In-depth audit of your current performance, competitors, and audience." />
                        <ProcessItem num="02" icon={Megaphone} title="Strategize" desc="Developing a tailored multi-channel roadmap to achieve your KPIs." />
                        <ProcessItem num="03" icon={Rocket} title="Execute" desc="Launching high-impact campaigns across targeted platforms and channels." />
                        <ProcessItem num="04" icon={BarChart3} title="Optimize" desc="Constant monitoring and adjustment to maximize ROI and growth." />
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="w-full py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
                        Start Growing
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
                        Ready to <span className="text-[var(--brand-blue)]">Dominate</span> Your Digital Market?
                    </h2>
                    <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
                        Let's discuss how we can build a performance-driven marketing strategy that delivers real business results.
                    </p>
                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
                        >
                            Get a Free Marketing Audit
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

const ChallengeBox = ({ title, desc, solution }: { title: string; desc: string; solution: string }) => (
    <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all">
        <div className="w-10 h-10 rounded-xl bg-[var(--brand-blue)]/5 flex items-center justify-center text-[var(--brand-blue)] mb-6">
            <AlertCircle size={20} />
        </div>
        <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
        <p className="text-gray-500 text-sm mb-6 pb-6 border-b border-gray-100">{desc}</p>
        <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[var(--brand-blue)]/10 flex items-center justify-center text-[var(--brand-blue)] flex-shrink-0 mt-0.5">
                <Check size={12} />
            </div>
            <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Our Solution</span>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">{solution}</p>
            </div>
        </div>
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
