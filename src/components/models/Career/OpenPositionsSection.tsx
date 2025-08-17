import OpenCard from '@/components/element/OpenCard'
import TitleSection from '@/components/element/TitleSection'
import { Cloud, CodeDisplay, Database, Pen, Phone } from '@/components/svg/CareerISVG'
import React from 'react'

function OpenPositionsSection() {

    const data =[
        {
            tag:"Web Development",
            icon: <CodeDisplay/>,
            title:"Senior Web Developer",
            jobType: "Full Time",
            location: "On Site",
        },
        {
            tag:"Mobile App  Development",
            icon: <Phone/>,
            title:"Mid- Level Mobile App Development",
            jobType: "Full Time",
            location: "On Site",
        },
        {
            tag:"Cloud Solution",
            icon: <Cloud/>,
            title:"Sr. Cloud Solution Architecture",
            jobType: "Full Time",
            location: "On Site",
        },
        
        {
            tag:"UI/UX Design",
            icon: <Pen/>,
            title:"Sr. UX Designer",
            jobType: "Full Time",
            location: "On Site",
        },
        {
            tag:"Data Analytics",
            icon: <Database/>,
            title:"Business Analyst",
            jobType: "Full Time",
            location: "On Site",
        },
        {
            tag:"Digital Marketing",
            icon: <CodeDisplay/>,
            title:"Digital Marketing Specialist",
            jobType: "Full Time",
            location: "On Site",
        }
    ]
  return (
    <div className='py-4 lg:py-14 bg-[#EBF1FC] px-6 lg:px-[90px]'>
      <TitleSection
        title='Open Positions'
        subtitle='Your Next Role Awaits'
        width='w-[180px]'
        textColor='text-[#172F5F]'
      />
      <p className='max-w-[977px] text-[#464646] mx-auto'>your ideas shape innovation and your work drives real change. We’re seeking passionate, forward-thinking professionals who want to grow, create, and define the future with us. Explore our open roles and discover where your talents belong.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {
            data.map((item, index)=>(
                <OpenCard key={index} {...item} />
            ))
        }
      </div>
    </div>
  )
}

export default OpenPositionsSection
