"use client";
import React from "react";
import ContactForm from "../element/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";
import CreativeStepSection from "../element/CreativeStepSection";

function ContactSection({ bottom = true }: { bottom?: boolean }) {
  return (
    <section>
      <div className="flex flex-col lg:flex-row px-4 lg:px-14 py-10 lg:py-20 bg-[#EBF1FC] gap-6 lg:gap-16">
        <div className="flex flex-col items-start justify-between">
          <motion.div className=" ">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`mb-2 text-base w-[90px] text-center text-black border border-sky-700 rounded-full font-medium`}
            >
              Contact
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-2xl lg:text-4xl font-orbitron font-bold lg:leading-12 mx-auto text-black`}
            >
              Have a great idea? <br className="hidden lg:block" />
              Let’s build it together.
            </motion.p>
            <h4 className="text-[#959595] mb-6 lg:mb-24 mt-6 lg:mt-8 max-w-[824px] mx-auto text-start lg:text-2xl font-semibold">
              We take pride in delivering real results to businesses of all
              sizes. Here's what our clients have to say about working with us.
            </h4>
          </motion.div>
          <div>
            <div className="w-[240px] h-[240px] overflow-hidden">
              <Image
                src={"/CTO.jpg"}
                width={240}
                height={240}
                layout="responsive"
                alt="cto photo"
                className="object-contain w-[240px] h-[240px]"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-5 mb-2">
              Md Zahirul Bhuiyan
            </h2>
            <p className="text-[#464646] font-medium">CTO, ZHB Solution LLC</p>
          </div>
        </div>
        <ContactForm />
      </div>
      {bottom && (
        <CreativeStepSection
          title="Take the first creative step toward success"
          // subtitle="Discover how we transform ideas into exceptional digital experiences through our proven methodology"
          buttonText="Learn More"
          onButtonClick={() => console.log("Custom button clicked")}
          className="mt-8"
        />
      )}
    </section>
  );
}

export default ContactSection;
