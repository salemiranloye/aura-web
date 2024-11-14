"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Code, Zap, UserPlus } from "lucide-react"
import { useState } from "react"
import WaitlistModal from "@/components/Modals/WaitlistModal"

export default function KeyFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const features = [
    {
      icon: BrainCircuit,
      title: "Chat-Driven Design",
      description: "Our intelligent system asks the right questions to understand your vision and shape your perfect app.",
    },
    {
      icon: Code,
      title: "AI-Powered App Creation",
      description: "Turn your ideas into mobile apps through an AI-guided conversation - no coding required.",
    },
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Launch your app directly to the App Store and Google Play Store with our automated deployment system.",
    },
  ]

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
              <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="rgba(255, 0, 255, 1)"></stop>
              <stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop>
            </radialGradient>
            <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
              <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="rgba(255, 0, 0, 1)"></stop>
              <stop offset="100%" stopColor="rgba(255, 0, 0, 0)"></stop>
            </radialGradient>
            <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
              <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
              <stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop>
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
            <animate attributeName="x" dur="20s" values="0%;25%;0%" repeatCount="indefinite" />
            <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
            <animate attributeName="x" dur="23s" values="0%;25%;0%" repeatCount="indefinite" />
            <animate attributeName="y" dur="24s" values="0%;25%;0%" repeatCount="indefinite" />
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
            <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite" />
            <animate attributeName="y" dur="26s" values="0%;25%;0%" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>
      <div className="container relative px-4 mx-auto z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Key Features
        </motion.h2>
        <div className="grid gap-8 sm:flex sm:justify-center sm:items-stretch sm:space-x-4 md:space-x-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group sm:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(1)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl opacity-75 blur-xl transition duration-500" />
              <motion.div
                className="relative bg-gray-800 rounded-3xl border border-purple-500/30 hover:border-pink-500 transition-colors duration-300 shadow-lg h-full flex flex-col"
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                  y: hoveredIndex === index ? -10 : index === 1 ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-grow p-6 md:p-8 flex flex-col">
                  <div className="text-center mb-auto">
                    <motion.div
                      className="mb-6 mx-auto bg-gradient-to-br from-purple-400 to-pink-600 p-4 rounded-2xl shadow-lg inline-flex"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="h-12 w-12 md:h-16 md:w-16 text-white" />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-lg">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <motion.div
                    className="mt-6 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={openModal}
                      className="w-full px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300 flex items-center justify-center space-x-2 shadow-lg text-sm md:text-base"
                      aria-label={`Join waitlist for ${feature.title}`}
                    >
                      <UserPlus className="h-4 w-4 md:h-5 md:w-5" />
                      <span>Join Waitlist</span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      {isModalOpen && <WaitlistModal closeModal={closeModal} />}
    </section>
  )
}