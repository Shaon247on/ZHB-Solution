'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Image from 'next/image';

interface FeatureCardProps {
  iconName: string;
  iconBgColor?: string;
  url?: string;
  title: string;
  subtitle: string;
  className?: string;
  index?: number;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconName,
  iconBgColor = 'bg-teal-100',
  url = "/icon-1.png",
  title,
  subtitle,
  className = '',
  index = 0,
  delay = 0.1
}) => {
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`bg-white rounded-lg border border-gray-200 shadow-lg p-3 lg:p-6 max-w-[580px] ${className}`}
    >
      <div className="space-y-4 flex gap-6 items-start ">
        <div className={`p-3 rounded-lg ${iconBgColor} flex items-center justify-center shadow-lg`}>
          <Image
            src={url}
            alt={title}
            width={100}
            height={100}
            className={`lg:w-7 lg:h-7 object-contain`}
          />
        </div>
        
        <div className="space-y-4 lg:space-y-10 max-w-[365px]">
          <h3 className="text-xl lg:text-3xl font-bold font-Jakarta text-gray-900">
            {title}
          </h3>
          <p className="text-[#535353A8] text-justify font-Jakarta text-sm lg:text-base/6">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;