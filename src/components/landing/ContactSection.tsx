"use client";
import React from "react";
import ContactForm from "../element/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";
import CreativeStepSection from "../element/CreativeStepSection";

function ContactSection({ bottom = true }: { bottom?: boolean }) {
  return (
    <section>
      <div className="flex flex-col justify-between lg:flex-row px-4 lg:px-16 xl:px-[6%] py-10 lg:py-20 bg-[#EBF1FC] gap-6 lg:gap-16">
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
              className={`text-2xl lg:text-2xl xl:text-4xl font-orbitron font-bold xl:leading-12 mx-auto text-black`}
            >
              Have a great idea? <br className="hidden lg:block" />
              Let’s build it together.
            </motion.p>
            <h4 className="text-[#959595] mb-6 lg:mb-8 xl:mb-16 mt-6 lg:mt-8 max-w-[824px] mx-auto xl:text-base text-justify font-semibold">
              We turn bold ideas into measurable results. At ZHB Solutions,
              we’re passionate about helping businesses of every size thrive.
              Led by Zahirul Bhuiyan - a veteran with 15+ years of experience
              delivering high-impact software for Fortune 500 companies - our
              global team of 1,000+ experts is ready to bring your vision to
              life. From web design and development to databases, architecture,
              and security, we have the talent and experience to build solutions
              that scale. <br />
              Your next big project is just a click away - let’s create something exceptional together.

            </h4>
          </motion.div>
          <div>
            <div className="w-[240px] h-[240px] overflow-hidden">
              <Image
                src={"/CEO.png"}
                width={240}
                height={240}
                layout="responsive"
                alt="cto photo"
                className="object-contain w-[240px] h-[240px]"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-5 mb-2">
              Zahirul Bhuiyan
            </h2>
            <p className="text-[#464646] font-medium">CEO, ZHB Solutions LLC</p>
          </div>
        </div>
        <ContactForm />
      </div>
      {bottom && (
        <CreativeStepSection
          title="Take the first creative step toward success"
          // subtitle="Discover how we transform ideas into exceptional digital experiences through our proven methodology"
          buttonText="Schedule a call"
          onButtonClick={() => console.log("Custom button clicked")}
          className="mt-8"
        />
      )}
    </section>
  );
}

export default ContactSection;
