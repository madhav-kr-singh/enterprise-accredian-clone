"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Stats", href: "#stats" },
    { label: "Clients", href: "#clients" },
    { label: "Accredian Edge", href: "#edge" },
    { label: "CAT", href: "#cat" },
    { label: "How It Works", href: "#process" },
    { label: "FAQs", href: "#faq" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border/80 py-3"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-border/40"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="relative z-50 flex items-center">
            <Image
              src="https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745100/imgi_1_logo_ioxpuz.webp"
              alt="Accredian Logo"
              width={140}  
              height={36}
              priority
              className="h-9 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav (in center/right) */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] font-bold text-text-secondary hover:text-primary transition-colors py-2 px-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-bg-section transition-colors relative z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6 text-text-primary" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (aligned with user screenshot) */}
      {isOpen && (
        <>
          {/* Soft backdrop overlay to dim the hero layout */}
          <div
            className="fixed inset-0 z-30 bg-black/10 backdrop-blur-[1px] lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Floating Card Dropdown */}
          <div
            className="fixed top-[72px] right-4 z-40 w-[200px] bg-white border border-border/50 rounded-2xl shadow-xl p-5 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col space-y-4 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-bold transition-colors block w-fit ${link.label === "Home"
                      ? "text-primary border-b-2 border-primary pb-0.5"
                      : "text-text-primary hover:text-primary"
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
