import PrivacyPolicy from '@/components/landing/privacy'
import React from 'react'
import { buildPageMetadata } from '@/lib/seo'

function page() {
  return (
    <div>
      <PrivacyPolicy/>
    </div>
  )
}

export default page

export const metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description: 'Read ZHB Solutions privacy policy and how we handle data and cookies.',
  path: '/privacy-policy',
});
