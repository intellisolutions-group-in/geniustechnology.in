import Link from "next/link";
import type { Metadata } from "next";
import ScrollItem from "@/components/ui/ScrollItem";
import PageHero from "@/components/ui/PageHero";
import {
  Code,
  Smartphone,
  Layout,
  Search,
  Cloud,
  Settings,
  Terminal,
  ShieldCheck,
  Database,
  Cpu,
  LineChart,
  Layers,
  Globe,
  Lock,
  Zap,
  ArrowRight,
  MonitorCheck,
  Megaphone
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Services & Software Development | Genius Technology",
  description:
    "Explore the full range of IT services and software development solutions offered by Genius Technology, including web development, app development, cloud solutions, and digital optimisation.",
  keywords:
    "IT Services India, Software Development Services, Web Development, App Development, Cloud Solutions, Digital Marketing, Genius Technology",
};

const serviceCategories = [
  {
    name: "Software & Application Development",
    services: [
      {
        title: "Web Development",
        description: "Custom websites and applications built for performance, scalability, and long-term maintainability.",
        icon: Globe,
        href: "/services/web-development",
      },
      {
        title: "App Development",
        description: "Mobile and cross-platform applications designed to deliver consistent, native-like user experiences.",
        icon: Smartphone,
        href: "/services/app-development",
      },
      {
        title: "Custom Software Development",
        description: "Tailor-made software solutions built specifically for complex and unique business workflows.",
        icon: Code,
        href: "/services/custom-software-development",
      },
      {
        title: "SaaS Product Development",
        description: "End-to-end development of scalable, subscription-based SaaS platforms with multi-tenant architecture.",
        icon: Layers,
        href: "/services/saas-product-development",
      },
      {
        title: "API Development",
        description: "Robust and secure APIs for system integration and seamless data exchange between platforms.",
        icon: Terminal,
        href: "/services/api-development",
      },
    ]
  },
  {
    name: "Growth & Infrastructure",
    services: [
      {
        title: "Cloud Solutions",
        description: "Secure and scalable cloud infrastructure, migration, and optimisation services across AWS, Azure, GCP.",
        icon: Cloud,
        href: "/services/cloud-solutions",
      },
      {
        title: "DevOps Services",
        description: "Automation and deployment practices that improve reliability, security, and development speed.",
        icon: Zap,
        href: "/services/devops-services",
      },
      {
        title: "SEO Services",
        description: "Search engine optimisation solutions focused on sustainable organic growth and technical excellence.",
        icon: Search,
        href: "/services/seo-services",
      },
      {
        title: "Digital Marketing",
        description: "Comprehensive growth strategies including social media, PPC, and content marketing to scale your brand.",
        icon: Megaphone,
        href: "/services/digital-marketing",
      },
      {
        title: "Data Analytics & BI",
        description: "Dashboards, reporting systems, and insights for data-driven decision making and business intelligence.",
        icon: LineChart,
        href: "/services/data-analytics-business-intelligence",
      },
      {
        title: "Cybersecurity & Compliance",
        description: "Application security, vulnerability assessments, and compliance readiness for your digital assets.",
        icon: Lock,
        href: "/services/cybersecurity-compliance",
      },
    ]
  },
  {
    name: "Strategy & Operations",
    services: [
      {
        title: "UI / UX Design",
        description: "User-focused design solutions that enhance usability, accessibility, and meaningful engagement.",
        icon: Layout,
        href: "/services/ui-ux-design",
      },
      {
        title: "Software Consulting",
        description: "Strategic technology guidance, architecture planning, and technical decision support for stakeholders.",
        icon: MonitorCheck,
        href: "/services/software-consulting",
      },
      {
        title: "ERP Solutions",
        description: "Enterprise-grade ERP solutions designed to streamline operations and improve organisational efficiency.",
        icon: Database,
        href: "/services/erp-solutions",
      },
      {
        title: "System Integration",
        description: "Seamless integration of CRMs, ERPs, third-party tools, and legacy systems into one ecosystem.",
        icon: Settings,
        href: "/services/system-integration",
      },
      {
        title: "AI & Automation Solutions",
        description: "Business automation using modern AI models, chatbots, and intelligent automated workflows.",
        icon: Cpu,
        href: "/services/ai-automation-solutions",
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing monitoring, updates, and support to ensure reliability and performance of your systems.",
        icon: ShieldCheck,
        href: "/services/maintenance-support",
      },
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="Our Services"
        title="Technology Services Designed |to Scale With Your Business"
        description="Genius Technology provides end-to-end IT services and software development solutions that help organisations build, optimise, and maintain reliable digital systems."
      />

      {/* ================= CATEGORIZED SERVICES ================= */}
      {serviceCategories.map((category, catIndex) => (
        <section key={category.name} className={`w-full py-24 ${catIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight">
                {category.name}
              </h2>
              <div className="mt-4 h-1 w-20 bg-[var(--brand-blue)] rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <ScrollItem key={service.href} delay={index * 100}>
                  <ServiceCard {...service} />
                </ScrollItem>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ================= WHY PARTNER WITH US ================= */}
      <section className="w-full py-24 bg-gray-900 overflow-hidden relative">
        {/* Decorative Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-blue)]/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Why Partner With <span className="text-[var(--brand-blue)]">Genius Technology?</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 leading-relaxed">
              We deliver measurable outcomes through structured processes, technical expertise, and long-term support.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueItem
              title="Business-First Thinking"
              desc="We align every technical decision with your business objectives and operational requirements."
            />
            <ValueItem
              title="Scalable Engineering"
              desc="Our architectures are built to grow with your business, ensuring longevity and technical stability."
            />
            <ValueItem
              title="Transparent Execution"
              desc="We believe in clear communication, honest timelines, and iterative delivery with client visibility."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Ready to Build Something <span className="text-[var(--brand-blue)]">Reliable</span>?
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Let's discuss how our technology services can support your business growth and digital transformation.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all shadow-xl shadow-blue-400/20 hover:-translate-y-1"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// Subcomponents

const ServiceCard = ({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: any;
}) => {
  return (
    <Link
      href={href}
      className="group block service-card-glow rounded-2xl p-8 h-full flex flex-col"
    >
      <div className="icon-box-premium mb-8 text-[var(--brand-blue)]">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-[var(--brand-blue)] transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm mb-8 flex-grow">
        {description}
      </p>

      <div className="flex items-center gap-2 text-[var(--brand-blue)] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
        Explore Service
        <ArrowRight size={14} />
      </div>
    </Link>
  );
};

const ValueItem = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="relative">
      <div className="w-full h-[1px] bg-white/10 mb-8" />
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};