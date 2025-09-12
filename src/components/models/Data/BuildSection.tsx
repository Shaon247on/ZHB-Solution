import { Chart, PaintBoard } from "@/components/svg/DataSVG";
import {
  Earth,
  Grow,
  GrowBlue,
  Search,
  Shield,
} from "@/components/svg/ServicesSVG";
import { Security } from "@/components/svg/WebSVG";
import { Global } from "@/components/svg/WhoSVG";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export interface cardDataType {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const data: cardDataType[] = [
  {
    icon: <Shield />,
    title: "Innovation-Driven",
    description: "Latest AI & ML frameworks for cutting-edge solutions.",
  },
  {
    icon: <Security />,
    title: "Data-First Approach",
    description: "AI powered by clean and structured data.",
  },
  {
    icon: <Earth />,
    title: " Trustworthy AI",
    description: "Ethical, secure, and compliant implementations.",
  },
  {
    icon: <Grow />,
    title: "Business Impact",
    description: "Designed for growth and real-world results.",
  },
];

function BuildSection() {
  return (
    <div className="py-6 lg:py-20 px-6 lg:px-[120px] flex flex-col-reverse lg:flex-row items-start justify-start gap-12">
      <div className="w-full max-w-[518px] mx-auto">
        <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start gap-4 sm:gap-6 lg:gap-0">
          {/* First Image */}
          <div className="w-full sm:w-1/2 lg:w-full">
            <div className="relative overflow-hidden rounded-tl-[40px] rounded-br-[40px] sm:rounded-tl-[60px] sm:rounded-br-[60px] lg:rounded-tl-[80px] lg:rounded-br-[80px]">
              <div className="aspect-[1/2] sm:aspect-[3/4] lg:aspect-[518/388]">
                <Image
                  src={"/data/data-1.jpg"}
                  alt="data image"
                  width={518}
                  height={388}
                  className="w-full h-full object-cover rounded-tl-[36px] rounded-br-[36px] sm:rounded-tl-[56px] sm:rounded-br-[56px] lg:rounded-tl-[76px] lg:rounded-br-[76px]"
                />
              </div>
            </div>
          </div>

          {/* Second Image */}
          <div className="w-full sm:w-1/2 lg:w-full">
            <div className="relative overflow-hidden rounded-tl-[40px] rounded-br-[40px] sm:rounded-tl-[60px] sm:rounded-br-[60px] lg:rounded-tl-[80px] lg:rounded-br-[80px]">
              <div className="aspect-[1/2] sm:aspect-[3/4] lg:aspect-[518/388]">
                <Image
                  src={"/data/data-2.jpg"}
                  alt="data image"
                  width={518}
                  height={388}
                  className="w-full h-full object-cover rounded-tl-[36px] rounded-br-[36px] sm:rounded-tl-[56px] sm:rounded-br-[56px] lg:rounded-tl-[76px] lg:rounded-br-[76px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-2 lg:p-6">
          <h2 className="text-xl lg:text-[32px] font-orbitron text-[#181818] mb-4 lg:mb-0">
            Building Intelligent, Secure, and Scalable AI Solutions
          </h2>
          <p className="text-sm lg:text-base font-medium text-[#464646]">
            At ZHB Software Solutions, our AI services are designed to simplify
            operations, uncover insights, and create personalized experiences.
            Whether it’s predictive analytics, NLP, or automation, we ensure
            every AI solution delivers measurable value for your business.
          </p>
          <Button
            size={"lg"}
            className="mt-4 lg:mt-8 text-[#F2F8FC] px-9 rounded-full"
          >
            Start Your App Project
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center lg:px-[13px] mt-4 lg:mt-20">
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
