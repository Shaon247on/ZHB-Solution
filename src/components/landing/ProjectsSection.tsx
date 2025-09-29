import React from "react";
import TitleSection from "../element/TitleSection";
import { Button } from "../ui/button";
import Image from "next/image";
import { div } from "framer-motion/client";
import { workDataMain } from "@/data/WorkDataMain";
import Link from "next/link";

function ProjectsSection() {
  const data = workDataMain;
  return (
    <div className="mb-10 md:mb-0">
      <div>
        <TitleSection
          title="Works"
          subtitle="Our impactful works powering business growth"
          textColor="text-black"
          width="w-[104px]"
          buttonText="Explore Our Works"
          buttonHref="/work"
        />
        {data.slice(0, 1).map((item, index) => (
          <div key={index}>
            <div className="py-8 px-4 sm:px-6 lg:px-32 bg-sky-50 flex flex-col lg:flex-row gap-7 items-center lg:gap-[300px]">
              <div>
                <h2 className="text-xl lg:text-[1.75rem] font-bold">
                  {item.heroSection.title}
                </h2>
                <p className="mt-4 max-w-[531px] text-base text-justify lg:text-lg">
                  {item.heroSection.description}
                </p>
                <Link href={`/work/${item.id}`}>
                  <Button className="mt-6 lg:mt-20">Learn More</Button>
                </Link>
              </div>
              <div className="bg-sky-100 h-full lg:h-[486px] w-full lg:w-[659px] flex justify-center items-end">
                <Image
                  src={item.heroSection.heroImage}
                  width={486}
                  height={296}
                  alt="impect"
                  className="object-cover h-[80%] lg:h-[376px] w-[80%] lg:w-[486px] mb-6"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {data.slice(1, 2).map((item, index) => (
        <div key={index} className="mt-10">
          <div>
            <div className="px-4 sm:px-6 lg:px-32 flex flex-col-reverse lg:flex-row gap-7 items-center lg:gap-[300px]">
              <div className="bg-[#55B681] lg:h-[490px] lg:w-[665px] flex justify-center items-center">
                <Image
                  src={item.heroSection.heroImage}
                  width={486}
                  height={296}
                  alt="impect-2"
                  className="object-cover lg:h-[380px] lg:w-[486px]"
                />
              </div>
              <div>
                <h2 className="text-xl lg:text-[1.75rem] font-bold">
                  {item.heroSection.title}
                </h2>
                <p className="mt-4 max-w-[531px] text-base lg:text-lg">
                  {item.heroSection.description}
                </p>
                <Link href={`/work/${item.id}`}>
                <Button className="mt-6 lg:mt-20">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsSection;
