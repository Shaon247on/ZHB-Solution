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
    title: "Assessment",
    description:
      "Analyzing your current infrastructure, applications, and business needs to determine the right cloud strategy",
  },
  {
    step: "2",
    title: "Planning",
    description:
      "Creating a detailed migration plan with timelines, resources, and risk management strategies.",
  },
  {
    step: "3",
    title: "Migration",
    description:
      "Seamlessly moving your data, applications, and workloads to the cloud with minimal downtime",
  },
  {
    step: "4",
    title: "Optimization",
    description:
      "Fine-tuning performance, security, and costs to maximize the value of your cloud investment",
  },
  {
    step: "5",
    title: "Support",
    description:
      "Providing continuous monitoring, updates, and assistance to keep your cloud environment running at its best.",
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
        <h2 className="mt-2 text-4xl font-bold text-[#E8E8E8] font-orbitron">
          Our Cloud Migration & Optimization Process
        </h2>
        <p className="font-medium text-[#B7B7B7] max-w-[888px] mt-2 mb-6 lg:mb-12">
          From initial assessment to ongoing support, we ensure a secure,
          smooth, and cost-effective cloud <br className="hidden lg:block" />
          journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:gap-6 px-6 lg:px-[20%]">
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className="py-3 lg:py-6 px-2 lg:px-4 bg-[#F8F9F4]">
              <span className="inline-block w-fit rounded-full bg-[#B9D4CE] text-sm px-4 py-1 mb-3 lg:mb-6">
                Step 0{item.step}
              </span>
              <h2 className="font-semibold text-2xl text-[#181818] mb-4">
                {item.title}
              </h2>
              <p className="text-[#464646]">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-4 lg:gap-6 px-6 lg:px-[28%] mt-6">
          {data.slice(3, 5).map((item, index) => (
            <div key={index} className="py-3 lg:py-6 px-2 lg:px-4 bg-[#F8F9F4]">
              <span className="inline-block w-fit rounded-full bg-[#B9D4CE] text-sm px-4 py-1 mb-3 lg:mb-6 px">
                Step 0{item.step}
              </span>
              <h2 className="font-semibold text-2xl text-[#181818] mb-4">
                {item.title}
              </h2>
              <p className="text-[#464646]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowSection;
