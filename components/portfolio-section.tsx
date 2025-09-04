"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Reveal from "./anim/Reveal"

const projects = [
  {
    title: "Education Platform",
    description: "A modern education solution with advanced features and seamless user experience.",
    image: "/education.png",
    tags: ["Wordpress", "Html", "css", "UI/UX Design"],
    category: "Web Development",
    link: "https://codedgeacademy.com/",
  },
  {
    title: "Education Consultancy ",
    description: "Comprehensive website development and digital marketing strategy that increased conversions by 300%.",
    image: "/enagehub.png",
    tags: [ "Web Development", "SEO", "Content Marketing","Google Ads"],
    category: "Web Development",
    link: "https://engage-hub-one.vercel.app/"
  },
  {
    title: "Personal Portfolio",
    description: "Modern and responsive portfolio website designed to highlight work in web development and design .",
    image: "/portfolio.png",
    tags: ["React Native", "Node.js", "Responsive", "Modern"],
    category: "portfolio",
    link: "https://workforayush-portfolio.netlify.app/?fbclid=PAdGRzdgMmrNJleHRuA2FlbQIxMQABp_EBzts8vQrk1p1JeXPYBiNaBKW3cWiFQKXp68JRBeGoPR0_G4XekshIIepF_aem_AoefxL-ha8CLxTs7n1oeZg"
  },
  {
    title: "MICE Website",
    description: "Unleashing the power of teamwork through creative, high-energy activities. We design experiences that connect, motivate, and transform groups into winning teams.",
    image: "/miceteam.png",
    tags: ["Html", "Node.js", "Responsive", "Modern"],
    category: "MICE",
    link: "https://teambuilding.miceemporio.com/"
  },
  {
    title: "MICE Website",
    description: "Dynamic event company platform highlighting immersive team-building activities and corporate experiences that spark collaboration, motivation, and lasting connections.",
    image: "/micemain.png",
    tags: ["Html5", "css", "js","Responsive", "Modern"],
    category: "MICE Event Comapany",
    link: "https://miceemporio.com/"
  },
  {
    title: "Service Website",
    description: "24/7 expert website support platform offering quick fixes, maintenance, and optimization services to keep websites running smoothly and securely.",
    image: "/fastflix.png",
    tags: ["Wordpress", "css", "js","Responsive", "Html5", "Modern"],
    category: "Web Development",
    link: "https://fastfiks.com/"
  },
  
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-15 bg-background relative">
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
                      <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                        <Button size="sm" variant="outline" className="flex-1 w-full  justify-center text-white bg-[#723fa3] hover:bg-[#ff914d]" >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live
                        </Button>

                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
           <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
              {/* Solid Blue Button */}
              <a href="/portfolio" className="w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto rounded-full px-12 py-5 text-lg font-semibold text-white bg-blue-600 shadow-md
                            transition-all duration-300 ease-in-out
                            hover:bg-[#ff914d] hover:scale-105 hover:shadow-lg"
                >
                  Explore All Portfolio
                </Button>
              </a>

              {/* Outline Blue Button */}
              <a href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto rounded-full px-12 py-5 text-lg font-semibold text-blue-600 border-2 border-blue-600 bg-transparent shadow-md
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
