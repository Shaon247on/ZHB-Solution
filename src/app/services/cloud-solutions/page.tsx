import CreativeStepSection from "@/components/element/CreativeStepSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import BuildSection from "@/components/models/Cloud/BuildSection"
import HeroSection from "@/components/models/Cloud/HeroSection"
import HowSection from "@/components/models/Cloud/HowSection"
import ServiceSection from "@/components/models/Cloud/ServiceSection"
import TechnologySection from "@/components/models/Cloud/TechnologySection"

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