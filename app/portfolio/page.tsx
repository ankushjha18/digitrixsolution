"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight, Filter, Eye, Calendar, Users, TrendingUp, Award, Zap } from "lucide-react"
import { HeroOverlay } from "@/components/hero-overlay"
import { VideoStrip } from "@/components/video-strip"

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "design", name: "UI/UX Design" },
  ]

  const projects = [
    {
      id: 1,
      title: "TechFlow SaaS Platform",
      description: "A comprehensive project management platform with real-time collaboration features",
      category: "web",
      image: "/modern-saas-dashboard-interface-with-clean-design.png",
      technologies: ["React", "Node.js", "PostgreSQL", "WebSocket"],
      client: "TechFlow Inc.",
      year: "2024",
      results: ["40% increase in productivity", "500+ active users", "99.9% uptime"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "FitTracker Mobile App",
      description: "Cross-platform fitness tracking app with AI-powered workout recommendations",
      category: "mobile",
      image: "/modern-fitness-mobile-app-interface-design.png",
      technologies: ["React Native", "Firebase", "AI/ML", "Redux"],
      client: "FitLife Studios",
      year: "2024",
      results: ["10K+ downloads", "4.8 App Store rating", "85% user retention"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "EcoShop E-commerce",
      description: "Sustainable products marketplace with advanced filtering and recommendation engine",
      category: "ecommerce",
      image: "/modern-ecommerce-website-homepage-design.png",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      client: "EcoShop Ltd.",
      year: "2023",
      results: ["300% sales increase", "50K+ products", "2M+ page views"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "MedCare Patient Portal",
      description: "Healthcare management system with appointment scheduling and telemedicine features",
      category: "web",
      image: "/modern-healthcare-dashboard-interface-design.png",
      technologies: ["Vue.js", "Express.js", "MySQL", "WebRTC"],
      client: "MedCare Health",
      year: "2023",
      results: ["60% faster appointments", "1000+ patients", "HIPAA compliant"],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "CryptoWallet Mobile",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration",
      category: "mobile",
      image: "/modern-cryptocurrency-mobile-app-interface.png",
      technologies: ["Flutter", "Blockchain", "Web3", "Biometrics"],
      client: "CryptoVault",
      year: "2024",
      results: ["$2M+ transactions", "25K+ users", "Bank-level security"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "ArtSpace Gallery",
      description: "Digital art gallery with virtual exhibitions and NFT marketplace integration",
      category: "design",
      image: "/modern-art-gallery-website-design.png",
      technologies: ["React", "Three.js", "IPFS", "Smart Contracts"],
      client: "ArtSpace Gallery",
      year: "2023",
      results: ["500+ artworks", "50+ artists", "Virtual exhibitions"],
      link: "#",
      github: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const stats = [
    { number: "150+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "2M+", label: "Users Reached", icon: Eye },
    { number: "99%", label: "Client Satisfaction", icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div
              className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Our <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Explore our latest projects and see how we've helped businesses transform their digital presence with
                innovative solutions and stunning designs.
              </p>
            </div>
          </div>
          <HeroOverlay />
        </section>

        {/* Video-like Marquee */}
        <VideoStrip />

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className={`text-center transform transition-all duration-700 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className={`group hover:scale-105 transition-all duration-300 ${
                    activeFilter === category.id ? "" : "bg-transparent"
                  } transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  <span className="group-hover:scale-110 transition-transform duration-300">{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-background/50 backdrop-blur-sm transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="hover:scale-110 transition-transform duration-300"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="hover:scale-110 transition-transform duration-300"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {categories.find((cat) => cat.id === project.category)?.name}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-foreground mb-2">Client: {project.client}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-foreground mb-2">Key Results:</p>
                        <ul className="space-y-1">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                              <TrendingUp className="w-3 h-3 text-primary" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 group/btn hover:scale-105 transition-all duration-300">
                          <span className="group-hover/btn:scale-110 transition-transform duration-300">
                            View Project
                          </span>
                          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Join our portfolio of successful projects and let us help you achieve remarkable results for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">Start Your Project</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">Contact Us</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
