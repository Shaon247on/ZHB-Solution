import React from "react";
import TitleSection from "../element/TitleSection";
import ServiceCard from "../element/ServiceCard";
import Image from "next/image";

const data = [
  {
    title: "Web Development",
    description:
      "We build responsive, high-performance websites tailored to your business needs. From front-end to back-end, our solutions ensure seamless functionality, strong security, and scalable growth for a powerful online presence.",
    buttonText: "Design with Impact",
    imageSrc: "/1.png",
    imageAlt: "Web Development",
    href:"/services/web-development"
    
  },
  {
    title: "Mobile App Development",
    description:
      "Create intuitive, cross-platform mobile apps that deliver seamless user experiences. We design and develop apps that enhance customer engagement, improve accessibility, and drive measurable business results across Android and iOS platforms.",
    buttonText: "Grow Your Reach",
    imageSrc: "/2.png",
    imageAlt: "Mobile App Development",
    href:"/services/mobile-app-development"
  },
  {
    title: "UI/UX Design",
    description:
      "We craft user-focused designs that balance beauty with functionality. Our UI/UX solutions enhance usability, streamline navigation, and deliver engaging experiences that keep users returning while strengthening your brand identity.",
    buttonText: "Start Building",
    imageSrc: "/3.png",
    imageAlt: "UI/UX Design",
    href:"/services/ui-ux-design"
  },
  {
    title: "Cloud Solutions",
    description:
      "Leverage the power of cloud technology to scale securely and efficiently. From storage and hosting to cloud-native applications, we deliver solutions that improve flexibility, reliability, and cost-effectiveness for businesses.",
    buttonText: "Grow Your Reach",
    imageSrc: "/4.png",
    imageAlt: "Cloud Solutions",
    href:"/services/cloud-solutions"
  },
  {
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights. Our analytics solutions help businesses understand customer behavior, forecast trends, and optimize performance, empowering data-driven decision-making for long-term growth and success.",
    buttonText: "Grow Your Reach",
    imageSrc: "/5.png",
    imageAlt: "Data Analytics",
    href:"/services/data-analytics"
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with targeted digital marketing strategies. From SEO and content marketing to paid ads and social campaigns, we connect you with the right audience to maximize ROI.",
    buttonText: "Grow Your Reach",
    imageSrc: "/6.png",
    imageAlt: "Digital Marketing",
    href:"/services/digital-marketing"
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
            href={service.href}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
