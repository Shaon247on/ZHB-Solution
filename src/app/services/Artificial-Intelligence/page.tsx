import CreativeStepSection from "@/components/element/CreativeStepSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import BuildSection from "@/components/models/Data/BuildSection"
import HeroSection from "@/components/models/Data/HeroSection"
import HowSection from "@/components/models/Data/HowSection"
import ServiceSection from "@/components/models/Data/ServiceSection"
import TechnologySection from "@/components/models/Data/TechnologySection"
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
  title: 'Artificial Intelligence',
  description: 'AI solutions and services: custom models, automation, and intelligent product features.',
  path: '/services/Artificial-Intelligence',
});