import CreativeStepSection from "@/components/element/CreativeStepSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import BuildSection from "@/components/models/Data/BuildSection"
import HeroSection from "@/components/models/Data/HeroSection"
import HowSection from "@/components/models/Data/HowSection"
import ServiceSection from "@/components/models/Data/ServiceSection"
import TechnologySection from "@/components/models/Data/TechnologySection"

function page() {
  return (
    <div>
      <HeroSection/>
      <BuildSection/>
      <ServiceSection/>
      <TechnologySection/>
      <HowSection/>
      <TestimonialsSection/>
      <CreativeStepSection
        title="Take the first creative step toward success"
        buttonText="Schedule a call"
      />
    </div>
  )
}

export default page