import AboutSection from "@/components/sections/home/about-section/AboutSection";
import ApproachSection from "@/components/sections/home/approach-section/ApproachSection";
import ClientsSection from "@/components/sections/home/clients-section/ClientsSection";
import HeroSection from "@/components/sections/home/hero-section/HeroSection";
import ServicesSection from "@/components/sections/home/services-section/ServicesSection";
import WorkSection from "@/components/sections/home/work-section/WorkSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ApproachSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
    </>
  );
}
