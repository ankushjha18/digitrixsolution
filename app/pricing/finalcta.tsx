"use client";

import Link from "next/link";
import Reveal from "@/components/anim/Reveal";
import PopupForm from "@/components/popup_form";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#ff914d]">
      <Reveal>
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Ready to Bring Your Project to Life?
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white mb-8">
          Let's schedule a free 15-minute consultation to discuss your needs.
        </p>

        {/* CTA Button */}

        <PopupForm
            trigger = {
          <button className="px-8 py-4 bg-white text-[#ff914d] font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-[#723fa3] hover:text-white">
            Schedule a Free Call
          </button>
            }
            />
      </div>
      </Reveal>
    </section>
  );
}
