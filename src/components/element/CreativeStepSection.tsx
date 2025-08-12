'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { de } from 'zod/v4/locales';

interface CreativeStepSectionProps {
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const CreativeStepSection: React.FC<CreativeStepSectionProps> = ({
  title = "Creative Step",
  buttonText = "See our Step",
  onButtonClick,
  className = ""
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      console.log('See our Step clicked');
    }
  };

  return (
    <section className={`w-full flex justify-center py-8 lg:py-16 ${className}`}>
      <motion.div
        className="relative w-full max-w-[1220px] h-[300px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden mx-4 sm:mx-6 lg:mx-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/creative-step.jpg"
            alt="Creative step process background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: '#172134',
            opacity: 0.85
          }}
        />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-16">
          <motion.div
            className="max-w-4xl space-y-6 lg:space-y-8"
            variants={itemVariants}
          >
            {/* Main Title */}
            <motion.h2 
              className="text-white font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            {/* Button */}
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <Button
                size="xl"
                onClick={handleButtonClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {buttonText}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CreativeStepSection;