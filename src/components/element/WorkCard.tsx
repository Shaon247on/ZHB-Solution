// components/WorkCard.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface WorkCardProps {
  id: number;
  title: string;
  subtitle: string;
  tags: string[];
  image: string; // path from /public
  cardHeight?: string;
  imageHeight?: string;
  imageWidth?: string;
  gridCol?: string;
}

export default function WorkCard({
  id: number,
  title,
  subtitle,
  tags,
  image,
  cardHeight = "w-full",
  imageHeight = "h-64",
  imageWidth = "w-full",
  gridCol = "col-span-1",
}: WorkCardProps) {
  return (
    <div
      className={`bg-[#11204E] ${gridCol} overflow-hidden shadow-md text-white ${cardHeight} py-4 px-6`}
    >
      <div className={`relative`}>
        <Image
          src={image}
          alt={title}
          width={1516}
          height={735}
          objectFit="cover"
          className={`object-cover w-full h-full`}
        />
      </div>
      <div className="">
        <div className="flex flex-wrap gap-2 my-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-[#1E3E7C] px-2 py-1 rounded-full uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-[32px] font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-6">{subtitle}</p>
        <Button size="xl" className="gap-2 rounded-full">
          Read Case Study <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
