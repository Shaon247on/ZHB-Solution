import WorkCard, { WorkCardProps } from "@/components/element/WorkCard";
import React from "react";
import { id } from "zod/v4/locales";

const workData1: WorkCardProps = [
  {
    id: 1,
    title: "Admin Control Center Sites",
    subtitle:
      "A robust backend interface built to manage users, content, and operations all from a single, secure dashboard.",
    tags: [
      "Web Application Development",
      "Enterprise Solutions",
      "Custom Software Development",
    ],
    imageHeight:"h-[785px]",
    imageWidth: "w-[1516px]",
    image: "/work/work-1.png",
    gridCol: "col-span-2",
  },
  {
    id: 2,
    title: "Multivendor e-commerce site",
    subtitle:
      "A scalable marketplace connecting multiple vendors with seamless shopping, powerful dashboards, and real time operations.",
    tags: [
      "Web Application Development",
      "Enterprise Solutions",
      "Custom Software Development",
    ],
    
    imageHeight:"h-[248px]",
    imageWidth: "w-[710px]",
    image: "/work/work-2.jpg",
    gridCol: "col-span-1",
  },
  {
    id: 3,
    title: "Task Manager Mobile App",
    subtitle:
      "A sleek mobile solution designed to help users organize, prioritize, and complete tasks anytime, anywhere.",
    tags: [
      "Mobile App Development",
      "Productivity & Workflow Tools",
      "UI/UX Design Projects",
    ],
    imageHeight:"h-[248px]",
    imageWidth: "w-[710px]",
    image: "/work/work-3.jpg",
    gridCol: "col-span-1",
  },
  {
    id: 4,
    title: "Smart POS for Restaurants",
    subtitle:
      "Streamline orders, manage tables, track inventory, and boost efficiency — all from one powerful POS platform designed for the food industry",
    tags: ["POS Development", "Restaurant Management", "Cloud-Based POS"],
    imageHeight:"h-[305px]",
    imageWidth: "w-[616px]",
    image: "/work/work-4.jpg",
    gridCol: "col-span-2",
  },
];

function CardsSection() {
  return (
    <div className="bg-[#172134] rounded-b-3xl px-6 lg:px-[77px]">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-0 lg:px-[100px]">
            {workData1.map((item) => (
              <WorkCard
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                tags={item.tags}
                image={item.image}
                imageHeight="h-[240px]"
                cardHeight={item?.cardHeight}
                gridCol={item.gridCol}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
