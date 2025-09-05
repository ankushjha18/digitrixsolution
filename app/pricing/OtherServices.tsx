"use client";

import Reveal from "@/components/anim/Reveal";
import Link from "next/link";
import { Code, Smartphone, Megaphone, PenTool, BarChart2, Search } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 mb-3 text-primary" />,
    name: "Web Development",
    description:
      "Build modern and responsive websites with cutting-edge technologies. Fast, scalable, and secure web solutions.",
    link: "/services/web-development",
  },
  {
    icon: <Smartphone className="w-8 h-8 mb-3 text-primary" />,
    name: "App Development",
    description:
      "Build high-performance mobile apps for iOS and Android. Scalable, secure, and user-friendly applications that engage customers.",
    link: "/services/app-development",
  },
  {
    icon: <Megaphone className="w-8 h-8 mb-3 text-primary" />,
    name: "Digital Marketing",
    description:
      "Enhance your brand presence with result-driven digital strategies. From social media to campaigns, we help you grow online.",
    link: "/services/digital-marketing",
  },
  {
    icon: <Search className="w-8 h-8 mb-3 text-primary" />,
    name: "SEO Optimization",
    description:
      "Increase visibility on search engines with proven SEO tactics. Drive organic traffic and climb to the top of search rankings.",
    link: "/services/seo-optimization",
  },
  {
    icon: <PenTool className="w-8 h-8 mb-3 text-primary" />,
    name: "UI/UX Design",
    description:
      "Deliver beautiful and intuitive experiences with user-focused designs. Wireframes, prototypes, and polished visuals included.",
    link: "/services/ui-ux-design",
  },
  {
    icon: <BarChart2 className="w-8 h-8 mb-3 text-primary" />,
    name: "Analytics & Insights",
    description:
      "Turn raw data into powerful insights. Monitor KPIs, track performance, and make smarter decisions with advanced analytics.",
    link: "/services/analytics-insights",
  },
];

export default function OtherServices() {
  return (
    <section className="relative py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Other <span className="text-primary">Services Pricing</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.2}>
              <div
                className="bg-card border rounded-2xl shadow-md flex flex-col 
                transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-8"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">{service.name}</h3>

                {/* Description */}
                <p className="text-muted-foreground flex-1 mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <Link href={service.link}>
                  <button className="w-full py-3 rounded-xl font-semibold transition bg-[#723fa3] text-white hover:bg-[#ff914d]">
                    View Details
                  </button>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
