import React from "react";
import { cardDataType } from "./BuildSection";
import { AiContent, Cart, Computer, Globe2 } from "@/components/svg/WebSVG";

import { LightbulbIconWhite } from "@/components/svg/WhoSVG";
import { Chart, Mining, PaintBoard } from "@/components/svg/DataSVG";
import { HomeWhite } from "@/components/svg/CareerISVG";
import { Notebook, NotebookIcon, Settings } from "lucide-react";

const data: cardDataType[] = [
  {
    icon: <Computer />,
    title: "Machine Learning Solutions",
    description:
      "Predictive models, recommendation engines, and fraud detection systems.",
  },
  {
    icon: <Settings stroke="white" />,
    title: "Natural Language Processing (NLP)",
    description:
      "Chatbots, sentiment analysis, and multilingual text processing for better customer engagement.",
  },
  {
    icon: <Computer />,
    title: "Computer Vision",
    description:
      "Image recognition, object detection, and AR/VR integration for real-world impact.",
  },
  {
    icon: <NotebookIcon stroke="white" />,
    title: "AI-Powered Automation",
    description:
      "RPA, document processing, and workflow automation to reduce costs and save time.",
  },
  {
    icon: <Cart />,
    title: "Predictive Analytics",
    description:
      "Forecasting, customer behavior insights, and demand prediction.",
  },
  {
    icon: <Globe2 />,
    title: "Generative AI Solutions",
    description:
      "AI-driven content creation, design tools, and personalized marketing.",
  },
];


function ServiceSection() {
  return (
    <div className="flex flex-col items-center bg-[#F8F9F4] py-6 lg:py-20">
      <div className="w-fit px-4 rounded-full border-2 border-[#2650A0] mb-10 lg:mb-12 bg-[#F8F9F4] lg:scroll-py-20">
        Service Overview
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 lg:px-0 max-w-[936px]">
        {data.map((item, index) => (
            <div key={index} className="py-6 lg:py-12 px-4 lg:px-6 flex flex-col items-center bg-[#EBF1FC] rounded-xl">
              <div className="inline-block w-fit bg-[#172F5F] p-2.5 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-[#172F5F] mb-2 text-center text-[20px] font-semibold">
                {item.title}
              </h3>
              <p className="text-sm text-[#464646] max-w-[400px] font-medium mb-5 text-center">
                {item.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ServiceSection;
