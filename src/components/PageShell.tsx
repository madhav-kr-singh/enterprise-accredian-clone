"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";

// Below-the-fold sections — SSR enabled so crawlers see full HTML
const TrustBar = dynamic(() => import("@/components/TrustBar"));
const AccredianEdge = dynamic(() => import("@/components/AccredianEdge"));
const DomainExpertise = dynamic(() => import("@/components/DomainExpertise"));
const CourseSegmentation = dynamic(() => import("@/components/CourseSegmentation"));
const StrategicSkillEnhancement = dynamic(() => import("@/components/StrategicSkillEnhancement"));
const CatFramework = dynamic(() => import("@/components/CatFramework"));
const DeliverResults = dynamic(() => import("@/components/DeliverResults"));
const FaqAccordion = dynamic(() => import("@/components/FaqAccordion"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));
const Footer = dynamic(() => import("@/components/Footer"));

// Modal — kept client-only (never crawled, needs browser APIs)
const EnquiryModal = dynamic(() => import("@/components/EnquiryModal"), {
  ssr: false,
});

export default function PageShell() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white" suppressHydrationWarning>
      <Header />
      <main className="flex-grow">
        <Hero onEnquireClick={() => setIsModalOpen(true)} />
        <StatsBand />
        <TrustBar />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <StrategicSkillEnhancement />
        <CatFramework />
        <DeliverResults />
        <FaqAccordion onEnquireClick={() => setIsModalOpen(true)} />
        <Testimonials />
        <FinalCTA onContactClick={() => setIsModalOpen(true)} />
      </main>
      <Footer onEnquireClick={() => setIsModalOpen(true)} />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
