import WorkCard, { WorkCardProps } from "@/components/element/WorkCard";
import { workData1, workData2, workData3 } from "@/data/WorkData";
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
            {workData1.map((item) => (
              <WorkCard
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                tags={item.tags}
                image={item.image}
                imageHeight={item.imageHeight}
                imageWidth={item.imageWidth}
                gridCol={item.gridCol}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 lg:px-14 pt-12">
            {workData2.map((item) => (
              <WorkCard
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                tags={item.tags}
                image={item.image}
                imageHeight={item.imageHeight}
                imageWidth={item.imageWidth}
                gridCol={item.gridCol}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0 lg:px-[332px] pt-12 items-center">
            {workData3.slice(0,2).map((item) => (
              <WorkCard
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                tags={item.tags}
                image={item.image}
                imageHeight={item.imageHeight}
                imageWidth={item.imageWidth}
                gridCol={item.gridCol}
              />
            ))}
          </div>
          <div className="px-0 lg:px-[332px] pt-12">
              <WorkCard
                id={workData3[2].id}
                title={workData3[2].title}
                subtitle={workData3[2].subtitle}
                tags={workData3[2].tags}
                image={workData3[2].image}
                imageHeight={workData3[2].imageHeight}
                imageWidth={workData3[2].imageWidth}
                gridCol={workData3[2].gridCol}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
