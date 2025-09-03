"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    title: "Chatbot Assistance",
    description: "Start a chat with our 24/7 chatbot to immediately connect with a project manager.",
  },
  {
    title: "Ticket Creation",
    description: "Once we understand your requirements, we create a ticket assigned to the right expert.",
  },
  {
    title: "Expert Resolution",
    description: "Our team works swiftly to fix issues, providing updates at every step until resolved.",
  },
  {
    title: "Ongoing Support",
    description: "After resolution, we provide ongoing support & maintenance for smooth operations.",
  },
]

export default function SupportTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100px", "end end"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section className="relative py-20 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            How Our <span className="text-blue-600">Support System</span> Works
          </h2>
          <p className="text-lg text-gray-500">
            Simplifying Work with Easy and Reliable Support System
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-center">
          {/* Static gray line (background) */}
          <div className="absolute top-0 left-4 lg:left-1/2 lg:-translate-x-1/2 w-1 bg-gray-200 rounded-full h-full"></div>

          {/* Animated gradient line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 left-4 lg:left-1/2 lg:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full h-full"
          />

          {/* Steps */}
          <div className="flex flex-col space-y-20 w-full max-w-4xl">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex gap-6 ${
                  // On mobile → always row, on desktop → alternate
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-row`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Dot on line */}
                <motion.div
                  className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-4 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />

                {/* Step card */}
                <div className="ml-12 lg:ml-0 bg-blue-50 p-6 rounded-xl shadow-md w-full max-w-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
