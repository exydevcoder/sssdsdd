import AboutSection from "@/components/sections/home/about-section/AboutSection";
import ApproachSection from "@/components/sections/home/approach-section/ApproachSection";
import HeroSection from "@/components/sections/home/hero-section/HeroSection";
import WorkSection from "@/components/sections/home/work-section/WorkSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ApproachSection />
      <AboutSection />
    </>
  );
}
