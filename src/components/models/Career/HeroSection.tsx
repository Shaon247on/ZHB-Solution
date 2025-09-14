import CareerImage from "@/components/element/CareerImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const image = [
  {
    src: "/career/hero-1.jpg",
    alt: "About Us 1",
    className: "rounded-tl-full",
  },
  {
    src: "/career/hero-2.jpg",
    alt: "About Us 2",
    className: "rounded-[8px]",
  },
  {
    src: "/career/hero-3.jpg",
    alt: "About Us 3",
    className: "rounded-[8px]",
  },
  {
    src: "/career/hero-4.jpg",
    alt: "About Us 4",
    className: "rounded-[8px]",
  },
  {
    src: "/career/hero-5.jpg",
    alt: "About Us 5",
    className: "rounded-tr-full",
  },
];

function HeroSection() {
  return (
    <div className="py-7 lg:py-20 px-6 lg:px-[120px] bg-[#172134] text-white text-center">
      <h1 className="text-xl lg:text-[56px] font-semibold lg:font-bold font-orbitron">
        Join ZHB Solutions Shape <br className="hidden lg:block" /> The Future
        with Us
      </h1>
      <p className="text-sm lg:text-xl font-semibold text-[#B7B7B7] max-w-[1168px] mx-auto mt-2 ">
        We’re building impactful solutions. Be a part of our global team.
      </p>
      <Link href="#job_offers" scroll={true}>
        <Button
          size={"xl"}
          className="rounded-full mb-2 lg:mb-10 mt-6 lg:mt-12"
        >
          Join Our Team
        </Button>
      </Link>{" "}
      <div className="max-w-[1680px] flex items-center gap-1 lg:gap-6 h-30 lg:h-[420px] relative overflow-hidden">
        {image.map((img, index) => (
          <CareerImage
            key={index}
            className={img.className}
            image={img.src}
            alt={img.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
