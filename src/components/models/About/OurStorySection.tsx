"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function OurStoryCarousel() {
  return (
    <div className="bg-[#172134] py-6 lg:py-20 px-6">
      <div className="flex flex-col lg:flex-row items-start justify-between lg:px-[363px] gap-4 lg:gap-[130px] mb-16 lg:mb-[120px]">
        <h2 className="text-white text-2xl lg:text-[56px] font-bold font-orbitron lg:w-[500px]">
          Our Story, <br className="hidden lg:block" /> Your Success
        </h2>
        <div>
          <p className="lg:max-w-[500px] text-xs lg:text-base font-medium text-[#B7B7B7] mx-auto mb-6 lg:mb-10">
            For over 14 years, our journey has been defined by a commitment to
            excellence and client success. Guided by the leadership of Md.
            Zahirul Bhuiyan, whose vision and expertise continue to inspire
            innovation, ZHB Solutions has evolved into a trusted name across
            industries. Every project we undertake is built on a foundation of
            collaboration, innovation, and measurable impact—ensuring our
            clients achieve sustainable growth.
          </p>
          <Link
            href="https://wa.me/14049363567?text=Hello%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Dive Into Our Projects</Button>
          </Link>
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
