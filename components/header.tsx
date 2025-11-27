"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import React from "react";


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"/>
        <div className="flex items-center justify-between h-16">
        <Link href="/" className="flex-shrink-0 group cursor-pointer">
          <img 
             src="/logo_digitrix.png"  // put your logo inside /public/logo.png
              alt="Logo"
              className="h-21 w-auto transition-transform duration-300 group-hover:scale-110"
           />
        </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative transition-all duration-300 font-medium group py-2 ${
                      isScrolled
                        ? pathname === item.href
                          ? "text-[#ff914d]"
                          : "text-black hover:text-[#ff914d]"
                        : pathname === item.href
                          ? "text-[#ff914d]"
                          : "text-white hover:text-[#ff914d]"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${
                        pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>

                </li>
              ))}
            </ul>
          </nav>
{/* get stared button */}
            <div className="hidden md:block px-8">
              <Button
                className="group rounded-full px-8 py-3 bg-[#723fa3] text-white font-semibold
                          hover:bg-[#ff914d] hover:shadow-lg transition-all duration-300"
              >
                <span className="flex space-x-0.5">
                  {"Get   Started".split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block transform transition-transform duration-300
                                group-hover:-translate-y-1 group-hover:delay-[calc(var(--i)*50ms)]"
                      style={{ "--i": i } as React.CSSProperties}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </Button>
            </div>




          {/* Mobile menu button */}
          
              <div className="md:hidden flex items-center space-x-2">
                 {/* Toggle button */}
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-md text-white bg-[#723fa3] hover:bg-[#ff914d] transition-colors"
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </button>
               </div>
               
    </div>
    {/* Mobile Menu Dropdown */}
    {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="space-y-2 px-4 py-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 px-3 rounded-md transition-colors ${
                    pathname === item.href
                      ? "text-[#ff914d] font-semibold"
                      : "text-gray-700 hover:text-[#ff914d]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Button className="w-full bg-[#723fa3] text-white hover:bg-[#ff914d]">
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
  </header>
  )
}
