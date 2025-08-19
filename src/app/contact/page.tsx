import ContactSection from '@/components/landing/ContactSection'
import MailSection from '@/components/models/Contact/MailSection'
import TeamSection from '@/components/models/Contact/TeamSection'
import React from 'react'

function page() {
  return (
    <div>
      <ContactSection bottom={false} />
      <MailSection/>
      <TeamSection/>
    </div>
  )
}

export default page
