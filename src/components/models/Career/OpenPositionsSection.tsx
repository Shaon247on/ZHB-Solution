"use client";
import OpenCard from "@/components/element/OpenCard";
import TitleSection from "@/components/element/TitleSection";
import {
  Cloud,
  CodeDisplay,
  Database,
  Pen,
  Phone,
} from "@/components/svg/CareerISVG";
import React from "react";
import { motion } from "framer-motion";

function OpenPositionsSection() {
  const data = [
    {
      tag: "Web Development",
      icon: <CodeDisplay />,
      title: "Senior Web Developer",
      jobType: "Full Time",
      location: "On Site",
    },
    {
      tag: "Marketing",
      icon: <Phone />,
      title: "Sales Person",
      jobType: "Full Time",
      location: "On Site",
    },
    // {
    //   tag: "Cloud Solution",
    //   icon: <Cloud />,
    //   title: "Sr. Cloud Solution Architecture",
    //   jobType: "Full Time",
    //   location: "On Site",
    // },

    // {
    //   tag: "UI/UX Design",
    //   icon: <Pen />,
    //   title: "Sr. UX Designer",
    //   jobType: "Full Time",
    //   location: "On Site",
    // },
    // {
    //   tag: "Data Analytics",
    //   icon: <Database />,
    //   title: "Business Analyst",
    //   jobType: "Full Time",
    //   location: "On Site",
    // },
    // {
    //   tag: "Digital Marketing",
    //   icon: <CodeDisplay />,
    //   title: "Digital Marketing Specialist",
    //   jobType: "Full Time",
    //   location: "On Site",
    // },
  ];

  // parent container animation (stagger children)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each card
      },
    },
  };

  // card animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div id="job_offers" className="py-4 lg:py-14 bg-[#EBF1FC] px-6 lg:px-[90px]">
      <TitleSection
        title="Open Positions"
        subtitle="Your Next Role Awaits"
        width="w-[180px]"
        textColor="text-[#172F5F]"
      />
      <p className="max-w-[977px] text-[#464646] mx-auto">
        your ideas shape innovation and your work drives real change. We’re
        seeking passionate, forward-thinking professionals who want to grow,
        create, and define the future with us. Explore our open roles and
        discover where your talents belong.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% in view
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={item}>
            <OpenCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default OpenPositionsSection;
