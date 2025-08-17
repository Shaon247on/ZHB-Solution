import React from "react";
import Itilesection from "@/components/element/TitleSection";
import Image from "next/image";
import VisionCard from "@/components/element/VisionCard";
import { Boxs, Brain, JoinHand, LapTube } from "@/components/svg/VisionSVG";

function VisionSection() {
  return (
    <div className="bg-[#1E3E7C] flex items-center px-[200px] py-20 gap-[120px]">
      <div className="relative border w-[730px] h-[714px]">
        <Image
          src={"/about/vision-1.jpg"}
          alt="Vision Image"
          width={535}
          height={236}
          className="object-cover w-[535px] h-[236px] absolute"
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
