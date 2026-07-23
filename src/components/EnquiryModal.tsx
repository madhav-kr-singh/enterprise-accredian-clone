"use client";

import React, { useState } from "react";
import { X, CheckCircle, Loader2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    deliveryMode: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Custom Dropdown Open States
  const [domainOpen, setDomainOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);

  const domainOptions = [
    "Product & Innovation",
    "Gen-AI Mastery",
    "Leadership Elevation",
    "Tech & Data Insights",
    "Operations Excellence",
    "Digital Enterprise",
    "Fintech Innovation Lab",
    "Strategy & Growth",
  ];

  const deliveryOptions = [
    "Online Cohort Live",
    "In-Person Corporate Classroom",
    "Hybrid (Live + In-Person)",
    "Self-paced + Guided Sandbox",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Prepend India code if not present
    const formattedPhone = formData.phone.trim().startsWith("+91")
      ? formData.phone.trim()
      : `+91 ${formData.phone.trim()}`;

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: formattedPhone,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          domain: "",
          candidates: "",
          deliveryMode: "",
          location: "",
        });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#12081F]/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md md:max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-border flex flex-col md:flex-row z-10"
          >
            <div className="hidden md:block md:w-1/2 relative min-h-[580px] self-stretch">
              <div className="absolute inset-0 z-20" onContextMenu={(e) => e.preventDefault()} />
              <Image
                src="https://res.cloudinary.com/dpr83w1ub/image/upload/v1784745101/enquiry_slbyog.webp"
                alt="Business discussions in a glass building"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover pointer-events-none select-none"
              />
            </div>

            {/* Right Column: Form */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white relative">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-5 flex-shrink-0">
                <h3 className="text-xl font-bold text-text-primary">
                  Enquire Now
                </h3>
                <button
                  onClick={onClose}
                  className="rounded-lg p-1.5 text-text-secondary hover:bg-border/50 hover:text-text-primary transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form Body */}
              <div className="flex-grow">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center h-full"
                  >
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mb-4">
                      <CheckCircle className="h-10 w-10 animate-bounce" />
                    </div>
                    <h4 className="text-2xl font-bold text-text-primary">Enquiry Submitted!</h4>
                    <p className="mt-2 text-sm text-text-secondary max-w-xs">
                      Thank you for reaching out. Our enterprise coordinators will review your L&D enquiry and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSuccess(false);
                        onClose();
                      }}
                      className="mt-6 w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary text-white hover:bg-primary-dark font-semibold transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 text-xs rounded-lg bg-red-50 text-red-600 border border-red-200">
                        {error}
                      </div>
                    )}

                    {/* Inputs wrapper (auto-height for mobile to fit all content without scrolling) */}
                    <div className="space-y-4 pb-2">
                      
                      {/* Name */}
                      <div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter Name"
                          className="w-full border-b border-border/80 px-0 py-2 text-sm text-text-primary placeholder:text-text-secondary/80 focus:border-primary focus:outline-none transition-all bg-transparent rounded-none"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter Email"
                          className="w-full border-b border-border/80 px-0 py-2 text-sm text-text-primary placeholder:text-text-secondary/80 focus:border-primary focus:outline-none transition-all bg-transparent rounded-none"
                        />
                      </div>

                      {/* Phone */}
                      <div className="relative flex items-center border-b border-border/80 focus-within:border-primary transition-all py-0.5">
                        <div className="flex items-center gap-1 text-sm text-text-primary select-none pr-2.5">
                          <span className="text-base leading-none">🇮🇳</span>
                          <span className="text-[9px] text-text-secondary/60">▼</span>
                          <span className="font-semibold text-sm ml-1">+91</span>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          className="w-full py-1.5 text-sm text-text-primary placeholder:text-text-secondary/80 focus:outline-none bg-transparent rounded-none"
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Enter company name"
                          className="w-full border-b border-border/80 px-0 py-2 text-sm text-text-primary placeholder:text-text-secondary/80 focus:border-primary focus:outline-none transition-all bg-transparent rounded-none"
                        />
                      </div>

                      {/* Select Domain (Custom Hamburger Card Dropdown) */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => {
                            setDomainOpen(!domainOpen);
                            setDeliveryOpen(false);
                          }}
                          className="w-full border-b border-border/80 px-0 py-2 text-sm text-left flex items-center justify-between text-text-primary focus:border-primary focus:outline-none transition-all bg-transparent rounded-none cursor-pointer"
                        >
                          <span className={formData.domain ? "text-text-primary font-semibold" : "text-text-secondary/80 font-normal"}>
                            {formData.domain || "Select Domain"}
                          </span>
                          <ChevronDown className={`h-4 w-4 text-text-secondary/50 transition-transform duration-200 ${domainOpen ? "rotate-180" : ""}`} />
                        </button>

                        {domainOpen && (
                          <>
                            {/* Backdrop click away */}
                            <div className="fixed inset-0 z-10" onClick={() => setDomainOpen(false)} />
                            
                            {/* Dropdown list card */}
                            <div className="absolute z-20 left-0 right-0 mt-1.5 bg-white border border-border/50 rounded-2xl shadow-xl p-2.5 max-h-[200px] overflow-y-auto no-scrollbar animate-in fade-in slide-in-from-top-1 duration-150">
                              {domainOptions.map((option) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, domain: option }));
                                    setDomainOpen(false);
                                  }}
                                  className="w-full text-left px-3.5 py-2 text-sm font-semibold rounded-xl text-text-primary hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer block"
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {/* No. of candidates */}
                      <div>
                        <input
                          type="number"
                          name="candidates"
                          id="candidates"
                          value={formData.candidates}
                          onChange={handleChange}
                          placeholder="Enter No. of candidates"
                          className="w-full border-b border-border/80 px-0 py-2 text-sm text-text-primary placeholder:text-text-secondary/80 focus:border-primary focus:outline-none transition-all bg-transparent rounded-none"
                        />
                      </div>

                      {/* Mode of Delivery (Custom Hamburger Card Dropdown) */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => {
                            setDeliveryOpen(!deliveryOpen);
                            setDomainOpen(false);
                          }}
                          className="w-full border-b border-border/80 px-0 py-2 text-sm text-left flex items-center justify-between text-text-primary focus:border-primary focus:outline-none transition-all bg-transparent rounded-none cursor-pointer"
                        >
                          <span className={formData.deliveryMode ? "text-text-primary font-semibold" : "text-text-secondary/80 font-normal"}>
                            {formData.deliveryMode || "Select Mode of Delivery *"}
                          </span>
                          <ChevronDown className={`h-4 w-4 text-text-secondary/50 transition-transform duration-200 ${deliveryOpen ? "rotate-180" : ""}`} />
                        </button>

                        {deliveryOpen && (
                          <>
                            {/* Backdrop click away */}
                            <div className="fixed inset-0 z-10" onClick={() => setDeliveryOpen(false)} />
                            
                            {/* Dropdown list card */}
                            <div className="absolute z-20 left-0 right-0 mt-1.5 bg-white border border-border/50 rounded-2xl shadow-xl p-2.5 max-h-[160px] overflow-y-auto no-scrollbar animate-in fade-in slide-in-from-top-1 duration-150">
                              {deliveryOptions.map((option) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, deliveryMode: option }));
                                    setDeliveryOpen(false);
                                  }}
                                  className="w-full text-left px-3.5 py-2 text-sm font-semibold rounded-xl text-text-primary hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer block"
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Location */}
                      <div>
                        <input
                          type="text"
                          name="location"
                          id="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Eg: Gurgoan, Delhi, India"
                          className="w-full border-b border-border/80 px-0 py-2 text-sm text-text-primary placeholder:text-text-secondary/80 focus:border-primary focus:outline-none transition-all bg-transparent rounded-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-4 flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-md hover:bg-primary-dark transition-all disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
