// components/WorkCard.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface RelatedWorksCardProps {
  id: number;
  title: string;
  subtitle: string;
  tags: string[];
  image: string; // path from /public
  imageHeight?: string;
  imageWidth?: string;
  gridCol?: string;
}

export default function RelatedWorksCard({
  id,
  title,
  subtitle,
  tags,
  image,
  imageHeight = "h-64",
  imageWidth = "w-full",
  gridCol = "col-span-1",
}: RelatedWorksCardProps) {
  return (
    <div
      className={`relative bg-[#11204E] ${gridCol} overflow-hidden shadow-md text-white p-3 `}
    >
      <div
        className={`relative ${
          id === 4 &&
          "flex items-center justify-center"
        }`}
      >
        <Image
          src={image}
          alt={title}
          width={1516}
          height={735}
          objectFit="cover"
          className={`object-cover min-h-52`}
        />
        
      </div>
      <div className="">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-xs text-gray-300 mb-16 text-justify">{subtitle}</p>
        <Link href={`/work/${id}`}>
        <Button className="gap-2 rounded-full absolute bottom-4">
          Read Case Study <ArrowRight className="w-4 h-4" />
        </Button>
        </Link>
      </div>
    </div>
  );
}
