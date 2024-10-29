'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, X, AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/components/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

type FormData = {
  email: string
  appIdea: string
  firstName: string
  lastName: string
  role: string
}

type ValidationErrors = {
  [K in keyof FormData]?: string
}

export default function WaitlistModal({closeModal}: {closeModal: () => void}) {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    email: "",
    appIdea: "",
    firstName: "",
    lastName: "",
    role: ""
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }

  const handleRoleChange = (value: string) => {
    setFormData(prevData => ({ ...prevData, role: value }));
    setErrors(prevErrors => ({ ...prevErrors, role: "" }));
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: ValidationErrors = {}

    if (stepNumber === 1) {
      if (!formData.email) newErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
      if (!formData.appIdea) newErrors.appIdea = "App idea is required"
    } else if (stepNumber === 2) {
      if (!formData.firstName) newErrors.firstName = "First name is required"
      if (!formData.lastName) newErrors.lastName = "Last name is required"
      if (!formData.role) newErrors.role = "Role is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(2) || isSubmitting) return

    setIsSubmitting(true)
    
    try {
      const submitFormData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        submitFormData.append(key, value)
      })

      const res = await fetch(`/api/submitWaitlist`, {
        method: "POST",
        body: submitFormData
      })

      if (!res.ok) {
        throw new Error('Submission failed')
      }
      setStep(3)

      setTimeout(() => {
        closeModal()
      }, 2000)

    } catch (error) {
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div onClick={handleBackgroundClick} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg w-full max-w-md" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Join Waitlist</h2>
          <Button onClick={closeModal} variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <form onSubmit={step === 2 ? handleSubmit : handleNext} className="space-y-4">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <Step1
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
            )}
            {step === 2 && (
              <Step2
                formData={formData}
                handleInputChange={handleInputChange}
                handleRoleChange={handleRoleChange}
                errors={errors}
              />
            )}
            {step === 3 && (
              <Step3 firstName={formData.firstName} />
            )}
          </AnimatePresence>
          {step < 3 && (
            <div className="mt-6 flex justify-between">
              {step > 1 && (
                <Button 
                  type="button" 
                  onClick={handlePrevious} 
                  variant="outline" 
                  className="border-gray-600 bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                  disabled={isSubmitting}
                >
                  Back
                </Button>
              )}
              <Button
                type="submit"
                className="ml-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : step === 2 ? "Submit" : "Next"}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </form>
        {step < 3 && (
          <ProgressIndicator step={step} />
        )}
      </div>
    </div>
  )
}

function FormField({ label, id, name, type = "text", value, onChange, error, placeholder }: {
  label: string
  id: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  placeholder?: string
}) {
  const InputComponent = type === 'textarea' ? Textarea : Input

  return (
    <div className="space-y-2 relative">
      <Label htmlFor={id} className="text-sm font-medium text-gray-300">{label}</Label>
      <InputComponent
        id={id}
        name={name}
        className={`border-gray-600 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:border-fuchsia-500 focus:ring-fuchsia-500 ${error ? 'border-red-500' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute -bottom-6 left-0 text-xs text-red-400 flex items-center"
        >
          <AlertCircle className="w-3 h-3 mr-1" />
          {error}
        </motion.div>
      )}
    </div>
  )
}

function Step1({ formData, handleInputChange, errors }: { formData: FormData, handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, errors: ValidationErrors }) {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <FormField
        label="Email Address"
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        error={errors.email}
        placeholder="you@example.com"
      />
      <FormField
        label="App Idea"
        id="appIdea"
        name="appIdea"
        type="textarea"
        value={formData.appIdea}
        onChange={handleInputChange}
        error={errors.appIdea}
        placeholder="Describe your app idea in detail..."
      />
    </motion.div>
  )
}

function Step2({ formData, handleInputChange, handleRoleChange, errors }: { formData: FormData, handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleRoleChange: (value: string) => void, errors: ValidationErrors }) {
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <FormField
        label="First Name"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        error={errors.firstName}
        placeholder="John"
      />
      <FormField
        label="Last Name"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        error={errors.lastName}
        placeholder="Doe"
      />
      <div className="space-y-2 relative">
        <Label htmlFor="role" className="text-sm font-medium text-gray-300">Role within Company</Label>
        <Select onValueChange={handleRoleChange} value={formData.role || undefined}>
          <SelectTrigger className={`border-gray-600 bg-gray-700/50 text-gray-100 focus:border-fuchsia-500 focus:ring-fuchsia-500 ${errors.role ? 'border-red-500' : ''}`}>
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
        {errors.role && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -bottom-6 left-0 text-xs text-red-400 flex items-center"
          >
            <AlertCircle className="w-3 h-3 mr-1" />
            {errors.role}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

function Step3({ firstName }: { firstName: string }) {
  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 text-center"
    >
      <h3 className="text-2xl font-semibold text-gray-100">Thank you for joining!</h3>
      <p className="text-gray-300">Welcome to Aura, {firstName}. We'll be in touch soon.</p>
    </motion.div>
  )
}

function ProgressIndicator({ step }: { step: number }) {
  const progress = (step - 1) / 2 * 100;

  return (
    <div className="mt-6 flex justify-center">
      <div className="w-1/2 bg-gray-600 rounded-full h-2.5">
        <div
          className="bg-fuchsia-500 h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );

}