import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface BlogCardProps {
  id: number;
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  releaseDate: string;
  bgColor?: string;
}

export default function BlogCard({
  id,
  image,
  tag,
  title,
  subtitle,
  releaseDate,
  bgColor = "#EBF1FC",
}: BlogCardProps) {
  return (
    <div
      className="overflow-hidden flex flex-col"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative w-full h-[270px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 546px"
        />
      </div>
      <div className="p-3">
        <div className="p-4 flex flex-col gap-2 h-[280px] lg:h-[268px] mb-4 lg:mb-10">
          <span className="inline-block text-xs p-2 bg-[#104035] text-white rounded-full w-fit font-medium">
            {tag}
          </span>
          <h3 className="text-lg lg:text-[22px] font-semibold text-black py-6">
            {title}
          </h3>
          <p className="text-sm text-[#464646] font-medium">{subtitle}</p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-5 lg:gap-10">
          <Link href={`/blogs/${id}`}>
            <Button size={"xl"} className="bg-[#172F5F] rounded-2xl">
              Read More
            </Button>
          </Link>
          <p className="text-[10px] font-medium text-[#959595] ml-4 lg:ml-0">
            {releaseDate}
          </p>
        </div>
      </div>
    </div>
  );
}
