"use client"

import { TrendingUp, Zap, Code2, Sparkles, Rocket, Shield, Upload, TabletSmartphone, Database, CreditCard, Palette, Globe, MessageSquare, Brain, Cpu } from "lucide-react"
import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/dist/css/splide.min.css'
import WaitlistModal from "@/components/Modals/WaitlistModal"

const badges = [
  { icon: TrendingUp, text: "Scales Easily", color: "text-purple-400" },
  { icon: Zap, text: "Great for Beginners", color: "text-yellow-400" },
  { icon: Code2, text: "AI-Powered", color: "text-green-400" },
  { icon: Sparkles, text: "Latest Tech", color: "text-blue-400" },
  { icon: Rocket, text: "Quick to Build", color: "text-red-400" },
  { icon: Shield, text: "Secure", color: "text-indigo-400" },
  { icon: Upload, text: "Easy Uploads", color: "text-pink-400" },
  { icon: TabletSmartphone, text: "App Store", color: "text-cyan-400" },
  { icon: TabletSmartphone, text: "Google Play Store", color: "text-cyan-400" },
  { icon: Database, text: "Supports Databases", color: "text-emerald-400" },
  { icon: CreditCard, text: "Ready to Monetize", color: "text-amber-400" },
  { icon: Palette, text: "Custom Branding", color: "text-rose-400" },
  { icon: Globe, text: "Auto Deploys", color: "text-violet-400" },
  { icon: MessageSquare, text: "Chat Feature", color: "text-teal-400" },
  { icon: Brain, text: "No-Code Friendly", color: "text-lime-400" },
  { icon: Cpu, text: "Optimized", color: "text-sky-400" },
];

export default function OnboardingForm() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const splideRef = useRef(null);
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-900 px-4 py-24">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover z-0"
        style={{
          backgroundImage: "url('/svgs/bg-pattern.svg')",
          opacity: 0.4,
        }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="z-10 w-full max-w-5xl mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-4 text-6xl font-extrabold tracking-tight text-white sm:text-7xl">
            Welcome to <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Aura</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Where your ideas transcend reality. <br />Build the future with AI-powered innovation.
          </p>
          <div className="mt-8">
            <button onClick={openModal} className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-700 px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-gray-800">
                Join Waitlist
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="w-full overflow-visible z-20 mt-20">
        <Splide
          ref={splideRef}
          options={{
            type: 'loop',
            drag: 'free',
            autoWidth: true,
            gap: '1rem',
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 0.1,
              pauseOnHover: false,
              pauseOnFocus: false
            }
          }}
          extensions={{ AutoScroll }}
          className="splide__track"
        >
          {badges.map((badge, index) => (
            <SplideSlide key={index}>
              <div className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 border border-white whitespace-nowrap">
                <badge.icon className={`w-5 h-5 ${badge.color}`} />
                <span>{badge.text}</span>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <AnimatePresence>
        {isModalOpen && <WaitlistModal closeModal={closeModal} />}
      </AnimatePresence>
    </section>
  )
}