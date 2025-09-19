import TeamCard from "@/components/element/TeamCard";
import { Call, Mail, Sun } from "@/components/svg/ContactSVG";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const data = [
  {
    id:1,
    country: "Bangladesh",
    address: "22/A/ SEL Tower, Green road, Dhanmondi, Dhaka",
    email: "hrd@zhbsolution.com",
    phone: "09617901212",
  },
  {
    id:2,
    country: "U.S.A",
    address:
      "ZHB Solution LLC 3651 Peachtree Pkwy STE. E #116, Suwanee, GA 30024 Georgia United States",
    email: "info@zhbsolutions.com",
    phone: "(404) 936-3567",
  },
];
function TeamSection() {
  return (
    <>
      <div className="py-6 lg:py-20 px-6 lg:px-[120px]">
        <h2 className="text-xl lg:text-[56px] font-bold text-center mb-6 lg:mb-14">
          "We're a global team, united by purpose — and rooted in a few places
          we proudly call home."
        </h2>
        <Image
          src={"/contact/team.jpg"}
          width={1680}
          height={730}
          alt="team image"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="bg-[#EBF1FC] py-4 lg:py-20">
        {data.map((item, index) => (
          <TeamCard key={index} {...item} />
        ))}
      </div>
    </>
  );
}

export default TeamSection;
