import ServiceStepCard from "@/components/element/ServiceHowCard";
import processSteps from "@/data/ServicesData";
import React from "react";

function HowSection() {
  return (
    <div className="py-6 lg:py-20 px-6 xl:px-[120px] bg-[#172F5F] text-white">
      <h3 className="w-fit inline-block px-4 border rounded-full mb-2">
        How we Work
      </h3>
      <h2 className="text-2xl lg:text-4xl font-bold font-orbitron mb-6">
        Our Proven Process for Delivering Success
      </h2>
      <p className="max-w-[888px] text-[#E8E8E8] font-medium">
        From idea to launch, we follow a streamlined process to ensure every
        project meets the highest standards of quality and efficiency.
      </p>
      <div className="px-0 xl:px-[34px] flex flex-col lg:flex-row gap-4 items-center mt-[48px]">
        {
            processSteps.map((item, index)=>(
                <ServiceStepCard
                key={index}
                {...item}
                />
            ))
        }
      </div>
    </div>
  );
}

export default HowSection;
