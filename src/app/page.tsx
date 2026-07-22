"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";

// Below the fold sections lazy loaded
const TrustBar = dynamic(() => import("@/components/TrustBar"), { ssr: false });
const AccredianEdge = dynamic(() => import("@/components/AccredianEdge"), { ssr: false });
const DomainExpertise = dynamic(() => import("@/components/DomainExpertise"), { ssr: false });
const CourseSegmentation = dynamic(() => import("@/components/CourseSegmentation"), { ssr: false });
const StrategicSkillEnhancement = dynamic(() => import("@/components/StrategicSkillEnhancement"), { ssr: false });
const CatFramework = dynamic(() => import("@/components/CatFramework"), { ssr: false });
const DeliverResults = dynamic(() => import("@/components/DeliverResults"), { ssr: false });
const FaqAccordion = dynamic(() => import("@/components/FaqAccordion"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

// Modal form loaded only when needed
const EnquiryModal = dynamic(() => import("@/components/EnquiryModal"), { ssr: false });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-white" suppressHydrationWarning>
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
