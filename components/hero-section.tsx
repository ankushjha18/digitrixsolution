"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import GlobeBackground from "@/components/ui/earth-globe"


export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fullscreen Globe Background */}
      <div className="absolute inset-0 -z-20">
        <GlobeBackground />
      </div>

      {/* Hero content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-primary mr-3 animate-pulse" />
              <span className="text-primary font-semibold text-lg">
                Premium Digital Solutions
              </span>
              <Sparkles className="h-8 w-8 text-primary ml-3 animate-pulse" />
            </div>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-white text-center ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Transform Your Digital Presence with{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse">
              Expert Solutions
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            We craft stunning websites and powerful digital marketing strategies
            that drive growth, engage audiences, and deliver measurable results
            for your business.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-3 group hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg text-white px-8 py-3 bg-transparent group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative shapes (optional, behind text but above globe) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-ping"></div>
      </div>
    </section>
  )
}
