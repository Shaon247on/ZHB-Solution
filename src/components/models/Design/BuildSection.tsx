import { Accessibility, Target, Voltage } from "@/components/svg/DesignSVG";
import { Earth, Grow, Search, Shield } from "@/components/svg/ServicesSVG";
import { Security } from "@/components/svg/WebSVG";
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
    icon: <Search />,
    title: "Research-Driven Decisions",
    description:
      "Every design choice is backed by user research and usability testing.",
  },
  {
    icon: <Target />,
    title: "Goal-Oriented Design",
    description:
      "Interfaces built to achieve both user goals and business objectives.",
  },
  {
    icon: <Accessibility />,
    title: "Accessibility for All",
    description:
      "WCAG-compliant designs that work for every user, regardless of ability.",
  },
  {
    icon: <Voltage />,
    title: "Seamless Experience",
    description:
      " Consistent, intuitive, and friction-free user journeys.",
  },
];

function BuildSection() {
  return (
    <div className="py-6 lg:py-20 px-6 lg:px-[120px] flex flex-col-reverse lg:flex-row items-start justify-start gap-12">
      <div className="max-w-[518px]">
        <div className="relative lg:w-[518px] lg:h-[345px]">
          <Image
            src={"/design/design-2.jpg"}
            alt="web image"
            width={518}
            height={388}
            layout="responsive"
            className="object-cover absolute z-0 lg:w-[518px] lg:h-[388px] rounded-tl-[80px] rounded-br-[80px]"
          />
          <div className="absolute z-10 bg-[#00000033] w-full h-full rounded-tl-[80px] rounded-br-[80px]"/>
        </div>
        <div className="lg:w-[518px] lg:h-full">
          <Image
            src={"/design/design-1.jpg"}
            alt="web image"
            width={518}
            height={388}
            layout="responsive"
            className="object-cover lg:w-[518px] lg:h-[388px] rounded-tl-[80px] rounded-br-[80px]"
          />
        </div>
      </div>
      <div>
        <div className="p-2 lg:p-6">
          <h2 className="text-xl lg:text-[32px] font-orbitron text-[#181818] mb-4 lg:mb-0">
            Design That Starts and Ends With the User
          </h2>
          <p className="text-sm lg:text-base font-medium text-[#464646]">
            we create mobile apps that go beyond functionality — delivering
            engaging user experiences and measurable results.
          </p>{" "}
          <br />
          <p className="text-sm lg:text-base font-medium text-[#464646]">
            Our approach combines modern technologies, robust security, and a
            deep understanding of your business goals to ensure every app we
            build brings tangible value to your organization.
          </p>
          <Button
            size={"lg"}
            className="mt-4 lg:mt-8 text-[#F2F8FC] px-9 rounded-full"
          >
            Start Your App Project
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row lg:px-[13px] mt-4 lg:mt-20">
          {data.map((item, index) => (
            <div key={index} className="p-2 flex flex-col items-center">
              <div className="inline-block w-fit bg-[#172F5F] p-2.5 rounded-full mb-2">
                {item.icon}
              </div>
              <h3 className="font-medium text-[#172F5F] mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-sm text-[#464646] max-w-[240px] font-medium mb-5 text-center">
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
