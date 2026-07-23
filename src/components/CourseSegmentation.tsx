"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CourseSegmentation() {
  const segments = [
    {
      title: "Program Specific",
      description: "Certificate, Executive, Post Graduate Certificate",
      image: "https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745101/imgi_11_project-management-v2_y04smn.webp",
    },
    {
      title: "Industry Specific",
      description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image: "https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745101/imgi_12_digital-transformation-v2_w69ld1.webp",
    },
    {
      title: "Topic Specific",
      description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image: "https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745101/imgi_13_data-science-v2_hs3syd.webp",
    },
    {
      title: "Level Specific",
      description: "Senior Leadership, Mid-Career Professionals, Freshers",
      image: "https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745102/imgi_14_senior-management-v2_cfjjzj.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(true);
  const extendedSegments = [...segments, segments[0]];

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (activeIndex === segments.length) return;
      setActiveIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeIndex, segments.length]);

  React.useEffect(() => {
    if (activeIndex === segments.length) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 500); // Wait for transition duration-500 to finish
      return () => clearTimeout(resetTimer);
    }
  }, [activeIndex, segments.length]);

  React.useEffect(() => {
    if (activeIndex === 0 && !isTransitioning) {
      const enableTimer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(enableTimer);
    }
  }, [activeIndex, isTransitioning]);

  return (
    <section className="bg-[#F8FAFC] py-2 lg:py-24 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Tailored <span className="text-primary">Course Segmentation</span>
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-text-secondary/90">
            Explore Custom-fit Courses Designed to Address Every Professional Focus
          </p>
        </div>

        {/* Mobile View: Auto-scrolling Carousel */}
        <div className="block md:hidden max-w-sm mx-auto">
          <div className="relative overflow-hidden w-full rounded-2xl bg-white border border-border/80 shadow-sm">
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-500 ease-out" : "transition-none"}`}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {extendedSegments.map((segment, idx) => (
                <div key={`${segment.title}-${idx}`} className="w-full flex-shrink-0 flex flex-col">
                  {/* Image Header */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-bg-section">
                    <Image
                      src={segment.image}
                      alt={segment.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Title (blue text centered, matching screenshot) */}
                  <div className="bg-white py-6 flex items-center justify-center border-t border-border/40">
                    <h3 className="text-xl font-bold text-primary text-center">
                      {segment.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-1 mt-4">
            {segments.map((_, idx) => {
              const displayDotIndex = activeIndex % segments.length;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setActiveIndex(idx);
                  }}
                  className="w-11 h-11 flex items-center justify-center"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      displayDotIndex === idx ? "bg-primary w-5" : "bg-neutral-300 w-2.5"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop View: 4-Column Grid Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {segments.map((segment, idx) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="flex flex-col bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              {/* Image Header */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-bg-section">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>

              {/* Body Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {segment.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {segment.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
