import WhoCard from "@/components/element/WhoCard";
import { Chart } from "@/components/svg/DataSVG";
import { GrowBlue } from "@/components/svg/ServicesSVG";
import { Global, LightbulbIcon, Profile } from "@/components/svg/WhoSVG";
import { Menu, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

function WhoSection() {
  return (
    <div className="pt-10 pb-6 lg:pb-[120px] px-6 lg:px-[120px] mx-auto bg-[#F8F9F4] lg:mt-8">
      <div className="flex flex-col xl:flex-row lg:gap-5">
        {/* Image Grid Section */}
        <div className="w-full xl:max-w-1/2 flex flex-col gap-4 lg:gap-6 mb-8 lg:mb-0 mt-4 lg:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-row gap-4 xl:gap-6 xl:mr-8 ">
            {/* Top row */}
            <div className="">
              <Image
                src={"/about/who-1.jpg"}
                width={428}
                height={196}
                alt="Who we are image-1"
                className="object-cover w-full xl:w-[428px] h-32 xl:h-[196px] lg:h-[300px] rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={"/about/who-2.jpg"}
                width={312}
                height={196}
                alt="Who we are image-2"
                className="object-cover w-full xl:w-[312px] h-32 xl:h-[196px] lg:h-[300px] rounded-lg"
              />
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex xl:flex-row gap-4 xl:gap-6 xl:mr-8 ">
            <div className="">
              <Image
                src={"/about/who-3.jpg"}
                width={252}
                height={300}
                alt="Who we are image-3"
                className="object-cover w-full xl:w-[252px] h-32 lg:h-[300px] rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={"/about/who-4.jpg"}
                width={488}
                height={300}
                alt="Who we are image-4"
                className="object-cover w-full lg:w-[488px] h-32 lg:h-[300px] rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#181818] font-orbitron mb-4 lg:mb-8">
            Who We Are?
          </h2>

          <div className="lg:max-w-[570px] mb-4">
            <p className="text-gray-600 lg:text-lg mb-2 lg:mb-8 leading-relaxed">
              ZHB Solutions is a forward-thinking technology partner dedicated
              to transforming ideas into scalable digital solutions. Founded on
              the principle of combining innovation with reliability.
            </p>
            <p className="text-gray-600 lg:text-lg lg:mb-12 mt-4 lg:mt-4 leading-relaxed">
              Md. Zahirul Bhuiyan, Lead Java Developer at General Motors, is a
              seasoned technology leader with expertise in enterprise software,
              cloud solutions, and AI-driven innovation. With an MBA and over a
              decade of experience, he founded this company to drive secure,
              scalable digital transformation.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-wrap lg:flex-row items-stretch gap-3">
            {/* Innovation */}
            <div className="flex items-stretch gap-4">
              <WhoCard
                icon={<LightbulbIcon />}
                title="Cybersecurity Solutions"
                subtitle=" End-to-end security services to protect your data, systems, and reputation."
              />
            </div>

            {/* Reliable */}
            <div className="flex items-stretch gap-4">
              <WhoCard
                icon={<Profile />}
                title="AI & Automation"
                subtitle="Machine learning and automation solutions that optimize operations and reduce costs."
              />
            </div>

            {/* Global */}
            <div className="flex items-stretch gap-4">
              <WhoCard
                icon={<Global />}
                title="Cloud Infrastructure"
                subtitle="Design, deploy, and manage cloud systems that scale as your business grows."
              />
            </div>
            <div className="flex items-stretch gap-4">
              <WhoCard
                icon={<GrowBlue />}
                title="Digital Transformation Consulting"
                subtitle="Strategy and execution to modernize your operations and unlock new revenue streams."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoSection;
