"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CatFramework() {
  return (
    <section id="cat" className="bg-[#F8FAFC] py-5 lg:py-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-2">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            The <span className="text-primary">CAT Framework</span>
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-text-secondary/70">
            Our Proven Approach to Learning Excellence
          </p>
        </div>

        {/* CAT Diagram Representation */}
        <div className="flex items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl lg:max-w-5xl p-2 sm:p-4 overflow-hidden"
          >
            <div className="relative w-full aspect-[16/7] min-h-[220px]">
              <Image
                src="/asset/imgi_16_catV2.svg"
                alt="CAT framework diagram: Concept, Application, Tools"
                fill
                priority
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
