import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Target } from "lucide-react"
import Reveal from "./anim/Reveal"
import { motion } from "framer-motion"
import { Shield,  Headphones, Globe2, TrendingUp } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Clients", value: "150+" },
  { icon: Award, label: "Projects Completed", value: "300+" },
  { icon: Clock, label: "Years Experience", value: "8+" },
  { icon: Target, label: "Success Rate", value: "98%" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#723fa3]">
       <Reveal>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">About DigitalCraft</h2>
                <p className="text-lg text-white mb-6 text-pretty">
                  We are a passionate team of digital experts dedicated to helping businesses succeed online. With years of
                  experience in web development and digital marketing, we combine creativity with technical expertise to
                  deliver exceptional results.
                </p>
                <p className="text-lg text-white mb-8 text-pretty">
                  Our mission is to transform your digital presence through innovative solutions that drive growth, engage
                  your audience, and deliver measurable ROI. We believe in building long-term partnerships with our clients
                  based on trust, transparency, and results.
                </p>
                <Reveal delay={0.4}>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <Card key={index} className="text-center">
                        <CardContent className="p-6">
                          <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                          <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </Reveal>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary mb-4">8+</div>
                      <div className="text-xl font-semibold text-foreground mb-2">Years of Excellence</div>
                      <div className="text-muted-foreground">Delivering digital solutions that matter</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
    </section>
  )
}

{/* why choose us */}

const features = [
  {
    title: "Reliable & Affordable Solutions",
    description:
      "We deliver high-quality and affordable website solutions that help your business grow without compromise.",
    icon: TrendingUp,
  },
  {
    title: "Expert Team",
    description:
      "Our dedicated professionals continuously improve your digital presence with cutting-edge strategies.",
    icon: Users,
  },
  {
    title: "24/7 Support & Assistance",
    description:
      "We are always available to assist and ensure your website stays secure and runs without interruptions.",
    icon: Headphones,
  },
  {
    title: "Security & Confidentiality",
    description:
      "Your data and business security are our top priorities, protected at every step of the process.",
    icon: Shield,
  },
  {
    title: "Global Reach, Local Expertise",
    description:
      "We combine international standards with local insights to provide tailored solutions for every business.",
    icon: Globe2,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#f5f1fa] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#723fa3] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1.2 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#ff914d] blur-3xl"
      />

      <div className="relative z-10 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#1c1c1c]"
        >
          Why Choose <span className="text-[#723fa3]">Us?</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-20 h-1 bg-[#ff914d] mx-auto mt-3 rounded-full"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <feature.icon className="w-10 h-10 text-[#723fa3] mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

