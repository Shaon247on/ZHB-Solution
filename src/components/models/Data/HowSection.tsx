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
    title: "Discovery & Data Assessment",
    description:
      "Identify use cases and gather quality datasets.",
  },
  {
    step: "2",
    title: "Design & Prototyping",
    description:
      "Build AI models and test with small datasets.",
  },
  {
    step: "3",
    title: "Development & Training",
    description:
      "Train models with large-scale data for accuracy.",
  },
  {
    step: "4",
    title: "Validation & QA",
    description:
      "Test performance, remove bias, and ensure compliance.",
  },
  {
    step: "5",
    title: "Deployment",
    description:
      "Integrate AI solutions seamlessly into business systems.",
  },
  {
    step: "6",
    title: "Support & Optimization",
    description:
      "Continuous monitoring and model improvements.",
  },
];

function HowSection() {
  return (
    <div className="relative py-6 lg:py-20 px-6 xl:px-[120px]">
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
        <h2 className="mt-2 text-2xl md:text-4xl font-bold text-[#E8E8E8] font-orbitron">
          Our Streamlined Process for Delivering AI <br className="hidden lg:block"/> Excellence
        </h2>
        <p className="font-medium text-[#B7B7B7] max-w-[888px] mt-2 mb-6 lg:mb-12">
         From discovery to ongoing optimization, our AI process ensures accuracy, reliability, and measurable business value at every stage.
        </p>
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:gap-6 px-2 xl:px-[15%]">
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
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:gap-6 px-2 xl:px-[15%] mt-4 lg:mt-6">
          {data.slice(3, 6).map((item, index) => (
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
        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:gap-6 px-2 xl:px-[15%] mt-4 lg:mt-6">
          {data.map((item, index) => (
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
      </div>
    </div>
  );
}

export default HowSection;
