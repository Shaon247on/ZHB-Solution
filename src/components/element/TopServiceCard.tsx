// components/TopServiceCard.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface TopServiceCardProps {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  url: string;
}

const TopServiceCard: React.FC<TopServiceCardProps> = ({
  id,
  title,
  subtitle,
  image,
  features,
  url,
}) => {
  const isImageOnRight = id % 2 !== 0;

  return (
    <div
      className={`flex border-b-2  border-b-[#C1D3F6] pb-10 flex-col md:flex-row items-start gap-4 lg:gap-12 justify-between bg-[#F8F9F4] p-6 mb-6 md:mb-12`}
    >
      {/* Left Side (Text Section) */}
      <div className={`flex-1 ${isImageOnRight ? "md:order-2" : ""} space-y-4 py-6 px-0 lg:px-4`}>
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E3E7C]">{title}</h2>
        <p className="text-gray-700 text-base lg:text-lg max-w-[482px]">{subtitle}</p>
        <ul className="space-y-2 text-sm text-gray-600 max-w-[482px] mb-2 lg:mb-16">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-4 justify-start border-b-2 border-b-[#C1D3F6] py-3"
            >
              <div className="size-[30px] rounded-full bg-[#172F5F] text-white flex items-center justify-center">
                {index + 1}
              </div>
              {feature}
            </li>
          ))}
        </ul>
        <Link href={url}>
          <Button size="lg" className="mt-4 rounded-full">
            Discover
          </Button>
        </Link>
      </div>

      {/* Right Side (Image Section) */}
      <div
        className={`flex-1 ${id === 1 || id === 2 ? "relative" : ""}`}
      >
        {id === 1 && (
          <Image
            src={"/services/service-bg1.jpg"}
            fill
            alt="bg image"
            className="absolute z-0 w-full h-full"
          />
        )}
        {id === 2 && (
          <Image
            src={"/services/service-bg2.jpg"}
            fill
            alt="bg image"
            className="absolute z-0 w-full h-full opacity-40"
          />
        )}
        <Image
          src={image}
          alt={title}
          width={868}
          height={884}
          className={`object-cover  lg:w-[868px] lg:h-[884px] ${
            id === 1 || id === 2 ? "relative z-20" : ""
          } `}
        />
      </div>
    </div>
  );
};

export default TopServiceCard;
