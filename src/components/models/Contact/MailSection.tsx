import { Arrow } from "@/components/svg/ContactSVG";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MailSection() {
  return (
    <div className="relative bg-[#0f1622] overflow-hidden">
      <Image
        src="/contact/mail.jpg"
        width={1920}
        height={704}
        alt="mail image"
        className="object-fill max-h-[704px] min-w-full bottom-24 absolute z-0"
      />
      <div className="w-full h-full absolute z-10 bg-[#181818CC]" />
      <div className="relative z-20 px-6 lg:px-[120px] py-6 lg:py-14">
        <h2 className="text-xl lg:text-2xl xl:text-4xl font-medium text-[#F8F8F8]">
          Drop us an email to explore for business collaboration or <br className="hidden xl:block"/>career
          Opportunities{" "}
        </h2>
        <div className="bg-[#F8F8F8] h-[2px] w-full my-6 lg:my-12" />

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-start lg:items-center lg:justify-between">
          <div>
            <p className="mb-4 lg:mb-9 text-white lg:text-lg font-medium">
              Projects collaborations and queries
            </p>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=services@zhbsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              <div className="flex items-center gap-4 cursor-pointer">
                <Button
                  size={"icon"}
                  className="rounded-full bg-white cursor-pointer"
                >
                  <Arrow />
                </Button>
                <h3 className="text-xl xl:text-3xl font-medium text-white">
                  services@zhbsolutions.com
                </h3>
              </div>
            </Link>
          </div>
          <div>
            <p className="mb-4 lg:mb-9 text-white lg:text-lg font-medium">
              Join our dynamic Team
            </p>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zahirul.bhuiyan@zhbsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              <div className="flex items-center gap-4">
                <Button
                  size={"icon"}
                  className="rounded-full bg-white cursor-pointer"
                >
                  <Arrow />
                </Button>
                <h3 className="text-xl lg:text-3xl font-medium text-white">
                  zahirul.bhuiyan@zhbsolutions.com
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailSection;
