import { useState, useEffect } from "react"
import { ArrowRight, Zap, Sparkles, Star, Users, TrendingUp, MessageCircle } from "lucide-react"
import PopupForm from "@/components/popup_form"
import Link from "next/link"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e : React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/10 py-20 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-accent/30 to-primary/30 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-conic from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '40s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-secondary rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary/60 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-accent/80 rounded-full animate-bounce" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Lightning Icon with Animation */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90'}`}>
          <div className="relative inline-flex items-center justify-center w-20 h-20 mx-auto mb-8 animate-popup">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-primary to-accent p-4 rounded-full">
              <Zap className="w-8 h-8 text-white animate-pulse" />
            </div>
            {/* Sparkle Effects */}
            <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-accent animate-spin" style={{animationDuration: '3s'}} />
            <Star className="absolute -bottom-1 -left-1 w-3 h-3 text-primary animate-pulse" style={{animationDelay: '1s'}} />
          </div>
        </div>

        {/* Main Heading */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent animate-gradient-x">
              Ready to Create Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent relative">
              Success Story?
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Join our portfolio of successful projects and let us help you achieve remarkable results for your business.
          </p>
        </div>

        {/* Stats Preview */}
        <div className={`flex flex-wrap justify-center gap-8 mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 animate-popup" style={{animationDelay: '800ms'}}>
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">50+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 animate-popup" style={{animationDelay: '900ms'}}>
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">300% Growth</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 animate-popup" style={{animationDelay: '1000ms'}}>
            <Star className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">5-Star Reviews</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Primary CTA Button */}
          <button
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 will-transform animate-popup"
            style={{animationDelay: '1100ms'}}
            onMouseMove={handleMouseMove}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer opacity-0 group-hover:opacity-100"></div>
            
            {/* Button content */}
            <PopupForm
            trigger = {
            <span className="relative flex items-center gap-3 z-10">
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
            } 
            />

            {/* Ripple effect on hover */}
            <div 
              className="absolute rounded-full bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping"
              style={{
                left: mousePosition.x - 50,
                top: mousePosition.y - 50,
                width: 100,
                height: 100,
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          </button>

          {/* Secondary CTA Button */}
          <button className="group relative px-8 py-4 border-2 border-border hover:border-primary rounded-full font-semibold text-lg text-foreground hover:text-primary transition-all duration-300 hover:scale-105 will-transform animate-popup overflow-hidden" style={{animationDelay: '1200ms'}}>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button content */}
            
            <Link href="/contact" className="relative flex items-center gap-3 z-10 group">
                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                Contact Us
            </Link >

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
          </button>
        </div>

        {/* Trust Indicators  }
        <div className={`mt-16 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for client logos - replace with actual logos  }
            <div className="w-24 h-12 bg-gradient-to-r from-muted/40 to-muted/60 rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-xs font-medium text-muted-foreground">Logo</span>
            </div>
            <div className="w-24 h-12 bg-gradient-to-r from-muted/50 to-muted/70 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '500ms'}}>
              <span className="text-xs font-medium text-muted-foreground">Logo</span>
            </div>
            <div className="w-24 h-12 bg-gradient-to-r from-muted/40 to-muted/60 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '1000ms'}}>
              <span className="text-xs font-medium text-muted-foreground">Logo</span>
            </div>
            <div className="w-24 h-12 bg-gradient-to-r from-muted/50 to-muted/70 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '1500ms'}}>
              <span className="text-xs font-medium text-muted-foreground">Logo</span>
            </div>
          </div>
        </div> */}
      </div> 

      {/* Additional floating elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-primary/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-accent/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
    </section>
  )
}