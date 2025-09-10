import { useState, useEffect } from "react"
import { ArrowRight, Code, Palette, Smartphone, Globe, Award, TrendingUp } from "lucide-react"

export default function PortfolioHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e:MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { icon: Code, value: "50+", label: "Projects Completed" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: TrendingUp, value: "300%", label: "Client Growth" },
  ]

  const techIcons = [
    { name: "React", position: { top: "20%", left: "15%" }, delay: 0 },
    { name: "Node.js", position: { top: "30%", right: "20%" }, delay: 0.5 },
    { name: "MongoDB", position: { top: "60%", left: "10%" }, delay: 1 },
    { name: "Next.js", position: { top: "70%", right: "15%" }, delay: 1.5 },
    { name: "TypeScript", position: { top: "40%", right: "35%" }, delay: 2 },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated Background Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74, 164, 224, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74, 164, 224, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float-slow opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Tech Icons Floating */}
      {techIcons.map((tech, index) => (
        <div
          key={tech.name}
          className={`absolute w-12 h-12 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-xl flex items-center justify-center text-primary font-mono text-xs font-bold transition-all duration-300 hover:scale-125 hover:bg-primary/20 hover:border-primary/40 animate-float-slower ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            ...tech.position,
            animationDelay: `${tech.delay}s`,
            transitionDelay: `${tech.delay}s`
          }}
        >
          {tech.name.slice(0, 2)}
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary font-medium">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for new projects
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Crafting
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-pulse">
                  {" "}Digital
                </span>
                <br />
                Experiences
              </h1>
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                Full-stack developer & UI/UX designer creating innovative solutions that drive business growth and user engagement.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={stat.label}
                    className={`text-center group cursor-pointer transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`} style={{ transitionDelay: '0.6s' }}>
              <a href="#projects">
              <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </a>
              <a href="/contact#contact-form">
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                Get In Touch
              </button>
              </a>
            </div>
          </div>

          {/* Right Content - Interactive Display */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '0.3s' }}>
            
            {/* Main Card */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group-hover:scale-105 transition-all duration-500">
                {/* Mock Browser */}
                <div className="bg-gray-900 rounded-2xl overflow-hidden">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="flex-1 text-center text-gray-400 text-sm font-mono">
                      portfolio.dev
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Latest Project</h3>
                        <p className="text-gray-400">E-commerce Platform</p>
                      </div>
                    </div>
                    
                    {/* Progress Bars */}
                    <div className="space-y-3">
                      {['Development', 'Design', 'Testing'].map((item, index) => (
                        <div key={item} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{item}</span>
                            <span className="text-primary">{90 + index * 5}%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: isVisible ? `${90 + index * 5}%` : '0%',
                                transitionDelay: `${1 + index * 0.2}s`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-2xl flex items-center justify-center animate-float-slow">
              <Palette className="w-8 h-8 text-accent" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-xl flex items-center justify-center animate-float-slower">
              <Smartphone className="w-6 h-6 text-secondary" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`} style={{ transitionDelay: '1s' }}>
        <div className="flex flex-col items-center gap-2" style={{ color: '#b4b4b4' }}>
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#b4b4b4' }}>
            <div className="w-1 h-3 rounded-full mt-2 animate-bounce" style={{ backgroundColor: '#4da4e0' }} />
          </div>
        </div>
      </div>
    </div>
  )
}