"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function OurStoryCarousel() {
  return (
    <div className="bg-[#172134] py-6 lg:py-20 px-6">
      <div className="flex flex-col lg:flex-row items-start justify-between lg:px-[363px] gap-4 lg:gap-[130px] mb-16 lg:mb-[120px]">
        <h2 className="text-white text-2xl lg:text-[56px] font-bold font-orbitron lg:w-[500px]">
          EmpoOur Story, <br className="hidden lg:block" /> Your Success
        </h2>
        <div>
          <p className="lg:max-w-[500px] text-xs lg:text-base font-medium text-[#B7B7B7] mx-auto mb-6 lg:mb-20">
            Every great partnership begins with a story. At ZHB Solution LLC,
            ours is built on a passion for technology and a commitment to
            helping businesses grow. Your success drives everything we do — from
            strategy to execution — as we turn innovative ideas into powerful
            digital solutions.
          </p>
          <Button>Dive Into Our Projects</Button>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="flex items-center">
          {/* Image 1 */}
          <CarouselItem className="flex-none">
            <Image
              src="/about/our-1.jpg"
              alt="Our Project 1"
              width={350}
              height={500}
              className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
            />
          </CarouselItem>

          {/* Image 2 */}
          <CarouselItem className="flex-none">
            <Image
              src="/about/our-2.jpg"
              alt="Our Project 2"
              width={350}
              height={320}
              className="object-cover w-full h-64 sm:h-80 md:h-80 lg:h-80"
            />
          </CarouselItem>

          {/* Image 3 */}
          <CarouselItem className="flex-none">
            <Image
              src="/about/our-3.jpg"
              alt="Our Project 3"
              width={350}
              height={320}
              className="object-cover w-full h-64 sm:h-80 md:h-80 lg:h-80"
            />
          </CarouselItem>

          {/* Image 4 */}
          <CarouselItem className="flex-none">
            <Image
              src="/about/our-4.jpg"
              alt="Our Project 4"
              width={350}
              height={320}
              className="object-cover w-full h-64 sm:h-80 md:h-80 lg:h-[500px]"
            />
          </CarouselItem>

          {/* Image 5 */}
          <CarouselItem className="flex-none">
            <Image
              src="/about/our-5.jpg"
              alt="Our Project 5"
              width={350}
              height={320}
              className="object-cover w-full h-64 sm:h-80 md:h-80 lg:h-80"
            />
          </CarouselItem>

          {/* Image 6 (New Image) */}
          <CarouselItem className="flex-none">
            <Image
              src="/about/our-6.jpg"
              alt="Our Project 6"
              width={350}
              height={320}
              className="object-cover w-full h-64 sm:h-80 md:h-80 lg:h-80"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
