"use client";

import React, { useState } from "react";
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
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Menu */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onEnquireClick={openModal} />

        {/* 2. Stats Section */}
        <StatsBand />

        {/* 3. Partnerships Trust Bar */}
        <TrustBar />

        {/* 4. Accredian Edge Diagrams */}
        <AccredianEdge />

        {/* 5. Domain Expertise Grid */}
        <DomainExpertise />

        {/* 6. Course Segmentation */}
        <CourseSegmentation />

        {/* 7. Who Should Join (Strategic Skill Enhancement) */}
        <StrategicSkillEnhancement />

        {/* 8. CAT Framework */}
        <CatFramework />

        {/* 9. Delivery Process Steps */}
        <DeliverResults />

        {/* 10. FAQ Accordions */}
        <FaqAccordion onEnquireClick={openModal} />

        {/* 11. Testimonials Carousel */}
        <Testimonials />

        {/* 12. Final CTA Banner */}
        <FinalCTA onContactClick={openModal} />
      </main>

      {/* Footer */}
      <Footer onEnquireClick={openModal} />

      {/* Portal modal form */}
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
