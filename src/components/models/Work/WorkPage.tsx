"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WorkPageData } from "@/data/WorkDataMain";
import WorkCard from "@/components/element/WorkCard";

// Zod schemas
const commentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  comment: z.string().min(10, "Comment must be at least 10 characters long"),
});

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type CommentFormData = z.infer<typeof commentSchema>;
type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface WorkPageProps {
  id: string | number; // ID of the work/project to display
  allProjects?: WorkPageData[]; // Optional array of all projects for navigation/related projects
}

const WorkPage: React.FC<WorkPageProps> = ({ id, allProjects = [] }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const idNumber = Number(id);

  const workData = allProjects.find((project) => project.id === idNumber);
  const relatedWorkData = allProjects.filter(
    (project) => project.id !== idNumber
  );

  console.log("Related Work Data:", relatedWorkData);
  // Comment form
  const commentForm = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  // Newsletter form
  const newsletterForm = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onCommentSubmit = () => {
    commentForm.handleSubmit((data: CommentFormData) => {
      console.log("Comment submitted:", data);
      // Handle comment submission
      commentForm.reset();
    })();
  };

  const onNewsletterSubmit = () => {
    newsletterForm.handleSubmit((data: NewsletterFormData) => {
      console.log("Newsletter subscription:", data);
      // Handle newsletter subscription
      newsletterForm.reset();
    })();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 300);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Color mapping for result impact items
  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return "text-green-600";
      case "blue":
        return "text-blue-600";
      case "yellow":
        return "text-yellow-600";
      case "red":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  // Handle case where work data is not found
  if (!workData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            The requested project with ID {id} could not be found.
          </p>
          <Link href="/work">
            <Button className="text-sm sm:text-base">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url('${workData.heroSection.backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 px-4 sm:px-6 lg:px-10 xl:px-28 w-full pt-10 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-orbitron font-bold mb-4 sm:mb-6 leading-tight">
                {workData.heroSection.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 text-blue-100 leading-relaxed max-w-2xl">
                {workData.heroSection.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {workData.heroSection.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-blue-200">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="https://wa.me/14049363567?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size={"xl"}
                  className="rounded-full text-sm sm:text-base px-6 sm:px-8"
                >
                  {workData.heroSection.ctaText}
                </Button>
              </Link>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <Image
                width={902}
                height={758}
                src={workData.heroSection.heroImage}
                alt={workData.heroSection.heroImageAlt}
                className="object-cover w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-10 xl:px-20 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-0">
          {/* Sidebar */}
          <div
            className={`lg:col-span-1 order-2 lg:order-1 ${
              isMobile ? "" : isSticky ? "lg:sticky lg:top-8 lg:self-start" : ""
            }`}
          >
            <div className="max-w-md mx-auto space-y-4 sm:space-y-6">
              {/* Project Summary Card */}
              <Card className="w-full" style={{ backgroundColor: "#F9F8F4" }}>
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">
                    Project Summary
                  </h2>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-sm sm:text-base text-gray-600 font-medium">
                        Industry
                      </span>
                      <span className="text-sm sm:text-base text-gray-900 text-right">
                        {workData.projectSummary.industry}
                      </span>
                    </div>

                    <div className="flex justify-between items-start">
                      <span className="text-sm sm:text-base text-gray-600 font-medium">
                        Platforms
                      </span>
                      <span className="text-sm sm:text-base text-gray-900 text-right">
                        {workData.projectSummary.platforms}
                      </span>
                    </div>

                    <div className="flex justify-between items-start">
                      <span className="text-sm sm:text-base text-gray-600 font-medium">
                        Duration
                      </span>
                      <span className="text-sm sm:text-base text-gray-900 text-right">
                        {workData.projectSummary.duration}
                      </span>
                    </div>

                    <div className="flex justify-between items-start">
                      <span className="text-sm sm:text-base text-gray-600 font-medium">
                        Team
                      </span>
                      <span className="text-sm sm:text-base text-gray-900 text-right leading-relaxed">
                        {workData.projectSummary.team}
                      </span>
                    </div>

                    <div className="flex justify-between items-start">
                      <span className="text-sm sm:text-base text-gray-600 font-medium">
                        Service
                      </span>
                      <span className="text-sm sm:text-base text-gray-900 text-right leading-relaxed">
                        {workData.projectSummary.service}
                      </span>
                    </div>

                    <div className="flex justify-between items-start">
                      <span className="text-sm sm:text-base text-gray-600 font-medium">
                        Stack
                      </span>
                      <span className="text-xs sm:text-sm text-gray-900 text-right leading-relaxed whitespace-pre-line">
                        {workData.projectSummary.stack}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="https://wa.me/14049363567?text=Hello%20I%20am%20interested%20in%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base">
                      {workData.projectSummary.ctaText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Deliverables Card */}
              <Card className="w-full" style={{ backgroundColor: "#F9F8F4" }}>
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">
                    Deliverables
                  </h2>

                  <ul className="space-y-2 sm:space-y-3">
                    {workData.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-900">
                          {deliverable.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Goals & Challenges */}
              <Card className="mb-6 sm:mb-8 shadow-none bg-[#F9F8F4]">
                <CardContent className="lg:mx-6 lg:my-2 p-4 sm:p-6 rounded-2xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                    Goals & Challenges
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <Card className="bg-white p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                          Business Goal
                        </h3>
                        <ul className="space-y-2 sm:space-y-3 text-gray-700">
                          {workData.goalsAndChallenges.businessGoals.map(
                            (goal, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm sm:text-base">
                                  {goal.text}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </Card>
                    </div>
                    <div>
                      <Card className="bg-white p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                          Key Challenges
                        </h3>
                        <ul className="space-y-2 sm:space-y-3 text-gray-700">
                          {workData.goalsAndChallenges.keyChallenges.map(
                            (challenge, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm sm:text-base">
                                  {challenge.text}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Solution Architecture */}
              <Card className="mb-6 sm:mb-8 shadow-none bg-[#F9F8F4]">
                <CardContent className="lg:mx-6 lg:my-2 p-4 sm:p-6 rounded-2xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                    Solution Architecture
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    {workData.solutionArchitecture.description}
                  </p>

                  <div className="p-4 sm:p-8 rounded-lg">
                    <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-24 gap-6 sm:gap-8">
                      {workData.solutionArchitecture.images.map(
                        (image, index) => (
                          <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="rounded-lg shadow-md w-full sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[400px]"
                          />
                        )
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature Highlights */}
              <Card className="mb-6 sm:mb-8 shadow-none bg-[#F9F8F4]">
                <CardContent className="lg:mx-6 lg:my-2 p-4 sm:p-6 rounded-2xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
                    Feature Highlights
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                    {workData.featureHighlights.map((feature, index) => (
                      <Card
                        key={index}
                        className="bg-white border border-gray-200"
                      >
                        <CardContent className="p-4 sm:p-6">
                          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Screen & Gallery */}
              <Card className="mb-6 sm:mb-8 shadow-none bg-[#F9F8F4]">
                <CardContent className="lg:mx-6 lg:my-2 p-4 sm:p-6 rounded-2xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                    Screen & Gallery
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                    Replace these placeholders with your real screenshots
                    (PNG/WebP). Maintain consistent aspect ratios for a clean
                    grid.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {workData.screenGallery.map((screen, index) => (
                      <Card
                        key={index}
                        className="bg-white overflow-hidden border border-gray-200"
                      >
                        {screen.placeholder ? (
                          <div className="bg-gray-100 p-4 h-32 sm:h-40 lg:h-48 flex items-center justify-center">
                            <div className="text-center">
                              <div className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium">
                                {screen.title}
                              </div>
                              <div className="text-xs text-gray-500 mt-1 sm:mt-2">
                                {screen.subtitle}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative h-32 sm:h-40 lg:h-48">
                            <Image
                              src={screen.src!}
                              alt={screen.alt!}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                              <div className="text-center text-white">
                                <div className="text-xs sm:text-sm font-medium">
                                  {screen.title}
                                </div>
                                <div className="text-xs opacity-80 mt-1">
                                  {screen.subtitle}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technology Stack */}
              <Card className="mb-6 sm:mb-8 shadow-none bg-[#F9F8F4]">
                <CardContent className="lg:mx-6 lg:my-2 p-4 sm:p-6 rounded-2xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                    Technology Stack
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {workData.technologyStack.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="rounded-full px-4 py-2 w-28"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Security & Compliance */}
              <Card className="mb-6 sm:mb-8 shadow-none bg-[#F9F8F4]">
                <CardContent className="lg:mx-6 lg:my-2 p-4 sm:p-6 rounded-2xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                    Security & Compliance
                  </h2>
                  <ul className="space-y-2 sm:space-y-3 text-gray-700">
                    {workData.securityCompliance.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm sm:text-base">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Result & Impact */}
              <Card className="mb-6 sm:mb-8 shadow-none bg-[#F9F8F4]">
                <CardContent className="lg:mx-6 lg:my-2 p-4 sm:p-6 rounded-2xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                    Result & Impact
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {workData.resultImpact.map((result, index) => (
                      <Card
                        key={index}
                        className="bg-white text-center border border-gray-200"
                      >
                        <CardContent className="p-4 sm:p-6">
                          <div
                            className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${getColorClasses(
                              result.color
                            )}`}
                          >
                            {result.value}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">
                            {result.label}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Process & Timeline */}
              <Card className="mb-6 sm:mb-8 shadow-none bg-[#F9F8F4]">
                <CardContent className="lg:mx-6 lg:my-2 p-4 sm:p-6 rounded-2xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
                    Process & Timeline
                  </h2>

                  <div className="space-y-6 sm:space-y-8">
                    {workData.processTimeline.map((phase, index) => (
                      <div key={index} className="flex gap-3 sm:gap-4">
                        <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                            {phase.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="mb-6 sm:mb-8 shadow-none bg-[#F9F8F4]">
                <CardContent className="lg:mx-6 lg:my-2 p-4 sm:p-6 rounded-2xl">
                  <div className="">
                    <h2 className="text-xl md:text-3xl font-bold mb-6 sm:mb-8 ">
                      Testimonial
                    </h2>

                    <Card className="bg-white border border-gray-200">
                      <CardContent className="p-6 sm:p-8">
                        <blockquote className="text-base sm:text-lg text-gray-700 italic mb-4 sm:mb-6">
                          "{workData.testimonial.quote}"
                        </blockquote>

                        <div className="flex items-center gap-3 sm:gap-4">
                          <div
                            className={`w-10 sm:w-12 h-10 sm:h-12 bg-${workData.testimonial.author.avatarColor} rounded-full flex items-center justify-center`}
                          >
                            <span className="text-black bg-yellow-500 p-3 rounded-full  font-bold text-base sm:text-lg">
                              {workData.testimonial.author.initials}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm sm:text-base font-semibold">
                              {workData.testimonial.author.name}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              {workData.testimonial.author.position}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="mb-6 sm:mb-8 border-none shadow-none">
                <CardContent className="lg:mx-6 lg:my-2 border-2 border-[#959595] p-4 sm:p-6 rounded-2xl">
                  <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 sm:gap-6">
                    <div className="text-center lg:text-left">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {workData.callToAction.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {workData.callToAction.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Link href={workData.callToAction.buttonLink}>
                        <Button className="text-sm sm:text-base px-4 sm:px-6">
                          {workData.callToAction.buttonText}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <h2 className="text-xl md:text-3xl font-bold mb-6 sm:mb-8 ">
                More projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4 mt-6">
                {relatedWorkData?.map((project, index) => (
                  <WorkCard
                    key={index}
                    id={project.id}
                    title={project.heroSection.title}
                    subtitle={project.heroSection.description}
                    tags={project.tag}
                    image={project.heroSection.heroImage}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
