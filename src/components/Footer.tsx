"use client";

import React from "react";
import Image from "next/image";

interface FooterProps {
  onEnquireClick: () => void;
}

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051c-.059 1.28-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer({ onEnquireClick }: FooterProps) {
  return (
    <footer className="bg-white border-t border-border/80 pt-12 pb-8 text-text-secondary text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo & Socials Left, Enquire Button Right */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b border-border/60">
          <div className="space-y-5">
            <Image
              src="/asset/imgi_1_logo.webp"
              alt="Accredian Logo"
              width={140}
              height={36}
              className="h-9 w-auto object-contain"
            />
            {/* Social Icons row (no borders, matching user mockup layout) */}
            <div className="flex space-x-5 items-center text-text-secondary/80">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <FacebookIcon className="h-5.5 w-5.5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="h-5.5 w-5.5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <TwitterIcon className="h-5.5 w-5.5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <InstagramIcon className="h-5.5 w-5.5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
                <YoutubeIcon className="h-5.5 w-5.5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1.5 mt-2 sm:mt-0">
            <button
              onClick={onEnquireClick}
              className="rounded-xl bg-primary hover:bg-primary-dark text-white px-7 py-3 text-sm font-bold shadow-md hover:shadow-primary/10 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              Enquire Now
            </button>
            <span className="text-[11px] font-bold text-text-secondary/70 pl-1 sm:pl-0">
              Speak with our Advisor
            </span>
          </div>
        </div>

        {/* Mid Row: Columns */}
        <div className="flex flex-col md:flex-row justify-between gap-8 py-8 w-full">
          {/* Accredian Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider">
              Accredian
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#" className="hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Why Accredian</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (no icons, exactly matching user mockup layout) */}
          <div className="space-y-4 md:max-w-md">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm font-semibold leading-relaxed">
              <div>
                <span className="text-text-primary">Email us: </span>
                <a href="mailto:enterprise@accredian.com" className="text-primary hover:text-primary-dark transition-colors">
                  enterprise@accredian.com
                </a>
              </div>
              <div>
                <span className="text-text-primary">Office Address: </span>
                <span className="text-text-secondary">
                  4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/60 pt-6 text-center text-xs text-text-secondary/70">
          <p>© 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
