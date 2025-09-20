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
    title: "Discovery",
    description:
      "We start by understanding your business goals, challenges, and requirements through in-depth discussions and research.",
  },
  {
    step: "2",
    title: "Wireframing",
    description:
      "Visualizing structure and flow through wireframes and prototypes for early feedback and clarity.",
  },
  {
    step: "3",
    title: "Development",
    description:
      "Building scalable, responsive, and secure solutions with modern technologies and best practices.",
  },
  {
    step: "4",
    title: "QA",
    description:
      "Ensuring flawless performance through thorough testing, optimization, and bug fixes",
  },
  {
    step: "5",
    title: "Launch",
    description:
      "Seamless deployment with zero downtime, training, and final quality checks before going live.",
  },
  {
    step: "6",
    title: "Support",
    description:
      "Providing ongoing maintenance, updates, and improvements to keep your solution at its best",
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
        <h2 className="mt-2 text-4xl font-bold text-[#E8E8E8] font-orbitron">
          Our Proven Process for Seamless Project Delivery
          <br className="hidden lg:block" /> Excellence
        </h2>
        <p className="font-medium text-[#B7B7B7] max-w-[888px] mt-2 mb-6 lg:mb-12">
          From idea to ongoing support, our process ensures quality, efficiency, and success at every stage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-x-6 xl:gap-x-8 gap-y-6 px-6 xl:px-10 max-w-[1200px] mx-auto">
          {data.map((item, index) => (
            <div key={index} className="py-3 lg:py-6 px-2 lg:px-4 bg-[#F8F9F4]">
              <span className="inline-block w-fit rounded-full bg-[#B9D4CE] text-sm px-4 py-1 mb-3 lg:mb-6">
                Step 0{item.step}
              </span>
              <h2 className="font-semibold text-2xl text-[#181818] mb-4">
                {item.title}
              </h2>
              <p className="text-[#464646]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowSection;
