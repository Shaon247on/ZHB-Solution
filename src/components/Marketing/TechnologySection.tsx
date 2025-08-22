import Image from 'next/image'
import React from 'react'

function TechnologySection() {
  return (
    <div className='flex flex-col items-center px-6 lg:px-[316px] py-6 lg:py-20'>
      <span className='inline-block w-fit px-4 rounded-full border-2 border-[#172F5F] mb-6'>Technologies We Use</span>
      <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-14'>
        <Image
        src={"/marketing/face.png"}
        alt='logos_microsoft'
        width={128}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/marketing/images_1.png"}
        alt='Tableau'
        width={200}
        height={100}
        className='object-cover'
        />
        <Image
        src={"/marketing/hub.png"}
        alt='google-marketing-studio'
        width={201}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/marketing/download_3.png"}
        alt='python-light'
        width={128}
        height={181}
        className='object-cover'
        />
      </div>
    </div>
  )
}

export default TechnologySection
