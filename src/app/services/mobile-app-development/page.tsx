import CreativeStepSection from "@/components/element/CreativeStepSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import BuildSection from "@/components/models/app/BuildSection"
import HeroSection from "@/components/models/app/HeroSection"
import HowSection from "@/components/models/app/HowSection"
import ServiceSection from "@/components/models/app/ServiceSection"
import TechnologySection from "@/components/models/app/TechnologySection"
import { buildPageMetadata } from '@/lib/seo'

function page() {
  return (
    <div>
      <HeroSection/>
      <BuildSection/>
      <ServiceSection/>
      <TechnologySection/>
      <HowSection/>
      <TestimonialsSection/>
      <CreativeStepSection
        title="Take the first creative step toward success"
        buttonText="Schedule a call"
      />
    </div>
  )
}

export default page

export const metadata = buildPageMetadata({
  title: 'Mobile App Development',
  description: 'Build cross-platform and native mobile applications with great UX and performance.',
  path: '/services/mobile-app-development',
});