import React from "react";
import SolutionCard from "../element/SolutionCard";

const statsData = [
  {
    number: "01",
    title: "Experience",
    subtitle: "14+",
    label: "Years",
    defaultBgColor: "bg-white",
    hoverBgColor: "bg-green-500",
    defaultTextColor: "text-black",
    hoverTextColor: "text-white",
  },
  {
    number: "02",
    title: "Business Partner",
    subtitle: "16",
    label: "Years",
    defaultBgColor: "bg-white",
    hoverBgColor: "bg-blue-500",
    defaultTextColor: "text-black",
    hoverTextColor: "text-white",
  },
  {
    number: "03",
    title: "Satisfied User",
    subtitle: "1000+",
    label: "Projects",
    defaultBgColor: "bg-white",
    hoverBgColor: "bg-emerald-600",
    defaultTextColor: "text-black",
    hoverTextColor: "text-white",
  },
  {
    number: "04",
    title: "Listed Products",
    subtitle: "12",
    label: "In Service",
    defaultBgColor: "bg-white",
    hoverBgColor: "bg-sky-900",
    defaultTextColor: "text-balck",
    hoverTextColor: "text-white",
  },
];

function SolutionSection() {
  return (
    <div className="relative mask-y-to-cyan-200 lg:my-20">
      <video
        src="/solution.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative px-3 lg:px-32 py-8">
        <h2 className="text-2xl lg:text-[56px] font-orbitron font-bold text-white">
          ZHB Software Solution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 lg:px-[70px] my-11">
          {statsData.map((stat, index) => (
            <SolutionCard
              key={index}
              number={stat.number}
              title={stat.title}
              subtitle={stat.subtitle}
              label={stat.label}
              defaultBgColor={stat.defaultBgColor}
              hoverBgColor={stat.hoverBgColor}
              defaultTextColor={stat.defaultTextColor}
              hoverTextColor={stat.hoverTextColor}
            />
          ))}
        </div>
        <h2 className="text-2xl lg:text-[56px] font-orbitron font-bold text-white text-end">
          at a Glance
        </h2>
      </div>
    </div>
  );
}

export default SolutionSection;
