import HeroSection from '@/components/models/Career/HeroSection'
import BrandSection from '@/components/landing/BrandSection'
import React from 'react'
import WhySection from '@/components/models/Career/WhySection'
import OpenPositionsSection from '@/components/models/Career/OpenPositionsSection'

function page() {
  return (
    <div>
      <HeroSection/>
      <BrandSection/>
      <WhySection/>
      <OpenPositionsSection/>
    </div>
  )
}

export default page
