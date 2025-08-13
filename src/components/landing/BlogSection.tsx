import React from "react";
import TitleSection from "../element/TitleSection";
import { Button } from "../ui/button";
import Image from "next/image";
import { MoveRight } from "lucide-react";

function BlogSection() {
  return (
    <section className="bg-[#172134] pb-10 lg:pb-20 mb-6 lg:mb-16">
      <TitleSection
        title="Blogs"
        subtitle="Latest inspiring insights for business growth"
        buttonText="Explore Insights"
        buttonHref="/blog"
        width="w-[80px]"
      />

      <div>
        <div>
          <div>
            <div className="px-4 sm:px-6 lg:px-32 flex flex-col lg:flex-row gap-8 items-center lg:gap-[300px]">
              <div>
                <h2 className="text-xl lg:text-[2rem] font-semibold text-[#EBF1FC]">
                  Revolutionizing Business with{" "}
                  <br className="hidden lg:block" />
                  AI: What You Need to Know
                </h2>
                <p className="mt-4 max-w-[531px] text-sm lg:text-base text-[#FDFDFD]">
                  Artificial Intelligence (AI) is transforming the way
                  businesses operate—automating tasks, enhancing
                  decision-making, and unlocking new revenue streams.
                </p>
                <Button variant={"link"} className="mt-6 lg:mt-20 text-white">
                  Learn More <MoveRight />
                </Button>
              </div>
              <div className="lg:h-[486px] lg:w-[659px] flex justify-center items-center">
                <Image
                  src={"/growth-1.png"}
                  width={659}
                  height={486}
                  alt="impect-2"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <div className="px-4 lg:px-32 flex flex-col-reverse lg:flex-row gap-8 items-center lg:gap-[300px]">
              <div className="lg:h-[490px] lg:w-[665px] overflow-hidden flex justify-center items-center">
                <Image
                  src={"/growth-2.png"}
                  width={665}
                  height={490}
                  alt="impect-2"
                  className="object-center"
                />
              </div>
              <div>
                <h2 className="text-xl lg:text-[2rem] font-semibold text-[#EBF1FC]">
                  Inside Our Latest IoT Project:{" "}
                  <br className="hidden lg:block" /> Smarter Homes, Smarter
                  Lives
                </h2>
                <p className="mt-4 max-w-[531px] text-sm lg:text-base text-[#FDFDFD]">
                  Discover how JHB Solution LLC is reshaping modern living with
                  our latest IoT project. From smart appliances to real-time
                  home monitoring, we’re building connected solutions that make
                  everyday life more efficient, secure, and convenient.
                </p>
                <Button variant={"link"} className="mt-6 lg:mt-20 text-white">
                  Learn More <MoveRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
