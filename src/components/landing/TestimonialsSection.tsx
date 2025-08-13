"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import TitleSection from "../element/TitleSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jason L.",
    role: "Co-Founder, UrbanWave Apparel",
    avatar: "/api/placeholder/40/40",
    review:
      "“ZHB transformed our Shopify store from a basic setup to a conversion-optimized powerhouse. They understood our brand and delivered a seamless shopping experience that boosted our sales within weeks.”",
  },
  {
    id: 2,
    name: "Jhon Deo",
    role: "Lawyer",
    avatar: "/api/placeholder/40/40",
    review:
      "As a property lawyer, Settleid brings me qualified leads with zero marketing effort. Great return for the 15% fee.",
  },
  {
    id: 3,
    name: "James R.",
    role: "Buyer",
    avatar: "/api/placeholder/40/40",
    review: "Uploaded my contract and it within 30 minutes found",
  },
  {
    id: 4,
    name: "James R.",
    role: "Buyer",
    avatar: "/api/placeholder/40/40",
    review: "Uploaded my contract and it within 30 minutes found",
  },
];

function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
    <div className="px-4 lg:px-0">
      <TitleSection
        title="Testimonials"
        subtitle="Hear It from Our Partners"
        width="w-[150px]"
        textColor="text-black"
      />
      <h4 className="text-[#959595] mb-6 lg:mb-24 max-w-[824px] mx-auto text-center lg:text-2xl font-semibold">
        We take pride in delivering real results to businesses of all sizes.
        Here's what our clients have to say about working with us.
      </h4>
      <div className="relative">
        <Carousel
          className="w-full cursor-grab active:cursor-grabbing lg:h-[468px]"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 w-full lg:w-[1577px] lg:h-[468px]">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-2 md:pl-4 basis-full w-full lg:w-[520px] lg:h-[468px]"
              >
                <Card
                  className={`${
                    review.id === 1 || review.id === 3
                      ? "bg-[#55B681]"
                      : "bg-[#041135]"
                  } ${
                    review.id === 2 && "bg-[#041135]"
                  } shadow-lg select-none h-[468px]`}
                >
                  <CardContent className="py-4 lg:py-32 px-4 lg:px-28 relative">
                    {review.id === 1 || review.id === 3 ? (
                      <svg
                        width="169"
                        height="135"
                        viewBox="0 0 169 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 right-5 w-[90px] lg:w-[169px] h-[50px] lg:h-[135px]"
                      >
                        <path
                          d="M154.084 115.305C169.888 98.1525 168.296 76.1263 168.246 75.875V8.875C168.246 6.65381 167.364 4.5236 165.793 2.95298C164.223 1.38237 162.092 0.5 159.871 0.5H109.621C100.383 0.5 92.8711 8.01237 92.8711 17.25V75.875C92.8711 78.0962 93.7535 80.2264 95.3241 81.797C96.8947 83.3676 99.0249 84.25 101.246 84.25H127.024C126.844 88.3899 125.607 92.4146 123.432 95.9415C119.177 102.65 111.162 107.231 99.5963 109.543L92.8711 110.882V134.5H101.246C124.554 134.5 142.334 128.043 154.084 115.305ZM61.9004 115.305C77.7124 98.1525 76.1127 76.1263 76.0625 75.875V8.875C76.0625 6.65381 75.1801 4.5236 73.6095 2.95298C72.0389 1.38237 69.9087 0.5 67.6875 0.5H17.4375C8.19987 0.5 0.6875 8.01237 0.6875 17.25V75.875C0.6875 78.0962 1.56986 80.2264 3.14048 81.797C4.7111 83.3676 6.84131 84.25 9.0625 84.25H34.8408C34.6601 88.3899 33.4233 92.4146 31.2479 95.9415C26.9934 102.65 18.9785 107.231 7.41262 109.543L0.6875 110.882V134.5H9.0625C32.3701 134.5 50.1502 128.043 61.9004 115.305Z"
                          fill="#172F5F"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="169"
                        height="135"
                        viewBox="0 0 169 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 right-5  w-[90px] lg:w-[169px] h-[50px] lg:h-[135px]"
                      >
                        <path
                          d="M154.084 115.305C169.888 98.1525 168.296 76.1263 168.246 75.875V8.875C168.246 6.65381 167.364 4.5236 165.793 2.95298C164.223 1.38237 162.092 0.5 159.871 0.5H109.621C100.383 0.5 92.8711 8.01237 92.8711 17.25V75.875C92.8711 78.0962 93.7535 80.2264 95.3241 81.797C96.8947 83.3676 99.0249 84.25 101.246 84.25H127.024C126.844 88.3899 125.607 92.4146 123.432 95.9415C119.177 102.65 111.162 107.231 99.5963 109.543L92.8711 110.882V134.5H101.246C124.554 134.5 142.334 128.043 154.084 115.305ZM61.9004 115.305C77.7124 98.1525 76.1127 76.1263 76.0625 75.875V8.875C76.0625 6.65381 75.1801 4.5236 73.6095 2.95298C72.0389 1.38237 69.9087 0.5 67.6875 0.5H17.4375C8.19987 0.5 0.6875 8.01237 0.6875 17.25V75.875C0.6875 78.0962 1.56986 80.2264 3.14048 81.797C4.7111 83.3676 6.84131 84.25 9.0625 84.25H34.8408C34.6601 88.3899 33.4233 92.4146 31.2479 95.9415C26.9934 102.65 18.9785 107.231 7.41262 109.543L0.6875 110.882V134.5H9.0625C32.3701 134.5 50.1502 128.043 61.9004 115.305Z"
                          fill="#55B681"
                        />
                      </svg>
                    )}
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-2 lg:gap-12">
                      <Avatar
                        className={`size-24 lg:size-[216px] border-8 lg:border-[12px]  ${
                          review.id === 1 || review.id === 3
                            ? "border-[#2650A0]"
                            : "border-[#55B681]"
                        }`}
                      >
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div
                        className={`flex-1 max-w-[909px] ${
                          review.id === 1 || review.id === 3
                            ? "text-[#172F5F]"
                            : "text-[#55B681]"
                        }
                        `}
                      >
                        <p className="text-base lg:text-2xl font-medium lg:font-bold leading-relaxed">
                          {review.review}
                        </p>
                        <h3 className="font-medium lg:font-bold text-base lg:text-2xl mt-4  lg:mt-12">
                          - {review.name}
                        </h3>
                        <p className="font-medium lg:font-bold text-base lg:text-2xl">{review.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default TestimonialsSection;
