"use client"
{/* animation scroling */}
import Reveal from "@/components/anim/Reveal"
import { MotionConfig, AnimatePresence, motion } from "framer-motion"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <motion.div
          key={typeof window !== "undefined" ? location.pathname : "server"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
        
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  )
}
