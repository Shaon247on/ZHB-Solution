import CreativeStepSection from "@/components/element/CreativeStepSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ChoseSection from "@/components/models/Services/ChoseSection";
import HeroSection from "@/components/models/Services/HeroSection";
import HowSection from "@/components/models/Services/HowSection";
import ServicesSection from "@/components/models/Services/ServicesSection";
import WhatSection from "@/components/models/Services/WhatSection";
import React from "react";

function page() {
  return (
    <div>
      <HeroSection />
      <WhatSection />
      <ServicesSection />
      <ChoseSection />
      <HowSection />
      <TestimonialsSection />
      <CreativeStepSection
        title="Take the first creative step toward success"
        buttonText="Schedule a call"
      />
    </div>
  );
}

export default page;
