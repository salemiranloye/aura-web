"use client"

import { useState, useEffect, useCallback } from "react"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import WaitlistModal from "@/components/Modals/WaitlistModal"

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

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
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="flex items-center justify-center px-4 py-2">
          <nav className="relative flex py-3 w-full max-w-2xl items-center justify-between">
            {/* Background gradient container */}
            <div className="absolute inset-0 rounded-lg">
              <div className="absolute inset-0 rounded-lg bg-gray-900" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
              <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.3)]" />
            </div>

            {/* Content container with higher z-index */}
            <div className="relative z-10 flex w-full items-center justify-between px-6">
              <a className="flex items-center" href="#">
                <Sparkles className="h-6 w-6 text-purple-400" />
                <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Aura
                </span>
              </a>
              <div className="flex items-center space-x-4">
                <button
                  onClick={openModal}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-sm font-medium text-white",
                    "bg-gradient-to-r from-purple-500 to-pink-500",
                    "hover:from-purple-600 hover:to-pink-600",
                    "transition-all duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  )}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {isModalOpen && <WaitlistModal closeModal={closeModal}/>}
    </>
  )
}