import BlogsSection from '@/components/models/Blogs/BlogsSection'
import HeroSection from '@/components/models/Blogs/HeroSection'
import React from 'react'
import { buildPageMetadata } from '@/lib/seo'

function page() {
  return (
    <div>
      <HeroSection />
      <BlogsSection/>
    </div>
  )
}

export default page

export const metadata = buildPageMetadata({
  title: 'Blog',
  description: 'Read articles about web development, AI, cloud, and product design from ZHB Solutions.',
  path: '/blogs',
});
