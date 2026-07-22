"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      logo: "/asset/imgi_7_adp.svg",
      name: "ADP",
      quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      id: 2,
      logo: "/asset/imgi_8_bayer.svg",
      name: "Bayer",
      quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
  ];

  const [mobileIndex, setMobileIndex] = useState(0);

  return (
    <section id="testimonials" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Testimonials from <span className="text-primary">Our Partners</span>
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-text-secondary/70">
            What <span className="text-primary">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Desktop Layout: Side by Side (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col bg-white border border-border p-8 rounded-3xl shadow-sm relative min-h-[220px] justify-between group hover:shadow-md transition-shadow"
            >
              {/* Logo Header */}
              <div className="relative h-10 w-24 mb-4">
                <Image
                  src={t.logo}
                  alt={`${t.name} Logo`}
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed italic mb-4">
                "{t.quote}"
              </p>

              {/* Quote Accent Icon */}
              <div className="absolute bottom-6 right-6 text-primary/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                <Quote className="h-10 w-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout: Carousel (Hidden on Desktop) */}
        <div className="md:hidden max-w-md mx-auto relative px-2">
          <div className="flex flex-col bg-white border border-border p-6 rounded-2xl shadow-sm min-h-[240px] justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Logo Header */}
                <div className="relative h-8 w-20">
                  <Image
                    src={testimonials[mobileIndex].logo}
                    alt={`${testimonials[mobileIndex].name} Logo`}
                    fill
                    className="object-contain object-left"
                  />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed italic">
                  "{testimonials[mobileIndex].quote}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileIndex(index)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  mobileIndex === index ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
