import Image from 'next/image'
import React from 'react'

function TechnologySection() {
  return (
    <div className='flex flex-col items-center px-6 lg:px-[316px] py-6 lg:py-20'>
      <span className='inline-block w-fit px-4 rounded-full border-2 border-[#172F5F] mb-6'>Technologies We Use</span>
      <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-14'>
        <Image
        src={"/cloud/aws.png"}
        alt='AWS'
        width={128}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/cloud/azure.png"}
        alt='Azure'
        width={128}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/cloud/googlecloud.png"}
        alt='Google Cloud'
        width={128}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/cloud/docker.png"}
        alt='Docker'
        width={401}
        height={181}
        className='object-cover'
        />
        <Image
        src={"/cloud/kubernetes.png"}
        alt='Kubernetes'
        width={265}
        height={181}
        className='object-cover'
        />
      </div>
    </div>
  )
}

export default TechnologySection
