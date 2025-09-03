"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  duration?: number
  className?: string
}

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  duration = 1,
  className,
}: Props) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: false, amount: 0.1 }}
    >
      {children}
    </motion.div>
  )
}


