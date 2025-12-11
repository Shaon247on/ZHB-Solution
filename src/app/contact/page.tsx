import ContactSection from '@/components/landing/ContactSection'
import MailSection from '@/components/models/Contact/MailSection'
import TeamSection from '@/components/models/Contact/TeamSection'
import React from 'react'
import { buildPageMetadata } from '@/lib/seo'

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

export const metadata = buildPageMetadata({
  title: 'Contact Us',
  description: 'Get in touch with ZHB Solutions for partnerships, projects, or general inquiries.',
  path: '/contact',
});
