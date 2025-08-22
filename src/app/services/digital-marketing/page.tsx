import CreativeStepSection from "@/components/element/CreativeStepSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import BuildSection from "@/components/Marketing/BuildSection"
import HeroSection from "@/components/Marketing/HeroSection"
import HowSection from "@/components/Marketing/HowSection"
import ServiceSection from "@/components/Marketing/ServiceSection"
import TechnologySection from "@/components/Marketing/TechnologySection"

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