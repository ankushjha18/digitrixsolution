"use client";

import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import emailjs from "emailjs-com";

interface PopupFormProps {
  trigger: ReactNode;
}

export default function PopupForm({ trigger }: PopupFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Services
  const services = [
    "Web Development",
    "Digital Marketing",
    "Mobile Development",
    "SEO Optimization",
    "UI/UX Design",
    "Analytics & Insights",
  ];

  // Form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_35l4m7w",   // from EmailJS
        "template_h2kn4mp",  // from EmailJS
        e.currentTarget,
        "VOf9Q1CreblzdZh0b"    // from EmailJS
      )
      .then(
        () => {
          alert("✅ Your request has been sent! We’ll contact you soon.");
          setIsOpen(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("❌ Failed to send. Try again later.");
        }
      );
  };

  const Modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-[95%] md:w-[900px] lg:w-[1000px] flex flex-col md:flex-row 
                   bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-20 text-white bg-black/60 rounded-full p-2 hover:bg-black transition"
        >
          <X size={20} />
        </button>

        {/* Left Image with text */}
        <div className="relative w-full md:w-1/2 h-48 md:h-auto">
          <img
            src="https://img.freepik.com/free-vector/relax-concept-illustration_114360-5600.jpg"
            alt="Relax illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/40">
            <h2 className="text-xl md:text-3xl font-bold text-white">
              YOU, SIT AND RELAX
            </h2>
            <p className="mt-1 text-base md:text-lg text-gray-200">
              LET US DO OUR WORK <br /> JUST A MOMENT!
            </p>
            <p className="mt-3 text-lg md:text-2xl font-extrabold text-yellow-400 bg-black/60 px-3 py-1 rounded-lg">
              WE’LL CALL YOU BACK
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 bg-[#0a0a3c] text-white p-8 sm:p-10">
          <h2 className="text-2xl font-bold mb-6">Request a Callback</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="full_name"
              placeholder="Full Name*"
              required
              className="w-full px-4 py-3 rounded-md border-b border-gray-500 bg-transparent focus:outline-none focus:border-orange-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              required
              className="w-full px-4 py-3 rounded-md border-b border-gray-500 bg-transparent focus:outline-none focus:border-orange-400"
            />
            <div className="flex gap-2">
              <select
                name="country"
                className="w-1/3 px-3 py-3 rounded-md border-b border-gray-500 bg-transparent focus:outline-none focus:border-orange-400"
              >
                <option className="text-black">India</option>
                <option className="text-black">USA</option>
                <option className="text-black">UK</option>
              </select>
              <input
                type="text"
                name="phone"
                placeholder="Phone Num*"
                required
                className="flex-1 px-4 py-3 rounded-md border-b border-gray-500 bg-transparent focus:outline-none focus:border-orange-400"
              />
            </div>

            {/* Services checklist */}
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-white">Services you are interested in:</span>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      className="accent-orange-500 w-4 h-4"
                    />
                    <span className="text-white">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full px-4 py-3 bg-orange-500 font-semibold hover:bg-yellow-500 transition-colors duration-300"
            >
              → SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="inline-block">
        {trigger}
      </div>
      {mounted && isOpen && createPortal(Modal, document.body)}
    </>
  );
}
