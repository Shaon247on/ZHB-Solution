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
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import {
  SymbolBlue,
  SymbolGreen,
  SymbolLightBlue,
  SymbolLightGreen,
} from "../svg/LandingSVG";
import { Button } from "../ui/button";

const reviews = [
  {
    id: 1,
    name: "Jason L.",
    role: "Co-Founder, UrbanWave Apparel",
    avatar: "/carousel-1.jpg",
    borderColor: "border-[#2650A0]",
    bgColor: "bg-[#55B681]",
    icon: <SymbolBlue />,
    review:
      "“ZHB transformed our Shopify store from a basic setup to a conversion-optimized powerhouse. They understood our brand and delivered a seamless shopping experience that boosted our sales within weeks.”",
  },
  {
    id: 2,
    name: "Emily D.",
    role: "Ops Manager, Blink Commerce ",
    avatar: "/carousel-2.jpg",
    borderColor: "border-[#1D7461]",
    bgColor: "bg-[#55B681]",
    icon: <SymbolGreen />,

    review:
      "“Their no-code automation setup saved us countless hours every week. We were amazed at how quickly ZHB understood our workflow and implemented solutions that worked instantly.”",
  },
  {
    id: 3,
    name: "Leon G.",
    role: "Marketing Director, NovaEdge Tech",
    avatar: "/carousel-3.jpg",
    borderColor: "border-[#3671E2]",
    bgColor: "bg-[#1D7461]",
    icon: <SymbolLightBlue />,

    review:
      "“ZHB helped us build a visual identity that truly represents who we are. From our logo to our digital brand assets, everything was beautifully designed and delivered on time.”",
  },
  {
    id: 4,
    name: "Sarah M.",
    role: "Founder, Boldify Creative",
    avatar: "/carousel-4.jpg",
    borderColor: "border-[#55B681]",
    bgColor: "bg-[#3671E2]",
    icon: <SymbolLightGreen />,

    review:
      "“Working with ZHB Solutions LLC was a game-changer for our digital presence. Their team built a sleek, high-performing website that helped us attract more clients and improve user engagement. Professional, responsive, and truly skilled!”",
  },
];
function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<any>();

  const scrollPrev = React.useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  return (
    <div className="px-4 lg:px-0">
      <TitleSection
        title="Testimonials"
        subtitle="Hear It from Our Partners"
        width="w-[150px]"
        textColor="text-black"
      />
      <h4 className="text-[#959595] mb-6 lg:mb-16 max-w-[824px] mx-auto text-center lg:text-2xl font-semibold">
        We take pride in delivering real results to businesses of all sizes.
        Here's what our clients have to say about working with us.
      </h4>
      {/* Navigation Buttons */}
      <div className="top-0 right-0 flex justify-end gap-2 lg:gap-4 mb-4 md:mb-8 px-4 md:px-8 lg:px-20 xl:px-[120px]">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="h-8 w-8 lg:h-12 lg:w-12 rounded-full border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 shadow-md"
        >
          <ChevronLeft className="h-4 w-4 lg:h-6 lg:w-6 text-gray-600" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="h-8 w-8 lg:h-12 lg:w-12 rounded-full border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 shadow-md"
        >
          <ChevronRight className="h-4 w-4 lg:h-6 lg:w-6 text-gray-600" />
        </Button>
      </div>
      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full cursor-grab active:cursor-grabbing lg:h-[468px]"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 w-full xl:w-[90%] lg:h-[488px]">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-2 md:pl-4 basis-full w-full lg:w-[520px] lg:h-[488px]"
              >
                <Card
                  className={`
                   ${review.bgColor} 
                  ${
                    review.id === 2 && "bg-[#041135]"
                  } shadow-lg select-none h-[468px]`}
                >
                  <CardContent className="py-4 lg:py-32 px-4 lg:px-14 xl:px-28 relative">
                    {review.icon}
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-2 lg:gap-12">
                      <Avatar
                        className={`size-24 lg:size-40 xl::size-[216px] border-8 lg:border-[12px]  
                          ${review.id === 1 && "border-[#2650A0]"}
                          ${review.id === 2 && "border-[#1D7461]"}
                          ${review.id === 3 && "border-[#3671E2]"}
                          ${review.id === 4 && "border-[#55B681]"}
                          
                          `}
                      >
                        <AvatarImage
                          className="object-cover"
                          src={review.avatar}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div
                        className={`flex-1 max-w-[909px] 
                          ${review.id === 1 && "text-[#172F5F]"}
                          ${review.id === 2 && "text-[#EBF1FC]"}
                          ${review.id === 3 && "text-[#EBF1FC]"}
                          ${review.id === 4 && "text-[#EBF1FC]"}
                        `}
                      >
                        <p className="text-base lg:text-2xl font-medium lg:font-bold leading-relaxed">
                          {review.review}
                        </p>
                        <h3 className="font-medium lg:font-bold text-base lg:text-2xl mt-4  lg:mt-12">
                          - {review.name}
                        </h3>
                        <p className="font-medium lg:font-bold text-base lg:text-2xl">
                          {review.role}
                        </p>
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
