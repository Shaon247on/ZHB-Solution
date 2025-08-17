import CareerImage from "@/components/element/CareerImage";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="py-7 lg:py-20 lg:px-[120px] bg-[#172134] text-white text-center">
      <h1 className="text-xl lg:text-[56px] font-semibold lg:font-bold font-orbitron">
        Join ZHB Solutions Shape <br className="hidden lg:block" /> The Future
        with Us
      </h1>
      <p className="text-sm lg:text-xl font-semibold text-[#B7B7B7] max-w-[1168px] mx-auto mt-2 mb-10 lg:mb-[144px]">
        We’re building impactful solutions. Be a part of our global team.
      </p>
      <div className="max-w-[1680px] h-40 lg:h-[420px] relative overflow-hidden">
        <CareerImage
          className=""
          image="/about/aboutHero.jpg"
          alt="About Us"
        />
      </div>
    </div>
  );
}

export default HeroSection;
