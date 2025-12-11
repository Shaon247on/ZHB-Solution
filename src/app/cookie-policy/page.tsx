import CookiesPolicy from '@/components/landing/CookiesPolicy'
import React from 'react'
import { buildPageMetadata } from '@/lib/seo'

function page() {
  return (
    <div>
      <CookiesPolicy/>
    </div>
  )
}

export default page

export const metadata = buildPageMetadata({
  title: 'Cookie Policy',
  description: 'ZHB Solutions cookie policy and preferences description.',
  path: '/cookie-policy',
});
