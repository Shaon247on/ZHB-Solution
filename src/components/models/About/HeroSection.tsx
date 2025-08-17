import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <div className='lg:py-20 lg:px-[120px] bg-[#172134] text-white text-center'>
      <h1 className='lg:text-[56px] font-bold font-orbitron'>Empowering Digital Innovation <br className='hidden lg:block'/> Across Industries</h1>
      <p className='text-xl font-semibold text-[#B7B7B7] max-w-[1168px] mx-auto mt-2 mb-[120px]'>we craft cutting-edge digital solutions that help businesses grow, adapt, and succeed in an ever-changing world.
Our mission is to combine technology, creativity, and strategy to turn ideas into impactful realities.</p>
<div className='max-[1680px] h-[420px] relative overflow-hidden'>
  <Image
    src="/about/aboutHero.jpg"
    alt="About Us"
    layout="responsive"
    width={1680}
    height={400}
    className="absolute -top-[150px] left-0 w-full h-full object-cover"
  />
</div>
    </div>
  )
}

export default HeroSection
