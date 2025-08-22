import Image from 'next/image'
import React from 'react'

function TechnologySection() {
  return (
    <div className='flex flex-col items-center px-6 lg:px-[316px] py-6 lg:py-20'>
      <span className='inline-block w-fit px-4 rounded-full border-2 border-[#172F5F] mb-6'>Technologies We Use</span>
      <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-14'>
        <Image
        src={"/data/logos_microsoft-power-bi.png"}
        alt='logos_microsoft'
        width={128}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/data/logos_tableau.png"}
        alt='Tableau'
        width={512}
        height={100}
        className='object-cover'
        />
        <Image
        src={"/data/logos_google-data-studio.png"}
        alt='google-data-studio'
        width={128}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/data/skill-icons_python-light.png"}
        alt='python-light'
        width={128}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/data/download 1.png"}
        alt='download'
        width={128}
        height={181}
        className='object-cover'
        />
      </div>
    </div>
  )
}

export default TechnologySection
