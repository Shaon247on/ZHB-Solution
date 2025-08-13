import React from "react";
import TitleSection from "../element/TitleSection";
import { Button } from "../ui/button";
import Image from "next/image";
import { div } from "framer-motion/client";

function ProjectsSection() {
  return (
    <div>
      <div>
        <TitleSection
          title="Projects"
          subtitle="Our impactful works powering business growth"
          textColor="text-black"
          width="w-[104px]"
          buttonText="Explore Our Projects"
          buttonHref="/projects"
        />
        <div>
          <div className="px-4 sm:px-6 lg:px-32 bg-sky-50 flex flex-col lg:flex-row gap-7 items-center lg:gap-[300px]">
            <div>
              <h2 className="text-xl lg:text-[1.75rem] font-bold">
                Restaurant Management <br /> System
              </h2>
              <p className="mt-4 max-w-[531px] text-base lg:text-lg">
                A smart digital solution that replaces traditional kitchen
                tickets with real-time order tracking screens.
              </p>
              <Button className="mt-6 lg:mt-20">Learn More</Button>
            </div>
            <div className="bg-sky-100 h-full lg:h-[486px] w-full lg:w-[659px] flex justify-center items-end">
              <Image
                src={"/impect-1.png"}
                width={486}
                height={296}
                alt="impect"
                className="object-cover h-[80%] lg:h-[296px] w-[80%] lg:w-[486px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <div className="px-4 sm:px-6 lg:px-32 flex flex-col-reverse lg:flex-row gap-7 items-center lg:gap-[300px]">
            <div className="bg-[#55B681] lg:h-[490px] lg:w-[665px] flex justify-center items-center">
              <Image
                src={"/impect-2.png"}
                width={486}
                height={296}
                alt="impect-2"
                className="object-cover lg:h-[380px] lg:w-[486px]"
              />
            </div>
            <div>
              <h2 className="text-xl lg:text-[1.75rem] font-bold">
                Restaurant Management <br /> System
              </h2>
              <p className="mt-4 max-w-[531px] text-base lg:text-lg">
                A smart digital solution that replaces traditional kitchen
                tickets with real-time order tracking screens.
              </p>
              <Button className="mt-6 lg:mt-20">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
