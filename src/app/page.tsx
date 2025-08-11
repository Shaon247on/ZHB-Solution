import BrandSection from "@/components/landing/BrandSection";
import HeroSection from "@/components/landing/HeroSection";
import SetviceSection from "@/components/landing/SetviceSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <BrandSection/>
      <SetviceSection/>
    </div>
  );
}
