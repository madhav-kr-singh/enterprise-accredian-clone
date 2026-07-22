"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, Layers, Target, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DomainSpecializationsProps {
  onEnquireClick: () => void;
}

export default function DomainSpecializations({ onEnquireClick }: DomainSpecializationsProps) {
  const domains = [
    {
      id: "product-mgmt",
      title: "Product Management & Project Strategy",
      image: "https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745101/imgi_11_project-management-v2_y04smn.webp",
      audience: "Product Managers, Project Managers, Consultants, Growth Marketers",
      modules: [
        "Product Roadmap & Backlog Orchestration",
        "User Research & Data-Driven Prioritization",
        "Agile Methodology & Scrum Deliveries",
        "Market Fit Strategy & User Retention Optimization"
      ],
      description: "Equip your teams with modern product-led growth strategies, design thinking, and high-velocity project delivery systems.",
    },
    {
      id: "tech-data",
      title: "Tech & Data Insights (Data Science & AI)",
      image: "https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745101/imgi_13_data-science-v2_hs3syd.webp",
      audience: "Software Engineers, Data Engineers, Business Analysts, Technical Architects",
      modules: [
        "Data Engineering Pipeline Construction",
        "Generative AI & LLM Model Implementation",
        "Advanced Analytics & Predictive Models",
        "Cloud Data Warehousing & Architecture"
      ],
      description: "Build deep technical expertise in machine learning, big data operations, cloud architectures, and practical artificial intelligence.",
    },
    {
      id: "digital-trans",
      title: "Digital Enterprise & Transformation",
      image: "https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745101/imgi_12_digital-transformation-v2_w69ld1.webp",
      audience: "Operations Leaders, IT Managers, Digital Strategists, Enterprise Architects",
      modules: [
        "Legacy Code Modernization & Migration",
        "Cybersecurity Operations & Compliance",
        "DevSecOps CI/CD Automation Pipelines",
        "Omnichannel Customer Engagement Platforms"
      ],
      description: "Empower your business units to lead organizational change, digital-first processes, and automated technical operations.",
    },
    {
      id: "senior-mgmt",
      title: "Senior Management & Leadership Elevation",
      image: "https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745102/imgi_14_senior-management-v2_cfjjzj.webp",
      audience: "VP/Director of Engineering, Chief Information Officers, CHROs, Emerging Leaders",
      modules: [
        "Emotional Intelligence (EQ) & Team Trust",
        "Strategic Resource Allocation & Budgeting",
        "Change Management in Hybrid Workforces",
        "Corporate Governance & Measurable ROI Plans"
      ],
      description: "Elevate your tech leaders and directors into strategic partners capable of managing budgets, leading team transformations, and driving performance.",
    },
  ];

  const [activeTab, setActiveTab] = useState(domains[0].id);
  const activeDomain = domains.find((d) => d.id === activeTab) || domains[0];

  return (
    <section id="domains" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Domain Specializations
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            Tailor-made academic curricula designed to empower teams in critical technology and corporate management domains.
          </p>
        </div>

        {/* Tab Buttons / Nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-border pb-6">
          {domains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setActiveTab(domain.id)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === domain.id
                  ? "bg-primary text-white shadow-md shadow-primary/10"
                  : "bg-bg-section text-text-secondary hover:bg-border/60 hover:text-text-primary"
              }`}
            >
              {domain.title.split(" & ")[0]} {/* Shortened label */}
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div className="bg-bg-section rounded-3xl border border-border p-6 sm:p-10 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Info Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1 bg-accent/15 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <Target className="h-3.5 w-3.5" />
                  Upskilling Domain
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight">
                  {activeDomain.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {activeDomain.description}
                </p>

                {/* Target Audience */}
                <div className="p-4 rounded-xl bg-white border border-border/80 flex gap-3 items-start">
                  <Layers className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">Target Audience</h4>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">{activeDomain.audience}</p>
                  </div>
                </div>

                {/* Key Modules */}
                <div>
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Key Training Modules
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                    {activeDomain.modules.map((module) => (
                      <li key={module} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onEnquireClick}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-white px-6 py-3.5 text-sm font-bold shadow-md hover:shadow-primary/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    Enquire for Cohort
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Illustration Column */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-border shadow-sm p-6 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={activeDomain.image}
                    alt={activeDomain.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
