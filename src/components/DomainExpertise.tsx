"use client";

import React from "react";
import { Lightbulb, Cpu, Users, BarChart3, Settings, Globe, CreditCard, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function DomainExpertise() {
  const domains = [
    { name: "Product & Innovation Hub", icon: Lightbulb },
    { name: "Gen-AI Mastery", icon: Cpu },
    { name: "Leadership Elevation", icon: Users },
    { name: "Tech & Data Insights", icon: BarChart3 },
    { name: "Operations Excellence", icon: Settings },
    { name: "Digital Enterprise", icon: Globe },
    { name: "Fintech Innovation Lab", icon: CreditCard },
    { name: "Strategy & Growth", icon: TrendingUp },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Our <span className="text-primary">Domain Expertise</span>
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-text-secondary/90">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </div>

        {/* Responsive Layout: 2-column grid on mobile, horizontal row pills on mobile, vertical cards on desktop */}
        <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center md:gap-6 max-w-5xl mx-auto">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="flex flex-row items-center space-x-2.5 p-3 bg-white border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all group cursor-pointer md:flex-col md:items-center md:justify-center md:p-8 md:rounded-2xl md:space-x-0 md:space-y-4 md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)]"
              >
                <div className="p-2 rounded-full bg-[#EBF3FF] text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0 md:p-3 md:mb-0">
                  <Icon className="h-4 w-4 md:h-6 md:w-6" />
                </div>
                <h3 className="text-[11px] sm:text-xs md:text-sm font-bold text-text-primary group-hover:text-primary transition-colors text-left md:text-center leading-tight">
                  {domain.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
