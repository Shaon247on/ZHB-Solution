import { Earth, Grow, Shield } from "@/components/svg/ServicesSVG";
import { Security } from "@/components/svg/WebSVG";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface cardDataType {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const data: cardDataType[] = [
  {
    icon: <Shield />,
    title: "Scalability",
    description:
      "Architecture built to handle traffic growth without performance drops.",
  },
  {
    icon: <Security />,
    title: "Security",
    description:
      "Enterprise-grade security measures, SSL encryption & compliance with industry standards.",
  },
  {
    icon: <Earth />,
    title: "Speed",
    description:
      "Optimized code, lightweight assets, and CDN integration for fast load times.",
  },
  {
    icon: <Grow />,
    title: "User Experience",
    description:
      "Intuitive navigation, responsive layouts, and accessibility compliance for all devices.",
  },
];

function BuildSection() {
  return (
    <div className="py-6 xl:py-20 px-6 xl:px-[120px] flex flex-col xl:flex-row items-start justify-start gap-12">
      <div className="xl:max-w-[518px] lg:flex lg:flex-row lg:w-full lg:gap-4 xl:block">
        <div className="lg:w-[518px] lg:h-full">
          <Image
            src={"/web/web-2.jpg"}
            alt="web image"
            width={518}
            height={388}
            layout="responsive"
            className="object-cover lg:w-[518px] lg:h-[388px] rounded-tl-[80px] rounded-br-[80px]"
          />
        </div>
        <div className="lg:w-[518px] lg:h-full">
          <Image
            src={"/web/web-1.jpg"}
            alt="web image"
            width={518}
            height={388}
            layout="responsive"
            className="object-cover lg:w-[518px] lg:h-[388px] rounded-tl-[80px] rounded-br-[80px]"
          />
        </div>
      </div>
      <div>
        <div className="p-2 lg:p-6">
          <h2 className="text-xl lg:text-[32px] font-orbitron text-[#181818] mb-4 lg:mb-0">
            Building Secure, Scalable, and High-Performance Websites for Your
            Business
          </h2>
          <p className="text-sm lg:text-base font-medium text-[#464646]">
            we build high-performance, secure, and scalable websites that
            empower businesses to achieve their goals. Our approach combines
            cutting-edge technology, intuitive design, and robust functionality
            to deliver exceptional digital experiences.
          </p>{" "}
          <br />
          <p className="text-sm lg:text-base font-medium text-[#464646]">
            we build high-performance, secure, and scalable websites that
            empower businesses to achieve their goals. Our approach combines
            cutting-edge technology, intuitive design, and robust functionality
            to deliver exceptional digital experiences.
          </p>
          <Link
            href="https://wa.me/14049363567?text=Hello%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size={"lg"}
              className="mt-4 lg:mt-8 text-[#F2F8FC] px-9 rounded-full"
            >
              Get a Free Consultation
            </Button>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:px-[13px] mt-4 lg:mt-20">
          {data.map((item, index) => (
            <div key={index} className="p-2 flex flex-col items-center">
              <div className="inline-block w-fit bg-[#172F5F] p-2.5 rounded-full mb-2">
                {item.icon}
              </div>
              <h3 className="font-medium text-[#172F5F] mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-sm text-[#464646] max-w-[400px] font-medium mb-5 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuildSection;
