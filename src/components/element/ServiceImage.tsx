import Image from "next/image";
import React from "react";

interface ServicesImageProps {
  id: number;
  className?: string;
  image: string;
  alt: string;
  tag: string;
}

function ServicesImage({
  id,
  className = "",
  image,
  alt,
  tag,
}: ServicesImageProps) {
  return (
    <div className={`flex flex-col  ${id === 1 || id === 4 || id === 5 ? "items-start":"items-end"}`}>
      {id % 2 !== 0 ? (
        <h1 className="w-fit hidden lg:block px-5 py-2 text-[8px] lg:text-xs rounded-full bg-[#104035] text-white font-medium">
          {tag}
        </h1>
      ):(
        <div className="h-[36px] hidden lg:block" />
      )}
      <div className={`relative overflow-hidden ${className} bg-[#E5E6E5]`}>
        <Image
          src={image}
          alt={alt}
          width={200}
          height={184}
          className={`w-12 lg:w-[200px] h-12 lg:h-[184px] object-cover ${className}`}
        />
      </div>
      {id % 2 === 0 ? (
        <h1 className="w-fit hidden lg:block px-5 py-2 text-[8px] lg:text-xs rounded-full bg-[#104035] text-white font-medium">
          {tag}
        </h1>
      ):(
        <div className="h-[36px] hidden lg:block" />
      )}
    </div>
  );
}

export default ServicesImage;
