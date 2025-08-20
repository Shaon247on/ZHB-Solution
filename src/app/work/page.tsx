import ContactSection from '@/components/landing/ContactSection'
import CardsSection from '@/components/models/Work/CardsSection'
import React from 'react'

function page() {
  return (
    <div>
      <CardsSection/>
      <ContactSection bottom={false} />
    </div>
  )
}

export default page
