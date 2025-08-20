import { Rocket } from "@/components/svg/CareerISVG";
import { EarthBlue, GrowBlue, ShieldBlue } from "@/components/svg/ServicesSVG";
import { LightbulbIcon } from "@/components/svg/WhoSVG";
import Image from "next/image";
import React from "react";

const data = [
  {
    icon: <Rocket />,
    title: "Proven Expertise",
  },
  {
    icon: <EarthBlue />,
    title: "Global Client Base",
  },
  {
    icon: <ShieldBlue />,
    title: "Security & Compliance",
  },
  {
    icon: <GrowBlue />,
    title: "Results-Driven Delivery",
  },
  {
    icon: <LightbulbIcon />,
    title: "Innovative Approach",
  },
];

function ChoseSection() {
  return (
    <div className="px-6 lg:px-[187px] py-6 lg:py-[63px] flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-[101px]">
      <Image
        src={"/services/service-7.jpg"}
        width={726}
        height={862}
        alt="service image"
        className="object-cover lg:w-[726px] lg:h-[862px]"
      />
      <div className="text-start">
        <h3 className="w-fit inline-block px-4 border rounded-full mb-2">
          Why Choose Us
        </h3>
        <h2 className="text-2xl lg:text-4xl font-bold font-orbitron mb-6">
          Top industry leaders rely on us <br className="hidden lg:block" />
          here’s why!
        </h2>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-6 my-12">
              <div className="bg-[#EBF1FC] flex items-center text-[#172F5F] justify-center rounded-lg size-10 lg:size-[56px] shadow-[0_5px_20px_rgba(0,0,0,0.25)]">
                {item.icon}
              </div>
              <h3 className="text-lg lg:text-[28px] font-medium text-[#172F5F]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChoseSection;
