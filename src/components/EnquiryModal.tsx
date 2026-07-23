"use client";

import React, { useState } from "react";
import { X, CheckCircle, Loader2, ChevronDown, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const countries = [
  { name: "India", code: "in", dialCode: "+91" },
  { name: "Indonesia", code: "id", dialCode: "+62" },
  { name: "Iran", code: "ir", dialCode: "+98" },
  { name: "Iraq", code: "iq", dialCode: "+964" },
  { name: "United States", code: "us", dialCode: "+1" },
  { name: "United Kingdom", code: "gb", dialCode: "+44" },
  { name: "Canada", code: "ca", dialCode: "+1" },
  { name: "Australia", code: "au", dialCode: "+61" },
  { name: "Singapore", code: "sg", dialCode: "+65" },
  { name: "United Arab Emirates", code: "ae", dialCode: "+971" },
  { name: "Germany", code: "de", dialCode: "+49" },
  { name: "France", code: "fr", dialCode: "+33" },
];

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
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Custom Dropdown Open States
  const [domainOpen, setDomainOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

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
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Custom Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.name)) newErrors.name = "Name should only contain letters and spaces";
    
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i.test(formData.email)) newErrors.email = "Please enter a valid email address";
    
    if (!formData.phone.trim()) newErrors.phone = "Contact number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = "Please enter a valid 10-digit mobile number";
    
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    else if (formData.company.trim().length < 2) newErrors.company = "Company name must be at least 2 characters";
    
    if (!formData.domain) newErrors.domain = "Course domain is required";
    if (!formData.candidates.trim()) newErrors.candidates = "Number of candidates are required";
    if (!formData.deliveryMode) newErrors.deliveryMode = "Mode of delivery is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setSubmitError("");

    // Prepend selected country code if not present
    const formattedPhone = formData.phone.trim().startsWith(selectedCountry.dialCode)
      ? formData.phone.trim()
      : `${selectedCountry.dialCode} ${formData.phone.trim()}`;

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
        setSubmitError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setSubmitError("Failed to connect to the server. Please try again.");
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
                      Got it, thanks!
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {submitError && (
                      <div className="p-3 text-xs rounded-lg bg-red-50 text-red-600 border border-red-200">
                        {submitError}
                      </div>
                    )}

                    {/* Inputs wrapper (auto-height for mobile to fit all content without scrolling) */}
                    <div className="space-y-4 pb-2">
                      
                      {/* Name */}
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full border-b ${errors.name ? 'border-red-500' : 'border-border/80'} px-0 py-2 text-sm text-text-primary focus:outline-none transition-all bg-transparent rounded-none ${errors.name ? '' : 'focus:border-primary'}`}
                        />
                        {!formData.name && (
                          <div className="absolute left-0 top-2 text-sm text-text-secondary/80 pointer-events-none select-none">
                            Enter Name <span className="font-bold">*</span>
                          </div>
                        )}
                        {errors.name && (
                          <div className="flex items-center gap-1.5 mt-1 text-red-500">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span className="text-xs">{errors.name}</span>
                          </div>
                        )}
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-border/80'} px-0 py-2 text-sm text-text-primary focus:outline-none transition-all bg-transparent rounded-none ${errors.email ? '' : 'focus:border-primary'}`}
                        />
                        {!formData.email && (
                          <div className="absolute left-0 top-2 text-sm text-text-secondary/80 pointer-events-none select-none">
                            Enter Email <span className="font-bold">*</span>
                          </div>
                        )}
                        {errors.email && (
                          <div className="flex items-center gap-1.5 mt-1 text-red-500">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span className="text-xs">{errors.email}</span>
                          </div>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <div className={`relative flex items-center border-b ${errors.phone ? 'border-red-500' : 'border-border/80 focus-within:border-primary'} transition-all py-0.5`}>
                          <div 
                            className="flex shrink-0 items-center gap-1 text-sm text-text-primary select-none pr-2.5 cursor-pointer hover:bg-black/5 py-1 rounded transition-colors relative"
                            onClick={() => {
                              setCountryOpen(!countryOpen);
                              setDomainOpen(false);
                              setDeliveryOpen(false);
                              setCountrySearch("");
                            }}
                          >
                            <img src={`https://flagcdn.com/w20/${selectedCountry.code}.png`} alt={selectedCountry.name} className="w-[18px] h-[13px] object-cover rounded-[1px]" />
                            <span className={`text-[9px] text-text-secondary/60 transition-transform duration-200 ${countryOpen ? "rotate-180" : ""}`}>▼</span>
                            <span className="font-semibold text-sm ml-1">{selectedCountry.dialCode}</span>
                            
                            {/* Country Dropdown */}
                            {countryOpen && (
                              <>
                                <div className="fixed inset-0 z-10" onClick={(e) => { e.stopPropagation(); setCountryOpen(false); }} />
                                <div className="absolute z-20 top-full left-0 mt-2 w-[240px] bg-[#f5f5f5] rounded-lg shadow-xl border border-border/50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150 cursor-default" onClick={e => e.stopPropagation()}>
                                  <div className="p-3 bg-white border-b border-border/50">
                                    <input
                                      type="text"
                                      placeholder="search"
                                      value={countrySearch}
                                      onChange={(e) => setCountrySearch(e.target.value)}
                                      className="w-full px-2 py-1.5 text-sm text-text-secondary border border-border/60 rounded focus:outline-none focus:border-primary bg-white"
                                    />
                                  </div>
                                  <div className="max-h-[160px] overflow-y-auto no-scrollbar pb-1 bg-white">
                                    {countries
                                      .filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()) || c.dialCode.includes(countrySearch))
                                      .map(c => (
                                        <button
                                          key={c.code}
                                          type="button"
                                          onClick={() => {
                                            setSelectedCountry(c);
                                            setCountryOpen(false);
                                          }}
                                          className={`w-full text-left px-3 py-2 text-sm flex items-center gap-3 hover:bg-black/5 transition-colors ${selectedCountry.code === c.code ? "bg-black/5" : ""}`}
                                        >
                                          <img src={`https://flagcdn.com/w20/${c.code}.png`} alt={c.name} className="w-[20px] h-[14px] object-cover rounded-[1px]" />
                                          <span className="font-medium text-text-primary">{c.name}</span>
                                          <span className="text-text-secondary ml-1">{c.dialCode}</span>
                                        </button>
                                      ))}
                                    {countries.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()) || c.dialCode.includes(countrySearch)).length === 0 && (
                                      <div className="px-3 py-4 text-sm text-text-secondary text-center">No results found</div>
                                    )}
                                  </div>
                                </div>
                              </>
                            )}
                          </div>

                          <div className="relative w-full">
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full py-1.5 text-sm text-text-primary focus:outline-none bg-transparent rounded-none"
                            />
                            {!formData.phone && (
                              <div className="absolute left-0 top-1.5 text-sm text-text-secondary/80 pointer-events-none select-none">
                                Enter mobile number <span className="font-bold">*</span>
                              </div>
                            )}
                          </div>
                        </div>
                        {errors.phone && (
                          <div className="flex items-center gap-1.5 mt-1 text-red-500">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span className="text-xs">{errors.phone}</span>
                          </div>
                        )}
                      </div>

                      {/* Company Name */}
                      <div className="relative">
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full border-b ${errors.company ? 'border-red-500' : 'border-border/80'} px-0 py-2 text-sm text-text-primary focus:outline-none transition-all bg-transparent rounded-none ${errors.company ? '' : 'focus:border-primary'}`}
                        />
                        {!formData.company && (
                          <div className="absolute left-0 top-2 text-sm text-text-secondary/80 pointer-events-none select-none">
                            Enter company name <span className="font-bold">*</span>
                          </div>
                        )}
                        {errors.company && (
                          <div className="flex items-center gap-1.5 mt-1 text-red-500">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span className="text-xs">{errors.company}</span>
                          </div>
                        )}
                      </div>

                      {/* Select Domain (Custom Hamburger Card Dropdown) */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => {
                            setDomainOpen(!domainOpen);
                            setDeliveryOpen(false);
                          }}
                          className={`w-full border-b ${errors.domain ? 'border-red-500' : 'border-border/80'} px-0 py-2 text-sm text-left flex items-center justify-between text-text-primary focus:outline-none transition-all bg-transparent rounded-none cursor-pointer ${errors.domain ? '' : 'focus:border-primary'}`}
                        >
                          <span className={formData.domain ? "text-text-primary font-semibold" : "text-text-secondary/80 font-normal"}>
                            {formData.domain || (
                              <span className="flex items-center gap-1 text-sm text-text-secondary/80 pointer-events-none select-none">
                                Select Domain <span className="font-bold">*</span>
                              </span>
                            )}
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
                                    if (errors.domain) setErrors(prev => ({ ...prev, domain: "" }));
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
                        {errors.domain && (
                          <div className="flex items-center gap-1.5 mt-1 text-red-500">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span className="text-xs">{errors.domain}</span>
                          </div>
                        )}
                      </div>

                      {/* No. of candidates */}
                      <div className="relative">
                        <input
                          type="number"
                          name="candidates"
                          id="candidates"
                          value={formData.candidates}
                          onChange={handleChange}
                          className={`w-full border-b ${errors.candidates ? 'border-red-500' : 'border-border/80'} px-0 py-2 text-sm text-text-primary focus:outline-none transition-all bg-transparent rounded-none ${errors.candidates ? '' : 'focus:border-primary'}`}
                        />
                        {!formData.candidates && (
                          <div className="absolute left-0 top-2 text-sm text-text-secondary/80 pointer-events-none select-none">
                            Enter No. of candidates <span className="font-bold">*</span>
                          </div>
                        )}
                        {errors.candidates && (
                          <div className="flex items-center gap-1.5 mt-1 text-red-500">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span className="text-xs">{errors.candidates}</span>
                          </div>
                        )}
                      </div>

                      {/* Mode of Delivery (Custom Hamburger Card Dropdown) */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => {
                            setDeliveryOpen(!deliveryOpen);
                            setDomainOpen(false);
                          }}
                          className={`w-full border-b ${errors.deliveryMode ? 'border-red-500' : 'border-border/80'} px-0 py-2 text-sm text-left flex items-center justify-between text-text-primary focus:outline-none transition-all bg-transparent rounded-none cursor-pointer ${errors.deliveryMode ? '' : 'focus:border-primary'}`}
                        >
                          <span className={formData.deliveryMode ? "text-text-primary font-semibold" : "text-text-secondary/80 font-normal"}>
                            {formData.deliveryMode || (
                              <span className="flex items-center gap-1 text-sm text-text-secondary/80 pointer-events-none select-none">
                                Select Mode of Delivery <span className="font-bold">*</span>
                              </span>
                            )}
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
                                    if (errors.deliveryMode) setErrors(prev => ({ ...prev, deliveryMode: "" }));
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
                        {errors.deliveryMode && (
                          <div className="flex items-center gap-1.5 mt-1 text-red-500">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span className="text-xs">{errors.deliveryMode}</span>
                          </div>
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
