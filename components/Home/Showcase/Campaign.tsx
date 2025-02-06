"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Campaign = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    margin: "-100px",
    amount: 0.3 // Triggers when 30% of the component is visible
  })

  const imageVariants = {
    hidden: { 
      x: -100, 
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const contentVariants = {
    hidden: { 
      x: 100, 
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div ref={ref} className="w-full mx-auto flex flex-col sm:flex-row overflow-hidden">
      {/* Image Section */}
      <motion.div 
        className="w-full sm:w-1/2 order-1 sm:order-none"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <Image 
          src="/camp.jpg" 
          alt="Campaign Image" 
          width={1000} 
          height={800} 
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="bg-[#4a0000] w-full sm:w-1/2 flex justify-center items-center text-white px-4 sm:px-6 py-8 sm:py-0"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={contentVariants}
      >
        <div className="text-center space-y-4 sm:space-y-6">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-widest"
            variants={textVariants}
          >
            Love Always
          </motion.h1>
          <motion.p 
            className="max-w-xl mx-auto text-sm sm:text-md md:text-lg lg:text-xl leading-relaxed"
            variants={textVariants}
          >
            Gucci Together portrays shared moments drawn from the cadence of everyday life, set in homes filled with
            warmth and lived emotions for Valentine&apos;s Day.
          </motion.p>
          <motion.button 
            className="font-semibold border-b-2 border-white pb-1 hover:text-gray-300 transition-colors duration-300"
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DISCOVER THE CAMPAIGN
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Campaign