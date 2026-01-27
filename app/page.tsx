import VideoBackground from "@/components/layout/VideoBackground";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import ServicesHome from "@/components/sections/ServicesHome";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TrustMetrics from "@/components/sections/TrustMetrics";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import FaqPreview from "@/components/sections/FaqPreview";

export default function HomePage() {
  return (
    <>
      {/* Background video */}
      <VideoBackground />

      {/* 
        Page content wrapper
        mt-16 = header height (h-16)
      */}
      <main className="relative z-10 mt-16">
        <Hero />
        <AboutUs />
         <ServicesHome />
         <WhyChooseUs/>
         <TrustMetrics/>
         <PortfolioPreview/>
         <Testimonials/>
          <ContactCTA/>
          <FaqPreview/>
      </main>
    </>
  );
}