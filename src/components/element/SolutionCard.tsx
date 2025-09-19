"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface SolutionCardProps {
  number: string
  label: string
  title: string
  subtitle: string
  defaultBgColor?: string
  hoverBgColor?: string
  defaultTextColor?: string
  hoverTextColor?: string
  className?: string
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  number,
  label,
  title,
  subtitle,
  defaultBgColor = "bg-gray-100",
  hoverBgColor = "bg-blue-600",
  defaultTextColor = "text-gray-800",
  hoverTextColor = "text-white",
  className = ""
}) => {
  return (
    <motion.div
      className={`relative w-full overflow-hidden cursor-pointer group ${className} h-[300px] md:h-[520px] lg:h-[450px] xl:h-[520px] pt-6`}
      whileHover="hover"
      initial="initial"
    >
      {/* Background that changes on hover */}
      <motion.div
        className={`absolute inset-0 ${defaultBgColor}`}
        variants={{
          initial: { opacity: 1 },
          hover: { opacity: 0 }
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      />
      
      <motion.div
        className={`absolute inset-0 ${hoverBgColor}`}
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        {/* Number Badge */}
        <motion.div
          className="flex items-center justify-start font-orbitron text-4xl font-bold"
          variants={{
            initial: { y: 0, opacity: 1 },
            hover: { y: -5, opacity: 1 }
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className={`inline-flex items-center justify-center border-current ${defaultTextColor} group-hover:${hoverTextColor}`}
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.1 }
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="font-bold text-4xl">{number}</span>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-4">
          {/* Title with underline */}
          <motion.div
            variants={{
              initial: { y: 0, opacity: 1 },
              hover: { y: -10, opacity: 1 }
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          >
            <h3 className={`text-2xl font-bold mb-2 ${defaultTextColor} group-hover:${hoverTextColor} transition-colors duration-400`}>
              {title}
            </h3>
            <motion.div
              className={`h-1 bg-current ${defaultTextColor} group-hover:${hoverTextColor}`}
              variants={{
                initial: { width: "60px" },
                hover: { width: "80px" }
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="space-y-2"
            variants={{
              initial: { y: 0, opacity: 1 },
              hover: { y: -15, opacity: 1 }
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            <div className="flex items-baseline space-x-2">
              <motion.span
                className={`text-4xl font-bold ${defaultTextColor} group-hover:${hoverTextColor} transition-colors duration-400`}
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              >
                {subtitle}
              </motion.span>
              <motion.span
                className={`text-lg font-medium ${defaultTextColor} group-hover:${hoverTextColor} transition-colors duration-400`}
                variants={{
                  initial: { x: 0, opacity: 0.8 },
                  hover: { x: 5, opacity: 1 }
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
              >
                {label}
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default SolutionCard;
