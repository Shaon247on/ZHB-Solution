import { Button } from "@/components/ui/button";
import Link from "next/link";
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

      <div className="relative z-30 py-7 lg:py-20 px-6 md:px-20 xl:px-[20%] text-white text-center">
        <h1 className="text-3xl lg:text-[56px] font-semibold lg:font-bold font-orbitron">
          Next-Gen Mobile Apps for iOS &
          Android
        </h1>
        <p className="text-sm lg:text-xl font-semibold text-[#B7B7B7] max-w-[830px] mx-auto mt-2 ">
          Seamless performance, stunning design, and powerful features.
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
