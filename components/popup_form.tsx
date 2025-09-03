"use client";

import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface PopupFormProps {
  trigger: ReactNode;
}

export default function PopupForm({ trigger }: PopupFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen, mounted]);

  const services = [
    "Web Development",
    "Digital Marketing",
    "Mobile Development",
    "SEO Optimization",
    "UI/UX Design",
    "Analytics & Insights",
  ];

  const Modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      {/* Centered modal container */}
      <div
        className="relative w-[95%] md:w-[900px] lg:w-[1000px] flex flex-col md:flex-row 
                   bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-1 hover:bg-black"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {/* Left side: image + text */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://img.freepik.com/free-vector/relax-concept-illustration_114360-5600.jpg"
            alt="Relax illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              YOU, SIT AND RELAX
            </h2>
            <p className="mt-2 text-lg text-gray-200">
              LET US DO OUR WORK <br /> JUST A MOMENT!
            </p>
            <p className="mt-4 text-xl md:text-2xl font-extrabold text-yellow-400 bg-black/60 px-4 py-2 rounded-lg">
              WE’LL CALL YOU BACK
            </p>
          </div>
        </div>

        {/* Right side: form */}
        <div className="w-full md:w-1/2 bg-[#0a0a3c] text-white p-8 sm:p-10">
          <h2 className="text-2xl font-bold mb-6">Request a Callback</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full px-4 py-3 rounded-md border-b border-gray-500 bg-transparent focus:outline-none focus:border-orange-400"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full px-4 py-3 rounded-md border-b border-gray-500 bg-transparent focus:outline-none focus:border-orange-400"
            />
            <div className="flex gap-2">
              <select className="w-1/3 px-3 py-3 rounded-md border-b border-gray-500 bg-transparent focus:outline-none focus:border-orange-400">
                <option className="text-black">Country</option>
                <option className="text-black">India</option>
                <option className="text-black">USA</option>
              </select>
              <input
                type="text"
                placeholder="Phone Num*"
                className="flex-1 px-4 py-3 rounded-md border-b border-gray-500 bg-transparent focus:outline-none focus:border-orange-400"
              />
            </div>

            {/* Services checklist */}
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-white">Services you are interested in:</span>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                    <span className="text-white">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full rounded-full px-4 py-3 bg-orange-500 font-semibold hover:bg-yellow-500 transition-colors duration-300"
            >
              → SUBMIT
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-300">
            Want to join Digtrix? Explore{" "}
            <span className="text-orange-400 cursor-pointer">career opportunities</span>.
          </p>
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
