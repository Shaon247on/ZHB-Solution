"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

const brands = [
  { name: "acme", src: "/slide-1.png" },
  { name: "hexa", src: "/slide-2.png" },
  { name: "liwa", src: "/slide-3.png" },
  { name: "codelab", src: "/slide-4.png" },
  { name: "radyal", src: "/slide-5.png" },
  { name: "stari", src: "/slide-6.png" },
  { name: "ztos", src: "/slide-7.png" },
  { name: "treva", src: "/slide-8.png" },
];

const MarqueeRow = ({
  reverse = false,
}: {
  reverse?: boolean;
}) => {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={clsx(
          "flex gap-10 min-w-max animate-marquee",
          reverse && "animate-marquee-reverse",
          paused && "paused"
        )}
      >
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-w-[120px]"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={80}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function BrandMarquee() {
  return (
    <section className="pt-20 relative overflow-hidden">
      <h2 className="text-center pb-10 text-2xl font-semibold text-[#181818CC] mb-8">
        Trusted By 200+ Global Brands
      </h2>
      <div className="space-y-12">
        <div className="absolute rotate-45 top-16 -left-32 size-[340px] bg-white z-10 blur-lg"/>
        <div className="absolute rotate-45 top-16 -right-32 size-[340px] bg-white z-10 blur-lg"/>
        <MarqueeRow reverse={false} />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
