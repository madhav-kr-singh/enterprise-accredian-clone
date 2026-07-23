"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Users2, LineChart, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function ValuePillars() {
  const pillars = [
    {
      title: "Co-Designed Curriculums",
      description: "Custom courses designed with academics and industry experts to address your team's specific toolsets and tech stacks.",
      icon: BookOpen,
    },
    {
      title: "Active Live Mentorship",
      description: "Interactive cohorts led by leading corporate mentors who offer real-world advice, practical feedback, and direct Q&A.",
      icon: Users2,
    },
    {
      title: "L&D Analytics Dashboard",
      description: "Track performance analytics, assessment scores, cohort progress, and skills verification in real-time.",
      icon: LineChart,
    },
    {
      title: "Adaptive Learning Engine",
      description: "Smart content pathways and personalized modules designed to meet engineers, managers, and designers at their skill levels.",
      icon: Cpu,
    },
  ];

  return (
    <section id="pillars" className="bg-bg-section py-16 lg:py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text & Cards Column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                The Accredian Advantage
              </h2>
              <p className="mt-4 text-base text-text-secondary">
                We bridge the gap between academic theory and enterprise application. Discover how our learning operations system optimizes upskilling.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="p-5 rounded-2xl bg-white border border-border/80 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center p-2 rounded-lg bg-primary/10 text-primary mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Diagram Illustration Column */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-3xl bg-white border border-border p-4 sm:p-6 shadow-sm overflow-hidden"
            >
              {/* Desktop Image */}
              <div className="hidden sm:block relative w-full aspect-[4/3]">
                <Image
                  src="/asset/imgi_9_accredian-edge-usp-v3.svg"
                  alt="Accredian Edge USP Desktop diagram"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              {/* Mobile Image */}
              <div className="block sm:hidden relative w-full aspect-[3/4]">
                <Image
                  src="/asset/imgi_10_accredian-edge-usp-mobile.svg"
                  alt="Accredian Edge USP Mobile diagram"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
