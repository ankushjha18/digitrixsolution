"use client";

import { useState, useEffect } from "react";

export default function DigitrixAboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);

    // Auto-cycle through services
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 5);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const services = [
    { 
      name: "Web Development", 
      icon: "💻", 
      color: "from-blue-500 to-cyan-500",
      description: "Custom websites & web apps"
    },
    { 
      name: "Digital Marketing", 
      icon: "📈", 
      color: "from-green-500 to-emerald-500",
      description: "Growth-driven strategies"
    },
    { 
      name: "SEO Optimization", 
      icon: "🔍", 
      color: "from-purple-500 to-pink-500",
      description: "Search engine dominance"
    },
    { 
      name: "UI/UX Design", 
      icon: "🎨", 
      color: "from-orange-500 to-red-500",
      description: "Beautiful user experiences"
    },
    { 
      name: "Mobile Apps", 
      icon: "📱", 
      color: "from-indigo-500 to-blue-500",
      description: "iOS & Android solutions"
    },
  ];

  const floatingElements = [
    { icon: "⚡", delay: "0s", duration: "6s" },
    { icon: "🚀", delay: "1s", duration: "7s" },
    { icon: "💡", delay: "2s", duration: "5s" },
    { icon: "🎯", delay: "3s", duration: "8s" },
    { icon: "✨", delay: "1.5s", duration: "6.5s" },
    { icon: "🔥", delay: "2.5s", duration: "7.5s" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden flex items-center py-20">
      {/* Dynamic Background Effects */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px, rgba(59,130,246,0.03), transparent 40%),
            radial-gradient(circle at ${100 - mousePosition.x * 0.3}px ${100 - mousePosition.y * 0.3}px, rgba(147,51,234,0.03), transparent 40%)
          `,
        }}
      />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((el, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-10 animate-pulse"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
              animationDelay: el.delay,
              animationDuration: el.duration,
              transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 20}px)`,
            }}
          >
            {el.icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <div className={`space-y-10 transform transition-all duration-1200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          
          {/* Header with Animated Underline */}
          <div className="relative">
            <h2 className="text-6xl lg:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent relative">
                Digitrix
                <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse" 
                     style={{ width: isVisible ? '100%' : '0%', transition: 'width 1.5s ease-out delay-0.5s' }} />
              </span>
            </h2>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
              Solutions ✨
            </div>
          </div>

          {/* Main Description */}
          <div className="space-y-6">
            <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed font-light">
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digitrix Solutions
              </span>{" "}
              is a full-service digital agency focused on helping businesses{" "}
              <span className="relative font-semibold text-emerald-600">
                succeed online
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 animate-pulse" />
              </span>.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              We specialize in{" "}
              <span className="font-semibold text-blue-600">web development</span>,{" "}
              <span className="font-semibold text-green-600">digital marketing</span>,{" "}
              <span className="font-semibold text-purple-600">SEO</span>,{" "}
              <span className="font-semibold text-orange-600">UI/UX design</span>, and{" "}
              <span className="font-semibold text-indigo-600">mobile app solutions</span>.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              With a team of{" "}
              <span className="font-bold text-slate-800">creative and skilled professionals</span>, 
              we deliver tailored strategies that{" "}
              <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                drive growth
              </span>,{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                enhance brand presence
              </span>, and create{" "}
              <span className="font-bold text-amber-600">lasting impact</span> for our clients.
            </p>
          </div>

          {/* Interactive Services Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            {services.map((service, i) => (
              <div
                key={i}
                className={`group px-6 py-3 rounded-full cursor-pointer transition-all duration-500 hover:scale-110 hover:-translate-y-1
                           ${activeService === i 
                             ? `bg-gradient-to-r ${service.color} text-white shadow-xl transform scale-105` 
                             : 'bg-white/80 text-slate-700 hover:bg-white border border-slate-200 hover:border-slate-300'
                           }`}
                onMouseEnter={() => setActiveService(i)}
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${i * 100 + 800}ms`
                }}
              >
                <span className="text-lg mr-2">{service.icon}</span>
                <span className="font-semibold">{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual Section */}
        <div className={`relative flex justify-center items-center transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          
          {/* Central Hub */}
          <div className="relative">
            {/* Main Central Circle */}
            <div className="w-48 h-48 bg-gradient-to-br from-white to-blue-50 rounded-full shadow-2xl border border-slate-200 flex items-center justify-center relative overflow-hidden group cursor-pointer">
              
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin" 
                   style={{ animation: 'spin 8s linear infinite' }} />
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white to-blue-50" />
              
              {/* Center Content */}
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  🏢
                </div>
                <div className="font-bold text-slate-800 text-lg">Digitrix</div>
                <div className="text-sm text-slate-600">Solutions</div>
              </div>

              {/* Pulsing Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-30" />
            </div>

            {/* Orbiting Service Icons */}
            {services.map((service, i) => {
              const angle = (i * 72) - 90; // 360/5 = 72 degrees apart
              const radius = 140;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div
                  key={i}
                  className={`absolute w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-125 hover:z-20
                             ${activeService === i 
                               ? `bg-gradient-to-r ${service.color} text-white shadow-xl scale-110` 
                               : 'bg-white text-slate-700 shadow-lg hover:shadow-xl border border-slate-200'
                             }`}
                  style={{
                    left: `calc(50% + ${x}px - 2rem)`,
                    top: `calc(50% + ${y}px - 2rem)`,
                    transform: `rotate(${scrollY * 0.2}deg)`,
                    animation: `orbit-${i} 20s linear infinite`,
                  }}
                  onMouseEnter={() => setActiveService(i)}
                >
                  <span className="text-2xl">{service.icon}</span>
                  
                  {/* Connection Line */}
                  <div
                    className={`absolute w-px bg-gradient-to-r ${service.color} opacity-30 transition-opacity duration-500
                               ${activeService === i ? 'opacity-60' : 'opacity-20'}`}
                    style={{
                      height: `${radius - 32}px`,
                      transform: `rotate(${-angle + 90}deg)`,
                      transformOrigin: 'bottom center',
                      left: '50%',
                      top: '100%',
                    }}
                  />
                </div>
              );
            })}

            {/* Service Description Popup */}
            <div className={`absolute top-full mt-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-slate-200 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="text-center">
                <div className="text-lg font-bold text-slate-800 mb-1">
                  {services[activeService]?.name}
                </div>
                <div className="text-sm text-slate-600">
                  {services[activeService]?.description}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Achievement Badges */}
          <div className="absolute -top-8 -left-8 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce" 
               style={{ animationDelay: '1s' }}>
            Full-Service 🌟
          </div>
          
          <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce" 
               style={{ animationDelay: '2s' }}>
            Tailored Solutions 🎯
          </div>
        </div>
      </div>

      {/* Custom CSS for orbiting animation */}
      <style jsx>{`
        @keyframes orbit-0 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbit-1 { from { transform: rotate(72deg); } to { transform: rotate(432deg); } }
        @keyframes orbit-2 { from { transform: rotate(144deg); } to { transform: rotate(504deg); } }
        @keyframes orbit-3 { from { transform: rotate(216deg); } to { transform: rotate(576deg); } }
        @keyframes orbit-4 { from { transform: rotate(288deg); } to { transform: rotate(648deg); } }
      `}</style>
    </section>
  );
}