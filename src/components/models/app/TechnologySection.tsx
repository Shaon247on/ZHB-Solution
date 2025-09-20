import Image from 'next/image'
import React from 'react'

function TechnologySection() {
  return (
    <div className='flex flex-col items-center px-6 lg:px-[10%] py-6 lg:py-20'>
      <span className='inline-block w-fit px-4 rounded-full border-2 border-[#172F5F] mb-6'>Technologies We Use</span>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-4 lg:gap-14'>
        <Image
        src={"/app/flutter.png"}
        alt='Flutter'
        width={128}
        height={181}
        className='lg:w-32 object-cover'
        />
        <Image
        src={"/web/react.png"}
        alt='React'
        width={128}
        height={181}
        className='lg:w-32 object-cover'
        />
        <Image
        src={"/app/nativescript.png"}
        alt='Nativescript'
        width={128}
        height={181}
        className='lg:w-32 object-cover'
        />
        <Image
        src={"/app/kotlin.png"}
        alt='Kotlin'
        width={128}
        height={181}
        className='lg:w-32 object-cover'
        />
        <Image
        src={"/app/swift.png"}
        alt='Swift'
        width={128}
        height={181}
        className='lg:w-32 object-cover'
        />
      </div>
    </div>
  )
}

export default TechnologySection
