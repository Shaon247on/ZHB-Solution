import BlogPage from '@/components/models/Blogs/BlogPage'
import { blogs } from '@/data/BlogsDataMain';
import React from 'react'

function page({params}: {params: {id: number}}) {

    const id = params.id;
  return (
    <div>
      <BlogPage id={id} blogs={blogs}/>
    </div>
  )
}

export default page
