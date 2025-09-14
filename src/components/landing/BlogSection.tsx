import React from "react";
import TitleSection from "../element/TitleSection";
import { Button } from "../ui/button";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { blogs } from "@/data/BlogsDataMain";
import Link from "next/link";

function BlogSection() {
  const data = blogs;
  return (
    <section className="bg-[#172134] pb-10 lg:pb-20 mb-6 lg:mb-16">
      <TitleSection
        title="Blogs"
        subtitle="Latest inspiring insights for business growth"
        buttonText="Explore Insights"
        buttonHref="/blogs"
        width="w-[80px]"
      />

      <div>
        {data.slice(0, 1).map((item, index) => (
          <div key={index}>
            <div>
              <div className="px-4 sm:px-6 lg:px-32 flex flex-col-reverse lg:flex-row gap-8 items-center lg:gap-[300px]">
                <div>
                  <h2 className="text-xl lg:text-[2rem] max-w-[550px] font-semibold text-[#EBF1FC]">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-[531px] text-sm lg:text-base text-[#FDFDFD]">
                    {item.content[0].points}
                  </p>
                  <Link href={`/blogs/${item.id}`}>
                    <Button
                      variant={"link"}
                      className="mt-6 lg:mt-20 text-white"
                    >
                      Learn More <MoveRight />
                    </Button>
                  </Link>
                </div>
                <div className="lg:h-[486px] lg:w-[659px] overflow-hidden rounded-2xl flex justify-center items-center">
                  <Image
                    src={`/blogs/blog${item.id}.jpg`}
                    width={659}
                    height={486}
                    alt="impect-2"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {data.slice(1, 2).map((item, index) => (
          <div key={index} className="mt-10">
            <div>
              <div className="px-4 lg:px-32 flex flex-col lg:flex-row gap-8 items-center lg:gap-[300px]">
                <div className="lg:h-[490px] lg:w-[665px] overflow-hidden rounded-2xl flex justify-center items-center">
                  <Image
                    src={`/blogs/blog${item.id}.jpg`}
                    width={695}
                    height={550}
                    alt="impect-2"
                    className="object-center rounded-2xl"
                  />
                </div>
                <div>
                  <h2 className="text-xl max-w-[620px] lg:text-[2rem] font-semibold text-[#EBF1FC]">
                   {item.title}
                  </h2>
                  <p className="mt-4 max-w-[531px] text-sm lg:text-base text-[#FDFDFD]">
                    {item.content[0].points}
                  </p>
                  <Link href={`/blogs/${item.id}`}>
                  <Button variant={"link"} className="mt-6 lg:mt-20 text-white">
                    Learn More <MoveRight />
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
