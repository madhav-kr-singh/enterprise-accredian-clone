"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StatsBand() {
  const stats = [
    {
      id: 1,
      number: "10K+",
      label: "Professionals Trained For Exceptional Career Success",
    },
    {
      id: 2,
      number: "200+",
      label: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      id: 3,
      number: "5K+",
      label: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section id="stats" className="bg-white pt-8 pb-12 lg:pt-19 lg:pb-16" suppressHydrationWarning>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Our <span className="text-primary">Track Record</span>
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-text-secondary/70">
            The Numbers Behind Our Success
          </p>
        </div>

        {/* Stats Column Grid */}
        <div className="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-row items-center text-left space-x-4 p-4 bg-[#F8FAFC]/50 border border-border/20 rounded-2xl md:flex-col md:items-center md:text-center md:space-x-0 md:space-y-4 md:p-0 md:bg-transparent md:border-none md:shadow-none"
            >
              {/* Highlight Pill Badge */}
              <div className="inline-flex items-center justify-center bg-[#EBF3FF] text-primary px-4 py-2 rounded-xl text-xl md:text-2xl font-black shadow-sm flex-shrink-0 w-24 md:w-32 h-12 md:h-14">
                {stat.number}
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm font-bold text-text-primary leading-snug md:max-w-xs md:leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
