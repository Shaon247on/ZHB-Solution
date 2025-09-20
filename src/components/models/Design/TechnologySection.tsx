import Image from 'next/image'
import React from 'react'

function TechnologySection() {
  return (
    <div className='flex flex-col items-center px-6 xl:px-[316px] py-6 lg:py-20'>
      <span className='inline-block w-fit px-4 rounded-full border-2 border-[#172F5F] mb-6'>Technologies We Use</span>
      <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-4 lg:gap-14'>
        <Image
        src={"/design/figma.png"}
        alt='Figma'
        width={128}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/design/adobe-xd.png"}
        alt='Adobe'
        width={128}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/design/sketch.png"}
        alt='Sketch'
        width={128}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/design/invision.png"}
        alt='Invision'
        width={128}
        height={181}
        className='object-cover'
        />
      </div>
    </div>
  )
}

export default TechnologySection
