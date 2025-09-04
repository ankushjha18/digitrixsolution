"use client";
import { Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer"
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Reveal from "@/components/anim/Reveal";

export default function HeroSection() {
  // Explicitly type form ref
  const form = useRef<HTMLFormElement | null>(null);

  // Union type for status
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    const SERVICE_ID = "service_35l4m7w";
    const TEMPLATE_ID = "template_vtbw5se";
    const PUBLIC_KEY = "VOf9Q1CreblzdZh0b";

    if (!form.current) return; // safety check

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setSubmitStatus("success");
        setIsLoading(false);
        form.current?.reset(); // Reset form safely
      })
      .catch((error) => {
        console.error("Email sending failed:", error.text);
        setSubmitStatus("error");
        setIsLoading(false);
      });
  };


  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
        {/* Header/Navbar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Header />
        </div>
        
        {/* Background animated blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 animate-float">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float delay-1000">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-40"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-500">
          <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in">
              Let's Build Something <br />
              <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-delay">
              Ready to turn your ideas into reality? Let's discuss your project
              and make it happen with innovative design and cutting-edge
              technology.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Send className="mr-2" size={20} />
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 hover:border-orange-400 px-8 py-4 text-lg font-semibold rounded-full bg-transparent hover:bg-orange-500 transition-all duration-300 hover:scale-105 text-black hover:text-white"
              >
                <Phone className="mr-2" size={20} />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ==================Contact Form Section=============== */}
      <section id="contact-form" className="  py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background Elements */}
       <Reveal>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
      
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-900 to-indigo-900 bg-clip-text text-transparent mb-4">
                Let's Start a <span className="text-pink-500">Conversation</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
              </p>
            </div>
        
            <div className="grid gap-15 lg:grid-cols-5 items-stretch">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Info Card */}

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 ">
                  <h3 className="text-2xl font-bold text-slate-800 mb-8 border-b border-slate-200 pb-4">
                    Feel free to reach us
                  </h3>
                  
                  <Reveal delay={0.1}>
                  <div className="space-y-6 items-stretch">
                    {/* Address 1 */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-700 leading-relaxed p-2">
                          New Delhi, India 110018
                        </p>
                      </div>
                    </div>

                    {/* Address 2 */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-700 leading-relaxed p-2">
                            New Delhi, India 110018
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <div>
                        <a href="tel:+918780396536" className="text-slate-700 hover:text-purple-600 transition-colors duration-200 p-2">
                          +917294969479
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div>
                        <a href="info.digitrixsoln@gmail.com" className="p-2 text-slate-700 hover:text-purple-600 transition-colors duration-200">
                          info.digitrixsoln@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  </Reveal>
                </div>
               
                {/* Social Media Card */}
                <Reveal delay={0.2}>
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-8 border-b border-slate-200 pb-4">
                    GET SOCIAL
                  </h3>
                  
                  <div className="flex gap-4">
                    {/* Facebook */}
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-blue-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    {/* Twitter */}
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-sky-100 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <svg className="w-6 h-6 text-sky-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-blue-100 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <svg className="w-6 h-6 text-blue-700 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a 
                      href="https://www.instagram.com/digitrix.solutions/" 
                      className="w-12 h-12 bg-pink-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        className="w-6 h-6 text-pink-600 group-hover:text-white" 
                        fill="currentColor"
                      >
                        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.5A4 4 0 0 0 3.5 7.5v9A4 4 0 0 0 7.5 20.5h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9Zm4.5 3.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                </Reveal>
              </div>
            
            

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 h-full flex flex-col">
                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-xl">
                      <div className="flex items-center">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="font-semibold">Message sent successfully!</span>
                      </div>
                      <p className="mt-2 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-xl">
                      <div className="flex items-center">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        <span className="font-semibold">Failed to send message.</span>
                      </div>
                      <p className="mt-2 text-sm">Please try again or contact us directly.</p>
                    </div>
                  )}

                  <form ref={form} onSubmit={sendEmail} className="space-y-8 flex-1 flex flex-col">
                    {/* Name and Phone Row */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            id="name"
                            name="full_name"
                            type="text"
                            placeholder="John Doe"
                            required
                            disabled={isLoading}
                            className="w-full h-14 px-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 text-slate-800 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 bg-purple-500 rounded-full opacity-50"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            required
                            disabled={isLoading}
                            className="w-full h-14 px-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 text-slate-800 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-50"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email and Country Row */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            required
                            disabled={isLoading}
                            className="w-full h-14 px-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 text-slate-800 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 bg-pink-500 rounded-full opacity-50"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="country" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                          Country
                        </label>
                        <div className="relative">
                          <select
                            id="country"
                            name="country"
                            disabled={isLoading}
                            className="w-full h-14 px-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 text-slate-800 appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <option value="">Select your country</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="IN">India</option>
                            <option value="JP">Japan</option>
                            <option value="BR">Brazil</option>
                            <option value="OTHER">Other</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Services Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                        Services Needed *
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="services"
                          required
                          disabled={isLoading}
                          className="w-full h-14 px-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 text-slate-800 appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">🌐 Web Development</option>
                          <option value="mobile-app">📱 Mobile App Development</option>
                          <option value="ui-ux-design">🎨 UI/UX Design</option>
                          <option value="ecommerce">🛒 E-commerce Solutions</option>
                          <option value="custom-software">⚙️ Custom Software Development</option>
                          <option value="digital-marketing">📈 Digital Marketing</option>
                          <option value="branding">🏷️ Branding & Identity</option>
                          <option value="consulting">💼 Technical Consulting</option>
                          <option value="maintenance">🔧 Website Maintenance</option>
                          <option value="other">✨ Other Services</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                        Project Details *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="project_details"
                          rows={6}
                          placeholder="Tell us about your project goals, timeline, budget, and any specific requirements. The more details you provide, the better we can help you!"
                          required
                          disabled={isLoading}
                          className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 text-slate-800 placeholder-slate-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                        ></textarea>
                        <div className="absolute top-4 right-4">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-50"></div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 mt-auto">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="group w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white font-bold py-5 px-8 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02] transform relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <div className="relative flex items-center justify-center space-x-3">
                          {isLoading ? (
                            <>
                              <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span className="text-lg">Sending Message...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-6 h-6" />
                              <span className="text-lg">Send My Project Details</span>
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            </>
                          )}
                        </div>
                      </button>
                    </div>

                    {/* Additional Info */}
                    <div className="text-center pt-4">
                      <p className="text-sm text-slate-500">
                        🔒 Your information is secure and will never be shared. We'll respond within 24 hours.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
       </Reveal>
      </section>

      {/* =========fotter==============*/}
      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-20px); 
          }
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          opacity: 0;
          animation: fade-in 1s ease-out 0.3s forwards;
        }
        
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 1s ease-out 0.6s forwards;
        }
      `}</style>
    </>
  );
}