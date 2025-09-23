import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="py-7 lg:py-20 lg:px-[120px] bg-[#172134] text-white text-center">
      <h1 className="text-xl lg:text-[56px] font-semibold lg:font-bold font-orbitron">
        Empowering Businesses Through <br className="hidden xl:block" />
        Technology
      </h1>
      <p className="text-sm lg:text-xl font-semibold text-[#B7B7B7] max-w-[1168px] mx-auto mt-2 mb-10 lg:mb-[40px]">
        Welcome to our digital solutions company — where innovation meets
        execution. We are passionate about helping businesses transform with
        Cybersecurity, Artificial Intelligence, Cloud Infrastructure, and
        Digital Transformation services that deliver measurable results.
      </p>
      <div className="max-w-[1680px] h-40 lg:h-[500px] relative overflow-hidden">
        <Image
          src="/about/aboutHero.jpg"
          alt="About Us"
          layout="responsive"
          width={1680}
          height={400}
          className="absolute md:-top-[135px] lg:lg:-top-[270px] left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default HeroSection;
