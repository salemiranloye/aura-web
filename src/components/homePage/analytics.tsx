"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, ChevronRight, BrainCircuit, Code, Zap, ArrowRight, Activity, Users, BarChart2, PieChart } from "lucide-react"
import { Bar, BarChart, Line, LineChart, PieChart as RechartsPieChart, Pie, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts"

export default function AnalyticsSection() {
    const lineChartData = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 550 },
        { name: 'Apr', value: 450 },
        { name: 'May', value: 600 },
    ]

    const barChartData = [
        { name: 'A', value: 400 },
        { name: 'B', value: 300 },
        { name: 'C', value: 200 },
        { name: 'D', value: 500 },
    ]

    const pieChartData = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ]

    const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d']

    const analyticsRef = useRef(null)
    const isInView = useInView(analyticsRef, { once: false, amount: 0.3 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [isInView, controls])

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section ref={analyticsRef} className="flex justify-center w-full py-16 md:py-24 lg:py-32 bg-gray-950">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={cardVariants}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Real-Time Analytics Tracking
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                        Monitor your AI application's performance with our advanced analytics dashboard. Get insights into user behavior, model performance, and system health in real-time.
                    </p>
                </motion.div>
                <div className="grid gap-8 sm:grid-cols-2">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={cardVariants}
                        className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="flex items-center mb-4">
                            <Users className="h-6 w-6 text-purple-400 mr-2" />
                            <h3 className="text-xl font-bold text-gray-100">User Activity</h3>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={lineChartData}>
                                <XAxis
                                    dataKey="name"
                                    stroke="#888888"
                                    tick={({ x, y, payload }) => (
                                        <g transform={`translate(${x},${y})`}>
                                            <text
                                                x={0}
                                                y={0}
                                                dy={16}
                                                textAnchor="middle"
                                                fill="#888888"
                                                className="transition-colors duration-300 hover:fill-purple-500"
                                            >
                                                {payload.value}
                                            </text>
                                        </g>
                                    )}
                                />
                                <YAxis stroke="#888888" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '0.5rem' }}
                                    itemStyle={{ color: '#e2e8f0' }}
                                    labelStyle={{ color: '#8884d8' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                    dot={{ fill: '#8884d8' }}
                                    activeDot={{ r: 8, fill: '#8884d8' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={cardVariants}
                        className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="flex items-center mb-4">
                            <BarChart2 className="h-6 w-6 text-purple-400 mr-2" />
                            <h3 className="text-xl font-bold text-gray-100">Model Performance</h3>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={barChartData}>
                                <XAxis dataKey="name" stroke="#888888" />
                                <YAxis stroke="#888888" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '0.5rem' }}
                                    itemStyle={{ color: '#e2e8f0' }}
                                    labelStyle={{ color: '#8884d8' }}
                                />
                                <Bar
                                    dataKey="value"
                                    fill="#8884d8"
                                    radius={[4, 4, 0, 0]}
                                    className="transition-all duration-300 hover:fill-purple-500"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={cardVariants}
                        className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="flex items-center mb-4">
                            <PieChart className="h-6 w-6 text-purple-400 mr-2" />
                            <h3 className="text-xl font-bold text-gray-100">Resource Allocation</h3>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                            <RechartsPieChart>
                                <Pie
                                    data={pieChartData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label
                                >
                                    {pieChartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                            className="transition-all duration-300 hover:opacity-80"
                                        />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '0.5rem' }}
                                    itemStyle={{ color: '#e2e8f0' }}
                                />
                            </RechartsPieChart>
                        </ResponsiveContainer>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={cardVariants}
                        className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="flex items-center mb-4">
                            <Activity className="h-6 w-6 text-purple-400 mr-2" />
                            <h3 className="text-xl font-bold text-gray-100">System Health</h3>
                        </div>
                        <div className="flex items-center justify-center h-[200px]">
                            <div className="relative w-40 h-40">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        className="text-gray-700"
                                        strokeWidth="10"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="45"
                                        cx="50"
                                        cy="50"
                                    />
                                    <circle
                                        className="text-purple-500 transition-all duration-1000 ease-in-out"
                                        strokeWidth="10"
                                        strokeDasharray={2 * Math.PI * 45}
                                        strokeDashoffset={(2 * Math.PI * 45) * (1 - 0.999)}
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="45"
                                        cx="50"
                                        cy="50"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl font-bold text-gray-100">99.9%</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}