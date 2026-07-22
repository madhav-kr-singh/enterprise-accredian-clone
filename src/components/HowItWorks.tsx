"use client";

import React from "react";
import { Settings, Users, LineChart, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Align & Customize",
      description: "We work directly with your engineering and L&D leaders to align the program with your specific tech stacks and corporate goals.",
      icon: Settings,
    },
    {
      step: "02",
      title: "Active Live Cohorts",
      description: "Learners attend structured live sessions, working through real-world case studies co-delivered by academic experts and global mentors.",
      icon: Users,
    },
    {
      step: "03",
      title: "Continuous Assessment",
      description: "Our learning platform tracks progression metrics, coding labs, and project deliveries to ensure deep material comprehension.",
      icon: LineChart,
    },
    {
      step: "04",
      title: "Credentials & Impact",
      description: "Graduates receive verified university credentials. L&D coordinators get structured reports proving business impact and skill gains.",
      icon: Award,
    },
  ];

  return (
    <section id="process" className="bg-bg-section py-16 lg:py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            The Upskilling Journey
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            A structured, outcome-driven methodology designed to fit enterprise schedules and secure high completion rates.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[57px] left-12 right-12 h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left bg-white p-6 rounded-2xl border border-border shadow-sm relative group hover:shadow-md transition-shadow"
                >
                  {/* Step Bubble */}
                  <div className="flex items-center justify-between w-full mb-6 relative z-10">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-2.5 py-1 rounded-full">
                      Step {step.step}
                    </span>
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
