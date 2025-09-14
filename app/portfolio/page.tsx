"use client"

import { Header } from "@/components/header"
import PortfolioHero from "./portofoliohero"
import { VideoStrip } from "@/components/video-strip"
import Reveal from "@/components/anim/Reveal"
import StatsSection from "./statssection"
import ProjectSection from "./projectsection"
import { Footer } from "@/components/footer"
import  TestimonialsSection  from "@/components/testimonials"
import CTASection from "./ctasection"


export default function PortfolioPage() {

  return (
    <main className="min-h-screen">
      
    <Header />

    <PortfolioHero />

    <Reveal>
    <div className="pt-12">   {/* adjust value as needed (pt-8, pt-16, etc.) */}
      <VideoStrip />
    </div>
    </Reveal>

    <Reveal>
      <StatsSection />
    </Reveal>
     
     <Reveal>
    <ProjectSection />
    </Reveal>

    <Reveal>
    <TestimonialsSection />
    </Reveal>

    <Reveal>
      <CTASection />
    </Reveal>

    <Footer />

  </main>
  )
}
