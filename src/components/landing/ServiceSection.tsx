import React from "react";
import TitleSection from "../element/TitleSection";
import ServiceCard from "../element/ServiceCard";

const data = [
  {
    title: "AI Powered Solutions",
    description:
      "From logos to complete brand identity, we craft visually stunning designs that capture attention and build lasting impressions. Let your brand speak through creative excellence.",
    buttonText: "Design with Impact",
    imageSrc: "/card-1.jpg",
    imageAlt: "AI Robot Hand",
  },

  {
    title: "Creative & Designs",
    description:
      "Strategic marketing campaigns that drive results. From SEO to social media, we help your business reach the right audience at the right time.",
    buttonText: "Grow Your Reach",
    imageSrc: "/card-2.jpg",
    imageAlt: "Creative & Designs",
  },
  {
    title: "Web & App Development",
    description:
      "Modern, responsive websites that deliver exceptional user experiences. Built with cutting-edge technologies for optimal performance and scalability.",
    buttonText: "Start Building",
    imageSrc: "/card-3.jpg",
    imageAlt: "Web & App Development",
  },
  {
    title: "e-Commerce Solutions",
    description:
      "Strategic marketing campaigns that drive results. From SEO to social media, we help your business reach the right audience at the right time.",
    buttonText: "Grow Your Reach",
    imageSrc: "/card-4.jpg",
    imageAlt: "e-Commerce Solutions",
  },
  {
    title: "360° Business Solutions",
    description:
      "Strategic marketing campaigns that drive results. From SEO to social media, we help your business reach the right audience at the right time.",
    buttonText: "Grow Your Reach",
    imageSrc: "/card-5.jpg",
    imageAlt: "360° Business Solutions",
  },
];

function ServiceSection() {
  return (
    <div className="mt-20 pb-20 relative z-20 bg-linear-65 from-[#D8D8D8] to-[#D2D2D2] max-h-[952px]">
      <TitleSection
        title="SERVICE"
        subtitle="Empowering Your Business with 
Smart Digital Solutions"
        buttonText="Contact Us"
        buttonHref="/contact"
        width="w-[100px]"
        textColor="text-black"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-5 lg:px-32">
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
