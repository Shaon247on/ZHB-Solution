import Image from 'next/image'
import React from 'react'

function TechnologySection() {
  return (
    <div className='flex flex-col items-center px-6 lg:px-20 xl:px-[10%] py-6 lg:py-20'>
      <span className='inline-block w-fit px-4 rounded-full border-2 border-[#172F5F] mb-6'>Technologies We Use</span>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 items-center gap-4 lg:gap-8 xl:gap-14'>
        <Image
        src={"/web/html-5.png"}
        alt='HTML'
        width={128}
        height={181}
        className='lg:min-w-16 object-cover'
        />
        <Image
        src={"/web/css-3.png"}
        alt='CSS'
        width={128}
        height={181}
        className='lg:min-w-16 object-cover'
        />
        <Image
        src={"/web/vscode.png"}
        alt='JavaScript'
        width={128}
        height={181}
        className='lg:min-w-16 object-cover'
        />
        <Image
        src={"/web/react.png"}
        alt='React'
        width={128}
        height={181}
        className='lg:min-w-16 object-cover'
        />
        <Image
        src={"/web/angular.png"}
        alt='Angular'
        width={128}
        height={181}
        className='lg:min-w-16 object-cover'
        />
        <Image
        src={"/web/laravel.png"}
        alt='Laravel'
        width={128}
        height={181}
        className='lg:min-w-16 object-cover'
        />
        <Image
        src={"/web/nodejs.png"}
        alt='Node.js'
        width={128}
        height={181}
        className='lg:min-w-16 object-cover'
        />
      </div>
    </div>
  )
}

export default TechnologySection
