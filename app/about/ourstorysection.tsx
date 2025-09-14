"use client";

import { useState, useEffect } from "react";

export default function AboutHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  const features = [
    { icon: "⚡", title: "Innovation First", description: "Cutting-edge solutions" },
    { icon: "🎨", title: "Design Excellence", description: "Beautiful & functional" },
    { icon: "🚀", title: "Fast Delivery", description: "Quick turnaround time" },
    { icon: "🔒", title: "Secure & Reliable", description: "Enterprise-grade security" },
  ];

  return (
    <section id="ourstory" className="relative min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10 overflow-hidden flex items-center">
      {/* Glow Background Following Mouse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(114,63,163,0.2), transparent 40%)`,
        }}
      />

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float-slower" />

      <div className="container relative z-10 mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fadeInUp">
            Our Story 🚀
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed animate-fadeInUp">
            Since <span className="font-semibold text-primary">2019</span>,{" "}
            <span className="font-semibold text-secondary">DigitalCraft</span> has been crafting
            digital experiences that empower businesses. What started as a small team of dreamers has
            grown into a <span className="text-accent font-semibold">full-service agency</span>
            trusted by <span className="font-bold">150+ companies</span>.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed animate-fadeInUp">
            We merge <span className="font-semibold text-primary">technical brilliance</span> with{" "}
            <span className="font-semibold text-secondary">creative magic</span> to transform ideas
            into growth. Every project is a story of <span className="text-accent">innovation</span>,
            <span className="text-primary"> design</span>, and <span className="text-secondary">impact</span>.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-card/80 backdrop-blur-md shadow-md border border-border hover:shadow-2xl hover:scale-[1.03] transition-all duration-500"
              >
                <div className="text-3xl mb-3 group-hover:rotate-12 transition-transform">{f.icon}</div>
                <h4 className="font-semibold text-lg">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Floating Image + Stats */}
        <div className="relative flex flex-col items-center gap-12">
          {/* Floating Team Image */}
          <div
            className="rounded-3xl overflow-hidden shadow-2xl border border-border animate-float-slow will-transform"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="Creative Team"
              className="w-full max-w-lg object-cover"
            />
          </div>

          {/* Stats with Glow Hover */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="relative p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500"
              >
                <h3 className="text-4xl font-bold text-primary">{s.number}</h3>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <span className="absolute inset-0 rounded-xl border border-transparent hover:border-accent/40 transition-all"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
