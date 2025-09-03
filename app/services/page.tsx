"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Smartphone,
  Search,
  PenTool,
  BarChart3,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Palette,
  TrendingUp,
} from "lucide-react"
import { VideoStrip } from "@/components/video-strip"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      features: ["React & Next.js", "Full-Stack Development", "API Integration", "Performance Optimization"],
      price: "Starting at $2,999",
      image: "/images/web-development.png",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "iOS & Android", "App Store Deployment", "Push Notifications"],
      price: "Starting at $4,999",
      image: "/images/mobile-app.png",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic to your website",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
      price: "Starting at $899/month",
      image: "/images/seo-optimization.png",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,999",
      image: "/images/ui-ux-design.png",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      features: ["Social Media Marketing", "PPC Advertising", "Email Marketing", "Content Marketing"],
      price: "Starting at $1,299/month",
      image: "/images/digital-marketing.png",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing and inventory management",
      features: ["Shopify Development", "WooCommerce", "Payment Integration", "Inventory Management"],
      price: "Starting at $3,999",
      image: "/images/analytics.png",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and project requirements.",
      icon: Globe,
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team creates detailed wireframes, designs, and project roadmaps for your approval.",
      icon: Palette,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using best practices, with rigorous testing at every stage.",
      icon: Code,
    },
    {
      step: "04",
      title: "Launch & Growth",
      description: "We deploy your project and provide ongoing support to ensure continued success.",
      icon: TrendingUp,
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile optimization",
        "Basic SEO setup",
        "Contact form integration",
        "3 months support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Custom design & animations",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "6 months support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale projects",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced integrations",
        "Performance optimization",
        "Dedicated project manager",
        "12 months support",
      ],
      popular: false,
    },
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
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                From stunning websites to powerful marketing campaigns, we offer comprehensive digital solutions to help
                your business thrive in the digital landscape.
              </p>
            </div>
          </div>
        
        </section>

        {/* Video-like Marquee */}
        <VideoStrip />

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={service.title}
                    className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-background/50 backdrop-blur-sm transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-8">
                      <div className="relative mb-6">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                          className={`absolute top-4 left-4 p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-primary">{service.price}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                A proven methodology that ensures your project's success from concept to launch.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.step}
                    className={`text-center group transform transition-all duration-700 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-pretty">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Service Packages</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Choose the perfect package for your business needs and budget.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card
                  key={pkg.name}
                  className={`relative group hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                    pkg.popular ? "border-primary shadow-lg scale-105" : "border-border"
                  } transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                      <p className="text-muted-foreground text-pretty">{pkg.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full group hover:scale-105 transition-all duration-300 ${
                        pkg.popular ? "bg-primary hover:bg-primary/90" : ""
                      }`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {pkg.price === "Custom" ? "Contact Us" : "Get Started"}
                      </span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Let's discuss your project and create a custom solution that drives real results for your business.
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
                <span className="group-hover:scale-110 transition-transform duration-300">View Portfolio</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
