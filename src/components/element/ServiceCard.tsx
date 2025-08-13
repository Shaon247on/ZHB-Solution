"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  buttonText: string
  imageSrc: string
  imageAlt: string
  onButtonClick?: () => void
  className?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  onButtonClick,
  className = ""
}) => {
  return (
    <motion.div
      className={`relative w-full h-[450px] sm:h-[500px] bg-gray-100 rounded-2xl overflow-hidden cursor-pointer group ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Blue Overlay */}
      <motion.div
        className="absolute inset-0 bg-blue-950"
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
        }}
      />

      {/* Title */}
      <motion.div
        className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10"
        variants={{
          initial: { x: 0, y: 0, opacity: 1 },
          hover: { x: "0%", y: "100px", opacity: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
        }}
      >
        <h2 className="text-lg sm:text-2xl font-semibold font-orbitron text-gray-800 leading-tight max-w-[220px] sm:max-w-[251px]">
          {title}
        </h2>
      </motion.div>

      {/* Content */}
      <motion.div
        className="absolute inset-0 p-4 sm:p-8 mt-12 sm:mt-16 flex flex-col justify-end items-start z-10"
        initial={{ y: "-100%", opacity: 0 }}
        variants={{
          initial: { y: "-100%", opacity: 0 },
          hover: {
            y: 0,
            opacity: 1,
            transition: {
              y: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 },
              opacity: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }
            }
          }
        }}
      >
        <motion.div
          className="max-w-full sm:max-w-md"
          initial={{ opacity: 0 }}
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 } }
          }}
        >
          <motion.p
            className="text-white mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
            }}
          >
            {description}
          </motion.p>

          <motion.button
            onClick={onButtonClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-colors duration-200"
            initial={{ opacity: 0 }}
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.3 } }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ServiceCard
