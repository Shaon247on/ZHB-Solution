import ContactSection from '@/components/landing/ContactSection'
import CardsSection from '@/components/models/Work/CardsSection'
import React from 'react'
import { buildPageMetadata } from '@/lib/seo'

function page() {
  return (
    <div>
      <CardsSection/>
      <ContactSection bottom={false} />
    </div>
  )
}

export default page

export const metadata = buildPageMetadata({
  title: 'Work',
  description: 'Explore ZHB Solutions portfolio — selected projects in web, mobile, and cloud.',
  path: '/work',
});
