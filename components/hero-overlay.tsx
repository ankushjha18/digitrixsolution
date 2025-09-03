"use client";

import EarthGlobe from "./ui/earth-globe";

export function HeroOverlay() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Globe container (right side, vertically centered) */}
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 opacity-80">
        <EarthGlobe />
      </div>

      {/* Gentle fade so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/60" />
    </div>
  );
}
