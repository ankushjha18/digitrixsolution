"use client"
import Image from "next/image"
import { Play } from "lucide-react"
import Reveal from "./anim/Reveal"

const items = [
  { src: "/modern-web-development.png", alt: "Modern web development" },
  { src: "/digital-marketing-ads.png", alt: "Digital marketing ads" },
  { src: "/seo-strategy.png", alt: "SEO strategy" },
  { src: "/clean-ui-mockups.png", alt: "Clean UI mockups" },
  { src: "/modern-ecommerce-website.png", alt: "Ecommerce website" },
  { src: "/mobile-app-landing-page.png", alt: "Mobile app landing" },
  { src: "/data-visualization-interface.png", alt: "Data visualization interface" },
  { src: "/saas-dashboard-clean-ui.png", alt: "SaaS dashboard UI" },
]

export function VideoStrip() {
  const track = [...items, ...items]
  return (
    <section aria-label="Showreel" className="relative py-6">
      <Reveal>
      <div className="marquee group overflow-hidden">
        <div className="marquee-track flex gap-4 pr-4">
          {track.map((it, i) => (
            <div
              key={i}
              className="relative h-28 w-48 flex-shrink-0 rounded-lg overflow-hidden border border-border bg-card group-hover:shadow-lg transition-shadow duration-300"
            >
              <Image src={it.src || "/placeholder.svg"} alt={it.alt} fill className="object-cover" sizes="192px" />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-9 w-9 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                  <Play size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  )
}
