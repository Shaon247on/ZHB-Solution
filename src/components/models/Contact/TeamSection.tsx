import TeamCard from "@/components/element/TeamCard";
import { Call, Mail, Sun } from "@/components/svg/ContactSVG";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const data = [
  {
    id:2,
    country: "U.S.A",
    address:
      "732 Holcomb Bridge Rd, Norcross, GA 30071",
    email: "info@zhbsolutions.com",
    phone: "(404) 786-8166",
    href: "https://www.google.com/maps/place/732+Holcomb+Bridge+Rd,+Norcross,+GA+30071,+USA/@33.9459106,-84.2270995,17z/data=!3m1!4b1!4m6!3m5!1s0x88f5a121320d85c3:0xbbf1c0f91b0ae42c!8m2!3d33.9459062!4d-84.2245246!16s%2Fg%2F11pzklfy87!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id:1,
    country: "Bangladesh",
    address: "House # 4 (5th Floor), Road # 20, Nikunja - 2, Dhaka, Bangladesh",
    email: "services@zhbsolutions.com",
    phone: "+880 1332-840871",
    href: "https://www.google.com/maps/place/RCP9%2B63R,+Dhaka+1229/@23.8355202,90.4175518,21z/data=!4m6!3m5!1s0x3755c66737ccfb9d:0x5dc8522bd1e3ad1f!8m2!3d23.8356602!4d90.417682!16s%2Fg%2F11gdw15w9p!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
  },
  
];
function TeamSection() {
  return (
    <>
      <div className="py-6 lg:py-20 px-6 lg:px-[120px]">
        <h2 className="text-xl lg:text-2xl max-w-3xl mx-auto font-bold text-center mb-6 lg:mb-14">
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
