import CareerImage from "@/components/element/CareerImage";
import ServicesImage from "@/components/element/ServiceImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const image = [
  {
    id:1,
    src: "/services/service-1.png",
    alt: "About Us 1",
    className: "rounded-tr-full",
    tag: "Web development"
  },
  {
    id:2,
    src: "/services/service-2.png",
    alt: "About Us 2",
    className: "rounded-l-full",
    tag: "Mobile App development"
  },
  {
    id:3,
    src: "/services/service-3.jpg",
    alt: "About Us 3",
    className: "rounded-tl-full",
    tag: "UI/UX Design"
  },
  {
    id:4,
    src: "/blogs/blog1.jpg",
    alt: "About Us 4",
    className: "rounded-tr-full",
    tag: "Artificial Intelligence"
  },
  {
    id:5,
    src: "/services/service-5.jpg",
    alt: "About Us 5",
    className: "rounded-r-full",
    tag: "Cloud Solution"
  },
  {
    id:6,
    src: "/services/service-6.png",
    alt: "About Us 5",
    className: "rounded-bl-full",
    tag: "Digital Marketing"
  },
];

function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <video
        src="/services/hero.mp4"
        autoPlay
        loop
        muted
        controls={false}
        className="w-full min-h-full object-cover absolute z-0"
      />
      <div className="w-full min-h-[100%] absolute z-10 bg-[#181818CC]" />
      <div className=" relative z-30 py-7 lg:py-20 px-6 xl:px-10 lg:max-w-[90%] xl:max-w-[80%] mx-auto text-white text-center">
        <h1 className="text-xl lg:text-[56px] font-semibold lg:font-bold font-orbitron">
          Service of <br className="hidden lg:block" />
          ZHB Software Solution
        </h1>
        <p className="text-sm lg:text-xl font-semibold text-[#B7B7B7] max-w-[830px] mx-auto mt-2 ">
          We offer web and mobile app development to cloud, data, and digital
          transformation , we deliver technology that drives growth, efficiency,
          and success.
        </p>
        <Link href="#service_id" scroll={true}>
        <Button
          size={"xl"}
          className="rounded-full mt-6 lg:mt-12"
        >
          Explore Our Service
        </Button>
        </Link>
        <div className="flex items-center justify-center py-2 lg:py-16 gap-1 lg:gap-6 relative mt-6 lg:mt-10">
          {image.map((img, index) => (
            <ServicesImage
              key={index}
              id={img.id}
              className={img.className}
              image={img.src}
              alt={img.alt}
              tag={img.tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
