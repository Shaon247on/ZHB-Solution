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
      className={`relative w-full h-[500px] bg-gray-100 rounded-2xl overflow-hidden cursor-pointer group ${className}`}
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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Blue Overlay that appears on hover */}
      <motion.div
        className="absolute inset-0 bg-blue-950"
        variants={{
          initial: { opacity: 0 },
          hover: { 
            opacity: 1,
            transition: {
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }
          }
        }}
      />

      {/* Main Title */}
      <motion.div
        className="absolute top-8 left-8 z-10"
        variants={{
          initial: { 
            x: 0, 
            y: 0, 
            opacity: 1 
          },
          hover: { 
            x: "0%", 
            y: "100px",
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }
          }
        }}
      >
        <h2 className="text-2xl md:text-2xl font-semibold font-orbitron text-gray-800 leading-tight max-w-[251px]">
          {title}
        </h2>
      </motion.div>

      {/* Content that slides down on hover */}
      <motion.div
        className="absolute inset-0 p-8 mt-16 flex flex-col justify-end items-start z-10"
        initial={{ y: "-100%", opacity: 0 }}
        variants={{
          initial: { 
            y: "-100%", 
            opacity: 0 
          },
          hover: { 
            y: 0, 
            opacity: 1,
            transition: {
              y: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.1
              },
              opacity: {
                duration: 1,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2
              }
            }
          },
          exit: {
            y: "-100%",
            opacity: 0,
            transition: {
              y: {
                duration: 0.8, // Slower exit for position
                ease: [0.4, 0, 0.6, 1],
                delay: 0
              },
              opacity: {
                duration: 0.6, // Slower exit for opacity
                ease: [0.4, 0, 0.6, 1],
                delay: 0
              }
            }
          }
        }}
        exit="exit"
      >
        <motion.div 
          className="max-w-md"
          initial={{ opacity: 0 }}
          variants={{
            initial: { opacity: 0 },
            hover: { 
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2
              }
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.7, // Slower exit
                ease: [0.4, 0, 0.6, 1],
                delay: 0
              }
            }
          }}
          exit="exit"
        >
          <motion.p 
            className="text-white mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            variants={{
              initial: { 
                opacity: 0
               },
              hover: { 
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0
                }
              },
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.5, // Slower exit
                  ease: [0.4, 0, 0.6, 1],
                  delay: 0.1
                }
              }
            }}
            exit="exit"
          >
            {description}
          </motion.p>
          
          <motion.button
            onClick={onButtonClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full transition-colors duration-200"
            initial={{ opacity: 0 }}
            variants={{
              initial: { opacity: 0 },
              hover: { 
                opacity: 1,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.3
                }
              },
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.4, // Slower exit
                  ease: [0.4, 0, 0.6, 1],
                  delay: 0.2
                }
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            exit="exit"
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Example usage component
const ServiceCardsDemo = () => {
  const cardData = [
    {
      title: "AI Powered Solutions",
      description: "From logos to complete brand identity, we craft visually stunning designs that capture attention and build lasting impressions. Let your brand speak through creative excellence.",
      buttonText: "Design with Impact",
      imageSrc: "/ai-robot-hand.jpg", // Replace with your actual image path
      imageAlt: "AI Robot Hand"
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites that deliver exceptional user experiences. Built with cutting-edge technologies for optimal performance and scalability.",
      buttonText: "Start Building",
      imageSrc: "/web-development.jpg", // Replace with your actual image path
      imageAlt: "Web Development"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive results. From SEO to social media, we help your business reach the right audience at the right time.",
      buttonText: "Grow Your Reach",
      imageSrc: "/digital-marketing.jpg", // Replace with your actual image path
      imageAlt: "Digital Marketing"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              onButtonClick={() => console.log(`Clicked: ${card.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
export { ServiceCardsDemo }