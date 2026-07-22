"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface FinalCTAProps {
  onContactClick: () => void;
}

const SupportHeadsetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Headset Arch */}
    <path
      d="M 26 44 C 26 20 74 20 74 44"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
    />
    {/* Left Earpad */}
    <rect x="18" y="38" width="14" height="26" rx="7" fill="currentColor" />
    {/* Right Earpad */}
    <rect x="68" y="38" width="14" height="26" rx="7" fill="currentColor" />
    {/* Smile */}
    <path
      d="M 40 56 C 43 65 57 65 60 56"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    {/* Microphone Arm */}
    <path
      d="M 28 60 C 28 80 50 78 52 70"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default function FinalCTA({ onContactClick }: FinalCTAProps) {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Blue Banner Card with concentric circle background */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#1A73E8] text-white p-8 md:py-16 md:px-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Concentric circles background graphic */}
          <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
            <Image
              src="/asset/imgi_44_cta-circle.svg"
              alt=""
              fill
              className="object-cover object-center scale-150"
            />
          </div>

          {/* Info Group */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-5 md:gap-6 relative z-10">
            {/* White rounded squircle icon box with light blue border */}
            <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-2xl md:rounded-[24px] bg-white border-[3px] md:border-[5px] border-[#82b4f7]/80 shadow-md flex-shrink-0">
              <SupportHeadsetIcon className="h-13 w-13 md:h-16 md:w-16 text-[#1A73E8] -scale-x-100" />
            </div>
            
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight max-w-xl">
                Want to Learn More About Our Training Solutions?
              </h3>
              <p className="text-xs sm:text-sm text-[#EBF3FF] opacity-90 font-medium">
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>

          {/* Action Button Container */}
          <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-end">
            <button
              onClick={onContactClick}
              className="w-full max-w-[280px] md:w-auto inline-flex items-center justify-center gap-1.5 rounded-2xl bg-white hover:bg-[#F4F8FF] text-[#1A73E8] px-8 py-3.5 text-sm font-bold shadow-sm transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Contact Us
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
