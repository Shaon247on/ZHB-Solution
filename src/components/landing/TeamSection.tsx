"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Compass, Users } from "lucide-react";
import TitleSection from "../element/TitleSection";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const AboutPage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <OurStorySection />
      <VisionMissionSection />
      <TeamSection />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[70vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTEwdjJIMjR2LTJoMTJ6bTAtMTB2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          ZHB Software Solutions is
          <br />
          <span className="text-blue-400">Empowering Businesses Globally</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          We deliver innovative software solutions that transform businesses and
          drive digital excellence across the globe.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

// Our Story Section
const OurStorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <TitleSection
              title="who we are"
              subtitle="Our Story"
              textColor="text-black"
              width="w-48"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                ZHB Solutions LLC is founded by <strong>Zahirul Bhuiyan</strong>
                , a seasoned technology leader and Lead Java Developer at
                General Motors, our company was built on the vision of making
                enterprise-grade solutions accessible to all businesses. We
                specialize in Cybersecurity, AI, Cloud, and Digital
                Transformation — empowering organizations to innovate, scale,
                and thrive securely in today’s digital-first world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Vision and Mission Section
const VisionMissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Our Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Eye className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become a global leader in software innovation, empowering
              businesses with cutting-edge technology solutions that drive
              growth and transformation. We envision a world where technology
              seamlessly integrates with business objectives, creating limitless
              possibilities for success.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are dedicated to delivering exceptional software solutions that
              exceed client expectations. Our mission is to combine innovation,
              expertise, and dedication to create products that solve real-world
              challenges and contribute to our clients' lasting success.
            </p>
          </motion.div>
        </motion.div>

        {/* Key Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <TitleSection
            title="Key Values"
            subtitle="The Value We provide"
            textColor="text-black"
            width="w-40"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass className="w-8 h-8" />,
                title: "Innovation",
                description:
                  "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and work closely with our clients to achieve shared goals.",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Excellence",
                description:
                  "We are committed to delivering the highest quality in everything we do, exceeding expectations.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Team Section
const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Zahirul Bhuiyan",
    role: "CEO",
    image: "/team/CEO.png",
    bio: "Visionary leader with 15+ years of experience in driving digital transformation and business growth.",
  },
  {
    id: 2,
    name: "Mohammad Saiful Islam",
    role: "TECHNOLOGY OFFICER",
    image: "/team/formal-5.jpg",
    bio: "Technology expert specializing in cutting-edge solutions and innovation strategies.",
  },
  {
    id: 3,
    name: "Abdullah Al Hossain",
    role: "PRINCIPAL AI ARCHITECT",
    image: "/team/formal-8.jpg",
    bio: "AI specialist with deep expertise in machine learning and intelligent system design.",
  },
  {
    id: 4,
    name: "Rashedul Karim Anik",
    role: "SOFTWARE ENGINEERING",
    image: "/team/formal-6.jpg",
    bio: "Experienced engineering leader passionate about building scalable and robust software solutions.",
  },
  {
    id: 5,
    name: "Tanvir Ahmed Rohan",
    role: "CONSULTANT APP DEVELOPMENT & SUPPORT",
    image: "/team/formal-4.jpg",
    bio: "Expert consultant specializing in mobile and web application development with exceptional support.",
  },
  {
    id: 6,
    name: "Fahim Abdullah",
    role: "SENIOR FULL-STACK ENGINEER – PRODUCT DEVELOPMENT",
    image: "/team/formal-9.jpg",
    bio: "Seasoned full-stack engineer specializing in scalable system architecture, API design, and high-performance application delivery.",
  },
  {
    id: 7,
    name: "Nusrat Jahan Tania",
    role: "CLOUD ARCHITECT",
    image: "/team/formal-1.jpg",
    bio: "Cloud infrastructure expert focused on designing secure and scalable cloud solutions.",
  },
  {
    id: 8,
    name: "Rakibul Islam Shiku",
    role: "CTO",
    image: "/team/CTO.jpg",
    bio: "Visionary leader with 15+ years of experience in driving digital transformation and business growth.",
  },
  
  {
    id: 9,
    name: "S.M.F Karim",
    role: "PRINCIPAL SOLUTION ARCHITECT – DIGITAL PLATFORMS & INTEGRATIONS",
    image: "/team/formal-7.jpg",
    bio: "Dedicated professional ensuring seamless app development lifecycle and customer satisfaction.",
  },
  {
    id: 10,
    name: "Md. Ekramul Haque",
    role: "lead QA Engineer - PRODUCT DELIVERY & OPERATIONS",
    image: "/team/formal-2.jpg",
    bio: "Results-driven consultant with expertise in delivering innovative application solutions.",
  },
  {
    id: 11,
    name: "Juned Ahmed Chowdhury",
    role: "LEAD CONSULTANT APP DEVELOPMENT & SUPPORT",
    image: "/team/formal-3.jpg",
    bio: "Dedicated professional ensuring seamless app development lifecycle and customer satisfaction.",
  },
  
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <TitleSection
          title="OUR TEAM"
          subtitle="Thinking Big!"
          textColor="text-black"
          width="w-32"
        />

        {/* Team Grid - Following Organizational Chart Structure */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* CEO - Top Level */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-full max-w-sm">
              <TeamMemberCard member={teamMembers[0]} />
            </div>
          </motion.div>

          {/* Second Level - 5 positions */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto lg:ml-[15%]">
            {teamMembers.slice(7, 11).map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>

          {/* Third Level - 2 people reporting to Software Engineering Manager */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.slice(1, 7).map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
          {member.role}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
