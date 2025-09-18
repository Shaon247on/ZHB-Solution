import Image from 'next/image'
import React from 'react'

function TechnologySection() {
  return (
    <div className='flex flex-col items-center px-6 xl:px-[316px] py-6 xl:py-20'>
      <span className='inline-block w-fit px-4 rounded-full border-2 border-[#172F5F] mb-6'>Technologies We Use</span>
      <div className='flex flex-col lg:flex-row items-center gap-4 xl:gap-14'>
        <Image
        src={"/data/tensorflow.png"}
        alt='tensorflow'
        width={128}
        height={181}
        className='lg:w-14 object-cover'
        />
        <Image
        src={"/data/cloud.png"}
        alt='cloud'
        width={128}
        height={181}
        className='lg:w-14 object-cover'
        />
        <Image
        src={"/data/openai.png"}
        alt='openai'
        width={128}
        height={181}
        className='lg:w-14 object-cover'
        />
        <Image
        src={"/data/pytorch.png"}
        alt='pytorch'
        width={128}
        height={181}
        className='lg:w-14 object-cover'
        />
        <Image
        src={"/data/azure.png"}
        alt='azure'
        width={128}
        height={181}
        className='lg:w-14 object-cover'
        />
        <Image
        src={"/data/aws.png"}
        alt='aws'
        width={128}
        height={181}
        className='lg:w-14 object-cover'
        />
      </div>
    </div>
  )
}

export default TechnologySection
