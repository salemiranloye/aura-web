"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/dist/css/splide.min.css'
import { ChevronRight, X, TrendingUp, Zap, Code2, Sparkles, Rocket, Shield, Upload, TabletSmartphone, Database, CreditCard, Palette, Globe, MessageSquare, Brain, Cpu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    website: "",
    firstName: "",
    lastName: "",
    role: ""
  })

  const splideRef = useRef(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRoleChange = (value: string) => {
    setFormData({ ...formData, role: value })
  }

  const handleNext = () => {
    if (step < 2) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
    setIsModalOpen(false)
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-900 px-4 py-24">
      <div className="absolute inset-0 bg-[url('/svgs/bg-pattern.svg')] bg-no-repeat bg-center bg-cover z-0" />
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
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 text-white p-6 rounded-lg w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Join Waitlist</h2>
                <Button variant="ghost" size="icon" onClick={closeModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="border-gray-600 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:border-fuchsia-500 focus:ring-fuchsia-500"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website" className="text-sm font-medium text-gray-300">App Idea</Label>
                        <Input
                          id="website"
                          name="website"
                          required
                          className="border-gray-600 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:border-fuchsia-500 focus:ring-fuchsia-500"
                          placeholder="What is your Idea?"
                          value={formData.website}
                          onChange={handleInputChange}
                        />
                      </div>
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="border-gray-600 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:border-fuchsia-500 focus:ring-fuchsia-500"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          className="border-gray-600 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:border-fuchsia-500 focus:ring-fuchsia-500"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role" className="text-sm font-medium text-gray-300">Role within Company</Label>
                        <Select onValueChange={handleRoleChange} value={formData.role}>
                          <SelectTrigger className="border-gray-600 bg-gray-700/50 text-gray-100 focus:border-fuchsia-500 focus:ring-fuchsia-500">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="designer">Designer</SelectItem>
                            <SelectItem value="product-manager">Product Manager</SelectItem>
                            <SelectItem value="executive">Executive</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 text-center"
                    >
                      <h3 className="text-2xl font-semibold text-gray-100">Thank you for joining!</h3>
                      <p className="text-gray-300">Welcome to Aura, {formData.firstName}. We'll be in touch soon.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                {step < 3 && (
                  <div className="mt-6 flex justify-between">
                    {step > 1 && (
                      <Button type="button" onClick={handlePrevious} variant="outline" className="border-gray-600 bg-gray-700/50 text-gray-300 hover:bg-gray-600/50">
                        Back
                      </Button>
                    )}
                    <Button
                      type="button"
                      onClick={step === 2 ? handleSubmit : handleNext}
                      className="ml-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600"
                    >
                      {step === 2 ? "Submit" : "Next"}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </form>
              {step < 4 && (
                <div className="mt-4 flex items-center justify-center space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className={`h-2 w-2 rounded-full ${step >= i ? "bg-fuchsia-500" : "bg-gray-600"}`}
                      initial={false}
                      animate={{
                        scale: step >= i ? 1.2 : 1,
                        opacity: step >= i ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}