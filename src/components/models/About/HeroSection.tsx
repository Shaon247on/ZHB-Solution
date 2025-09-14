import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="py-7 lg:py-20 lg:px-[120px] bg-[#172134] text-white text-center">
      <h1 className="text-xl lg:text-[56px] font-semibold lg:font-bold font-orbitron">
        Empowering Digital Innovation <br className="hidden lg:block" /> Across
        Industries
      </h1>
      <p className="text-sm lg:text-xl font-semibold text-[#B7B7B7] max-w-[1168px] mx-auto mt-2 mb-10 lg:mb-[40px]">
        At ZHB Solutions, we specialize in Artificial Intelligence, Web
        Development, Mobile App Development, UI/UX Design, Cloud Solutions, and
        Digital Marketing. With 14 years of proven expertise, we empower
        businesses to thrive in the digital era.
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
