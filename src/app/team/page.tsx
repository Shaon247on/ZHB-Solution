import TeamSection from '@/components/landing/TeamSection'
import React from 'react'
import { buildPageMetadata } from '@/lib/seo'

function page() {
  return (
    <div className='min-h-[calc(100vh-80px)]'>
      <TeamSection/>
    </div>
  )
}

export default page

export const metadata = buildPageMetadata({
  title: 'Team',
  description: 'Meet the ZHB Solutions team — designers, engineers, and product builders focused on delivering value.',
  path: '/team',
});
