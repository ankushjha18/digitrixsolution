"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Reveal from "./anim/Reveal"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with advanced features and seamless user experience.",
    image: "/modern-ecommerce-interface.png",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    category: "Web Development",
  },
  {
    title: "SaaS Marketing Campaign",
    description: "Comprehensive digital marketing strategy that increased conversions by 300%.",
    image: "/digital-marketing-dashboard.png",
    tags: ["Google Ads", "SEO", "Content Marketing", "Analytics"],
    category: "Digital Marketing",
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application with biometric authentication.",
    image: "/mobile-banking-app.png",
    tags: ["React Native", "Node.js", "MongoDB", "Security"],
    category: "Mobile Development",
  },
  {
    title: "Restaurant Chain Website",
    description: "Multi-location restaurant website with online ordering and reservation system.",
    image: "/restaurant-website-with-online-ordering.png",
    tags: ["WordPress", "WooCommerce", "Local SEO", "Responsive"],
    category: "Web Development",
  },
  {
    title: "Tech Startup Branding",
    description: "Complete brand identity and digital presence for an AI startup company.",
    image: "/tech-startup-branding-and-website.png",
    tags: ["Branding", "UI/UX", "React", "Brand Strategy"],
    category: "Design & Branding",
  },
  {
    title: "Healthcare Platform",
    description: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers.",
    image: "/telemedicine-healthcare-platform-interface.png",
    tags: ["Vue.js", "HIPAA", "WebRTC", "Security"],
    category: "Web Development",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-15 bg-background">
      <Reveal>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Our Portfolio</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Explore our recent projects and see how we've helped businesses achieve their digital goals.
              </p>
            </div>
             <Reveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-[#ff914d] hover:bg-[#723fa3]" >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            {/* Solid Blue Button */}
            <a href="/portfolio">
              <Button
                className="rounded-full px-12 py-5 text-lg font-semibold text-white bg-blue-600 shadow-md
                          transition-all duration-300 ease-in-out
                          hover:bg-[#ff914d] hover:scale-105 hover:shadow-lg"
              >
                Explore All Portfolio
              </Button>
            </a>

            {/* Outline Blue Button */}
            <a href="/contact">
              <Button
                variant="outline"
                className="rounded-full px-12 py-5 text-lg font-semibold text-blue-600 border-2 border-blue-600 bg-transparent shadow-md
                          transition-all duration-300 ease-in-out
                          hover:bg-[#ff914d] hover:border-[#ff914d] hover:text-white hover:scale-105 hover:shadow-lg"
              >
                Discuss Your Project
              </Button>
            </a>
          </div>



      </Reveal>
    </section>
  )
}
