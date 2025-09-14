"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import PopupForm from "@/components/popup_form"

import {
  Code,
  Smartphone,
  Search,
  PenTool,
  Check,
  ArrowRight,
  ExternalLink,
  Star,
  Zap,
  Shield,
  Globe,
  Sparkles
} from "lucide-react"

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0)
  const [hoveredPricing, setHoveredPricing] = useState<number|null>(null)

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Secure & Scalable"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native Performance", "Cross-Platform", "App Store Ready", "Push Notifications"]
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that convert visitors to customers",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      features: ["SEO Strategy", "Social Media", "Content Marketing", "Analytics"]
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: ["Basic Website", "Mobile Responsive", "5 Pages", "Contact Form", "Basic SEO"],
      popular: false,
      color: "primary"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: ["Advanced Website", "E-commerce Ready", "15 Pages", "CMS Integration", "Advanced SEO", "Analytics Dashboard"],
      popular: true,
      color: "secondary"
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large-scale operations",
      features: ["Custom Development", "Unlimited Pages", "API Integration", "24/7 Support", "Performance Optimization", "Security Monitoring"],
      popular: false,
      color: "accent"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [services.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Services Section }
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-float-slow">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              What We Do Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We craft digital experiences that drive results and help your business thrive in the digital world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group relative overflow-hidden border-0 bg-gradient-to-br from-card via-card to-muted/10 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer will-transform ${
                  activeService === index ? 'ring-2 ring-primary/50 shadow-xl shadow-primary/20' : ''
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-500 will-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-20 group-hover:scale-125 group-hover:opacity-30 transition-all duration-700 will-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="group-hover:text-foreground transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-float-slower">
            <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
              Pricing Plans
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Start small and scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 transition-all duration-700 hover:scale-105 cursor-pointer will-transform ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-secondary via-secondary/90 to-primary shadow-2xl shadow-secondary/20 ring-2 ring-secondary/20' 
                    : 'bg-gradient-to-br from-card via-card to-muted/10 hover:shadow-2xl hover:shadow-primary/10'
                }`}
                onMouseEnter={() => setHoveredPricing(index)}
                onMouseLeave={() => setHoveredPricing(null)}
              >
                {plan.popular && (
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1 font-semibold">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className={`p-8 lg:p-10 relative z-10 ${plan.popular ? 'text-white' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'group-hover:text-primary'} transition-colors duration-300`}>
                      {plan.name}
                    </h3>
                    <p className={`${plan.popular ? 'text-white/80' : 'text-muted-foreground'} mb-6`}>
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-primary'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ${plan.popular ? 'text-white/60' : 'text-muted-foreground'}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full ${plan.popular ? 'bg-white/20' : 'bg-primary/20'} flex items-center justify-center mr-3`}>
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                        </div>
                        <span className={`${plan.popular ? 'text-white/90' : 'text-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/pricing" passHref>
                  <Button 
                    className={`w-full group/btn transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-white text-secondary hover:bg-white/90 hover:scale-105' 
                        : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-float-slow">
            <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-semibold mb-4">Need something custom?</h3>
              <p className="text-muted-foreground mb-6">
                Every business is unique. Let's discuss your specific needs and create a tailored solution.
              </p>
              <Link href="/contact" passHref>
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 px-8 py-3"
              >
                <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Explore Custom Solutions
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl animate-float-slower" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-float-slow">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-8 group hover:scale-110 transition-transform duration-500 will-transform">
              <Sparkles className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Ready to Start Your 
              <br />
              <span className="inline-block animate-pulse">Digital Journey?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's transform your ideas into stunning digital experiences that captivate your audience and drive results
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <PopupForm
            trigger = {
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 will-transform"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            } />
              <Link href="/portfolio" passHref>
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-accent hover:border-accent hover:bg-accent/5 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <Shield className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View Portfolio
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-primary mr-2" />
                Free Consultation
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-primary mr-2" />
                30-Day Money Back Guarantee
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-primary mr-2" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-0 opacity-20 animate-float-slow will-transform">
          <Code className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-1/3 right-0 opacity-20 animate-float-slower will-transform">
          <Smartphone className="w-12 h-12 text-secondary" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-20 animate-float-slow will-transform">
          <PenTool className="w-12 h-12 text-accent" />
        </div>
      </section>
    </div>
  )
}