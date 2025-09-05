"use client";

import { Check, X } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

const packages = [
  {
    name: "Basic",
    price: "₹9,999",
    description: "Perfect for startups & individuals.",
    features: [
      { text: "One landing page", included: true },
      { text: "Modern UI/UX design", included: true },
      { text: "One free revision", included: true },
      { text: "Lead capture form", included: true },
      { text: "Delivery in 4-5 working days", included: true },
      { text: "Payment gateway integration", included: false },
      { text: "E-commerce functionality", included: false },
    ],
    cta: "Get Started",
    highlight: false,
    buttonColor: "bg-[#723fa3] text-white hover:bg-[#ff914d]",
  },
  {
    name: "Intermediate",
    price: "₹19,999",
    description: "Best for growing businesses.",
    features: [
      { text: "Complete e-commerce website", included: true },
      { text: "Admin panel / dashboard", included: true },
      { text: "Shopping cart + checkout system", included: true },
      { text: "Payment gateway integration", included: true },
      { text: "1 month free bug fixes", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Custom API integrations", included: false },
    ],
    cta: "Choose Plan",
    highlight: true,
    buttonColor: "bg-[#723fa3] text-white hover:bg-[#ff914d]",
  },
  {
    name: "Premium",
    price: "₹39,999",
    description: "For scaling brands with advanced needs.",
    features: [
      { text: "Fully customized website", included: true },
      { text: "Advanced UI/UX design", included: true },
      { text: "Custom admin panel", included: true },
      { text: "API + database integrations", included: true },
      { text: "Up to 30 pages & scalability", included: true },
      { text: "1 month free support", included: true },
      { text: "Dedicated account manager", included: true },
    ],
    cta: "Go Premium",
    highlight: false,
    buttonColor: "bg-[#723fa3] text-white hover:bg-[#ff914d]",
  },
];

export default function PricingPackages() {
  return (
    <section className="relative py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Core <span className="text-primary">Pricing Packages</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <Reveal key={i} delay={i * 0.25}>
              <div
                className={`relative bg-card border rounded-2xl shadow-md flex flex-col
                transition-transform duration-300 hover:scale-110 hover:shadow-2xl ${
                  pkg.highlight ? "md:scale-105 md:-mt-4 z-10" : ""
                }`}
              >
                {/* Header */}
                <div
                  className="py-4 rounded-t-2xl"
                  style={{ backgroundColor: "rgba(255,145,77,0.15)" }}
                >
                  <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  {pkg.highlight && (
                    <span className="absolute top-2 right-2 bg-[#ff914d] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="text-3xl font-bold py-6">{pkg.price}</div>

                {/* Description */}
                <p className="text-muted-foreground px-6">{pkg.description}</p>

                {/* Features */}
                <ul className="flex-1 text-left px-8 py-6 space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start space-x-2 ${
                        !feature.included ? "opacity-60 line-through" : ""
                      }`}
                    >
                      {feature.included ? (
                        <Check className="w-5 h-5 text-[#4da400] mt-1" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mt-1" />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="px-6 pb-8">
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition ${pkg.buttonColor}`}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Custom Project Option */}
        <div className="mt-12">
          <p className="text-lg">
            Need something more?{" "}
            <span className="font-semibold text-primary">Custom Project</span>{" "}
            options are available. Contact us for tailored solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
