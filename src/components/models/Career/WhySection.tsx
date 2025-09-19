import TitleSection from "@/components/element/TitleSection";
import WhyCard from "@/components/element/WhyCard";
import { Books, Rocket, Trophy } from "@/components/svg/CareerISVG";
import { Global, LightbulbIcon, Profile } from "@/components/svg/WhoSVG";
import { i, span } from "framer-motion/client";
import React from "react";
import { id } from "zod/v4/locales";

const image = [
  {
    id: 1,
    icon: <Rocket />,
    src: "/career/hero-1.jpg",
    alt: "About Us 1",
    title: "Growth Opportunities",
    subTitle: "Advance your career with clear paths to success.",
    className: "rounded-tl-full",
    flex: "flex-col",
  },
  {
    id: 7,
    color: "#78A0EC",
  },
  {
    id: 2,
    icon: <Global />,
    src: "/career/hero-2.jpg",
    alt: "About Us 2",
    title: "Growth Opportunities",
    subTitle: "Advance your career with clear paths to success.",
    className: "rounded-[8px]",
    flex: "flex-col",
  },
  {
    id: 8,
    color: "#78A0EC",
  },
  {
    id: 3,
    icon: <LightbulbIcon />,
    src: "/career/hero-3.jpg",
    alt: "About Us 3",
    title: "Growth Opportunities",
    subTitle: "Advance your career with clear paths to success.",
    className: "rounded-tr-full",
    flex: "flex-col",
  },
  {
    id: 9,
    color: "#78A0EC",
  },
  {
    id: 4,
    icon: <Profile />,
    src: "/career/hero-4.jpg",
    alt: "About Us 4",
    title: "Growth Opportunities",
    subTitle: "Advance your career with clear paths to success.",
    className: "rounded-br-full",
    flex: "flex-col lg:flex-col-reverse",
  },
  {
    id: 10,
    color: "#78A0EC",
  },
  {
    id: 5,
    icon: <Trophy />,
    src: "/career/hero-5.jpg",
    alt: "About Us 5",
    title: "Growth Opportunities",
    subTitle: "Advance your career with clear paths to success.",
    className: "rounded-[8px]",
    flex: "flex-col lg:flex-col-reverse",
  },
  {
    id: 11,
    color: "#78A0EC",
  },
  {
    id: 6,
    icon: <Books />,
    src: "/career/hero-3.jpg",
    alt: "About Us 6",
    title: "Growth Opportunities",
    subTitle: "Advance your career with clear paths to success.",
    className: "rounded-bl-full",
    flex: "flex-col lg:flex-col-reverse",
  },
];

function WhySection() {
  return (
    <div className="mt-10 lg:mt-20 bg-[#F9F8F4] py-6 lg:py-20 px-6 lg:px-[255px]">
      <TitleSection
        title="Why Work With Us"
        subtitle="why ZHB Solution?"
        width="w-[180px]"
        textColor="text-[#181818]"
      />
      <div className="flex flex-col lg:flex-row gap-2 items-center">
        {image.map((img) =>
          img.src ? (
            <WhyCard
              key={img.id}
              title={img.title}
              subTitle={img.subTitle}
              image={img.src}
              imageClass={img.className}
              icon={img.icon}
              id={img.id}
            />
          ) : (
            <span key={img.id}>
              <div className={`w-[18.75rem] lg:w-[2px] ${img.id === 9 ? "h-[2px] lg:h-[430px]" : "h-[2px] lg:h-[400px]"} bg-[#78A0EC]`} />
            </span>
          )
        )}
      </div>
    </div>
  );
}

export default WhySection;