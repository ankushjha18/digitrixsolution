"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Palette, BarChart, ShoppingBag, LineChart } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Crafting responsive and high-performance websites with modern tech.",
    icon: <Code size={40} />,
    color: "from-blue-400 to-cyan-400",
    tags: ["Next.js", "React", "TailwindCSS", "Node.js"]
  },
  {
    title: "Mobile Development",
    description: "Building fast, secure, and user-friendly mobile applications.",
    icon: <Smartphone size={40} />,
    color: "from-purple-400 to-pink-400",
    tags: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    title: "UI / UX Design",
    description: "Designing sleek, user-centered interfaces with aesthetic appeal.",
    icon: <Palette size={40} />,
    color: "from-green-400 to-emerald-400",
    tags: ["Figma", "Sketch", "Wireframes", "Prototyping"]
  },
  {
    title: "SEO & Digital Marketing",
    description: "Boosting visibility and engagement through smart marketing strategies.",
    icon: <BarChart size={40} />,
    color: "from-yellow-400 to-orange-400",
    tags: ["SEO", "Content", "Google Ads", "Social Media"]
  },
  {
    title: "E-commerce Solutions",
    description: "End-to-end online store solutions with secure payment gateways.",
    icon: <ShoppingBag size={40} />,
    color: "from-pink-400 to-rose-400",
    tags: ["Shopify", "WooCommerce", "Stripe", "PayPal"]
  },
  {
    title: "Analytics & Dashboards",
    description: "Real-time insights with stunning, interactive dashboards.",
    icon: <LineChart size={40} />,
    color: "from-indigo-400 to-blue-400",
    tags: ["Power BI", "Tableau", "Google Analytics", "Custom BI"]
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      {/* Pastel Glows in Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.04, rotate: 0.5 }}
            className="relative group bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl 
                       transition-shadow duration-700 ease-in-out hover:scale-105"
          >
            {/* Hover Glow */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} 
              opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700`}
            ></div>

              {/* Icon */}
              <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${service.color} text-white w-fit shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-pink-400 hover:to-violet-400 hover:text-white transition-all duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Cool underline on hover */}
              <span className="block mt-4 w-0 group-hover:w-24 h-[2px] bg-gradient-to-r from-pink-500 to-violet-500 transition-all duration-700"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
