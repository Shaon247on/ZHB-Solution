import Image from "next/image";

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
    </section>
  );
};

export default SubscribeSection;
