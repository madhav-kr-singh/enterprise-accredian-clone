"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AccredianEdge() {
  return (
    <section id="edge" className="bg-[#F8FAFC] py-16 lg:py-24 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            The <span className="text-primary">Accredian Edge</span>
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-text-secondary/90">
            Key Aspects of Our Strategic Training
          </p>
        </div>

        {/* Diagram Wrapper */}
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl overflow-hidden"
          >
            {/* Desktop Graphic */}
            <div className="hidden sm:block w-full">
              <img
                src="/asset/imgi_9_accredian-edge-usp-v3.svg"
                alt="Accredian Edge strategic layout"
                width={1280}
                height={720}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Mobile Graphic */}
            <div className="block sm:hidden w-full">
              <img
                src="/asset/imgi_10_accredian-edge-usp-mobile.svg"
                alt="Accredian Edge mobile layout"
                width={640}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
