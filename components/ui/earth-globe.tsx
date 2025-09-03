"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import GLOBE from "vanta/dist/vanta.globe.min.js"

export default function GlobeBackground({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement | null>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current!,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x00ffff, // globe lines
          color2: 0xff007f, // globe dots
          backgroundColor: 0x000000, // background
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={vantaRef} className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        {children}
      </div>
    </div>
  )
}
