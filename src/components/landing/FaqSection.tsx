"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { FaqAccordion } from "../element/FaqAccordion";

function FaqSection() {
  return (
    <div className="p-4 lg:p-[120px] flex flex-col lg:flex-row gap-0 lg:gap-48 justify-center">
      <motion.div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`mb-4 lg:mb-10 text-base w-[60px] text-center text-black border border-sky-700 rounded-full font-medium`}
        >
          FAQ
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-xl lg:text-4xl font-orbitron font-bold lg:leading-12 mx-auto text-black`}
        >
          Your Questions, Answered...
        </motion.p>
        <div className="relative lg:w-[580px] lg:h-[302px] mt-8">
          <Image
            src="/answer-image.jpg"
            width={580}
            height={302}
            alt="image description"
            className="w-[580px] absolute z-0 h-[210px] lg:h-[302px] object-cover"
          />
          <svg
            width="45"
            height="54"
            viewBox="0 0 45 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-10 top-0 right-0 w-6 lg:w-[45px] h-7 lg:h-[54px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.4 -25H31.6V-4.5723L17.1554 -19.0169L5.98314 -7.8446L20.4277 6.6H0V22.4H20.4277L5.98314 36.8444L17.1554 48.0169L31.6 33.5722V54H47.4V33.5722L61.8448 48.0169L73.0169 36.8448L58.5722 22.4H79V6.6H58.5722L73.0169 -7.8446L61.8448 -19.0169L47.4 -4.5723V-25Z"
              fill="#464646"
            />
          </svg>
          <svg
            width="45"
            height="42"
            viewBox="0 0 45 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-10 bottom-0 right-0 w-6 lg:w-[45px] h-7 lg:h-[54px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.4 0H23.6V15.2561L12.8123 4.46842L4.46842 12.8123L15.2562 23.6H0V35.4H15.2561L4.46842 46.1876L12.8123 54.5316L23.6 43.7438V59H35.4V43.7438L46.1879 54.5316L54.5316 46.1879L43.7438 35.4H59V23.6H43.7438L54.5316 12.8123L46.1879 4.46839L35.4 15.2561V0Z"
              fill="#464646"
            />
          </svg>
          <div className="p-4 lg:p-6">
            <div className="*:data-[slot=avatar]:ring-background  flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar className="size-8 lg:size-[60px] border-none">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="size-8 lg:size-[60px] border-none">
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@leerob"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar className="size-8 lg:size-[60px] border-none">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
            <div className="relative text-white text-base lg:text-[28px] mt-6 max-w-[455px]">
              <h2>Get the perfect fix for your needs today.</h2>
              <Button size="xl" className="rounded-full bg-[#5E8DE8] mt-6">Set up a short call</Button>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-12 w-[94%] lg:w-[750px]">
        <FaqAccordion/>
      </div>
    </div>
  );
}

export default FaqSection;
