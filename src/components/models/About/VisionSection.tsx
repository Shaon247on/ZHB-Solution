import React from "react";
import Itilesection from "@/components/element/TitleSection";
import Image from "next/image";
import VisionCard from "@/components/element/VisionCard";
import { Boxs, Brain, JoinHand, LapTube } from "@/components/svg/VisionSVG";

function VisionSection() {
  return (
    <div className="bg-[#1E3E7C] flex flex-col-reverse lg:flex-row items-center px-4 lg:px-[200px] py-10 lg:py-20 gap-10 lg:gap-[120px]">
      <div className="relative w-[300px] lg:w-[730px] h-[280px] lg:h-[714px]">
        <Image
          src={"/about/vision-1.png"}
          alt="Vision Image 1"
          width={535}
          height={235}
          className="object-cover max-w-[74%] h-[33.4%] ml-1"
        />
        <Image
          src={"/about/vision-2.png"}
          alt="Vision Image 2"
          width={311}
          height={220}
          className="object-cover w-[42.85%] h-[30%] absolute top-[17.3%] lg:top-[17.1%] right-[6.4%] lg:right-[7.5%]"
        />
        <Image
          src={"/about/vision-3.png"}
          alt="Vision Image 3"
          width={416}
          height={220}
          className="object-cover w-[57.45%] h-auto mt-1 absolute top-[33.5%] left-0"
        />
        <Image
          src={"/about/vision-4.png"}
          alt="Vision Image 4"
          width={322}
          height={207}
          className="object-cover w-[44%] h-auto absolute bottom-[24%] -right-[1.5%]"
        />
        <Image
          src={"/about/vision-5.png"}
          alt="Vision Image 5"
          width={535}
          height={236}
          className="object-cover w-[76.5%] h-[32%] absolute bottom-[2.5%] left-0"
        />
      </div>
      <div>
        <Itilesection
          title="Our Vision"
          width="w-[120px]"
          textColor="text-white"
          subtitle="Shaping the Future with Innovative & Trusted Software Solutions"
          textPosition="text-start"
        />
        <p className="text-[#959595] max-w-[660px]">
          To be a global leader in delivering innovative, reliable, and
          impactful software solutions that empower businesses and communities
          worldwide.
        </p>
        <div className="space-y-4 mt-12">
            <VisionCard
            icon={<Brain/>}
            title="Lead Globally"
            subtitle="Establish a strong presence in international markets with trusted technology solutions."
            />
            <VisionCard
            icon={<Boxs/>}
            title="Innovate Continuously"
            subtitle="Foster a culture of creativity, research, and cutting-edge development."
            />
            <VisionCard
            icon={<JoinHand/>}
            title="Empower Businesses"
            subtitle="Provide tools and platforms that drive growth, efficiency, and success."
            />
            <VisionCard
            icon={<LapTube/>}
            title="Ensure Trust & Security"
            subtitle="Build secure, reliable systems that protect data and user confidence."
            />
            <VisionCard
            icon={<LapTube/>}
            title="Drive Sustainable Growth"
            subtitle="Deliver long-term value for clients, partners, and stakeholders."
            />
        </div>
      </div>
    </div>
  );
}

export default VisionSection;
