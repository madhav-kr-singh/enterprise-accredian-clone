"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqAccordionProps {
  onEnquireClick: () => void;
}

export default function FaqAccordion({ onEnquireClick }: FaqAccordionProps) {
  const categories = [
    { id: "course", label: "About the Course" },
    { id: "delivery", label: "About the Delivery" },
    { id: "misc", label: "Miscellaneous" },
  ];

  const faqData: Record<string, { question: string; answer: string }[]> = {
    course: [
      {
        question: "What types of corporate training programs does Accredian offer?",
        answer: "Accredian offers cohort-based upskilling programs in Product Management, Data Science & AI, Gen-AI Mastery, Digital Transformation, and Senior Leadership. Programs can be co-designed to target your organization's specific technical stacks.",
      },
      {
        question: "What domain specializations are available?",
        answer: "Specializations include Product & Innovation Hub, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab.",
      },
    ],
    delivery: [
      {
        question: "How are the cohort schedules structured?",
        answer: "We build our cohorts around active enterprise work schedules. Sessions are typically held over weekends or late evenings, allowing employees to participate without disrupting their daily production deliverables.",
      },
      {
        question: "Can we customize the course syllabus to match our company's toolsets?",
        answer: "Yes, absolutely. Our academic coordinators partner with your engineering or management leaders to insert custom case studies, proprietary sandbox projects, and tool-specific guidelines directly into the curriculum.",
      },
    ],
    misc: [
      {
        question: "How do you measure and report employee learning progress?",
        answer: "L&D leads receive access to our analytics dashboard. Here you can track real-time attendance, assessment milestones, coding lab completions, and final project outcomes. We also provide pre- and post-program competency reviews.",
      },
      {
        question: "What are the university credentials awarded upon completion?",
        answer: "Depending on the selected specialization track, graduates receive accredited digital certificates co-signed by our partner academic institutions (including top IITs, IIMs, and global universities) and verified via blockchain.",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("course");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const tabsRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrows = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const container = tabsRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrows);
      updateArrows();
      window.addEventListener("resize", updateArrows);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateArrows);
      }
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const scrollAmount = 150;
      tabsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setOpenIndex(null); // Reset accordion state when changing tabs
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFaqs = faqData[activeTab] || [];

  return (
    <section id="faq" className="bg-[#F8FAFC] py-16 lg:py-24 border-y border-border/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        {/* Tab Accordion Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Tab Buttons with mobile carousel indicators */}
          <div className="md:col-span-4 relative overflow-hidden md:overflow-visible">
            {/* Inline CSS to hide Webkit scrollbars */}
            <style>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Left Scroll Button Indicator */}
            {showLeftArrow && (
              <div className="absolute left-0 top-0 bottom-2 z-10 flex items-center pr-3 pl-0.5 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent md:hidden animate-in fade-in duration-200">
                <button
                  onClick={() => scrollTabs("left")}
                  className="w-8 h-8 rounded-full bg-white border border-border/40 shadow-md flex items-center justify-center text-text-primary hover:text-primary active:scale-95 transition-all cursor-pointer"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft className="h-4.5 w-4.5" />
                </button>
                <div className="border-r border-border/60 h-8 ml-2" />
              </div>
            )}

            {/* Right Scroll Button Indicator */}
            {showRightArrow && (
              <div className="absolute right-0 top-0 bottom-2 z-10 flex items-center pl-3 pr-0.5 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent md:hidden animate-in fade-in duration-200">
                <div className="border-l border-border/60 h-8 mr-2" />
                <button
                  onClick={() => scrollTabs("right")}
                  className="w-8 h-8 rounded-full bg-white border border-border/40 shadow-md flex items-center justify-center text-text-primary hover:text-primary active:scale-95 transition-all cursor-pointer"
                  aria-label="Scroll Right"
                >
                  <ChevronRight className="h-4.5 w-4.5" />
                </button>
              </div>
            )}

            {/* Scrollable Container */}
            <div
              ref={tabsRef}
              className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 no-scrollbar scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`flex-shrink-0 text-left px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? "bg-white text-primary border-primary/20 shadow-sm"
                      : "bg-transparent text-text-secondary border-transparent hover:text-text-primary hover:bg-white/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Accordion Panels */}
          <div className="md:col-span-8 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {currentFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      {/* Trigger Header */}
                      <button
                        onClick={() => toggleFaq(index)}
                        className="flex w-full items-center justify-between p-5 text-left font-bold text-text-primary hover:text-primary transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="text-xs sm:text-sm leading-snug">{faq.question}</span>
                        <ChevronDown
                          className={`h-4.5 w-4.5 text-text-secondary transition-transform duration-300 flex-shrink-0 ml-4 ${
                            isOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>

                      {/* Expandable Body */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border/50 bg-[#F8FAFC]/50">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Centered CTA Trigger */}
        <div className="flex justify-center pt-2">
          <button
            onClick={onEnquireClick}
            className="rounded-xl bg-primary hover:bg-primary-dark text-white px-8 py-3.5 text-sm font-bold shadow-md hover:shadow-primary/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
