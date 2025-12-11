import AboutSection from "@/components/landing/AboutSection";
import BlogSection from "@/components/landing/BlogSection";
import BrandSection from "@/components/landing/BrandSection";
import ChooseSection from "@/components/landing/ChooseSection";
import ContactSection from "@/components/landing/ContactSection";
import FaqSection from "@/components/landing/FaqSection";
import HeroSection from "@/components/landing/HeroSection";
import ProjectsSection from "@/components/landing/ProjectsSection";
import ServiceSection from "@/components/landing/ServiceSection";
import SolutionSection from "@/components/landing/SolutionSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import { buildPageMetadata } from '@/lib/seo';

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
      <TestimonialsSection/>
      <FaqSection/>
      <ContactSection/>
    </div>
  );
}

export const metadata = buildPageMetadata({
  title: 'Home',
  description: 'ZHB Solutions builds scalable web, mobile, and cloud products. Partner with us to design, build and operate modern digital experiences.',
  path: '/',
});
