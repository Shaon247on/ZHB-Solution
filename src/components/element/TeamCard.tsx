import React from "react";
import { Button } from "../ui/button";
import { Call, Mail, Sun } from "../svg/ContactSVG";

interface TeamCardProps  {country: string, address: string, email: string, phone: string}

function TeamCard({country, address, email, phone}: TeamCardProps) {
  return (
    <div className="bg-[#EBF1FC] py-6 lg:py-10 flex flex-col lg:flex-row px-6 lg:px-24 border-b-2 border-[#B7B7B7]">
      <div className="w-full lg:w-1/2 flex flex-col lg:ml-5 items-start justify-center">
        <div className="flex items-center flex-col justify-center gap-1">
          <div>
            <Sun />
          </div>
          <p>5:02 PM</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div>
          <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row items-start lg:items-center justify-between mb-5 lg:mb-0">
            <div>
              <h3 className="text-4xl lg:text-[56px] font-bold mb-2">{country}</h3>
              <h5 className="max-w-[350px]">
                {address}
              </h5>
            </div>
            <Button className="bg-[#181818] rounded-2xl">Map Location</Button>
          </div>
          <div className="h-[2px] w-full bg-[#B7B7B7] my-4 hidden lg:block" />
          <div className="flex items-center gap-2 mb-2">
            <div>
              <Mail />
            </div>
            <p>{email}</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <Call />
            </div>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
