import CareerImage from "@/components/element/CareerImage";
import ServicesImage from "@/components/element/ServiceImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const image = [
  {
    id: 1,
    src: "/services/service-1.png",
    alt: "About Us 1",
    className: "rounded-tr-full",
    tag: "Web development",
  },
  {
    id: 2,
    src: "/services/service-2.png",
    alt: "About Us 2",
    className: "rounded-l-full",
    tag: "Mobile App development",
  },
  {
    id: 3,
    src: "/services/service-3.jpg",
    alt: "About Us 3",
    className: "rounded-tl-full",
    tag: "UI/UX Design",
  },
  {
    id: 4,
    src: "/services/service-4.jpg",
    alt: "About Us 4",
    className: "rounded-tr-full",
    tag: "Data Analytics",
  },
  {
    id: 5,
    src: "/services/service-5.jpg",
    alt: "About Us 5",
    className: "rounded-r-full",
    tag: "Cloud Solution",
  },
  {
    id: 6,
    src: "/services/service-6.png",
    alt: "About Us 5",
    className: "rounded-bl-full",
    tag: "Digital Marketing",
  },
];

function HeroSection() {
  return (
    <div className="relative lg:pb-32 overflow-hidden">
      <video
        src="/design/design.mp4"
        autoPlay
        loop
        muted
        controls={false}
        className="w-full h-screen object-cover absolute z-0"
      />
      <div className="w-full h-screen -top-3 absolute z-10 bg-[#181818CC]" />
      <div className="relative z-30 py-7 lg:py-20 px-6 xl:px-[300px] text-white text-center">
        <h1 className="text-xl lg:text-5xl xl:text-[56px] font-semibold lg:font-bold font-orbitron">
          Designs That Delight and <br className="hidden lg:block" />
          Convert
        </h1>
        <p className="text-sm lg:text-base xl:text-xl font-semibold text-[#B7B7B7] max-w-[830px] mx-auto mt-4 ">
          User-centric UI/UX for websites, apps, and digital products.
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
