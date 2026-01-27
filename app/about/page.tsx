import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import {
  Users,
  Target,
  Eye,
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Search,
  Settings,
  CheckCircle2,
  MapPin,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Genius Technology | IT & Software Development Company",
  description:
    "Learn about Genius Technology, an IT and software development company based in Vadodara, India, delivering scalable, reliable digital solutions for modern businesses.",
  keywords:
    "About Genius Technology, IT Company India, Software Development Vadodara, Web Development, App Development, Digital Solutions",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="About Us"
        title="Building Reliable Digital Solutions |That Support Long-Term Business Growth"
        description="Genius Technology is an IT services and software development company focused on helping businesses design, build, and scale digital solutions that are practical, secure, and future-ready."
      />

      {/* ================= WHO WE ARE (WITH IMAGE) ================= */}
      <section className="w-full py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_0.15s_forwards] opacity-0 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs font-bold uppercase tracking-wider mb-6">
                <Users className="w-4 h-4" />
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-[1.2]">
                A Dedicated Team of <span className="text-[var(--brand-blue)]">Engineers</span> & Problem Solvers
              </h2>

              <p className="mt-8 text-gray-600 leading-relaxed text-lg">
                Genius Technology partners with organisations to deliver
                thoughtfully engineered digital solutions that solve real business
                challenges. We focus on building technology that is scalable,
                maintainable, and aligned with long-term operational goals.
              </p>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Our work spans web and mobile application development, cloud
                solutions, digital optimisation, and continuous technical support.
                We believe technology should simplify processes and empower teams,
                not create unnecessary complexity.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Reliable Engineering
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Scalable Architecture
                </div>
              </div>
            </div>

            <div className="relative animate-[fadeUp_0.8s_ease-out_0.3s_forwards] opacity-0">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Genius Technology Team Collaboration"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Blur Orbs */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[var(--brand-blue)]/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="w-full py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group p-10 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[var(--brand-blue)]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-[var(--brand-blue)]" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-[var(--brand-blue)] pl-6">
                "To simplify technology for businesses by delivering secure,
                scalable, and reliable digital solutions that support growth,
                efficiency, and innovation."
              </p>
            </div>

            {/* Vision */}
            <div className="group p-10 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become a trusted technology partner for businesses by
                consistently delivering long-term value through responsible
                engineering and clear communication across every digital touchpoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO (GRID) ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16 animate-[fadeUp_0.8s_ease-out_forwards] opacity-0">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">
              Our Expertise
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We provide end-to-end IT services and software development solutions
              tailored to bridge the gap between business requirements and digital execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard
              icon={Code2}
              title="Web Development"
              desc="Custom web applications built for performance and long-term scalability."
            />
            <ExpertiseCard
              icon={Smartphone}
              title="Mobile Apps"
              desc="High-performance iOS and Android applications with focus on native-like UX."
            />
            <ExpertiseCard
              icon={Cloud}
              title="Cloud Solutions"
              desc="Secure infrastructure migration and management using AWS, Azure or GCP."
            />
            <ExpertiseCard
              icon={Palette}
              title="UI / UX Design"
              desc="User-focused design solutions that enhance usability and engagement."
            />
            <ExpertiseCard
              icon={Search}
              title="SEO & Marketing"
              desc="Data-driven digital marketing to improve visibility and quality conversions."
            />
            <ExpertiseCard
              icon={Settings}
              title="Ongoing Support"
              desc="Maintenance and optimisation to ensure system stability and performance."
            />
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK (PROCESS) ================= */}
      <section className="w-full py-24 bg-gray-50 overflow-hidden relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--brand-blue)]/[0.02] -skew-x-12 translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">
              How We Work
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Our approach is structured, collaborative, and outcome-driven. We
              follow a rigorous process to ensure every project stays on track.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Process Line (Desktop only) */}
            <div className="hidden md:block absolute top-[44px] left-[50px] right-[50px] h-[2px] bg-gradient-to-r from-[var(--brand-blue)]/20 via-[var(--brand-blue)]/50 to-[var(--brand-blue)]/20" />

            <ProcessStep
              num="01"
              title="Discover & Plan"
              desc="We analyse requirements and success criteria to ensure complete clarity before development starts."
            />
            <ProcessStep
              num="02"
              title="Design & Build"
              desc="Our teams design and develop scalable solutions using modern technologies and best engineering practices."
            />
            <ProcessStep
              num="03"
              title="Launch & Support"
              desc="We ensure smooth deployment and provide ongoing support to maintain performance, security, and reliability."
            />
          </div>
        </div>
      </section>

      {/* ================= OFFICE ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="bg-gray-900 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-blue-900/10">
            {/* Decorative Orbs inside box */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--brand-blue)]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="max-w-3xl mx-auto relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                Our Corporate Headquarters
              </h2>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Genius Technology operates from Vadodara (India&apos;s emerging tech hub),
                where our engineering teams collaborate to build world-class digital products.
              </p>

              <div className="mt-12 flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-[var(--brand-blue)]" />
                </div>
                <div className="space-y-2">
                  <p className="text-white font-semibold text-xl">Vadodara Office</p>
                  <p className="text-gray-400 text-lg max-w-md mx-auto">
                    227, Second Floor, VIP View Complex, VIP Road, Vadodara, Gujarat 390022, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center animate-[fadeUp_0.8s_ease-out_forwards] opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-blue)]/5 text-[var(--brand-blue)] text-sm font-semibold mb-8">
            Get Started
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            Let&apos;s Build Something <span className="text-gradient-brand">Reliable</span> Together
          </h2>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
            Ready to scale your business with custom digital solutions?
            Our team is ready to discuss your unique requirements.
          </p>

          <div className="mt-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[var(--brand-blue)] text-white font-semibold text-lg hover:bg-[var(--brand-blue-dark)] transition-all duration-300 shadow-xl shadow-blue-400/20 hover:shadow-2xl hover:shadow-blue-400/30 hover:-translate-y-1"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// Subcomponents

function ExpertiseCard({ icon: Icon, title, desc }: { icon: any; title: string, desc: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[var(--brand-blue)]/20 transition-all duration-300 hover:-translate-y-1 text-left">
      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[var(--brand-blue)] group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}

function ProcessStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="relative group text-left">
      <div className="flex items-center justify-center w-[88px] h-[88px] rounded-full bg-white shadow-xl border border-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-2xl font-bold mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
        {num}
      </div>
      <h3 className="text-2xl font-semibold text-black mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        {desc}
      </p>
    </div>
  );
}