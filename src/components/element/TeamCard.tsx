"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Call, Mail, Sun } from "../svg/ContactSVG";
import Link from "next/link";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { MoonIcon } from "lucide-react";

dayjs.extend(utc);
dayjs.extend(timezone);

interface TeamCardProps {
  id: number;
  country: string;
  address: string;
  email: string;
  phone: string;
}

function TeamCard({ id, country, address, email, phone }: TeamCardProps) {
  const [bdTime, setBdTime] = useState("");
  const [usaTime, setUsaTime] = useState("");
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const updateTimes = () => {
      // Bangladesh Time (UTC+6 → Asia/Dhaka)
      const bd = dayjs().tz("Asia/Dhaka");
      const bdFormatted = bd.format("hh:mm A");

      // USA Eastern Time (UTC-4 → America/New_York)
      const usa = dayjs().tz("America/New_York");
      const usaFormatted = usa.format("hh:mm A");

      setBdTime(bdFormatted);
      setUsaTime(usaFormatted);

      // pick time zone based on card id
      const currentHour = id === 1 ? bd.hour() : usa.hour();
      setIsDay(currentHour >= 6 && currentHour < 18); // 6AM–6PM = Day
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60 * 1000);
    return () => clearInterval(interval);
  }, [id]);

  return (
    <div className="bg-[#EBF1FC] py-6 lg:py-10 flex flex-col lg:flex-row px-6 lg:px-24 border-b-2 border-[#B7B7B7]">
      <div className="w-full lg:w-1/2 flex flex-col lg:ml-5 items-start justify-center">
        <div className="flex items-center flex-col justify-center gap-1">
          <div>
            {isDay ? (
              <Sun /> // Show Sun if day
            ) : (
              <MoonIcon stroke="none" fill="black" /> // Show Moon if night
            )}
          </div>
          <p>{id === 1 ? bdTime : usaTime}</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div>
          <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row items-start lg:items-center justify-between mb-5 lg:mb-0">
            <div>
              <h3 className="text-4xl lg:text-[56px] font-bold mb-2">
                {country}
              </h3>
              <h5 className="max-w-[350px]">{address}</h5>
            </div>
            <Button className="bg-[#181818] rounded-2xl">Map Location</Button>
          </div>
          <div className="h-[2px] w-full bg-[#B7B7B7] my-4 hidden lg:block" />
          <Link
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <div className="flex items-center gap-2 mb-2">
              <div>
                <Mail />
              </div>
              <p className="text-black">{email}</p>
            </div>
          </Link>
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
