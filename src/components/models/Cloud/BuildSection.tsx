import { Platform } from "@/components/svg/AppSVG";
import { ClockWise } from "@/components/svg/CloudSVG";
import { Accessibility, Target, Voltage } from "@/components/svg/DesignSVG";
import { Security } from "@/components/svg/WebSVG";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface cardDataType {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const data: cardDataType[] = [
  {
    icon: <Platform />,
    title: "Scalability",
    description: "Grow infrastructure as your business expands.",
  },
  {
    icon: <Security />,
    title: "Security & Compliance",
    description: "IAM, encryption, and regulatory standards.",
  },
  {
    icon: <Voltage />,
    title: "Performance Optimization",
    description:
      "WCAG-compliant designs that work for every user, regardless of ability.",
  },
  {
    icon: <ClockWise />,
    title: "Flexibility",
    description: "Hybrid & multi-cloud strategies.",
  },
];

function BuildSection() {
  return (
    <div className="py-6 xl:py-20 px-6 xl:px-[120px] flex flex-col xl:flex-row items-start justify-start gap-12">
      <div className="max-w-[518px] ">
        <div className="relative xl:w-[518px] xl:h-[345px] lg:py-14 xl:py-0">
          <Image
            src={"/cloud/cloud-1.jpg"}
            alt="cloud image"
            width={518}
            height={388}
            layout="responsive"
            className="object-cover absolute z-0 lg:w-[518px] lg:h-[388px] rounded-tl-[80px] rounded-br-[80px]"
          />
          <div className="absolute z-10 bg-[#00000033] w-full h-full rounded-tl-[80px] rounded-br-[80px]" />
        </div>
        <div className="lg:w-[518px] lg:h-full">
          <Image
            src={"/cloud/cloud-2.png"}
            alt="cloud image"
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
            Unlock the Power of the Cloud
          </h2>
          <p className="text-sm lg:text-base font-medium text-[#464646] max-w-[809px]">
            Cloud adoption brings scalability, flexibility, and cost efficiency
            to your business. At ZHB Software Solutions, we help you migrate,
            optimize, and secure your cloud infrastructure so you can innovate
            faster and operate smarter.
          </p>{" "}
          <br />
          <p className="text-sm lg:text-base font-medium text-[#464646] max-w-[809px]">
            Our approach combines modern technologies, robust security, and a
            deep understanding of your business goals to ensure every app we
            build brings tangible value to your organization.
          </p>
          <Link
            href="https://wa.me/14049363567?text=Hello%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size={"lg"}
              className="mt-4 lg:mt-8 text-[#F2F8FC] px-9 rounded-full"
            >
              Start Your App Project
            </Button>
          </Link>
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
