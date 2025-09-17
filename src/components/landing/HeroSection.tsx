import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function HeroSection() {
  return (
    <div className='relative h-[350px] lg:h-[780px]'>
      <video
        src="/heroSection.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      <div className='w-full h-full absolute z-10 bg-linear-to-b from-[#181818] to-[#18181899]'/>
      <div className="relative z-40 flex flex-col items-center justify-center pt-8 lg:pt-32">
        <h1 className="text-2xl md:text-3xl lg:text-[3.5rem] font-bold font-orbitron text-center text-white md:leading-11 lg:leading-16 px-4 md:px-0"><span className='text-[#3671E2]'>AI - Powered</span> Solutions to <br /> Accelerate Your Digital Growth</h1>
        <p className="px-10 md:px-16 mt-2 lg:mt-6 max-w-[807px] text-center text-gray-300 lg:text-2xl font-thin">From intelligent automation to sleek mobile apps and business design – we empower startups and enterprises to grow smarter, faster.</p>
        <div className='space-x-6 mt-5 md:mt-10 lg:mt-20'>
          <Link href={"/contact"}>
          <Button size={"xl"} className='px-4 md:px-9 rounded-full text-xs md:text-sm font-medium'>Lets Build Together</Button>
          </Link>
         <Link href={"/services"}>
          <Button size={"xl"} variant={"outline"} className='px-4 md:px-9 rounded-full text-xs md:text-sm font-medium'>Explore Our Services</Button>
         </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
