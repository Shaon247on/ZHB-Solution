import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="relative lg:pb-32 overflow-hidden">
      <video
        src="/web/web.mp4"
        autoPlay
        loop
        muted
        controls={false}
        className="w-full h-screen object-cover absolute z-0"
      />
      <div className="w-full h-screen top-0 absolute z-10 bg-[#181818CC]" />
      
      <div className="relative z-30 py-7 lg:py-20 px-6 lg:px-32 xl:px-[300px] text-white text-center">
        <h1 className="text-xl lg:text-5xl xl:text-[56px] font-semibold lg:font-bold font-orbitron">
          Build High-Performance Websites that Drive Results
        </h1>
        <p className="text-sm lg:text-base xl:text-xl font-semibold text-[#B7B7B7] max-w-[830px] mx-auto mt-4">
          We offer web and mobile app development to cloud, data, and digital
          transformation , we deliver technology that drives growth, efficiency,
          and success.
        </p>
       <Link href={"/services"}>
        <Button
          size={"xl"}
          className="rounded-full mb-20 lg:mb-10 mt-6 lg:mt-12"
        >
          Explore Our Service
        </Button>  
       </Link>      
      </div>
    </div>
  );
}

export default HeroSection;
