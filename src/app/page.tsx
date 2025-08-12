import AboutSection from "@/components/landing/AboutSection";
import BrandSection from "@/components/landing/BrandSection";
import ChooseSection from "@/components/landing/ChooseSection";
import HeroSection from "@/components/landing/HeroSection";
import ProjectsSection from "@/components/landing/ProjectsSection";
import SetviceSection from "@/components/landing/SetviceSection";
import SolutionSection from "@/components/landing/SolutionSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <BrandSection/>
      <SetviceSection/>
      <AboutSection/>
      <ProjectsSection/>
      <SolutionSection/>
      <ChooseSection/>
    </div>
  );
}
