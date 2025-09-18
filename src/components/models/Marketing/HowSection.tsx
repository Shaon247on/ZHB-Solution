import Image from "next/image";
import React from "react";

interface dataType {
  step: string;
  title: string;
  description: string;
}
const data: dataType[] = [
  {
    step: "1",
    title: "Audit",
    description:
      "Reviewing current marketing efforts, audience engagement, and competitors",
  },
  {
    step: "2",
    title: "Strategy",
    description:
      "Developing a targeted plan to achieve your business and marketing goals",
  },
  {
    step: "3",
    title: "Execution",
    description:
      "Launching campaigns across chosen digital platforms with precision",
  },
  {
    step: "4",
    title: "Optimization",
    description:
      "Continuously refining campaigns based on performance metrics and A/B testing.",
  },
  {
    step: "5",
    title: "Reporting",
    description:
      "Providing transparent reports with KPIs, ROI, and future recommendations.",
  },
];

function HowSection() {
  return (
    <div className="relative py-6 lg:py-20 px-6 lg:px-[120px]">
      <Image
        src={"/web/howBg.jpg"}
        alt="background"
        width={128}
        height={181}
        className="object-cover absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-[#252e3ff2]" />
      <div className="relative z-20">
        <h3 className="inline-block w-fit px-4 text-[#E8E8E8] rounded-full border-2 border-[#E8E8E8] ">
          How We Work
        </h3>
        <h2 className="mt-2 text-2xl lg:text-4xl font-bold text-[#E8E8E8] font-orbitron">
          Our ROI-Focused Digital Marketing <br className="hidden lg:block"/> Workflow
        </h2>
        <p className="font-medium text-[#B7B7B7] max-w-[888px] mt-2 mb-6 lg:mb-12">
         From initial audit to performance reporting, we deliver campaigns that convert and scale.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:gap-6 px-6 xl:px-[20%]">
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className="py-3 lg:py-6 px-2 lg:px-4 bg-[#F8F9F4]">
              <span className="inline-block w-fit rounded-full bg-[#B9D4CE] text-sm px-4 py-1 mb-3 lg:mb-6">
                Step 0{item.step}
              </span>
              <h2 className="font-semibold text-2xl text-[#181818] mb-4">
                {item.title}
              </h2>
              <p className="text-[#464646] mb-16">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-4 lg:gap-6 px-6 xl:px-[28%] mt-6 ">
          {data.slice(3, 5).map((item, index) => (
            <div key={index} className="py-3 lg:py-6 px-2 lg:px-4 bg-[#F8F9F4]">
              <span className="inline-block w-fit rounded-full bg-[#B9D4CE] text-sm px-4 py-1 mb-3 lg:mb-6 ">
                Step 0{item.step}
              </span>
              <h2 className="font-semibold text-2xl text-[#181818] mb-4">
                {item.title}
              </h2>
              <p className="text-[#464646] mb-16">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowSection;
