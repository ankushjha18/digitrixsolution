"use client"

import AboutHeroSection from "./abouthero"
import { Header } from "@/components/header"
import { VideoStrip } from "@/components/video-strip"
import StatsSection from "../portfolio/statssection"
import OurStorySection from "./ourstorysection"
import SupportTimeline from "@/components/work"
import DigitrixAboutSection from "./aboutdigitrix"
import DigitrixValuesSection from "./ourvalues"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  
  return (
    <main className="min-h-screen">
     <Header />

      <AboutHeroSection />

      <VideoStrip />

      <StatsSection />
      <div className="pd-4">
      <OurStorySection />
      </div>
      <SupportTimeline />
      <div className="pt-4">
      <DigitrixAboutSection />
      </div>

      <DigitrixValuesSection />

      <Footer />


    </main>
  )
}
