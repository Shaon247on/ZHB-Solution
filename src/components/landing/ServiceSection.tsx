import React from "react";
import TitleSection from "../element/TitleSection";
import ServiceCard from "../element/ServiceCard";
import Image from "next/image";

const data = [
  {
    title: "Web Development",
    description:
      "From logos to complete brand identity, we craft visually stunning designs that capture attention and build lasting impressions. Let your brand speak through creative excellence.",
    buttonText: "Design with Impact",
    imageSrc: "/1.png",
    imageAlt: "AI Robot Hand",
  },

  {
    title: "Creative & Designs",
    description:
      "Strategic marketing campaigns that drive results. From SEO to social media, we help your business reach the right audience at the right time.",
    buttonText: "Grow Your Reach",
    imageSrc: "/2.png",
    imageAlt: "Creative & Designs",
  },
  {
    title: "Web & App Development",
    description:
      "Modern, responsive websites that deliver exceptional user experiences. Built with cutting-edge technologies for optimal performance and scalability.",
    buttonText: "Start Building",
    imageSrc: "/3.png",
    imageAlt: "Web & App Development",
  },
  {
    title: "e-Commerce Solutions",
    description:
      "Strategic marketing campaigns that drive results. From SEO to social media, we help your business reach the right audience at the right time.",
    buttonText: "Grow Your Reach",
    imageSrc: "/4.png",
    imageAlt: "e-Commerce Solutions",
  },
  {
    title: "360° Business Solutions",
    description:
      "Strategic marketing campaigns that drive results. From SEO to social media, we help your business reach the right audience at the right time.",
    buttonText: "Grow Your Reach",
    imageSrc: "/5.png",
    imageAlt: "360° Business Solutions",
  },
  {
    title: "360° Business Solutions",
    description:
      "Strategic marketing campaigns that drive results. From SEO to social media, we help your business reach the right audience at the right time.",
    buttonText: "Grow Your Reach",
    imageSrc: "/6.png",
    imageAlt: "360° Business Solutions",
  },
];

function ServiceSection() {
  return (
    <div className="mt-20 mb-10 md:mb-0 pb-20 relative z-20 bg-linear-65 from-[#D8D8D8] to-[#D2D2D2] max-h-[2600px] lg:max-h-[1952px]">
      <div className="relative z-30"> 
        <TitleSection
        title="SERVICE"
        subtitle="Empowering Your Business with 
Smart Digital Solutions"
        buttonText="Contact Us"
        buttonHref="/contact"
        width="w-[100px]"
        textColor="text-black"
      />
      </div>
      <Image
      src={"/serviceBg.jpg"}
      width={1920}
      height={1068}
      alt="bg image"
      className="absolute z-0 top-0 w-full h-full"
      />
      <div className="absolute z-10 w-full h-full top-0 bg-linear-to-b from-[#d8d8d8da] to-[#d2d2d250]"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 px-5 lg:px-32 relative z-30">
        {data.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            buttonText={service.buttonText}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
