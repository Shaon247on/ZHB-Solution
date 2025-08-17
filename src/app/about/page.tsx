import BrandMarquee from '@/components/landing/BrandSection'
import ContactSection from '@/components/landing/ContactSection'
import SolutionSection from '@/components/landing/SolutionSection'
import HeroSection from '@/components/models/About/HeroSection'
import OurStoryCarousel from '@/components/models/About/OurStorySection'
import VisionSection from '@/components/models/About/VisionSection'
import WhoSection from '@/components/models/About/WhoSection'
import { Contact } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div>
      <HeroSection />
      <WhoSection/>
      <OurStoryCarousel/>
      <BrandMarquee/>
      <SolutionSection/>
      <VisionSection/>
      <ContactSection/>
    </div>
  )
}

export default page
