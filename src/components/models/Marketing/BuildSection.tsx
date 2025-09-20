import { Chart, PaintBoard } from "@/components/svg/DataSVG";
import {
  Earth,
  Grow,
  GrowBlue,
  Search,
  Shield,
} from "@/components/svg/ServicesSVG";
import { Security } from "@/components/svg/WebSVG";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Target } from "../../svg/DesignSVG";
import { LoudSpeaker } from "../../svg/MarketingSVG";
import { LightbulbIconWhite } from "../../svg/WhoSVG";
import { ClockWise } from "../../svg/CloudSVG";
import Link from "next/link";

export interface cardDataType {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const data: cardDataType[] = [
  {
    icon: <Target />,
    title: " ROI-Focused",
    description: "Strategies that deliver measurable growth.",
  },
  {
    icon: <LoudSpeaker />,
    title: "Multi-Channel Reach",
    description: "SEO, SEM, SMM, content & email campaigns.",
  },
  {
    icon: <LightbulbIconWhite />,
    title: "Creative Storytelling",
    description: "Engaging content that resonates.",
  },
  {
    icon: <ClockWise />,
    title: " Continuous Optimization",
    description: "Testing, tweaking, and scaling campaigns.",
  },
];

function BuildSection() {
  return (
    <div className="py-6 xl:py-20 px-6 xl:px-[120px] flex flex-col xl:flex-row items-start justify-start gap-12">
      <div className="w-full xl:max-w-[518px] flex flex-row xl:flex-col lg:w-full xl:block">
        <div className="w-1/2 xl:w-[518px] h-[120px] md:h-[268px] lg:h-[388px] overflow-hidden rounded-br-[80px]">
          <Image
            src={"/marketing/marketing-1.jpg"}
            alt="marketing image"
            width={400}
            height={388}
            layout="responsive"
            className="object-cover xl:w-[400px] xl:h-[388px] rounded-tl-[80px] rounded-br-[80px]"
          />
        </div>
        <div className="w-1/2 lg:w-[518px] xl:h-full">
          <Image
            src={"/marketing/marketing-2.jpg"}
            alt="marketing image"
            width={518}
            height={388}
            layout="responsive"
            className="object-cover xl:w-[518px] xl:h-[388px] rounded-tl-[80px] rounded-br-[80px]"
          />
          <div></div>
        </div>
      </div>
      <div>
        <div className="p-2 lg:p-6">
          <h2 className="text-xl lg:text-[32px] font-orbitron text-[#181818] mb-4">
            Marketing That Delivers Real ROI
          </h2>
          <p className="text-sm lg:text-base font-medium text-[#464646] max-w-[809px]">
            Our customer-focused digital marketing strategies are designed to
            maximize reach, engagement, and conversions. By blending creativity
            with data-driven execution, we ensure every campaign brings
            measurable results for your business.
          </p>{" "}
          <br />
          <p className="text-sm lg:text-base font-medium text-[#464646] max-w-[809px]">
            Our customer-focused digital marketing strategies are designed to
            maximize reach, engagement, and conversions. By blending creativity
            with data-driven execution, we ensure every campaign brings
            measurable results for your business.
          </p>
          <Link
          href={"/contact"}
          >
            <Button
              size={"lg"}
              className="mt-4 lg:mt-8 text-[#F2F8FC] px-9 rounded-full"
            >
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:px-[13px] mt-4 lg:mt-20 lg:gap-6">
          {data.map((item, index) => (
            <div key={index} className="p-2 flex flex-col items-center">
              <div className="inline-block w-fit bg-[#172F5F] p-2.5 rounded-full mb-2">
                {item.icon}
              </div>
              <h3 className="font-medium text-[#172F5F] mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-sm text-[#464646] max-w-[400px] font-medium mb-5 text-center">
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
