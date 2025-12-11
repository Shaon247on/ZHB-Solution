import BlogPage from '@/components/models/Blogs/BlogPage'
import { blogs } from '@/data/BlogsDataMain';
import React from 'react'
import { buildPageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

function page({params}: {params: {id: number}}) {

    const id = params.id;
  return (
    <div>
      <BlogPage id={id} blogs={blogs}/>
    </div>
  )
}

export default page

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = Number(params.id);
  const post = blogs.find((b) => b.id === id);
  if (!post) {
    return buildPageMetadata({ title: 'Blog post', path: `/blogs/${params.id}` });
  }

  const description = post.publishDate || post.content?.[0]?.heading || post.title;
  return buildPageMetadata({
    title: post.title,
    description: typeof description === 'string' ? description : post.title,
    path: `/blogs/${id}`,
    keywords: post.tags,
  });
}
