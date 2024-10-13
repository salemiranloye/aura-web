"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, ChevronRight, BrainCircuit, Code, Zap, ArrowRight } from "lucide-react"

export function AuraOnboarding() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    website: "",
    firstName: "",
    lastName: "",
    role: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRoleChange = (value: string) => {
    setFormData({ ...formData, role: value })
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(4)
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-900 text-gray-200">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <a className="flex items-center justify-center" href="#">
          <Sparkles className="h-8 w-8 text-purple-500" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Aura
          </span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#">
            Pricing
          </a>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl space-y-8 text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Welcome to Aura
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Build your application with ease. Where your Ideas come to life.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md mt-12 space-y-8"
        >
          <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl border border-neutral-200 border-gray-800 dark:border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-gray-800 border-gray-700 text-gray-100 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-sm font-medium text-gray-300">Website Link</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      required
                      className="bg-gray-800 border-gray-700 text-gray-100 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="bg-gray-800 border-gray-700 text-gray-100 focus:ring-purple-500 focus:border-purple-500"
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
                      className="bg-gray-800 border-gray-700 text-gray-100 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-medium text-gray-300">Role within Company</Label>
                    <Select onValueChange={handleRoleChange} value={formData.role}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-100 focus:ring-purple-500 focus:border-purple-500">
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
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4 text-center"
                >
                  <h3 className="text-2xl font-semibold text-gray-100">Thank you for onboarding!</h3>
                  <p className="text-gray-400">Welcome to Aura, {formData.firstName}. Your AI journey begins now.</p>
                </motion.div>
              )}
              {step < 4 && (
                <div className="flex justify-between mt-6">
                  {step > 1 && (
                    <Button type="button" onClick={handlePrevious} variant="outline" className="border-gray-700 text-gray-300 hover:bg-white hover:text-black bg-gray-900">
                      Back
                    </Button>
                  )}
                  <Button type="button" onClick={step === 3 ? handleSubmit : handleNext} className="ml-auto bg-purple-600 text-white hover:bg-purple-700">
                    {step === 3 ? "Submit" : "Next"}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </form>
          </div>
          {step < 4 && (
            <div className="flex items-center justify-center space-x-2 mt-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className={`h-2 w-2 rounded-full ${step >= i ? "'bg-purple-500'" : "'bg-gray-700'"}`}
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
      </main>
      <section className="flex justify-center w-full py-16 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Key Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BrainCircuit, title: "AI Model Integration", description: "Seamlessly integrate various AI models into your application." },
              { icon: Code, title: "Intuitive Development", description: "User-friendly interface for coding and model training." },
              { icon: Zap, title: "Rapid Deployment", description: "Deploy your AI applications quickly and efficiently." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-300" />
                <div className="relative p-6 bg-gray-800 rounded-2xl border border-neutral-200 border-gray-700 hover:border-purple-500 transition duration-300 dark:border-neutral-800">
                  <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                  <ArrowRight className="h-5 w-5 text-purple-400 mt-4 group-hover:translate-x-1 transition duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-500">© 2024 Aura. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-purple-400 transition-colors" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-purple-400 transition-colors" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}