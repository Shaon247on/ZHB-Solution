"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Phone, Mail, Globe } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FooterIcon from "../element/FooterIcon";
import Link from "next/link";

interface FooterProps {
  logoUrl?: string;
  logoAlt?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  logoUrl = "/logo.png",
  logoAlt = "EB Solutions Logo",
  className = "",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const footerLinks = {
    service: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Cloud Solution", href: "/services/cloud-solution" },
      { label: "Artificial-Intelligence", href: "/services/artificial-intelligence" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
    quickLink1: [
      { label: "Work", href: "#" },
      { label: "About", href: "#" },
      { label: "Service", href: "#" },
      { label: "Career", href: "#" },
      { label: "Blog", href: "#" },
    ],
    quickLink2: [
      { label: "FAQ", href: "#" },
      { label: "About", href: "#" },
      { label: "Service", href: "#" },
      { label: "Career", href: "#" },
      { label: "Blog", href: "#" },
    ],
    quickLink3: [
      { label: "Work", href: "#" },
      { label: "About", href: "#" },
      { label: "Service", href: "#" },
      { label: "Career", href: "#" },
      { label: "Blog", href: "#" },
    ],
  };

  const socialIcons = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className={`relative w-full overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer.jpg"
          alt="Footer background network pattern"
          width={1280}
          height={901}
          className="w-full h-auto hidden lg:block object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-[#263247]/97" />

      {/* Content */}
      <motion.div
        className="relative z-20 py-12 lg:py-[160px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-6 lg:mx-[280px]">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 mb-8">
            {/* Logo and Description Section */}
            <motion.div
              className="lg:col-span-12 space-y-6 flex flex-col lg:flex-row justify-between mb-6"
              variants={itemVariants}
            >
              {/* Logo */}
              <div className="col-span-4">
                <div className="flex items-center mb-4">
                  <Image
                    src={logoUrl}
                    alt={logoAlt}
                    width={149}
                    height={100}
                    className="w-24 lg:w-[200px] h-16 lg:h-[120px]"
                  />
                </div>
                {/* Description */}
                <p className="text-gray-300 text-base lg:text-xl font-medium leading-relaxed max-w-sm">
                  Shaping the future through smart, minimal, and human-driven
                  digital design.
                </p>
              </div>

              {/* Newsletter Subscription */}
              <div>
                <div className="space-y-3">
                  <h3 className="text-white text-lg lg:text-2xl font-semibold">
                    Subscribe to our Blog!
                  </h3>
                  <div className="flex items-center mb-5">
                    <Input
                      type="email"
                      placeholder="Enter Mail"
                      className="w-[260px] h-11 lg:h-[50px] rounded-r-none bg-white placeholder:text-[#B7B7B7]"
                    />
                    <Button
                      className="rounded-l-none h-11 lg:h-[50px] rounded-r-full bg-[#172F5F] border-l-none"
                      size={"xl"}
                    >
                      SUBSCRIBE
                    </Button>
                  </div>
                </div>
                {/* Social Icons */}
                <div className="flex justify-center lg:justify-end space-x-3">
                  <FooterIcon>
                    <svg
                      width="13"
                      height="21"
                      viewBox="0 0 13 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.10244 19.5274V12.2534H1.31844C1.17389 12.2534 1.03527 12.196 0.933064 12.0938C0.830857 11.9916 0.773438 11.853 0.773438 11.7084V8.83141C0.773438 8.68687 0.830857 8.54825 0.933064 8.44604C1.03527 8.34383 1.17389 8.28641 1.31844 8.28641H4.09144V5.50141C4.0251 4.84097 4.10417 4.174 4.32309 3.54737C4.542 2.92074 4.89546 2.34963 5.35863 1.87417C5.8218 1.39871 6.38345 1.03041 7.00413 0.795161C7.62481 0.559908 8.28948 0.4634 8.95144 0.512414H11.2714C11.4174 0.512128 11.5575 0.569216 11.6617 0.671361C11.7659 0.773506 11.8258 0.912521 11.8284 1.05841V3.49441C11.8253 3.64005 11.7652 3.77866 11.6611 3.88054C11.557 3.98241 11.4171 4.03945 11.2714 4.03941H9.82144C8.25544 4.03941 7.95444 4.78141 7.95444 5.87241V8.28541H11.6774C11.7548 8.28285 11.8318 8.29717 11.9031 8.32739C11.9744 8.3576 12.0382 8.40298 12.0902 8.46037C12.1422 8.51776 12.181 8.58578 12.204 8.6597C12.227 8.73362 12.2336 8.81167 12.2234 8.88841L11.8864 11.7764C11.8696 11.9087 11.8048 12.0302 11.7043 12.1179C11.6039 12.2056 11.4748 12.2535 11.3414 12.2524H7.97744V19.5264C7.97933 19.6549 7.95539 19.7825 7.90705 19.9016C7.85871 20.0207 7.78695 20.1289 7.69602 20.2197C7.60509 20.3105 7.49684 20.3822 7.3777 20.4304C7.25856 20.4786 7.13095 20.5024 7.00244 20.5004H5.06544C4.93793 20.5008 4.81162 20.4758 4.69387 20.4269C4.57613 20.378 4.46932 20.3061 4.37967 20.2154C4.29002 20.1247 4.21933 20.0171 4.17173 19.8988C4.12413 19.7805 4.10058 19.6549 4.10244 19.5274Z"
                        fill="#2650A0"
                      />
                    </svg>
                  </FooterIcon>
                  <FooterIcon>
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.4375 2.501C4.43724 3.03143 4.22627 3.54004 3.85101 3.91492C3.47575 4.28981 2.96693 4.50027 2.4365 4.5C1.90607 4.49974 1.39746 4.28877 1.02258 3.91351C0.647694 3.53825 0.437235 3.02943 0.4375 2.499C0.437765 1.96857 0.648733 1.45996 1.02399 1.08508C1.39925 0.710194 1.90807 0.499735 2.4385 0.5C2.96893 0.500265 3.47754 0.711233 3.85242 1.08649C4.22731 1.46175 4.43777 1.97057 4.4375 2.501ZM4.4975 5.981H0.4975V18.501H4.4975V5.981ZM10.8175 5.981H6.8375V18.501H10.7775V11.931C10.7775 8.271 15.5475 7.931 15.5475 11.931V18.501H19.4975V10.571C19.4975 4.401 12.4375 4.631 10.7775 7.661L10.8175 5.981Z"
                        fill="#2650A0"
                      />
                    </svg>
                  </FooterIcon>
                  <FooterIcon>
                    <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.988 12.151L13.75 18.5H20.75L12.892 8.022L19.43 0.5H16.78L11.663 6.386L7.25 0.5H0.25L7.76 10.515L0.82 18.5H3.47L8.988 12.151ZM14.75 16.5L4.25 2.5H6.25L16.75 16.5H14.75Z"
                        fill="#2650A0"
                      />
                    </svg>
                  </FooterIcon>
                  <FooterIcon>
                    <svg
                      width="21"
                      height="15"
                      viewBox="0 0 21 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 10.5L13.69 7.5L8.5 4.5V10.5ZM20.06 2.67C20.19 3.14 20.28 3.77 20.34 4.57C20.41 5.37 20.44 6.06 20.44 6.66L20.5 7.5C20.5 9.69 20.34 11.3 20.06 12.33C19.81 13.23 19.23 13.81 18.33 14.06C17.86 14.19 17 14.28 15.68 14.34C14.38 14.41 13.19 14.44 12.09 14.44L10.5 14.5C6.31 14.5 3.7 14.34 2.67 14.06C1.77 13.81 1.19 13.23 0.94 12.33C0.81 11.86 0.72 11.23 0.66 10.43C0.59 9.63 0.56 8.94 0.56 8.34L0.5 7.5C0.5 5.31 0.66 3.7 0.94 2.67C1.19 1.77 1.77 1.19 2.67 0.94C3.14 0.81 4 0.72 5.32 0.66C6.62 0.59 7.81 0.56 8.91 0.56L10.5 0.5C14.69 0.5 17.3 0.66 18.33 0.94C19.23 1.19 19.81 1.77 20.06 2.67Z"
                        fill="#2650A0"
                      />
                    </svg>
                  </FooterIcon>
                  <FooterIcon>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 0.5C14.8261 0.5 16.0979 1.02678 17.0355 1.96447C17.9732 2.90215 18.5 4.17392 18.5 5.5V13.5C18.5 14.8261 17.9732 16.0979 17.0355 17.0355C16.0979 17.9732 14.8261 18.5 13.5 18.5H5.5C4.17392 18.5 2.90215 17.9732 1.96447 17.0355C1.02678 16.0979 0.5 14.8261 0.5 13.5V5.5C0.5 4.17392 1.02678 2.90215 1.96447 1.96447C2.90215 1.02678 4.17392 0.5 5.5 0.5H13.5ZM9.5 5.5C8.43913 5.5 7.42172 5.92143 6.67157 6.67157C5.92143 7.42172 5.5 8.43913 5.5 9.5C5.5 10.5609 5.92143 11.5783 6.67157 12.3284C7.42172 13.0786 8.43913 13.5 9.5 13.5C10.5609 13.5 11.5783 13.0786 12.3284 12.3284C13.0786 11.5783 13.5 10.5609 13.5 9.5C13.5 8.43913 13.0786 7.42172 12.3284 6.67157C11.5783 5.92143 10.5609 5.5 9.5 5.5ZM9.5 7.5C10.0304 7.5 10.5391 7.71071 10.9142 8.08579C11.2893 8.46086 11.5 8.96957 11.5 9.5C11.5 10.0304 11.2893 10.5391 10.9142 10.9142C10.5391 11.2893 10.0304 11.5 9.5 11.5C8.96957 11.5 8.46086 11.2893 8.08579 10.9142C7.71071 10.5391 7.5 10.0304 7.5 9.5C7.5 8.96957 7.71071 8.46086 8.08579 8.08579C8.46086 7.71071 8.96957 7.5 9.5 7.5ZM14 4C13.7348 4 13.4804 4.10536 13.2929 4.29289C13.1054 4.48043 13 4.73478 13 5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4Z"
                        fill="#2650A0"
                      />
                    </svg>
                  </FooterIcon>
                </div>
              </div>
            </motion.div>

            {/* Navigation Links */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:col-span-3 gap-8">
            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>3651 Peachtree pkwy STE. E #116</p>
                <p>Suwanee, GA 30024</p>
                
                <div className="flex items-center gap-2.5 mt-4">
                    <Phone size={18} fill="white" stroke="white"/>
                    <p>(469) 896-3557</p>
                </div>
                <div className="flex items-center gap-2.5">
                    <Mail size={18} stroke="white"/>
                    <p>www.ebsolutions.com</p>
                </div>
                <div className="flex items-center gap-2.5">
                    <Globe size={18} stroke="white"/>
                    <p>www.zhbsolutions.com</p>
                </div>
                
              </div>
            </motion.div>

            {/* Service */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-semibold text-sm mb-4">SERVICE</h3>
              <ul className="space-y-2">
                {footerLinks.service.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Link 1 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-semibold text-sm mb-4">
                QUICK LINK
              </h3>
              <ul className="space-y-2">
                {footerLinks.quickLink1.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="pt-8 lg:pt-20 border-gray-600/50 flex flex-col lg:flex-row justify-start lg:justify-between items-center space-y-4 sm:space-y-0"
            variants={itemVariants}
          >
            <p className="text-gray-400 text-xs">
              Copyright 2024 EB Solution LLC.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <Link
                href="#"
                className="hover:text-white text-[0.70rem] lg:text-base transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-white text-[0.70rem] lg:text-base transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                className="hover:text-white text-[0.70rem] lg:text-base transition-colors duration-200"
              >
                Code of Conduct
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
