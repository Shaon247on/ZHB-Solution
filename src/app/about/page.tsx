import BrandMarquee from '@/components/landing/BrandSection'
import ContactSection from '@/components/landing/ContactSection'
import SolutionSection from '@/components/landing/SolutionSection'
import HeroSection from '@/components/models/About/HeroSection'
import OurStoryCarousel from '@/components/models/About/OurStorySection'
import VisionSection from '@/components/models/About/VisionSection'
import WhoSection from '@/components/models/About/WhoSection'
import React from 'react'
import type { Metadata } from "next";
import { buildPageMetadata } from '@/lib/seo'


// export const metadata: Metadata = {
//   title: "About Us | ZHB Solutions",
//   description: "Learn more about our mission, vision, and team.",
//   keywords: ["company", "about", "services"],
//   openGraph: {
//     title: "About Us",
//     description: "Learn more about our company.",
//     url: "https://www.zhbsolutions.com//about",
//     images: ["/logo.png"],
//   },
// };

export const metadata = buildPageMetadata({
  title: 'About Us',
  description: 'Learn more about our mission, vision, and team.',
  path: '/about',
});

function page() {
  return (
    <div>
      <HeroSection />
      <WhoSection/>
      <OurStoryCarousel/>
      <div className='mb-20'>
        <BrandMarquee/>
      </div>
      <SolutionSection/>
      <VisionSection/>
      <ContactSection/>
    </div>
  )
}

export default page
