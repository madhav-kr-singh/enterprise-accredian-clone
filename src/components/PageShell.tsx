"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";

import TrustBar from "@/components/TrustBar";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import StrategicSkillEnhancement from "@/components/StrategicSkillEnhancement";
import CatFramework from "@/components/CatFramework";
import DeliverResults from "@/components/DeliverResults";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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
