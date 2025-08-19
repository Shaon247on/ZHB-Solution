import Image from "next/image";
import { Button } from "../ui/button";

const SubscribeSection = () => {
  return (
    <section className="relative bg-cover bg-top h-[272px] overflow-hidden bg-[#121a2b]">
      <div className="absolute -top-[205px] -left-[440px] z-10 flex items-center justify-between">
        <Image
          src="/blogs/subscribeImage.jpg"
          alt="Subscribe"
          width={1966}
          height={400}
          className="object-cover w-[1600px] h-[850px] "
        />
        <Image
          src="/blogs/subscribeImage2.png"
          alt="Subscribe"
          width={1166}
          height={272}
          className="object-cover absolute -right-[781px] -top-[65px] z-20"
        />
      </div>
      <div className="absolute inset-0  z-30 bg-[#172F5F]/50"></div>
      <div className="relative z-40 flex flex-col lg:flex-row justify-between items-center h-full text-white py-10 lg:py-0 lg:px-[170px]">
        <h2 className="text-2xl lg:text-[32px] max-w-[357px] font-semibold text-center lg:text-start">
          Subscribe For The Daily Updates
        </h2>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-1">
          <input
            type="email"
            placeholder="Write Your Email"
            className="p-3 h-12 bg-white w-[300px] lg:w-[320px] border -2 border-blackplaceholder:text-sm placeholder:text-[#555555] rounded-lg text-black focus:outline-none"
          />
          <Button size={"xl"} className="bg-[#1A6A58] h-12 text-white rounded-lg hover:bg-green-600 transition">
            Submit Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
