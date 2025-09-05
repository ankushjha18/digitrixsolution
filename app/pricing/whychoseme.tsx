"use client";

import React, { JSX } from "react";
import { Rocket, MessageSquare, Sparkles, CheckCircle } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

type Point = { icon: JSX.Element; title: string; description: string };

const points: Point[] = [
  {
    icon: <Rocket className="w-10 h-10 text-[#4da4e0]" aria-hidden />,
    title: "Fast & Reliable Delivery",
    description: "Projects delivered quickly without compromising on quality.",
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-[#723fa3]" aria-hidden />,
    title: "Continuous Communication",
    description: "Stay updated with clear, transparent communication.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-[#ff914d]" aria-hidden />,
    title: "Unique & Custom Designs",
    description: "Every project is tailored to your brand’s identity.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-[#b4b4b4]" aria-hidden />,
    title: "100% Client Satisfaction",
    description: "Your happiness is the ultimate success metric.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="relative py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose <span className="text-primary">Us?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <Reveal key={i} delay={i * 0.25}>
            <div
              key={i}
              // Important: relative so z-index works, and no ancestor should have transform/overflow:hidden
              className="relative z-0 bg-card border rounded-2xl p-8 flex flex-col items-center text-center
                         transform transition-transform duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                         will-transform hover:scale-[1.06] hover:-translate-y-2 hover:shadow-2xl hover:z-50
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              tabIndex={0}
              role="group"
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </div>
           </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
