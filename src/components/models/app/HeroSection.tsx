import { Button } from "@/components/ui/button";
import React from "react";

function HeroSection() {
  return (
    <div className="relative lg:pb-32 overflow-hidden">
      <video
        src="/app/app.mp4"
        autoPlay
        loop
        muted
        controls={false}
        className="w-full h-screen object-cover absolute z-0"
      />
      <div className="w-full h-screen top-0 absolute z-10 bg-[#181818CC]" />
      
      <div className="relative z-30 py-7 lg:py-20 px-6 lg:px-[300px] text-white text-center">
        <h1 className="text-xl lg:text-[56px] font-semibold lg:font-bold font-orbitron">
          Next-Gen Mobile Apps for iOS & <br className="hidden lg:block"/>Android
        </h1>
        <p className="text-sm lg:text-xl font-semibold text-[#B7B7B7] max-w-[830px] mx-auto mt-2 ">
          Seamless performance, stunning design, and powerful features.
        </p>
        <Button
          size={"xl"}
          className="rounded-full mb-20 lg:mb-10 mt-6 lg:mt-12"
        >
          Schedule Your Free Consultation
        </Button>        
      </div>
    </div>
  );
}

export default HeroSection;
