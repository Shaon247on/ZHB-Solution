import Image from "next/image";

interface WhyCardProps {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  image: string;
  imageClass?: string;
  flex?: string;
  id: number;
}

function WhyCard({
  icon,
  title,
  subTitle,
  image,
  imageClass,
  flex,
  id,
}: WhyCardProps) {
  return (
    <div
      className={`
        ${
          id <= 3
            ? "border-r-[1px] border-r-[#78A0EC] lg:border-r-[0px] lg:border-r-[#ffffff] border-l-[1px] border-l-[#78A0EC] lg:border-l-[0px] lg:border-l-[#ffffff] lg:border-b-[1px] lg:border-b-[#78A0EC]"

            : 
            
            "border-r-[1px] border-r-[#78A0EC] lg:border-r-[0px] lg:border-r-[#ffffff] border-l-[1px] border-l-[#78A0EC] lg:border-l-[0px] lg:border-l-[#ffffff] lg:border-t-[1px] lg:border-t-[#78A0EC]"
        } 
      ${
        id === 1
          ? "border-t-[1px] lg:border-t-[0px] lg:border-l-[1px] border-t-[#78A0EC] lg:border-t-[#78A0EC] lg:border-l-[#78A0EC]"
          : 
          ""
      } 
      ${
        id === 6
          ? "lg:border-r-[1px] lg:border-r-[#78A0EC] border-b-[1px] border-b-[#78A0EC] lg:border-b-[0px] lg:border-b-[#ffffff] pb-2 lg:pb-0"
          : ""
      }`}
    >
      <div
        className={`flex gap-10 lg:gap-14 ${
          id > 3 ? "flex-col" : "flex-col-reverse"
        } items-center ${id <= 3 ? "pb-2" : "pt-2"}`}
      >
        <div className="">
          <Image
            width={220}
            height={220}
            src={image}
            alt={title}
            className={`w-[300px] lg:w-[220px] h-[300px] lg:h-[220px] object-cover ${imageClass}`}
          />
        </div>
        <div className="px-5 pt-2">
          <div className="flex items-center justify-center mb-6">{icon}</div>
          <h3 className="font-bold text-[#172F5F] text-center">{title}</h3>
          <p className="text-xs text-[#172F5F] text-center mt-2">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default WhyCard;