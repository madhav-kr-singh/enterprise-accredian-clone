"use client";

import React from "react";
import Image from "next/image";

export default function TrustBar() {
  const logos = [
    { name: "Reliance", src: "/asset/imgi_3_rel.png" },
    { name: "HCL", src: "/asset/imgi_4_hcl.png" },
    { name: "IBM", src: "/asset/imgi_5_ibm.png" },
    { name: "CRIF", src: "/asset/imgi_6_crif.png" },
    { name: "ADP", src: "/asset/imgi_7_adp.svg" },
    { name: "Bayer", src: "/asset/imgi_8_bayer.svg" },
  ];

  return (
    <section id="clients" className="bg-white py-12 border-t border-border/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Our Proven <span className="text-primary">Partnerships</span>
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-text-secondary/70">
            Successful Collaborations With the Industry's Best
          </p>
        </div>

        {/* Infinite Scrolling Marquee for Desktop & Mobile (Double-track for seamless loop) */}
        <div className="relative w-full overflow-x-hidden pt-2">
          {/* Gradients to fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Sliding Track Wrapper */}
          <div className="flex animate-marquee w-max">
            {/* Track 1 */}
            <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12 flex-shrink-0">
              {logos.map((logo, idx) => (
                <div
                  key={`${logo.name}-t1-${idx}`}
                  className="relative flex-shrink-0 h-12 w-[110px] md:h-14 md:w-[160px] transition-transform duration-300 transform hover:scale-105"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Track 2 (identical copy) */}
            <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12 flex-shrink-0">
              {logos.map((logo, idx) => (
                <div
                  key={`${logo.name}-t2-${idx}`}
                  className="relative flex-shrink-0 h-12 w-[110px] md:h-14 md:w-[160px] transition-transform duration-300 transform hover:scale-105"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
