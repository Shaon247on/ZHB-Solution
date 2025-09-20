import TitleSection from '@/components/element/TitleSection'
import TopServiceCard from '@/components/element/TopServiceCard'
import {TopSecviceCardData} from "@/data/ServicesData"
import React from 'react'

function ServicesSection() {
  return (
    <div id='service_id' className='bg-[#F8F9F4] px-6 xl:px-[120px] pt-0 lg:pt-10 pb-6 lg:pb-20'>
      <TitleSection
      title='Service OverView'
      subtitle='Top Services'
      textColor='text-[#181818]'
      width='w-[160px]'
      />
      <div>
        {
            TopSecviceCardData.map(item=>(
                <TopServiceCard
                key={item.id}
                {...item}
                />
            ))
        }
      </div>
    </div>
  )
}

export default ServicesSection
