import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="relative lg:pb-32 overflow-hidden">
      <video
        src="/cloud/cloud.mp4"
        autoPlay
        loop
        muted
        controls={false}
        className="w-full h-screen object-cover absolute z-0"
      />
      <div className="w-full h-screen -top-3 absolute z-10 bg-[#181818CC]" />
      <div className="relative z-30 py-7 lg:py-20 px-6 lg:px-[300px] text-white text-center">
        <h1 className="text-xl lg:text-[56px] font-semibold lg:font-bold font-orbitron">
          Empower Your Business with <br className="hidden lg:block" />
          Cloud
        </h1>
        <p className="text-sm lg:text-xl font-semibold text-[#B7B7B7] max-w-[830px] mx-auto mt-2 ">
          Secure, scalable, and optimized cloud solutions.
        </p>
        <Link
          href="https://wa.me/14049363567?text=Hello%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size={"xl"}
            className="rounded-full mb-20 lg:mb-10 mt-6 lg:mt-12"
          >
            Schedule Your Free Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
