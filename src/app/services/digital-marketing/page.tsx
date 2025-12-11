import CreativeStepSection from "@/components/element/CreativeStepSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import BuildSection from "@/components/models/Marketing/BuildSection"
import HeroSection from "@/components/models/Marketing/HeroSection"
import HowSection from "@/components/models/Marketing/HowSection"
import ServiceSection from "@/components/models/Marketing/ServiceSection"
import TechnologySection from "@/components/models/Marketing/TechnologySection"
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

export const metadata = buildPageMetadata({
  title: 'Digital Marketing',
  description: 'Digital marketing services including SEO, content strategy, and paid media to grow your brand.',
  path: '/services/digital-marketing',
});
export default page