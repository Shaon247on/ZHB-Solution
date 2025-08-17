import { Dot } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface OpenCardProps {
  tag: string;
  icon: React.ReactNode;
  title: string;
  jobType: string;
  location: string;
}
function OpenCard({ icon, title, jobType, location, tag }: OpenCardProps) {
  return (
    <div className="py-4 px-6 bg-[#0C3129] rounded-[16px] text-[#EBF1FC]">
      <p className="font-medium">{tag}</p>
      <div className="w-14 h-14 mt-6 mb-2">{icon}</div>
      <div className="h-[80px] lg:h-[196px] flex flex-col justify-between item-start">
        <h3 className="lg:text-[32px] font-semibold">{title}</h3>
        <span className="mb-3 lg:mb-6 font-medium flex items-center gap-0">
          {location} <Dot /> {jobType}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <Button size={"lg"}>Apply Now</Button>
        <Button variant={"link"} className="text-white underline">
          Job Details
        </Button>
      </div>
    </div>
  );
}

export default OpenCard;
