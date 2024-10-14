"use client"

import { motion } from "framer-motion"
import {BrainCircuit, Code, Zap, ArrowRight } from "lucide-react"

export default function KeyFeatures() {
  return (
    <section className="flex justify-center w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Key Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: BrainCircuit,
              title: "AI Model Integration",
              description:
                "Seamlessly integrate various AI models into your application.",
            },
            {
              icon: Code,
              title: "Intuitive Development",
              description:
                "User-friendly interface for coding and model training.",
            },
            {
              icon: Zap,
              title: "Rapid Deployment",
              description:
                "Deploy your AI applications quickly and efficiently.",
            },
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
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
                <ArrowRight className="h-5 w-5 text-purple-400 mt-4 group-hover:translate-x-1 transition duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
