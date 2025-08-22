import React from "react";
import { cardDataType } from "./BuildSection";
import { AiContent, Cart, Computer, Globe2 } from "@/components/svg/WebSVG";

import { LightbulbIconWhite } from "@/components/svg/WhoSVG";
import { Chart, Mining, PaintBoard } from "@/components/svg/DataSVG";
import { HomeWhite } from "@/components/svg/CareerISVG";
import { Grow, Search } from "../svg/ServicesSVG";
import { Browser, Mail, SmartPhone } from "../svg/MarketingSVG";

const data: cardDataType[] = [
  {
    icon: <Search />,
    title: "SEO",
    description:
      "Creating responsive, visually appealing, and user-friendly interfaces using modern frameworks like React, Vue.js, and Angular.",
  },
  {
    icon: <Browser />,
    title: "SEM (Google/Bing Ads)",
    description:
      "Building robust, secure, and scalable server-side applications with technologies like Node.js, Laravel, and Django.",
  },
  {
    icon: <SmartPhone />,
    title: "Social Media Marketing",
    description:
      "Designing and developing custom e-commerce platforms with secure payment gateways, inventory management, and SEO optimization.",
  },
  {
    icon: <AiContent />,
    title: "Content Marketing",
    description:
      "Providing complete end-to-end development from UI to database, ensuring seamless functionality across the entire system.",
  },
  {
    icon: <Mail />,
    title: "Email Marketing",
    description:
      "Creating responsive, visually appealing, and user-friendly interfaces using modern frameworks like React, Vue.js, and Angular.",
  },
  {
    icon: <Grow />,
    title: "Conversion Rate Optimization",
    description:
      "Building robust, secure, and scalable server-side applications with technologies like Node.js, Laravel, and Django.",
  },
];


function ServiceSection() {
  return (
    <div className="flex flex-col items-center bg-[#F8F9F4] py-6 lg:py-20">
      <div className="w-fit px-4 rounded-full border-2 border-[#2650A0] mb-10 lg:mb-12 bg-[#F8F9F4] lg:scroll-py-20">
        Service Overview
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 lg:px-0 max-w-[936px]">
        {data.map((item, index) => (
            <div key={index} className="py-6 lg:py-12 px-4 lg:px-6 flex flex-col items-center bg-[#EBF1FC] rounded-xl">
              <div className="inline-block w-fit bg-[#172F5F] p-2.5 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-[#172F5F] mb-2 text-center text-[20px] font-semibold">
                {item.title}
              </h3>
              <p className="text-sm text-[#464646] max-w-[400px] font-medium mb-5 text-center">
                {item.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ServiceSection;
