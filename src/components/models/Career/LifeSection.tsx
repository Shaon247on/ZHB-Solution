import LifeCard from "@/components/element/LifeCard";
import {
  Gift,
  Health,
  Home,
  Hour,
  Learn,
  World,
} from "@/components/svg/CareerISVG";
import Image from "next/image";
import React from "react";
const data = [
  {
    icon: <Health />,
    title: "Health & Wellness Programs",
    subtitle: "Comprehensive plans to keep you healthy and happy.",
  },
  {
    icon: <Gift />,
    title: "Annual Bonus",
    subtitle: "Rewarding your contributions with yearly performance bonuses.",
  },
  {
    icon: <World />,
    title: "International Projects",
    subtitle: "Collaborate on global-scale, impactful solutions.",
  },
  {
    icon: <Hour />,
    title: "Flexible Work Hours",
    subtitle: "Balance work and life with adaptable schedules.",
  },
  {
    icon: <Learn />,
    title: "Paid Learning Programs",
    subtitle: "Grow your skills with company-funded training.",
  },
  {
    icon: <Home />,
    title: "Remote Freedom",
    subtitle:
      "Work from anywhere in the world while staying seamlessly connected to your team.",
  },
];
function LifeSection() {
  return (
    <div className="py-6 lg:py-20 px-6 lg:px-[60px] relative">
        {/* <Image
          src="/career/lifeBG.jpg"
          alt="Life at ZHB"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10"
        /> */}
        <div className="absolute inset-0 z-10 w-full h-full bg-[#f9f8f4e1]" />
      <div className="relative z-20">
        <h2 className="text-2xl lg:text-4xl font-bold mb-2 font-orbitron text-center">
          Life as a <br className="hidden lg:block" />
          ZHB Software Solution
        </h2>
        <p className="text-sm lg:text-lg mb-4 text-center max-w-[540px] mx-auto text-[#464646]">
          More than a role , it's a shared journey of growth, creativity, and
          impact.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-40">
          <div className="max-w-[340px] space-y-6">
            {data.slice(0, 3).map((item, index) => (
              <LifeCard key={index} {...item} />
            ))}
          </div>
          <div className="max-w-[340px] space-y-6">
            {data.slice(3, 6).map((item, index) => (
              <LifeCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeSection;
