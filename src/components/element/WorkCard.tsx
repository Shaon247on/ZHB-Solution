// components/WorkCard.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface WorkCardProps {
  id: number;
  title: string;
  subtitle: string;
  tags: string[];
  image: string; // path from /public
  imageHeight?: string;
  imageWidth?: string;
  gridCol?: string;
}

export default function WorkCard({
  id,
  title,
  subtitle,
  tags,
  image,
  imageHeight = "h-64",
  imageWidth = "w-full",
  gridCol = "col-span-1",
}: WorkCardProps) {
  return (
    <div
      className={`relative h-[700px] bg-[#11204E] ${gridCol} overflow-hidden shadow-md text-white py-2 lg:py-4 px-2 lg:px-6`}
    >
      <div
        className={`relative ${
          id === 4 &&
          "flex items-center pt-6 lg:pt-[63px] pb-4 lg:pb-[39px] justify-center"
        }`}
      >
        <Image
          src={image}
          alt={title}
          width={1516}
          height={735}
          objectFit="cover"
          className={`object-cover w-[544px] relative  left-1/2 -translate-x-1/2  ${
            id === 4 && "relative z-10"
          } ${imageWidth} ${imageHeight}`}
        />
        {id === 4 && (
          <Image
            src={"/work/cardBg.jpg"}
            alt={title}
            width={1516}
            height={735}
            objectFit="cover"
            className={`object-cover h-full w-full absolute z-0`}
          />
        )}
      </div>
      <div className="">
        <div className={`flex flex-wrap gap-2 ${id === 4 ? "my-7" : "my-4"}`}>
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl lg:text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-6">{subtitle}</p>
        <Link href={`/work/${id}`}>
        <Button size="xl" className="gap-2 rounded-full absolute bottom-10">
          Read Case Study <ArrowRight className="w-4 h-4" />
        </Button>
        </Link>
      </div>
    </div>
  );
}
