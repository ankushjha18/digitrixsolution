"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Lightbulb, ArrowRight, CheckCircle } from "lucide-react"
import { VideoStrip } from "@/components/video-strip"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "150+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Target },
    { number: "24/7", label: "Support Available", icon: Lightbulb },
  ]

  const values = [
    {
      title: "Innovation First",
      description:
        "We stay ahead of digital trends to deliver cutting-edge solutions that give your business a competitive edge.",
      icon: Lightbulb,
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We work closely with you to understand your goals and exceed expectations.",
      icon: Users,
    },
    {
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in every project, ensuring robust, scalable, and beautiful digital solutions.",
      icon: Award,
    },
    {
      title: "Results-Driven",
      description:
        "Every strategy we implement is designed to deliver measurable results and drive your business growth.",
      icon: Target,
    },
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "/professional-ceo-headshot.png",
      bio: "10+ years in digital strategy and business development",
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "/professional-female-developer-headshot.png",
      bio: "Full-stack expert with passion for clean, efficient code",
    },
    {
      name: "Mike Rodriguez",
      role: "Creative Director",
      image: "/professional-male-designer.png",
      bio: "Award-winning designer with eye for stunning visuals",
    },
    {
      name: "Emma Thompson",
      role: "Marketing Strategist",
      image: "/professional-female-marketing-expert-headshot.png",
      bio: "Data-driven marketer focused on ROI and growth",
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
                About <span className="text-primary">DigitalCraft</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                We're a passionate team of digital innovators, dedicated to transforming businesses through cutting-edge
                web development and strategic digital marketing solutions.
              </p>
            </div>
          </div>
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

        {/* Our Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Founded in 2019, DigitalCraft emerged from a simple belief: every business deserves a powerful digital
                  presence that drives real results. What started as a small team of passionate developers and marketers
                  has grown into a full-service digital agency.
                </p>
                <p className="text-muted-foreground mb-8 text-pretty">
                  Today, we've helped over 150 businesses transform their digital landscape, from startups finding their
                  voice to established companies scaling new heights. Our approach combines technical excellence with
                  creative innovation, ensuring every project we touch becomes a catalyst for growth.
                </p>
                <div className="space-y-3">
                  {[
                    "Custom Web Development",
                    "Strategic Digital Marketing",
                    "User Experience Design",
                    "Performance Optimization",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <img
                  src="/modern-digital-agency-office-workspace-with-comput.png"
                  alt="DigitalCraft Office"
                  className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                The principles that guide everything we do and shape how we serve our clients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card
                    key={value.title}
                    className={`group hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-background/50 backdrop-blur-sm transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                          <p className="text-muted-foreground text-pretty">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                The creative minds and technical experts behind your digital success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={member.name}
                  className={`group hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-background/50 backdrop-blur-sm transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground text-pretty">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Let's discuss how we can help transform your business with our expertise and passion.
            </p>
            <Button
              size="lg"
              className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">Get In Touch</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
