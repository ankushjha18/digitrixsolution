"use client";

import { useState, useEffect } from "react";
import PopupForm from "@/components/popup_form";

export default function DigitrixValuesSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);


  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('values-section');
    if (section) observer.observe(section);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Auto-cycle through values
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 6);
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      if (section) observer.unobserve(section);
    };
  }, []);

  const values = [
    {
      icon: "🎯",
      title: "Innovation Excellence",
      description: "We push boundaries with cutting-edge solutions that set new industry standards.",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "blue",
      detail: "Embracing emerging technologies to deliver breakthrough results"
    },
    {
      icon: "🤝",
      title: "Client Partnership",
      description: "Your success is our mission. We build lasting relationships through trust and results.",
      color: "from-green-500 to-emerald-500",
      bgGlow: "green",
      detail: "Collaborative approach ensuring your vision becomes reality"
    },
    {
      icon: "⚡",
      title: "Speed & Quality",
      description: "Lightning-fast delivery without compromising on excellence or attention to detail.",
      color: "from-purple-500 to-pink-500",
      bgGlow: "purple",
      detail: "Optimized workflows for rapid, high-quality project completion"
    },
    {
      icon: "🔒",
      title: "Data Security",
      description: "Enterprise-grade security protocols protecting your business and customer data.",
      color: "from-red-500 to-orange-500",
      bgGlow: "red",
      detail: "Bank-level encryption and compliance with industry standards"
    },
    {
      icon: "🌱",
      title: "Sustainable Growth",
      description: "Long-term strategies that scale with your business and adapt to market changes.",
      color: "from-teal-500 to-green-500",
      bgGlow: "teal",
      detail: "Future-proof solutions designed for continuous expansion"
    },
    {
      icon: "💡",
      title: "Creative Solutions",
      description: "Out-of-the-box thinking that transforms challenges into opportunities.",
      color: "from-indigo-500 to-purple-500",
      bgGlow: "indigo",
      detail: "Innovative approaches that differentiate your brand"
    }
  ];

  const floatingShapes = [
    { shape: "circle", size: "w-4 h-4", color: "bg-blue-400", delay: "0s" },
    { shape: "square", size: "w-3 h-3", color: "bg-purple-400", delay: "1s" },
    { shape: "triangle", size: "w-5 h-5", color: "bg-green-400", delay: "2s" },
    { shape: "circle", size: "w-2 h-2", color: "bg-pink-400", delay: "3s" },
    { shape: "square", size: "w-4 h-4", color: "bg-cyan-400", delay: "1.5s" },
    { shape: "circle", size: "w-3 h-3", color: "bg-indigo-400", delay: "2.5s" },
  ];

  return (
    <section 
      id="values-section"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20 overflow-hidden flex items-center py-20"
    >
      {/* Matching Background Effects */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x * 0.4}px ${mousePosition.y * 0.4}px, rgba(147,51,234,0.04), transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x * 0.2}px ${100 - mousePosition.y * 0.2}px, rgba(59,130,246,0.04), transparent 50%)
          `,
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape, i) => (
          <div
            key={i}
            className={`absolute ${shape.size} ${shape.color} opacity-10 animate-pulse ${
              shape.shape === 'circle' ? 'rounded-full' : 
              shape.shape === 'triangle' ? 'rotate-45' : ''
            }`}
            style={{
              left: `${15 + (i * 14)}%`,
              top: `${25 + (i * 11)}%`,
              animationDelay: shape.delay,
              animationDuration: `${4 + Math.random() * 2}s`,
              transform: `translateY(${Math.sin(scrollY * 0.008 + i) * 15}px) rotate(${scrollY * 0.1}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block">
            <h2 className="text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-slate-800 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            
            {/* Animated Underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-blue-400" 
                 style={{ width: isVisible ? '80%' : '0%', transition: 'width 1.5s ease-out delay-0.5s' }} />
            
            {/* Floating Accent */}
            <div className="absolute -top-6 -right-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
              Core Values ⭐
            </div>
          </div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mt-8">
            These fundamental principles guide everything we do, from client relationships to 
            <span className="font-semibold text-purple-600"> innovative solutions</span> that drive your success.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/60 
                         hover:border-slate-300 hover:shadow-2xl transition-all duration-700 cursor-pointer
                         hover:scale-105 hover:-translate-y-4 overflow-hidden
                         ${activeValue === i ? 'ring-2 ring-purple-400 shadow-xl scale-105' : ''}
                         ${hoveredCard === i ? 'z-20' : 'z-10'}`}
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${i * 150 + 600}ms`,
                boxShadow: hoveredCard === i ? `0 25px 50px rgba(147,51,234,0.15)` : '0 8px 25px rgba(0,0,0,0.08)'
              }}
              onMouseEnter={() => {
                setHoveredCard(i);
                setActiveValue(i);
              }}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Glowing Edge Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon with Animation */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-white shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {value.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Main Description */}
                <p className="text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                  {value.description}
                </p>

                {/* Expandable Detail */}
                <div className={`overflow-hidden transition-all duration-500 ${hoveredCard === i ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <p className="text-sm text-slate-500 italic">
                      {value.detail}
                    </p>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className={`absolute bottom-4 left-8 right-8 h-1 bg-slate-200 rounded-full overflow-hidden transition-opacity duration-300 ${hoveredCard === i ? 'opacity-100' : 'opacity-0'}`}>
                  <div className={`h-full bg-gradient-to-r ${value.color} animate-pulse`} 
                       style={{ width: hoveredCard === i ? '100%' : '0%', transition: 'width 0.8s ease-out' }} />
                </div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              {/* Corner Accent */}
              <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${value.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-20 transform transition-all duration-1200 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/60 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent mb-4">
              Ready to Experience Our Values in Action?
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Let's collaborate to bring your digital vision to life with our proven approach and unwavering commitment to excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            <PopupForm
            trigger = { 
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-700">
                Start Your Project 🚀
              </button>}
            />
            <a href="/pricing">
              <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-300 hover:bg-slate-50 hover:scale-105 hover:shadow-lg transition-all duration-300">
                Learn More 💡
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Matching Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}