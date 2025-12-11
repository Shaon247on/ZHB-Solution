import CreativeStepSection from '@/components/element/CreativeStepSection'
import TestimonialsSection from '@/components/landing/TestimonialsSection'
import BuildSection from '@/components/models/Web/BuildSection'
import HeroSection from '@/components/models/Web/HeroSection'
import HowSection from '@/components/models/Web/HowSection'
import ServiceSection from '@/components/models/Web/ServiceSection'
import TechnologySection from '@/components/models/Web/TechnologySection'


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
  title: 'Web Development',
  description: 'Full-stack web development services: React, Next.js, APIs, and scalable architectures.',
  path: '/services/web-development',
});
