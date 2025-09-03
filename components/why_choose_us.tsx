"use client"

import { motion } from "framer-motion"
import { Shield, Users, Headphones, Globe2, TrendingUp } from "lucide-react"

const features = [
  {
    title: "Reliable & Affordable Solutions",
    description:
      "We aim to provide businesses with reliable and affordable website solutions that don't compromise on quality. Whether it's a small startup or a well-established business, we help improve your online presence by using the latest technologies that fit your specific needs.",
    icon: TrendingUp,
    gradient: "from-blue-400 to-purple-600"
  },
  {
    title: "Expert Team", 
    description:
      "Our team is dedicated to continuously improving every aspect of website development, migration, and security. We focus on delivering efficient results while reducing downtime and making sure your website operates smoothly.",
    icon: Users,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "24/7 Support & Assistance",
    description:
      "Your website's safety and performance are important to us. Our support team is always available to address any issues that come up, ensuring your website stays active and secure around the clock.",
    icon: Headphones,
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    title: "Security & Confidentiality",
    description:
      "Data security and confidentiality are our top priorities. We take every step to ensure your website and business data are kept safe throughout every process.",
    icon: Shield,
    gradient: "from-green-400 to-teal-500"
  },
  {
    title: "Global Reach, Local Expertise",
    description:
      "We work across various time zones to ensure your business receives the best support, no matter where you are. We understand local business needs while delivering expert solutions.",
    icon: Globe2,
    gradient: "from-orange-400 to-red-500"
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative min-h-screen bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digitrix Solution?
              </span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the perfect blend of innovation, reliability, and expertise that sets us apart
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative backdrop-blur-xl bg-gray-50/80 border border-gray-200/50 rounded-3xl p-8 h-full overflow-hidden shadow-lg">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-3xl`}
                  />
                  
                  <div className="relative z-10 mb-6">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4`}
                    >
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-inner">
                        <Icon className="w-8 h-8 text-gray-700" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-10 blur-xl`}
                    style={{ zIndex: -1 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 shadow-sm">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
            <span className="text-gray-600 text-sm font-medium">
              Trusted by 10,000+ businesses worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
