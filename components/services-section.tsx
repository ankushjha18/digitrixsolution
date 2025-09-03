"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Megaphone, Smartphone, Search, Palette, BarChart } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Reveal from "./anim/Reveal"
import { ArrowRight, Play, Sparkles } from "lucide-react"


const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: ["React & Next.js", "E-commerce Solutions", "CMS Integration", "API Development"],
    color: "text-blue-600",
    image: "/images/web-development.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to boost your online presence and drive conversions.",
    features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "PPC Advertising"],
    color: "text-green-600",
    image: "/images/digital-marketing.png",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"],
    color: "text-purple-600",
    image: "/images/mobile-app.png",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search rankings and organic traffic with proven SEO strategies.",
    features: ["Keyword Research", "Technical SEO", "Content Optimization", "Local SEO"],
    color: "text-orange-600",
    image: "/images/seo-optimization.png",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "text-pink-600",
    image: "/images/ui-ux-design.png",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Data-driven insights to optimize your digital strategy and measure success.",
    features: ["Google Analytics", "Conversion Tracking", "Performance Reports", "A/B Testing"],
    color: "text-indigo-600",
    image: "/images/analytics.png",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
]

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-15 bg-background relative">
    <Reveal>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-primary">Premium</span> Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We offer a comprehensive suite of digital services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`w-[90%] sm:w-full mx-auto group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer ${
                hoveredCard === index ? "scale-105 -translate-y-2" : "hover:scale-105 hover:-translate-y-2"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
          
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative h-40 sm:h-48 min-h-[160px]  overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
             <Reveal delay={0.4}>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <service.icon
                        className={`h-6 w-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Reveal>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge
                      key={featureIndex}
                      variant="secondary"
                      className="text-xs group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300 hover:scale-105"
                    >
                      {feature}
                    </Badge>   
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                    <button className="px-6 py-2 rounded-lg bg-purple-600 text-white font-medium flex items-center transition-colors duration-300 hover:bg-orange-500">
                      Explore
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <button className="px-4 py-2 rounded-lg border border-purple-600 text-purple-600 font-medium transition-colors duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500">
                      Chat with Us
                    </button>
                </div>
              </CardContent>

              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/50 transition-all duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </Reveal>
    </section>
  )
}
