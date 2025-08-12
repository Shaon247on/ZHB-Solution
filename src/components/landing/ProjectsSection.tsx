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
          <div className="sm:px-6 lg:px-32 bg-sky-50 flex items-center lg:gap-[300px]">
            <div>
              <h2 className="text-[1.75rem] font-bold">
                Restaurant Management <br /> System
              </h2>
              <p className="mt-4 max-w-[531px] text-lg">
                A smart digital solution that replaces traditional kitchen
                tickets with real-time order tracking screens.
              </p>
              <Button className="mt-20">Learn More</Button>
            </div>
            <div className="bg-sky-100 h-[486px] w-[659px] flex justify-center items-end">
              <Image
                src={"/impect-1.png"}
                width={486}
                height={296}
                alt="impect"
                className="object-cover h-[296px] w-[486px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <div className="sm:px-6 lg:px-32 flex items-center lg:gap-[300px]">
            <div className="bg-[#55B681] h-[490px] w-[665px] flex justify-center items-center">
              <Image
                src={"/impect-2.png"}
                width={486}
                height={296}
                alt="impect-2"
                className="object-cover h-[380px] w-[486px]"
              />
            </div>
            <div>
              <h2 className="text-[1.75rem] font-bold">
                Restaurant Management <br /> System
              </h2>
              <p className="mt-4 max-w-[531px] text-lg">
                A smart digital solution that replaces traditional kitchen
                tickets with real-time order tracking screens.
              </p>
              <Button className="mt-20">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
