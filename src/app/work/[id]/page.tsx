import WorkPage from '@/components/models/Work/WorkPage';
import { workDataMain } from '@/data/WorkDataMain';
import React from 'react'
import { buildPageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

function page({params}: {params: {id: number}}) {

    const id = params.id;
  return (
    <div>
      <WorkPage id={id} allProjects={workDataMain}/>
    </div>
  )
}

export default page

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = Number(params.id);
  const project = workDataMain.find((p) => p.id === id);
  if (!project) return buildPageMetadata({ title: 'Project', path: `/work/${params.id}` });

  const title = project.heroSection?.title || `Project ${id}`;
  const description = project.heroSection?.description || project.projectSummary?.service || title;

  return buildPageMetadata({
    title,
    description,
    path: `/work/${id}`,
    image: project.heroSection?.heroImage,
    keywords: project.tag,
  });
}
