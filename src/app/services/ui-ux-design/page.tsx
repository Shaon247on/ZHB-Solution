import CreativeStepSection from "@/components/element/CreativeStepSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import BuildSection from "@/components/models/Design/BuildSection"
import HeroSection from "@/components/models/Design/HeroSection"
import HowSection from "@/components/models/Design/HowSection"
import ServiceSection from "@/components/models/Design/ServiceSection"
import TechnologySection from "@/components/models/Design/TechnologySection"
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
  title: 'UI/UX Design',
  description: 'User-centered UI/UX design services to increase engagement and conversions.',
  path: '/services/ui-ux-design',
});