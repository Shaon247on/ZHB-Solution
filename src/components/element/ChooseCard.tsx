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
      className={`bg-white rounded-lg border border-gray-200 shadow-xl p-6 ${className}`}
    >
      <div className="space-y-4 flex gap-6 items-start">
        <div className={`p-3 w-[90px] rounded-lg ${iconBgColor} flex items-center justify-center shadow-lg`}>
          <Image
            src={url}
            alt={title}
            width={48}
            height={48}
            className={`w-16 h-8 object-contain`}
          />
        </div>
        
        <div className="space-y-3 max-w-[458px]">
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;