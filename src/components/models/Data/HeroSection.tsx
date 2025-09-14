import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="relative lg:pb-32 overflow-hidden">
      <video
        src="/data/data.mp4"
        autoPlay
        loop
        muted
        controls={false}
        className="w-full h-full lg:h-screen object-cover absolute z-0"
      />
      <div className="w-full h-screen top-0 absolute z-10 bg-[#181818CC]" />

      <div className="relative z-30 py-7 lg:py-20 px-6 lg:px-[300px] text-white text-center">
        <h1 className="text-xl lg:text-[56px] font-semibold lg:font-bold font-orbitron">
          AI-Powered Solutions for Smarter <br className="hidden lg:block" />{" "}
          Businesses
        </h1>
        <p className="text-sm lg:text-xl font-semibold text-[#B7B7B7] max-w-[830px] mx-auto mt-2 ">
          From machine learning to generative AI, we build intelligent solutions
          that automate, analyze, and accelerate your business growth.
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
            Schedule Your AI Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
