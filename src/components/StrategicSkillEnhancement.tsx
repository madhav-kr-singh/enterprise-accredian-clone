"use client";

import React from "react";
import Image from "next/image";
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function StrategicSkillEnhancement() {
  const cards = [
    {
      title: "Tech Professionals",
      description: "Enhance expertise, embrace tech, drive innovation.",
      icon: MonitorCheck,
    },
    {
      title: "Non-Tech Professionals",
      description: "Adapt digitally, collaborate in tech environments.",
      icon: MonitorX,
    },
    {
      title: "Emerging Professionals",
      description: "Develop powerful skills for rapid career growth.",
      icon: GraduationCap,
    },
    {
      title: "Senior Professionals",
      description: "Strengthen leadership, enhance strategic decisions.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Blue Banner */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#1A73E8] text-white p-6 sm:p-10 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading + Image */}
            <div className="lg:col-span-5 flex flex-col justify-between lg:self-stretch space-y-6 lg:space-y-0">
              <div className="space-y-2">
                <span className="text-sm font-bold uppercase tracking-widest text-[#EBF3FF] opacity-90">
                  Who Should Join?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Strategic Skill Enhancement
                </h2>
              </div>

              {/* Photo representation - flush bottom and left on desktop, hidden on mobile (ponytail: layout optimization matching mobile ui.png) */}
              <div className="relative w-full max-w-[280px] aspect-[1.1] mx-auto lg:-ml-10 lg:mr-auto hidden lg:block lg:-mb-16 self-end mt-4">
                <Image
                  src="/asset/imgi_15_imagehuman.png"
                  alt="Upskilling professionals team"
                  fill
                  className="object-contain brightness-105"
                />
              </div>
            </div>

            {/* Right Column: Grid of 4 target segments (Directly on blue background) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 lg:gap-x-12 lg:gap-y-12">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="flex flex-row items-start space-x-4 sm:flex-col sm:space-x-0 sm:space-y-3"
                  >
                    <div className="text-white flex-shrink-0">
                      <Icon className="h-10 w-10 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#EBF3FF]/90 leading-relaxed max-w-xs">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
