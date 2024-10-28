"use client"

import { useState, useEffect, useCallback } from "react"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(true)

  const controlNavbar = useCallback(() => {
    if (typeof window === 'undefined') return

    const currentScrollY = window.scrollY
    const scrollingUp = currentScrollY < lastScrollY
    const scrollDelta = Math.abs(currentScrollY - lastScrollY)
  
    if (scrollDelta > 5) {
      if (scrollingUp && !isVisible) {
        setIsVisible(true)
      }
      setIsScrollingUp(scrollingUp)
    }

    setLastScrollY(currentScrollY)
  }, [lastScrollY, isVisible])

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout

    if (!isScrollingUp && isVisible && lastScrollY > 100) {
      hideTimeout = setTimeout(() => {
        setIsVisible(false)
      }, 50)
    }

    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout)
      }
    }
  }, [isScrollingUp, isVisible, lastScrollY])

  useEffect(() => {
    if (typeof window === 'undefined') return

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          controlNavbar()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [controlNavbar])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="flex items-center justify-center px-4 py-2">
        <nav className={cn(
          "relative flex py-3 w-full max-w-2xl items-center justify-between",
          "rounded-lg bg-gray-900 px-6",
          "before:absolute before:inset-0 before:rounded-lg",
          "before:bg-gradient-to-r before:from-purple-500/20 before:to-pink-500/20",
          "before:p-[1px] before:content-['']",
          "after:absolute after:inset-0 after:rounded-lg after:shadow-[0_0_15px_rgba(139,92,246,0.3)]",
          "after:content-['']"
        )}>
          <a className="flex items-center" href="#">
            <Sparkles className="h-6 w-6 text-purple-400" />
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Aura
            </span>
          </a>
          <div className="flex items-center space-x-4">
            <a className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors" href="#">
              Features
            </a>
            <a className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors" href="#">
              Pricing
            </a>
            <button className={cn(
              "relative overflow-hidden rounded-full px-4 py-1.5 text-sm font-medium text-white",
              "bg-gradient-to-r from-purple-500 to-pink-500",
              "transition-all hover:from-purple-600 hover:to-pink-600",
              "focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            )}>
              Learn More
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}