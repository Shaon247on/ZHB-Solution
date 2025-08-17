import Image from "next/image";
import React from "react";

interface CareerImageProps {
  className?: string;
  image: string;
  alt: string;
}

function CareerImage({ className = "", image, alt }: CareerImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={image}
        alt={alt}
        width={320}
        height={320}
        className={`w-16 lg:w-[320px] h-16 lg:h-[320px] object-cover ${className}`}
      />
    </div>
  );
}

export default CareerImage;
