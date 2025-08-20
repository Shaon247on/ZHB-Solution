import ServiceCard from "@/components/element/ServiceCard";
import WhatCard from "@/components/element/WhatCard";
import WhoCard from "@/components/element/WhoCard";
import { Button } from "@/components/ui/button";
import { WhoCardData } from "@/data/ServicesData";
import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

function WhatSection() {
  return (
    <div className="px-6 lg:px-[123px] py-6 lg:py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-0">
      <div className=" lg:rounded-tr-[200px] lg:rounded-bl-[182px] lg:w-[743px] lg:h-[850px] border-2 overflow-hidden">
        <Image
          src={"/services/whatImage.jpg"}
          alt="What we do Image"
          width={743}
          height={850}
          className="object-cover h-full"
        />
      </div>
      <div className="lg:p-6">
        <h3 className="text-[32px] font-semibold font-orbitron mb-2">
          What We Do
        </h3>
        <p className="max-w-[835px] mb-6 lg:mb-12">
          We deliver comprehensive software service designed to meet the unique
          demands of our clients. We focus on crating solutions that are both
          innovative and customer centric.{" "}
        </p>
        <Button size={"lg"} className="rounded-full mb-10 lg:mb-[120px]">
          Get a Free Consultation
        </Button>
        <div className="lg:px-[123px] grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
          {WhoCardData.map((item, index) => (
            <WhatCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatSection;
