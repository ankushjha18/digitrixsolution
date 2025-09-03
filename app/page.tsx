import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { VideoStrip } from "@/components/video-strip"
import Reveal from "@/components/anim/Reveal"
import SupportTimeline from "@/components/work"
import WhyChooseUs from "@/components/why_choose_us"


export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Header />
      {/* Wrap hero to overlay moving elements */}
      <section className="relative">
        <HeroSection />
      </section>
      {/* Add video-like marquee strip of work previews */}
      <VideoStrip />
      <ServicesSection />
      <PortfolioSection />
      <SupportTimeline />
      <AboutSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  )
}

