import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TitleSection from "@/components/element/TitleSection";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="bg-[#172134] ">
      <div className="mb-4 text-2xl pt-6 lg:pt-14 px-6 lg:px-[120px] lg:text-4xl font-orbitron font-bold text-white">
        <h2>Insights, Ideas & Innovation <br className="hidden lg:block"/>The ZHB Solutions Blog.....</h2>
      </div>
      <div className="lg:px-[120px] px-4 pb-4 md:pb-6 lg:pb-10 sm:px-6 flex flex-col lg:flex-row items-center gap-14 lg:gap-[280px]">
        <div>
          <p className="mb-4 md:mb-6 lg:mb-10 text-xs text-center text-white lg:text-base bg-[#104035] rounded-full py-1 font-medium w-40">
            Latest Blogs
          </p>
          <p
            className={`mb-6 text-xs text-center lg:text-base text-white border border-sky-700 rounded-full font-medium w-44`}
          >
            Tech & Innovation
          </p>
          <h2 className="text-2xl font-bold text-white">
            Revolutionizing Business with AI: 
            What You Need to Know
          </h2>
          <p className="mt-4 max-w-[577px] text-justify text-lg text-[#E8E8E8]">
            Artificial-Intelligence (AI) is transforming the way businesses
            operate—automating tasks, enhancing decision-making, and unlocking
            new revenue streams.
          </p>
          <p className="text-xs font-medium text-[#959595] mt-4">
            13/08/2025 • Wednesday• 04:42 pm
          </p>
          <Link href="#all_blogs" scroll={true}>
          
           <Button className="mt-20">Learn More</Button>
          </Link>
        </div>
        <div>
          <Image
            src={"/growth-1.png"}
            width={936}
            height={530}
            alt="Expert"
            className="object-cover w-[936px] h-[530px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
