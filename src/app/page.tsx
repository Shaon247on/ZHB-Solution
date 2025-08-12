import AboutSection from "@/components/landing/AboutSection";
import BlogSection from "@/components/landing/BlogSection";
import BrandSection from "@/components/landing/BrandSection";
import ChooseSection from "@/components/landing/ChooseSection";
import HeroSection from "@/components/landing/HeroSection";
import ProjectsSection from "@/components/landing/ProjectsSection";
import ServiceSection from "@/components/landing/ServiceSection";
import SolutionSection from "@/components/landing/SolutionSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrandSection />
      <ServiceSection />
      <AboutSection />
      <ProjectsSection />
      <SolutionSection />
      <ChooseSection />
      <BlogSection />
    </div>
  );
}
