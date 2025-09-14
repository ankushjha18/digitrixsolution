"use client";
import { useState, useEffect } from "react";
import { Send, Phone, ArrowRight, Sparkles } from "lucide-react";
import { Header } from "@/components/header";
import WhyChooseMe from "./whychoseme";
import PricingPackages from "./price";
import OtherServices from "./OtherServices";
import { Footer } from "@/components/footer";
import FAQ from "./faqpricing";
import FinalCTA from "./finalcta";
import  TestimonialsSection  from "@/components/testimonials";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e : MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-20">
          <Header />
        </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #223fa3 0%, #4da400 50%, #ff91ad 100%)',
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.8s ease-out',
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full opacity-8 blur-2xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #223fa3 0%, transparent 70%)',
            right: `${(100 - mousePosition.x) * 0.03}%`,
            bottom: `${(100 - mousePosition.y) * 0.03}%`,
            animationDelay: '1s',
            transition: 'all 1s ease-out',
          }}
        />
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 63, 163, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 63, 163, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#ff914d] animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Premium Value Packages</span>
          </div>

          {/* Main Headline */}
          <h1 
            className={`text-5xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Invest in Your{' '}
            <span 
              className="relative inline-block group cursor-default"
            >
              <span 
                className="bg-gradient-to-r from-[#723fa3] via-[#4da4e0] to-[#ff914d] bg-clip-text text-transparent animate-pulse"
              >
                Vision
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#723fa3]/20 via-[#4da4e0]/20 to-[#ff914d]/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </span>,
            <br />
            Not Just a Service
          </h1>

          {/* Sub-headline */}
          <p 
            className={`text-xl lg:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Transparent packages designed for{' '}
            <span className="text-[#723fa3] font-semibold">startups & small businesses</span>{' '}
            to achieve{' '}
            <span className="text-[#4da400] font-semibold">a stunning online presence</span>{' '}
            and{' '}
            <span className="text-[#ff914d] font-semibold">high-converting results</span>
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#723fa3] to-[#4da4e0] text-white font-semibold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4da4e0] to-[#ff914d] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2">
                <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>View Our Packages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>

            <button className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-[#ff914d]/30 hover:border-[#ff914d]/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                <span>Schedule Consultation</span>
              </div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div 
            className={`mt-16 flex flex-wrap justify-center items-center gap-8 text-white/40 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-2 hover:text-white/60 transition-colors duration-300">
              <div className="w-2 h-2 bg-[#4da400] rounded-full animate-pulse" />
              <span className="text-sm">100+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white/60 transition-colors duration-300">
              <div className="w-2 h-2 bg-[#ff914d] rounded-full animate-pulse" />
              <span className="text-sm">98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white/60 transition-colors duration-300">
              <div className="w-2 h-2 bg-[#723fa3] rounded-full animate-pulse" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-[#4da4e0]/30 rounded-full animate-spin-slow opacity-50" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-[#723fa3]/30 rounded-full animate-pulse opacity-50" />
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
     
    </div>
    <WhyChooseMe/>

    <PricingPackages />

    <OtherServices />

    <TestimonialsSection />

    <FAQ />

    <FinalCTA />



    <Footer />

    </section>
    
  );
}