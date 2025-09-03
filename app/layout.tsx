import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Reveal from "@/components/anim/Reveal"



export const metadata: Metadata = {
  title: "DigitalCraft - Web Development & Digital Marketing Agency",
  description:
    "Transform your digital presence with expert web development and digital marketing solutions. We craft stunning websites and powerful marketing strategies that drive growth.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      
        {children}
      </body>
    </html>
  )
}
