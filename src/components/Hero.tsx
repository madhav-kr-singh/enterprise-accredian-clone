"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onEnquireClick: () => void;
}

export default function Hero({ onEnquireClick }: HeroProps) {
  return (
    <section id="hero" className="bg-white pt-6 pb-0 sm:pt-40 lg:pt-29 lg:pb-0 overflow-hidden" suppressHydrationWarning>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        {/* Main Hero Card Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#EBF3FF] via-[#F4F8FF] to-white lg:border lg:border-[#E1EEFF] p-6 sm:p-15 sm-py-20 lg:py-14 lg:px-12 lg:pl-12 lg:shadow-sm -mx-4 sm:-mx-6 lg:mx-0 rounded-none lg:rounded-[2rem] border-none shadow-none" suppressHydrationWarning>
          {/* Decorative glowing background elements */}
          <div className="absolute top-0 right-1/4 w-[300px] h-[20px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-4 lg:space-y-9 text-left order-2 lg:order-1">
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-2xl lg:text-[40px] xl:text-[55px] font-extrabold tracking-tight leading-[1.1] text-text-primary"
              >
                Next-Gen <span className="text-primary">Expertise</span> <br />
                For Your <span className="text-primary">Enterprise</span>
              </motion.h1>

              {/* Subheading */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-1.5"
              >
                <p className="text-lg sm:text-xl font-bold text-text-primary leading-snug">
                  Cultivate high-performance
                </p>
                <p className="text-lg sm:text-xl font-bold text-text-primary leading-snug">
                  teams through expert learning.
                </p>
              </motion.div>

              {/* Checklist Group (2x2 Grid on mobile, horizontal flex on desktop) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2 lg:flex lg:flex-wrap lg:gap-x-6 lg:gap-y-3"
              >
                {[
                  "Tailored Solutions",
                  "Industry Insights",
                  "Expert Guidance",
                  "Measurable Impact",
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2 ${
                      item === "Measurable Impact" ? "lg:hidden" : ""
                    }`}
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500 fill-green-500/10 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-text-primary/95 whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Button Action */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-4"
              >
                <button
                  onClick={onEnquireClick}
                  className="w-full sm:w-auto rounded-xl bg-primary hover:bg-primary-dark text-white px-8 py-3.5 text-sm font-bold shadow-md hover:shadow-primary/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  Enquire Now
                </button>
              </motion.div>
            </div>

            {/* Right Image Column Placeholder for Desktop Grid */}
            <div className="lg:col-span-5 hidden lg:block order-2" />

            {/* Mobile Image (inline below text on mobile/tablet, placed first on mobile screen order) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:hidden w-full flex justify-center mt-6 mb-6 order-1"
            >
              <div className="relative w-full max-w-sm aspect-[1.3] h-[250px]">
                <div className="absolute inset-0 z-20" onContextMenu={(e) => e.preventDefault()} />
                <Image
                  src="https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745602/hero-img_gl0tdo.webp"
                  alt="Business professional upskilling partners"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-contain object-center drop-shadow-md pointer-events-none select-none"
                />
              </div>
            </motion.div>
          </div>

          {/* Absolute Desktop Image (extends to card borders without stretching card size) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="absolute right-0 bottom-[-24px] lg:bottom-[-60px] xl:bottom-[-60px] hidden lg:block w-[48%] xl:w-[52%] h-[150%] xl:h-[125%] z-10 pointer-events-none"
          >
            <div className="absolute inset-0 z-20" onContextMenu={(e) => e.preventDefault()} />
            <Image
              src="https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745602/hero-img_gl0tdo.webp"
              alt="Business professional upskilling partners"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-contain object-bottom object-right drop-shadow-lg pointer-events-none select-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
