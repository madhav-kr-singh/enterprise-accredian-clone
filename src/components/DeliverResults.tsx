"use client";

import React from "react";
import { LineChart, Monitor, MonitorPlay } from "lucide-react";
import { motion } from "framer-motion";

export default function DeliverResults() {
  const steps = [
    {
      id: 1,
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs.",
      icon: LineChart,
    },
    {
      id: 2,
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals.",
      icon: Monitor,
    },
    {
      id: 3,
      title: "Flexible Program Delivery",
      description: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: MonitorPlay,
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            How We <span className="text-primary">Deliver Results</span> That Matter?
          </h2>
          <p className="mt-4 text-sm font-semibold text-text-secondary">
            A Structured Three-Step Approach to <span className="text-primary">Skill Development</span>
          </p>
        </div>

        {/* 3 Step Cards Grid (stacked on mobile, row on desktop/laptop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-md md:max-w-7xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center p-6 bg-[#F4F8FF] border border-[#C4DCFF]/60 rounded-2xl shadow-sm hover:shadow-md transition-all group mx-4 md:mx-0"
              >
                {/* Left and right decorative capsules (ponytail: responsive height proportion matching mockup) */}
                <div className="absolute left-[-3px] top-1/2 -translate-y-1/2 w-[6px] h-[50%] bg-primary rounded-full" />
                <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-[6px] h-[50%] bg-primary rounded-full" />

                {/* Circular Number Badge (top-left) */}
                <div className="absolute top-4 left-4 h-7 w-7 flex items-center justify-center rounded-full border border-primary/30 bg-white text-xs font-bold text-text-primary">
                  {step.id}
                </div>

                {/* Centered Blue Icon Badge */}
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-text-primary">
                  {step.title}
                </h3>
                
                {/* Description (visible on desktop only) */}
                <p className="hidden md:block mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
