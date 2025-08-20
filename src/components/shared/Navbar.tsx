"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] =
    useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [active, setActive] = useState<string>("Home");
  const route = useRouter();

  console.log("is active", active);

  useEffect(() => {
    const saved = localStorage.getItem("myValue");
    if (saved) setActive(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("myValue", active);
  }, [active]);

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".services-dropdown")) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About US", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Web Development", href: "/services/web-development" },
        {
          name: "Mobile App Development",
          href: "/services/mobile-app-development",
        },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
        { name: "Data Analytics", href: "/services/data-analytics" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
      ],
    },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blogs" },
    { name: "Career", href: "/career" },
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: easeOut,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: easeOut,
      },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const arrowVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return (
      <nav className="bg-[#172F5F] text-[#FDFDFD] shadow-lg relative z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Image
              src="/logo.png"
              alt="Logo"
              width={84}
              height={56}
              className="flex-shrink-0"
            />
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  onClick={() => setActive(item.name)}
                  key={item.name}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`${
                      active === item.name ? "text-[#3671E2]" : "text-[#FDFDFD]"
                    } hover:text-[#3671E2] transition-colors duration-200 font-medium`}
                  >
                    {item.name}
                  </Link>
                </button>
              ))}
            </div>
            <Button
              className="hidden lg:block"
              variant="default"
              size="default"
              onClick={() => {
                setActive("Contact");
                route.push("/contact");
              }}
            >
              Contact Us
            </Button>
            <div className="lg:hidden">
              <Menu className="w-6 h-6 text-[#FDFDFD]" />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-[#172F5F] text-[#FDFDFD] shadow-lg relative z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={84}
            height={56}
            className="flex-shrink-0"
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-[70px]">
            {navItems.map((item) => (
              <div key={item.name} className="relative services-dropdown">
                {item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative services-dropdown"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {item.hasDropdown ? (
                      <div className="relative">
                        {/* Services button is now a link */}
                        <Link
                          href={item.href}
                          onClick={() => setActive(item.name)}
                          className={`flex items-center space-x-1 ${
                            active === "Services"
                              ? "text-[#3671E2]"
                              : "text-[#FDFDFD]"
                          } hover:text-[#3671E2] transition-colors duration-200 py-2`}
                        >
                          <span className="font-medium">{item.name}</span>
                          <motion.div
                            variants={arrowVariants}
                            animate={isServicesOpen ? "open" : "closed"}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </Link>

                        {/* Dropdown stays the same */}
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                            >
                              <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                              >
                                {item.dropdownItems?.map(
                                  (dropdownItem, index) => (
                                    <Link
                                      onClick={() =>
                                        setActive(dropdownItem.name)
                                      }
                                      key={index}
                                      href={dropdownItem.href}
                                    >
                                      <motion.p
                                        variants={itemVariants}
                                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[#172F5F] transition-colors duration-200"
                                      >
                                        {dropdownItem.name}
                                      </motion.p>
                                    </Link>
                                  )
                                )}
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        onClick={() => setActive(item.name)}
                        href={item.href}
                        className={`${
                          active === item.name
                            ? "text-[#3671E2]"
                            : "text-[#FDFDFD]"
                        } hover:text-[#3671E2] transition-colors duration-200 font-medium`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ) : (
                  <Link
                    onClick={() => setActive(item.name)}
                    href={item.href}
                    className={`${
                      active === item.name ? "text-[#3671E2]" : "text-[#FDFDFD]"
                    } hover:text-[#3671E2] transition-colors duration-200 font-medium`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <Button
            onClick={() => {
              route.push("/contact");
              setActive("Contact");
            }}
            className="hidden lg:block"
            variant="default"
            size="default"
          >
            Contact Us
          </Button>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#FDFDFD] hover:text-[#3671E2] transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-16 right-0 bottom-0 w-full sm:w-80 bg-[#172F5F] z-40 lg:hidden"
          >
            <div className="px-6 py-6 space-y-1 h-full overflow-y-auto">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-1"
              >
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setIsMobileServicesOpen(!isMobileServicesOpen)
                          }
                          className="flex items-center justify-between w-full text-[#FDFDFD] hover:text-[#3671E2] py-3 text-left font-medium transition-colors duration-200"
                        >
                          <span>{item.name}</span>
                          <motion.div
                            variants={arrowVariants}
                            animate={isMobileServicesOpen ? "open" : "closed"}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-2 py-2">
                                {item.dropdownItems?.map(
                                  (dropdownItem, index) => (
                                    <motion.a
                                      key={index}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.1 }}
                                      href="#"
                                      className="block text-[#FDFDFD] hover:text-[#3671E2] py-2 transition-colors duration-200"
                                    >
                                      {dropdownItem}
                                    </motion.a>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block text-[#FDFDFD] hover:text-[#3671E2] py-3 font-medium transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="pt-4">
                  <motion.button
                    onClick={() => {
                      route.push("/contact");
                      setActive("Contact");
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#3671E2] hover:bg-[#00B596] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
                  >
                    Contact Us
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu overlay with blur effect */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
