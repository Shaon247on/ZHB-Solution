import WorkCard, { WorkCardProps } from "@/components/element/WorkCard";
import { workData1, workData2, workData3 } from "@/data/WorkData";
import { workDataMain } from "@/data/WorkDataMain";
import React from "react";
import { id } from "zod/v4/locales";





function CardsSection() {
  return (
    <div className="bg-[#172134] rounded-b-3xl px-6 lg:px-[77px] py-6 lg:py-20">
      <h2 className="text-[#EBF1FC] font-bold text-2xl font-orbitron text-center lg:text-[56px] mb-2">
        Showcasing Innovation Through <br className="hidden lg:block" />
        Our Work
      </h2>
      <p className="max-w-[908px] text-[20px] font-semibold text-[#B7B7B7] mx-auto text-center pb-2">
        Explore the projects that define who we are innovative, impactful, and
        built to deliver real results. At ZHB Software Solutions, every project
        tells a story of creativity, technology, and success.
      </p>
      <div className="py-6 lg:py-20">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-0 lg:px-[100px]">
            {workDataMain.slice(0,1).map((item) => (
              <WorkCard
                key={item.id}
                id={item.id}
                title={item.heroSection.title}
                subtitle={item.heroSection.description}
                tags={item.tag}
                image={item.heroSection.heroImage}
                imageHeight={"w-[544px]"}
                imageWidth={"max-h-[584px]"}
                gridCol={"col-span-1 lg:col-span-2"}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 lg:px-14 pt-12">
            {workDataMain.slice(1,4).map((item) => (
              <WorkCard
                key={item.id}
                id={item.id}
                title={item.heroSection.title}
                subtitle={item.heroSection.description}
                tags={item.tag}
                image={item.heroSection.heroImage}
                imageHeight={"w-[544px]"}
                imageWidth={"max-h-[284px]"}
                gridCol={"col-span-1 lg:col-span-1"}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0 lg:px-[332px] pt-12 items-center">
            {workDataMain.slice(4,6).map((item) => (
              <WorkCard
                key={item.id}
                id={item.id}
                title={item.heroSection.title}
                subtitle={item.heroSection.description}
                tags={item.tag}
                image={item.heroSection.heroImage}
                imageHeight={"w-[544px]"}
                imageWidth={"max-h-[284px]"}
                gridCol={"col-span-1 lg:col-span-1"}
              />
            ))}
          </div>          
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
