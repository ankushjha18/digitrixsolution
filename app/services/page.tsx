"use client"

 import { Header } from "@/components/header"
 import { VideoStrip } from "@/components/video-strip"
 import ServicesHero from "./serviceshero"
import { Footer } from "@/components/footer"
import ServicesSection from "./ourservices"
import ProcessSection from "./ourprocess"
import Services2Section from "./cta"

export default function AboutPage() {
  
  return (
    <main className="min-h-screen">
     <Header />

      <ServicesHero />

      <VideoStrip />

      <ServicesSection />

      <ProcessSection />
      
      <Services2Section />
     

      <Footer />


    </main>
  )
}
