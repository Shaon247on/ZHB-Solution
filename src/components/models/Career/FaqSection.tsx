"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/element/FaqAccordion";


function FaqSection() {
  return (
    <div className="p-4 lg:p-[120px] flex flex-col lg:flex-row gap-0 lg:gap-48 justify-center mt-5 lg:-mt-20">
      <motion.div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`mb-2 text-base w-[60px] text-center text-black border border-sky-700 rounded-full font-medium`}
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
          Got something on your mind?
        </motion.p>
      </motion.div>
      <div className="mt-12 w-[94%] lg:w-[750px]">
        <FaqAccordion/>
      </div>
    </div>
  );
}

export default FaqSection;
