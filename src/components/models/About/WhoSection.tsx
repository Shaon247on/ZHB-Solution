import WhoCard from "@/components/element/WhoCard";
import { Global, LightbulbIcon, Profile } from "@/components/svg/WhoSVG";
import { Menu, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

function WhoSection() {
  return (
    <div className="pt-10 pb-[120px] px-[120px] mx-auto bg-[#F8F9F4]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
        {/* Image Grid Section */}
        <div className="max-w-1/2 flex flex-col gap-4 lg:gap-6 mb-8 lg:mb-0">
          <div className="flex gap-4 lg:gap-6 mr-8">
            {/* Top row */}
            <div className="">
              <Image
                src={"/about/who-1.jpg"}
                width={428}
                height={196}
                alt="Who we are image-1"
                className="object-cover w-[428px] h-[196px] rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={"/about/who-2.jpg"}
                width={312}
                height={196}
                alt="Who we are image-2"
                className="object-cover w-[312px] h-[196px] rounded-lg"
              />
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex gap-4 lg:gap-6 mr-8">
            <div className="">
              <Image
                src={"/about/who-3.jpg"}
                width={252}
                height={300}
                alt="Who we are image-3"
                className="object-cover w-[252px] h-[300px] rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={"/about/who-4.jpg"}
                width={488}
                height={300}
                alt="Who we are image-4"
                className="object-cover w-[488px] h-[300px] rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#181818] font-orbitron mb-8">
            Who We Are?
          </h2>

          <div className=" lg:max-w-[570px] mb-10">
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              ZHB Solution LLC is a forward-thinking technology company based in
              the USA, delivering smart, scalable, and secure digital solutions.
            </p>

            <p className="text-gray-600 text-lg mb-12 mt-12 leading-relaxed">
              We specialize in AI, IoT, blockchain, cloud computing, and
              business automation—empowering businesses to innovate, grow, and
              thrive in a digital-first world.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="flex items-center gap-[54px]">
            {/* Innovation */}
            <div className="flex items-start gap-4">
              <WhoCard
                icon={<LightbulbIcon/>}
                title="Innovation"
                subtitle="Always exploring creative solutions"
                
                />
            </div>

            {/* Reliable */}
            <div className="flex items-start gap-4">
                <WhoCard
                icon={<Profile/>}
                title="Reliable"
                subtitle="Building trust with every project."
                
                />
            </div>

            {/* Global */}
            <div className="flex items-start gap-4">
                <WhoCard
                icon={<Global/>}
                title="Global"
                subtitle="Serving clients worldwide."
                
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoSection;
