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
      "ZHB Solutions LLC 3651 Peachtree Pkwy E 116, Suwanee, GA 30024, USA",
    email: "info@zhbsolutions.com",
    phone: "+1 (404) 936-3567",
    href: "https://www.google.com/maps/place/3651+Peachtree+Pkwy+e+116,+Suwanee,+GA+30024,+USA/@34.0694326,-84.1711537,17z/data=!3m1!4b1!4m9!1m2!2m1!1sZHB+Solution+LLC+3651+Peachtree+Pkwy+STE.+E+%23116,+Suwanee,+GA+30024+Georgia+United+States!3m5!1s0x88f599f80e75f227:0x6b2e253e3cc12ce7!8m2!3d34.0694283!4d-84.1662828!15sCllaSEIgU29sdXRpb24gTExDIDM2NTEgUGVhY2h0cmVlIFBrd3kgU1RFLiBFICMxMTYsIFN1d2FuZWUsIEdBIDMwMDI0IEdlb3JnaWEgVW5pdGVkIFN0YXRlc5IBEGNvbXBvdW5kX3NlY3Rpb27gAQA?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id:1,
    country: "Bangladesh",
    address: "Kaderia Tower, JA-28, Mohakhali Gulshan Road, Dhaka-1212 (Opposite BRAC Center)",
    email: "services@zhbsolutions.com",
    phone: "+880 1332-840871",
    href: "https://www.google.com/maps/place/Kaderia+Tower/@23.7805486,90.407771,17z/data=!3m2!4b1!5s0x3755c7767f3f1cbd:0x1d50d00029739798!4m6!3m5!1s0x3755c70656402a31:0xc98d276e49087864!8m2!3d23.7805437!4d90.4103459!16s%2Fg%2F11j136683k?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D"
  },
  
];
function TeamSection() {
  return (
    <>
      <div className="py-6 lg:py-20 px-6 lg:px-[120px]">
        <h2 className="text-xl lg:text-5xl font-bold text-center mb-6 lg:mb-14">
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
