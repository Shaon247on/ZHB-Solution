import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

function HeroSection() {
  return (
    <div className='relative h-[350px] lg:h-[780px]'>
      <Image
        src="/Hero-Section.png"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 lg:pt-32">
        <h1 className="text-2xl md:text-3xl lg:text-[3.5rem] font-bold font-orbitron text-center text-white md:leading-11 lg:leading-16 px-4 md:px-0">AI - Powered Solutions to <br /> AccelerateYour Digital Growth</h1>
        <p className="px-10 md:px-16 mt-2 lg:mt-6 max-w-[807px] text-center text-gray-300 lg:text-2xl font-thin">From intelligent automation to sleek mobile apps and business design – we empower startups and enterprises to grow smarter, faster.</p>
        <div className='space-x-6 mt-5 md:mt-10 lg:mt-20'>
          <Button size={"xl"} className='px-2 md:px-9 rounded-full text-xs md:text-sm font-medium'>Lets Build Together</Button>
          <Button size={"xl"} variant={"outline"} className='px-2 md:px-9 rounded-full text-xs md:text-sm font-medium'>Explore Our Services</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
