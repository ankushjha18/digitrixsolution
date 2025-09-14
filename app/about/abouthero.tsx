"use client"

import { useState, useEffect } from 'react';

export default function AboutHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    { number: '150+', label: 'Projects Delivered', delay: '0.5s' },
    { number: '50+', label: 'Happy Clients', delay: '0.7s' },
    { number: '5+', label: 'Years Experience', delay: '0.9s' },
    { number: '24/7', label: 'Support', delay: '1.1s' }
  ];

  const features = [
    { icon: '⚡', title: 'Innovation First', description: 'Cutting-edge solutions' },
    { icon: '🎨', title: 'Design Excellence', description: 'Beautiful & functional' },
    { icon: '🚀', title: 'Fast Delivery', description: 'Quick turnaround time' },
    { icon: '🔒', title: 'Secure & Reliable', description: 'Enterprise-grade security' }
  ];

  return (
    <div className="dark">
      <section className="relative min-h-screen bg-card overflow-hidden">
        {/* Dynamic Background Layers */}
        <div className="absolute inset-0">
          {/* Animated mesh gradient */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(77, 164, 224, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(114, 63, 163, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 60% 20%, rgba(255, 145, 77, 0.1) 0%, transparent 50%)
              `,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          
          {/* Animated grid pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(77, 164, 224, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(77, 164, 224, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'grid-pan 20s linear infinite',
              transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs */}
          <div 
            className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl animate-float-slow will-transform"
            style={{ 
              top: '15%', 
              left: '5%',
              transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) translateY(${scrollY * 0.1}px)`
            }}
          />
          <div 
            className="absolute w-60 h-60 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 blur-2xl animate-float-slower will-transform"
            style={{ 
              top: '70%', 
              right: '10%',
              animationDelay: '3s',
              transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px) translateY(${scrollY * -0.05}px)`
            }}
          />
          
          {/* Geometric shapes */}
          <div 
            className="absolute top-20 right-20 w-16 h-16 border border-primary/30 rotate-45 animate-spin-slow"
            style={{ animationDuration: '15s' }}
          />
          <div 
            className="absolute bottom-32 left-16 w-12 h-12 bg-secondary/20 rounded-full animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <div 
            className="absolute top-1/2 left-10 w-8 h-8 bg-accent/30 transform rotate-45 animate-bounce"
            style={{ animationDelay: '1s' }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Enhanced Badge with animation */}
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-card/80 backdrop-blur-md mb-8 group hover:bg-primary/20 hover:border-primary/50 transition-all duration-700 cursor-pointer transform hover:scale-105">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-primary mr-3 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary animate-ping opacity-30" />
              </div>
              <span className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                Crafting Digital Excellence Since 2025
              </span>
            </div>

            {/* Main Title with enhanced animations */}
            <div className="space-y-6 mb-12">
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-none">
                <span 
                  className="inline-block bg-gradient-to-r from-card-foreground to-muted-foreground bg-clip-text text-transparent animate-[slideInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                >
                  We&nbsp;
                </span>
                <span 
                  className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-[slideInUp_1s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards] hover:animate-pulse cursor-default"
                >
                  Build&nbsp;
                </span>
                <span 
                  className="inline-block bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-[slideInUp_1s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]"
                >
                  Dreams
                </span>
              </h1>
              <h2 className="text-3xl lg:text-5xl font-bold text-muted-foreground animate-[slideInUp_1s_ease-out_0.9s] opacity-0 [animation-fill-mode:forwards]">
                Into Digital Reality
              </h2>
            </div>

            {/* Enhanced subtitle */}
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed animate-[fadeIn_1.2s_ease-out_1.2s] opacity-0 [animation-fill-mode:forwards]">
              We're not just developers – we're digital architects, experience designers, 
              and innovation catalysts transforming visions into powerful digital solutions.
            </p>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-[fadeIn_1.2s_ease-out_1.5s] opacity-0 [animation-fill-mode:forwards]">
              <button 
                className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 overflow-hidden transform-gpu"
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (mousePosition.x - rect.left - rect.width / 2) * 0.1;
                  const y = (mousePosition.y - rect.top - rect.height / 2) * 0.1;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }}
              >
                <a href='#ourstory'>
                <span className="relative z-10 flex items-center gap-2">
                  Our Story 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <button 
                className="group relative px-10 py-5 border-2 border-border bg-card/50 backdrop-blur-md text-card-foreground rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-110 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary overflow-hidden transform-gpu"
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (mousePosition.x - rect.left - rect.width / 2) * -0.1;
                  const y = (mousePosition.y - rect.top - rect.height / 2) * -0.1;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Meet the Team
                  <span className="group-hover:rotate-12 transition-transform duration-300">👋</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>

            

            {/* Enhanced Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-[fadeIn_2s_ease-out_2.5s] opacity-0 [animation-fill-mode:forwards]">
              <div className="flex flex-col items-center space-y-3 text-muted-foreground group cursor-pointer">
                <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                  Discover More
                </span>
                <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center group-hover:border-primary transition-colors duration-300 relative overflow-hidden">
                  <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce group-hover:bg-accent transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .will-transform {
            will-change: transform, opacity;
          }

          .animate-spin-slow {
            animation: spin-slow linear infinite;
          }

          button {
            transform-style: preserve-3d;
          }

          .transform-gpu {
            transform: translateZ(0);
          }
        `}</style>
      </section>
    </div>
  );
}