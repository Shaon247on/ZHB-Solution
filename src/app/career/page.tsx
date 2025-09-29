import HeroSection from '@/components/models/Career/HeroSection'
import BrandSection from '@/components/landing/BrandSection'
import React from 'react'
import WhySection from '@/components/models/Career/WhySection'
import OpenPositionsSection from '@/components/models/Career/OpenPositionsSection'
import LifeSection from '@/components/models/Career/LifeSection'
import SolutionSection from '@/components/landing/SolutionSection'
import FaqSection from '@/components/models/Career/FaqSection'
import LifeSolutionSectin from '@/components/models/Career/LifeSolutionSection'

function page() {
  return (
    <div>
      <HeroSection/>
      <BrandSection/>
      {/* <WhySection/> */}
      <OpenPositionsSection/>
      {/* <LifeSection/>
      <LifeSolutionSectin/>
      <SolutionSection/>
      <FaqSection/> */}
    </div>
  )
}

export default page
