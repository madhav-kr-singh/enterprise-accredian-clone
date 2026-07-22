"use client";

import React, { useState } from "react";
import { CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "1-10",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          teamSize: "1-10",
          message: "",
        });
      } else {
        setError(data.message || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      setError("Server connection failure. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquire" className="relative overflow-hidden bg-bg-dark text-white py-16 lg:py-24">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Header Texts */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
              Get Expert Guidance for Your Team's Success!
            </h2>
            <p className="text-sm sm:text-base text-text-inverse/80 leading-relaxed font-light">
              Speak with our corporate upskilling strategists today. We will help you align curricula, match industry mentors, and set up a pilot cohort for your organization.
            </p>

            <div className="hidden lg:flex flex-col gap-4 text-xs text-text-inverse/70 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>Custom pilot program opportunities available.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>Competency reports included with all corporate accounts.</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white text-text-primary rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mb-6">
                  <CheckCircle className="h-10 w-10 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Enquiry Submitted!</h3>
                <p className="mt-3 text-sm text-text-secondary max-w-md">
                  Thank you for your interest. One of our enterprise partnership managers will contact you within 24 hours to schedule a diagnostic session.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 w-full sm:w-auto px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-text-primary border-b border-border pb-3">
                  Enterprise Enquiry Form
                </h3>

                {error && (
                  <div className="p-3 text-xs rounded-lg bg-red-50 text-red-600 border border-red-200">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cta-name" className="block text-[10px] font-bold text-text-primary uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="cta-name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border border-border px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-primary focus:outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-email" className="block text-[10px] font-bold text-text-primary uppercase tracking-wider mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="cta-email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full rounded-lg border border-border px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-primary focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cta-phone" className="block text-[10px] font-bold text-text-primary uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="cta-phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-lg border border-border px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-primary focus:outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-company" className="block text-[10px] font-bold text-text-primary uppercase tracking-wider mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="cta-company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full rounded-lg border border-border px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-primary focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                  <div className="sm:col-span-1">
                    <label htmlFor="cta-teamSize" className="block text-[10px] font-bold text-text-primary uppercase tracking-wider mb-1">
                      Team Size *
                    </label>
                    <select
                      name="teamSize"
                      id="cta-teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border px-3 py-2 text-sm text-text-primary focus:border-primary focus:outline-none bg-white cursor-pointer"
                    >
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-1000">201-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="cta-message" className="block text-[10px] font-bold text-text-primary uppercase tracking-wider mb-1">
                      Skills of Interest
                    </label>
                    <input
                      type="text"
                      name="message"
                      id="cta-message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Gen-AI, Agile Development, Data Analytics"
                      className="w-full rounded-lg border border-border px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-primary focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-accent hover:bg-[#E05620] text-white px-4 py-3 text-sm font-bold shadow-lg hover:shadow-accent/25 transition-all disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
