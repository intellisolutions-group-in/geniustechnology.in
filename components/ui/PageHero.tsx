"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Globe } from "lucide-react";

interface PageHeroProps {
  category?: string;
  title: string;
  description: string;
}

const PageHero: React.FC<PageHeroProps> = ({ category, title, description }) => {
  return (
    <section className="relative w-full pt-12 pb-24 sm:pt-16 sm:pb-32 md:pt-20 md:pb-40 bg-[white] border-b border-black/5 overflow-hidden">
      {/* Liquid Mesh Background Blobs */}
      <div className="liquid-mesh-blob liquid-mesh-blob-1" />
      <div className="liquid-mesh-blob liquid-mesh-blob-2" />

      {/* Aurora Background Effect */}
      <div className="hero-aurora-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content (60%) */}
          <div className="w-full lg:w-[60%] relative">
            {category && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 backdrop-blur-sm mb-10 animate-[fadeUp_0.8s_ease-out_forwards] shadow-sm">
                <Sparkles size={12} className="text-[var(--brand-blue)]" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[var(--brand-blue-dark)] uppercase">
                  {category}
                </span>
              </div>
            )}

            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.05] tracking-tight animate-[fadeUp_0.8s_ease-out_0.1s_forwards] opacity-0 text-left">
                {title.includes('|') ? (
                  <>
                    <span className="block">{title.split('|')[0]}</span>
                    <span className="block text-[var(--brand-blue)]">{title.split('|')[1]}</span>
                  </>
                ) : (
                  <span className="text-gradient-brand-complex block">{title}</span>
                )}
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed animate-[fadeUp_0.8s_ease-out_0.2s_forwards] opacity-0 border-l-3 border-[var(--brand-blue)]/30 pl-8 text-left">
                {description}
              </p>

              <div className="pt-6 animate-[fadeUp_0.8s_ease-out_0.3s_forwards] opacity-0 flex flex-wrap gap-4 justify-start">
                <button className="px-10 py-4 rounded-full bg-black text-white font-semibold text-sm hover:bg-gray-900 transition-all flex items-center gap-2 group shadow-xl shadow-black/10 hover:-translate-y-1">
                  Get Started
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-4 rounded-full bg-white border border-black/10 text-black font-semibold text-sm hover:bg-gray-50 transition-all shadow-sm hover:-translate-y-1">
                  Our Portfolio
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual (40%) - Decorative Stack */}
          <div className="w-full lg:w-[40%] relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Floating Glass Cards */}
              <div className="absolute top-0 right-0 w-64 p-6 hero-glass-stack-card rounded-3xl animate-float-slow translate-x-4 -translate-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100/50 flex items-center justify-center text-[var(--brand-blue)] mb-4">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-sm font-bold text-black mb-1">Enterprise Ready</div>
                <div className="text-[11px] text-gray-500 leading-tight">Highly secure and scalable infrastructures for business.</div>
              </div>

              <div className="absolute top-1/2 left-0 w-64 p-6 hero-glass-stack-card rounded-3xl animate-float-medium -translate-x-8">
                <div className="w-10 h-10 rounded-xl bg-indigo-100/50 flex items-center justify-center text-indigo-600 mb-4">
                  <Zap size={20} />
                </div>
                <div className="text-sm font-bold text-black mb-1">Modern Stack</div>
                <div className="text-[11px] text-gray-500 leading-tight">Powered by Next.js, AI, and Cloud Native solutions.</div>
              </div>

              <div className="absolute bottom-4 right-8 w-64 p-6 hero-glass-stack-card rounded-3xl animate-float-slow translate-x-12 translate-y-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/50 flex items-center justify-center text-emerald-600 mb-4">
                  <Globe size={20} />
                </div>
                <div className="text-sm font-bold text-black mb-1">Global Impact</div>
                <div className="text-[11px] text-gray-500 leading-tight">Helping businesses design, build and scale globally.</div>
              </div>

              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/20 rounded-full blur-[100px] -z-1" />
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />
    </section>
  );
};

export default PageHero;
