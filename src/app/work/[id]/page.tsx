import WorkPage from '@/components/models/Work/WorkPage';
import { workDataMain } from '@/data/WorkDataMain';
import React from 'react'

function page({params}: {params: {id: number}}) {

    const id = params.id;
  return (
    <div>
      <WorkPage id={id} allProjects={workDataMain}/>
    </div>
  )
}

export default page
