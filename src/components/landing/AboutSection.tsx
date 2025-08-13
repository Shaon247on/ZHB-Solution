import React from "react";
import TitleSection from "../element/TitleSection";
import { Button } from "../ui/button";
import Image from "next/image";

function AboutSection() {
  return (
    <div className="bg-[#172134] rounded-t-3xl">
      <div className="mb-32">
        <TitleSection
          title="About Us"
          subtitle="We are leading experts delivering results"
          textColor="text-white"
          width="w-[104px]"
        />
      </div>
      <div className="lg:mx-32 px-4 pb-16 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-14 lg:gap-[280px]">
        <div>
          <h2 className="text-[1.75rem] font-bold text-white">
            We are leading experts <br />
            delivering results
          </h2>
          <p className="mt-4 max-w-[531px] text-lg text-blue-50">
            Our team of creative experts id dedicated to delivering innovative
            solutions that drive measurable results. With a proven track record
            of success
          </p>
          <Button className="mt-20">Learn More</Button>
        </div>
        <div>
            <Image
            src={"/expert.png"}
            width={547}
            height={461}
            alt="Expert"
            className="object-cover"
            />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
